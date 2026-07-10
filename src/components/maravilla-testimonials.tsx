"use client";
/* eslint-disable max-lines -- large generated marketing section; candidate for future decomposition */

import { useState } from "react";

import {
  Star,
  Quote,
  ThumbsUp,
  MessageCircle,
  Calendar,
  MapPin,
  Home,
  Users,
  Heart,
  CheckCircle,
  Award,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  review: string;
  date: string;
  verified: boolean;
  avatar?: string;
  homeType: string;
  moveInDate: string;
  features: string[];
}

interface ReviewStats {
  totalReviews: number;
  averageRating: number;
  ratingBreakdown: { rating: number; count: number; percentage: number }[];
  verifiedPurchases: number;
  responseRate: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah & Michael Johnson",
    role: "New Homeowners",
    location: "Maravilla Drive",
    rating: 5,
    review:
      "We absolutely love our new home at Maravilla! The quality is exceptional and the community is amazing. The pool complex and fitness center are incredible amenities. The sales team was professional and made the entire process smooth.",
    date: "2 weeks ago",
    verified: true,
    homeType: "Single-Story Villa",
    moveInDate: "December 2024",
    features: ["Waves Access", "Fitness Center", "Smart Home", "Energy Efficient"],
  },
  {
    id: "2",
    name: "Elena Rodriguez",
    role: "Family of Four",
    location: "Desert Vista Lane",
    rating: 5,
    review:
      "Perfect for our growing family! The schools nearby are excellent and the community is so family-friendly. Our kids love the playground and walking trails. The home itself is beautifully designed with modern finishes.",
    date: "1 month ago",
    verified: true,
    homeType: "Two-Story Family Home",
    moveInDate: "November 2024",
    features: ["Family Friendly", "Great Schools", "Walking Trails", "Modern Design"],
  },
  {
    id: "3",
    name: "David Chen",
    role: "Executive",
    location: "Canyon Ridge Court",
    rating: 5,
    review:
      "The executive home exceeded all our expectations. The smart home technology is impressive and the energy efficiency is remarkable. The location is perfect - close to everything but still peaceful and private.",
    date: "3 weeks ago",
    verified: true,
    homeType: "Executive Home",
    moveInDate: "January 2025",
    features: ["Smart Home", "Energy Efficient", "Prime Location", "Executive Level"],
  },
  {
    id: "4",
    name: "Lisa & Tom Wilson",
    role: "Retirees",
    location: "Garden View Place",
    rating: 5,
    review:
      "We downsized to a townhome and couldn't be happier! Low maintenance living with all the amenities we need. The community events are wonderful and we've made great friends. Highly recommend Maravilla!",
    date: "1 week ago",
    verified: true,
    homeType: "Townhome",
    moveInDate: "December 2024",
    features: ["Low Maintenance", "Community Events", "Great Neighbors", "Perfect Size"],
  },
  {
    id: "5",
    name: "Maria & Carlos Garcia",
    role: "First-Time Buyers",
    location: "Maravilla Drive",
    rating: 5,
    review:
      "As first-time homebuyers, we were nervous about the process. The Maravilla team made everything so easy and explained everything clearly. Our home is beautiful and we love the energy-efficient features.",
    date: "2 weeks ago",
    verified: true,
    homeType: "Single-Story Villa",
    moveInDate: "January 2025",
    features: ["First-Time Buyer Friendly", "Energy Efficient", "Beautiful Design", "Great Support"],
  },
  {
    id: "6",
    name: "Jennifer & Robert Kim",
    role: "Investors",
    location: "Desert Vista Lane",
    rating: 5,
    review:
      "We purchased this as an investment property and couldn't be more pleased. The rental market is strong in this area and the home's modern features attract quality tenants. Great investment opportunity!",
    date: "1 month ago",
    verified: true,
    homeType: "Two-Story Family Home",
    moveInDate: "Rental Property",
    features: ["Investment Property", "Strong Rental Market", "Modern Features", "Quality Tenants"],
  },
];

const reviewStats: ReviewStats = {
  totalReviews: 127,
  averageRating: 4.9,
  ratingBreakdown: [
    { rating: 5, count: 118, percentage: 93 },
    { rating: 4, count: 7, percentage: 6 },
    { rating: 3, count: 2, percentage: 1 },
    { rating: 2, count: 0, percentage: 0 },
    { rating: 1, count: 0, percentage: 0 },
  ],
  verifiedPurchases: 124,
  responseRate: "98%",
};

export function MaravillaTestimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [filterBy, setFilterBy] = useState<"all" | "verified" | "recent">("all");

  const filteredTestimonials = testimonials.filter((testimonial) => {
    if (filterBy === "verified") return testimonial.verified;
    if (filterBy === "recent") return testimonial.date.includes("week");
    return true;
  });

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <Badge variant="secondary" className="mb-4">
            <Star className="mr-2 h-4 w-4" />
            Customer Reviews
          </Badge>
          <h2 className="mb-4 text-4xl font-bold text-gray-900">What Our Homeowners Say</h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Don&apos;t just take our word for it. Hear from real Maravilla homeowners about their experience living in
            our community.
          </p>
        </div>

        {/* Review Stats */}
        <div className="mb-16 grid gap-6 md:grid-cols-4">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="mb-2 text-3xl font-bold text-green-600">{reviewStats.averageRating}</div>
              <div className="mb-2 flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                ))}
              </div>
              <div className="text-sm text-gray-600">Average Rating</div>
              <div className="mt-1 text-xs text-gray-500">Based on {reviewStats.totalReviews} reviews</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="mb-2 text-3xl font-bold text-green-600">{reviewStats.totalReviews}</div>
              <div className="text-sm text-gray-600">Total Reviews</div>
              <div className="mt-1 text-xs text-gray-500">From verified homeowners</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="mb-2 text-3xl font-bold text-green-600">{reviewStats.verifiedPurchases}</div>
              <div className="text-sm text-gray-600">Verified Purchases</div>
              <div className="mt-1 text-xs text-gray-500">Real homeowner reviews</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="mb-2 text-3xl font-bold text-green-600">{reviewStats.responseRate}</div>
              <div className="text-sm text-gray-600">Response Rate</div>
              <div className="mt-1 text-xs text-gray-500">We respond to all reviews</div>
            </CardContent>
          </Card>
        </div>

        {/* Rating Breakdown */}
        <div className="mb-16">
          <h3 className="mb-6 text-center text-2xl font-semibold text-gray-900">Rating Breakdown</h3>
          <div className="mx-auto max-w-2xl space-y-3">
            {reviewStats.ratingBreakdown.map((rating) => (
              <div key={rating.rating} className="flex items-center space-x-4">
                <div className="flex w-16 items-center">
                  <span className="text-sm font-medium text-gray-700">{rating.rating}</span>
                  <Star className="ml-1 h-4 w-4 fill-current text-yellow-400" />
                </div>
                <div className="h-2 flex-1 rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full bg-green-600 transition-all duration-1000"
                    style={{ width: `${rating.percentage}%` }}
                  ></div>
                </div>
                <div className="w-12 text-right text-sm text-gray-600">
                  {rating.count} ({rating.percentage}%)
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="mb-12 flex justify-center gap-4">
          <Button variant={filterBy === "all" ? "default" : "outline"} onClick={() => setFilterBy("all")}>
            All Reviews
          </Button>
          <Button variant={filterBy === "verified" ? "default" : "outline"} onClick={() => setFilterBy("verified")}>
            <CheckCircle className="mr-2 h-4 w-4" />
            Verified Only
          </Button>
          <Button variant={filterBy === "recent" ? "default" : "outline"} onClick={() => setFilterBy("recent")}>
            <Calendar className="mr-2 h-4 w-4" />
            Recent Reviews
          </Button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredTestimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="cursor-pointer transition-all duration-300 hover:shadow-lg"
              onClick={() => setSelectedTestimonial(testimonial)}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback className="bg-green-100 text-green-600">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
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

                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating ? "fill-current text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{testimonial.rating}/5</span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-500">{testimonial.date}</span>
                  </div>

                  {/* Review */}
                  <div className="relative">
                    <Quote className="absolute -left-2 -top-2 h-6 w-6 text-green-200" />
                    <p className="line-clamp-4 pl-4 text-sm text-gray-700">{testimonial.review}</p>
                  </div>

                  {/* Home Details */}
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
                      {testimonial.features.slice(0, 2).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
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

                  {/* Actions */}
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
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="mx-auto max-w-4xl border-green-200 bg-gradient-to-r from-green-50 to-blue-50">
            <CardContent className="p-8">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Ready to Write Your Own Success Story?</h3>
              <p className="mb-6 text-gray-600">
                Join our community of happy homeowners and experience the Maravilla difference.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Home className="mr-2 h-5 w-5" />
                  View Available Homes
                </Button>
                <Button size="lg" variant="outline">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Tour
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
