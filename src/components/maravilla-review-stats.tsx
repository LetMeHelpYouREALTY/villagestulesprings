import { Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import type { ReviewStats } from "./maravilla-testimonials-data";

interface MaravillaReviewStatsProps {
  stats: ReviewStats;
}

export function MaravillaReviewStats({ stats }: MaravillaReviewStatsProps) {
  return (
    <>
      <div className="mb-16 grid gap-6 md:grid-cols-4">
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="mb-2 text-3xl font-bold text-green-600">{stats.averageRating}</div>
            <div className="mb-2 flex justify-center">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
              ))}
            </div>
            <div className="text-sm text-gray-600">Average Rating</div>
            <div className="mt-1 text-xs text-gray-500">Based on {stats.totalReviews} reviews</div>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <div className="mb-2 text-3xl font-bold text-green-600">{stats.totalReviews}</div>
            <div className="text-sm text-gray-600">Total Reviews</div>
            <div className="mt-1 text-xs text-gray-500">From verified homeowners</div>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <div className="mb-2 text-3xl font-bold text-green-600">{stats.verifiedPurchases}</div>
            <div className="text-sm text-gray-600">Verified Purchases</div>
            <div className="mt-1 text-xs text-gray-500">Real homeowner reviews</div>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <div className="mb-2 text-3xl font-bold text-green-600">{stats.responseRate}</div>
            <div className="text-sm text-gray-600">Response Rate</div>
            <div className="mt-1 text-xs text-gray-500">We respond to all reviews</div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-16">
        <h3 className="mb-6 text-center text-2xl font-semibold text-gray-900">Rating Breakdown</h3>
        <div className="mx-auto max-w-2xl space-y-3">
          {stats.ratingBreakdown.map((rating) => (
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
    </>
  );
}
