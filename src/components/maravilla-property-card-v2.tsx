"use client";

import { useState } from "react";

import {
  Home,
  Bed,
  Bath,
  Square,
  MapPin,
  Calendar,
  Heart,
  Share2,
  Eye,
  Star,
  TrendingUp,
  Clock,
  Users,
  Car,
  TreePine,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { getStatusColor, getStatusText, type MaravillaProperty } from "./maravilla-property-listings-v2-data";

interface PropertyImageGalleryProps {
  property: MaravillaProperty;
  currentImageIndex: number;
  onImageIndexChange: (index: number) => void;
  isLiked: boolean;
  onToggleLiked: () => void;
}

function PropertyImageGallery({
  property,
  currentImageIndex,
  onImageIndexChange,
  isLiked,
  onToggleLiked,
}: PropertyImageGalleryProps) {
  return (
    <CardHeader className="relative p-0">
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 to-green-100">
        <div className="z-10 text-center text-gray-500">
          <Home className="mx-auto mb-2 h-16 w-16 opacity-50 transition-transform group-hover:scale-110" />
          <p className="text-sm font-medium">Maravilla Home</p>
          <p className="text-xs">
            Image {currentImageIndex + 1} of {property.images.length}
          </p>
        </div>

        {property.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
            {property.images.map((image, index) => (
              <button
                // eslint-disable-next-line react/no-array-index-key -- placeholder images are identical; position is the only stable identity
                key={`${property.id}-dot-${index}`}
                onClick={() => onImageIndexChange(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentImageIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
      </div>

      <div className="absolute right-4 top-4">
        <Badge className={`${getStatusColor(property.status)} text-white shadow-lg`}>
          {getStatusText(property.status)}
        </Badge>
      </div>

      <div className="absolute left-4 top-4">
        <Badge variant="secondary" className="bg-white/95 shadow-lg backdrop-blur-sm">
          {property.price}
        </Badge>
      </div>

      <div className="absolute left-1/2 top-4 -translate-x-1/2 transform opacity-0 transition-opacity group-hover:opacity-100">
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="secondary"
            className="h-8 w-8 bg-white/90 p-0 backdrop-blur-sm"
            onClick={onToggleLiked}
          >
            <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
          </Button>
          <Button size="sm" variant="secondary" className="h-8 w-8 bg-white/90 p-0 backdrop-blur-sm">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="secondary" className="h-8 w-8 bg-white/90 p-0 backdrop-blur-sm">
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {property.virtualTour && (
        <div className="absolute bottom-4 right-4">
          <Badge variant="outline" className="bg-white/90 backdrop-blur-sm">
            <Eye className="mr-1 h-3 w-3" />
            Virtual Tour
          </Badge>
        </div>
      )}

      {property.openHouse && (
        <div className="absolute bottom-4 left-4">
          <Badge variant="outline" className="bg-white/90 backdrop-blur-sm">
            <Calendar className="mr-1 h-3 w-3" />
            Open House
          </Badge>
        </div>
      )}
    </CardHeader>
  );
}

function PropertyCardDetails({ property }: { property: MaravillaProperty }) {
  return (
    <CardContent className="p-6">
      <div className="space-y-4">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <div className="text-2xl font-bold text-green-600">{property.price}</div>
            {property.originalPrice && (
              <div className="text-sm text-gray-500 line-through">{property.originalPrice}</div>
            )}
          </div>
          <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-green-600">
            {property.title}
          </h3>
          <div className="mb-2 flex items-center text-sm text-gray-600">
            <MapPin className="mr-1 h-4 w-4" />
            {property.address}
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <Clock className="mr-1 h-3 w-3" />
            {property.daysOnMarket} days on market
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="flex items-center">
            <Bed className="mr-2 h-4 w-4 text-gray-500" />
            {property.bedrooms} bed
          </div>
          <div className="flex items-center">
            <Bath className="mr-2 h-4 w-4 text-gray-500" />
            {property.bathrooms} bath
          </div>
          <div className="flex items-center">
            <Square className="mr-2 h-4 w-4 text-gray-500" />
            {property.squareFeet.toLocaleString()} sq ft
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Car className="mr-2 h-4 w-4 text-gray-500" />
            {property.garage} car garage
          </div>
          <div className="flex items-center">
            <TreePine className="mr-2 h-4 w-4 text-gray-500" />
            {property.lotSize}
          </div>
          <div className="flex items-center">
            <TrendingUp className="mr-2 h-4 w-4 text-gray-500" />${property.pricePerSqFt}/sq ft
          </div>
          <div className="flex items-center">
            <Star className="mr-2 h-4 w-4 text-gray-500" />
            Energy Rating: {property.energyRating}
          </div>
        </div>

        <Separator />

        <div className="rounded-lg bg-green-50 p-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Estimated Payment:</span>
            <span className="text-lg font-bold text-green-600">{property.estimatedPayment}</span>
          </div>
          <div className="mt-1 text-xs text-gray-600">HOA: {property.hoa} • 20% down, 6.5% APR</div>
        </div>

        <p className="line-clamp-2 text-sm text-gray-600">{property.description}</p>

        <div className="flex flex-wrap gap-2">
          {property.features.slice(0, 4).map((feature) => (
            <Badge key={feature} variant="outline" className="text-xs">
              {feature}
            </Badge>
          ))}
          {property.features.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{property.features.length - 4} more
            </Badge>
          )}
        </div>

        <div className="flex items-center space-x-3 border-t pt-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
            <Users className="h-4 w-4 text-gray-600" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-900">{property.agent.name}</div>
            <div className="text-xs text-gray-600">{property.agent.phone}</div>
          </div>
        </div>
      </div>
    </CardContent>
  );
}

export function MaravillaPropertyCard({ property }: { property: MaravillaProperty }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card className="group overflow-hidden border-0 shadow-lg transition-all duration-500 hover:shadow-2xl">
      <PropertyImageGallery
        property={property}
        currentImageIndex={currentImageIndex}
        onImageIndexChange={setCurrentImageIndex}
        isLiked={isLiked}
        onToggleLiked={() => setIsLiked(!isLiked)}
      />

      <PropertyCardDetails property={property} />

      <CardFooter className="p-6 pt-0">
        <div className="flex w-full gap-2">
          <Button className="flex-1" variant="outline">
            <Eye className="mr-2 h-4 w-4" />
            View Details
          </Button>
          <Button className="flex-1 bg-green-600 hover:bg-green-700">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Tour
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
