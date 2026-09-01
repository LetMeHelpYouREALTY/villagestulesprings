/**
 * Hyperlocal Tule Springs facts. Date-stamped. Do not invent prices or acreage.
 * As of 2026-09-01.
 */
export const TULE_SPRINGS_FACTS_AS_OF = "September 2026";

export const TULE_SPRINGS_MASTER_PLAN = {
  name: "The Villages at Tule Springs",
  city: "North Las Vegas",
  zip: "89084",
  acres: 1280,
  homesPlanned: 8683,
  acresSource: "Las Vegas Review-Journal groundbreaking coverage of The Villages at Tule Springs",
  beltway: "North 215 Beltway",
  monument: "Tule Springs Fossil Beds National Monument",
} as const;

export const ZIP_89084_MARKET = {
  asOf: TULE_SPRINGS_FACTS_AS_OF,
  medianListPrice: 459_999,
  pricePerSqFt: 238,
  activeListings: 322,
  daysOnMarket: 68,
  source: "realtor.com 89084 housing market snapshot",
  sourceUrl: "https://www.realtor.com/local/market/nevada/zipcode-89084",
} as const;

export const SMITHS_MARKETPLACE = {
  name: "Smith's Marketplace",
  address: "900 W. Tule Springs Parkway",
  intersection: "Revere Street and the North 215 Beltway",
  squareFeet: 122_000,
  investmentMillions: 35.9,
  completionYear: 2027,
  source: "Las Vegas Review-Journal, 1 July 2026",
} as const;

export const NEARBY_PLACES = [
  {
    name: "Tule Springs Fossil Beds National Monument",
    detail: "Federal preserve next to the master plan. Trail access is part of the community's location story.",
  },
  {
    name: "Floyd Lamb Park at Tule Springs",
    detail: "City park with lakes and picnic grounds west of the 215 Beltway corridor.",
  },
  {
    name: "Aliante",
    detail: "Retail, golf, library, and the Aliante Casino-Hotel along Aliante Parkway.",
  },
  {
    name: "North 215 Beltway",
    detail: "Primary commute spine for North Las Vegas, Centennial Hills, and the northwest valley.",
  },
] as const;

export function formatMarketPrice(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
