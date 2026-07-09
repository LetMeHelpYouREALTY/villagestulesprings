export const LUXURY_SITE = {
  agentName: "Dr. Janet Duffy",
  tagline: "Las Vegas Luxury Real Estate",
  phone: "702-222-1964",
  phoneTel: "+17022221964",
  email: "info@villagestulesprings.com",
  url: "https://villagestulesprings.com",
  realscoutAgentId: "QWdlbnQtMjI1MDUw",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  license: "S.0197614.LLC",
  address: {
    street: "123 Main Street",
    city: "Las Vegas",
    state: "NV",
    zip: "89101",
    country: "US",
    formatted: "123 Main Street, Las Vegas, NV 89101",
  },
  geo: {
    latitude: "36.1699",
    longitude: "-115.1398",
  },
  hours: "Monday–Friday 9:00 AM – 6:00 PM",
  serviceAreas: ["Las Vegas", "Henderson", "Summerlin", "Tule Springs"],
  social: {
    facebook: "https://www.facebook.com/villagestulesprings",
    instagram: "https://www.instagram.com/villagestulesprings",
    linkedin: "https://www.linkedin.com/in/drjanetduffy",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Listings", href: "/#listings" },
    { label: "About", href: "/about" },
    { label: "Market Reports", href: "/blog/las-vegas-market-update-2024" },
    { label: "Contact", href: "/#contact" },
  ],
  stats: [
    { value: "$500M+", label: "Transaction Volume" },
    { value: "4.9", label: "Client Rating" },
    { value: "200+", label: "Five-Star Reviews" },
    { value: "15+", label: "Years in Las Vegas" },
  ],
  testimonials: [
    {
      id: "t1",
      quote: "Dr. Duffy negotiated our Summerlin purchase with precision. Every detail was handled before we asked.",
      name: "Michael & Sarah R.",
      area: "Summerlin",
      rating: 5,
    },
    {
      id: "t2",
      quote: "Our Henderson estate sold in eleven days. The marketing package and pricing strategy were exactly right.",
      name: "David L.",
      area: "Henderson",
      rating: 5,
    },
    {
      id: "t3",
      quote: "From first showing to closing, the process was seamless. Clear communication at every step.",
      name: "Jennifer M.",
      area: "Las Vegas",
      rating: 5,
    },
  ],
} as const;

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: LUXURY_SITE.agentName,
    description: "Luxury Las Vegas real estate representation for buyers and sellers.",
    url: LUXURY_SITE.url,
    telephone: LUXURY_SITE.phone,
    email: LUXURY_SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: LUXURY_SITE.address.street,
      addressLocality: LUXURY_SITE.address.city,
      addressRegion: LUXURY_SITE.address.state,
      postalCode: LUXURY_SITE.address.zip,
      addressCountry: LUXURY_SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: LUXURY_SITE.geo.latitude,
      longitude: LUXURY_SITE.geo.longitude,
    },
    openingHours: "Mo-Fr 09:00-18:00",
    areaServed: LUXURY_SITE.serviceAreas.map((name) => ({
      "@type": "City",
      name,
      containedInPlace: { "@type": "State", name: "Nevada" },
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200",
    },
    sameAs: Object.values(LUXURY_SITE.social),
  };
}
