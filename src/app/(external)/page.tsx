import { FeaturedPropertiesSection } from "@/components/featured-properties-section";
import { HeadingPhoto } from "@/components/heading-photo";
import { JsonLd } from "@/components/json-ld";
import { LocationMapSection } from "@/components/location-map-section";
import { MaravillaHeroSection } from "@/components/maravilla-hero-section";
import { PublicPageShell } from "@/components/public-page-shell";
import { SectionIntro } from "@/components/section-intro";
import { MEDIA } from "@/lib/media-catalog";
import { realScoutTag } from "@/lib/realscout-widget";
import { webSiteJsonLd } from "@/lib/schema";

export default function Home() {
  return (
    <PublicPageShell before={<JsonLd data={webSiteJsonLd()} />} hero={<MaravillaHeroSection />}>
      <main>
        {/* RealScout Advanced Search */}
        <section className="bg-cream-100 py-24">
          <div className="container mx-auto px-4">
            <SectionIntro
              kicker="Advanced Search"
              title={
                <>
                  Search homes in <span className="text-gold-600">North Las Vegas 89084</span>
                </>
              }
              subtitle="Filter by beds, baths, price, and property type for Villages at Tule Springs and nearby North Las Vegas listings."
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
                  Featured <span className="text-gold-600">listings</span>
                </>
              }
              subtitle="Homes currently marketed across the Las Vegas Valley, including Villages at Tule Springs in North Las Vegas 89084."
            />
            <HeadingPhoto asset={MEDIA.featuredListings} className="mx-auto mb-10 max-w-5xl" />
            <div
              dangerouslySetInnerHTML={{
                __html: realScoutTag("your-listings", 'sort-order="NEWEST_LISTING" listing-status="For Sale"'),
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
                  Get a <span className="text-gold-300">home valuation</span>
                </>
              }
              subtitle="See how recent sales in North Las Vegas 89084 compare to your property. Call 702-222-1964 to walk through the numbers."
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
