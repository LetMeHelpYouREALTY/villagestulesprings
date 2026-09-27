import {
  AMENITY_CATEGORIES,
  AMENITY_SEARCH_RADIUS_M,
  type AmenityCategoryId,
} from "@/config/community-map";

export type MapPlaceResult = {
  id: string;
  name: string;
  address?: string;
  lat: number;
  lng: number;
  directionsUrl: string;
};

const categoryCache = new Map<string, Promise<MapPlaceResult[]>>();

function placeDisplayName(name: unknown): string {
  if (!name) return "Place";
  if (typeof name === "string") return name;
  if (typeof name === "object" && name !== null && "text" in name) {
    const text = (name as { text?: string }).text;
    if (text) return text;
  }
  return "Place";
}

function placeDirectionsUrl(lat: number, lng: number, name: string): string {
  const destination = encodeURIComponent(`${name}@${lat},${lng}`);
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
}

export function searchCategory(
  center: google.maps.LatLngLiteral,
  categoryId: AmenityCategoryId,
): Promise<MapPlaceResult[]> {
  const category = AMENITY_CATEGORIES.find((item) => item.id === categoryId);
  if (!category) return Promise.resolve([]);

  let cached = categoryCache.get(categoryId);
  if (!cached) {
    cached = (async () => {
      const { Place } = (await google.maps.importLibrary("places")) as google.maps.PlacesLibrary;
      const { places } = await Place.searchNearby({
        fields: ["displayName", "location", "formattedAddress", "googleMapsURI"],
        locationRestriction: { center, radius: AMENITY_SEARCH_RADIUS_M },
        includedPrimaryTypes: [...category.primaryTypes],
        maxResultCount: 10,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Places rankPreference is a string enum in the JS API
        rankPreference: "POPULARITY" as any,
      });

      return (places ?? []).map((place, index) => {
        const location = place.location;
        const lat = location?.lat() ?? center.lat;
        const lng = location?.lng() ?? center.lng;
        const name = placeDisplayName(place.displayName);
        return {
          id: place.id ?? `${categoryId}-${index}-${lat}-${lng}`,
          name,
          address: place.formattedAddress ?? undefined,
          lat,
          lng,
          directionsUrl: place.googleMapsURI ?? placeDirectionsUrl(lat, lng, name),
        };
      });
    })();
    cached.catch(() => {
      categoryCache.delete(categoryId);
    });
    categoryCache.set(categoryId, cached);
  }
  return cached;
}
