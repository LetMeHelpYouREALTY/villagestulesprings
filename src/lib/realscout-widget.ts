import { getRealScoutAgentId } from "@/config/env";

/**
 * Static HTML for a RealScout custom element. Attributes must exist in the
 * markup before the UMD script upgrades the tag.
 */
export function realScoutTag(name: string, extraAttrs = ""): string {
  const extra = extraAttrs ? ` ${extraAttrs}` : "";
  return `<realscout-${name} agent-encoded-id="${getRealScoutAgentId()}"${extra}></realscout-${name}>`;
}
