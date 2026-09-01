import { CheckCircle2 } from "lucide-react";

import { CalendlyButton } from "@/components/calendly-button";
import { SectionIntro } from "@/components/section-intro";
import { Button } from "@/components/ui/button";
import { SITE_NAP } from "@/config/site-nap";
import { TULE_SPRINGS_BUYER_SERVICES } from "@/data/buyer-services";

export function BuyerServicesSection() {
  return (
    <section className="bg-cream-100 py-24">
      <div className="container mx-auto px-4">
        <SectionIntro
          kicker="Hyperlocal realtor services"
          title={
            <>
              Buy in Tule Springs with <span className="text-gold-600">Dr. Jan Duffy</span>
            </>
          }
          subtitle={`${SITE_NAP.agentName} is the buyer's agent for Villages at Tule Springs and Heartland Cottages. One market. One phone. ${SITE_NAP.phoneDisplay}.`}
        />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {TULE_SPRINGS_BUYER_SERVICES.map((service) => (
            <article key={service.title} className="rounded-lg border border-navy-200/20 bg-cream-50 p-6">
              <CheckCircle2 className="mb-3 h-5 w-5 text-gold-500" aria-hidden="true" />
              <h3 className="font-serif text-xl text-navy-800">{service.title}</h3>
              <p className="mt-2 font-sans text-navy-500">{service.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild className="bg-gold-400 font-sans uppercase tracking-widest text-navy-800 hover:bg-gold-300">
            <CalendlyButton event="conversation" utmMedium="services" utmCampaign="tule-springs-buy">
              Book a buyer consult
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
