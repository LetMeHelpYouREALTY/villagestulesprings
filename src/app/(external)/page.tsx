import { FeaturedPropertiesSection } from "@/components/featured-properties-section";
import { HeadingPhoto } from "@/components/heading-photo";
import { LocationMapSection } from "@/components/location-map-section";
import { MaravillaHeroSection } from "@/components/maravilla-hero-section";
import { PublicPageShell } from "@/components/public-page-shell";
import { SectionIntro } from "@/components/section-intro";
import { MEDIA } from "@/lib/media-catalog";
import { realScoutTag } from "@/lib/realscout-widget";

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
            <SectionIntro
              kicker="Advanced Search"
              title={
                <>
                  Find Your <span className="text-gold-600">Perfect Home</span>
                </>
              }
              subtitle="Use our advanced search to find properties that match your exact criteria and budget."
            />
            <HeadingPhoto asset={MEDIA.perfectHome} className="mx-auto mb-10 max-w-5xl" />
            <div
              className="mx-auto max-w-4xl rounded-lg border border-navy-200/20 bg-cream-50 p-6 md:p-8"
              dangerouslySetInnerHTML={{ __html: realScoutTag("advanced-search") }}
            />
          </div>
        </section>

        {/* Featured Properties — luxury card grid */}
        <FeaturedPropertiesSection />

        {/* RealScout Your Listings */}
        <section className="bg-cream-100 py-24">
          <div className="container mx-auto px-4">
            <SectionIntro
              kicker="Exclusive Listings"
              title={
                <>
                  My <span className="text-gold-600">Featured Listings</span>
                </>
              }
              subtitle="Explore my exclusive listings across Las Vegas. Each property is carefully selected and professionally marketed for the best results."
            />
            <HeadingPhoto asset={MEDIA.featuredListings} className="mx-auto mb-10 max-w-5xl" />
            <div
              dangerouslySetInnerHTML={{
                __html: realScoutTag("your-listings", 'sort-order="NEWEST" listing-status="For Sale"'),
              }}
            />
          </div>
        </section>

        {/* Location map — uses NEXT_PUBLIC_OPEN_HOUSES_MAP_EMBED_URL or Google Maps API key */}
        <LocationMapSection />

        {/* RealScout Home Valuation */}
        <section id="home-valuation" className="bg-navy-800 py-24">
          <div className="container mx-auto px-4">
            <SectionIntro
              dark
              kicker="Complimentary Service"
              title={
                <>
                  Get Your <span className="text-gold-300">Home Valuation</span>
                </>
              }
              subtitle="Discover your home's current market value with our free, professional valuation service. Accurate insights based on recent sales and market trends in your area."
            />
            <HeadingPhoto asset={MEDIA.homeValuation} className="mx-auto mb-10 max-w-5xl" />
            <div
              className="mx-auto max-w-3xl rounded-lg border border-gold-200/20 bg-navy-700/50 p-8"
              dangerouslySetInnerHTML={{ __html: realScoutTag("home-value") }}
            />
            <p className="mt-8 text-center font-sans text-cream-300">
              Want to walk through the numbers together?{" "}
              <a href="#schedule" className="text-gold-300 underline-offset-4 hover:underline">
                Book a 15-minute conversation
              </a>{" "}
              or call{" "}
              <a href="tel:+17022221964" className="text-gold-300 underline-offset-4 hover:underline">
                702-222-1964
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </PublicPageShell>
  );
}
