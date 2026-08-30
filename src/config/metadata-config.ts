import type { Metadata } from "next";

import { APP_CONFIG } from "./app-config";
import { BUSINESS } from "./business";

// Base URL for the website
const baseUrl = "https://villagestulesprings.com";

const homebuyerOgAlt = "Luxury home for sale at Villages at Tule Springs, North Las Vegas — Dr. Janet Duffy";

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

// Base Twitter configuration
export const baseTwitterConfig = {
  card: "summary_large_image" as const,
  images: defaultTwitterImage,
  creator: "@lasvegasrealtor",
  site: "@lasvegasrealestate",
  app: {
    name: "Las Vegas Real Estate Expert",
    id: {
      iphone: "lasvegasrealestate://",
      ipad: "lasvegasrealestate://",
      googleplay: "com.lasvegasrealestate.app",
    },
    url: {
      iphone: baseUrl,
      ipad: baseUrl,
    },
  },
};

// Base robots configuration
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

// Custom meta tags for real estate business
export const realEstateBusinessMeta = {
  "business:contact_data:street_address": BUSINESS.streetAddress,
  "business:contact_data:locality": BUSINESS.addressLocality,
  "business:contact_data:region": "Nevada",
  "business:contact_data:postal_code": BUSINESS.postalCode,
  "business:contact_data:country_name": "United States",
  "place:location:latitude": String(BUSINESS.geo.latitude),
  "place:location:longitude": String(BUSINESS.geo.longitude),
  "og:business:hours": "Mo-Fr 09:00-18:00",
  "og:business:category": "Real Estate Services",
  "og:business:contact_data:email": BUSINESS.email,
  "og:business:contact_data:phone_number": BUSINESS.telephoneDisplay,
};

// Function to generate page-specific metadata
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

function canonicalPathFromOptions(options: PageMetadataOptions): string {
  if (options.canonical) return options.canonical;
  if (options.url && options.url !== baseUrl && options.url !== `${baseUrl}/`) {
    try {
      const pathname = new URL(options.url, baseUrl).pathname;
      return pathname || "/";
    } catch {
      return "/";
    }
  }
  return "/";
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
  } = options;

  const canonical = canonicalPathFromOptions(options);

  const metadata: Metadata = {
    title,
    description,
    keywords: APP_CONFIG.meta.keywords,
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
      canonical,
    },
    openGraph: {
      ...baseOpenGraphConfig,
      title,
      description,
      url,
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
    robots: {
      ...baseRobotsConfig,
      index: !noindex,
      follow: !noindex,
    },
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
      yahoo: "your-yahoo-verification-code",
    },
    category: "Real Estate",
    classification: "Business",
    other: realEstateBusinessMeta,
  };

  return metadata;
}

// Pre-configured metadata for common page types
export const homePageMetadata = generatePageMetadata({
  title: APP_CONFIG.meta.title,
  description: APP_CONFIG.meta.description,
  url: baseUrl,
  canonical: "/",
});

export const aboutPageMetadata = generatePageMetadata({
  title: `About Dr. Janet Duffy | Villages at Tule Springs REALTOR®`,
  description: `Dr. Janet Duffy, Nevada license S.0197614.LLC, Berkshire Hathaway HomeServices Nevada Properties. Villages at Tule Springs, North Las Vegas, NV 89084. Call 702-222-1964.`,
  url: `${baseUrl}/about`,
  canonical: "/about",
  type: "profile",
});

export const listingsPageMetadata = generatePageMetadata({
  title: `Homes for Sale | Villages at Tule Springs | Dr. Janet Duffy`,
  description: `Browse homes for sale in Villages at Tule Springs, North Las Vegas 89084, with Dr. Janet Duffy. Live MLS widgets. Call 702-222-1964.`,
  url: `${baseUrl}/listings`,
  canonical: "/listings",
  images: [
    {
      url: "/og-listings.jpg",
      secureUrl: `${baseUrl}/og-listings.jpg`,
      type: "image/jpeg" as const,
      width: 1200,
      height: 630,
      alt: "Homes for sale in Villages at Tule Springs with Dr. Janet Duffy",
    },
  ],
});

export const contactPageMetadata = generatePageMetadata({
  title: `Contact Dr. Janet Duffy | Villages at Tule Springs REALTOR®`,
  description: `Contact Dr. Janet Duffy at 702-222-1964. Villages at Tule Springs, North Las Vegas, NV 89084. Book a 15-minute conversation.`,
  url: `${baseUrl}/contact`,
  canonical: "/contact",
  type: "website",
});

export const homeValuationPageMetadata = generatePageMetadata({
  title: `Free Home Valuation | Villages at Tule Springs | Dr. Janet Duffy`,
  description: `Get a Villages at Tule Springs home valuation from Dr. Janet Duffy. Instant estimate plus a 15-minute review. Call 702-222-1964.`,
  url: `${baseUrl}/home-valuation`,
  canonical: "/home-valuation",
  images: [
    {
      url: "/og-valuation.jpg",
      secureUrl: `${baseUrl}/og-valuation.jpg`,
      type: "image/jpeg" as const,
      width: 1200,
      height: 630,
      alt: "Home valuation in Villages at Tule Springs with Dr. Janet Duffy",
    },
  ],
});

// Function to generate article metadata for blog posts
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
          secureUrl: `${baseUrl}${featuredImage}`,
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
    canonical: new URL(url, baseUrl).pathname,
  });
}
