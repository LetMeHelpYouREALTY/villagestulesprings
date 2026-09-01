import type { Metadata } from "next";

import { CalendlyButton } from "@/components/calendly-button";
import { CalendlyInlineWidget } from "@/components/calendly-inline-widget";
import { DrJanPortrait } from "@/components/dr-jan-portrait";
import { HeadingPhoto } from "@/components/heading-photo";
import { PublicPageShell } from "@/components/public-page-shell";
import { aboutPageMetadata } from "@/config/metadata-config";
import { SITE_NAP } from "@/config/site-nap";
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
          Tule Springs buyer specialist. Licensed Nevada REALTOR&reg; for The Villages at Tule Springs and Heartland
          Cottages in North Las Vegas 89084.
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
              Dr. Jan Duffy represents buyers in The Villages at Tule Springs. New construction, Heartland Cottages
              models, and 89084 resale search — one local desk at {SITE_NAP.phoneDisplay}.
            </p>

            <div className="mb-12 grid gap-8 md:grid-cols-2">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <DrJanPortrait size="sm" className="ring-2 ring-gold-300" />
                  <h2 className="font-serif text-2xl text-navy-700">Experience &amp; Expertise</h2>
                </div>
                <HeadingPhoto asset={MEDIA.experienceExpertise} className="mb-4" />
                <ul className="space-y-2 text-navy-500">
                  <li>&bull; Tule Springs buyer representation</li>
                  <li>&bull; Licensed Nevada REALTOR&reg;, BHHS Nevada Properties</li>
                  <li>&bull; Heartland Cottages new-construction contracts</li>
                  <li>&bull; 89084 comps, SID/LID, and HOA review</li>
                  <li>&bull; Model tours at 1,700 and 1,865 sq ft plans</li>
                </ul>
              </div>

              <div>
                <div className="mb-4 flex items-center gap-3">
                  <DrJanPortrait size="sm" className="ring-2 ring-gold-300" />
                  <h2 className="font-serif text-2xl text-navy-700">Areas Served</h2>
                </div>
                <HeadingPhoto asset={MEDIA.areasServed} className="mb-4" />
                <ul className="space-y-2 text-navy-500">
                  <li>&bull; The Villages at Tule Springs</li>
                  <li>&bull; Heartland Cottages (gated)</li>
                  <li>&bull; North Las Vegas 89084</li>
                  <li>&bull; Aliante</li>
                  <li>&bull; North 215 Beltway corridor</li>
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
                Builder sales teams represent the builder. Dr. Duffy represents you. She walks Heartland lots, checks
                SID and LID line items, and lines list price against current 89084 comps before you write.
              </p>
              <p className="text-navy-500">
                Call 702-222-1964 to tour the standing 1,700 and 1,865 sq ft models in gated Heartland Cottages.
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
