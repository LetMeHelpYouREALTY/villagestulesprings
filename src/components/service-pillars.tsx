import type { ReactNode } from "react";

import { CheckCircle2 } from "lucide-react";

import { CalendlyButton } from "@/components/calendly-button";
import { SectionIntro } from "@/components/section-intro";
import { Button } from "@/components/ui/button";
import { SITE_NAP } from "@/config/site-nap";
import type { CopyBlock } from "@/data/luxury-pages";

type ServicePillarsProps = {
  kicker: string;
  title: ReactNode;
  subtitle: string;
  items: readonly CopyBlock[];
  utmMedium: string;
  utmCampaign: string;
  ctaLabel?: string;
};

export function ServicePillars({
  kicker,
  title,
  subtitle,
  items,
  utmMedium,
  utmCampaign,
  ctaLabel = "Book 15 minutes",
}: ServicePillarsProps) {
  return (
    <section className="bg-cream-100 py-24">
      <div className="container mx-auto px-4">
        <SectionIntro kicker={kicker} title={title} subtitle={subtitle} />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {items.map((item) => (
            <article key={item.title} className="rounded-lg border border-navy-200/20 bg-cream-50 p-6">
              <CheckCircle2 className="mb-3 h-5 w-5 text-gold-500" aria-hidden="true" />
              <h3 className="font-serif text-xl text-navy-800">{item.title}</h3>
              <p className="mt-2 font-sans text-navy-500">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild className="bg-gold-400 font-sans uppercase tracking-widest text-navy-800 hover:bg-gold-300">
            <CalendlyButton event="conversation" utmMedium={utmMedium} utmCampaign={utmCampaign}>
              {ctaLabel}
            </CalendlyButton>
          </Button>
          <Button asChild className="bg-navy-700 font-sans uppercase tracking-widest text-cream-100 hover:bg-navy-800">
            <a href={SITE_NAP.phoneHref}>Call {SITE_NAP.phoneDisplay}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
