"use client";
/* eslint-disable max-lines -- large generated marketing section; candidate for future decomposition */

import { useState } from "react";

import {
  Search,
  MapPin,
  Home,
  DollarSign,
  Bed,
  Bath,
  Square,
  Car,
  Filter,
  Heart,
  Share2,
  Eye,
  Calendar,
  Star,
  TrendingUp,
  Users,
  Shield,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Property {
  id: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  image: string;
  type: string;
  yearBuilt: number;
  features: string[];
  daysOnMarket: number;
  status: "for-sale" | "pending" | "sold";
}

const mockProperties: Property[] = [
  {
    id: "1",
    address: "123 Main Street, Las Vegas, NV 89101",
    price: 485000,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1850,
    image: "/api/placeholder/400/300",
    type: "Single Family",
    yearBuilt: 2018,
    features: ["Updated Kitchen", "Hardwood Floors", "Two-Car Garage"],
    daysOnMarket: 12,
    status: "for-sale",
  },
  {
    id: "2",
    address: "456 Oak Avenue, Las Vegas, NV 89102",
    price: 325000,
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1200,
    image: "/api/placeholder/400/300",
    type: "Condo",
    yearBuilt: 2020,
    features: ["Modern Appliances", "Balcony", "Pool Access"],
    daysOnMarket: 8,
    status: "for-sale",
  },
  {
    id: "3",
    address: "789 Pine Street, Las Vegas, NV 89103",
    price: 650000,
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2400,
    image: "/api/placeholder/400/300",
    type: "Single Family",
    yearBuilt: 2015,
    features: ["Master Suite", "Gourmet Kitchen", "Pool"],
    daysOnMarket: 25,
    status: "pending",
  },
];

export function HomebuyingSearchSection() {
  const [searchFilters, setSearchFilters] = useState({
    location: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    bathrooms: "",
    propertyType: "",
    minSqFt: "",
    maxSqFt: "",
  });

  const [properties] = useState<Property[]>(mockProperties);

  const handleFilterChange = (field: string, value: string) => {
    setSearchFilters((prev) => ({ ...prev, [field]: value }));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
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

        {/* Search Filters */}
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
                    onChange={(e) => handleFilterChange("location", e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="minPrice">Min Price</Label>
                <Select value={searchFilters.minPrice} onValueChange={(value) => handleFilterChange("minPrice", value)}>
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
                <Select value={searchFilters.maxPrice} onValueChange={(value) => handleFilterChange("maxPrice", value)}>
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
                <Select
                  value={searchFilters.propertyType}
                  onValueChange={(value) => handleFilterChange("propertyType", value)}
                >
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
                <Select value={searchFilters.bedrooms} onValueChange={(value) => handleFilterChange("bedrooms", value)}>
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
                <Select
                  value={searchFilters.bathrooms}
                  onValueChange={(value) => handleFilterChange("bathrooms", value)}
                >
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
                  onChange={(e) => handleFilterChange("minSqFt", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="maxSqFt">Max Sq Ft</Label>
                <Input
                  id="maxSqFt"
                  type="number"
                  placeholder="e.g., 3000"
                  value={searchFilters.maxSqFt}
                  onChange={(e) => handleFilterChange("maxSqFt", e.target.value)}
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
              <Card key={property.id} className="group shadow-lg transition-shadow hover:shadow-xl">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <Home className="h-16 w-16 text-gray-400" />
                    </div>
                    <div className="absolute left-4 top-4">
                      <Badge variant={property.status === "for-sale" ? "default" : "secondary"}>
                        {property.status === "for-sale" ? "For Sale" : "Pending"}
                      </Badge>
                    </div>
                    <div className="absolute right-4 top-4 flex space-x-2">
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                      <h4 className="text-xl font-bold text-green-600">{formatPrice(property.price)}</h4>
                      <span className="text-sm text-gray-500">{property.daysOnMarket} days on market</span>
                    </div>

                    <p className="mb-4 text-gray-600">{property.address}</p>

                    <div className="mb-4 flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Bed className="mr-1 h-4 w-4" />
                        {property.bedrooms}
                      </div>
                      <div className="flex items-center">
                        <Bath className="mr-1 h-4 w-4" />
                        {property.bathrooms}
                      </div>
                      <div className="flex items-center">
                        <Square className="mr-1 h-4 w-4" />
                        {property.squareFeet.toLocaleString()} sq ft
                      </div>
                    </div>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {property.features.slice(0, 2).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <Button className="flex-1 bg-green-600 hover:bg-green-700">
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <Calendar className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Market Insights */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <TrendingUp className="mr-3 h-6 w-6 text-green-600" />
              Las Vegas Market Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-green-600">$485K</div>
                <div className="text-gray-600">Median Home Price</div>
                <div className="text-sm text-green-600">+5.2% from last year</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-blue-600">18</div>
                <div className="text-gray-600">Days on Market</div>
                <div className="text-sm text-blue-600">-3 days from last month</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-purple-600">2,847</div>
                <div className="text-gray-600">Active Listings</div>
                <div className="text-sm text-purple-600">+12% inventory increase</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
