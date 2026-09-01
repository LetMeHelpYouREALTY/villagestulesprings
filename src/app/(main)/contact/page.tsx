import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { LocationMapSection } from "@/components/location-map-section";
import { LuxuryFaq } from "@/components/luxury-faq";
import { OfficeActions } from "@/components/office-actions";
import { PageHero } from "@/components/page-hero";
import { PublicPageShell } from "@/components/public-page-shell";
import { contactPageMetadata } from "@/config/metadata-config";
import { SITE_NAP } from "@/config/site-nap";
import { CONTACT_FAQS } from "@/data/luxury-pages";
import { marketingPageGraph } from "@/lib/marketing-schema";

export const revalidate = 86400;

export const metadata: Metadata = contactPageMetadata;

const contactGraph = marketingPageGraph({
  path: "/contact",
  serviceName: "Tule Springs real estate consultation",
  serviceType: "Real estate consultation",
  description: `Contact Dr. Jan Duffy at Villages at Tule Springs, North Las Vegas, NV 89084. Call ${SITE_NAP.phoneDisplay}.`,
  faqs: CONTACT_FAQS,
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ],
});

export default function ContactPage() {
  return (
    <PublicPageShell before={<JsonLd data={contactGraph} />} hero={<ContactHero />}>
      <main>
        <OfficeActions />
        <ContactForm />
        <LocationMapSection />
        <LuxuryFaq title="Office questions" items={CONTACT_FAQS} />
      </main>
    </PublicPageShell>
  );
}

function ContactHero() {
  return (
    <PageHero
      kicker="Contact · Villages at Tule Springs"
      title="Call, book, or get directions"
      lede={`${SITE_NAP.businessName}, ${SITE_NAP.city}, ${SITE_NAP.region} ${SITE_NAP.postalCode}. ${SITE_NAP.phoneDisplay}. ${SITE_NAP.weekdayHours}.`}
    />
  );
}
