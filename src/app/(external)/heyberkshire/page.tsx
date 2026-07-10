import type { Metadata } from "next";

import { CtaSection } from "@/components/heyberkshire/cta-section";
import { FaqSection } from "@/components/heyberkshire/faq-section";
import { FeaturedPropertiesSection } from "@/components/heyberkshire/featured-properties-section";
import { HeyBerkshireFooter } from "@/components/heyberkshire/heyberkshire-footer";
import { HeyBerkshireHero } from "@/components/heyberkshire/heyberkshire-hero";
import { HeyBerkshireNav } from "@/components/heyberkshire/heyberkshire-nav";
import { HeyBerkshireStructuredData } from "@/components/heyberkshire/heyberkshire-structured-data";
import { MarketStatsSection } from "@/components/heyberkshire/market-stats-section";
import { NeighborhoodsSection } from "@/components/heyberkshire/neighborhoods-section";
import { StickyContactButton } from "@/components/heyberkshire/sticky-contact-button";
import { TestimonialsSection } from "@/components/heyberkshire/testimonials-section";
import { WhyChooseBhhsSection } from "@/components/heyberkshire/why-choose-bhhs-section";
import { WhyChooseUsSection } from "@/components/heyberkshire/why-choose-us-section";
import { HEYBERKSHIRE_CONFIG } from "@/config/heyberkshire-config";

const title = `${HEYBERKSHIRE_CONFIG.brandName} Las Vegas | ${HEYBERKSHIRE_CONFIG.agentName}, ${HEYBERKSHIRE_CONFIG.agentTitle}`;
const description =
  "Looking for a Berkshire Hathaway HomeServices agent in Las Vegas? Dr. Jan Duffy with BHHS Nevada Properties offers expert real estate services\u2014backed by Warren Buffett's legacy of trust. Call (702) 500-1942.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Berkshire Hathaway HomeServices",
    "Berkshire Hathaway HomeServices Nevada Properties",
    "BHHS Las Vegas",
    "Dr. Jan Duffy realtor",
    "Las Vegas real estate agent",
  ],
  alternates: {
    // This page mirrors the live HeyBerkshire.com homepage; canonical points to
    // the original to avoid duplicate-content issues while this clone is hosted here.
    canonical: HEYBERKSHIRE_CONFIG.baseUrl,
  },
  openGraph: {
    title,
    description,
    url: HEYBERKSHIRE_CONFIG.baseUrl,
    siteName: `${HEYBERKSHIRE_CONFIG.siteName} - ${HEYBERKSHIRE_CONFIG.parentBrokerage} | Private Client Real Estate Advisory`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function HeyBerkshirePage() {
  return (
    <>
      <HeyBerkshireStructuredData />
      <HeyBerkshireNav />
      <main>
        <HeyBerkshireHero />
        <WhyChooseBhhsSection />
        <MarketStatsSection />
        <FeaturedPropertiesSection />
        <NeighborhoodsSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
        <div className="bg-slate-100 py-4 text-center text-sm text-slate-500">
          Last Updated: January 2026 | HeyBerkshire.com - {HEYBERKSHIRE_CONFIG.parentBrokerage}
        </div>
      </main>
      <HeyBerkshireFooter />
      <StickyContactButton />
    </>
  );
}
