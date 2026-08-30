import { getRealScoutAgentId } from "@/config/env";

const WIDGET_CSS = `
  realscout-office-listings {
    --rs-listing-divider-color: rgb(101, 141, 172);
    width: 100%;
    display: block;
  }
`;

/**
 * RealScout office listings, immediately below the hero on every public page.
 * Rendered as static HTML (not React-managed custom-element props) so the
 * UMD widget can upgrade the tag after the global script loads.
 *
 * Filters are For Sale + common residential types, sorted like the working
 * homepage your-listings widget. A leading-comma property type, sold-date
 * sort on active listings, and an $800K–$1M cap were returning zero rows.
 */
export function RealScoutOfficeListingsSection() {
  const agentId = getRealScoutAgentId().replaceAll(/[^A-Za-z0-9_-]/g, "");
  const widgetHtml = `<realscout-office-listings agent-encoded-id="${agentId}" sort-order="STATUS_AND_SIGNIFICANT_CHANGE" listing-status="For Sale" property-types="SFR,MF,TC"></realscout-office-listings>`;

  return (
    <section
      className="border-b border-gold-200/40 bg-cream-50 py-8"
      aria-label="Office listings"
      data-below-hero="listings"
    >
      <div className="container mx-auto px-4">
        <p className="mb-2 font-sans text-xs uppercase tracking-[0.2em] text-gold-600">Current office listings</p>
        <h2 className="mb-6 font-serif text-2xl text-navy-800 md:text-3xl">Homes for sale</h2>
        <style dangerouslySetInnerHTML={{ __html: WIDGET_CSS }} />
        <div dangerouslySetInnerHTML={{ __html: widgetHtml }} />
      </div>
    </section>
  );
}
