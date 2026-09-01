import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { BuilderFinancing } from "@/components/listings/builder-financing";
import { CommunityHighlights } from "@/components/listings/community-highlights";
import { MlsDisclaimer } from "@/components/listings/mls-disclaimer";
import { ModelHomeDetail } from "@/components/listings/model-home-detail";
import { ModelHomeFaq } from "@/components/listings/model-home-faq";
import { PublicPageShell } from "@/components/public-page-shell";
import { generatePageMetadata } from "@/config/metadata-config";
import { SITE_NAP } from "@/config/site-nap";
import { HEARTLAND_PLANS, getPlanBySlug, planPath, type HeartlandPlanId } from "@/data/heartland-cottages";
import { heartlandPlanGraph, listingDescription } from "@/lib/listing-schema";

export const revalidate = 86400;
export const dynamicParams = false;

type PlanPageProps = {
  params: Promise<{ plan: string }>;
};

export function generateStaticParams(): { plan: HeartlandPlanId }[] {
  return HEARTLAND_PLANS.map((item) => ({ plan: item.id }));
}

export async function generateMetadata({ params }: PlanPageProps): Promise<Metadata> {
  const { plan: slug } = await params;
  const plan = getPlanBySlug(slug);
  if (!plan) {
    return generatePageMetadata({
      title: "Model home not found | Heartland Cottages",
      noindex: true,
      canonical: "/heartland-cottages",
    });
  }

  const home = plan.inventory;
  const title = `${plan.planLabel} Model Home | ${home.streetNumber} ${home.streetName} | North Las Vegas`;

  return generatePageMetadata({
    title,
    description: listingDescription(plan),
    url: `${SITE_NAP.url}${planPath(plan.slug)}`,
    canonical: planPath(plan.slug),
  });
}

export default async function HeartlandPlanPage({ params }: PlanPageProps) {
  const { plan: slug } = await params;
  const plan = getPlanBySlug(slug);
  if (!plan) notFound();

  return (
    <PublicPageShell before={<JsonLd data={heartlandPlanGraph(plan)} />}>
      <ModelHomeDetail plan={plan} />
      <CommunityHighlights />
      <BuilderFinancing />
      <ModelHomeFaq />
      <MlsDisclaimer plan={plan} />
    </PublicPageShell>
  );
}
