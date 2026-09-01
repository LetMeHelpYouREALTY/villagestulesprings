import { HeadingPhoto } from "@/components/heading-photo";
import { RealScoutOfficeListingsWidget } from "@/components/realscout-office-listings-widget";
import { SectionIntro } from "@/components/section-intro";
import { MEDIA } from "@/lib/media-catalog";

/**
 * RealScout office listings — placed below the hero on every public page.
 * Script loads once from RealScoutScript in the root layout head.
 */
export function RealScoutOfficeListingsSection() {
  return (
    <section className="bg-cream-50 py-16" aria-label="Office listings">
      <div className="container mx-auto px-4">
        <SectionIntro
          kicker="Office listings · $600K–$900K"
          title={
            <>
              Homes for sale in <span className="text-gold-600">Tule Springs</span>
            </>
          }
          subtitle="Single-family homes from $600,000 to $900,000 in Dr. Jan Duffy's office feed — The Villages at Tule Springs and North Las Vegas 89084."
          className="mb-10"
        />
        <HeadingPhoto asset={MEDIA.featuredListings} className="mx-auto mb-10 max-w-5xl" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              realscout-office-listings {
                --rs-listing-divider-color: rgb(101, 141, 172);
                width: 100%;
              }
            `,
          }}
        />
        <RealScoutOfficeListingsWidget />
      </div>
    </section>
  );
}
