import { MapPin, Home, Star, Calendar, Phone, Mail, Search, ArrowRight, CheckCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function MaravillaHeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23059669%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

      {/* Floating Elements */}
      <div className="absolute left-10 top-20 h-20 w-20 animate-pulse rounded-full bg-green-200 opacity-20"></div>
      <div className="absolute right-20 top-40 h-16 w-16 animate-pulse rounded-full bg-blue-200 opacity-20 delay-1000"></div>
      <div className="delay-2000 absolute bottom-20 left-20 h-12 w-12 animate-pulse rounded-full bg-green-300 opacity-20"></div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit duration-1000 animate-in fade-in">
                <MapPin className="mr-2 h-4 w-4" />
                Las Vegas, NV • Prime Location
              </Badge>
              <h1 className="text-5xl font-bold leading-tight text-gray-900 duration-1000 animate-in slide-in-from-bottom-4 lg:text-7xl">
                Find Your{" "}
                <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-green-600 text-transparent">
                  Dream Home
                </span>
              </h1>
              <p className="text-xl leading-relaxed text-gray-600 delay-300 duration-1000 animate-in fade-in">
                Expert real estate services in Las Vegas. Whether you&apos;re buying, selling, or investing, navigate
                the market with confidence and find the perfect property.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col gap-4 delay-500 duration-1000 animate-in slide-in-from-bottom-4 sm:flex-row">
              <Button size="lg" className="group bg-green-600 px-8 py-4 text-lg text-white hover:bg-green-700">
                <Search className="mr-2 h-5 w-5" />
                Search Homes
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="group px-8 py-4 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Get Home Valuation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Quick Search */}
            <Card className="delay-700 duration-1000 animate-in fade-in">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold">Quick Home Search</h3>
                <realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>
              </CardContent>
            </Card>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 delay-1000 duration-1000 animate-in fade-in">
              <div className="group text-center">
                <div className="text-4xl font-bold text-green-600 transition-transform group-hover:scale-110">500+</div>
                <div className="text-sm text-gray-600">Homes Sold</div>
                <div className="mt-1 text-xs text-green-600">Trusted Experience</div>
              </div>
              <div className="group text-center">
                <div className="text-4xl font-bold text-green-600 transition-transform group-hover:scale-110">4.9</div>
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <Star className="mr-1 h-4 w-4 fill-current" />
                  Rating
                </div>
                <div className="mt-1 text-xs text-green-600">Based on 200+ Reviews</div>
              </div>
              <div className="group text-center">
                <div className="text-4xl font-bold text-green-600 transition-transform group-hover:scale-110">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
                <div className="mt-1 text-xs text-green-600">Las Vegas Market</div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4 delay-1000 duration-1000 animate-in fade-in">
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                Licensed Realtor
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                Free Consultation
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                Local Expert
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Image Placeholder */}
          <div className="relative duration-1000 animate-in slide-in-from-right-4">
            <Card className="hover:shadow-3xl group overflow-hidden shadow-2xl transition-all duration-500">
              <CardContent className="p-0">
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-green-100 to-blue-100">
                  <div className="z-10 text-center text-gray-500">
                    <Home className="mx-auto mb-4 h-20 w-20 opacity-50 transition-transform group-hover:scale-110" />
                    <p className="text-xl font-semibold">Las Vegas Real Estate</p>
                    <p className="text-sm">Your Dream Home Awaits</p>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Floating Cards */}
            <Card className="group absolute -bottom-6 -left-6 shadow-lg transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 transition-colors group-hover:bg-green-200">
                    <Calendar className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Schedule Showing</div>
                    <div className="text-sm text-gray-600">Available Daily</div>
                    <div className="text-xs text-green-600">Book Online</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group absolute -right-6 -top-6 shadow-lg transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 transition-colors group-hover:bg-blue-200">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Call Now</div>
                    <div className="text-sm text-gray-600">(702) 555-REALTOR</div>
                    <div className="text-xs text-blue-600">Free Consultation</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* New Floating Card */}
            <Card className="group absolute -left-8 top-1/2 shadow-lg transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-3">
                <div className="flex items-center space-x-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 transition-colors group-hover:bg-purple-200">
                    <Mail className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Get Updates</div>
                    <div className="text-xs text-gray-600">New Listings</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
