import { getRealScoutAgentId } from "@/config/env";

/**
 * RealScout office listings — placed below the hero on every public page.
 * Uses the UMD widget script (loaded in RealScoutScript) and the provided
 * agent / filter configuration.
 */
export function RealScoutOfficeListingsSection() {
  const agentId = getRealScoutAgentId();

  return (
    <section className="bg-cream-50 py-16" aria-label="Office listings">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-600">Current Inventory</p>
          <h2 className="mb-3 mt-2 font-serif text-3xl text-navy-800 md:text-4xl">
            Homes for Sale <span className="text-gold-600">$800K–$1M</span>
          </h2>
          <p className="mx-auto max-w-2xl font-sans text-lg font-light text-navy-500">
            Single-family homes currently listed through our office — sorted by newest sold activity.
          </p>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              realscout-office-listings {
                --rs-listing-divider-color: rgb(101, 141, 172);
                width: 100%;
                display: block;
              }
            `,
          }}
        />
        <realscout-office-listings
          agent-encoded-id={agentId}
          sort-order="SOLD_DATE_NEWEST"
          listing-status="For Sale"
          property-types=",SFR"
          price-min="800000"
          price-max="1000000"
        ></realscout-office-listings>
      </div>
    </section>
  );
}
