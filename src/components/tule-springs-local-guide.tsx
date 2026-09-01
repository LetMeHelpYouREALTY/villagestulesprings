import { HeadingPhoto } from "@/components/heading-photo";
import { SectionIntro } from "@/components/section-intro";
import {
  NEARBY_PLACES,
  SMITHS_MARKETPLACE,
  TULE_SPRINGS_FACTS_AS_OF,
  TULE_SPRINGS_MASTER_PLAN,
  ZIP_89084_MARKET,
  formatMarketPrice,
} from "@/data/tule-springs-local";
import { MEDIA } from "@/lib/media-catalog";

export function TuleSpringsLocalGuide() {
  return (
    <section className="bg-cream-50 py-24">
      <div className="container mx-auto px-4">
        <SectionIntro
          kicker={`Hyperlocal · ${TULE_SPRINGS_FACTS_AS_OF}`}
          title={
            <>
              Why buyers choose <span className="text-gold-600">Tule Springs</span>
            </>
          }
          subtitle={`${TULE_SPRINGS_MASTER_PLAN.acres.toLocaleString("en-US")} acres. ${TULE_SPRINGS_MASTER_PLAN.homesPlanned.toLocaleString("en-US")} homes planned. Zip ${TULE_SPRINGS_MASTER_PLAN.zip}.`}
        />
        <HeadingPhoto asset={MEDIA.tuleSprings} className="mx-auto mb-12 max-w-5xl" />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          <article className="rounded-lg border border-navy-200/20 bg-white p-6">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-600">89084 market</p>
            <p className="mt-2 font-serif text-3xl text-navy-800">
              {formatMarketPrice(ZIP_89084_MARKET.medianListPrice)}
            </p>
            <p className="mt-2 font-sans text-sm text-navy-500">
              Median list price. {ZIP_89084_MARKET.activeListings} active listings. {ZIP_89084_MARKET.daysOnMarket}{" "}
              average days on market. {formatMarketPrice(ZIP_89084_MARKET.pricePerSqFt)} per sq ft. Source:{" "}
              {ZIP_89084_MARKET.source}.
            </p>
          </article>
          <article className="rounded-lg border border-navy-200/20 bg-white p-6">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-600">Master plan</p>
            <p className="mt-2 font-serif text-3xl text-navy-800">
              {TULE_SPRINGS_MASTER_PLAN.acres.toLocaleString("en-US")} acres
            </p>
            <p className="mt-2 font-sans text-sm text-navy-500">
              {TULE_SPRINGS_MASTER_PLAN.name} in {TULE_SPRINGS_MASTER_PLAN.city}. Up to{" "}
              {TULE_SPRINGS_MASTER_PLAN.homesPlanned.toLocaleString("en-US")} homes. Sits on the{" "}
              {TULE_SPRINGS_MASTER_PLAN.beltway} next to {TULE_SPRINGS_MASTER_PLAN.monument}. Source:{" "}
              {TULE_SPRINGS_MASTER_PLAN.acresSource}.
            </p>
          </article>
          <article className="rounded-lg border border-navy-200/20 bg-white p-6">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-600">Retail in progress</p>
            <p className="mt-2 font-serif text-3xl text-navy-800">
              {SMITHS_MARKETPLACE.squareFeet.toLocaleString("en-US")} sq ft
            </p>
            <p className="mt-2 font-sans text-sm text-navy-500">
              {SMITHS_MARKETPLACE.name} at {SMITHS_MARKETPLACE.address}, {SMITHS_MARKETPLACE.intersection}. Targeted{" "}
              {SMITHS_MARKETPLACE.completionYear} opening. Source: {SMITHS_MARKETPLACE.source}.
            </p>
          </article>
        </div>
        <ul className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
          {NEARBY_PLACES.map((place) => (
            <li key={place.name} className="rounded-lg border border-navy-200/20 bg-white p-5">
              <p className="font-serif text-lg text-navy-800">{place.name}</p>
              <p className="mt-1 font-sans text-sm text-navy-500">{place.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
