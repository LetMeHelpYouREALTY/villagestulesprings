"use client";

import { useState } from "react";

import { Play, Calendar, Phone } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { MaravillaTourAmenityCard } from "./maravilla-tour-amenity-card";
import { MaravillaTourCard } from "./maravilla-tour-card";
import { MaravillaTourRoomCard } from "./maravilla-tour-room-card";
import { virtualTours, tourRooms, amenityTours } from "./maravilla-virtual-tours-v2-data";

type TourView = "tour" | "rooms" | "amenities";

export function MaravillaVirtualTours() {
  const [currentView, setCurrentView] = useState<TourView>("tour");

  const handleRoomSelect = () => {
    // Room selection is reserved for a future detailed-view experience.
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <Badge variant="secondary" className="mb-4">
            <Play className="mr-2 h-4 w-4" />
            Virtual Experience
          </Badge>
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Explore Maravilla From Anywhere</h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Take immersive virtual tours of our beautiful homes and community amenities. Experience Maravilla living
            before you visit in person with our cutting-edge virtual reality technology.
          </p>
        </div>

        {/* Tour Navigation */}
        <div className="mb-12">
          <Tabs value={currentView} onValueChange={(value) => setCurrentView(value as TourView)}>
            <TabsList className="mx-auto grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="tour">Home Tours</TabsTrigger>
              <TabsTrigger value="rooms">Room Details</TabsTrigger>
              <TabsTrigger value="amenities">Amenities</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Home Tours */}
        {currentView === "tour" && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {virtualTours.map((tour) => (
              <MaravillaTourCard key={tour.id} tour={tour} />
            ))}
          </div>
        )}

        {/* Room Details */}
        {currentView === "rooms" && (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="mb-4 text-2xl font-semibold text-gray-900">Explore Every Room</h3>
              <p className="text-gray-600">Click on any room to see detailed 360° views and interactive hotspots</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tourRooms.map((room) => (
                <MaravillaTourRoomCard key={room.id} room={room} onSelect={handleRoomSelect} />
              ))}
            </div>
          </div>
        )}

        {/* Amenities */}
        {currentView === "amenities" && (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="mb-4 text-2xl font-semibold text-gray-900">Community Amenities Virtual Tours</h3>
              <p className="text-gray-600">Experience our resort-style amenities through immersive virtual tours</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {amenityTours.map((amenity) => (
                <MaravillaTourAmenityCard key={amenity.name} amenity={amenity} />
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="mx-auto max-w-2xl border-green-200 bg-gradient-to-r from-green-50 to-blue-50">
            <CardContent className="p-8">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Ready for an In-Person Tour?</h3>
              <p className="mb-6 text-gray-600">Experience Maravilla in person with a guided tour by our sales team.</p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule In-Person Tour
                </Button>
                <Button size="lg" variant="outline">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (702) 555-MARAVILLA
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
