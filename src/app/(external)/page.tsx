import { BuyerServicesSection } from "@/components/buyer-services-section";
import { FeaturedPropertiesSection } from "@/components/featured-properties-section";
import { HeadingPhoto } from "@/components/heading-photo";
import { JsonLd } from "@/components/json-ld";
import { LocationMapSection } from "@/components/location-map-section";
import { LuxuryFaq } from "@/components/luxury-faq";
import { MaravillaHeroSection } from "@/components/maravilla-hero-section";
import { PublicPageShell } from "@/components/public-page-shell";
import { SectionIntro } from "@/components/section-intro";
import { TuleSpringsLocalGuide } from "@/components/tule-springs-local-guide";
import { getRealScoutAgentId } from "@/config/env";
import { HOME_FAQS } from "@/data/luxury-pages";
import { homePageGraph } from "@/lib/marketing-schema";
import { MEDIA } from "@/lib/media-catalog";

const homeGraph = homePageGraph(HOME_FAQS);

export default function Home() {
  const agentId = getRealScoutAgentId();

  return (
    <PublicPageShell before={<JsonLd data={homeGraph} />} hero={<MaravillaHeroSection />}>
      <main>
        {/* RealScout Advanced Search */}
        <section className="bg-cream-100 py-24">
          <div className="container mx-auto px-4">
            <SectionIntro
              kicker="Tule Springs Search"
              title={
                <>
                  Search homes in <span className="text-gold-600">89084</span>
                </>
              }
              subtitle="Filter Villages at Tule Springs and North Las Vegas listings with Dr. Jan Duffy's RealScout search."
            />
            <HeadingPhoto asset={MEDIA.perfectHome} className="mx-auto mb-10 max-w-5xl" />
            <div className="mx-auto max-w-4xl rounded-lg border border-navy-200/20 bg-cream-50 p-6 md:p-8">
              <realscout-advanced-search agent-encoded-id={agentId}></realscout-advanced-search>
            </div>
          </div>
        </section>

        {/* Featured Properties — luxury card grid */}
        <FeaturedPropertiesSection />
        <BuyerServicesSection />
        <TuleSpringsLocalGuide />

        {/* RealScout Your Listings */}
        <section className="bg-cream-100 py-24">
          <div className="container mx-auto px-4">
            <SectionIntro
              kicker="89084 Inventory"
              title={
                <>
                  More <span className="text-gold-600">Tule Springs</span> listings
                </>
              }
              subtitle="Resale and new-construction homes Dr. Jan Duffy can tour with you across The Villages at Tule Springs."
            />
            <HeadingPhoto asset={MEDIA.featuredListings} className="mx-auto mb-10 max-w-5xl" />
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

        <LuxuryFaq title="Tule Springs buyer questions" items={HOME_FAQS} />

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
              subtitle="Discover your home's current market value in 89084 and nearby North Las Vegas. Dr. Jan Duffy walks the comps with you."
            />
            <HeadingPhoto asset={MEDIA.homeValuation} className="mx-auto mb-10 max-w-5xl" />
            <div className="mx-auto max-w-3xl rounded-lg border border-gold-200/20 bg-navy-700/50 p-8">
              <realscout-home-value agent-encoded-id={agentId}></realscout-home-value>
            </div>
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
