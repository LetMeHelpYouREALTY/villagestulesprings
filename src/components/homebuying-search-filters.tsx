import { Search, MapPin, Filter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export interface SearchFilters {
  location: string;
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
  bathrooms: string;
  propertyType: string;
  minSqFt: string;
  maxSqFt: string;
}

interface SearchFiltersCardProps {
  searchFilters: SearchFilters;
  onFilterChange: (field: keyof SearchFilters, value: string) => void;
}

export function SearchFiltersCard({ searchFilters, onFilterChange }: SearchFiltersCardProps) {
  return (
    <Card className="mb-12 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl">
          <Filter className="mr-3 h-6 w-6 text-green-600" />
          Advanced Search Filters
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Label htmlFor="location">Location</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="location"
                placeholder="City, ZIP, or neighborhood"
                value={searchFilters.location}
                onChange={(e) => onFilterChange("location", e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="minPrice">Min Price</Label>
            <Select value={searchFilters.minPrice} onValueChange={(value) => onFilterChange("minPrice", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Min Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Any</SelectItem>
                <SelectItem value="200000">$200,000</SelectItem>
                <SelectItem value="300000">$300,000</SelectItem>
                <SelectItem value="400000">$400,000</SelectItem>
                <SelectItem value="500000">$500,000</SelectItem>
                <SelectItem value="750000">$750,000</SelectItem>
                <SelectItem value="1000000">$1,000,000</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="maxPrice">Max Price</Label>
            <Select value={searchFilters.maxPrice} onValueChange={(value) => onFilterChange("maxPrice", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Max Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="300000">$300,000</SelectItem>
                <SelectItem value="400000">$400,000</SelectItem>
                <SelectItem value="500000">$500,000</SelectItem>
                <SelectItem value="750000">$750,000</SelectItem>
                <SelectItem value="1000000">$1,000,000</SelectItem>
                <SelectItem value="1500000">$1,500,000</SelectItem>
                <SelectItem value="999999999">No Limit</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="propertyType">Property Type</Label>
            <Select value={searchFilters.propertyType} onValueChange={(value) => onFilterChange("propertyType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Types</SelectItem>
                <SelectItem value="single-family">Single Family</SelectItem>
                <SelectItem value="condo">Condo</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
                <SelectItem value="multi-family">Multi-Family</SelectItem>
                <SelectItem value="land">Land</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Label htmlFor="bedrooms">Bedrooms</Label>
            <Select value={searchFilters.bedrooms} onValueChange={(value) => onFilterChange("bedrooms", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Any</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
                <SelectItem value="4">4+</SelectItem>
                <SelectItem value="5">5+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="bathrooms">Bathrooms</Label>
            <Select value={searchFilters.bathrooms} onValueChange={(value) => onFilterChange("bathrooms", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Any</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="1.5">1.5+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="2.5">2.5+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="minSqFt">Min Sq Ft</Label>
            <Input
              id="minSqFt"
              type="number"
              placeholder="e.g., 1000"
              value={searchFilters.minSqFt}
              onChange={(e) => onFilterChange("minSqFt", e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="maxSqFt">Max Sq Ft</Label>
            <Input
              id="maxSqFt"
              type="number"
              placeholder="e.g., 3000"
              value={searchFilters.maxSqFt}
              onChange={(e) => onFilterChange("maxSqFt", e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button className="bg-green-600 px-8 py-3 text-white hover:bg-green-700">
            <Search className="mr-2 h-5 w-5" />
            Search Homes
          </Button>
          <Button variant="outline" className="px-8 py-3">
            Save Search
          </Button>
          <Button variant="outline" className="px-8 py-3">
            <MapPin className="mr-2 h-5 w-5" />
            Map View
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
