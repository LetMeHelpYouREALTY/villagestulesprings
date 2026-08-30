import { BUSINESS } from "@/config/business";
import { SITE_ORIGIN } from "@/lib/site-urls";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

function absolute(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return path === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${path}`;
}

export function postalAddressJsonLd(): Record<string, unknown> {
  return {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.streetAddress,
    addressLocality: BUSINESS.addressLocality,
    addressRegion: BUSINESS.addressRegion,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.addressCountry,
  };
}

/** RealEstateAgent is a LocalBusiness subtype — one honest NAP node, no invented ratings. */
export function localBusinessJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": ["RealEstateAgent", "LocalBusiness"],
    "@id": `${SITE_ORIGIN}/#business`,
    name: BUSINESS.agentName,
    legalName: BUSINESS.agentName,
    alternateName: BUSINESS.name,
    description: `Nevada REALTOR® at ${BUSINESS.brokerage} serving ${BUSINESS.name}, ${BUSINESS.addressLocality} ${BUSINESS.postalCode}. License ${BUSINESS.license}.`,
    url: SITE_ORIGIN,
    telephone: BUSINESS.phoneDisplay,
    email: BUSINESS.email,
    image: `${SITE_ORIGIN}/og-image.jpg`,
    address: postalAddressJsonLd(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    areaServed: [
      {
        "@type": "City",
        name: "North Las Vegas",
        containedInPlace: { "@type": "State", name: "Nevada" },
      },
      {
        "@type": "City",
        name: "Las Vegas",
        containedInPlace: { "@type": "State", name: "Nevada" },
      },
    ],
    memberOf: {
      "@type": "Organization",
      name: BUSINESS.brokerage,
    },
    identifier: {
      "@type": "PropertyValue",
      name: "Nevada Real Estate License",
      value: BUSINESS.license,
    },
  };
}

export function webSiteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_ORIGIN}/#website`,
    name: BUSINESS.name,
    url: SITE_ORIGIN,
    publisher: { "@id": `${SITE_ORIGIN}/#business` },
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

export function articleJsonLd(options: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}): Record<string, unknown> {
  const url = absolute(options.path);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: options.title,
    description: options.description,
    url,
    mainEntityOfPage: url,
    datePublished: options.datePublished,
    dateModified: options.dateModified ?? options.datePublished,
    author: {
      "@type": "Person",
      name: BUSINESS.agentName,
      url: `${SITE_ORIGIN}/about`,
    },
    publisher: {
      "@id": `${SITE_ORIGIN}/#business`,
    },
    image: `${SITE_ORIGIN}/og-image.jpg`,
  };
}
