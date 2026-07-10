"use client";

import { Button } from "@/components/ui/button";

import { MaravillaPropertyCard } from "./maravilla-property-card-v2";
import { maravillaProperties } from "./maravilla-property-listings-v2-data";

export { MaravillaPropertyCard };

export function MaravillaPropertyListings() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Maravilla Homes Available Now</h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Discover luxury living in Las Vegas with our beautifully designed homes. Each property features modern
            amenities and energy-efficient design.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {maravillaProperties.map((property) => (
            <MaravillaPropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="px-8">
            View All Maravilla Properties
          </Button>
        </div>
      </div>
    </section>
  );
}
