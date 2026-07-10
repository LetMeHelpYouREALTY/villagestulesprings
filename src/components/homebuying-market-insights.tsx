import { TrendingUp } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MarketInsightsCard() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl">
          <TrendingUp className="mr-3 h-6 w-6 text-green-600" />
          Las Vegas Market Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-green-600">$485K</div>
            <div className="text-gray-600">Median Home Price</div>
            <div className="text-sm text-green-600">+5.2% from last year</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-blue-600">18</div>
            <div className="text-gray-600">Days on Market</div>
            <div className="text-sm text-blue-600">-3 days from last month</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-purple-600">2,847</div>
            <div className="text-gray-600">Active Listings</div>
            <div className="text-sm text-purple-600">+12% inventory increase</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
