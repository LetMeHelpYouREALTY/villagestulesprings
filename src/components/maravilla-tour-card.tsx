"use client";

import { useState } from "react";

import { Play, Camera, Eye, Maximize, RotateCcw, Volume2, VolumeX, Settings, Download, Share2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import type { VirtualTour } from "./maravilla-virtual-tours-v2-data";

function TourPlayerDialog({ tour }: { tour: VirtualTour }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
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
  );
}

interface MaravillaTourCardProps {
  tour: VirtualTour;
}

export function MaravillaTourCard({ tour }: MaravillaTourCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl">
      <CardHeader className="p-0">
        <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-blue-100 to-green-100">
          <div className="text-center text-gray-500">
            <Camera className="mx-auto mb-2 h-16 w-16 opacity-50 transition-transform group-hover:scale-110" />
            <p className="text-sm font-medium">{tour.title}</p>
          </div>

          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
            <Button size="lg" className="h-16 w-16 rounded-full">
              <Play className="h-8 w-8" />
            </Button>
          </div>

          <div className="absolute right-4 top-4">
            <Badge variant="secondary" className="bg-white/90">
              {tour.quality}
            </Badge>
          </div>

          {tour.isInteractive && (
            <div className="absolute left-4 top-4">
              <Badge variant="outline" className="bg-white/90">
                <Eye className="mr-1 h-3 w-3" />
                Interactive
              </Badge>
            </div>
          )}

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

        <div className="mb-4 flex flex-wrap gap-1">
          {tour.features.slice(0, 2).map((feature) => (
            <Badge key={feature} variant="outline" className="text-xs">
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
          <TourPlayerDialog tour={tour} />
        </Dialog>
      </CardContent>
    </Card>
  );
}
