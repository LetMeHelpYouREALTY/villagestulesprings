import { AboutSection } from "@/components/luxury/about-section";
import { ListingsSection } from "@/components/luxury/listings-section";
import { LuxuryHero } from "@/components/luxury/luxury-hero";
import { TestimonialsSection } from "@/components/luxury/testimonials-section";
import { SearchSection, ValuationSection } from "@/components/luxury/widget-sections";
import { getLocalBusinessSchema } from "@/config/luxury-site-config";

export default function Home() {
  const structuredData = getLocalBusinessSchema();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <main>
        <LuxuryHero />
        <ListingsSection
          eyebrow="Curated Portfolio"
          title="Signature Listings"
          description="A selection of luxury residences across Las Vegas, Henderson, and Summerlin."
        />
        <SearchSection />
        <ListingsSection
          id="agent-listings"
          eyebrow="Exclusive Inventory"
          title="Agent Portfolio"
          description="Properties represented by Dr. Janet Duffy, professionally marketed for discerning buyers."
          variant="agent"
        />
        <AboutSection />
        <ValuationSection />
        <TestimonialsSection />
      </main>
    </>
  );
}
