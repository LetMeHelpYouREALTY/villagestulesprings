import { Car, Clock, Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import type { LocationFeature } from "./maravilla-location-map-data";

interface LocationListItemProps {
  location: LocationFeature;
  isSelected: boolean;
  onSelect: (location: LocationFeature) => void;
  showRating?: boolean;
}

export function LocationListItem({ location, isSelected, onSelect, showRating = true }: LocationListItemProps) {
  return (
    <Card
      className={`cursor-pointer transition-all hover:shadow-lg ${isSelected ? "border-green-500 bg-green-50" : ""}`}
      onClick={() => onSelect(location)}
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
              {showRating && (
                <span className="flex items-center">
                  <Star className="mr-1 h-3 w-3" />
                  {location.rating}
                </span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
