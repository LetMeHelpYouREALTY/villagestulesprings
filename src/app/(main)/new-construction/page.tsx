import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { BuilderFinancing } from "@/components/listings/builder-financing";
import { MlsDisclaimer } from "@/components/listings/mls-disclaimer";
import { ModelHomeCard } from "@/components/listings/model-home-card";
import { LuxuryFaq } from "@/components/luxury-faq";
import { PageHero } from "@/components/page-hero";
import { PublicPageShell } from "@/components/public-page-shell";
import { ServicePillars } from "@/components/service-pillars";
import { generatePageMetadata } from "@/config/metadata-config";
import { SITE_NAP } from "@/config/site-nap";
import { HEARTLAND_PLANS } from "@/data/heartland-cottages";
import { NEW_CONSTRUCTION_FAQS, NEW_CONSTRUCTION_SERVICES } from "@/data/luxury-pages";
import { marketingPageGraph } from "@/lib/marketing-schema";

export const revalidate = 86400;

export const metadata: Metadata = generatePageMetadata({
  title: "New Construction Tule Springs | D.R. Horton Buyer Agent | 89084",
  description: `Independent buyer representation for D.R. Horton Heartland Cottages in The Villages at Tule Springs. 1,700 and 1,865 sq ft models, DHI financing, no SID or LID. Call ${SITE_NAP.phoneDisplay}.`,
  url: `${SITE_NAP.url}/new-construction`,
  canonical: "/new-construction",
});

const newConstructionGraph = marketingPageGraph({
  path: "/new-construction",
  serviceName: "Tule Springs new-construction buyer representation",
  serviceType: "New construction real estate representation",
  description: `Independent representation for Heartland Cottages and D.R. Horton homes in The Villages at Tule Springs. Call ${SITE_NAP.phoneDisplay}.`,
  faqs: NEW_CONSTRUCTION_FAQS,
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "New Construction", path: "/new-construction" },
  ],
});

export default function NewConstructionPage() {
  return (
    <PublicPageShell before={<JsonLd data={newConstructionGraph} />} hero={<NewConstructionHero />}>
      <main>
        <ServicePillars
          kicker="Builder representation · your side"
          title={
            <>
              New construction with <span className="text-gold-600">an independent agent</span>
            </>
          }
          subtitle="Register Dr. Jan Duffy before the sales office visit. She reads lot, incentives, and the D.R. Horton contract."
          items={NEW_CONSTRUCTION_SERVICES}
          utmMedium="new-construction"
          utmCampaign="builder-buy"
          ctaLabel="Book a builder consult"
        />
        <section className="bg-cream-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center font-serif text-4xl text-navy-800">Standing Heartland models</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center font-sans text-navy-500">
              Gated plans on Balenger Bay Ave. Tour both lots in one appointment.
            </p>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              {HEARTLAND_PLANS.map((plan) => (
                <ModelHomeCard key={plan.id} plan={plan} />
              ))}
            </div>
            <p className="mt-8 text-center">
              <Link href="/heartland-cottages" className="font-sans text-gold-600 underline-offset-4 hover:underline">
                Heartland Cottages community
              </Link>
            </p>
          </div>
        </section>
        <BuilderFinancing />
        <LuxuryFaq title="New-construction questions" items={NEW_CONSTRUCTION_FAQS} />
        <MlsDisclaimer />
      </main>
    </PublicPageShell>
  );
}

function NewConstructionHero() {
  return (
    <PageHero
      kicker="New construction · Heartland Cottages"
      title="Buy a D.R. Horton home with your own agent"
      lede="Gated 1,700 and 1,865 sq ft models in The Villages at Tule Springs. No SID or LID. Register her first at 702-222-1964."
    />
  );
}
