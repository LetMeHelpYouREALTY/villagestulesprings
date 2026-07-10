import type { Metadata } from "next";

import { APP_CONFIG } from "./app-config";

// Base URL for the website
const baseUrl = "https://villagestulesprings.com";

// Default Open Graph image configuration
export const defaultOGImages = [
  {
    url: "/og-image.jpg",
    secureUrl: `${baseUrl}/og-image.jpg`,
    type: "image/jpeg" as const,
    width: 1200,
    height: 630,
    alt: "Las Vegas Real Estate Expert - Dr. Janet Duffy helping clients find their dream home",
  },
  {
    url: "/og-image-square.jpg",
    secureUrl: `${baseUrl}/og-image-square.jpg`,
    type: "image/jpeg" as const,
    width: 800,
    height: 800,
    alt: "Dr. Janet Duffy - Licensed Las Vegas Real Estate Agent",
  },
];

// Default Twitter Card image configuration
export const defaultTwitterImage = {
  url: "/og-image.jpg",
  alt: "Las Vegas Real Estate Expert - Dr. Janet Duffy",
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
  "business:contact_data:street_address": "123 Main Street, Las Vegas, NV 89101",
  "business:contact_data:locality": "Las Vegas",
  "business:contact_data:region": "Nevada",
  "business:contact_data:postal_code": "89101",
  "business:contact_data:country_name": "United States",
  "place:location:latitude": "36.1699",
  "place:location:longitude": "-115.1398",
  "og:business:hours": "Mo-Fr 09:00-18:00",
  "og:business:category": "Real Estate Services",
  "og:business:contact_data:email": APP_CONFIG.meta.email,
  "og:business:contact_data:phone_number": APP_CONFIG.meta.phone,
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
    alternates: {
      canonical: canonical ?? "/",
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
});

export const aboutPageMetadata = generatePageMetadata({
  title: `About Dr. Janet Duffy | ${APP_CONFIG.name}`,
  description: `Learn about Dr. Janet Duffy, your trusted Las Vegas real estate expert with 15+ years of experience helping clients buy and sell homes in Las Vegas, Henderson, and surrounding areas.`,
  url: `${baseUrl}/about`,
  type: "profile",
});

export const listingsPageMetadata = generatePageMetadata({
  title: `Las Vegas Homes for Sale | ${APP_CONFIG.name}`,
  description: `Browse exclusive Las Vegas home listings with Dr. Janet Duffy. Find your dream home with our comprehensive property search and expert real estate guidance.`,
  url: `${baseUrl}/listings`,
  images: [
    {
      url: "/og-listings.jpg",
      secureUrl: `${baseUrl}/og-listings.jpg`,
      type: "image/jpeg" as const,
      width: 1200,
      height: 630,
      alt: "Las Vegas Homes for Sale - Exclusive Listings with Dr. Janet Duffy",
    },
  ],
});

export const contactPageMetadata = generatePageMetadata({
  title: `Contact Dr. Janet Duffy | ${APP_CONFIG.name}`,
  description: `Get in touch with Dr. Janet Duffy for expert Las Vegas real estate services. Schedule a consultation for buying, selling, or home valuation services.`,
  url: `${baseUrl}/contact`,
  type: "website",
});

export const homeValuationPageMetadata = generatePageMetadata({
  title: `Free Home Valuation | ${APP_CONFIG.name}`,
  description: `Get a free, professional home valuation for your Las Vegas property. Dr. Janet Duffy provides accurate market analysis and pricing insights for your home.`,
  url: `${baseUrl}/home-valuation`,
  images: [
    {
      url: "/og-valuation.jpg",
      secureUrl: `${baseUrl}/og-valuation.jpg`,
      type: "image/jpeg" as const,
      width: 1200,
      height: 630,
      alt: "Free Home Valuation Service - Dr. Janet Duffy Las Vegas Real Estate",
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
  });
}
