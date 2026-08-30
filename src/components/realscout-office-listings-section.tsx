import { realScoutWidgetHtml } from "@/lib/realscout-widget";

const WIDGET_CSS = `
  .realscout-wrapper,
  realscout-office-listings {
    --rs-listing-divider-color: rgb(101, 141, 172);
    width: 100%;
    display: block;
    min-height: 12rem;
  }
`;

/**
 * RealScout office listings, immediately below the hero on every public page.
 * Rendered as static HTML so the UMD widget can upgrade the tag after the
 * global script loads.
 *
 * Filters match the working sister-site embed: For Sale, SFR, newest first.
 * The widget API 404s on a numeric agent id; getRealScoutAgentId() encodes it.
 */
export function RealScoutOfficeListingsSection() {
  const widgetHtml = realScoutWidgetHtml("office-listings", {
    "sort-order": "NEWEST",
    "listing-status": "For Sale",
    "property-types": "SFR",
  });

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
        <div className="realscout-wrapper" dangerouslySetInnerHTML={{ __html: widgetHtml }} />
      </div>
    </section>
  );
}
