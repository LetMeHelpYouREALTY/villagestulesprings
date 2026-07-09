import { LUXURY_SITE } from "@/config/luxury-site-config";

import { SectionHeading } from "./section-heading";

type ListingsSectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  variant?: "office" | "agent";
};

export function ListingsSection({
  id = "listings",
  eyebrow,
  title,
  description,
  variant = "office",
}: ListingsSectionProps) {
  return (
    <section id={id} className="bg-luxury-ivory py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className="luxury-card rounded-sm p-4 md:p-6">
          {variant === "office" ? (
            <realscout-office-listings
              agent-encoded-id={LUXURY_SITE.realscoutAgentId}
              sort-order="PRICE_HIGH"
              listing-status="For Sale"
              property-types="SFR,OTHER"
              price-min="750000"
            />
          ) : (
            <realscout-your-listings
              agent-encoded-id={LUXURY_SITE.realscoutAgentId}
              sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
              listing-status="For Sale"
              property-types="SFR,MF,TC,LAL,MOBILE,OTHER"
            />
          )}
        </div>
      </div>
    </section>
  );
}
