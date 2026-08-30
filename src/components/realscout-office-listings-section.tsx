/**
 * RealScout office listings immediately below the hero on every public page.
 * Markup matches the account widget generator (Marketing → Widgets) exactly
 * and is injected as static HTML so the UMD script can upgrade the tag.
 */
const OFFICE_LISTINGS_HTML =
  '<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="PRICE_LOW" listing-status="For Sale" property-types=",SFR" price-min="600000" price-max="900000"></realscout-office-listings>';

export function RealScoutOfficeListingsSection() {
  return (
    <section
      className="border-b border-gold-200/40 bg-cream-50 py-8"
      aria-label="Office listings"
      data-below-hero="listings"
    >
      <div className="container mx-auto px-4">
        <p className="mb-2 font-sans text-xs uppercase tracking-[0.2em] text-gold-600">Current office listings</p>
        <h2 className="mb-6 font-serif text-2xl text-navy-800 md:text-3xl">
          Homes for sale <span className="text-gold-600">$600K–$900K</span>
        </h2>
        <div className="realscout-wrapper" dangerouslySetInnerHTML={{ __html: OFFICE_LISTINGS_HTML }} />
      </div>
    </section>
  );
}
