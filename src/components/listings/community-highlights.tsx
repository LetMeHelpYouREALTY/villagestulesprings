import { CheckCircle2, MapPin, Shield, Trees } from "lucide-react";

import { HeadingPhoto } from "@/components/heading-photo";
import { SectionIntro } from "@/components/section-intro";
import { HEARTLAND_BROCHURE_URL, HEARTLAND_HOA_MONTHLY, HEARTLAND_SALES_OFFICE } from "@/data/heartland-cottages";
import { MEDIA } from "@/lib/media-catalog";

const HIGHLIGHTS = [
  {
    icon: Shield,
    title: "Gated community",
    body: "Heartland Cottages sits inside The Villages at Tule Springs master plan with a controlled-access gate.",
  },
  {
    icon: CheckCircle2,
    title: "No SID or LID",
    body: "The builder reports no SID or LID assessments on these lots. Confirm in title and escrow.",
  },
  {
    icon: Trees,
    title: "Parks and trails",
    body: `Master-planned parks and trails. HOA is $${HEARTLAND_HOA_MONTHLY} per month.`,
  },
  {
    icon: MapPin,
    title: "Revere & North 215",
    body: "122,000 sq ft Smith's Marketplace planned at 900 W. Tule Springs Parkway (Revere and the North 215). Targeted 2027 opening per the Las Vegas Review-Journal, 1 July 2026.",
  },
] as const;

export function CommunityHighlights() {
  return (
    <section className="bg-cream-50 py-20">
      <div className="container mx-auto px-4">
        <SectionIntro
          kicker="Heartland Cottages"
          title={
            <>
              Gated living in <span className="text-gold-600">The Villages at Tule Springs</span>
            </>
          }
          subtitle="Permanent 1,700 and 1,865 sq ft model pages. Tour with Dr. Jan Duffy, the Tule Springs buyer agent, not the builder desk."
        />
        <HeadingPhoto asset={MEDIA.amenityPool} className="mx-auto mb-12 max-w-5xl" />
        <div className="grid gap-6 md:grid-cols-2">
          {HIGHLIGHTS.map((item) => (
            <div key={item.title} className="rounded-lg border border-navy-200/20 bg-white p-6">
              <item.icon className="mb-3 h-6 w-6 text-gold-500" aria-hidden="true" />
              <h3 className="font-serif text-xl text-navy-800">{item.title}</h3>
              <p className="mt-2 font-sans text-navy-500">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center font-sans text-sm text-navy-500">
          Sales office: {HEARTLAND_SALES_OFFICE}.{" "}
          <a
            href={HEARTLAND_BROCHURE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-600 underline-offset-4 hover:underline"
          >
            Heartland Cottages floorplan brochure
          </a>
          .
        </p>
      </div>
    </section>
  );
}
