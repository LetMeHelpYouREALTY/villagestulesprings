import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { LuxuryCtaBand } from "@/components/luxury-cta-band";
import { LuxuryFaq } from "@/components/luxury-faq";
import { PageHero } from "@/components/page-hero";
import { PublicPageShell } from "@/components/public-page-shell";
import { ServicePillars } from "@/components/service-pillars";
import { generatePageMetadata } from "@/config/metadata-config";
import { SITE_NAP } from "@/config/site-nap";
import { PRIVATE_CLIENT_FAQS, PRIVATE_CLIENT_SERVICES } from "@/data/luxury-pages";
import { marketingPageGraph } from "@/lib/marketing-schema";

export const revalidate = 86400;

export const metadata: Metadata = generatePageMetadata({
  title: "Private Client | Tule Springs Concierge Realty | Dr. Jan Duffy",
  description: `Private-client buy and sell for The Villages at Tule Springs and Heartland Cottages. Appointment-only model tours, confidential 89084 search. Call ${SITE_NAP.phoneDisplay}.`,
  url: `${SITE_NAP.url}/private-client`,
  canonical: "/private-client",
});

const privateClientGraph = marketingPageGraph({
  path: "/private-client",
  serviceName: "Tule Springs private-client representation",
  serviceType: "Concierge residential real estate",
  description: `Coordinated buy and sell, appointment-only Heartland tours, and confidential 89084 search. Call ${SITE_NAP.phoneDisplay}.`,
  faqs: PRIVATE_CLIENT_FAQS,
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Private Client", path: "/private-client" },
  ],
});

export default function PrivateClientPage() {
  return (
    <PublicPageShell before={<JsonLd data={privateClientGraph} />} hero={<PrivateClientHero />}>
      <main>
        <ServicePillars
          kicker="Concierge desk"
          title={
            <>
              Private client work in <span className="text-gold-600">Tule Springs</span>
            </>
          }
          subtitle="One agent for the list, the Heartland contract, and the showing calendar. Discretion without invented off-market claims."
          items={PRIVATE_CLIENT_SERVICES}
          utmMedium="private-client"
          utmCampaign="concierge"
          ctaLabel="Book a private consult"
        />
        <LuxuryFaq title="Private-client questions" items={PRIVATE_CLIENT_FAQS} />
        <LuxuryCtaBand
          kicker="By appointment"
          title="Start with 15 minutes, not a form"
          lede={`Call ${SITE_NAP.phoneDisplay} or book a conversation. ${SITE_NAP.agentName} takes it from there.`}
          utmMedium="private-client"
          utmCampaign="private-cta"
        />
      </main>
    </PublicPageShell>
  );
}

function PrivateClientHero() {
  return (
    <PageHero
      kicker="Private client · North Las Vegas 89084"
      title="Concierge buy and sell for Villages at Tule Springs"
      lede="Appointment-only Heartland tours. Coordinated list and purchase. One number: 702-222-1964."
    />
  );
}
