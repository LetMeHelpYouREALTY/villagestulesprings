import type { MediaAsset } from "@/lib/media-catalog";
import type { FaqItem } from "@/lib/schema";

export type ContentSection = {
  heading: string;
  body: string[];
  photo: MediaAsset;
};

export type MarketingPageContent = {
  slug: string;
  kicker: string;
  h1: string;
  title: string;
  description: string;
  directAnswer: string;
  photo: MediaAsset;
  pageType: "WebPage" | "ContactPage" | "CollectionPage";
  service?: { name: string; description: string };
  howTo?: { name: string; steps: { name: string; text: string }[] };
  itemList?: { name: string; items: { name: string; path: string }[] };
  sections: ContentSection[];
  faqs: FaqItem[];
};
