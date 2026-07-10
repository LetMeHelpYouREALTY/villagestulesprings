import { HEYBERKSHIRE_CONFIG } from "@/config/heyberkshire-config";

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "@id": `${HEYBERKSHIRE_CONFIG.baseUrl}#organization`,
      name: `${HEYBERKSHIRE_CONFIG.agentName} - ${HEYBERKSHIRE_CONFIG.parentBrokerage}`,
      alternateName: [HEYBERKSHIRE_CONFIG.siteName, "BHHS Nevada Properties", HEYBERKSHIRE_CONFIG.brandName],
      url: HEYBERKSHIRE_CONFIG.baseUrl,
      description:
        "Expert real estate services in Las Vegas and Henderson, NV. Buy, sell, or invest with Dr. Jan Duffy, your trusted Berkshire Hathaway HomeServices Nevada Properties agent.",
      telephone: "+17025001942",
      email: HEYBERKSHIRE_CONFIG.email,
      priceRange: "$385K - $10M+",
      address: {
        "@type": "PostalAddress",
        streetAddress: HEYBERKSHIRE_CONFIG.address.street,
        addressLocality: HEYBERKSHIRE_CONFIG.address.city,
        addressRegion: HEYBERKSHIRE_CONFIG.address.region,
        postalCode: HEYBERKSHIRE_CONFIG.address.postalCode,
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: HEYBERKSHIRE_CONFIG.geo.latitude,
        longitude: HEYBERKSHIRE_CONFIG.geo.longitude,
      },
      areaServed: [
        { "@type": "City", name: "Las Vegas" },
        { "@type": "City", name: "Henderson" },
        { "@type": "Place", name: "Summerlin" },
        { "@type": "City", name: "North Las Vegas" },
        { "@type": "Place", name: "Green Valley" },
      ],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Real Estate License",
        recognizedBy: { "@type": "Organization", name: "Nevada Real Estate Division" },
        validIn: { "@type": "State", name: "Nevada" },
        identifier: HEYBERKSHIRE_CONFIG.license,
      },
      sameAs: [
        HEYBERKSHIRE_CONFIG.socials.facebook,
        HEYBERKSHIRE_CONFIG.socials.instagram,
        HEYBERKSHIRE_CONFIG.socials.linkedin,
      ],
      parentOrganization: {
        "@type": "Organization",
        name: HEYBERKSHIRE_CONFIG.parentBrokerage,
        parentOrganization: {
          "@type": "Organization",
          name: HEYBERKSHIRE_CONFIG.brandName,
        },
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: String(HEYBERKSHIRE_CONFIG.rating.value),
        reviewCount: String(HEYBERKSHIRE_CONFIG.rating.count),
        bestRating: "5",
        worstRating: "1",
      },
      slogan: "Your Berkshire Hathaway HomeServices expert in Las Vegas",
    },
    {
      "@type": "WebSite",
      "@id": `${HEYBERKSHIRE_CONFIG.baseUrl}#website`,
      name: HEYBERKSHIRE_CONFIG.siteName,
      url: HEYBERKSHIRE_CONFIG.baseUrl,
      publisher: { "@id": `${HEYBERKSHIRE_CONFIG.baseUrl}#organization` },
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why should I choose a Berkshire Hathaway HomeServices agent in Las Vegas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Berkshire Hathaway HomeServices is the only real estate brand backed by Warren Buffett's Berkshire Hathaway Inc. This means unmatched financial stability, ethical standards, and a global referral network of 50,000+ agents. When you're making the biggest purchase of your life, that trust matters.",
      },
    },
    {
      "@type": "Question",
      name: "What areas does Berkshire Hathaway HomeServices Nevada Properties serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BHHS Nevada Properties serves all of Las Vegas, Henderson, North Las Vegas, and surrounding areas, with specialized expertise in Summerlin, The Ridges, Skye Canyon, Southern Highlands, Green Valley, and all Henderson communities.",
      },
    },
    {
      "@type": "Question",
      name: `How do I contact ${HEYBERKSHIRE_CONFIG.agentName} at Berkshire Hathaway HomeServices?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `You can reach ${HEYBERKSHIRE_CONFIG.agentName} at ${HEYBERKSHIRE_CONFIG.phoneDisplay} or email ${HEYBERKSHIRE_CONFIG.email}. Office located at ${HEYBERKSHIRE_CONFIG.address.street}, ${HEYBERKSHIRE_CONFIG.address.city}, ${HEYBERKSHIRE_CONFIG.address.region} ${HEYBERKSHIRE_CONFIG.address.postalCode}.`,
      },
    },
  ],
};

export function HeyBerkshireStructuredData() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
