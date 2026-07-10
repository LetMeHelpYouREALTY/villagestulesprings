import { Star, Quote, ThumbsUp, MessageCircle, Calendar, MapPin, Home, CheckCircle } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import type { Testimonial } from "./maravilla-testimonials-data";

interface MaravillaTestimonialCardProps {
  testimonial: Testimonial;
}

export function MaravillaTestimonialCard({ testimonial }: MaravillaTestimonialCardProps) {
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <Card className="cursor-pointer transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={testimonial.avatar} />
              <AvatarFallback className="bg-green-100 text-green-600">{initials}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                {testimonial.verified && (
                  <Badge variant="outline" className="text-xs">
                    <CheckCircle className="mr-1 h-3 w-3" />
                    Verified
                  </Badge>
                )}
              </div>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
              <div className="mt-1 flex items-center text-xs text-gray-500">
                <MapPin className="mr-1 h-3 w-3" />
                {testimonial.location}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < testimonial.rating ? "fill-current text-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">{testimonial.rating}/5</span>
            <span className="text-xs text-gray-500">•</span>
            <span className="text-xs text-gray-500">{testimonial.date}</span>
          </div>

          <div className="relative">
            <Quote className="absolute -left-2 -top-2 h-6 w-6 text-green-200" />
            <p className="line-clamp-4 pl-4 text-sm text-gray-700">{testimonial.review}</p>
          </div>

          <div className="border-t pt-4">
            <div className="mb-2 flex items-center justify-between text-xs text-gray-600">
              <span className="flex items-center">
                <Home className="mr-1 h-3 w-3" />
                {testimonial.homeType}
              </span>
              <span className="flex items-center">
                <Calendar className="mr-1 h-3 w-3" />
                {testimonial.moveInDate}
              </span>
            </div>
            <div className="flex flex-wrap gap-1">
              {testimonial.features.slice(0, 2).map((feature) => (
                <Badge key={feature} variant="outline" className="text-xs">
                  {feature}
                </Badge>
              ))}
              {testimonial.features.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{testimonial.features.length - 2}
                </Badge>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <button className="flex items-center transition-colors hover:text-green-600">
                <ThumbsUp className="mr-1 h-3 w-3" />
                Helpful
              </button>
              <button className="flex items-center transition-colors hover:text-green-600">
                <MessageCircle className="mr-1 h-3 w-3" />
                Reply
              </button>
            </div>
            <Button size="sm" variant="ghost" className="text-xs">
              Read More
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
