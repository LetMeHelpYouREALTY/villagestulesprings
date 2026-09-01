import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "Tule Springs Homes | Dr. Jan Duffy",
  version: packageJson.version,
  copyright: `© ${currentYear}, Dr. Janet Duffy, REALTOR®.`,
  meta: {
    title: "Buy a Home in Tule Springs Las Vegas | Dr. Jan Duffy",
    description:
      "Dr. Jan Duffy is the Tule Springs buyer's agent for The Villages at Tule Springs and Heartland Cottages in North Las Vegas 89084. Model tours, new construction, and 89084 comps. Call 702-222-1964.",
    keywords: [
      "Tule Springs homes for sale",
      "Villages at Tule Springs realtor",
      "Heartland Cottages North Las Vegas",
      "buy a home in Tule Springs",
      "North Las Vegas 89084 realtor",
      "Dr. Jan Duffy",
      "Dr. Janet Duffy",
      "gated community North Las Vegas",
      "D.R. Horton Tule Springs",
      "new construction 89084",
    ],
    author: "Dr. Janet Duffy",
    location: "North Las Vegas, Nevada",
    businessType: "Real Estate Agent",
    phone: "702-222-1964",
    email: "DrDuffySells@VillagesTuleSprings.com",
  },
};
