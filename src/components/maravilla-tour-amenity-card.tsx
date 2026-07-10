import { Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import type { AmenityTour } from "./maravilla-virtual-tours-v2-data";

interface MaravillaTourAmenityCardProps {
  amenity: AmenityTour;
}

export function MaravillaTourAmenityCard({ amenity }: MaravillaTourAmenityCardProps) {
  return (
    <Card className="group transition-all duration-300 hover:shadow-lg">
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
  );
}
