import type { Metadata } from "next";

import { AmenityMapClient } from "@/components/amenities/amenity-map-client";
import { CuratedAmenityList } from "@/components/amenities/curated-amenity-list";
import { JsonLd } from "@/components/json-ld";
import { LuxuryCtaBand } from "@/components/luxury-cta-band";
import { LuxuryFaq } from "@/components/luxury-faq";
import { PublicPageShell } from "@/components/public-page-shell";
import { COMMUNITY_MAP_LABEL } from "@/config/community-map";
import { generatePageMetadata } from "@/config/metadata-config";
import { SITE_NAP } from "@/config/site-nap";
import {
  AMENITIES_FAQS,
  AMENITIES_PAGE_PATH,
  AMENITY_PROSE_SECTIONS,
} from "@/data/amenities-page";
import { amenitiesPageGraph } from "@/lib/amenities-schema";

export const revalidate = 86400;

export const metadata: Metadata = generatePageMetadata({
  title: `Nearby Amenities in ${COMMUNITY_MAP_LABEL} | North Las Vegas 89084`,
  description: `Interactive map of restaurants, parks, golf, healthcare, grocery, and schools near ${COMMUNITY_MAP_LABEL}. Hyperlocal guide from ${SITE_NAP.agentName}. Call ${SITE_NAP.phoneDisplay}.`,
  url: `${SITE_NAP.url}${AMENITIES_PAGE_PATH}`,
  canonical: AMENITIES_PAGE_PATH,
});

function AmenitiesHero() {
  return (
    <section className="bg-navy-800 px-4 py-20">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-300">
          Hyperlocal map · {SITE_NAP.city} {SITE_NAP.postalCode}
        </p>
        <h1 className="mt-3 font-serif text-4xl text-cream-100 md:text-5xl">
          Nearby Amenities in {COMMUNITY_MAP_LABEL}, {SITE_NAP.city}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-sans text-lg font-light text-cream-300">
          Dining, parks, healthcare, golf, shopping, and schools around the North 215 master plan — plus drive-time
          context for the Strip, the airport, and Summerlin. Map filters update live when your Google Maps key is set.
        </p>
      </div>
    </section>
  );
}

export default function AmenitiesPage() {
  return (
    <PublicPageShell before={<JsonLd data={amenitiesPageGraph()} />} hero={<AmenitiesHero />}>
      <main>
        <section className="bg-cream-50 py-16">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="mb-6 text-center font-serif text-3xl text-navy-800">Interactive amenity map</h2>
            <p className="mx-auto mb-8 max-w-2xl text-center font-sans text-navy-500">
              Switch categories to explore Google-listed places within a few miles of the community center. A branded
              marker shows {COMMUNITY_MAP_LABEL}; tap any pin for directions.
            </p>
            <AmenityMapClient variant="full" showFilters />
          </div>
        </section>

        <section className="bg-cream-100 py-16">
          <div className="container mx-auto max-w-3xl px-4">
            {AMENITY_PROSE_SECTIONS.map((section) => (
              <article key={section.id} className="mb-10 last:mb-0">
                <h2 className="font-serif text-2xl text-navy-800">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-3 font-sans text-navy-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </section>

        <section className="bg-cream-50 py-16">
          <div className="container mx-auto max-w-5xl px-4">
            <CuratedAmenityList title="Verified highlights near Tule Springs" />
          </div>
        </section>

        <LuxuryFaq title="Living near Villages at Tule Springs" items={AMENITIES_FAQS} />

        <LuxuryCtaBand
          kicker="Your Tule Springs buyer agent"
          title={`Tour ${COMMUNITY_MAP_LABEL} with ${SITE_NAP.agentName}`}
          lede={`${SITE_NAP.brokerage}. Nevada license ${SITE_NAP.license}. Call ${SITE_NAP.phoneDisplay} or email ${SITE_NAP.email}.`}
          utmMedium="amenities"
          utmCampaign="nearby-guide-cta"
        />
      </main>
    </PublicPageShell>
  );
}
