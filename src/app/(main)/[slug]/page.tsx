import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MarketingPageView } from "@/components/marketing-page-view";
import { generatePageMetadata } from "@/config/metadata-config";
import { getMarketingPage, marketingSlugs } from "@/content/marketing-pages";

type MarketingSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return marketingSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: MarketingSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getMarketingPage(slug);
  if (!page) return { title: "Not found" };
  return generatePageMetadata({
    title: page.title,
    description: page.description,
    url: `https://villagestulesprings.com/${slug}`,
    canonical: `/${slug}`,
  });
}

export default async function MarketingSlugPage({ params }: MarketingSlugPageProps) {
  const { slug } = await params;
  const page = getMarketingPage(slug);
  if (!page) notFound();
  return <MarketingPageView page={page} />;
}
