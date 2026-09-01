import { MEDIA, type MediaAsset } from "@/lib/media-catalog";

export const HEARTLAND_COMMUNITY_PATH = "/heartland-cottages";
export const HEARTLAND_BROCHURE_URL = "https://online.flippingbook.com/view/601987868/";
export const HEARTLAND_SALES_OFFICE = "358 Tiffany Springs Ave, North Las Vegas, NV 89084";
export const HEARTLAND_HOA_MONTHLY = 111;
export const HEARTLAND_LAST_UPDATED = "2026-09-01";

export type HeartlandPlanId = "1865-plan" | "1700-plan";

export type HeartlandInventoryHome = {
  lotNumber: number;
  streetNumber: string;
  streetName: "Balenger Bay Ave";
  city: "North Las Vegas";
  region: "NV";
  postalCode: "89084";
  price: number;
  mlsNumber: string;
  closingWindow: string;
  isCulDeSac: boolean;
};

export type HeartlandPlan = {
  id: HeartlandPlanId;
  slug: HeartlandPlanId;
  planLabel: string;
  squareFeet: number;
  bedrooms: number;
  hasDen: boolean;
  bathrooms: number;
  garageSpaces: number;
  videoId: string;
  videoTitle: string;
  image: MediaAsset;
  inventory: HeartlandInventoryHome;
};

const LOT_91: HeartlandInventoryHome = {
  lotNumber: 91,
  streetNumber: "7401",
  streetName: "Balenger Bay Ave",
  city: "North Las Vegas",
  region: "NV",
  postalCode: "89084",
  price: 465_990,
  mlsNumber: "2813706",
  closingWindow: "October closing",
  isCulDeSac: true,
};

const LOT_90: HeartlandInventoryHome = {
  lotNumber: 90,
  streetNumber: "7343",
  streetName: "Balenger Bay Ave",
  city: "North Las Vegas",
  region: "NV",
  postalCode: "89084",
  price: 446_990,
  mlsNumber: "2813723",
  closingWindow: "October closing",
  isCulDeSac: true,
};

export const HEARTLAND_PLANS: readonly HeartlandPlan[] = [
  {
    id: "1865-plan",
    slug: "1865-plan",
    planLabel: "1865 Plan",
    squareFeet: 1865,
    bedrooms: 4,
    hasDen: true,
    bathrooms: 2.5,
    garageSpaces: 2,
    videoId: "c7rl1j4Bid0",
    videoTitle: "Heartland Cottages 1865 plan video tour in North Las Vegas",
    image: MEDIA.listingTwoStory,
    inventory: LOT_91,
  },
  {
    id: "1700-plan",
    slug: "1700-plan",
    planLabel: "1700 Plan",
    squareFeet: 1700,
    bedrooms: 4,
    hasDen: false,
    bathrooms: 2.5,
    garageSpaces: 2,
    videoId: "Rhsllph9T5M",
    videoTitle: "Heartland Cottages 1700 plan video tour in North Las Vegas",
    image: MEDIA.listingVilla,
    inventory: LOT_90,
  },
] as const;

export const HEARTLAND_FINANCING = {
  asOf: "September 2026",
  lender: "DHI Mortgage",
  closingCostIncentive: 5000,
  brokerCoopPercent: 3,
  notes: [
    "Rates and incentives are based on qualifying and subject to change.",
    "Quoted terms apply to October closings using DHI Mortgage.",
    "This is not a commitment to lend.",
  ],
  options: [
    {
      rate: "4.99%",
      term: "Fixed 30-year FHA, VA, or conventional",
      closing: "October closing",
    },
    {
      rate: "3.875%",
      term: "5-year ARM FHA or VA",
      closing: "October closing",
    },
    {
      rate: "3.875%",
      term: "7-year ARM conventional",
      closing: "October closing",
    },
  ],
} as const;

export const HEARTLAND_FAQS: readonly { question: string; answer: string }[] = [
  {
    question: "Is Heartland Cottages a gated community?",
    answer:
      "Yes. Heartland Cottages is a gated D.R. Horton community inside The Villages at Tule Springs master plan in North Las Vegas 89084.",
  },
  {
    question: "Are there SID or LID assessments?",
    answer:
      "The builder reports no SID or LID assessments on these Heartland Cottages homes. Confirm assessments in title and escrow.",
  },
  {
    question: "What is the HOA fee?",
    answer: "HOA is $111 per month. The community includes gates, parks, and trails in the master plan.",
  },
  {
    question: "What is included in the model homes?",
    answer:
      "Appliances and window blinds are included. Photos and video show the model plan. Actual finishes on a specific lot may vary.",
  },
  {
    question: "When can I close on a current lot?",
    answer:
      "Current cul-de-sac inventory is listed with an October closing. Tour dates and exact close dates with Dr. Jan Duffy at 702-222-1964.",
  },
  {
    question: "What financing is available?",
    answer:
      "DHI Mortgage is quoting 4.99% 30-year fixed and 3.875% ARM options for October closings, plus up to $5,000 toward closing costs, as of September 2026. Terms require qualifying and can change.",
  },
  {
    question: "Why hire Dr. Jan Duffy instead of buying at the sales office?",
    answer:
      "The sales office represents D.R. Horton. Dr. Jan Duffy represents you on lot choice, incentives, SID and LID review, and the purchase contract. Call 702-222-1964.",
  },
];

export function formatUsd(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatSqFt(squareFeet: number): string {
  return `${squareFeet.toLocaleString("en-US")} sq ft`;
}

export function planPath(slug: HeartlandPlanId): string {
  return `${HEARTLAND_COMMUNITY_PATH}/${slug}`;
}

export function youtubeWatchUrl(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

export function youtubeEmbedUrl(videoId: string): string {
  return `https://www.youtube-nocookie.com/embed/${videoId}`;
}

export function listingStreetAddress(home: HeartlandInventoryHome): string {
  return `${home.streetNumber} ${home.streetName}`;
}

export function listingFullAddress(home: HeartlandInventoryHome): string {
  return `${listingStreetAddress(home)}, ${home.city}, ${home.region} ${home.postalCode}`;
}

export function listingMapsQuery(home: HeartlandInventoryHome): string {
  return encodeURIComponent(listingFullAddress(home));
}

export function listingDirectionsUrl(home: HeartlandInventoryHome): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${listingMapsQuery(home)}`;
}

export function listingMapEmbedUrl(home: HeartlandInventoryHome): string {
  return `https://maps.google.com/maps?q=${listingMapsQuery(home)}&hl=en&z=16&output=embed`;
}

export function bedroomLabel(plan: HeartlandPlan): string {
  return plan.hasDen ? `${plan.bedrooms} bedrooms + den` : `${plan.bedrooms} bedrooms`;
}

export function isHeartlandPlanId(value: string): value is HeartlandPlanId {
  return HEARTLAND_PLANS.some((plan) => plan.id === value);
}

export function getPlanBySlug(slug: string): HeartlandPlan | undefined {
  if (!isHeartlandPlanId(slug)) return undefined;
  return HEARTLAND_PLANS.find((plan) => plan.slug === slug);
}

export function getSiblingPlans(slug: HeartlandPlanId): HeartlandPlan[] {
  return HEARTLAND_PLANS.filter((plan) => plan.slug !== slug);
}
