import { Home, TrendingUp } from "lucide-react";

import { CalendlyInlineWidget } from "@/components/calendly-inline-widget";
import { DrJanPortrait } from "@/components/dr-jan-portrait";
import { Card, CardContent } from "@/components/ui/card";
import { getRealScoutAgentId } from "@/config/env";

/**
 * Home valuation section — RealScout instant value plus Calendly to walk through the numbers.
 * Replaces the former lead-capture form.
 */
export function HomeValuationSection() {
  const agentId = getRealScoutAgentId();

  return (
    <section className="bg-cream-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <DrJanPortrait size="lg" className="mx-auto mb-4 ring-2 ring-gold-300" />
          <h2 className="mb-6 font-serif text-4xl text-navy-800 lg:text-5xl">
            Get Your <span className="text-gold-600">Home Valuation</span>
          </h2>
          <p className="mx-auto max-w-3xl font-sans text-xl font-light text-navy-500">
            Instant market value from recent sales, then book 15 minutes with Dr. Jan Duffy to walk through the numbers.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-lg border border-navy-200/20 bg-white p-6">
              <realscout-home-value agent-encoded-id={agentId}></realscout-home-value>
            </div>
            <CalendlyInlineWidget
              event="conversation"
              title="Schedule a valuation consultation with Dr. Jan Duffy"
              utmMedium="valuation"
              utmCampaign="home-valuation-section"
              height={640}
            />
          </div>

          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="mb-4 flex items-center font-serif text-2xl text-navy-800">
                  <TrendingUp className="mr-3 h-6 w-6 text-gold-600" />
                  Why Get a Valuation?
                </h3>
                <ul className="space-y-3 text-navy-500">
                  <li>Accurate market pricing before you list</li>
                  <li>Refinancing decisions and loan applications</li>
                  <li>Property tax assessment appeals</li>
                  <li>Investment property analysis</li>
                  <li>Insurance coverage adjustments</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="mb-4 flex items-center font-serif text-2xl text-navy-800">
                  <Home className="mr-3 h-6 w-6 text-navy-600" />
                  What You&apos;ll Receive
                </h3>
                <ul className="space-y-3 text-navy-500">
                  <li>Detailed market analysis report</li>
                  <li>Comparable sales in your area</li>
                  <li>Price range recommendations</li>
                  <li>Market trends and insights</li>
                  <li>Personal consultation with Dr. Jan Duffy</li>
                </ul>
              </CardContent>
            </Card>

            <div className="rounded-lg border border-gold-200 bg-gold-50 p-6">
              <h4 className="mb-2 font-serif text-lg text-navy-800">100% Free &amp; No Obligation</h4>
              <p className="text-sm text-navy-500">
                Instant value plus a 15-minute conversation — call{" "}
                <a href="tel:+17022221964" className="text-gold-600 underline-offset-4 hover:underline">
                  702-222-1964
                </a>{" "}
                if you would rather talk now.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
