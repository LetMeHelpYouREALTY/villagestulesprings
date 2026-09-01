import { MapPin, Navigation, Phone, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SITE_NAP } from "@/config/site-nap";

const DIRECTIONS_HREF =
  "https://www.google.com/maps/dir/?api=1&destination=Villages+at+Tule+Springs,+North+Las+Vegas,+NV+89084";

const REVIEWS_HREF =
  "https://www.google.com/maps/search/?api=1&query=Villages+at+Tule+Springs+North+Las+Vegas+NV+89084";

/**
 * GBP-aligned Call, Directions, and Google reviews actions plus visible NAP.
 */
export function OfficeActions() {
  return (
    <section className="bg-cream-100 py-16">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-600">Office</p>
        <h2 className="mt-3 font-serif text-3xl text-navy-800">Visit Villages at Tule Springs</h2>
        <p className="mt-4 font-sans text-navy-500">
          {SITE_NAP.businessName}, {SITE_NAP.streetAddress}, {SITE_NAP.city}, {SITE_NAP.region} {SITE_NAP.postalCode}
        </p>
        <p className="mt-2 font-sans text-navy-500">
          {SITE_NAP.weekdayHours}. {SITE_NAP.saturdayHours}. {SITE_NAP.sundayHours}.
        </p>
        <p className="mt-2 font-sans text-navy-500">
          <a href={SITE_NAP.phoneHref} className="text-gold-600 underline-offset-4 hover:underline">
            {SITE_NAP.phoneDisplay}
          </a>
          {" · "}
          <a href={`mailto:${SITE_NAP.email}`} className="text-gold-600 underline-offset-4 hover:underline">
            {SITE_NAP.email}
          </a>
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild className="bg-gold-400 font-sans uppercase tracking-widest text-navy-800 hover:bg-gold-300">
            <a href={SITE_NAP.phoneHref}>
              <Phone className="mr-2 h-4 w-4" />
              Call
            </a>
          </Button>
          <Button asChild className="bg-navy-700 font-sans uppercase tracking-widest text-cream-100 hover:bg-navy-800">
            <a href={DIRECTIONS_HREF} target="_blank" rel="noopener noreferrer">
              <Navigation className="mr-2 h-4 w-4" />
              Directions
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-navy-200/40 font-sans uppercase tracking-widest text-navy-700 hover:border-gold-400 hover:bg-gold-50"
          >
            <a href={REVIEWS_HREF} target="_blank" rel="noopener noreferrer">
              <Star className="mr-2 h-4 w-4" />
              View Google Reviews
            </a>
          </Button>
        </div>
        <p className="mt-6 flex items-center justify-center gap-2 font-sans text-sm text-navy-500">
          <MapPin className="h-4 w-4 text-gold-600" aria-hidden="true" />
          {SITE_NAP.agentName}, {SITE_NAP.brokerage}, license {SITE_NAP.license}
        </p>
      </div>
    </section>
  );
}
