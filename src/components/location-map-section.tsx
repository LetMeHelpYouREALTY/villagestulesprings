import { MapPin, Navigation } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getMapEmbedUrl } from "@/config/env";

export function LocationMapSection() {
  const embedUrl = getMapEmbedUrl();

  if (!embedUrl) {
    return null;
  }

  return (
    <section className="bg-cream-50 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-600">Location</p>
          <h2 className="mb-4 mt-2 font-serif text-4xl text-navy-800 lg:text-5xl">
            Visit <span className="text-gold-600">Villages at Tule Springs</span>
          </h2>
          <p className="mx-auto max-w-2xl font-sans text-xl font-light text-navy-500">
            North Las Vegas master-planned living — minutes from shopping, dining, and the Strip corridor.
          </p>
        </div>

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

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild className="bg-gold-400 font-sans uppercase tracking-widest text-navy-800 hover:bg-gold-300">
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
      </div>
    </section>
  );
}
