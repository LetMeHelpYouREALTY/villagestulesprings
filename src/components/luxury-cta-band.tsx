import { CalendlyButton } from "@/components/calendly-button";
import { Button } from "@/components/ui/button";
import { SITE_NAP } from "@/config/site-nap";

type LuxuryCtaBandProps = {
  kicker: string;
  title: string;
  lede: string;
  utmMedium: string;
  utmCampaign: string;
};

export function LuxuryCtaBand({ kicker, title, lede, utmMedium, utmCampaign }: LuxuryCtaBandProps) {
  return (
    <section className="bg-navy-800 px-4 py-20">
      <div className="container mx-auto max-w-3xl text-center">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-300">{kicker}</p>
        <h2 className="mt-3 font-serif text-3xl text-cream-100 md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl font-sans text-lg font-light text-cream-300">{lede}</p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild className="bg-gold-400 font-sans uppercase tracking-widest text-navy-800 hover:bg-gold-300">
            <CalendlyButton event="conversation" utmMedium={utmMedium} utmCampaign={utmCampaign}>
              Book 15 minutes
            </CalendlyButton>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-gold-300 bg-transparent font-sans uppercase tracking-widest text-gold-200 hover:bg-gold-300 hover:text-navy-800"
          >
            <a href={SITE_NAP.phoneHref}>Call {SITE_NAP.phoneDisplay}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
