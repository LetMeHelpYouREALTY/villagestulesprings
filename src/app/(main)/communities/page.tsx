import type { Metadata } from "next";

import { NearbyAmenitiesSection } from "@/components/amenities/nearby-amenities-section";
import { CommunityGrid } from "@/components/community-grid";
import { JsonLd } from "@/components/json-ld";
import { LuxuryCtaBand } from "@/components/luxury-cta-band";
import { LuxuryFaq } from "@/components/luxury-faq";
import { PageHero } from "@/components/page-hero";
import { PublicPageShell } from "@/components/public-page-shell";
import { TuleSpringsLocalGuide } from "@/components/tule-springs-local-guide";
import { generatePageMetadata } from "@/config/metadata-config";
import { SITE_NAP } from "@/config/site-nap";
import { COMMUNITIES_FAQS } from "@/data/luxury-pages";
import { marketingPageGraph } from "@/lib/marketing-schema";

export const revalidate = 86400;

export const metadata: Metadata = generatePageMetadata({
  title: "Tule Springs Neighborhoods | Villages, Heartland Cottages, 89084",
  description: `Neighborhood guide to The Villages at Tule Springs, gated Heartland Cottages, Aliante, Fossil Beds, and the North 215 in North Las Vegas 89084. Call ${SITE_NAP.phoneDisplay}.`,
  url: `${SITE_NAP.url}/communities`,
  canonical: "/communities",
});

const communitiesGraph = marketingPageGraph({
  path: "/communities",
  serviceName: "Tule Springs neighborhood guidance",
  serviceType: "Residential neighborhood advisory",
  description: `Hyperlocal guide to The Villages at Tule Springs, Heartland Cottages, and North Las Vegas 89084. Call ${SITE_NAP.phoneDisplay}.`,
  faqs: COMMUNITIES_FAQS,
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Neighborhoods", path: "/communities" },
  ],
});

export default function CommunitiesPage() {
  return (
    <PublicPageShell before={<JsonLd data={communitiesGraph} />} hero={<CommunitiesHero />}>
      <main>
        <CommunityGrid />
        <TuleSpringsLocalGuide />
        <NearbyAmenitiesSection variant="preview" kicker="Location & lifestyle" />
        <LuxuryFaq title="Neighborhood questions" items={COMMUNITIES_FAQS} />
        <LuxuryCtaBand
          kicker="Tour the map"
          title="Walk Villages at Tule Springs with a local desk"
          lede={`Heartland models, resale, and the 215 corridor on one call: ${SITE_NAP.phoneDisplay}.`}
          utmMedium="communities"
          utmCampaign="neighborhoods-cta"
        />
      </main>
    </PublicPageShell>
  );
}

function CommunitiesHero() {
  return (
    <PageHero
      kicker="Neighborhoods · North Las Vegas 89084"
      title="The Villages at Tule Springs and the 215 corridor"
      lede="1,280 acres. Up to 8,683 homes. Gated Heartland Cottages, Aliante, and Tule Springs Fossil Beds National Monument."
    />
  );
}
