import Link from "next/link";

import { ExternalLink } from "lucide-react";

import { AmenityMapClient } from "@/components/amenities/amenity-map-client";
import { CuratedAmenityList } from "@/components/amenities/curated-amenity-list";
import { Button } from "@/components/ui/button";

type NearbyAmenitiesSectionProps = {
  variant?: "preview" | "full";
  kicker?: string;
  showCuratedList?: boolean;
};

export function NearbyAmenitiesSection({
  variant = "preview",
  kicker = "What's nearby",
  showCuratedList = false,
}: NearbyAmenitiesSectionProps) {
  const isPreview = variant === "preview";

  return (
    <section className="bg-cream-100 py-20" aria-labelledby="nearby-amenities-title">
      <div className="container mx-auto px-4">
        <p className="text-center font-sans text-xs uppercase tracking-[0.2em] text-gold-600">{kicker}</p>
        <h2
          id="nearby-amenities-title"
          className="mt-3 text-center font-serif text-3xl text-navy-800 md:text-4xl"
        >
          Life near <span className="text-gold-600">Villages at Tule Springs</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center font-sans text-navy-500">
          Parks, grocery, healthcare, golf, and schools within a short drive of North Las Vegas 89084. Filter the map or
          open the full amenities guide.
        </p>

        <div className="mx-auto mt-10 max-w-5xl">
          <AmenityMapClient variant={variant} showFilters />
          {showCuratedList ? <CuratedAmenityList /> : null}
          {isPreview ? (
            <div className="mt-8 text-center">
              <Button asChild className="bg-navy-700 font-sans uppercase tracking-widest text-cream-100 hover:bg-navy-800">
                <Link href="/amenities">
                  Full nearby amenities guide
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
