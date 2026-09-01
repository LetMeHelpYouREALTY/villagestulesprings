import { SITE_HOURS, SITE_NAP } from "@/config/site-nap";
import {
  HEARTLAND_COMMUNITY_PATH,
  HEARTLAND_FAQS,
  HEARTLAND_LAST_UPDATED,
  bedroomLabel,
  formatUsd,
  listingFullAddress,
  listingStreetAddress,
  planPath,
  youtubeWatchUrl,
  type HeartlandPlan,
} from "@/data/heartland-cottages";

const BASE_URL = SITE_NAP.url;

export function localBusinessSchema(): Record<string, unknown> {
  return {
    "@type": "RealEstateAgent",
    "@id": `${BASE_URL}/#agent`,
    name: SITE_NAP.agentName,
    alternateName: SITE_NAP.businessName,
    description:
      "Tule Springs buyer specialist for The Villages at Tule Springs and Heartland Cottages in North Las Vegas 89084.",
    url: BASE_URL,
    telephone: SITE_NAP.phoneDisplay,
    email: SITE_NAP.email,
    image: `${BASE_URL}/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_NAP.streetAddress,
      addressLocality: SITE_NAP.city,
      addressRegion: SITE_NAP.region,
      postalCode: SITE_NAP.postalCode,
      addressCountry: SITE_NAP.country,
    },
    openingHoursSpecification: SITE_HOURS.map((block) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...block.days],
      opens: block.opens,
      closes: block.closes,
    })),
    areaServed: {
      "@type": "Place",
      name: "The Villages at Tule Springs",
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE_NAP.city,
        addressRegion: SITE_NAP.region,
        postalCode: SITE_NAP.postalCode,
        addressCountry: SITE_NAP.country,
      },
    },
    knowsAbout: [
      "The Villages at Tule Springs",
      "Heartland Cottages",
      "North Las Vegas 89084",
      "New-construction buyer representation",
    ],
    parentOrganization: {
      "@type": "Organization",
      name: SITE_NAP.brokerage,
    },
  };
}

export function heartlandCommunitySchema(): Record<string, unknown> {
  return {
    "@type": "ResidenceCommunity",
    "@id": `${BASE_URL}${HEARTLAND_COMMUNITY_PATH}#community`,
    name: "Heartland Cottages at The Villages at Tule Springs",
    url: `${BASE_URL}${HEARTLAND_COMMUNITY_PATH}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "358 Tiffany Springs Ave",
      addressLocality: "North Las Vegas",
      addressRegion: "NV",
      postalCode: "89084",
      addressCountry: "US",
    },
  };
}

export function heartlandFaqSchema(): Record<string, unknown> {
  return {
    "@type": "FAQPage",
    "@id": `${BASE_URL}${HEARTLAND_COMMUNITY_PATH}#faq`,
    mainEntity: HEARTLAND_FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function heartlandBreadcrumbSchema(items: readonly { name: string; path: string }[]): Record<string, unknown> {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.path === "/" ? "/" : item.path}`,
    })),
  };
}

export function heartlandPlanListingSchema(plan: HeartlandPlan): Record<string, unknown> {
  const url = `${BASE_URL}${planPath(plan.slug)}`;
  const home = plan.inventory;

  return {
    "@type": "RealEstateListing",
    "@id": `${url}#listing`,
    url,
    name: `${listingStreetAddress(home)} ${plan.planLabel} model home, North Las Vegas`,
    description: `${plan.planLabel} model home at Heartland Cottages: ${formatUsd(home.price)}, ${bedroomLabel(plan)}, ${plan.bathrooms} baths, ${plan.squareFeet.toLocaleString("en-US")} sq ft. MLS ${home.mlsNumber}.`,
    datePosted: HEARTLAND_LAST_UPDATED,
    mainEntity: {
      "@type": "Offer",
      businessFunction: "http://purl.org/goodrelations/v1#Sell",
      price: home.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      sku: `MLS-${home.mlsNumber}`,
      seller: { "@id": `${BASE_URL}/#agent` },
      itemOffered: {
        "@type": "SingleFamilyResidence",
        name: `${plan.planLabel} model home`,
        numberOfBedrooms: plan.bedrooms,
        numberOfBathroomsTotal: plan.bathrooms,
        numberOfRooms: plan.hasDen ? plan.bedrooms + 1 : plan.bedrooms,
        floorSize: {
          "@type": "QuantitativeValue",
          value: plan.squareFeet,
          unitCode: "FTK",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: listingStreetAddress(home),
          addressLocality: home.city,
          addressRegion: home.region,
          postalCode: home.postalCode,
          addressCountry: "US",
        },
        url,
        subjectOf: {
          "@type": "VideoObject",
          name: plan.videoTitle,
          embedUrl: `https://www.youtube-nocookie.com/embed/${plan.videoId}`,
          contentUrl: youtubeWatchUrl(plan.videoId),
        },
      },
    },
  };
}

export function heartlandCommunityGraph(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessSchema(),
      heartlandCommunitySchema(),
      heartlandFaqSchema(),
      heartlandBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Heartland Cottages", path: HEARTLAND_COMMUNITY_PATH },
      ]),
    ],
  };
}

export function heartlandPlanGraph(plan: HeartlandPlan): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessSchema(),
      heartlandCommunitySchema(),
      heartlandPlanListingSchema(plan),
      heartlandFaqSchema(),
      heartlandBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Heartland Cottages", path: HEARTLAND_COMMUNITY_PATH },
        { name: plan.planLabel, path: planPath(plan.slug) },
      ]),
    ],
  };
}

export function listingDescription(plan: HeartlandPlan): string {
  const home = plan.inventory;
  return `${listingFullAddress(home)} — ${plan.planLabel} model home in gated Heartland Cottages at The Villages at Tule Springs. ${formatUsd(home.price)}, ${bedroomLabel(plan)}, ${plan.bathrooms} baths, ${plan.squareFeet.toLocaleString("en-US")} sq ft, 2-car garage. No SID or LID. MLS ${home.mlsNumber}. Call Dr. Jan Duffy at ${SITE_NAP.phoneDisplay}.`;
}
