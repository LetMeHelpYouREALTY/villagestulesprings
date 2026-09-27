"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { ExternalLink, MapPin } from "lucide-react";

import { CuratedAmenityList } from "@/components/amenities/curated-amenity-list";
import { Button } from "@/components/ui/button";
import {
  AMENITY_CATEGORIES,
  AMENITY_SEARCH_RADIUS_M,
  COMMUNITY_MAP_CENTER,
  COMMUNITY_MAP_LABEL,
  type AmenityCategoryId,
  communityMapEmbedUrl,
} from "@/config/community-map";
import { getGoogleMapsApiKey, getGoogleMapsMapId } from "@/config/env";

type MapPlaceResult = {
  id: string;
  name: string;
  address?: string;
  rating?: number;
  lat: number;
  lng: number;
  directionsUrl: string;
};

type AmenityMapClientProps = {
  variant?: "preview" | "full";
  showFilters?: boolean;
};

const MAP_HEIGHT_CLASS = {
  preview: "h-[380px] md:h-[420px]",
  full: "h-[420px] md:h-[560px]",
} as const;

function loadMapsScript(apiKey: string): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Maps unavailable during SSR"));
  }
  if (typeof window.google?.maps?.importLibrary === "function") {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-amenity-map="true"]');
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Maps script failed")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.dataset.amenityMap = "true";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places&loading=async`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Maps script failed"));
    document.head.appendChild(script);
  });
}

function placeDirectionsUrl(lat: number, lng: number, name: string): string {
  const destination = encodeURIComponent(`${name}@${lat},${lng}`);
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
}

function placeDisplayName(name: unknown): string {
  if (!name) return "Place";
  if (typeof name === "string") return name;
  if (typeof name === "object" && name !== null && "text" in name) {
    const text = (name as { text?: string }).text;
    if (text) return text;
  }
  return "Place";
}

async function searchNearbyPlaces(
  categoryId: AmenityCategoryId,
  center: google.maps.LatLngLiteral,
): Promise<MapPlaceResult[]> {
  const category = AMENITY_CATEGORIES.find((item) => item.id === categoryId);
  if (!category) return [];

  try {
    const placesLib = (await google.maps.importLibrary("places")) as google.maps.PlacesLibrary;
    const PlaceCtor = placesLib.Place;
    if (PlaceCtor?.searchNearby) {
      const request = {
        fields: ["displayName", "location", "formattedAddress", "rating", "googleMapsURI"],
        locationRestriction: {
          center,
          radius: AMENITY_SEARCH_RADIUS_M,
        },
        includedPrimaryTypes: [...category.primaryTypes],
        maxResultCount: 15,
      };
      const response = await PlaceCtor.searchNearby(request);
      return (response.places ?? []).map((place, index) => {
        const location = place.location;
        const lat = location?.lat() ?? center.lat;
        const lng = location?.lng() ?? center.lng;
        const name = placeDisplayName(place.displayName);
        return {
          id: `${categoryId}-${index}-${lat}-${lng}`,
          name,
          address: place.formattedAddress ?? undefined,
          rating: place.rating ?? undefined,
          lat,
          lng,
          directionsUrl: place.googleMapsURI ?? placeDirectionsUrl(lat, lng, name),
        };
      });
    }
  } catch {
    // Fall through to legacy PlacesService.
  }

  return legacyNearbySearch(category.primaryTypes[0] ?? "point_of_interest", center);
}

function legacyNearbySearch(type: string, center: google.maps.LatLngLiteral): Promise<MapPlaceResult[]> {
  return new Promise((resolve) => {
    const host = document.createElement("div");
    const map = new google.maps.Map(host, { center, zoom: 13 });
    const service = new google.maps.places.PlacesService(map);
    service.nearbySearch(
      {
        location: center,
        radius: AMENITY_SEARCH_RADIUS_M,
        type,
      },
      (results, status) => {
        if (status !== google.maps.places.PlacesServiceStatus.OK || !results) {
          resolve([]);
          return;
        }
        resolve(
          results.map((result, index) => {
            const lat = result.geometry?.location?.lat() ?? center.lat;
            const lng = result.geometry?.location?.lng() ?? center.lng;
            const name = result.name ?? "Place";
            return {
              id: result.place_id ?? `legacy-${index}`,
              name,
              address: result.vicinity,
              rating: result.rating,
              lat,
              lng,
              directionsUrl: placeDirectionsUrl(lat, lng, name),
            };
          }),
        );
      },
    );
  });
}

function MapFallback({ heightClass }: { heightClass: string }) {
  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-lg border border-navy-200/20 shadow-sm">
        <iframe
          title={`Map of ${COMMUNITY_MAP_LABEL}`}
          src={communityMapEmbedUrl()}
          className={`w-full border-0 ${heightClass}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <CuratedAmenityList compact title="Nearby places (map preview)" />
    </div>
  );
}

export function AmenityMapClient({ variant = "full", showFilters = true }: AmenityMapClientProps) {
  const apiKey = getGoogleMapsApiKey();
  const mapId = getGoogleMapsMapId();
  const rootRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const communityMarkerRef = useRef<google.maps.Marker | null>(null);
  const placeMarkersRef = useRef<google.maps.Marker[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const mapInitializedRef = useRef(false);

  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<AmenityCategoryId>("parks");
  const [loadError, setLoadError] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [mapReady, setMapReady] = useState(false);

  const heightClass = MAP_HEIGHT_CLASS[variant];

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px", threshold: 0.1 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const clearPlaceMarkers = useCallback(() => {
    placeMarkersRef.current.forEach((marker) => marker.setMap(null));
    placeMarkersRef.current = [];
  }, []);

  const showInfo = useCallback((content: string, marker: google.maps.Marker) => {
    if (!infoWindowRef.current) {
      infoWindowRef.current = new google.maps.InfoWindow();
    }
    infoWindowRef.current.setContent(content);
    infoWindowRef.current.open({ map: mapRef.current ?? undefined, anchor: marker });
  }, []);

  const renderPlaces = useCallback(
    async (categoryId: AmenityCategoryId) => {
      if (!mapRef.current) return;
      setIsSearching(true);
      clearPlaceMarkers();
      try {
        const places = await searchNearbyPlaces(categoryId, COMMUNITY_MAP_CENTER);
        places.forEach((place) => {
          const marker = new google.maps.Marker({
            map: mapRef.current ?? undefined,
            position: { lat: place.lat, lng: place.lng },
            title: place.name,
          });
          const ratingLine =
            place.rating !== undefined ? `<p style="margin:4px 0 0;font-size:13px;">Rating: ${place.rating}</p>` : "";
          const addressLine = place.address
            ? `<p style="margin:4px 0 0;font-size:13px;">${place.address}</p>`
            : "";
          const html = `<div style="max-width:220px;font-family:sans-serif;">
            <strong>${place.name}</strong>
            ${ratingLine}
            ${addressLine}
            <p style="margin:8px 0 0;"><a href="${place.directionsUrl}" target="_blank" rel="noopener noreferrer">Directions</a></p>
          </div>`;
          marker.addListener("click", () => showInfo(html, marker));
          placeMarkersRef.current.push(marker);
        });
      } finally {
        setIsSearching(false);
      }
    },
    [clearPlaceMarkers, showInfo],
  );

  useEffect(() => {
    if (!isVisible || !apiKey || loadError || mapInitializedRef.current) return;
    const key = apiKey;
    let cancelled = false;

    async function initMap() {
      try {
        await loadMapsScript(key);
        if (cancelled || !mapContainerRef.current) return;

        const { Map } = (await google.maps.importLibrary("maps")) as google.maps.MapsLibrary;
        const mapOptions: google.maps.MapOptions = {
          center: COMMUNITY_MAP_CENTER,
          zoom: 13,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
        };
        if (mapId) {
          mapOptions.mapId = mapId;
        }

        mapRef.current = new Map(mapContainerRef.current, mapOptions);
        mapInitializedRef.current = true;

        communityMarkerRef.current = new google.maps.Marker({
          map: mapRef.current,
          position: COMMUNITY_MAP_CENTER,
          title: COMMUNITY_MAP_LABEL,
          zIndex: 1000,
        });
        const communityHtml = `<div style="max-width:240px;font-family:sans-serif;">
          <strong>${COMMUNITY_MAP_LABEL}</strong>
          <p style="margin:4px 0 0;font-size:13px;">North Las Vegas 89084</p>
        </div>`;
        communityMarkerRef.current.addListener("click", () => {
          if (communityMarkerRef.current) {
            showInfo(communityHtml, communityMarkerRef.current);
          }
        });

        setMapReady(true);
      } catch {
        if (!cancelled) setLoadError(true);
      }
    }

    void initMap();
    return () => {
      cancelled = true;
    };
  }, [apiKey, isVisible, loadError, mapId, showInfo]);

  useEffect(() => {
    if (!mapReady || !mapRef.current || loadError || !apiKey) return;
    void renderPlaces(activeCategory);
  }, [activeCategory, apiKey, loadError, mapReady, renderPlaces]);

  if (!apiKey || loadError) {
    return <MapFallback heightClass={heightClass} />;
  }

  return (
    <div ref={rootRef}>
      {showFilters ? (
        <div
          className="mb-4 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter nearby amenities by category"
        >
          {AMENITY_CATEGORIES.map((category) => {
            const selected = category.id === activeCategory;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-label={category.ariaLabel}
                className={`rounded-full border px-3 py-1.5 font-sans text-xs uppercase tracking-wider transition-colors ${
                  selected
                    ? "border-gold-400 bg-gold-400 text-navy-800"
                    : "border-navy-200/40 bg-white text-navy-700 hover:border-gold-400 hover:bg-gold-50"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      ) : null}

      <div
        className={`relative overflow-hidden rounded-lg border border-navy-200/20 shadow-sm ${heightClass}`}
        aria-busy={isSearching}
        aria-live="polite"
      >
        {!isVisible ? (
          <div className="flex h-full items-center justify-center bg-navy-50 font-sans text-sm text-navy-500" role="status">
            Scroll to load the interactive map
          </div>
        ) : (
          <div ref={mapContainerRef} className="h-full w-full" role="application" aria-label="Interactive amenity map" />
        )}
      </div>

      <p className="mt-3 flex items-center gap-1.5 font-sans text-xs text-navy-500">
        <MapPin className="h-3.5 w-3.5 text-gold-500" aria-hidden />
        Center: {COMMUNITY_MAP_LABEL}. Results from Google Places within ~{AMENITY_SEARCH_RADIUS_M / 1000} km.
      </p>
    </div>
  );
}

type NearbyAmenitiesSectionProps = {
  variant?: "preview" | "full";
  kicker?: string;
  showCuratedList?: boolean;
};

export function NearbyAmenitiesSection({
  variant = "preview",
  kicker = "What's nearby",
  showCuratedList = false,
}: NearbyAmenitiesSectionProps) {
  const isPreview = variant === "preview";

  return (
    <section className="bg-cream-100 py-20" aria-labelledby="nearby-amenities-title">
      <div className="container mx-auto px-4">
        <p className="text-center font-sans text-xs uppercase tracking-[0.2em] text-gold-600">{kicker}</p>
        <h2
          id="nearby-amenities-title"
          className="mt-3 text-center font-serif text-3xl text-navy-800 md:text-4xl"
        >
          Life near <span className="text-gold-600">Villages at Tule Springs</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center font-sans text-navy-500">
          Parks, grocery, healthcare, golf, and schools within a short drive of North Las Vegas 89084. Filter the map or
          open the full amenities guide.
        </p>

        <div className="mx-auto mt-10 max-w-5xl">
          <AmenityMapClient variant={variant} showFilters />
          {showCuratedList ? <CuratedAmenityList /> : null}
          {isPreview ? (
            <div className="mt-8 text-center">
              <Button asChild className="bg-navy-700 font-sans uppercase tracking-widest text-cream-100 hover:bg-navy-800">
                <Link href="/amenities">
                  Full nearby amenities guide
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
