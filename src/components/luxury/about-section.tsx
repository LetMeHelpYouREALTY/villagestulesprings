import Link from "next/link";

import { ArrowRight, Award, BarChart3, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LUXURY_SITE } from "@/config/luxury-site-config";

import { SectionHeading } from "./section-heading";

const credentials = [
  {
    icon: Award,
    title: "15+ Years in Southern Nevada",
    description: "Deep market knowledge across Las Vegas, Henderson, and Summerlin luxury corridors.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Pricing",
    description: "Comparable sales analysis and absorption metrics tailored to each property.",
  },
  {
    icon: Shield,
    title: "Transaction Stewardship",
    description: "From offer strategy through inspection and closing, every milestone is managed.",
  },
];

export function AboutSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div
            className="aspect-[4/5] bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(15,15,15,0.05), rgba(15,15,15,0.15)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80')",
            }}
            role="img"
            aria-label="Luxury Las Vegas home exterior"
          />

          <div>
            <SectionHeading
              align="left"
              eyebrow="The Duffy Difference"
              title="Representation Built on Precision"
              description="Dr. Janet Duffy delivers disciplined negotiation, curated marketing, and direct access throughout every stage of the transaction."
            />

            <div className="space-y-6">
              {credentials.map((item) => (
                <div key={item.title} className="flex gap-4 border-b border-luxury-gold/15 pb-6 last:border-0">
                  <item.icon className="mt-1 size-5 shrink-0 text-luxury-gold" />
                  <div>
                    <h3 className="font-display text-lg text-luxury-charcoal">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-luxury-muted">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild className="luxury-btn-outline mt-8 rounded-none px-6">
              <Link href="/about">
                Meet Dr. Duffy
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>

            <p className="mt-6 text-sm text-luxury-muted">
              {LUXURY_SITE.brokerage} · License {LUXURY_SITE.license}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
