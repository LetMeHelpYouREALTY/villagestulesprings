import type { ReactNode } from "react";

import { CalendlyScheduleSection } from "@/components/calendly-schedule-section";
import { JsonLd } from "@/components/json-ld";
import { RealScoutOfficeListingsSection } from "@/components/realscout-office-listings-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { localBusinessJsonLd } from "@/lib/schema";

type PublicPageShellProps = {
  children: ReactNode;
  /** Optional hero rendered above the RealScout office listings widget. */
  hero?: ReactNode;
  /** Optional content rendered before the header (e.g. JSON-LD). */
  before?: ReactNode;
};

/**
 * Shared chrome for every public marketing page:
 * header → optional hero → RealScout office listings → page content → Calendly → footer.
 */
export function PublicPageShell({ children, hero, before }: PublicPageShellProps) {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      {before}
      <SiteHeader />
      {hero}
      <RealScoutOfficeListingsSection />
      {children}
      <CalendlyScheduleSection />
      <SiteFooter />
    </>
  );
}
