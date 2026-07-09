import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LUXURY_SITE } from "@/config/luxury-site-config";

export function LuxuryHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(15,15,15,0.82) 0%, rgba(15,15,15,0.55) 45%, rgba(15,15,15,0.75) 100%), url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 pb-20 pt-32 lg:pt-40">
        <div className="max-w-3xl">
          <p className="luxury-eyebrow mb-6 text-luxury-gold-light">
            {LUXURY_SITE.serviceAreas.join(" · ").toUpperCase()}
          </p>
          <h1 className="font-display text-4xl font-medium leading-tight tracking-tight text-luxury-ivory md:text-6xl lg:text-7xl">
            Exceptional Homes for Discerning Buyers
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-luxury-cream/85 md:text-lg">
            White-glove representation across Las Vegas, Henderson, and Summerlin. Architecture, square footage, and
            amenity-driven guidance from contract to closing.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild className="luxury-btn-outline rounded-none px-8 py-6 text-sm tracking-wide">
              <Link href="/#listings">
                View Signature Listings
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button asChild className="luxury-btn-primary rounded-none px-8 py-6 text-sm tracking-wide">
              <Link href="/#valuation">Request a Valuation</Link>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-luxury-gold/30 pt-8 md:grid-cols-4">
            {LUXURY_SITE.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl text-luxury-gold md:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs tracking-wide text-luxury-cream/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="luxury-card mt-12 max-w-4xl rounded-sm p-6 md:p-8">
          <p className="luxury-eyebrow mb-4">Private Property Search</p>
          <realscout-simple-search agent-encoded-id={LUXURY_SITE.realscoutAgentId} />
        </div>
      </div>
    </section>
  );
}
