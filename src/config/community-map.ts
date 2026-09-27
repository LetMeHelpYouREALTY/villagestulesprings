import { SITE_NAP } from "@/config/site-nap";
import { TULE_SPRINGS_MASTER_PLAN } from "@/data/tule-springs-local";

/**
 * Map center for The Villages at Tule Springs (89084).
 * Coordinates: OpenStreetMap Nominatim place node "Villages at Tule Springs" (queried 2026-09-27).
 * Sales office reference in repo: 358 Tiffany Springs Ave, North Las Vegas, NV 89084 (Heartland Cottages).
 */
export const COMMUNITY_MAP_CENTER = {
  lat: 36.2968763,
  lng: -115.1530706,
  source:
    'OpenStreetMap Nominatim "Villages at Tule Springs" quarter node; sales office 358 Tiffany Springs Ave per D.R. Horton / site data',
} as const;

export const COMMUNITY_MAP_LABEL = TULE_SPRINGS_MASTER_PLAN.name;

export const COMMUNITY_MAP_CITY = TULE_SPRINGS_MASTER_PLAN.city;

/** Default nearby search radius in meters for Places searchNearby. */
export const AMENITY_SEARCH_RADIUS_M = 8000;

export type AmenityCategoryId =
  | "parks"
  | "grocery"
  | "restaurants"
  | "fitness"
  | "healthcare"
  | "golf"
  | "shopping"
  | "cafes"
  | "pharmacies"
  | "parking"
  | "schools";

export type AmenityCategory = {
  id: AmenityCategoryId;
  label: string;
  /** Google Places (New) primary types for searchNearby. */
  primaryTypes: readonly string[];
  ariaLabel: string;
};

/** Master-planned family community: parks and daily errands first; schools included. */
export const AMENITY_CATEGORIES: readonly AmenityCategory[] = [
  {
    id: "parks",
    label: "Parks",
    primaryTypes: ["park", "national_park"],
    ariaLabel: "Show parks and recreation areas near Villages at Tule Springs",
  },
  {
    id: "grocery",
    label: "Grocery",
    primaryTypes: ["grocery_store", "supermarket"],
    ariaLabel: "Show grocery stores near Villages at Tule Springs",
  },
  {
    id: "restaurants",
    label: "Restaurants",
    primaryTypes: ["restaurant"],
    ariaLabel: "Show restaurants near Villages at Tule Springs",
  },
  {
    id: "fitness",
    label: "Fitness",
    primaryTypes: ["gym", "fitness_center"],
    ariaLabel: "Show gyms and fitness centers near Villages at Tule Springs",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    primaryTypes: ["hospital", "doctor"],
    ariaLabel: "Show hospitals and medical offices near Villages at Tule Springs",
  },
  {
    id: "golf",
    label: "Golf",
    primaryTypes: ["golf_course"],
    ariaLabel: "Show golf courses near Villages at Tule Springs",
  },
  {
    id: "shopping",
    label: "Shopping",
    primaryTypes: ["shopping_mall", "department_store"],
    ariaLabel: "Show shopping near Villages at Tule Springs",
  },
  {
    id: "cafes",
    label: "Cafes",
    primaryTypes: ["cafe", "coffee_shop"],
    ariaLabel: "Show cafes near Villages at Tule Springs",
  },
  {
    id: "pharmacies",
    label: "Pharmacies",
    primaryTypes: ["pharmacy", "drugstore"],
    ariaLabel: "Show pharmacies near Villages at Tule Springs",
  },
  {
    id: "parking",
    label: "Parking",
    primaryTypes: ["parking"],
    ariaLabel: "Show parking near Villages at Tule Springs",
  },
  {
    id: "schools",
    label: "Schools",
    primaryTypes: ["school", "primary_school", "secondary_school"],
    ariaLabel: "Show schools near Villages at Tule Springs",
  },
] as const;

export function communityMapEmbedUrl(): string {
  const { lat, lng } = COMMUNITY_MAP_CENTER;
  return `https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`;
}

export function communityDirectionsUrl(): string {
  const destination = encodeURIComponent(
    `${COMMUNITY_MAP_LABEL}, ${SITE_NAP.city}, ${SITE_NAP.region} ${SITE_NAP.postalCode}`,
  );
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
}
