import { ModelHomeCard } from "@/components/listings/model-home-card";
import { SectionIntro } from "@/components/section-intro";
import { HEARTLAND_PLANS } from "@/data/heartland-cottages";

export function FeaturedPropertiesSection() {
  return (
    <section className="bg-cream-50 py-24">
      <div className="container mx-auto px-4">
        <SectionIntro
          kicker="Available Now"
          title={
            <>
              Heartland Cottages <span className="text-gold-600">Model Homes</span>
            </>
          }
          subtitle="A curated pair of gated Heartland Cottages models in The Villages at Tule Springs. Tour with Dr. Jan Duffy."
          className="mb-16"
        />

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {HEARTLAND_PLANS.map((plan) => (
            <ModelHomeCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
