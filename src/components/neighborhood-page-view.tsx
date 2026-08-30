import Link from "next/link";

import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { FaqSection } from "@/components/faq-section";
import { HeadingPhoto } from "@/components/heading-photo";
import { JsonLd } from "@/components/json-ld";
import { PublicPageShell } from "@/components/public-page-shell";
import { NEIGHBORHOODS, type NeighborhoodContent } from "@/content/neighborhoods";
import { buildPageJsonLd } from "@/lib/schema";

type NeighborhoodPageViewProps = {
  place: NeighborhoodContent;
};

export function NeighborhoodPageView({ place }: NeighborhoodPageViewProps) {
  const path = `/neighborhoods/${place.slug}`;
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Neighborhoods", path: "/neighborhoods" },
    { name: place.name, path },
  ];
  const jsonLd = buildPageJsonLd({
    path,
    title: place.title,
    description: place.description,
    pageType: "WebPage",
    breadcrumbs,
    faqs: place.faqs,
    place: { name: place.name, description: place.directAnswer },
    service: {
      name: `${place.name} real estate`,
      description: `Buyer and seller representation in ${place.name} with Dr. Janet Duffy.`,
    },
  });

  return (
    <PublicPageShell
      before={<JsonLd data={jsonLd} />}
      hero={
        <section className="bg-navy-800 px-4 py-20">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-300">{place.kicker}</p>
            <h1 className="mt-3 font-serif text-4xl text-cream-100 md:text-5xl">{place.h1}</h1>
            <p className="seo-direct-answer mx-auto mt-4 max-w-3xl font-sans text-lg font-light text-cream-300">
              {place.directAnswer}
            </p>
            <HeadingPhoto asset={place.photo} className="mx-auto mt-10 max-w-3xl" priority />
          </div>
        </section>
      }
    >
      <BreadcrumbNav items={breadcrumbs} />
      <main className="bg-cream-50">
        {place.sections.map((section) => (
          <section key={section.heading} className="border-b border-gold-200/40 px-4 py-16">
            <div className="container mx-auto max-w-4xl">
              <HeadingPhoto asset={section.photo} className="mb-8" />
              <h2 className="mb-4 font-serif text-3xl text-navy-800">{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="mb-4 font-sans leading-relaxed text-navy-500">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}

        <section className="px-4 py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 font-serif text-3xl text-navy-800">Nearby areas</h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {NEIGHBORHOODS.filter((item) => item.slug !== place.slug).map((item) => (
                <li key={item.slug}>
                  <Link href={`/neighborhoods/${item.slug}`} className="font-sans text-gold-600 hover:underline">
                    {item.name} real estate
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <FaqSection items={place.faqs} />
      </main>
    </PublicPageShell>
  );
}
