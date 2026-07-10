"use client";

import { Play, Camera } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export { MaravillaContactSection } from "./maravilla-contact-section";

interface VirtualTour {
  id: string;
  title: string;
  type: "360" | "video" | "photos";
  duration: string;
  thumbnail: string;
}

const virtualTours: VirtualTour[] = [
  {
    id: "1",
    title: "360° Virtual Tour - Model Home A",
    type: "360",
    duration: "5 min",
    thumbnail: "/api/placeholder/300/200",
  },
  {
    id: "2",
    title: "Video Walkthrough - Model Home B",
    type: "video",
    duration: "8 min",
    thumbnail: "/api/placeholder/300/200",
  },
  {
    id: "3",
    title: "Photo Gallery - Community Amenities",
    type: "photos",
    duration: "3 min",
    thumbnail: "/api/placeholder/300/200",
  },
];

const tourTypeLabels: Record<VirtualTour["type"], string> = {
  "360": "360°",
  video: "Video",
  photos: "Photos",
};

const tourTypeDescriptions: Record<VirtualTour["type"], string> = {
  "360": "Interactive 360° tour of our model home",
  video: "Professional video walkthrough",
  photos: "High-quality photo gallery of community features",
};

function VirtualTourCard({ tour }: { tour: VirtualTour }) {
  return (
    <Card className="group overflow-hidden transition-shadow hover:shadow-xl">
      <CardHeader className="p-0">
        <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-blue-100 to-green-100">
          <div className="text-center text-gray-500">
            <Camera className="mx-auto mb-2 h-16 w-16 opacity-50" />
            <p className="text-sm">{tour.title}</p>
          </div>

          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
            <Button size="lg" className="h-16 w-16 rounded-full">
              <Play className="h-8 w-8" />
            </Button>
          </div>

          <div className="absolute right-4 top-4">
            <Badge variant="secondary" className="bg-white/90">
              {tour.duration}
            </Badge>
          </div>

          <div className="absolute left-4 top-4">
            <Badge variant="outline" className="bg-white/90">
              {tourTypeLabels[tour.type]}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <h3 className="mb-2 text-lg font-semibold text-gray-900">{tour.title}</h3>
        <p className="mb-4 text-sm text-gray-600">{tourTypeDescriptions[tour.type]}</p>

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
  );
}

export function MaravillaVirtualTours() {
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
            <VirtualTourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}
