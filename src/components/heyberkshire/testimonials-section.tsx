import { Star } from "lucide-react";

import { HEYBERKSHIRE_CONFIG } from "@/config/heyberkshire-config";
import { getInitials } from "@/lib/utils";

const TESTIMONIALS = [
  {
    name: "Tom Sanders",
    location: "Las Vegas, NV",
    avatarClassName: "bg-blue-100 text-blue-700",
    quote:
      "Dr. Duffy made our home buying experience seamless. Her knowledge of the Las Vegas market is unmatched, and she guided us through every step with professionalism and care.",
  },
  {
    name: "Vitor Palmer",
    location: "Henderson, NV",
    avatarClassName: "bg-emerald-100 text-emerald-700",
    quote:
      "We couldn't be happier with our new home! The entire process was smooth, and Dr. Duffy's attention to detail and negotiation skills saved us thousands. Highly recommend!",
  },
  {
    name: "Emily Rodriguez",
    location: "Summerlin, NV",
    avatarClassName: "bg-amber-100 text-amber-700",
    quote:
      "As first-time homebuyers, we were nervous about the process. Dr. Duffy patiently explained everything and helped us find the perfect home in our budget. Thank you!",
  },
];

const STAR_KEYS = ["star-1", "star-2", "star-3", "star-4", "star-5"];

function StarRating() {
  return (
    <div className="flex" aria-hidden="true">
      {STAR_KEYS.map((key) => (
        <Star key={key} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">What Our Clients Say</h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-600">
            Real testimonials from satisfied clients across Las Vegas and Henderson
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <StarRating />
            <span className="text-lg font-semibold text-slate-900">{HEYBERKSHIRE_CONFIG.rating.value}</span>
            <span className="text-slate-600">({HEYBERKSHIRE_CONFIG.rating.count}+ reviews)</span>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="mb-4 flex items-center">
                <div
                  className={`mr-4 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full text-lg font-semibold ${testimonial.avatarClassName}`}
                  aria-hidden="true"
                >
                  {getInitials(testimonial.name)}
                </div>
                <div>
                  <p className="font-semibold text-slate-900" itemProp="author">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500">{testimonial.location}</p>
                  <StarRating />
                </div>
              </div>
              <p className="relative z-10 text-slate-700" itemProp="reviewBody">
                {testimonial.quote}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={HEYBERKSHIRE_CONFIG.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700"
          >
            Read More Reviews on Google
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
