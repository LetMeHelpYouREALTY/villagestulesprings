import type { Metadata } from "next";
import Link from "next/link";

import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { FaqSection } from "@/components/faq-section";
import { HeadingPhoto } from "@/components/heading-photo";
import { JsonLd } from "@/components/json-ld";
import { PublicPageShell } from "@/components/public-page-shell";
import { generatePageMetadata } from "@/config/metadata-config";
import { NEIGHBORHOODS } from "@/content/neighborhoods";
import { MEDIA } from "@/lib/media-catalog";
import { buildPageJsonLd } from "@/lib/schema";

const PATH = "/neighborhoods";
const TITLE = "North Las Vegas Neighborhoods | Villages at Tule Springs | Dr. Janet Duffy";
const DESCRIPTION =
  "Neighborhood guides for Villages at Tule Springs, Aliante, Centennial Hills, and nearby North Las Vegas. Dr. Janet Duffy, 702-222-1964.";

export const metadata: Metadata = generatePageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  url: `https://villagestulesprings.com${PATH}`,
  canonical: PATH,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Neighborhoods", path: PATH },
];

const neighborhoodFaqs = [
  {
    question: "Which neighborhood pages are on this site?",
    answer:
      "Villages at Tule Springs, North Las Vegas, Tule Springs, Aliante, Skye Canyon, Centennial Hills, Heartland, Providence, Eldorado, Valley Vista, Summerlin, Henderson, and zip 89031 — each with unique copy and Place schema.",
  },
  {
    question: "Who can show homes in these North Las Vegas areas?",
    answer: "Dr. Janet Duffy, 702-222-1964. Book a 30-minute tour on this site’s calendar.",
  },
];

const jsonLd = buildPageJsonLd({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  pageType: "CollectionPage",
  breadcrumbs,
  itemList: {
    name: "Neighborhoods",
    items: NEIGHBORHOODS.map((place) => ({
      name: place.name,
      path: `/neighborhoods/${place.slug}`,
    })),
  },
  faqs: neighborhoodFaqs,
});

export default function NeighborhoodsIndexPage() {
  return (
    <PublicPageShell
      before={<JsonLd data={jsonLd} />}
      hero={
        <section className="bg-navy-800 px-4 py-20">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-300">North Las Vegas</p>
            <h1 className="mt-3 font-serif text-4xl text-cream-100 md:text-5xl">Neighborhoods</h1>
            <p className="seo-direct-answer mx-auto mt-4 max-w-3xl font-sans text-lg font-light text-cream-300">
              Unique pages for Villages at Tule Springs (89084) and comparison communities. Dr. Janet Duffy maps the
              parcel — not a valley average. Call 702-222-1964.
            </p>
            <HeadingPhoto asset={MEDIA.areasServed} className="mx-auto mt-10 max-w-3xl" priority />
          </div>
        </section>
      }
    >
      <BreadcrumbNav items={breadcrumbs} />
      <main className="bg-cream-50 px-4 py-16">
        <div className="container mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {NEIGHBORHOODS.map((place) => (
            <article key={place.slug} className="rounded-lg border border-gold-200 bg-cream-100 p-6">
              <h2 className="font-serif text-2xl text-navy-800">
                <Link href={`/neighborhoods/${place.slug}`} className="hover:text-gold-600">
                  {place.name}
                </Link>
              </h2>
              <p className="mt-3 font-sans text-navy-500">{place.directAnswer}</p>
            </article>
          ))}
        </div>
      </main>
      <FaqSection items={neighborhoodFaqs} />
    </PublicPageShell>
  );
}
