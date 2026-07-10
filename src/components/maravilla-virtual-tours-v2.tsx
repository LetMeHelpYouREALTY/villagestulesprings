"use client";
/* eslint-disable max-lines -- large generated marketing section; candidate for future decomposition */

import { useState } from "react";

import {
  Play,
  Camera,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Clock,
  Star,
  Users,
  Home,
  Car,
  TreePine,
  Wifi,
  Shield,
  Dumbbell,
  Waves,
  Coffee,
  ShoppingBag,
  GraduationCap,
  Stethoscope,
  Plane,
  Gamepad2,
  UtensilsCrossed,
  Heart,
  Sparkles,
  Eye,
  Maximize,
  RotateCcw,
  Volume2,
  VolumeX,
  Settings,
  Download,
  Share2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface VirtualTour {
  id: string;
  title: string;
  type: "360" | "video" | "photos" | "walkthrough";
  duration: string;
  thumbnail: string;
  description: string;
  propertyId: string;
  features: string[];
  rooms: string[];
  isInteractive: boolean;
  quality: "HD" | "4K" | "8K";
}

interface TourRoom {
  id: string;
  name: string;
  thumbnail: string;
  hotspots: number;
  description: string;
}

const virtualTours: VirtualTour[] = [
  {
    id: "1",
    title: "360° Virtual Tour - Model Home A",
    type: "360",
    duration: "5 min",
    thumbnail: "/api/placeholder/300/200",
    description:
      "Interactive 360° tour of our luxury single-story model home featuring modern finishes and smart home technology.",
    propertyId: "1",
    features: ["360° Views", "Interactive Hotspots", "Room-to-Room Navigation", "Property Details"],
    rooms: ["Living Room", "Kitchen", "Master Bedroom", "Bathroom", "Garage"],
    isInteractive: true,
    quality: "4K",
  },
  {
    id: "2",
    title: "Video Walkthrough - Model Home B",
    type: "video",
    duration: "8 min",
    thumbnail: "/api/placeholder/300/200",
    description: "Professional video walkthrough showcasing the spacious two-story family home with premium amenities.",
    propertyId: "2",
    features: ["HD Video", "Narrated Tour", "Property Highlights", "Neighborhood Views"],
    rooms: ["All Rooms", "Backyard", "Garage", "Neighborhood"],
    isInteractive: false,
    quality: "HD",
  },
  {
    id: "3",
    title: "Photo Gallery - Community Amenities",
    type: "photos",
    duration: "3 min",
    thumbnail: "/api/placeholder/300/200",
    description:
      "High-quality photo gallery showcasing community amenities including pool, fitness center, and walking trails.",
    propertyId: "community",
    features: ["High-Res Photos", "Zoom Functionality", "Amenity Details", "Community Life"],
    rooms: ["Waves Complex", "Fitness Center", "Walking Trails", "Game Room"],
    isInteractive: true,
    quality: "4K",
  },
  {
    id: "4",
    title: "Live Walkthrough - Executive Home",
    type: "walkthrough",
    duration: "12 min",
    thumbnail: "/api/placeholder/300/200",
    description: "Live agent walkthrough of the executive home with real-time Q&A and detailed property information.",
    propertyId: "3",
    features: ["Live Agent", "Real-time Q&A", "Detailed Information", "Custom Scheduling"],
    rooms: ["All Rooms", "Premium Features", "Smart Home Tech", "Outdoor Spaces"],
    isInteractive: true,
    quality: "HD",
  },
];

const tourRooms: TourRoom[] = [
  {
    id: "living",
    name: "Living Room",
    thumbnail: "/api/placeholder/200/150",
    hotspots: 5,
    description: "Spacious living room with high ceilings and modern finishes",
  },
  {
    id: "kitchen",
    name: "Gourmet Kitchen",
    thumbnail: "/api/placeholder/200/150",
    hotspots: 8,
    description: "Modern kitchen with granite countertops and stainless appliances",
  },
  {
    id: "master",
    name: "Master Suite",
    thumbnail: "/api/placeholder/200/150",
    hotspots: 4,
    description: "Luxurious master bedroom with walk-in closet and ensuite bathroom",
  },
  {
    id: "bathroom",
    name: "Master Bathroom",
    thumbnail: "/api/placeholder/200/150",
    hotspots: 3,
    description: "Spa-like bathroom with dual vanities and walk-in shower",
  },
  {
    id: "garage",
    name: "Two-Car Garage",
    thumbnail: "/api/placeholder/200/150",
    hotspots: 2,
    description: "Spacious garage with storage and direct home access",
  },
];

export function MaravillaVirtualTours() {
  const [selectedTour, setSelectedTour] = useState<VirtualTour | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<TourRoom | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentView, setCurrentView] = useState<"tour" | "rooms" | "amenities">("tour");

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
          <Tabs value={currentView} onValueChange={(value) => setCurrentView(value as any)}>
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
              <Card key={tour.id} className="group overflow-hidden transition-all duration-300 hover:shadow-xl">
                <CardHeader className="p-0">
                  <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-blue-100 to-green-100">
                    <div className="text-center text-gray-500">
                      <Camera className="mx-auto mb-2 h-16 w-16 opacity-50 transition-transform group-hover:scale-110" />
                      <p className="text-sm font-medium">{tour.title}</p>
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                      <Button size="lg" className="h-16 w-16 rounded-full">
                        <Play className="h-8 w-8" />
                      </Button>
                    </div>

                    {/* Quality Badge */}
                    <div className="absolute right-4 top-4">
                      <Badge variant="secondary" className="bg-white/90">
                        {tour.quality}
                      </Badge>
                    </div>

                    {/* Interactive Badge */}
                    {tour.isInteractive && (
                      <div className="absolute left-4 top-4">
                        <Badge variant="outline" className="bg-white/90">
                          <Eye className="mr-1 h-3 w-3" />
                          Interactive
                        </Badge>
                      </div>
                    )}

                    {/* Duration Badge */}
                    <div className="absolute bottom-4 right-4">
                      <Badge variant="secondary" className="bg-white/90">
                        {tour.duration}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{tour.title}</h3>
                  <p className="mb-4 line-clamp-2 text-sm text-gray-600">{tour.description}</p>

                  {/* Features */}
                  <div className="mb-4 flex flex-wrap gap-1">
                    {tour.features.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {tour.features.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{tour.features.length - 2}
                      </Badge>
                    )}
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">
                        <Play className="mr-2 h-4 w-4" />
                        Start Tour
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="h-[80vh] max-w-6xl">
                      <DialogHeader>
                        <div className="flex items-center justify-between">
                          <DialogTitle className="flex items-center">
                            <Camera className="mr-2 h-5 w-5" />
                            {tour.title}
                          </DialogTitle>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => setIsMuted(!isMuted)}>
                              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => setIsFullscreen(!isFullscreen)}>
                              <Maximize className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Settings className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </DialogHeader>
                      <div className="relative flex flex-1 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-green-100">
                        <div className="text-center text-gray-500">
                          <Play className="mx-auto mb-4 h-20 w-20 opacity-50" />
                          <p className="text-xl font-semibold">Virtual Tour Player</p>
                          <p className="mb-4 text-sm">{tour.description}</p>
                          <div className="flex justify-center gap-2">
                            <Button>
                              <Play className="mr-2 h-4 w-4" />
                              Play Tour
                            </Button>
                            <Button variant="outline">
                              <Download className="mr-2 h-4 w-4" />
                              Download
                            </Button>
                            <Button variant="outline">
                              <Share2 className="mr-2 h-4 w-4" />
                              Share
                            </Button>
                          </div>
                        </div>

                        {/* Tour Controls */}
                        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform gap-2">
                          <Button size="sm" variant="secondary">
                            <RotateCcw className="mr-1 h-4 w-4" />
                            Reset View
                          </Button>
                          <Button size="sm" variant="secondary">
                            <Eye className="mr-1 h-4 w-4" />
                            Fullscreen
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
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
                <Card
                  key={room.id}
                  className="group cursor-pointer transition-all duration-300 hover:shadow-lg"
                  onClick={() => setSelectedRoom(room)}
                >
                  <CardHeader className="p-0">
                    <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <div className="text-center text-gray-500">
                        <Home className="mx-auto mb-2 h-12 w-12 opacity-50" />
                        <p className="text-sm">{room.name}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <h4 className="mb-2 font-semibold text-gray-900">{room.name}</h4>
                    <p className="mb-3 text-sm text-gray-600">{room.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        <Eye className="mr-1 h-3 w-3" />
                        {room.hotspots} hotspots
                      </Badge>
                      <Button size="sm" variant="outline">
                        <Play className="mr-1 h-3 w-3" />
                        Explore
                      </Button>
                    </div>
                  </CardContent>
                </Card>
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
              {[
                { name: "Resort-Style Waves", icon: Waves, description: "Olympic-sized pool with cabanas" },
                { name: "Fitness Center", icon: Dumbbell, description: "State-of-the-art gym equipment" },
                { name: "Walking Trails", icon: TreePine, description: "Beautiful nature trails" },
                { name: "Game Room", icon: Gamepad2, description: "Entertainment and recreation" },
                { name: "Coffee Shop", icon: Coffee, description: "Community gathering space" },
                { name: "Security Gate", icon: Shield, description: "24/7 community security" },
              ].map((amenity, index) => (
                <Card key={index} className="group transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="p-0">
                    <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-green-100 to-blue-100">
                      <div className="text-center text-gray-500">
                        <amenity.icon className="mx-auto mb-2 h-12 w-12 opacity-50" />
                        <p className="text-sm">{amenity.name}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <h4 className="mb-2 font-semibold text-gray-900">{amenity.name}</h4>
                    <p className="mb-3 text-sm text-gray-600">{amenity.description}</p>
                    <Button size="sm" className="w-full">
                      <Play className="mr-1 h-3 w-3" />
                      Virtual Tour
                    </Button>
                  </CardContent>
                </Card>
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
