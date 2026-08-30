import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { NeighborhoodPageView } from "@/components/neighborhood-page-view";
import { generatePageMetadata } from "@/config/metadata-config";
import { getNeighborhood, neighborhoodSlugs } from "@/content/neighborhoods";

type NeighborhoodSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return neighborhoodSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: NeighborhoodSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const place = getNeighborhood(slug);
  if (!place) return { title: "Not found" };
  return generatePageMetadata({
    title: place.title,
    description: place.description,
    url: `https://villagestulesprings.com/neighborhoods/${slug}`,
    canonical: `/neighborhoods/${slug}`,
  });
}

export default async function NeighborhoodSlugPage({ params }: NeighborhoodSlugPageProps) {
  const { slug } = await params;
  const place = getNeighborhood(slug);
  if (!place) notFound();
  return <NeighborhoodPageView place={place} />;
}
