import { Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import type { CommunityAmenity } from "./maravilla-location-map-data";

const statusVariant: Record<CommunityAmenity["status"], "default" | "secondary" | "destructive"> = {
  open: "default",
  "coming-soon": "secondary",
  maintenance: "destructive",
};

const statusLabel: Record<CommunityAmenity["status"], string> = {
  open: "Open",
  "coming-soon": "Coming Soon",
  maintenance: "Maintenance",
};

interface CommunityAmenityCardProps {
  amenity: CommunityAmenity;
}

export function CommunityAmenityCard({ amenity }: CommunityAmenityCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center text-lg">
            <amenity.icon className="mr-2 h-5 w-5 text-green-600" />
            {amenity.name}
          </CardTitle>
          <Badge variant={statusVariant[amenity.status]}>{statusLabel[amenity.status]}</Badge>
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
          {amenity.features.map((feature) => (
            <Badge key={feature} variant="outline" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
