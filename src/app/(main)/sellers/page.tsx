import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { MlsDisclaimer } from "@/components/listings/mls-disclaimer";
import { LuxuryCtaBand } from "@/components/luxury-cta-band";
import { LuxuryFaq } from "@/components/luxury-faq";
import { PageHero } from "@/components/page-hero";
import { PublicPageShell } from "@/components/public-page-shell";
import { ServicePillars } from "@/components/service-pillars";
import { TuleSpringsLocalGuide } from "@/components/tule-springs-local-guide";
import { generatePageMetadata } from "@/config/metadata-config";
import { SITE_NAP } from "@/config/site-nap";
import { SELLER_FAQS, SELLER_SERVICES } from "@/data/luxury-pages";
import { marketingPageGraph } from "@/lib/marketing-schema";

export const revalidate = 86400;

export const metadata: Metadata = generatePageMetadata({
  title: "Sell Your Tule Springs Home | 89084 Listing Agent | Dr. Jan Duffy",
  description: `List your North Las Vegas 89084 home with Dr. Jan Duffy. September 2026 median list $459,999, 68 days on market. SID, HOA, and Heartland comps. Call ${SITE_NAP.phoneDisplay}.`,
  url: `${SITE_NAP.url}/sellers`,
  canonical: "/sellers",
});

const sellersGraph = marketingPageGraph({
  path: "/sellers",
  serviceName: "Tule Springs home selling representation",
  serviceType: "Real estate listing representation",
  description: `Listing representation for The Villages at Tule Springs and North Las Vegas 89084. Call ${SITE_NAP.phoneDisplay}.`,
  faqs: SELLER_FAQS,
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Sell", path: "/sellers" },
  ],
});

export default function SellersPage() {
  return (
    <PublicPageShell before={<JsonLd data={sellersGraph} />} hero={<SellersHero />}>
      <main>
        <ServicePillars
          kicker="Listing desk · 89084"
          title={
            <>
              Sell in Tule Springs with <span className="text-gold-600">Dr. Jan Duffy</span>
            </>
          }
          subtitle={`${SITE_NAP.agentName} prices to 89084 comps, discloses SID and HOA, and lists on MLS. One number: ${SITE_NAP.phoneDisplay}.`}
          items={SELLER_SERVICES}
          utmMedium="sellers"
          utmCampaign="tule-springs-sell"
          ctaLabel="Book a listing consult"
        />
        <TuleSpringsLocalGuide />
        <LuxuryFaq title="Selling in 89084" items={SELLER_FAQS} />
        <LuxuryCtaBand
          kicker="Next step"
          title="Walk your list price before you go live"
          lede={`Complimentary valuation, then a 15-minute pricing call. ${SITE_NAP.phoneDisplay}.`}
          utmMedium="sellers"
          utmCampaign="sellers-cta"
        />
        <MlsDisclaimer />
      </main>
    </PublicPageShell>
  );
}

function SellersHero() {
  return (
    <PageHero
      kicker="Sell · Villages at Tule Springs"
      title="List your 89084 home with a Tule Springs desk"
      lede="Median list $459,999. 68 days on market. She prices against Heartland models and the 322 actives in this zip."
    />
  );
}
