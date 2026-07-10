import type { Metadata } from "next";

import { PublicPageShell } from "@/components/public-page-shell";
import { aboutPageMetadata } from "@/config/metadata-config";

// Use the pre-configured metadata for the about page
export const metadata: Metadata = aboutPageMetadata;

function AboutHero() {
  return (
    <section className="bg-navy-800 px-4 py-20">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-300">Meet Your Specialist</p>
        <h1 className="mt-3 font-serif text-4xl text-cream-100 md:text-5xl">About Dr. Janet Duffy</h1>
        <p className="mx-auto mt-4 max-w-2xl font-sans text-lg font-light text-cream-300">
          Licensed Nevada REALTOR&reg; with 15+ years guiding buyers and sellers across Las Vegas and North Las Vegas.
        </p>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <PublicPageShell hero={<AboutHero />}>
      <main className="bg-cream-50 px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="max-w-none">
            <p className="mb-8 text-xl leading-relaxed text-navy-500">
              Dr. Janet Duffy is a licensed real estate professional with over 15 years of experience helping clients
              buy and sell homes in the Las Vegas metropolitan area.
            </p>

            <div className="mb-12 grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 font-serif text-2xl text-navy-700">Experience &amp; Expertise</h2>
                <ul className="space-y-2 text-navy-500">
                  <li>&bull; 15+ years in Las Vegas real estate</li>
                  <li>&bull; Licensed Nevada Real Estate Agent</li>
                  <li>&bull; Certified Home Valuation Specialist</li>
                  <li>&bull; Luxury Home Marketing Expert</li>
                  <li>&bull; First-Time Homebuyer Specialist</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-4 font-serif text-2xl text-navy-700">Areas Served</h2>
                <ul className="space-y-2 text-navy-500">
                  <li>&bull; Las Vegas</li>
                  <li>&bull; Henderson</li>
                  <li>&bull; Summerlin</li>
                  <li>&bull; Green Valley</li>
                  <li>&bull; Anthem</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border border-gold-200 bg-cream-100 p-8">
              <h2 className="mb-4 font-serif text-2xl text-navy-700">Professional Approach</h2>
              <p className="mb-4 text-navy-500">
                Dr. Janet Duffy combines deep local market knowledge with a personalized approach to help clients
                achieve their real estate goals. Whether you&apos;re buying your first home, selling a family residence,
                or investing in Las Vegas real estate, Dr. Duffy provides expert guidance every step of the way.
              </p>
              <p className="text-navy-500">
                Her commitment to excellence and client satisfaction has earned her recognition as one of Las
                Vegas&apos;s top real estate professionals, with hundreds of successful transactions and satisfied
                clients.
              </p>
            </div>

            <div className="mt-12 text-center">
              <h2 className="mb-4 font-serif text-2xl text-navy-700">Ready to Work Together?</h2>
              <p className="mb-6 text-navy-500">
                Contact Dr. Janet Duffy today for a free consultation about your real estate needs.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="tel:+17022221964"
                  className="rounded-lg bg-navy-700 px-6 py-3 font-sans uppercase tracking-widest text-cream-100 transition-colors hover:bg-navy-800"
                >
                  Call 702-222-1964
                </a>
                <a
                  href="mailto:DrDuffySells@VillagesTuleSprings.com"
                  className="rounded-lg border border-gold-400 px-6 py-3 font-sans uppercase tracking-widest text-gold-600 transition-colors hover:bg-gold-400 hover:text-navy-800"
                >
                  Email Dr. Duffy
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PublicPageShell>
  );
}
