import type { Metadata } from "next";
import Link from "next/link";

import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { HeadingPhoto } from "@/components/heading-photo";
import { JsonLd } from "@/components/json-ld";
import { PublicPageShell } from "@/components/public-page-shell";
import { generatePageMetadata } from "@/config/metadata-config";
import { MEDIA } from "@/lib/media-catalog";
import { buildPageJsonLd } from "@/lib/schema";

const PATH = "/blog";
const TITLE = "Market Insights | Villages at Tule Springs | Dr. Janet Duffy";
const DESCRIPTION =
  "Las Vegas and North Las Vegas market notes from Dr. Janet Duffy. Current 89084 comps by appointment — 702-222-1964.";

export const metadata: Metadata = generatePageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  url: `https://villagestulesprings.com${PATH}`,
  canonical: PATH,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Market Insights", path: PATH },
];

const jsonLd = buildPageJsonLd({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  pageType: "CollectionPage",
  breadcrumbs,
  itemList: {
    name: "Articles",
    items: [
      {
        name: "Las Vegas Real Estate Market Update: 2024 Trends & Insights",
        path: "/blog/las-vegas-market-update-2024",
      },
    ],
  },
});

export default function BlogIndexPage() {
  return (
    <PublicPageShell
      before={<JsonLd data={jsonLd} />}
      hero={
        <section className="bg-navy-800 px-4 py-20">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-300">From Dr. Janet Duffy</p>
            <h1 className="mt-3 font-serif text-4xl text-cream-100 md:text-5xl">Market Insights</h1>
            <p className="seo-direct-answer mx-auto mt-4 max-w-3xl font-sans text-lg font-light text-cream-300">
              Dated articles plus a live 89084 comp pull by appointment. Call 702-222-1964. The 2024 valley overview is
              context — not a substitute for current MLS numbers.
            </p>
            <HeadingPhoto asset={MEDIA.blogMarket2024} className="mx-auto mt-10 max-w-3xl" priority />
          </div>
        </section>
      }
    >
      <BreadcrumbNav items={breadcrumbs} />
      <main className="bg-cream-50 px-4 py-16">
        <article className="container mx-auto max-w-4xl rounded-lg border border-gold-200 bg-cream-100 p-8">
          <p className="font-sans text-xs uppercase tracking-widest text-gold-600">January 15, 2024</p>
          <h2 className="mt-3 font-serif text-2xl text-navy-800">
            <Link href="/blog/las-vegas-market-update-2024" className="hover:text-gold-600">
              Las Vegas Real Estate Market Update: 2024 Trends &amp; Insights
            </Link>
          </h2>
          <p className="mt-3 font-sans text-navy-500">
            Valley-wide context from 2024. For a current Villages at Tule Springs pull, use the{" "}
            <Link href="/market" className="text-gold-600 hover:underline">
              89084 market notes
            </Link>{" "}
            or call 702-222-1964.
          </p>
        </article>
      </main>
    </PublicPageShell>
  );
}
