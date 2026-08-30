import { Bath, Bed, MapPin, Ruler } from "lucide-react";

import { CalendlyButton } from "@/components/calendly-button";
import { SectionIntro } from "@/components/section-intro";
import { SiteImage } from "@/components/site-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MEDIA } from "@/lib/media-catalog";

const FEATURED_PROPERTIES = [
  {
    id: "1",
    title: "Desert Vista Estate",
    address: "Tule Springs, North Las Vegas",
    price: "$1,285,000",
    beds: 4,
    baths: 3.5,
    sqft: "3,420",
    status: "For Sale" as const,
    image: MEDIA.featuredDesertVista,
  },
  {
    id: "2",
    title: "Maravilla Courtyard Residence",
    address: "Villages at Tule Springs",
    price: "$875,000",
    beds: 3,
    baths: 2.5,
    sqft: "2,610",
    status: "New Listing" as const,
    image: MEDIA.featuredMaravillaCourtyard,
  },
  {
    id: "3",
    title: "Aliante Luxury Single-Story",
    address: "North Las Vegas, NV",
    price: "$1,050,000",
    beds: 4,
    baths: 3,
    sqft: "2,980",
    status: "For Sale" as const,
    image: MEDIA.featuredAliante,
  },
];

export function FeaturedPropertiesSection() {
  return (
    <section className="bg-cream-50 py-24">
      <div className="container mx-auto px-4">
        <SectionIntro
          kicker="Available Now"
          title={
            <>
              Featured <span className="text-gold-600">Properties</span>
            </>
          }
          subtitle="A curated selection of homes in and around Villages at Tule Springs — each presented with institutional care."
          className="mb-16"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PROPERTIES.map((property) => (
            <Card
              key={property.id}
              className="overflow-hidden rounded-lg border border-navy-200/20 bg-cream-50 shadow-none transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-navy-100">
                <SiteImage asset={property.image} fill sizes="(max-width: 768px) 100vw, 33vw" />
                <Badge className="absolute right-3 top-3 rounded-md border-0 bg-gold-400 font-sans text-xs uppercase tracking-widest text-navy-800 hover:bg-gold-400">
                  {property.status}
                </Badge>
              </div>
              <CardContent className="space-y-4 p-6">
                <div>
                  <p className="font-serif text-2xl text-navy-800">{property.price}</p>
                  <h3 className="mt-1 font-serif text-lg text-navy-700">{property.title}</h3>
                  <p className="mt-1 flex items-center gap-1.5 font-sans text-sm text-navy-400">
                    <MapPin className="h-3.5 w-3.5 text-gold-500" />
                    {property.address}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 border-t border-gold-200/40 pt-4 font-sans text-sm text-navy-500">
                  <span className="flex items-center gap-1.5">
                    <Bed className="h-4 w-4 text-gold-500" />
                    {property.beds} Beds
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Bath className="h-4 w-4 text-gold-500" />
                    {property.baths} Baths
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Ruler className="h-4 w-4 text-gold-500" />
                    {property.sqft} Sq Ft
                  </span>
                </div>
                <Button
                  variant="outline"
                  className="w-full rounded-lg border-navy-200/40 font-sans uppercase tracking-widest text-navy-700 hover:border-gold-400 hover:bg-gold-50 hover:text-navy-800"
                  asChild
                >
                  <CalendlyButton event="homeTour" utmMedium="featured" utmCampaign={`featured-${property.id}`}>
                    Schedule a Showing
                  </CalendlyButton>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
