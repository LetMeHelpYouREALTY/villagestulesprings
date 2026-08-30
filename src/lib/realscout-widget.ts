import { getRealScoutAgentId } from "@/config/env";

export type RealScoutWidgetName =
  | "office-listings"
  | "your-listings"
  | "simple-search"
  | "advanced-search"
  | "home-value";

type RealScoutWidgetAttrs = {
  "sort-order"?: string;
  "listing-status"?: string;
  "property-types"?: string;
  "price-min"?: string;
  "price-max"?: string;
};

/**
 * Static HTML for a RealScout custom element. Attributes must exist in the
 * markup before the UMD script upgrades the tag — do not drive these with
 * React props/state.
 */
export function realScoutWidgetHtml(name: RealScoutWidgetName, attrs: RealScoutWidgetAttrs = {}): string {
  const agentId = getRealScoutAgentId();
  const parts = [`agent-encoded-id="${agentId}"`];

  if (attrs["sort-order"]) parts.push(`sort-order="${attrs["sort-order"]}"`);
  if (attrs["listing-status"]) parts.push(`listing-status="${attrs["listing-status"]}"`);
  if (attrs["property-types"]) parts.push(`property-types="${attrs["property-types"]}"`);
  if (attrs["price-min"]) parts.push(`price-min="${attrs["price-min"]}"`);
  if (attrs["price-max"]) parts.push(`price-max="${attrs["price-max"]}"`);

  return `<realscout-${name} ${parts.join(" ")}></realscout-${name}>`;
}
