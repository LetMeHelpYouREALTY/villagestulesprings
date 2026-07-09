import { HEYBERKSHIRE_CONFIG } from "@/config/heyberkshire-config";

export function FeaturedPropertiesSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center justify-between md:flex-row">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">Featured Properties</h2>
            <p className="text-lg text-slate-600">Discover exceptional homes in Las Vegas and Henderson</p>
          </div>
          <a
            href={HEYBERKSHIRE_CONFIG.realScoutSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100 md:mt-0"
          >
            View All Properties
          </a>
        </div>

        <div>
          <realscout-office-listings
            agent-encoded-id={HEYBERKSHIRE_CONFIG.realScoutAgentEncodedId}
            sort-order="NEWEST"
            listing-status="For Sale"
            property-types=",SFR,MF,TC"
            price-min="500000"
            price-max="800000"
          />
        </div>
      </div>
    </section>
  );
}
