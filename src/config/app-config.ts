import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "Las Vegas Real Estate Expert",
  version: packageJson.version,
  copyright: `© ${currentYear}, Las Vegas Real Estate Expert.`,
  meta: {
    title: "Las Vegas Real Estate Expert | Find Your Dream Home | Dr. Janet Duffy",
    description:
      "Expert Las Vegas real estate services with Dr. Janet Duffy. Find your dream home, get free home valuations, and access exclusive listings. Licensed realtor with 15+ years experience serving Las Vegas, Henderson, and surrounding areas.",
    keywords: [
      "Las Vegas real estate",
      "Las Vegas homes for sale",
      "Las Vegas realtor",
      "Dr. Janet Duffy",
      "home valuation Las Vegas",
      "Las Vegas property search",
      "Henderson real estate",
      "Las Vegas real estate agent",
      "buy home Las Vegas",
      "sell home Las Vegas",
    ],
    author: "Dr. Janet Duffy",
    location: "Las Vegas, Nevada",
    businessType: "Real Estate Agent",
    phone: "(702) 555-REALTOR",
    email: "info@villagestulesprings.com",
  },
};
