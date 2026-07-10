import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { aboutPageMetadata } from "@/config/metadata-config";

// Use the pre-configured metadata for the about page
export const metadata: Metadata = aboutPageMetadata;

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-cream-50 px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.2em] text-gold-600">Meet Your Specialist</p>
          <h1 className="mb-8 mt-2 font-serif text-4xl text-navy-800">About Dr. Janet Duffy</h1>

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
                  href="tel:(702) 555-REALTOR"
                  className="rounded-lg bg-navy-700 px-6 py-3 font-sans uppercase tracking-widest text-cream-100 transition-colors hover:bg-navy-800"
                >
                  Call (702) 555-REALTOR
                </a>
                <a
                  href="mailto:info@lasvegasrealestate.com"
                  className="rounded-lg border border-gold-400 px-6 py-3 font-sans uppercase tracking-widest text-gold-600 transition-colors hover:bg-gold-400 hover:text-navy-800"
                >
                  Email Dr. Duffy
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
