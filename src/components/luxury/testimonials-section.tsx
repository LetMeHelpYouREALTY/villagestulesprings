import { Star } from "lucide-react";

import { LUXURY_SITE } from "@/config/luxury-site-config";

import { SectionHeading } from "./section-heading";

export function TestimonialsSection() {
  return (
    <section className="bg-luxury-ink py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          light
          eyebrow="Client Perspectives"
          title="Trusted by Buyers & Sellers"
          description="Recent experiences from clients across the Las Vegas valley."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {LUXURY_SITE.testimonials.map((testimonial) => (
            <article key={testimonial.id} className="luxury-card rounded-sm p-8">
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star key={`${testimonial.id}-star-${index}`} className="size-4 fill-luxury-gold text-luxury-gold" />
                ))}
              </div>
              <p className="font-display text-lg leading-relaxed text-luxury-charcoal">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="mt-6 text-sm font-medium text-luxury-charcoal">{testimonial.name}</p>
              <p className="text-xs text-luxury-muted">{testimonial.area}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
