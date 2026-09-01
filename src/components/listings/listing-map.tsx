import { MapPin, Navigation, Phone } from "lucide-react";

import { CalendlyButton } from "@/components/calendly-button";
import { Button } from "@/components/ui/button";
import { SITE_NAP } from "@/config/site-nap";
import {
  HEARTLAND_SALES_OFFICE,
  listingDirectionsUrl,
  listingFullAddress,
  listingMapEmbedUrl,
  type HeartlandPlan,
} from "@/data/heartland-cottages";

type ListingMapProps = {
  plan: HeartlandPlan;
};

export function ListingMap({ plan }: ListingMapProps) {
  const home = plan.inventory;
  const address = listingFullAddress(home);

  return (
    <section className="bg-cream-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center font-serif text-3xl text-navy-800">Tour this model in North Las Vegas</h2>
        <p className="mb-8 text-center font-sans text-navy-500">
          {address}. Sales office: {HEARTLAND_SALES_OFFICE}.
        </p>
        <div className="overflow-hidden rounded-lg border border-navy-200/20 shadow-sm">
          <iframe
            title={`Map of ${address}`}
            src={listingMapEmbedUrl(home)}
            className="h-[380px] w-full border-0 md:h-[480px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild className="bg-gold-400 font-sans uppercase tracking-widest text-navy-800 hover:bg-gold-300">
            <CalendlyButton event="homeTour" utmMedium="listing" utmCampaign={`tour-${plan.slug}`}>
              Schedule a showing
            </CalendlyButton>
          </Button>
          <Button asChild className="bg-navy-700 font-sans uppercase tracking-widest text-cream-100 hover:bg-navy-800">
            <a href={listingDirectionsUrl(home)} target="_blank" rel="noopener noreferrer">
              <Navigation className="mr-2 h-4 w-4" />
              Directions
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-navy-200/40 font-sans uppercase tracking-widest text-navy-700 hover:border-gold-400 hover:bg-gold-50"
          >
            <a href={SITE_NAP.phoneHref}>
              <Phone className="mr-2 h-4 w-4" />
              Call {SITE_NAP.phoneDisplay}
            </a>
          </Button>
        </div>
        <p className="mt-4 flex items-center justify-center gap-1.5 font-sans text-sm text-navy-400">
          <MapPin className="h-4 w-4 text-gold-500" />
          Cul-de-sac lot {home.lotNumber} · {home.closingWindow}
        </p>
      </div>
    </section>
  );
}
