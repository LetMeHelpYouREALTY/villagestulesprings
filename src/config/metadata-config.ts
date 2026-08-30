import type { Metadata } from "next";

import { SITE_ORIGIN, canonicalPathFromUrl } from "@/lib/site-urls";

import { APP_CONFIG } from "./app-config";
import { BUSINESS, NAP_LINE } from "./business";

const baseUrl = SITE_ORIGIN;

const homebuyerOgAlt = "Homes at Villages at Tule Springs, North Las Vegas 89084 — Dr. Janet Duffy";

// Default Open Graph image — 1200x630 only.
// Do not list the square crop here: some crawlers emit the last og:image tag.
export const defaultOGImages = [
  {
    url: "/og-image.jpg",
    secureUrl: `${baseUrl}/og-image.jpg`,
    type: "image/jpeg" as const,
    width: 1200,
    height: 630,
    alt: homebuyerOgAlt,
  },
];

// Default Twitter Card image configuration (summary_large_image requires 1200x630)
export const defaultTwitterImage = {
  url: "/og-image.jpg",
  alt: homebuyerOgAlt,
  width: 1200,
  height: 630,
};

// Base Open Graph configuration
export const baseOpenGraphConfig = {
  siteName: APP_CONFIG.name,
  locale: "en_US" as const,
  type: "website" as const,
  images: defaultOGImages,
};

// Base Twitter configuration — no invented app deep links
export const baseTwitterConfig = {
  card: "summary_large_image" as const,
  images: defaultTwitterImage,
};

export const baseRobotsConfig = {
  index: true,
  follow: true,
  nocache: false,
  googleBot: {
    index: true,
    follow: true,
    noimageindex: false,
    "max-video-preview": -1,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
  },
};

export const noindexRobotsConfig = {
  index: false,
  follow: false,
  nocache: true,
  googleBot: {
    index: false,
    follow: false,
    noimageindex: true,
    "max-video-preview": 0,
    "max-image-preview": "none" as const,
    "max-snippet": 0,
  },
};

export const noindexMetadata: Metadata = {
  robots: noindexRobotsConfig,
};

export const realEstateBusinessMeta = {
  "business:contact_data:street_address": NAP_LINE,
  "business:contact_data:locality": BUSINESS.addressLocality,
  "business:contact_data:region": "Nevada",
  "business:contact_data:postal_code": BUSINESS.postalCode,
  "business:contact_data:country_name": "United States",
  "place:location:latitude": String(BUSINESS.latitude),
  "place:location:longitude": String(BUSINESS.longitude),
  "og:business:category": "Real Estate Services",
  "og:business:contact_data:email": BUSINESS.email,
  "og:business:contact_data:phone_number": BUSINESS.phoneDisplay,
};

export interface PageMetadataOptions {
  title?: string;
  description?: string;
  url?: string;
  images?: typeof defaultOGImages;
  twitterImages?: typeof defaultTwitterImage;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  canonical?: string;
}

function toAbsolutePageUrl(url: string): string {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  const path = url.startsWith("/") ? url : `/${url}`;
  return path === "/" ? `${baseUrl}/` : `${baseUrl}${path}`;
}

// eslint-disable-next-line complexity -- destructures many independent optional SEO fields, not deeply nested logic
export function generatePageMetadata(options: PageMetadataOptions = {}): Metadata {
  const {
    title = APP_CONFIG.meta.title,
    description = APP_CONFIG.meta.description,
    url = baseUrl,
    images = defaultOGImages,
    twitterImages = defaultTwitterImage,
    type = "website",
    publishedTime,
    modifiedTime,
    author = APP_CONFIG.meta.author,
    section,
    tags = [],
    noindex = false,
    canonical,
  } = options;

  const absoluteUrl = toAbsolutePageUrl(url);
  const canonicalPath = canonicalPathFromUrl(absoluteUrl, canonical);

  const metadata: Metadata = {
    title,
    description,
    authors: [{ name: author }],
    creator: author,
    publisher: author,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    icons: {
      icon: [
        { url: "/icon.png", type: "image/png", sizes: "512x512" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      ...baseOpenGraphConfig,
      title,
      description,
      url: absoluteUrl,
      type,
      images,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      ...baseTwitterConfig,
      title,
      description,
      images: twitterImages,
    },
    robots: noindex ? noindexRobotsConfig : baseRobotsConfig,
    category: "Real Estate",
    classification: "Business",
    other: realEstateBusinessMeta,
  };

  return metadata;
}

export const homePageMetadata = generatePageMetadata({
  title: APP_CONFIG.meta.title,
  description: APP_CONFIG.meta.description,
  url: baseUrl,
  canonical: "/",
});

export const aboutPageMetadata = generatePageMetadata({
  title: "About Dr. Janet Duffy | Villages at Tule Springs",
  description: `Dr. Janet Duffy, ${BUSINESS.brokerage} (license ${BUSINESS.license}), helps buyers and sellers in Villages at Tule Springs, North Las Vegas ${BUSINESS.postalCode}. Call ${BUSINESS.phoneDisplay}.`,
  url: `${baseUrl}/about`,
  type: "profile",
  canonical: "/about",
});

export const listingsPageMetadata = generatePageMetadata({
  title: `Homes for Sale | Villages at Tule Springs ${BUSINESS.postalCode}`,
  description: `Browse homes for sale in Villages at Tule Springs, North Las Vegas ${BUSINESS.postalCode}, with Dr. Janet Duffy. Call ${BUSINESS.phoneDisplay}.`,
  url: `${baseUrl}/listings`,
  canonical: "/listings",
  images: [
    {
      url: "/og-listings.jpg",
      secureUrl: `${baseUrl}/og-listings.jpg`,
      type: "image/jpeg" as const,
      width: 1200,
      height: 630,
      alt: "Homes for sale in Villages at Tule Springs, North Las Vegas 89084",
    },
  ],
});

export const contactPageMetadata = generatePageMetadata({
  title: `Contact Dr. Janet Duffy | ${BUSINESS.phoneDisplay}`,
  description: `Contact Dr. Janet Duffy at Villages at Tule Springs, North Las Vegas ${BUSINESS.postalCode}. Call ${BUSINESS.phoneDisplay} or email ${BUSINESS.email}.`,
  url: `${baseUrl}/contact`,
  canonical: "/contact",
  type: "website",
});

export const homeValuationPageMetadata = generatePageMetadata({
  title: `Home Valuation | Villages at Tule Springs ${BUSINESS.postalCode}`,
  description: `Request a home valuation in Villages at Tule Springs and North Las Vegas ${BUSINESS.postalCode} from Dr. Janet Duffy. Call ${BUSINESS.phoneDisplay}.`,
  url: `${baseUrl}/home-valuation`,
  canonical: "/home-valuation",
  images: [
    {
      url: "/og-valuation.jpg",
      secureUrl: `${baseUrl}/og-valuation.jpg`,
      type: "image/jpeg" as const,
      width: 1200,
      height: 630,
      alt: "Home valuation for Villages at Tule Springs, North Las Vegas 89084",
    },
  ],
});

export function generateArticleMetadata(options: {
  title: string;
  description: string;
  url: string;
  publishedTime: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  featuredImage?: string;
}): Metadata {
  const {
    title,
    description,
    url,
    publishedTime,
    modifiedTime,
    author = APP_CONFIG.meta.author,
    section = "Real Estate News",
    tags = [],
    featuredImage,
  } = options;

  const articleImages = featuredImage
    ? [
        {
          url: featuredImage,
          secureUrl: featuredImage.startsWith("http") ? featuredImage : `${baseUrl}${featuredImage}`,
          type: "image/jpeg" as const,
          width: 1200,
          height: 630,
          alt: title,
        },
      ]
    : defaultOGImages;

  return generatePageMetadata({
    title,
    description,
    url,
    images: articleImages,
    type: "article",
    publishedTime,
    modifiedTime,
    author,
    section,
    tags,
    canonical: canonicalPathFromUrl(url),
  });
}
