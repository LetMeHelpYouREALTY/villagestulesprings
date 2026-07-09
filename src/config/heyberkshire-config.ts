// Shared NAP (Name/Address/Phone) and business constants for the HeyBerkshire
// (Berkshire Hathaway HomeServices Nevada Properties) landing page clone.
// Keep these values in sync with the live Google Business Profile.
export const HEYBERKSHIRE_CONFIG = {
  siteName: "HeyBerkshire",
  brandName: "Berkshire Hathaway HomeServices",
  brandSubtitle: "Nevada Properties",
  agentName: "Dr. Jan Duffy",
  agentTitle: "REALTOR\u00AE",
  license: "S.0197614.LLC",
  parentBrokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  phoneDisplay: "(702) 500-1942",
  phoneHref: "tel:+17025001942",
  email: "homes@heyberkshire.com",
  address: {
    street: "9406 W Lake Mead Blvd, Suite 100",
    city: "Las Vegas",
    region: "NV",
    postalCode: "89134",
  },
  geo: {
    latitude: 36.1893,
    longitude: -115.2821,
  },
  baseUrl: "https://heyberkshire.com",
  realScoutAgentEncodedId: "QWdlbnQtMjI1MDUw",
  realScoutSearchUrl: "http://drjanduffy.realscout.com/",
  googleReviewUrl: "https://g.page/r/heyberkshire/review",
  socials: {
    facebook: "https://www.facebook.com/heyberkshire",
    instagram: "https://www.instagram.com/heyberkshire",
    linkedin: "https://www.linkedin.com/in/drjanduffy",
  },
  rating: {
    value: 4.9,
    count: 500,
  },
} as const;
