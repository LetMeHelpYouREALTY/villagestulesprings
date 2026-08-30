import { HeadingPhoto } from "@/components/heading-photo";
import { SectionIntro } from "@/components/section-intro";
import { getRealScoutAgentId } from "@/config/env";
import { MEDIA } from "@/lib/media-catalog";

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
        <SectionIntro
          kicker="Current Inventory"
          title={
            <>
              Homes for Sale <span className="text-gold-600">$800K–$1M</span>
            </>
          }
          subtitle="Single-family homes currently listed through our office — sorted by newest sold activity."
          className="mb-10"
        />
        <HeadingPhoto asset={MEDIA.homes800k1m} className="mx-auto mb-10 max-w-5xl" />
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
