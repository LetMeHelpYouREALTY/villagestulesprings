"use client";
/* eslint-disable max-lines -- large generated marketing section; candidate for future decomposition */

import { useState } from "react";

import {
  Play,
  MapPin,
  Phone,
  Mail,
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
} from "lucide-react";

import { CalendlyButton } from "@/components/calendly-button";
import { CalendlyInlineWidget } from "@/components/calendly-inline-widget";
import { DrJanPortrait } from "@/components/dr-jan-portrait";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MEDIA } from "@/lib/media-catalog";

interface VirtualTour {
  id: string;
  title: string;
  type: "360" | "video" | "photos";
  duration: string;
  thumbnail: string;
}

interface MaravillaContactInfo {
  salesOffice: {
    phone: string;
    email: string;
    address: string;
    hours: string;
  };
  salesTeam: {
    name: string;
    title: string;
    phone: string;
    email: string;
    specialties: string[];
  }[];
}

const virtualTours: VirtualTour[] = [
  {
    id: "1",
    title: "360° Virtual Tour - Model Home A",
    type: "360",
    duration: "5 min",
    thumbnail: MEDIA.listingVilla.gitSrc,
  },
  {
    id: "2",
    title: "Video Walkthrough - Model Home B",
    type: "video",
    duration: "8 min",
    thumbnail: MEDIA.listingTwoStory.gitSrc,
  },
  {
    id: "3",
    title: "Photo Gallery - Community Amenities",
    type: "photos",
    duration: "3 min",
    thumbnail: MEDIA.amenityPool.gitSrc,
  },
];

const maravillaContact: MaravillaContactInfo = {
  salesOffice: {
    phone: "702-222-1964",
    email: "DrDuffySells@VillagesTuleSprings.com",
    address: "Villages at Tule Springs, North Las Vegas, NV 89084",
    hours: "Mon-Sun: 9AM-6PM",
  },
  salesTeam: [
    {
      name: "Dr. Janet Duffy",
      title: "REALTOR®, BHHS Nevada Properties",
      phone: "702-222-1964",
      email: "DrDuffySells@VillagesTuleSprings.com",
      specialties: ["Villages at Tule Springs", "North Las Vegas", "Luxury Homes"],
    },
  ],
};

export function MaravillaVirtualTours() {
  const [selectedTour, setSelectedTour] = useState<VirtualTour | null>(null);

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
            Take a virtual tour of our beautiful homes and community amenities. Experience Maravilla living before you
            visit in person.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {virtualTours.map((tour) => (
            <Card key={tour.id} className="group overflow-hidden transition-shadow hover:shadow-xl">
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden bg-navy-100">
                  <img src={tour.thumbnail} alt={tour.title} className="h-full w-full object-cover" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                    <Button size="lg" className="h-16 w-16 rounded-full">
                      <Play className="h-8 w-8" />
                    </Button>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute right-4 top-4">
                    <Badge variant="secondary" className="bg-white/90">
                      {tour.duration}
                    </Badge>
                  </div>

                  {/* Type Badge */}
                  <div className="absolute left-4 top-4">
                    <Badge variant="outline" className="bg-white/90">
                      {tour.type === "360" ? "360°" : tour.type === "video" ? "Video" : "Photos"}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{tour.title}</h3>
                <p className="mb-4 text-sm text-gray-600">
                  {tour.type === "360"
                    ? "Interactive 360° tour of our model home"
                    : tour.type === "video"
                      ? "Professional video walkthrough"
                      : "High-quality photo gallery of community features"}
                </p>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full">
                      <Play className="mr-2 h-4 w-4" />
                      Start Tour
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle>{tour.title}</DialogTitle>
                    </DialogHeader>
                    <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-blue-100 to-green-100">
                      <div className="text-center text-gray-500">
                        <Play className="mx-auto mb-4 h-16 w-16 opacity-50" />
                        <p className="text-lg">Virtual Tour Player</p>
                        <p className="text-sm">Coming Soon</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MaravillaContactSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Connect With Our Team</h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Our experienced sales team is here to help you find your perfect Maravilla home. Contact us today to
            schedule a tour or get more information.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-green-600" />
                  Sales Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Maravilla Sales Center</p>
                    <p className="text-gray-600">{maravillaContact.salesOffice.address}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-2 h-4 w-4 text-green-600" />
                    <a href="tel:+17022221964" className="font-semibold">
                      {maravillaContact.salesOffice.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-2 h-4 w-4 text-green-600" />
                    <span>{maravillaContact.salesOffice.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-green-600" />
                    <span>{maravillaContact.salesOffice.hours}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sales Team */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Meet Our Sales Team</h3>
              {maravillaContact.salesTeam.map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-3">
                          <DrJanPortrait size="sm" />
                          <div>
                            <h4 className="font-semibold text-gray-900">{member.name}</h4>
                            <p className="text-sm text-gray-600">{member.title}</p>
                          </div>
                        </div>
                        <div className="mb-2 flex items-center text-sm text-gray-600">
                          <Phone className="mr-1 h-3 w-3" />
                          <a href="tel:+17022221964">{member.phone}</a>
                        </div>
                        <div className="mb-3 flex items-center text-sm text-gray-600">
                          <Mail className="mr-1 h-3 w-3" />
                          {member.email}
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {member.specialties.map((specialty, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button size="sm" variant="outline" asChild>
                        <CalendlyButton event="conversation" utmMedium="tours" utmCampaign="sales-team">
                          Book a Call
                        </CalendlyButton>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Calendly booking */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Schedule Your Visit</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="tour" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="tour">Home Tour</TabsTrigger>
                    <TabsTrigger value="consultation">Conversation</TabsTrigger>
                  </TabsList>

                  <TabsContent value="tour" className="pt-4">
                    <CalendlyInlineWidget
                      event="homeTour"
                      title="Schedule a 30-minute home tour"
                      utmMedium="tours"
                      utmCampaign="virtual-tours-tour"
                      height={620}
                    />
                  </TabsContent>

                  <TabsContent value="consultation" className="pt-4">
                    <CalendlyInlineWidget
                      event="conversation"
                      title="Schedule a 15-minute conversation"
                      utmMedium="tours"
                      utmCampaign="virtual-tours-consult"
                      height={620}
                    />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
