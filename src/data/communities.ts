import { MEDIA, type MediaAsset } from "@/lib/media-catalog";

export type CommunityGuide = {
  name: string;
  href?: string;
  kicker: string;
  summary: string;
  facts: readonly string[];
  image: MediaAsset;
};

export const TULE_SPRINGS_COMMUNITIES: readonly CommunityGuide[] = [
  {
    name: "The Villages at Tule Springs",
    href: "/buyers",
    kicker: "Master plan · 89084",
    summary:
      "1,280 acres in North Las Vegas planned for up to 8,683 homes. Dr. Jan Duffy represents buyers across the villages, not one sales office.",
    facts: ["1,280 acres", "Up to 8,683 homes", "North 215 Beltway"],
    image: MEDIA.tuleSprings,
  },
  {
    name: "Heartland Cottages",
    href: "/heartland-cottages",
    kicker: "Gated new construction",
    summary:
      "D.R. Horton gated village with standing 1,700 and 1,865 sq ft models. No SID or LID. HOA $111 a month. Tour with her, not only the builder.",
    facts: ["$446,990–$465,990 models", "HOA $111/month", "358 Tiffany Springs Ave"],
    image: MEDIA.listingTwoStory,
  },
  {
    name: "North Las Vegas 89084",
    href: "/listings",
    kicker: "Zip market",
    summary:
      "September 2026: $459,999 median list, $238 per sq ft, 322 actives, 68 days on market. Resale and new construction share this zip.",
    facts: ["Median list $459,999", "322 active listings", "68 days on market"],
    image: MEDIA.homes800k1m,
  },
  {
    name: "Aliante",
    kicker: "Adjacent retail & golf",
    summary:
      "Retail, golf, library, and the Aliante Casino-Hotel along Aliante Parkway. A short drive south of The Villages at Tule Springs.",
    facts: ["Aliante Parkway", "Golf and retail", "North Las Vegas"],
    image: MEDIA.featuredAliante,
  },
  {
    name: "Tule Springs Fossil Beds",
    kicker: "National Monument",
    summary:
      "Federal preserve on the edge of the master plan. Trail access is part of the location story for Villages at Tule Springs homes.",
    facts: ["Adjacent preserve", "Trail access", "North Las Vegas 89084"],
    image: MEDIA.perfectHome,
  },
  {
    name: "North 215 Beltway",
    kicker: "Commute spine",
    summary:
      "Primary beltway for North Las Vegas, Centennial Hills, and the northwest valley. Smith's Marketplace is targeted at Revere and the 215 for 2027.",
    facts: ["North 215", "122,000 sq ft Smith's", "Targeted 2027"],
    image: MEDIA.inventoryLevels,
  },
] as const;
