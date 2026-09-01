import Link from "next/link";

import { Bath, Bed, Car, Ruler } from "lucide-react";

import { CalendlyButton } from "@/components/calendly-button";
import { HeadingPhoto } from "@/components/heading-photo";
import { ListingMap } from "@/components/listings/listing-map";
import { ListingNap } from "@/components/listings/listing-nap";
import { ModelHomeCard } from "@/components/listings/model-home-card";
import { YoutubePlanTour } from "@/components/listings/youtube-plan-tour";
import { Button } from "@/components/ui/button";
import { SITE_NAP } from "@/config/site-nap";
import {
  HEARTLAND_BROCHURE_URL,
  HEARTLAND_COMMUNITY_PATH,
  bedroomLabel,
  formatSqFt,
  formatUsd,
  getSiblingPlans,
  listingFullAddress,
  type HeartlandPlan,
} from "@/data/heartland-cottages";

type ModelHomeDetailProps = {
  plan: HeartlandPlan;
};

export function ModelHomeDetail({ plan }: ModelHomeDetailProps) {
  const home = plan.inventory;
  const siblings = getSiblingPlans(plan.slug);

  return (
    <main>
      <section className="bg-cream-50 py-16">
        <div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-3">
            <YoutubePlanTour plan={plan} />
            <HeadingPhoto asset={plan.image} />
            <p className="font-sans text-sm text-navy-400">
              Representative {plan.planLabel} model photo. Actual lot finishes may vary.
            </p>
          </div>
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-lg border border-navy-200/20 bg-white p-6">
              <p className="font-serif text-4xl text-navy-800">{formatUsd(home.price)}</p>
              <p className="mt-1 font-sans text-sm uppercase tracking-widest text-gold-600">
                Lot {home.lotNumber} · MLS {home.mlsNumber}
              </p>
              <p className="mt-4 font-sans text-navy-500">{listingFullAddress(home)}</p>
              <dl className="mt-6 grid grid-cols-2 gap-4 font-sans text-sm text-navy-700">
                <div className="flex items-center gap-2">
                  <Bed className="h-4 w-4 text-gold-500" />
                  <div>
                    <dt className="text-navy-400">Beds</dt>
                    <dd>{bedroomLabel(plan)}</dd>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-4 w-4 text-gold-500" />
                  <div>
                    <dt className="text-navy-400">Baths</dt>
                    <dd>{plan.bathrooms}</dd>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Ruler className="h-4 w-4 text-gold-500" />
                  <div>
                    <dt className="text-navy-400">Living area</dt>
                    <dd>{formatSqFt(plan.squareFeet)}</dd>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="h-4 w-4 text-gold-500" />
                  <div>
                    <dt className="text-navy-400">Garage</dt>
                    <dd>{plan.garageSpaces}-car</dd>
                  </div>
                </div>
              </dl>
              <ul className="mt-6 space-y-2 font-sans text-sm text-navy-600">
                <li>All appliances and window blinds included</li>
                <li>{home.closingWindow}</li>
                {home.isCulDeSac ? <li>Cul-de-sac lot</li> : null}
                <li>Gated community · no SID or LID</li>
              </ul>
              <div className="mt-8 flex flex-col gap-3">
                <Button
                  asChild
                  className="bg-gold-400 font-sans uppercase tracking-widest text-navy-800 hover:bg-gold-300"
                >
                  <CalendlyButton event="homeTour" utmMedium="model" utmCampaign={plan.slug}>
                    Book a 30-minute tour
                  </CalendlyButton>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-navy-200/40 font-sans uppercase tracking-widest text-navy-700"
                >
                  <a href={SITE_NAP.phoneHref}>Call {SITE_NAP.phoneDisplay}</a>
                </Button>
                <a
                  href={HEARTLAND_BROCHURE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center font-sans text-sm text-gold-600 underline-offset-4 hover:underline"
                >
                  Open floorplan brochure
                </a>
              </div>
            </div>
            <ListingNap />
          </div>
        </div>
      </section>

      <ListingMap plan={plan} />

      {siblings.length > 0 ? (
        <section className="bg-cream-100 py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="mb-8 text-center font-serif text-3xl text-navy-800">Other Heartland Cottages models</h2>
            <div className="mx-auto grid max-w-xl gap-8">
              {siblings.map((sibling) => (
                <ModelHomeCard key={sibling.id} plan={sibling} />
              ))}
            </div>
            <p className="mt-8 text-center">
              <Link
                href={HEARTLAND_COMMUNITY_PATH}
                className="font-sans text-gold-600 underline-offset-4 hover:underline"
              >
                All Heartland Cottages model homes
              </Link>
            </p>
          </div>
        </section>
      ) : null}
    </main>
  );
}
