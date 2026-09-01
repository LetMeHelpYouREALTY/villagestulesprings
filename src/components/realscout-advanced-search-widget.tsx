import { getRealScoutAgentId } from "@/config/env";

/**
 * RealScout advanced-search custom element.
 * Injected as raw HTML so React does not reconcile the web component after it mounts.
 */
export function RealScoutAdvancedSearchWidget() {
  const agentId = getRealScoutAgentId();

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<realscout-advanced-search agent-encoded-id="${agentId}"></realscout-advanced-search>`,
      }}
    />
  );
}
