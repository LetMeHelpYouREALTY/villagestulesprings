import Link from "next/link";

import { CalendlyInlineWidget } from "@/components/calendly-inline-widget";
import { FaqSection } from "@/components/faq-section";
import { HeadingPhoto } from "@/components/heading-photo";
import { BUSINESS } from "@/config/business";
import type { MarketingPageContent } from "@/content/marketing-types";
import { realScoutWidgetHtml } from "@/lib/realscout-widget";

const SEARCH_SLUGS = new Set(["listings", "buyers", "townhomes", "single-family-homes", "zip-89084", "luxury-homes"]);

type MarketingPageBodyProps = {
  page: MarketingPageContent;
};

export function MarketingPageBody({ page }: MarketingPageBodyProps) {
  return (
    <main className="bg-cream-50">
      {page.sections.map((section) => (
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

      {page.itemList ? <ItemListBlock list={page.itemList} /> : null}
      {page.howTo ? <HowToBlock howTo={page.howTo} /> : null}
      {SEARCH_SLUGS.has(page.slug) ? <SearchBlock /> : null}
      {page.slug === "home-valuation" ? <ValuationBlock /> : null}
      {page.slug === "contact" ? <ContactBlock /> : null}

      <FaqSection items={page.faqs} />
    </main>
  );
}

function ItemListBlock({ list }: { list: NonNullable<MarketingPageContent["itemList"]> }) {
  return (
    <section className="px-4 py-16">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-6 font-serif text-3xl text-navy-800">{list.name}</h2>
        <ul className="grid gap-3 md:grid-cols-2">
          {list.items.map((item) => (
            <li key={item.path}>
              <Link href={item.path} className="font-sans text-gold-600 hover:underline">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function HowToBlock({ howTo }: { howTo: NonNullable<MarketingPageContent["howTo"]> }) {
  return (
    <section className="border-b border-gold-200/40 px-4 py-16">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-6 font-serif text-3xl text-navy-800">{howTo.name}</h2>
        <ol className="space-y-4">
          {howTo.steps.map((step, index) => (
            <li key={step.name} className="rounded-lg border border-gold-200 bg-cream-100 p-5">
              <p className="font-serif text-xl text-navy-800">
                {index + 1}. {step.name}
              </p>
              <p className="mt-2 font-sans text-navy-500">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function SearchBlock() {
  return (
    <section className="px-4 py-16">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-6 font-serif text-3xl text-navy-800">Search live listings</h2>
        <div
          className="rounded-lg border border-navy-200/20 bg-cream-100 p-6"
          dangerouslySetInnerHTML={{ __html: realScoutWidgetHtml("advanced-search") }}
        />
      </div>
    </section>
  );
}

function ValuationBlock() {
  return (
    <section className="bg-navy-800 px-4 py-16">
      <div className="container mx-auto max-w-3xl">
        <h2 className="mb-6 font-serif text-3xl text-cream-100">Instant estimate</h2>
        <div
          className="rounded-lg border border-gold-200/20 bg-navy-700/50 p-8"
          dangerouslySetInnerHTML={{ __html: realScoutWidgetHtml("home-value") }}
        />
      </div>
    </section>
  );
}

function ContactBlock() {
  return (
    <section className="px-4 py-16">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-4 font-serif text-3xl text-navy-800">Book or call</h2>
        <p className="mb-6 text-navy-500">
          {BUSINESS.legalName} · {BUSINESS.addressLine} ·{" "}
          <a href={`tel:${BUSINESS.telephoneE164}`} className="text-gold-600">
            {BUSINESS.telephoneDisplay}
          </a>
        </p>
        <CalendlyInlineWidget
          event="conversation"
          title="Schedule with Dr. Jan Duffy"
          utmMedium="contact-page"
          utmCampaign="contact"
        />
      </div>
    </section>
  );
}
