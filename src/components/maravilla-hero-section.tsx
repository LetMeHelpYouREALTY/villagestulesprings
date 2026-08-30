import { MapPin, Search, ArrowRight, CheckCircle, Calendar } from "lucide-react";

import { CalendlyButton } from "@/components/calendly-button";
import { DrJanPortrait } from "@/components/dr-jan-portrait";
import { SiteImage } from "@/components/site-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MEDIA } from "@/lib/media-catalog";
import { realScoutTag } from "@/lib/realscout-widget";

export function MaravillaHeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-navy-800">
      {/* Subtle gold texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,177,74,0.08),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(212,177,74,0.06),transparent_40%)]"></div>

      <div className="container relative z-10 mx-auto px-4 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4 duration-1000 animate-in fade-in">
                <DrJanPortrait size="lg" priority className="ring-2 ring-gold-300" />
                <Badge
                  variant="secondary"
                  className="w-fit border border-gold-400/40 bg-transparent font-sans uppercase tracking-widest text-gold-300"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  North Las Vegas, NV 89084
                </Badge>
              </div>
              <h1 className="font-serif text-5xl leading-tight text-cream-100 duration-1000 animate-in slide-in-from-bottom-4 lg:text-7xl">
                Homes in <span className="text-gold-300">Villages at Tule Springs</span>
              </h1>
              <p className="max-w-lg font-sans text-xl font-light leading-relaxed text-cream-300 delay-300 duration-1000 animate-in fade-in">
                North Las Vegas 89084. Dr. Janet Duffy, BHHS Nevada Properties, license S.0197614.LLC. Call 702-222-1964
                to tour homes for sale.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col gap-4 delay-500 duration-1000 animate-in slide-in-from-bottom-4 sm:flex-row">
              <Button
                size="lg"
                className="group bg-gold-400 px-8 py-4 font-sans text-lg uppercase tracking-wide text-navy-800 hover:bg-gold-300"
                asChild
              >
                <CalendlyButton event="homeTour" utmMedium="hero" utmCampaign="hero-tour">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Tour
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </CalendlyButton>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-cream-100/40 px-8 py-4 font-sans text-lg uppercase tracking-wide text-cream-100 hover:bg-cream-100/10"
                asChild
              >
                <a href="#home-valuation">
                  <Search className="mr-2 h-5 w-5" />
                  Get Home Valuation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>

            {/* Quick Search */}
            <Card className="border-cream-100/10 bg-navy-700/60 delay-700 duration-1000 animate-in fade-in">
              <CardContent className="p-6">
                <p className="mb-4 font-serif text-lg text-cream-100">Search homes in 89084</p>
                <div dangerouslySetInnerHTML={{ __html: realScoutTag("simple-search") }} />
              </CardContent>
            </Card>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 border-t border-cream-100/10 pt-8 delay-1000 duration-1000 animate-in fade-in">
              <div className="group text-center">
                <div className="font-serif text-xl text-gold-300 transition-transform group-hover:scale-110 sm:text-2xl">
                  S.0197614.LLC
                </div>
                <div className="text-sm text-cream-300">Nevada License</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-gold-400">BHHS Nevada Properties</div>
              </div>
              <div className="group text-center">
                <div className="font-serif text-4xl text-gold-300 transition-transform group-hover:scale-110">
                  89084
                </div>
                <div className="text-sm text-cream-300">North Las Vegas</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-gold-400">Villages at Tule Springs</div>
              </div>
              <div className="group text-center">
                <div className="font-serif text-4xl text-gold-300 transition-transform group-hover:scale-110">15+</div>
                <div className="text-sm text-cream-300">Years in Market</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-gold-400">Las Vegas Valley</div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 delay-1000 duration-1000 animate-in fade-in">
              <div className="flex items-center text-sm text-cream-300">
                <CheckCircle className="mr-2 h-4 w-4 text-gold-300" />
                License S.0197614.LLC
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
                  <SiteImage
                    asset={MEDIA.heroDreamHome}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                </div>
              </CardContent>
            </Card>

            <CalendlyButton event="homeTour" utmMedium="hero" utmCampaign="hero-showing-card" className="block">
              <Card className="group absolute -bottom-6 -left-6 border-gold-200/40 shadow-lg transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <DrJanPortrait size="xs" />
                    <div>
                      <div className="font-serif text-navy-800">Schedule Showing</div>
                      <div className="text-sm text-navy-400">Available Daily</div>
                      <div className="text-xs uppercase tracking-widest text-gold-600">Book Online</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CalendlyButton>

            <a href="tel:+17022221964" className="block">
              <Card className="group absolute -right-6 -top-6 border-gold-200/40 shadow-lg transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <DrJanPortrait size="xs" />
                    <div>
                      <div className="font-serif text-navy-800">Call Now</div>
                      <div className="text-sm text-navy-400">702-222-1964</div>
                      <div className="text-xs uppercase tracking-widest text-navy-500">Free Consultation</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
