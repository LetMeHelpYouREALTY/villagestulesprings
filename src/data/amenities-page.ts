import type { AmenityCategoryId } from "@/config/community-map";
import type { FaqItem } from "@/data/luxury-pages";
import { SMITHS_MARKETPLACE, TULE_SPRINGS_MASTER_PLAN } from "@/data/tule-springs-local";

export const AMENITIES_PAGE_PATH = "/amenities" as const;

export type CuratedPlace = {
  name: string;
  /** Full line for UI; omit when not verified for street-level JSON-LD. */
  address?: string;
  schemaAddress?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
  };
  sourceUrl: string;
  categoryIds: readonly AmenityCategoryId[];
  schemaType:
    | "Park"
    | "Restaurant"
    | "GroceryStore"
    | "Hospital"
    | "GolfCourse"
    | "School"
    | "ShoppingCenter"
    | "Pharmacy"
    | "Place";
  note: string;
};

/** Verified from primary sources — used for SSR copy, fallback list, and ItemList schema. */
export const CURATED_NEARBY_PLACES: readonly CuratedPlace[] = [
  {
    name: "Tule Springs Fossil Beds National Monument",
    sourceUrl: "https://www.nps.gov/tusk/planyourvisit/",
    categoryIds: ["parks"],
    schemaType: "Park",
    note:
      "Urban national monument along the master plan; NPS lists trailheads at Aliante Parkway & Moonlight Falls Ave and Durango Drive & Moccasin Road (no single street address).",
  },
  {
    name: "Floyd Lamb Park at Tule Springs",
    address: "9200 Tule Springs Rd, Las Vegas, NV 89131",
    schemaAddress: {
      streetAddress: "9200 Tule Springs Rd",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89131",
    },
    sourceUrl: "https://www.lasvegasnevada.gov/Residents/Parks-Facilities/Floyd-Lamb-Park",
    categoryIds: ["parks"],
    schemaType: "Park",
    note: "City of Las Vegas day-use park with lakes, picnic areas, and equestrian trails west of the North 215 corridor.",
  },
  {
    name: SMITHS_MARKETPLACE.name,
    address: `${SMITHS_MARKETPLACE.address}, North Las Vegas, NV 89084`,
    schemaAddress: {
      streetAddress: SMITHS_MARKETPLACE.address,
      addressLocality: "North Las Vegas",
      addressRegion: "NV",
      postalCode: "89084",
    },
    sourceUrl:
      "https://www.reviewjournal.com/business/vegas-business/building-las-vegas/smiths-is-building-36m-supermarket-in-north-las-vegas-3844909/",
    categoryIds: ["grocery"],
    schemaType: "GroceryStore",
    note: `${SMITHS_MARKETPLACE.squareFeet.toLocaleString("en-US")} sq ft store planned at ${SMITHS_MARKETPLACE.intersection}. Targeted ${SMITHS_MARKETPLACE.completionYear} opening (${SMITHS_MARKETPLACE.source}).`,
  },
  {
    name: "Aliante Golf Club",
    address: "3100 W Elkhorn Rd, North Las Vegas, NV 89084",
    schemaAddress: {
      streetAddress: "3100 W Elkhorn Rd",
      addressLocality: "North Las Vegas",
      addressRegion: "NV",
      postalCode: "89084",
    },
    sourceUrl: "https://www.aliantegolf.com/",
    categoryIds: ["golf"],
    schemaType: "GolfCourse",
    note: "Public 18-hole course in the Aliante master plan south of Tule Springs Parkway.",
  },
  {
    name: "Centennial Hills Hospital Medical Center",
    address: "6900 N Durango Dr, Las Vegas, NV 89149",
    schemaAddress: {
      streetAddress: "6900 N Durango Dr",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89149",
    },
    sourceUrl: "https://www.centennialhillshospital.com/patients-visitors/maps-directions",
    categoryIds: ["healthcare"],
    schemaType: "Hospital",
    note: "Full-service hospital serving Centennial Hills and northwest Las Vegas.",
  },
  {
    name: "Aliante Casino-Hotel",
    address: "7300 Aliante Pkwy, North Las Vegas, NV 89084",
    schemaAddress: {
      streetAddress: "7300 Aliante Pkwy",
      addressLocality: "North Las Vegas",
      addressRegion: "NV",
      postalCode: "89084",
    },
    sourceUrl: "https://www.aliantecasino.com/",
    categoryIds: ["shopping", "restaurants"],
    schemaType: "ShoppingCenter",
    note: "Dining, entertainment, and hotel along Aliante Parkway — a regional anchor south of the 215.",
  },
  {
    name: "Legacy High School",
    address: "150 W Deer Springs Way, North Las Vegas, NV 89084",
    schemaAddress: {
      streetAddress: "150 W Deer Springs Way",
      addressLocality: "North Las Vegas",
      addressRegion: "NV",
      postalCode: "89084",
    },
    sourceUrl: "https://legacyhigh.net/apps/contact/",
    categoryIds: ["schools"],
    schemaType: "School",
    note: "Clark County School District high school serving the northwest North Las Vegas area.",
  },
  {
    name: "Vincent L Triggs Elementary School",
    address: "4470 W Rome Blvd, North Las Vegas, NV 89084",
    schemaAddress: {
      streetAddress: "4470 W Rome Blvd",
      addressLocality: "North Las Vegas",
      addressRegion: "NV",
      postalCode: "89084",
    },
    sourceUrl: "https://triggses.com/",
    categoryIds: ["schools"],
    schemaType: "School",
    note: "CCSD elementary school in the Aliante area; confirm assignment for your lot on CCSD's site.",
  },
] as const;

export function curatedPlacesForCategory(categoryId: AmenityCategoryId): readonly CuratedPlace[] {
  return CURATED_NEARBY_PLACES.filter((place) => place.categoryIds.includes(categoryId));
}

export type AmenityProseSection = {
  id: string;
  heading: string;
  paragraphs: readonly string[];
};

export const AMENITY_PROSE_SECTIONS: readonly AmenityProseSection[] = [
  {
    id: "dining",
    heading: "Dining and cafes",
    paragraphs: [
      `Aliante Parkway and the Craig Road corridor carry chain restaurants, fast casual, and local spots a short drive from ${TULE_SPRINGS_MASTER_PLAN.name}.`,
      "Use the interactive map filters for Restaurants and Cafes to see current Google-listed options within a few miles of the community center.",
    ],
  },
  {
    id: "parks",
    heading: "Parks and recreation",
    paragraphs: [
      `${TULE_SPRINGS_MASTER_PLAN.monument} borders the master plan. Floyd Lamb Park at Tule Springs adds lakes, trails, and picnic grounds to the west.`,
      `Heartland Cottages and future villages will add pools, trails, and club amenities as phases build out inside the ${TULE_SPRINGS_MASTER_PLAN.acres.toLocaleString("en-US")}-acre plan (${TULE_SPRINGS_MASTER_PLAN.acresSource}).`,
    ],
  },
  {
    id: "golf",
    heading: "Golf",
    paragraphs: [
      "Aliante Golf Club is the closest full-size public course. Shadow Creek and other resort courses are farther south toward the Strip.",
    ],
  },
  {
    id: "healthcare",
    heading: "Healthcare and pharmacies",
    paragraphs: [
      "Centennial Hills Hospital Medical Center on Durango Drive is the primary full-service hospital for northwest valley residents.",
      "Urgent care, primary care, and pharmacy chains cluster along Craig Road, Aliante Parkway, and the Centennial Hills retail strip.",
    ],
  },
  {
    id: "shopping",
    heading: "Shopping and grocery",
    paragraphs: [
      `Daily grocery runs today often head to Smith's, Albertsons, or Walmart locations along Craig Road and Aliante Parkway.`,
      `${SMITHS_MARKETPLACE.name} at ${SMITHS_MARKETPLACE.address} will add a ${SMITHS_MARKETPLACE.squareFeet.toLocaleString("en-US")}-sq-ft marketplace at the North 215 and Revere intersection when it opens (target ${SMITHS_MARKETPLACE.completionYear}).`,
    ],
  },
  {
    id: "schools",
    heading: "Schools",
    paragraphs: [
      "Clark County School District assigns schools by address. Legacy High School, Anthony Saville Middle School, and Vincent L Triggs Elementary are commonly cited for the Tule Springs area — confirm assignment with CCSD before you write an offer.",
    ],
  },
  {
    id: "commute",
    heading: "Commute and regional access",
    paragraphs: [
      `${TULE_SPRINGS_MASTER_PLAN.name} sits on the ${TULE_SPRINGS_MASTER_PLAN.beltway}, which links to US-95 and I-15.`,
      "Approximate drive times (traffic dependent): Las Vegas Strip 30–40 minutes; Harry Reid International Airport 35–45 minutes; Downtown Summerlin 20–30 minutes via the 215 and Summerlin Parkway.",
    ],
  },
] as const;

export const AMENITIES_FAQS: readonly FaqItem[] = [
  {
    question: "What grocery stores are near The Villages at Tule Springs?",
    answer:
      "Smith's, Albertsons, and Walmart supercenters serve the Craig Road and Aliante Parkway corridors today; a Smith's Marketplace is planned at 900 W. Tule Springs Parkway at Revere and the North 215 (target 2027).",
  },
  {
    question: "How far is The Villages at Tule Springs from the Las Vegas Strip?",
    answer:
      "Most buyers plan about 30–40 minutes to the Strip via the North 215 Beltway and I-15, depending on traffic and your exact village address.",
  },
  {
    question: "Are there hospitals near The Villages at Tule Springs?",
    answer:
      "Centennial Hills Hospital Medical Center on Durango Drive is the main full-service hospital for the northwest valley, roughly 15–20 minutes from the community center in typical traffic.",
  },
  {
    question: "What parks are closest to Tule Springs?",
    answer:
      "Tule Springs Fossil Beds National Monument borders the master plan; Floyd Lamb Park at Tule Springs offers lakes and trails to the west.",
  },
  {
    question: "Is there golf near The Villages at Tule Springs?",
    answer:
      "Aliante Golf Club on Elkhorn Road is the nearest public course; additional resort courses sit farther south toward the Strip.",
  },
  {
    question: "Which schools serve The Villages at Tule Springs?",
    answer:
      "Clark County School District assigns by address; Legacy High, Anthony Saville Middle, and Vincent L Triggs Elementary are often referenced for this area — verify your lot's zone on CCSD's site.",
  },
  {
    question: "How do I get to Harry Reid International Airport from Tule Springs?",
    answer:
      "Plan roughly 35–45 minutes via the North 215 Beltway and I-15 in normal traffic; allow extra time for peak hours.",
  },
  {
    question: "Who helps buyers compare villages and amenities in 89084?",
    answer:
      "Dr. Janet Duffy represents buyers across The Villages at Tule Springs and Heartland Cottages — call 702-222-1964 or email DrDuffySells@VillagesTuleSprings.com.",
  },
] as const;
