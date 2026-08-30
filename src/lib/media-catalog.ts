export type MediaAspect = "16:9" | "4:3" | "1:1";

export type MediaAsset = {
  /** Cloudflare Images custom ID — must match the upload script. */
  id: string;
  /** Optimized WebP backup committed to git. */
  gitSrc: string;
  alt: string;
  heading: string;
  aspect: MediaAspect;
  width: number;
  height: number;
};

function asset(filename: string, heading: string, alt: string, aspect: MediaAspect): MediaAsset {
  const [w, h] = aspect === "16:9" ? [1600, 900] : aspect === "1:1" ? [800, 800] : [1200, 900];
  return {
    id: `vts-${filename}`,
    gitSrc: `/images/${filename}.webp`,
    alt,
    heading,
    aspect,
    width: w,
    height: h,
  };
}

/** Heading-matched photography for every public section. */
export const MEDIA = {
  heroDreamHome: asset(
    "hero-dream-home",
    "Find Your Dream Home",
    "Luxury desert home at Villages at Tule Springs in North Las Vegas",
    "4:3",
  ),
  quickHomeSearch: asset(
    "quick-home-search",
    "Quick Home Search",
    "Kitchen workspace overlooking North Las Vegas homes for a quick home search",
    "4:3",
  ),
  homes800k1m: asset(
    "homes-800k-1m",
    "Homes for Sale $800K–$1M",
    "New luxury homes for sale between $800,000 and $1,000,000 in North Las Vegas",
    "16:9",
  ),
  perfectHome: asset(
    "section-perfect-home",
    "Find Your Perfect Home",
    "Master-planned street of luxury homes at Villages at Tule Springs",
    "16:9",
  ),
  featuredDesertVista: asset(
    "featured-desert-vista",
    "Desert Vista Estate",
    "Desert Vista Estate, a luxury home with mountain views in North Las Vegas",
    "4:3",
  ),
  featuredMaravillaCourtyard: asset(
    "featured-maravilla-courtyard",
    "Maravilla Courtyard Residence",
    "Maravilla Courtyard Residence with a private courtyard at Villages at Tule Springs",
    "4:3",
  ),
  featuredAliante: asset(
    "featured-aliante",
    "Aliante Luxury Single-Story",
    "Aliante luxury single-story home in North Las Vegas",
    "4:3",
  ),
  featuredListings: asset(
    "featured-listings",
    "My Featured Listings",
    "Exclusive luxury home listings marketed by Dr. Janet Duffy in Las Vegas",
    "16:9",
  ),
  tuleSprings: asset(
    "section-tule-springs",
    "Visit Villages at Tule Springs",
    "Aerial view of Villages at Tule Springs, North Las Vegas",
    "16:9",
  ),
  homeValuation: asset(
    "section-home-valuation",
    "Get Your Home Valuation",
    "Luxury Las Vegas home exterior prepared for a professional valuation",
    "16:9",
  ),
  aboutHero: asset(
    "about-hero",
    "About Dr. Janet Duffy",
    "Professional Las Vegas real estate office serving Villages at Tule Springs",
    "16:9",
  ),
  experienceExpertise: asset(
    "experience-expertise",
    "Experience & Expertise",
    "Listing presentation and home keys representing 15 years of Las Vegas real estate expertise",
    "4:3",
  ),
  areasServed: asset(
    "areas-served",
    "Areas Served",
    "Las Vegas valley including Henderson, Summerlin, and North Las Vegas",
    "4:3",
  ),
  professionalApproach: asset(
    "professional-approach",
    "Professional Approach",
    "Consultation table in a luxury Las Vegas home with neighborhood maps",
    "4:3",
  ),
  blogMarket2024: asset(
    "blog-market-2024",
    "Las Vegas Real Estate Market Update: 2024 Trends & Insights",
    "Las Vegas skyline and residential neighborhoods for the 2024 market update",
    "16:9",
  ),
  marketOverview: asset(
    "market-overview",
    "Market Overview",
    "Las Vegas residential rooftops illustrating current housing market conditions",
    "16:9",
  ),
  homePrices: asset(
    "home-prices",
    "Home Prices",
    "Luxury Las Vegas home exterior illustrating current home price trends",
    "4:3",
  ),
  inventoryLevels: asset(
    "inventory-levels",
    "Inventory Levels",
    "North Las Vegas street of available homes showing current inventory",
    "4:3",
  ),
  summerlin: asset(
    "summerlin",
    "Summerlin",
    "Luxury home in Summerlin with Red Rock Canyon mountains in the background",
    "4:3",
  ),
  henderson: asset("henderson", "Henderson", "Contemporary luxury home in Henderson, Nevada", "4:3"),
  downtownLasVegas: asset(
    "downtown-las-vegas",
    "Downtown Las Vegas",
    "Downtown Las Vegas residential high-rises at dusk",
    "4:3",
  ),
  listingVilla: asset(
    "listing-villa",
    "Luxury Single-Story Villa",
    "Luxury single-story villa living space opening to a desert courtyard",
    "4:3",
  ),
  listingTwoStory: asset(
    "listing-two-story",
    "Spacious Two-Story Family Home",
    "Spacious two-story home exterior at Villages at Tule Springs",
    "4:3",
  ),
  listingExecutive: asset(
    "listing-executive",
    "Modern Executive Home",
    "Modern executive home with large windows in North Las Vegas",
    "4:3",
  ),
  listingTownhome: asset(
    "listing-townhome",
    "Charming Townhome",
    "Charming desert townhome with patio at Villages at Tule Springs",
    "4:3",
  ),
  interiorLiving: asset(
    "interior-living",
    "Living Room",
    "Spacious living room with desert mountain views in a North Las Vegas home",
    "4:3",
  ),
  interiorKitchen: asset(
    "interior-kitchen",
    "Gourmet Kitchen",
    "Gourmet kitchen with quartz counters and stainless appliances",
    "4:3",
  ),
  interiorMaster: asset(
    "interior-master",
    "Master Suite",
    "Luxury master bedroom suite in a Villages at Tule Springs home",
    "4:3",
  ),
  interiorBath: asset(
    "interior-bath",
    "Master Bathroom",
    "Spa-like master bathroom with dual vanities and walk-in shower",
    "4:3",
  ),
  interiorGarage: asset(
    "interior-garage",
    "Two-Car Garage",
    "Two-car garage with storage in a new North Las Vegas home",
    "4:3",
  ),
  amenityPool: asset(
    "amenity-pool",
    "Community Amenities",
    "Resort-style community pool at Villages at Tule Springs",
    "16:9",
  ),
  ogImage: asset(
    "og-image",
    "Villages at Tule Springs",
    "Luxury North Las Vegas home at Villages at Tule Springs",
    "16:9",
  ),
  ogImageSquare: asset(
    "og-image-square",
    "Dr. Janet Duffy",
    "Luxury desert home in North Las Vegas — Dr. Janet Duffy, REALTOR",
    "1:1",
  ),
} as const;

export type MediaKey = keyof typeof MEDIA;
