import type { Metadata } from "next";
import Link from "next/link";

import { BuyerServicesSection } from "@/components/buyer-services-section";
import { JsonLd } from "@/components/json-ld";
import { BuilderFinancing } from "@/components/listings/builder-financing";
import { CommunityHighlights } from "@/components/listings/community-highlights";
import { MlsDisclaimer } from "@/components/listings/mls-disclaimer";
import { ModelHomeCard } from "@/components/listings/model-home-card";
import { ModelHomeFaq } from "@/components/listings/model-home-faq";
import { PublicPageShell } from "@/components/public-page-shell";
import { generatePageMetadata } from "@/config/metadata-config";
import { SITE_NAP } from "@/config/site-nap";
import { HEARTLAND_COMMUNITY_PATH, HEARTLAND_PLANS } from "@/data/heartland-cottages";
import { heartlandCommunityGraph } from "@/lib/listing-schema";

export const revalidate = 86400;

export const metadata: Metadata = generatePageMetadata({
  title: "Heartland Cottages Model Homes | Gated Villages at Tule Springs | North Las Vegas",
  description: `Permanent model-home pages for gated Heartland Cottages in The Villages at Tule Springs. 1,700 and 1,865 sq ft plans, no SID or LID, HOA $111/month. Call ${SITE_NAP.agentName} at ${SITE_NAP.phoneDisplay}.`,
  url: `${SITE_NAP.url}${HEARTLAND_COMMUNITY_PATH}`,
  canonical: HEARTLAND_COMMUNITY_PATH,
});

function HeartlandHero() {
  return (
    <section className="bg-navy-800 px-4 py-20">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-300">
          Tour with Dr. Jan Duffy · Tule Springs buyer agent
        </p>
        <h1 className="mt-3 font-serif text-4xl text-cream-100 md:text-5xl">
          Heartland Cottages model homes in The Villages at Tule Springs
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-sans text-lg font-light text-cream-300">
          Gated D.R. Horton plans in North Las Vegas 89084. 1,700 sq ft and 1,865 sq ft with den. No SID or LID. $111
          HOA. She represents you, not the builder.
        </p>
      </div>
    </section>
  );
}

export default function HeartlandCottagesPage() {
  return (
    <PublicPageShell before={<JsonLd data={heartlandCommunityGraph()} />} hero={<HeartlandHero />}>
      <main>
        <section className="bg-cream-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center font-serif text-4xl text-navy-800">Available model plans</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center font-sans text-navy-500">
              These pages stay live as the community models. Current cul-de-sac lots are listed with October closings.
            </p>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              {HEARTLAND_PLANS.map((plan) => (
                <ModelHomeCard key={plan.id} plan={plan} />
              ))}
            </div>
            <p className="mt-8 text-center font-sans text-sm text-navy-500">
              Tour with {SITE_NAP.agentName} at{" "}
              <a href={SITE_NAP.phoneHref} className="text-gold-600 underline-offset-4 hover:underline">
                {SITE_NAP.phoneDisplay}
              </a>
              .{" "}
              <Link href="/" className="text-gold-600 underline-offset-4 hover:underline">
                Back to Villages at Tule Springs
              </Link>
              .
            </p>
          </div>
        </section>
        <BuyerServicesSection />
        <CommunityHighlights />
        <BuilderFinancing />
        <ModelHomeFaq />
        <MlsDisclaimer />
      </main>
    </PublicPageShell>
  );
}
