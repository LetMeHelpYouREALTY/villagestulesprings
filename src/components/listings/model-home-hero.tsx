import {
  bedroomLabel,
  formatSqFt,
  formatUsd,
  listingStreetAddress,
  type HeartlandPlan,
} from "@/data/heartland-cottages";

type ModelHomeHeroProps = {
  plan: HeartlandPlan;
};

export function ModelHomeHero({ plan }: ModelHomeHeroProps) {
  const home = plan.inventory;

  return (
    <section className="bg-navy-800 px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-300">
          Permanent model home · Heartland Cottages
        </p>
        <h1 className="mt-3 font-serif text-4xl text-cream-100 md:text-5xl">
          {plan.planLabel} model home at {listingStreetAddress(home)}
        </h1>
        <p className="mt-4 max-w-3xl font-sans text-lg font-light text-cream-300">
          Gated D.R. Horton plan in The Villages at Tule Springs. {formatUsd(home.price)}. {bedroomLabel(plan)}.{" "}
          {formatSqFt(plan.squareFeet)}. No SID or LID.
        </p>
      </div>
    </section>
  );
}
