import { BUSINESS } from "@/config/business";

import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "Villages at Tule Springs",
  version: packageJson.version,
  copyright: `© ${currentYear}, Villages at Tule Springs — Dr. Janet Duffy.`,
  meta: {
    title: "Villages at Tule Springs Homes | North Las Vegas REALTOR® | Dr. Janet Duffy",
    description:
      "Buy or sell in Villages at Tule Springs, North Las Vegas NV 89084, with Dr. Janet Duffy. Live MLS search, 702-222-1964. License S.0197614.LLC.",
    keywords: [
      "Villages at Tule Springs",
      "North Las Vegas real estate",
      "89084 homes for sale",
      "Tule Springs realtor",
      "Dr. Janet Duffy",
      "North Las Vegas realtor",
      "new construction North Las Vegas",
      "Las Vegas real estate",
      "home valuation 89084",
      "Aliante homes",
    ],
    author: BUSINESS.legalName,
    location: `${BUSINESS.addressLocality}, ${BUSINESS.addressRegion}`,
    businessType: "Real Estate Agent",
    phone: BUSINESS.telephoneDisplay,
    email: BUSINESS.email,
  },
};
