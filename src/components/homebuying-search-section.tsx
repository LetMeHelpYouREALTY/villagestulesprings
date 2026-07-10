"use client";

import { useState } from "react";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { MarketInsightsCard } from "./homebuying-market-insights";
import { PropertyCard } from "./homebuying-property-card";
import { mockProperties } from "./homebuying-search-data";
import { SearchFiltersCard, type SearchFilters } from "./homebuying-search-filters";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function HomebuyingSearchSection() {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    location: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    bathrooms: "",
    propertyType: "",
    minSqFt: "",
    maxSqFt: "",
  });

  const [properties] = useState(mockProperties);

  const handleFilterChange = (field: keyof SearchFilters, value: string) => {
    setSearchFilters((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            Find Your <span className="text-green-600">Perfect Home</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Search thousands of homes for sale in Las Vegas. Use our advanced filters to find properties that match your
            exact criteria and budget.
          </p>
        </div>

        <SearchFiltersCard searchFilters={searchFilters} onFilterChange={handleFilterChange} />

        {/* Search Results */}
        <div className="mb-8">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-2xl font-bold">Search Results</h3>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Sort by:</span>
              <Select defaultValue="price-high">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="newest">Newest Listings</SelectItem>
                  <SelectItem value="sqft-high">Largest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} formatPrice={formatPrice} />
            ))}
          </div>
        </div>

        <MarketInsightsCard />
      </div>
    </section>
  );
}
