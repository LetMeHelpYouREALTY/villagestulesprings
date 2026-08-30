import { FeaturedPropertiesSection } from "@/components/featured-properties-section";
import { HeadingPhoto } from "@/components/heading-photo";
import { HomeSeoSections } from "@/components/home-seo-sections";
import { JsonLd } from "@/components/json-ld";
import { LocationMapSection } from "@/components/location-map-section";
import { MaravillaHeroSection } from "@/components/maravilla-hero-section";
import { PublicPageShell } from "@/components/public-page-shell";
import { SectionIntro } from "@/components/section-intro";
import { APP_CONFIG } from "@/config/app-config";
import { HOME_DIRECT_ANSWER, HOME_FAQS, HOME_SERVICE_LINKS } from "@/content/home";
import { MEDIA } from "@/lib/media-catalog";
import { realScoutWidgetHtml } from "@/lib/realscout-widget";
import { buildPageJsonLd } from "@/lib/schema";

const homeJsonLd = buildPageJsonLd({
  path: "/",
  title: APP_CONFIG.meta.title,
  description: APP_CONFIG.meta.description,
  pageType: "WebPage",
  breadcrumbs: [{ name: "Home", path: "/" }],
  faqs: HOME_FAQS,
  service: {
    name: "Villages at Tule Springs real estate",
    description: HOME_DIRECT_ANSWER,
  },
  itemList: {
    name: "Real estate services",
    items: HOME_SERVICE_LINKS.map((item) => ({ name: item.label, path: item.href })),
  },
});

export default function Home() {
  return (
    <PublicPageShell before={<JsonLd data={homeJsonLd} />} hero={<MaravillaHeroSection />}>
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
              dangerouslySetInnerHTML={{ __html: realScoutWidgetHtml("advanced-search") }}
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
              className="realscout-wrapper"
              dangerouslySetInnerHTML={{
                __html: realScoutWidgetHtml("your-listings", {
                  "sort-order": "NEWEST",
                  "listing-status": "For Sale",
                }),
              }}
            />
          </div>
        </section>

        {/* Location map — uses NEXT_PUBLIC_OPEN_HOUSES_MAP_EMBED_URL or Google Maps API key */}
        <LocationMapSection />

        <HomeSeoSections />

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
              dangerouslySetInnerHTML={{ __html: realScoutWidgetHtml("home-value") }}
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
