import { Home, Bed, Bath, Square, Heart, Share2, Eye, Calendar } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import type { Property } from "./homebuying-search-data";

interface PropertyCardProps {
  property: Property;
  formatPrice: (price: number) => string;
}

export function PropertyCard({ property, formatPrice }: PropertyCardProps) {
  return (
    <Card className="group shadow-lg transition-shadow hover:shadow-xl">
      <CardContent className="p-0">
        <div className="relative">
          <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <Home className="h-16 w-16 text-gray-400" />
          </div>
          <div className="absolute left-4 top-4">
            <Badge variant={property.status === "for-sale" ? "default" : "secondary"}>
              {property.status === "for-sale" ? "For Sale" : "Pending"}
            </Badge>
          </div>
          <div className="absolute right-4 top-4 flex space-x-2">
            <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
              <Heart className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <h4 className="text-xl font-bold text-green-600">{formatPrice(property.price)}</h4>
            <span className="text-sm text-gray-500">{property.daysOnMarket} days on market</span>
          </div>

          <p className="mb-4 text-gray-600">{property.address}</p>

          <div className="mb-4 flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Bed className="mr-1 h-4 w-4" />
              {property.bedrooms}
            </div>
            <div className="flex items-center">
              <Bath className="mr-1 h-4 w-4" />
              {property.bathrooms}
            </div>
            <div className="flex items-center">
              <Square className="mr-1 h-4 w-4" />
              {property.squareFeet.toLocaleString()} sq ft
            </div>
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            {property.features.slice(0, 2).map((feature) => (
              <Badge key={feature} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>

          <div className="flex space-x-2">
            <Button className="flex-1 bg-green-600 hover:bg-green-700">
              <Eye className="mr-2 h-4 w-4" />
              View Details
            </Button>
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
