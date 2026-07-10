"use client";

import { useState } from "react";

import { Calculator, Home, MapPin, DollarSign, TrendingUp, Phone, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function HomeValuationSection() {
  const [formData, setFormData] = useState({
    address: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    squareFeet: "",
    yearBuilt: "",
    condition: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Valuation request:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            Get Your <span className="text-green-600">Home Valuation</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Discover your home&apos;s current market value with our free, professional valuation service. insights based
            on recent sales and market trends in your area.
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Valuation Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Calculator className="mr-3 h-6 w-6 text-green-600" />
                Free Home Valuation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="address">Property Address *</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="address"
                      placeholder="Enter your property address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="propertyType">Property Type *</Label>
                    <Select
                      value={formData.propertyType}
                      onValueChange={(value) => handleInputChange("propertyType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single-family">Single Family Home</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                        <SelectItem value="multi-family">Multi-Family</SelectItem>
                        <SelectItem value="land">Land</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="bedrooms">Bedrooms</Label>
                    <Select value={formData.bedrooms} onValueChange={(value) => handleInputChange("bedrooms", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select bedrooms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5+">5+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="bathrooms">Bathrooms</Label>
                    <Select value={formData.bathrooms} onValueChange={(value) => handleInputChange("bathrooms", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select bathrooms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="1.5">1.5</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="2.5">2.5</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="3+">3+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="squareFeet">Square Feet</Label>
                    <Input
                      id="squareFeet"
                      type="number"
                      placeholder="e.g., 2500"
                      value={formData.squareFeet}
                      onChange={(e) => handleInputChange("squareFeet", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="yearBuilt">Year Built</Label>
                    <Input
                      id="yearBuilt"
                      type="number"
                      placeholder="e.g., 2010"
                      value={formData.yearBuilt}
                      onChange={(e) => handleInputChange("yearBuilt", e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="condition">Condition</Label>
                    <Select value={formData.condition} onValueChange={(value) => handleInputChange("condition", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excellent">Excellent</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="fair">Fair</SelectItem>
                        <SelectItem value="needs-work">Needs Work</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(702) 555-0123"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Tell us about any recent renovations, unique features, or specific questions..."
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full bg-green-600 py-3 text-lg text-white hover:bg-green-700">
                  <DollarSign className="mr-2 h-5 w-5" />
                  Get My Free Valuation
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Benefits & Info */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="mb-4 flex items-center text-2xl font-bold">
                  <TrendingUp className="mr-3 h-6 w-6 text-green-600" />
                  Why Get a Valuation?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-green-600"></div>
                    <span>Accurate market pricing for selling your home</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-green-600"></div>
                    <span>Refinancing decisions and loan applications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-green-600"></div>
                    <span>Property tax assessment appeals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-green-600"></div>
                    <span>Investment property analysis</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-green-600"></div>
                    <span>Insurance coverage adjustments</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="mb-4 flex items-center text-2xl font-bold">
                  <Home className="mr-3 h-6 w-6 text-blue-600" />
                  What You&apos;ll Receive
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600"></div>
                    <span>Detailed market analysis report</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600"></div>
                    <span>Comparable sales in your area</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600"></div>
                    <span>Price range recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600"></div>
                    <span>Market trends and insights</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600"></div>
                    <span>Personal consultation with our expert</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="rounded-lg border border-green-200 bg-green-100 p-6">
              <h4 className="mb-2 font-bold text-green-800">100% Free & No Obligation</h4>
              <p className="text-sm text-green-700">
                Our home valuation service is completely free with no hidden fees or obligations. We&apos;re here to
                help you make informed decisions about your property.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
