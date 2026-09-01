import { SITE_NAP } from "@/config/site-nap";
import type { FaqItem } from "@/data/luxury-pages";
import { heartlandBreadcrumbSchema, localBusinessSchema } from "@/lib/listing-schema";

const BASE_URL = SITE_NAP.url;

function areaServedPlace(): Record<string, unknown> {
  return {
    "@type": "Place",
    name: "The Villages at Tule Springs",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_NAP.streetAddress,
      addressLocality: SITE_NAP.city,
      addressRegion: SITE_NAP.region,
      postalCode: SITE_NAP.postalCode,
      addressCountry: SITE_NAP.country,
    },
  };
}

export function faqPageSchema(pagePath: string, faqs: readonly FaqItem[]): Record<string, unknown> {
  return {
    "@type": "FAQPage",
    "@id": `${BASE_URL}${pagePath}#faq`,
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export type MarketingPageGraphOptions = {
  path: string;
  serviceName: string;
  serviceType: string;
  description: string;
  faqs?: readonly FaqItem[];
  breadcrumbs: readonly { name: string; path: string }[];
};

export function marketingPageGraph(options: MarketingPageGraphOptions): Record<string, unknown> {
  const url = `${BASE_URL}${options.path}`;
  const graph: Record<string, unknown>[] = [
    localBusinessSchema(),
    {
      "@type": "Service",
      name: options.serviceName,
      serviceType: options.serviceType,
      description: options.description,
      provider: { "@id": `${BASE_URL}/#agent` },
      areaServed: areaServedPlace(),
      url,
    },
    heartlandBreadcrumbSchema(options.breadcrumbs),
  ];

  if (options.faqs && options.faqs.length > 0) {
    graph.push(faqPageSchema(options.path, options.faqs));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
