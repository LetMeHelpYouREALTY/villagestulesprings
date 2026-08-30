import type { Metadata } from "next";

import { CalendlyButton } from "@/components/calendly-button";
import { CalendlyInlineWidget } from "@/components/calendly-inline-widget";
import { DrJanPortrait } from "@/components/dr-jan-portrait";
import { HeadingPhoto } from "@/components/heading-photo";
import { PublicPageShell } from "@/components/public-page-shell";
import { aboutPageMetadata } from "@/config/metadata-config";
import { MEDIA } from "@/lib/media-catalog";

export const metadata: Metadata = aboutPageMetadata;

function AboutHero() {
  return (
    <section className="bg-navy-800 px-4 py-20">
      <div className="container mx-auto max-w-4xl text-center">
        <DrJanPortrait size="xl" priority className="mx-auto mb-6 ring-4 ring-gold-300" />
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-300">Meet Your Specialist</p>
        <h1 className="mt-3 font-serif text-4xl text-cream-100 md:text-5xl">About Dr. Janet Duffy</h1>
        <p className="mx-auto mt-4 max-w-2xl font-sans text-lg font-light text-cream-300">
          Licensed Nevada REALTOR&reg; with 15+ years guiding buyers and sellers across Las Vegas and North Las Vegas.
        </p>
        <HeadingPhoto asset={MEDIA.aboutHero} className="mx-auto mt-10 max-w-3xl" />
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
                <div className="mb-4 flex items-center gap-3">
                  <DrJanPortrait size="sm" className="ring-2 ring-gold-300" />
                  <h2 className="font-serif text-2xl text-navy-700">Experience &amp; Expertise</h2>
                </div>
                <HeadingPhoto asset={MEDIA.experienceExpertise} className="mb-4" />
                <ul className="space-y-2 text-navy-500">
                  <li>&bull; 15+ years in Las Vegas real estate</li>
                  <li>&bull; Licensed Nevada Real Estate Agent</li>
                  <li>&bull; Certified Home Valuation Specialist</li>
                  <li>&bull; Luxury Home Marketing Expert</li>
                  <li>&bull; First-Time Homebuyer Specialist</li>
                </ul>
              </div>

              <div>
                <div className="mb-4 flex items-center gap-3">
                  <DrJanPortrait size="sm" className="ring-2 ring-gold-300" />
                  <h2 className="font-serif text-2xl text-navy-700">Areas Served</h2>
                </div>
                <HeadingPhoto asset={MEDIA.areasServed} className="mb-4" />
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
              <div className="mb-6 flex items-center gap-3">
                <DrJanPortrait size="sm" className="ring-2 ring-gold-300" />
                <h2 className="font-serif text-2xl text-navy-700">Professional Approach</h2>
              </div>
              <HeadingPhoto asset={MEDIA.professionalApproach} className="mb-6" />
              <p className="mb-4 text-navy-500">
                Dr. Janet Duffy combines deep local market knowledge with a personalized approach to help clients
                achieve their real estate goals. Whether you&apos;re buying your first home, selling a residence, or
                investing in Las Vegas real estate, Dr. Duffy provides expert guidance every step of the way.
              </p>
              <p className="text-navy-500">
                Her commitment to excellence and client satisfaction has earned her recognition as one of Las
                Vegas&apos;s top real estate professionals, with hundreds of successful transactions and satisfied
                clients.
              </p>
            </div>

            <div className="mt-12 rounded-lg border border-gold-200 bg-white p-8">
              <div className="mb-6 text-center">
                <DrJanPortrait size="lg" className="mx-auto mb-4 ring-2 ring-gold-300" />
                <h2 className="mb-4 font-serif text-2xl text-navy-700">Ready to Work Together?</h2>
                <p className="mb-6 text-navy-500">
                  Book a 15-minute conversation with Dr. Janet Duffy — or call{" "}
                  <a href="tel:+17022221964" className="text-gold-600 underline-offset-4 hover:underline">
                    702-222-1964
                  </a>
                  .
                </p>
                <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <CalendlyButton
                    event="conversation"
                    utmMedium="about"
                    utmCampaign="about-cta"
                    className="rounded-lg bg-navy-700 px-6 py-3 font-sans uppercase tracking-widest text-cream-100 transition-colors hover:bg-navy-800"
                  >
                    Book 15 Minutes
                  </CalendlyButton>
                  <a
                    href="tel:+17022221964"
                    className="rounded-lg border border-gold-400 px-6 py-3 font-sans uppercase tracking-widest text-gold-600 transition-colors hover:bg-gold-400 hover:text-navy-800"
                  >
                    Call 702-222-1964
                  </a>
                </div>
              </div>
              <CalendlyInlineWidget
                event="conversation"
                title="Schedule a 15-minute conversation with Dr. Jan Duffy"
                utmMedium="about"
                utmCampaign="about-inline"
              />
            </div>
          </div>
        </div>
      </main>
    </PublicPageShell>
  );
}
