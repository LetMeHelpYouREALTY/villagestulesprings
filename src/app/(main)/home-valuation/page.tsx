import type { Metadata } from "next";

import { HomeValuationSection } from "@/components/home-valuation-section";
import { JsonLd } from "@/components/json-ld";
import { LuxuryFaq } from "@/components/luxury-faq";
import { PageHero } from "@/components/page-hero";
import { PublicPageShell } from "@/components/public-page-shell";
import { TuleSpringsLocalGuide } from "@/components/tule-springs-local-guide";
import { homeValuationPageMetadata } from "@/config/metadata-config";
import { SITE_NAP } from "@/config/site-nap";
import { VALUATION_FAQS } from "@/data/luxury-pages";
import { marketingPageGraph } from "@/lib/marketing-schema";

export const revalidate = 86400;

export const metadata: Metadata = homeValuationPageMetadata;

const valuationGraph = marketingPageGraph({
  path: "/home-valuation",
  serviceName: "89084 home valuation",
  serviceType: "Residential home valuation",
  description: `Complimentary RealScout value plus a 15-minute consult for North Las Vegas 89084. Call ${SITE_NAP.phoneDisplay}.`,
  faqs: VALUATION_FAQS,
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Home Valuation", path: "/home-valuation" },
  ],
});

export default function HomeValuationPage() {
  return (
    <PublicPageShell before={<JsonLd data={valuationGraph} />} hero={<ValuationHero />}>
      <main>
        <HomeValuationSection />
        <TuleSpringsLocalGuide />
        <LuxuryFaq title="Valuation questions" items={VALUATION_FAQS} />
      </main>
    </PublicPageShell>
  );
}

function ValuationHero() {
  return (
    <PageHero
      kicker="Complimentary valuation · 89084"
      title="Price your Tule Springs home against current comps"
      lede="Instant RealScout value, then 15 minutes with Dr. Jan Duffy. September 2026 median list in 89084 is $459,999."
    />
  );
}
