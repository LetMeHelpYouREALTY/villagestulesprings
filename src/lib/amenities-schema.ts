import { COMMUNITY_MAP_CENTER, COMMUNITY_MAP_LABEL } from "@/config/community-map";
import { SITE_NAP } from "@/config/site-nap";
import { AMENITIES_FAQS, AMENITIES_PAGE_PATH, CURATED_NEARBY_PLACES } from "@/data/amenities-page";
import { heartlandBreadcrumbSchema, localBusinessSchema } from "@/lib/listing-schema";
import { faqPageSchema, type MarketingPageGraphOptions } from "@/lib/marketing-schema";

const BASE_URL = SITE_NAP.url;

function communityPlaceSchema(): Record<string, unknown> {
  return {
    "@type": "Place",
    "@id": `${BASE_URL}${AMENITIES_PAGE_PATH}#community`,
    name: COMMUNITY_MAP_LABEL,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_NAP.streetAddress,
      addressLocality: SITE_NAP.city,
      addressRegion: SITE_NAP.region,
      postalCode: SITE_NAP.postalCode,
      addressCountry: SITE_NAP.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMMUNITY_MAP_CENTER.lat,
      longitude: COMMUNITY_MAP_CENTER.lng,
    },
  };
}

function featuredPlacesItemList(): Record<string, unknown> {
  return {
    "@type": "ItemList",
    "@id": `${BASE_URL}${AMENITIES_PAGE_PATH}#nearby-places`,
    name: `Featured places near ${COMMUNITY_MAP_LABEL}`,
    itemListElement: CURATED_NEARBY_PLACES.map((place, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": place.schemaType,
        name: place.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: place.address,
          addressLocality: SITE_NAP.city,
          addressRegion: SITE_NAP.region,
          postalCode: SITE_NAP.postalCode,
          addressCountry: SITE_NAP.country,
        },
      },
    })),
  };
}

export function amenitiesPageGraph(): Record<string, unknown> {
  const breadcrumbs: MarketingPageGraphOptions["breadcrumbs"] = [
    { name: "Home", path: "/" },
    { name: "Nearby Amenities", path: AMENITIES_PAGE_PATH },
  ];

  const agent = localBusinessSchema();
  const extendedAgent = {
    ...agent,
    areaServed: {
      "@type": "Place",
      name: COMMUNITY_MAP_LABEL,
      geo: {
        "@type": "GeoCoordinates",
        latitude: COMMUNITY_MAP_CENTER.lat,
        longitude: COMMUNITY_MAP_CENTER.lng,
      },
      address: agent.address,
    },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      extendedAgent,
      communityPlaceSchema(),
      featuredPlacesItemList(),
      heartlandBreadcrumbSchema(breadcrumbs),
      faqPageSchema(AMENITIES_PAGE_PATH, AMENITIES_FAQS),
      {
        "@type": "WebPage",
        "@id": `${BASE_URL}${AMENITIES_PAGE_PATH}#webpage`,
        url: `${BASE_URL}${AMENITIES_PAGE_PATH}`,
        name: `Nearby Amenities in ${COMMUNITY_MAP_LABEL}, ${SITE_NAP.city}`,
        description: `Interactive map and hyperlocal guide to dining, parks, healthcare, golf, and shopping near ${COMMUNITY_MAP_LABEL} in North Las Vegas 89084.`,
        isPartOf: { "@id": `${BASE_URL}/#website` },
      },
    ],
  };
}
