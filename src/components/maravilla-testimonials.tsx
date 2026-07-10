"use client";

import { useState } from "react";

import { Star, Calendar, Home, CheckCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { MaravillaReviewStats } from "./maravilla-review-stats";
import { MaravillaTestimonialCard } from "./maravilla-testimonial-card";
import { testimonials, reviewStats } from "./maravilla-testimonials-data";

export function MaravillaTestimonials() {
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

        <MaravillaReviewStats stats={reviewStats} />

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
            <MaravillaTestimonialCard key={testimonial.id} testimonial={testimonial} />
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
