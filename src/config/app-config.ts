import packageJson from "../../package.json";

import { BUSINESS, NAP_LINE } from "./business";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: BUSINESS.name,
  version: packageJson.version,
  copyright: `© ${currentYear}, ${BUSINESS.name}.`,
  meta: {
    title: "Villages at Tule Springs Homes | North Las Vegas 89084",
    description: `Homes in Villages at Tule Springs, North Las Vegas 89084. Dr. Janet Duffy, ${BUSINESS.brokerage}, license ${BUSINESS.license}. Call ${BUSINESS.phoneDisplay}.`,
    author: BUSINESS.agentName,
    location: `${BUSINESS.addressLocality}, Nevada ${BUSINESS.postalCode}`,
    businessType: "Real Estate Agent",
    phone: BUSINESS.phoneDisplay,
    email: BUSINESS.email,
    address: NAP_LINE,
  },
};
