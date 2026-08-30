import Link from "next/link";

import { FaqSection } from "@/components/faq-section";
import { HeadingPhoto } from "@/components/heading-photo";
import { HOME_DIRECT_ANSWER, HOME_FAQS, HOME_GUIDE_LINKS, HOME_SERVICE_LINKS } from "@/content/home";
import { NEIGHBORHOODS } from "@/content/neighborhoods";
import { MEDIA } from "@/lib/media-catalog";

export function HomeSeoSections() {
  return (
    <>
      <section className="bg-cream-50 px-4 py-16">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-600">Direct answer</p>
          <p className="seo-direct-answer mt-4 font-sans text-lg leading-relaxed text-navy-700">{HOME_DIRECT_ANSWER}</p>
        </div>
      </section>

      <section className="bg-cream-100 py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center font-serif text-3xl text-navy-800 md:text-4xl">
            Real estate services in <span className="text-gold-600">89084</span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center font-sans text-navy-500">
            Licensed representation for Villages at Tule Springs, North Las Vegas — not a valley-wide average.
          </p>
          <HeadingPhoto asset={MEDIA.experienceExpertise} className="mx-auto mb-10 max-w-5xl" />
          <ul className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-3">
            {HOME_SERVICE_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg border border-gold-200 bg-cream-50 p-6 transition-colors hover:border-gold-400"
                >
                  <span className="font-serif text-xl text-navy-800">{item.label}</span>
                  <span className="mt-2 block font-sans text-sm text-navy-500">{item.blurb}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center font-serif text-3xl text-navy-800 md:text-4xl">
            North Las Vegas neighborhoods
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center font-sans text-navy-500">
            Unique pages for Villages at Tule Springs and comparison communities — with Place schema on each.
          </p>
          <HeadingPhoto asset={MEDIA.areasServed} className="mx-auto mb-10 max-w-5xl" />
          <ul className="mx-auto grid max-w-5xl gap-3 md:grid-cols-2 lg:grid-cols-3">
            {NEIGHBORHOODS.map((place) => (
              <li key={place.slug}>
                <Link href={`/neighborhoods/${place.slug}`} className="font-sans text-gold-600 hover:underline">
                  {place.name} real estate
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy-800 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-6 font-serif text-3xl text-cream-100">Guides</h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {HOME_GUIDE_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-sans text-gold-300 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection items={HOME_FAQS} />
    </>
  );
}
