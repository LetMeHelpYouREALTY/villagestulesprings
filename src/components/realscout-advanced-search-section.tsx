import { HeadingPhoto } from "@/components/heading-photo";
import { RealScoutAdvancedSearchWidget } from "@/components/realscout-advanced-search-widget";
import { SectionIntro } from "@/components/section-intro";
import { MEDIA } from "@/lib/media-catalog";

export function RealScoutAdvancedSearchSection() {
  return (
    <section className="bg-cream-100 py-24">
      <div className="container mx-auto px-4">
        <SectionIntro
          kicker="Private inventory desk"
          title={
            <>
              Search residences in <span className="text-gold-600">89084</span>
            </>
          }
          subtitle="Filter Villages at Tule Springs and North Las Vegas listings with Dr. Jan Duffy's RealScout search."
        />
        <HeadingPhoto asset={MEDIA.perfectHome} className="mx-auto mb-10 max-w-5xl" />
        <div className="mx-auto max-w-4xl rounded-lg border border-navy-200/20 bg-cream-50 p-6 md:p-8">
          <style
            dangerouslySetInnerHTML={{
              __html: `
                realscout-advanced-search {
                  width: 100%;
                  display: block;
                }
              `,
            }}
          />
          <RealScoutAdvancedSearchWidget />
        </div>
      </div>
    </section>
  );
}
