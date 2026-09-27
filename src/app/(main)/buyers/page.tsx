import type { Metadata } from "next";
import Link from "next/link";

import { NearbyAmenitiesSection } from "@/components/amenities/amenity-map-client";
import { BuyerServicesSection } from "@/components/buyer-services-section";
import { JsonLd } from "@/components/json-ld";
import { MlsDisclaimer } from "@/components/listings/mls-disclaimer";
import { ModelHomeCard } from "@/components/listings/model-home-card";
import { PublicPageShell } from "@/components/public-page-shell";
import { TuleSpringsLocalGuide } from "@/components/tule-springs-local-guide";
import { generatePageMetadata } from "@/config/metadata-config";
import { SITE_NAP } from "@/config/site-nap";
import { HEARTLAND_PLANS } from "@/data/heartland-cottages";
import { localBusinessSchema } from "@/lib/listing-schema";

export const revalidate = 86400;

export const metadata: Metadata = generatePageMetadata({
  title: "Buy a Home in Tule Springs Las Vegas | Dr. Jan Duffy Buyer Agent",
  description: `Dr. Jan Duffy represents buyers in The Villages at Tule Springs and Heartland Cottages, North Las Vegas 89084. New construction, resale search, SID review, and model tours. Call ${SITE_NAP.phoneDisplay}.`,
  url: `${SITE_NAP.url}/buyers`,
  canonical: "/buyers",
});

const buyersGraph = {
  "@context": "https://schema.org",
  "@graph": [
    localBusinessSchema(),
    {
      "@type": "Service",
      name: "Tule Springs home buying representation",
      serviceType: "Real estate buyer representation",
      provider: { "@id": `${SITE_NAP.url}/#agent` },
      areaServed: {
        "@type": "Place",
        name: "The Villages at Tule Springs",
        address: {
          "@type": "PostalAddress",
          addressLocality: "North Las Vegas",
          addressRegion: "NV",
          postalCode: "89084",
          addressCountry: "US",
        },
      },
      url: `${SITE_NAP.url}/buyers`,
    },
  ],
};

function BuyersHero() {
  return (
    <section className="bg-navy-800 px-4 py-20">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-300">
          Tule Springs buyer specialist · North Las Vegas 89084
        </p>
        <h1 className="mt-3 font-serif text-4xl text-cream-100 md:text-5xl">
          Buy a home in Tule Springs with Dr. Jan Duffy
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-sans text-lg font-light text-cream-300">
          Hyperlocal representation for Villages at Tule Springs and gated Heartland Cottages. Builder lots, resale
          search, and closing math on one call: {SITE_NAP.phoneDisplay}.
        </p>
      </div>
    </section>
  );
}

export default function BuyersPage() {
  return (
    <PublicPageShell before={<JsonLd data={buyersGraph} />} hero={<BuyersHero />}>
      <main>
        <BuyerServicesSection />
        <section className="bg-cream-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center font-serif text-4xl text-navy-800">Start with the standing models</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center font-sans text-navy-500">
              Permanent Heartland Cottages plan pages. Current cul-de-sac inventory is listed with October closings.
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
        <TuleSpringsLocalGuide />
        <NearbyAmenitiesSection variant="preview" kicker="Buy near daily errands" />
        <MlsDisclaimer />
      </main>
    </PublicPageShell>
  );
}
