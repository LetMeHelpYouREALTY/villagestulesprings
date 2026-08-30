import { CORE_MARKETING_PAGES_A } from "@/content/marketing-core-a";
import { CORE_MARKETING_PAGES_B } from "@/content/marketing-core-b";
import { EXTRA_MARKETING_PAGES_A } from "@/content/marketing-extra-a";
import { EXTRA_MARKETING_PAGES_B } from "@/content/marketing-extra-b";
import { EXTRA_MARKETING_PAGES_C } from "@/content/marketing-extra-c";
import type { ContentSection, MarketingPageContent } from "@/content/marketing-types";

export type { ContentSection, MarketingPageContent };

export const MARKETING_PAGES: MarketingPageContent[] = [
  ...CORE_MARKETING_PAGES_A,
  ...CORE_MARKETING_PAGES_B,
  ...EXTRA_MARKETING_PAGES_A,
  ...EXTRA_MARKETING_PAGES_B,
  ...EXTRA_MARKETING_PAGES_C,
];

const MARKETING_BY_SLUG = new Map(MARKETING_PAGES.map((page) => [page.slug, page]));

export function getMarketingPage(slug: string): MarketingPageContent | undefined {
  return MARKETING_BY_SLUG.get(slug);
}

export function marketingSlugs(): string[] {
  return MARKETING_PAGES.map((page) => page.slug);
}
