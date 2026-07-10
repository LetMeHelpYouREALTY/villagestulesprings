"use client";
/* eslint-disable max-lines -- large generated marketing section; candidate for future decomposition */

import { useState } from "react";

import {
  Home,
  Bed,
  Bath,
  Square,
  MapPin,
  Calendar,
  Heart,
  Share2,
  Eye,
  Star,
  TrendingUp,
  Clock,
  Users,
  Car,
  TreePine,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";

interface MaravillaProperty {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  address: string;
  status: "available" | "pending" | "sold" | "coming-soon";
  image: string;
  images: string[];
  features: string[];
  description: string;
  yearBuilt: number;
  lotSize: string;
  garage: number;
  hoa: string;
  propertyType: "single-family" | "townhome" | "condo";
  energyRating: "A" | "B" | "C";
  daysOnMarket: number;
  pricePerSqFt: number;
  estimatedPayment: string;
  virtualTour: boolean;
  openHouse?: string;
  agent: {
    name: string;
    phone: string;
    email: string;
  };
}

const maravillaProperties: MaravillaProperty[] = [
  {
    id: "1",
    title: "Luxury Single-Story Villa",
    price: "$485,000",
    originalPrice: "$510,000",
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1950,
    address: "123 Maravilla Drive",
    status: "available",
    image: "/api/placeholder/400/300",
    images: ["/api/placeholder/400/300", "/api/placeholder/400/300", "/api/placeholder/400/300"],
    features: ["Granite Countertops", "Stainless Appliances", "Open Floor Plan", "Solar Ready", "Smart Home"],
    description:
      "Beautiful single-story home featuring modern finishes and energy-efficient design with smart home technology.",
    yearBuilt: 2024,
    lotSize: "6,500 sq ft",
    garage: 2,
    hoa: "$180/month",
    propertyType: "single-family",
    energyRating: "A",
    daysOnMarket: 12,
    pricePerSqFt: 249,
    estimatedPayment: "$2,847/month",
    virtualTour: true,
    openHouse: "Saturday 2-4 PM",
    agent: {
      name: "Sarah Johnson",
      phone: "(702) 555-0101",
      email: "sarah.johnson@maravillahomes.com",
    },
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
    images: ["/api/placeholder/400/300", "/api/placeholder/400/300"],
    features: ["Master Suite", "Gourmet Kitchen", "Two-Car Garage", "Patio", "Waves Ready"],
    description: "Perfect for growing families with spacious rooms, modern amenities, and pool-ready backyard.",
    yearBuilt: 2024,
    lotSize: "7,200 sq ft",
    garage: 2,
    hoa: "$195/month",
    propertyType: "single-family",
    energyRating: "A",
    daysOnMarket: 8,
    pricePerSqFt: 233,
    estimatedPayment: "$3,082/month",
    virtualTour: true,
    agent: {
      name: "Michael Chen",
      phone: "(702) 555-0102",
      email: "michael.chen@maravillahomes.com",
    },
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
    images: [
      "/api/placeholder/400/300",
      "/api/placeholder/400/300",
      "/api/placeholder/400/300",
      "/api/placeholder/400/300",
    ],
    features: ["High Ceilings", "Premium Finishes", "Smart Home", "Waves Ready", "Wine Cellar"],
    description: "Executive-level home with premium finishes, smart home technology, and wine cellar.",
    yearBuilt: 2024,
    lotSize: "8,100 sq ft",
    garage: 3,
    hoa: "$220/month",
    propertyType: "single-family",
    energyRating: "A",
    daysOnMarket: 5,
    pricePerSqFt: 225,
    estimatedPayment: "$3,492/month",
    virtualTour: true,
    agent: {
      name: "Elena Rodriguez",
      phone: "(702) 555-0103",
      email: "elena.rodriguez@maravillahomes.com",
    },
  },
  {
    id: "4",
    title: "Charming Townhome",
    price: "$425,000",
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1650,
    address: "321 Garden View Place",
    status: "coming-soon",
    image: "/api/placeholder/400/300",
    images: ["/api/placeholder/400/300", "/api/placeholder/400/300"],
    features: ["Low Maintenance", "Modern Appliances", "Patio", "Attached Garage"],
    description: "Low-maintenance townhome perfect for first-time buyers or downsizers.",
    yearBuilt: 2024,
    lotSize: "3,200 sq ft",
    garage: 1,
    hoa: "$150/month",
    propertyType: "townhome",
    energyRating: "A",
    daysOnMarket: 0,
    pricePerSqFt: 258,
    estimatedPayment: "$2,495/month",
    virtualTour: false,
    agent: {
      name: "David Kim",
      phone: "(702) 555-0104",
      email: "david.kim@maravillahomes.com",
    },
  },
];

export function MaravillaPropertyCard({ property }: { property: MaravillaProperty }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-500";
      case "pending":
        return "bg-yellow-500";
      case "sold":
        return "bg-red-500";
      case "coming-soon":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "available":
        return "Available";
      case "pending":
        return "Pending";
      case "sold":
        return "Sold";
      case "coming-soon":
        return "Coming Soon";
      default:
        return "Unknown";
    }
  };

  return (
    <Card className="group overflow-hidden border-0 shadow-lg transition-all duration-500 hover:shadow-2xl">
      <CardHeader className="relative p-0">
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 to-green-100">
          <div className="z-10 text-center text-gray-500">
            <Home className="mx-auto mb-2 h-16 w-16 opacity-50 transition-transform group-hover:scale-110" />
            <p className="text-sm font-medium">Maravilla Home</p>
            <p className="text-xs">
              Image {currentImageIndex + 1} of {property.images.length}
            </p>
          </div>

          {/* Image Navigation */}
          {property.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
              {property.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
        </div>

        {/* Enhanced Status Badge */}
        <div className="absolute right-4 top-4">
          <Badge className={`${getStatusColor(property.status)} text-white shadow-lg`}>
            {getStatusText(property.status)}
          </Badge>
        </div>

        {/* Price Badge */}
        <div className="absolute left-4 top-4">
          <Badge variant="secondary" className="bg-white/95 shadow-lg backdrop-blur-sm">
            {property.price}
          </Badge>
        </div>

        {/* Action Buttons */}
        <div className="absolute left-1/2 top-4 -translate-x-1/2 transform opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="secondary"
              className="h-8 w-8 bg-white/90 p-0 backdrop-blur-sm"
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
            </Button>
            <Button size="sm" variant="secondary" className="h-8 w-8 bg-white/90 p-0 backdrop-blur-sm">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="secondary" className="h-8 w-8 bg-white/90 p-0 backdrop-blur-sm">
              <Eye className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Virtual Tour Badge */}
        {property.virtualTour && (
          <div className="absolute bottom-4 right-4">
            <Badge variant="outline" className="bg-white/90 backdrop-blur-sm">
              <Eye className="mr-1 h-3 w-3" />
              Virtual Tour
            </Badge>
          </div>
        )}

        {/* Open House Badge */}
        {property.openHouse && (
          <div className="absolute bottom-4 left-4">
            <Badge variant="outline" className="bg-white/90 backdrop-blur-sm">
              <Calendar className="mr-1 h-3 w-3" />
              Open House
            </Badge>
          </div>
        )}
      </CardHeader>

      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Price and Title */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <div className="text-2xl font-bold text-green-600">{property.price}</div>
              {property.originalPrice && (
                <div className="text-sm text-gray-500 line-through">{property.originalPrice}</div>
              )}
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-green-600">
              {property.title}
            </h3>
            <div className="mb-2 flex items-center text-sm text-gray-600">
              <MapPin className="mr-1 h-4 w-4" />
              {property.address}
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <Clock className="mr-1 h-3 w-3" />
              {property.daysOnMarket} days on market
            </div>
          </div>

          {/* Property Details Grid */}
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
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Car className="mr-2 h-4 w-4 text-gray-500" />
              {property.garage} car garage
            </div>
            <div className="flex items-center">
              <TreePine className="mr-2 h-4 w-4 text-gray-500" />
              {property.lotSize}
            </div>
            <div className="flex items-center">
              <TrendingUp className="mr-2 h-4 w-4 text-gray-500" />${property.pricePerSqFt}/sq ft
            </div>
            <div className="flex items-center">
              <Star className="mr-2 h-4 w-4 text-gray-500" />
              Energy Rating: {property.energyRating}
            </div>
          </div>

          <Separator />

          {/* Estimated Payment */}
          <div className="rounded-lg bg-green-50 p-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Estimated Payment:</span>
              <span className="text-lg font-bold text-green-600">{property.estimatedPayment}</span>
            </div>
            <div className="mt-1 text-xs text-gray-600">HOA: {property.hoa} • 20% down, 6.5% APR</div>
          </div>

          {/* Description */}
          <p className="line-clamp-2 text-sm text-gray-600">{property.description}</p>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {property.features.slice(0, 4).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
            {property.features.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{property.features.length - 4} more
              </Badge>
            )}
          </div>

          {/* Agent Info */}
          <div className="flex items-center space-x-3 border-t pt-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
              <Users className="h-4 w-4 text-gray-600" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">{property.agent.name}</div>
              <div className="text-xs text-gray-600">{property.agent.phone}</div>
            </div>
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
