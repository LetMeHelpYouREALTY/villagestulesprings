import { Home, Bed, Bath, Square, MapPin, Calendar, Heart, Share2, Eye } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface MaravillaProperty {
  id: string;
  title: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  address: string;
  status: "available" | "pending" | "sold";
  image: string;
  features: string[];
  description: string;
  yearBuilt: number;
  lotSize: string;
  garage: number;
}

const maravillaProperties: MaravillaProperty[] = [
  {
    id: "1",
    title: "Luxury Single-Story Villa",
    price: "$485,000",
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1950,
    address: "123 Maravilla Drive",
    status: "available",
    image: "/api/placeholder/400/300",
    features: ["Granite Countertops", "Stainless Appliances", "Open Floor Plan", "Solar Ready"],
    description: "Beautiful single-story home featuring modern finishes and energy-efficient design.",
    yearBuilt: 2024,
    lotSize: "6,500 sq ft",
    garage: 2,
  },
  {
    id: "2",
    title: "Spacious Two-Story Family Home",
    price: "$525,000",
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2250,
    address: "456 Desert Vista Lane",
    status: "available",
    image: "/api/placeholder/400/300",
    features: ["Master Suite", "Gourmet Kitchen", "Two-Car Garage", "Patio"],
    description: "Perfect for growing families with spacious rooms and modern amenities.",
    yearBuilt: 2024,
    lotSize: "7,200 sq ft",
    garage: 2,
  },
  {
    id: "3",
    title: "Modern Executive Home",
    price: "$595,000",
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2650,
    address: "789 Canyon Ridge Court",
    status: "pending",
    image: "/api/placeholder/400/300",
    features: ["High Ceilings", "Premium Finishes", "Smart Home", "Waves Ready"],
    description: "Executive-level home with premium finishes and smart home technology.",
    yearBuilt: 2024,
    lotSize: "8,100 sq ft",
    garage: 3,
  },
];

export function MaravillaPropertyCard({ property }: { property: MaravillaProperty }) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl">
      <CardHeader className="relative p-0">
        <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-blue-100 to-green-100">
          <div className="text-center text-gray-500">
            <Home className="mx-auto mb-2 h-16 w-16 opacity-50" />
            <p className="text-sm">Maravilla Home</p>
          </div>
        </div>

        {/* Status Badge */}
        <div className="absolute right-4 top-4">
          <Badge
            variant={
              property.status === "available" ? "default" : property.status === "pending" ? "secondary" : "destructive"
            }
            className="bg-white/90 shadow-sm backdrop-blur-sm"
          >
            {property.status === "available" ? "Available" : property.status === "pending" ? "Pending" : "Sold"}
          </Badge>
        </div>

        {/* Action Buttons */}
        <div className="absolute left-4 top-4 opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex gap-2">
            <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
              <Heart className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Price and Title */}
          <div>
            <div className="mb-1 text-2xl font-bold text-green-600">{property.price}</div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">{property.title}</h3>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="mr-1 h-4 w-4" />
              {property.address}
            </div>
          </div>

          {/* Property Details */}
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="flex items-center">
              <Bed className="mr-2 h-4 w-4 text-gray-500" />
              {property.bedrooms} bed
            </div>
            <div className="flex items-center">
              <Bath className="mr-2 h-4 w-4 text-gray-500" />
              {property.bathrooms} bath
            </div>
            <div className="flex items-center">
              <Square className="mr-2 h-4 w-4 text-gray-500" />
              {property.squareFeet.toLocaleString()} sq ft
            </div>
          </div>

          {/* Additional Details */}
          <div className="space-y-1 text-sm text-gray-600">
            <div>Built: {property.yearBuilt}</div>
            <div>Lot Size: {property.lotSize}</div>
            <div>Garage: {property.garage} car</div>
          </div>

          <Separator />

          {/* Description */}
          <p className="line-clamp-2 text-sm text-gray-600">{property.description}</p>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {property.features.map((feature) => (
              <Badge key={feature} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <div className="flex w-full gap-2">
          <Button className="flex-1" variant="outline">
            <Eye className="mr-2 h-4 w-4" />
            View Details
          </Button>
          <Button className="flex-1 bg-green-600 hover:bg-green-700">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Tour
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
