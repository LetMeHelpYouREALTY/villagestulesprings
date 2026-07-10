"use client";
/* eslint-disable max-lines -- large generated marketing section; candidate for future decomposition */

import { useState } from "react";

import {
  MapPin,
  Car,
  Plane,
  ShoppingBag,
  GraduationCap,
  Stethoscope,
  UtensilsCrossed,
  Coffee,
  TreePine,
  Building,
  Clock,
  Navigation,
  Star,
  Users,
  Heart,
  Zap,
  Shield,
  Wifi,
  Dumbbell,
  Waves,
  Gamepad2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface LocationFeature {
  id: string;
  name: string;
  type: "shopping" | "dining" | "healthcare" | "education" | "entertainment" | "transportation";
  distance: string;
  driveTime: string;
  rating: number;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  coordinates: { lat: number; lng: number };
}

interface CommunityAmenity {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  status: "open" | "coming-soon" | "maintenance";
  hours?: string;
  features: string[];
}

const nearbyLocations: LocationFeature[] = [
  {
    id: "1",
    name: "Las Vegas Premium Outlets",
    type: "shopping",
    distance: "8.2 miles",
    driveTime: "12 min",
    rating: 4.3,
    description: "Premium shopping destination with 150+ stores",
    icon: ShoppingBag,
    coordinates: { lat: 36.1699, lng: -115.1398 },
  },
  {
    id: "2",
    name: "McCarran International Airport",
    type: "transportation",
    distance: "15.1 miles",
    driveTime: "18 min",
    rating: 4.1,
    description: "Las Vegas main airport with domestic and international flights",
    icon: Plane,
    coordinates: { lat: 36.084, lng: -115.1537 },
  },
  {
    id: "3",
    name: "University Medical Center",
    type: "healthcare",
    distance: "12.3 miles",
    driveTime: "15 min",
    rating: 4.2,
    description: "Leading medical center with emergency services",
    icon: Stethoscope,
    coordinates: { lat: 36.1074, lng: -115.1634 },
  },
  {
    id: "4",
    name: "Clark County School District",
    type: "education",
    distance: "3.7 miles",
    driveTime: "8 min",
    rating: 4.0,
    description: "Top-rated schools serving the community",
    icon: GraduationCap,
    coordinates: { lat: 36.1699, lng: -115.1398 },
  },
  {
    id: "5",
    name: "Downtown Las Vegas",
    type: "entertainment",
    distance: "18.5 miles",
    driveTime: "22 min",
    rating: 4.4,
    description: "Entertainment district with casinos, shows, and dining",
    icon: Building,
    coordinates: { lat: 36.1699, lng: -115.1398 },
  },
  {
    id: "6",
    name: "Red Rock Canyon",
    type: "entertainment",
    distance: "25.2 miles",
    driveTime: "28 min",
    rating: 4.7,
    description: "National Conservation Area for hiking and outdoor activities",
    icon: TreePine,
    coordinates: { lat: 36.1699, lng: -115.1398 },
  },
];

const communityAmenities: CommunityAmenity[] = [
  {
    id: "1",
    name: "Resort-Style Waves Complex",
    description: "Olympic-sized pool with cabanas, poolside bar, and kids splash zone",
    icon: Waves,
    status: "open",
    hours: "6 AM - 10 PM",
    features: ["Olympic Waves", "Kids Splash Zone", "Wavesside Bar", "Cabanas", "Lifeguards"],
  },
  {
    id: "2",
    name: "Fitness Center",
    description: "State-of-the-art gym with personal training and group classes",
    icon: Dumbbell,
    status: "open",
    hours: "5 AM - 11 PM",
    features: ["Cardio Equipment", "Weight Training", "Personal Training", "Group Classes", "Yoga Studio"],
  },
  {
    id: "3",
    name: "Community Game Room",
    description: "Entertainment space with billiards, arcade games, and lounge area",
    icon: Gamepad2,
    status: "open",
    hours: "8 AM - 10 PM",
    features: ["Billiards", "Arcade Games", "Lounge Area", "TV Room", "Snack Bar"],
  },
  {
    id: "4",
    name: "Walking Trails & Parks",
    description: "Beautiful walking trails and community parks throughout the neighborhood",
    icon: TreePine,
    status: "open",
    hours: "24/7",
    features: ["Walking Trails", "Dog Park", "Playground", "Picnic Areas", "Exercise Stations"],
  },
  {
    id: "5",
    name: "Coffee Shop & Lounge",
    description: "On-site coffee shop and community gathering space",
    icon: Coffee,
    status: "coming-soon",
    hours: "Coming Soon",
    features: ["Coffee Bar", "WiFi Lounge", "Meeting Rooms", "Outdoor Seating", "Community Events"],
  },
];

export function MaravillaLocationMap() {
  const [selectedLocation, setSelectedLocation] = useState<LocationFeature | null>(null);
  const [mapView, setMapView] = useState<"satellite" | "street">("street");

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <Badge variant="secondary" className="mb-4">
            <MapPin className="mr-2 h-4 w-4" />
            Prime Location
          </Badge>
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Everything You Need Nearby</h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Maravilla is perfectly positioned in North Las Vegas with easy access to shopping, dining, healthcare, and
            entertainment. Discover what&apos;s within minutes of your new home.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Interactive Map */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <Navigation className="mr-2 h-5 w-5 text-green-600" />
                    Interactive Map
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant={mapView === "street" ? "default" : "outline"}
                      onClick={() => setMapView("street")}
                    >
                      Street
                    </Button>
                    <Button
                      size="sm"
                      variant={mapView === "satellite" ? "default" : "outline"}
                      onClick={() => setMapView("satellite")}
                    >
                      Satellite
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-100 to-blue-100">
                  <div className="z-10 text-center text-gray-500">
                    <MapPin className="mx-auto mb-4 h-16 w-16 opacity-50" />
                    <p className="text-lg font-semibold">Interactive Map</p>
                    <p className="text-sm">Click locations to explore</p>
                    <p className="mt-2 text-xs">{mapView === "street" ? "Street View" : "Satellite View"}</p>
                  </div>

                  {/* Map Markers */}
                  <div className="absolute inset-0">
                    {nearbyLocations.map((location, index) => (
                      <button
                        key={location.id}
                        className={`absolute h-4 w-4 rounded-full border-2 border-white shadow-lg transition-all hover:scale-125 ${
                          selectedLocation?.id === location.id ? "scale-125 bg-green-600" : "bg-blue-600"
                        }`}
                        style={{
                          top: `${20 + index * 15}%`,
                          left: `${30 + index * 10}%`,
                        }}
                        onClick={() => setSelectedLocation(location)}
                      >
                        <location.icon className="h-2 w-2 text-white" />
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location Details */}
            {selectedLocation && (
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <selectedLocation.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-semibold text-gray-900">{selectedLocation.name}</h3>
                      <p className="mb-3 text-gray-600">{selectedLocation.description}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center">
                          <Car className="mr-2 h-4 w-4 text-gray-500" />
                          {selectedLocation.distance}
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4 text-gray-500" />
                          {selectedLocation.driveTime}
                        </div>
                        <div className="flex items-center">
                          <Star className="mr-2 h-4 w-4 text-gray-500" />
                          {selectedLocation.rating}/5.0
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4 text-gray-500" />
                          {selectedLocation.type}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Nearby Locations List */}
          <div className="space-y-6">
            <h3 className="mb-6 text-2xl font-semibold text-gray-900">Nearby Locations</h3>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="essential">Essential</TabsTrigger>
                <TabsTrigger value="entertainment">Entertainment</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                {nearbyLocations.map((location) => (
                  <Card
                    key={location.id}
                    className={`cursor-pointer transition-all hover:shadow-lg ${
                      selectedLocation?.id === location.id ? "border-green-500 bg-green-50" : ""
                    }`}
                    onClick={() => setSelectedLocation(location)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                          <location.icon className="h-5 w-5 text-gray-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{location.name}</h4>
                          <p className="text-sm text-gray-600">{location.description}</p>
                          <div className="mt-2 flex items-center space-x-4 text-xs text-gray-500">
                            <span className="flex items-center">
                              <Car className="mr-1 h-3 w-3" />
                              {location.distance}
                            </span>
                            <span className="flex items-center">
                              <Clock className="mr-1 h-3 w-3" />
                              {location.driveTime}
                            </span>
                            <span className="flex items-center">
                              <Star className="mr-1 h-3 w-3" />
                              {location.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="essential" className="space-y-4">
                {nearbyLocations
                  .filter((l) => ["shopping", "healthcare", "education", "transportation"].includes(l.type))
                  .map((location) => (
                    <Card
                      key={location.id}
                      className={`cursor-pointer transition-all hover:shadow-lg ${
                        selectedLocation?.id === location.id ? "border-green-500 bg-green-50" : ""
                      }`}
                      onClick={() => setSelectedLocation(location)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                            <location.icon className="h-5 w-5 text-gray-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{location.name}</h4>
                            <p className="text-sm text-gray-600">{location.description}</p>
                            <div className="mt-2 flex items-center space-x-4 text-xs text-gray-500">
                              <span className="flex items-center">
                                <Car className="mr-1 h-3 w-3" />
                                {location.distance}
                              </span>
                              <span className="flex items-center">
                                <Clock className="mr-1 h-3 w-3" />
                                {location.driveTime}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </TabsContent>

              <TabsContent value="entertainment" className="space-y-4">
                {nearbyLocations
                  .filter((l) => ["entertainment", "dining"].includes(l.type))
                  .map((location) => (
                    <Card
                      key={location.id}
                      className={`cursor-pointer transition-all hover:shadow-lg ${
                        selectedLocation?.id === location.id ? "border-green-500 bg-green-50" : ""
                      }`}
                      onClick={() => setSelectedLocation(location)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                            <location.icon className="h-5 w-5 text-gray-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{location.name}</h4>
                            <p className="text-sm text-gray-600">{location.description}</p>
                            <div className="mt-2 flex items-center space-x-4 text-xs text-gray-500">
                              <span className="flex items-center">
                                <Car className="mr-1 h-3 w-3" />
                                {location.distance}
                              </span>
                              <span className="flex items-center">
                                <Clock className="mr-1 h-3 w-3" />
                                {location.driveTime}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Community Amenities */}
        <div className="mt-20">
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-gray-900">Community Amenities</h3>
            <p className="text-lg text-gray-600">Enjoy resort-style amenities right in your neighborhood</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {communityAmenities.map((amenity) => (
              <Card key={amenity.id} className="transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center text-lg">
                      <amenity.icon className="mr-2 h-5 w-5 text-green-600" />
                      {amenity.name}
                    </CardTitle>
                    <Badge
                      variant={
                        amenity.status === "open"
                          ? "default"
                          : amenity.status === "coming-soon"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {amenity.status === "open"
                        ? "Open"
                        : amenity.status === "coming-soon"
                          ? "Coming Soon"
                          : "Maintenance"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-600">{amenity.description}</p>
                  {amenity.hours && (
                    <div className="mb-4 flex items-center text-sm text-gray-500">
                      <Clock className="mr-2 h-4 w-4" />
                      {amenity.hours}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {amenity.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
