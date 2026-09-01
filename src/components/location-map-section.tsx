import { MapPin, Navigation } from "lucide-react";

import { CalendlyButton } from "@/components/calendly-button";
import { CalendlyInlineWidget } from "@/components/calendly-inline-widget";
import { HeadingPhoto } from "@/components/heading-photo";
import { SectionIntro } from "@/components/section-intro";
import { Button } from "@/components/ui/button";
import { getMapEmbedUrl } from "@/config/env";
import { MEDIA } from "@/lib/media-catalog";

export function LocationMapSection() {
  const embedUrl = getMapEmbedUrl();

  return (
    <section className="bg-cream-50 py-24">
      <div className="container mx-auto px-4">
        <SectionIntro
          kicker="Location"
          title={
            <>
              Visit <span className="text-gold-600">Villages at Tule Springs</span>
            </>
          }
          subtitle="North Las Vegas 89084 — The Villages at Tule Springs on the North 215 Beltway, next to Tule Springs Fossil Beds National Monument."
        />

        <HeadingPhoto asset={MEDIA.tuleSprings} className="mx-auto mb-8 max-w-5xl" />

        {embedUrl ? (
          <div className="overflow-hidden rounded-lg border border-navy-200/20 shadow-sm">
            <iframe
              title="Villages at Tule Springs map"
              src={embedUrl}
              className="h-[420px] w-full border-0 md:h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        ) : null}

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild className="bg-gold-400 font-sans uppercase tracking-widest text-navy-800 hover:bg-gold-300">
            <CalendlyButton event="homeTour" utmMedium="map" utmCampaign="location-tour">
              Schedule a Visit
            </CalendlyButton>
          </Button>
          <Button asChild className="bg-navy-700 font-sans uppercase tracking-widest text-cream-100 hover:bg-navy-800">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Villages+at+Tule+Springs,+North+Las+Vegas,+NV"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation className="mr-2 h-4 w-4" />
              Get Directions
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-navy-200/40 font-sans uppercase tracking-widest text-navy-700 hover:border-gold-400 hover:bg-gold-50"
          >
            <a href="tel:+17022221964">
              <MapPin className="mr-2 h-4 w-4" />
              Call 702-222-1964
            </a>
          </Button>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <h3 className="mb-4 text-center font-serif text-2xl text-navy-800">Book a 30-Minute Home Tour</h3>
          <CalendlyInlineWidget
            event="homeTour"
            title="Schedule a 30-minute home tour at Villages at Tule Springs"
            utmMedium="map"
            utmCampaign="location-inline-tour"
            height={680}
          />
        </div>
      </div>
    </section>
  );
}
