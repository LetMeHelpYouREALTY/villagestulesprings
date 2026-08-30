import { BUSINESS } from "@/config/business";

export type FaqItem = { question: string; answer: string };

export type BreadcrumbItem = { name: string; path: string };

export type SchemaNode = Record<string, unknown>;

const CONTEXT = "https://schema.org";

function originPath(path: string): string {
  if (path === "/") return BUSINESS.url;
  return `${BUSINESS.url}${path}`;
}

export function postalAddress(): SchemaNode {
  return {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.streetAddress,
    addressLocality: BUSINESS.addressLocality,
    addressRegion: BUSINESS.addressRegion,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.addressCountry,
  };
}

export function realEstateAgentNode(): SchemaNode {
  return {
    "@type": "RealEstateAgent",
    "@id": `${BUSINESS.url}/#agent`,
    name: BUSINESS.legalName,
    alternateName: BUSINESS.brandName,
    url: BUSINESS.url,
    image: BUSINESS.image,
    logo: BUSINESS.logo,
    telephone: BUSINESS.telephoneDisplay,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    areaServed: BUSINESS.areaServed.map((name) => ({
      "@type": "City",
      name,
      containedInPlace: { "@type": "State", name: "Nevada" },
    })),
    knowsAbout: [
      "Villages at Tule Springs real estate",
      "North Las Vegas new construction",
      "Las Vegas luxury homes",
      "Home valuation",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      recognizedBy: { "@type": "Organization", name: "Nevada Real Estate Division" },
      identifier: BUSINESS.license,
    },
    memberOf: {
      "@type": "Organization",
      name: BUSINESS.brokerage,
    },
    openingHoursSpecification: BUSINESS.hours.map((block) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...block.days],
      opens: block.opens,
      closes: block.closes,
    })),
    sameAs: [...BUSINESS.sameAs],
  };
}

export function webSiteNode(): SchemaNode {
  return {
    "@type": "WebSite",
    "@id": `${BUSINESS.url}/#website`,
    url: BUSINESS.url,
    name: BUSINESS.brandName,
    publisher: { "@id": `${BUSINESS.url}/#agent` },
    inLanguage: "en-US",
  };
}

export function breadcrumbListNode(items: BreadcrumbItem[]): SchemaNode {
  return {
    "@type": "BreadcrumbList",
    "@id": `${originPath(items[items.length - 1]?.path ?? "/")}/#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: originPath(item.path),
    })),
  };
}

export function faqPageNode(path: string, faqs: FaqItem[]): SchemaNode | null {
  if (faqs.length === 0) return null;
  return {
    "@type": "FAQPage",
    "@id": `${originPath(path)}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serviceNode(name: string, description: string, path: string): SchemaNode {
  return {
    "@type": "Service",
    "@id": `${originPath(path)}#service`,
    name,
    description,
    provider: { "@id": `${BUSINESS.url}/#agent` },
    areaServed: BUSINESS.areaServed.map((city) => ({ "@type": "City", name: city })),
    url: originPath(path),
  };
}

export function placeNode(name: string, description: string, path: string): SchemaNode {
  return {
    "@type": "Place",
    "@id": `${originPath(path)}#place`,
    name,
    description,
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    url: originPath(path),
  };
}

export function howToNode(path: string, name: string, steps: { name: string; text: string }[]): SchemaNode | null {
  if (steps.length === 0) return null;
  return {
    "@type": "HowTo",
    "@id": `${originPath(path)}#howto`,
    name,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function itemListNode(path: string, name: string, items: { name: string; path: string }[]): SchemaNode | null {
  if (items.length === 0) return null;
  return {
    "@type": "ItemList",
    "@id": `${originPath(path)}#itemlist`,
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: originPath(item.path),
    })),
  };
}

type PageSchemaInput = {
  path: string;
  title: string;
  description: string;
  pageType: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "ProfilePage";
  breadcrumbs: BreadcrumbItem[];
  faqs?: FaqItem[];
  service?: { name: string; description: string };
  place?: { name: string; description: string };
  howTo?: { name: string; steps: { name: string; text: string }[] };
  itemList?: { name: string; items: { name: string; path: string }[] };
};

export function buildPageJsonLd(input: PageSchemaInput): SchemaNode {
  const pageUrl = originPath(input.path);
  const webPage: SchemaNode = {
    "@type": input.pageType,
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: input.title,
    description: input.description,
    isPartOf: { "@id": `${BUSINESS.url}/#website` },
    about: { "@id": `${BUSINESS.url}/#agent` },
    breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
    inLanguage: "en-US",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".seo-direct-answer", ".faq-answer"],
    },
  };

  const graph: SchemaNode[] = [realEstateAgentNode(), webSiteNode(), webPage, breadcrumbListNode(input.breadcrumbs)];

  const faq = faqPageNode(input.path, input.faqs ?? []);
  if (faq) graph.push(faq);
  if (input.service) graph.push(serviceNode(input.service.name, input.service.description, input.path));
  if (input.place) graph.push(placeNode(input.place.name, input.place.description, input.path));
  if (input.howTo) {
    const howTo = howToNode(input.path, input.howTo.name, input.howTo.steps);
    if (howTo) graph.push(howTo);
  }
  if (input.itemList) {
    const list = itemListNode(input.path, input.itemList.name, input.itemList.items);
    if (list) graph.push(list);
  }

  return { "@context": CONTEXT, "@graph": graph };
}

export function articleJsonLd(input: {
  path: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
}): SchemaNode {
  const pageUrl = originPath(input.path);
  return {
    "@context": CONTEXT,
    "@graph": [
      realEstateAgentNode(),
      webSiteNode(),
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: input.title,
        description: input.description,
        datePublished: input.datePublished,
        dateModified: input.dateModified,
        author: { "@id": `${BUSINESS.url}/#agent` },
        publisher: { "@id": `${BUSINESS.url}/#agent` },
        mainEntityOfPage: pageUrl,
        image: BUSINESS.image,
        inLanguage: "en-US",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".seo-direct-answer"],
        },
      },
      breadcrumbListNode([
        { name: "Home", path: "/" },
        { name: "Market Insights", path: "/blog" },
        { name: input.title, path: input.path },
      ]),
    ],
  };
}
