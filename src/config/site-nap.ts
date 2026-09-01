/**
 * Visible NAP that matches the Google Business Profile used on this site.
 * Keep these strings identical in schema, header, footer, and listing pages.
 */
export const SITE_NAP = {
  businessName: "Villages at Tule Springs",
  agentName: "Dr. Janet Duffy",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  license: "S.0197614.LLC",
  streetAddress: "Villages at Tule Springs",
  city: "North Las Vegas",
  region: "NV",
  postalCode: "89084",
  country: "US",
  phoneDisplay: "702-222-1964",
  phoneHref: "tel:+17022221964",
  email: "DrDuffySells@VillagesTuleSprings.com",
  url: "https://villagestulesprings.com",
  weekdayHours: "Monday – Friday 9:00 AM – 6:00 PM",
  saturdayHours: "Saturday 10:00 AM – 5:00 PM",
  sundayHours: "Sunday by appointment",
} as const;

export const SITE_HOURS = [
  {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const,
    opens: "09:00",
    closes: "18:00",
  },
  {
    days: ["Saturday"] as const,
    opens: "10:00",
    closes: "17:00",
  },
] as const;
