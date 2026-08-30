import { SITE_ORIGIN } from "@/lib/site-urls";

/** NAP and identity that must match visible chrome, schema, and GBP. */
export const BUSINESS = {
  name: "Villages at Tule Springs",
  agentName: "Dr. Janet Duffy",
  brokerage: "BHHS Nevada Properties",
  license: "S.0197614.LLC",
  phoneDisplay: "702-222-1964",
  phoneTel: "+17022221964",
  email: "DrDuffySells@VillagesTuleSprings.com",
  streetAddress: "Villages at Tule Springs",
  addressLocality: "North Las Vegas",
  addressRegion: "NV",
  postalCode: "89084",
  addressCountry: "US",
  latitude: 36.285,
  longitude: -115.2,
  url: SITE_ORIGIN,
  mapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Villages+at+Tule+Springs,+North+Las+Vegas,+NV",
} as const;

export const NAP_LINE = `${BUSINESS.streetAddress}, ${BUSINESS.addressLocality}, ${BUSINESS.addressRegion} ${BUSINESS.postalCode}`;
