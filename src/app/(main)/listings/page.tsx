import type { Metadata } from "next";
import Link from "next/link";

import { NearbyAmenitiesSection } from "@/components/amenities/amenity-map-client";
import { JsonLd } from "@/components/json-ld";
import { MlsDisclaimer } from "@/components/listings/mls-disclaimer";
import { ModelHomeCard } from "@/components/listings/model-home-card";
import { LuxuryFaq } from "@/components/luxury-faq";
import { PageHero } from "@/components/page-hero";
import { PublicPageShell } from "@/components/public-page-shell";
import { RealScoutAdvancedSearchSection } from "@/components/realscout-advanced-search-section";
import { listingsPageMetadata } from "@/config/metadata-config";
import { SITE_NAP } from "@/config/site-nap";
import { HEARTLAND_PLANS } from "@/data/heartland-cottages";
import { LISTINGS_FAQS } from "@/data/luxury-pages";
import { marketingPageGraph } from "@/lib/marketing-schema";

export const revalidate = 86400;

export const metadata: Metadata = listingsPageMetadata;

const listingsGraph = marketingPageGraph({
  path: "/listings",
  serviceName: "Tule Springs residences",
  serviceType: "Residential real estate listings",
  description: `Live MLS residences and Heartland Cottages model homes in The Villages at Tule Springs, North Las Vegas 89084. Call ${SITE_NAP.phoneDisplay}.`,
  faqs: LISTINGS_FAQS,
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Residences", path: "/listings" },
  ],
});

export default function ListingsPage() {
  return (
    <PublicPageShell before={<JsonLd data={listingsGraph} />} hero={<ListingsHero />}>
      <main>
        <RealScoutAdvancedSearchSection />
        <section className="bg-cream-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center font-serif text-4xl text-navy-800">Heartland Cottages model residences</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center font-sans text-navy-500">
              Permanent gated plans in The Villages at Tule Springs. Current cul-de-sac lots close in October.
            </p>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              {HEARTLAND_PLANS.map((plan) => (
                <ModelHomeCard key={plan.id} plan={plan} />
              ))}
            </div>
            <p className="mt-8 text-center">
              <Link href="/heartland-cottages" className="font-sans text-gold-600 underline-offset-4 hover:underline">
                All Heartland Cottages model homes
              </Link>
            </p>
          </div>
        </section>
        <NearbyAmenitiesSection variant="preview" kicker="89084 lifestyle" />
        <LuxuryFaq title="Residences questions" items={LISTINGS_FAQS} />
        <MlsDisclaimer />
      </main>
    </PublicPageShell>
  );
}

function ListingsHero() {
  return (
    <PageHero
      kicker="Residences · North Las Vegas 89084"
      title="Homes for sale in The Villages at Tule Springs"
      lede={`Live MLS inventory plus gated Heartland Cottages models. Tour with ${SITE_NAP.agentName} at ${SITE_NAP.phoneDisplay}.`}
    />
  );
}
