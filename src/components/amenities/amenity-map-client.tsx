"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { MapPin } from "lucide-react";

import { AmenityMapFallback } from "@/components/amenities/amenity-map-fallback";
import { CuratedAmenityList } from "@/components/amenities/curated-amenity-list";
import {
  AMENITY_CATEGORIES,
  AMENITY_SEARCH_RADIUS_M,
  COMMUNITY_MAP_CENTER,
  COMMUNITY_MAP_LABEL,
  type AmenityCategoryId,
} from "@/config/community-map";
import { getGoogleMapsApiKey, getGoogleMapsMapId } from "@/config/env";
import { curatedPlacesForCategory } from "@/data/amenities-page";
import { buildCommunityInfoContent, buildPlaceInfoContent } from "@/lib/amenity-map-info";
import { searchCategory } from "@/lib/amenity-places-search";
import { loadGoogleMaps, mapsAuthFailed } from "@/lib/google-maps-loader";

type AmenityMapClientProps = {
  variant?: "preview" | "full";
  showFilters?: boolean;
};

const MAP_HEIGHT_CLASS = {
  preview: "h-[380px] md:h-[420px]",
  full: "h-[420px] md:h-[560px]",
} as const;

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
  const [useFallback, setUseFallback] = useState(() => !apiKey || mapsAuthFailed);
  const [isSearching, setIsSearching] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const [searchFailed, setSearchFailed] = useState(false);

  const heightClass = MAP_HEIGHT_CLASS[variant];

  const clearPlaceMarkers = useCallback(() => {
    placeMarkersRef.current.forEach((marker) => marker.setMap(null));
    placeMarkersRef.current = [];
  }, []);

  const enterFallback = useCallback(() => {
    clearPlaceMarkers();
    communityMarkerRef.current?.setMap(null);
    communityMarkerRef.current = null;
    mapRef.current = null;
    mapInitializedRef.current = false;
    setMapReady(false);
    setUseFallback(true);
  }, [clearPlaceMarkers]);

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

  useEffect(() => {
    if (useFallback) return;

    const onAuthFailure = () => {
      enterFallback();
    };
    window.addEventListener("gmaps:auth-failure", onAuthFailure);
    return () => window.removeEventListener("gmaps:auth-failure", onAuthFailure);
  }, [enterFallback, useFallback]);

  const showInfo = useCallback((content: HTMLElement, marker: google.maps.Marker) => {
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
      setSearchFailed(false);
      clearPlaceMarkers();
      try {
        const places = await searchCategory(COMMUNITY_MAP_CENTER, categoryId);
        places.forEach((place) => {
          const marker = new google.maps.Marker({
            map: mapRef.current ?? undefined,
            position: { lat: place.lat, lng: place.lng },
            title: place.name,
          });
          marker.addListener("click", () => {
            showInfo(buildPlaceInfoContent(place), marker);
          });
          placeMarkersRef.current.push(marker);
        });
      } catch {
        setSearchFailed(true);
      } finally {
        setIsSearching(false);
      }
    },
    [showInfo],
  );

  useEffect(() => {
    if (!isVisible || !apiKey || useFallback || mapInitializedRef.current || mapsAuthFailed) return;
    const key = apiKey;
    let cancelled = false;

    async function initMap() {
      try {
        await loadGoogleMaps(key);
        if (cancelled || mapsAuthFailed || !mapContainerRef.current) {
          if (!cancelled) enterFallback();
          return;
        }

        const { Map } = await google.maps.importLibrary("maps");
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
        communityMarkerRef.current.addListener("click", () => {
          if (communityMarkerRef.current) {
            showInfo(buildCommunityInfoContent(COMMUNITY_MAP_LABEL, "North Las Vegas 89084"), communityMarkerRef.current);
          }
        });

        setMapReady(true);
      } catch {
        if (!cancelled) enterFallback();
      }
    }

    void initMap();
    return () => {
      cancelled = true;
    };
  }, [apiKey, enterFallback, isVisible, mapId, showInfo, useFallback]);

  useEffect(() => {
    if (!mapReady || !mapRef.current || useFallback || !apiKey) return;
    void renderPlaces(activeCategory);
  }, [activeCategory, apiKey, mapReady, renderPlaces, useFallback]);

  if (useFallback) {
    return <AmenityMapFallback heightClass={heightClass} categoryId={activeCategory} />;
  }

  const curatedFallback = searchFailed ? curatedPlacesForCategory(activeCategory) : [];

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

      {searchFailed && curatedFallback.length > 0 ? (
        <CuratedAmenityList compact places={curatedFallback} title="Nearby places (curated)" />
      ) : null}

      <p className="mt-3 flex items-center gap-1.5 font-sans text-xs text-navy-500">
        <MapPin className="h-3.5 w-3.5 text-gold-500" aria-hidden />
        Center: {COMMUNITY_MAP_LABEL}. Results from Google Places within ~{AMENITY_SEARCH_RADIUS_M / 1000} km.
      </p>
    </div>
  );
}
