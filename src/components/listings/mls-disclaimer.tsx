import { SITE_NAP } from "@/config/site-nap";
import { listingFullAddress, type HeartlandPlan } from "@/data/heartland-cottages";

type MlsDisclaimerProps = {
  plan?: HeartlandPlan;
};

export function MlsDisclaimer({ plan }: MlsDisclaimerProps) {
  return (
    <section className="border-t border-navy-200/20 bg-cream-100 px-4 py-10" aria-label="MLS disclaimer">
      <div className="container mx-auto max-w-4xl space-y-3 font-sans text-xs leading-relaxed text-navy-500">
        {plan ? (
          <p>
            MLS {plan.inventory.mlsNumber} — {listingFullAddress(plan.inventory)}. Listing information provided by the
            Greater Las Vegas Association of REALTORS&reg;. Information deemed reliable but not guaranteed. Copyright{" "}
            {new Date().getFullYear()} GLVAR. All rights reserved.
          </p>
        ) : (
          <p>
            Listing information provided by the Greater Las Vegas Association of REALTORS&reg;. Information deemed
            reliable but not guaranteed. Copyright {new Date().getFullYear()} GLVAR. All rights reserved.
          </p>
        )}
        <p>
          Model photos and video tours represent the floor plan. Actual finishes, landscaping, and lot conditions may
          vary. Prices, rates, incentives, and closing dates are subject to change without notice.
        </p>
        <p>
          {SITE_NAP.agentName}, REALTOR&reg;, {SITE_NAP.brokerage}, Nevada license {SITE_NAP.license}.{" "}
          {SITE_NAP.businessName}, {SITE_NAP.streetAddress}, {SITE_NAP.city}, {SITE_NAP.region} {SITE_NAP.postalCode}.{" "}
          Equal Housing Opportunity.
        </p>
      </div>
    </section>
  );
}
