/** Single NAP + identity source. Must match Google Business Profile and visible page text. */

export const BUSINESS = {
  legalName: "Dr. Janet Duffy",
  brandName: "Villages at Tule Springs",
  jobTitle: "REALTOR®",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  license: "S.0197614.LLC",
  url: "https://villagestulesprings.com",
  telephoneDisplay: "702-222-1964",
  telephoneE164: "+17022221964",
  email: "DrDuffySells@VillagesTuleSprings.com",
  streetAddress: "Villages at Tule Springs",
  addressLocality: "North Las Vegas",
  addressRegion: "NV",
  postalCode: "89084",
  addressCountry: "US",
  addressLine: "Villages at Tule Springs, North Las Vegas, NV 89084",
  geo: { latitude: 36.285, longitude: -115.2 },
  priceRange: "$$$",
  areaServed: ["North Las Vegas", "Las Vegas", "Henderson", "Summerlin"] as const,
  sameAs: [
    "https://www.facebook.com/villagestulesprings",
    "https://www.instagram.com/villagestulesprings",
    "https://www.linkedin.com/in/drjanetduffy",
  ],
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    { days: ["Saturday"], opens: "10:00", closes: "17:00" },
  ] as const,
  image: "https://villagestulesprings.com/images/dr-jan-duffy.png",
  logo: "https://villagestulesprings.com/icon.png",
} as const;

export type BusinessIdentity = typeof BUSINESS;
