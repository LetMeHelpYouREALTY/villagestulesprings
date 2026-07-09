import type { Metadata } from "next";
import Link from "next/link";

import { LUXURY_SITE } from "@/config/luxury-site-config";
import { aboutPageMetadata } from "@/config/metadata-config";

export const metadata: Metadata = aboutPageMetadata;

export default function AboutPage() {
  return (
    <main className="bg-luxury-ivory py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <p className="luxury-eyebrow mb-4 text-luxury-gold">About</p>
        <h1 className="font-display text-4xl font-medium text-luxury-charcoal md:text-5xl">{LUXURY_SITE.agentName}</h1>
        <p className="mt-6 text-lg leading-relaxed text-luxury-muted">
          Licensed Nevada real estate professional with more than 15 years representing buyers and sellers across the
          Las Vegas metropolitan area.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="luxury-card rounded-sm p-6">
            <h2 className="font-display text-2xl text-luxury-charcoal">Experience</h2>
            <ul className="mt-4 space-y-2 text-luxury-muted">
              <li>15+ years in Las Vegas real estate</li>
              <li>Licensed Nevada Real Estate Agent</li>
              <li>Certified home valuation specialist</li>
              <li>Luxury home marketing</li>
              <li>First-time buyer representation</li>
            </ul>
          </div>
          <div className="luxury-card rounded-sm p-6">
            <h2 className="font-display text-2xl text-luxury-charcoal">Areas Served</h2>
            <ul className="mt-4 space-y-2 text-luxury-muted">
              {LUXURY_SITE.serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="luxury-card mt-8 rounded-sm p-8">
          <h2 className="font-display text-2xl text-luxury-charcoal">Professional Approach</h2>
          <p className="mt-4 text-luxury-muted">
            Deep local market knowledge paired with a disciplined process for pricing, negotiation, and closing. Whether
            you are purchasing a primary residence, selling an estate, or investing in Las Vegas real estate, you get
            clear guidance at every step.
          </p>
          <p className="mt-4 text-luxury-muted">
            Hundreds of completed transactions and a 4.9 client rating reflect a consistent standard: accurate data,
            responsive communication, and outcomes that match the plan.
          </p>
        </div>

        <div className="mt-12 text-center">
          <h2 className="font-display text-2xl text-luxury-charcoal">Ready to Work Together?</h2>
          <p className="mt-4 text-luxury-muted">Schedule a consultation about your next move.</p>
          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <a href={`tel:${LUXURY_SITE.phoneTel}`} className="luxury-btn-primary">
              Call {LUXURY_SITE.phone}
            </a>
            <Link href="/#contact" className="luxury-btn-outline">
              Contact Online
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
