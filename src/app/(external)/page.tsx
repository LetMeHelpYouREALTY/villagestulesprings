import { FeaturedPropertiesSection } from "@/components/featured-properties-section";
import { LocationMapSection } from "@/components/location-map-section";
import { MaravillaHeroSection } from "@/components/maravilla-hero-section";
import { PublicPageShell } from "@/components/public-page-shell";
import { getRealScoutAgentId } from "@/config/env";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Dr. Janet Duffy",
  description: "Expert Las Vegas real estate services with 15+ years experience",
  url: "https://villagestulesprings.com",
  telephone: "702-222-1964",
  email: "DrDuffySells@VillagesTuleSprings.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Villages at Tule Springs",
    addressLocality: "North Las Vegas",
    addressRegion: "NV",
    postalCode: "89084",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "36.2850",
    longitude: "-115.2000",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Las Vegas",
      containedInPlace: {
        "@type": "State",
        name: "Nevada",
      },
    },
    {
      "@type": "City",
      name: "North Las Vegas",
      containedInPlace: {
        "@type": "State",
        name: "Nevada",
      },
    },
    {
      "@type": "City",
      name: "Henderson",
      containedInPlace: {
        "@type": "State",
        name: "Nevada",
      },
    },
  ],
  serviceType: ["Real Estate Sales", "Property Valuation", "Home Buying Consultation", "Home Selling Consultation"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Real Estate Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Home Buying Services",
          description: "Expert assistance finding and purchasing your dream home",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Home Selling Services",
          description: "Professional marketing and sales support for your property",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Property Valuation",
          description: "Free home valuation and market analysis",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
  },
  sameAs: [
    "https://www.facebook.com/villagestulesprings",
    "https://www.instagram.com/villagestulesprings",
    "https://www.linkedin.com/in/drjanetduffy",
  ],
};

export default function Home() {
  const agentId = getRealScoutAgentId();

  return (
    <PublicPageShell
      before={
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      }
      hero={<MaravillaHeroSection />}
    >
      <main>
        {/* RealScout Advanced Search */}
        <section className="bg-cream-100 py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-600">Advanced Search</p>
              <h2 className="mb-4 mt-2 font-serif text-4xl text-navy-800 lg:text-5xl">
                Find Your <span className="text-gold-600">Perfect Home</span>
              </h2>
              <p className="mx-auto max-w-3xl font-sans text-xl font-light text-navy-500">
                Use our advanced search to find properties that match your exact criteria and budget.
              </p>
            </div>
            <div className="mx-auto max-w-4xl rounded-lg border border-navy-200/20 bg-cream-50 p-6 md:p-8">
              <realscout-advanced-search agent-encoded-id={agentId}></realscout-advanced-search>
            </div>
          </div>
        </section>

        {/* Featured Properties — luxury card grid */}
        <FeaturedPropertiesSection />

        {/* RealScout Your Listings */}
        <section className="bg-cream-100 py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-600">Exclusive Listings</p>
              <h2 className="mb-4 mt-2 font-serif text-4xl text-navy-800 lg:text-5xl">
                My <span className="text-gold-600">Featured Listings</span>
              </h2>
              <p className="mx-auto max-w-3xl font-sans text-xl font-light text-navy-500">
                Explore my exclusive listings across Las Vegas. Each property is carefully selected and professionally
                marketed for the best results.
              </p>
            </div>
            <realscout-your-listings
              agent-encoded-id={agentId}
              sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
              listing-status="For Sale"
              property-types="SFR,MF,TC,LAL,MOBILE,OTHER"
            ></realscout-your-listings>
          </div>
        </section>

        {/* Location map — uses NEXT_PUBLIC_OPEN_HOUSES_MAP_EMBED_URL or Google Maps API key */}
        <LocationMapSection />

        {/* RealScout Home Valuation */}
        <section id="home-valuation" className="bg-navy-800 py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-300">Complimentary Service</p>
              <h2 className="mb-4 mt-2 font-serif text-4xl text-cream-100 lg:text-5xl">
                Get Your <span className="text-gold-300">Home Valuation</span>
              </h2>
              <p className="mx-auto max-w-3xl font-sans text-xl font-light text-cream-300">
                Discover your home&apos;s current market value with our free, professional valuation service. Accurate
                insights based on recent sales and market trends in your area.
              </p>
            </div>
            <div className="mx-auto max-w-3xl rounded-lg border border-gold-200/20 bg-navy-700/50 p-8">
              <realscout-home-value agent-encoded-id={agentId}></realscout-home-value>
            </div>
          </div>
        </section>
      </main>
    </PublicPageShell>
  );
}
