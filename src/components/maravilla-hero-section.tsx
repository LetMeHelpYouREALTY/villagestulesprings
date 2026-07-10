import { MapPin, Home, Star, Phone, Search, ArrowRight, CheckCircle } from "lucide-react";

import { CloudinaryImage } from "@/components/cloudinary-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cloudinaryPublicId, getRealScoutAgentId, isCloudinaryConfigured } from "@/config/env";

export function MaravillaHeroSection() {
  const agentId = getRealScoutAgentId();
  const showCloudinary = isCloudinaryConfigured();

  return (
    <section className="relative min-h-screen overflow-hidden bg-navy-800">
      {/* Subtle gold texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,177,74,0.08),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(212,177,74,0.06),transparent_40%)]"></div>

      <div className="container relative z-10 mx-auto px-4 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="w-fit border border-gold-400/40 bg-transparent font-sans uppercase tracking-widest text-gold-300 duration-1000 animate-in fade-in"
              >
                <MapPin className="mr-2 h-4 w-4" />
                Las Vegas, NV &bull; Prime Location
              </Badge>
              <h1 className="font-serif text-5xl leading-tight text-cream-100 duration-1000 animate-in slide-in-from-bottom-4 lg:text-7xl">
                Find Your <span className="text-gold-300">Dream Home</span>
              </h1>
              <p className="max-w-lg font-sans text-xl font-light leading-relaxed text-cream-300 delay-300 duration-1000 animate-in fade-in">
                Institutional-grade market knowledge, local execution. Whether you&apos;re buying, selling, or
                investing, navigate the Las Vegas market with a verified specialist.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col gap-4 delay-500 duration-1000 animate-in slide-in-from-bottom-4 sm:flex-row">
              <Button
                size="lg"
                className="group bg-gold-400 px-8 py-4 font-sans text-lg uppercase tracking-wide text-navy-800 hover:bg-gold-300"
                asChild
              >
                <a href="tel:+17022221964">
                  <Search className="mr-2 h-5 w-5" />
                  Search Homes
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-cream-100/40 px-8 py-4 font-sans text-lg uppercase tracking-wide text-cream-100 hover:bg-cream-100/10"
                asChild
              >
                <a href="#home-valuation">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Home Valuation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>

            {/* Quick Search */}
            <Card className="border-cream-100/10 bg-navy-700/60 delay-700 duration-1000 animate-in fade-in">
              <CardContent className="p-6">
                <h3 className="mb-4 font-serif text-lg text-cream-100">Quick Home Search</h3>
                <realscout-simple-search agent-encoded-id={agentId}></realscout-simple-search>
              </CardContent>
            </Card>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 border-t border-cream-100/10 pt-8 delay-1000 duration-1000 animate-in fade-in">
              <div className="group text-center">
                <div className="font-serif text-4xl text-gold-300 transition-transform group-hover:scale-110">500+</div>
                <div className="text-sm text-cream-300">Homes Sold</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-gold-400">Trusted Experience</div>
              </div>
              <div className="group text-center">
                <div className="font-serif text-4xl text-gold-300 transition-transform group-hover:scale-110">4.9</div>
                <div className="flex items-center justify-center text-sm text-cream-300">
                  <Star className="mr-1 h-4 w-4 fill-current" />
                  Rating
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-gold-400">Based on 200+ Reviews</div>
              </div>
              <div className="group text-center">
                <div className="font-serif text-4xl text-gold-300 transition-transform group-hover:scale-110">15+</div>
                <div className="text-sm text-cream-300">Years Experience</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-gold-400">Las Vegas Market</div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 delay-1000 duration-1000 animate-in fade-in">
              <div className="flex items-center text-sm text-cream-300">
                <CheckCircle className="mr-2 h-4 w-4 text-gold-300" />
                Licensed Realtor
              </div>
              <div className="flex items-center text-sm text-cream-300">
                <CheckCircle className="mr-2 h-4 w-4 text-gold-300" />
                Free Consultation
              </div>
              <div className="flex items-center text-sm text-cream-300">
                <CheckCircle className="mr-2 h-4 w-4 text-gold-300" />
                Local Expert
              </div>
            </div>
          </div>

          {/* Right Content — Cloudinary hero when configured */}
          <div className="relative duration-1000 animate-in slide-in-from-right-4">
            <Card className="hover:shadow-3xl group overflow-hidden border-gold-300/20 shadow-2xl transition-all duration-500">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden bg-navy-600">
                  {showCloudinary ? (
                    <CloudinaryImage
                      src={cloudinaryPublicId("hero")}
                      alt="Luxury home at Villages at Tule Springs, Las Vegas"
                      width={960}
                      height={720}
                      crop="fill"
                      gravity="auto"
                      className="h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-center text-cream-200">
                      <div>
                        <Home className="mx-auto mb-4 h-20 w-20 text-gold-300 opacity-70 transition-transform group-hover:scale-110" />
                        <p className="font-serif text-xl">Las Vegas Real Estate</p>
                        <p className="font-sans text-sm text-cream-300">Your Dream Home Awaits</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="group absolute -bottom-6 -left-6 border-gold-200/40 shadow-lg transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 transition-colors group-hover:bg-gold-200">
                    <MapPin className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <div className="font-serif text-navy-800">Schedule Showing</div>
                    <div className="text-sm text-navy-400">Available Daily</div>
                    <div className="text-xs uppercase tracking-widest text-gold-600">Book Online</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group absolute -right-6 -top-6 border-gold-200/40 shadow-lg transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-100 transition-colors group-hover:bg-navy-200">
                    <Phone className="h-6 w-6 text-navy-600" />
                  </div>
                  <div>
                    <div className="font-serif text-navy-800">Call Now</div>
                    <div className="text-sm text-navy-400">702-222-1964</div>
                    <div className="text-xs uppercase tracking-widest text-navy-500">Free Consultation</div>
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
