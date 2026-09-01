import { getRealScoutAgentId } from "@/config/env";

/**
 * RealScout office-listings custom element.
 * Injected as raw HTML so React does not reconcile the web component after it mounts.
 */
export function RealScoutOfficeListingsWidget() {
  const agentId = getRealScoutAgentId();

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<realscout-office-listings agent-encoded-id="${agentId}" sort-order="PRICE_LOW" listing-status="For Sale" property-types=",SFR" price-min="600000" price-max="900000"></realscout-office-listings>`,
      }}
    />
  );
}
