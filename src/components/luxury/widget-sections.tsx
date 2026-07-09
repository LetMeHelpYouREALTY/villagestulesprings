import { LUXURY_SITE } from "@/config/luxury-site-config";

import { SectionHeading } from "./section-heading";

export function SearchSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Advanced Search"
          title="Find Your Next Residence"
          description="Filter by price, property type, and location across the Las Vegas luxury market."
        />
        <div className="luxury-card rounded-sm p-4 md:p-6">
          <realscout-advanced-search agent-encoded-id={LUXURY_SITE.realscoutAgentId} />
        </div>
      </div>
    </section>
  );
}

export function ValuationSection() {
  return (
    <section id="valuation" className="bg-luxury-charcoal py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          light
          eyebrow="Home Valuation"
          title="What Is Your Home Worth?"
          description="Receive a complimentary market analysis based on recent comparable sales and current absorption trends."
        />
        <div className="luxury-card mx-auto max-w-3xl rounded-sm p-4 md:p-6">
          <realscout-home-value agent-encoded-id={LUXURY_SITE.realscoutAgentId} />
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-luxury-cream/50">
          Estimates are illustrative. Final value depends on condition, upgrades, and current market activity.
        </p>
      </div>
    </section>
  );
}
