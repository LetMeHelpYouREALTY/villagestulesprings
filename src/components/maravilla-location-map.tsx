"use client";

import { useState } from "react";

import { MapPin, Car, Clock, Navigation, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { CommunityAmenityCard } from "./maravilla-community-amenity-card";
import { LocationListItem } from "./maravilla-location-list-item";
import { nearbyLocations, communityAmenities, type LocationFeature } from "./maravilla-location-map-data";

export function MaravillaLocationMap() {
  const [selectedLocation, setSelectedLocation] = useState<LocationFeature | null>(null);
  const [mapView, setMapView] = useState<"satellite" | "street">("street");

  const essentialLocations = nearbyLocations.filter((l) =>
    ["shopping", "healthcare", "education", "transportation"].includes(l.type),
  );
  const entertainmentLocations = nearbyLocations.filter((l) => ["entertainment", "dining"].includes(l.type));

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
                  <LocationListItem
                    key={location.id}
                    location={location}
                    isSelected={selectedLocation?.id === location.id}
                    onSelect={setSelectedLocation}
                  />
                ))}
              </TabsContent>

              <TabsContent value="essential" className="space-y-4">
                {essentialLocations.map((location) => (
                  <LocationListItem
                    key={location.id}
                    location={location}
                    isSelected={selectedLocation?.id === location.id}
                    onSelect={setSelectedLocation}
                    showRating={false}
                  />
                ))}
              </TabsContent>

              <TabsContent value="entertainment" className="space-y-4">
                {entertainmentLocations.map((location) => (
                  <LocationListItem
                    key={location.id}
                    location={location}
                    isSelected={selectedLocation?.id === location.id}
                    onSelect={setSelectedLocation}
                    showRating={false}
                  />
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
              <CommunityAmenityCard key={amenity.id} amenity={amenity} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
