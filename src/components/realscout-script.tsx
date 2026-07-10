import Script from "next/script";

/**
 * Loads the RealScout widget script once globally.
 * Widgets call em.realscout.com for the script and www.realscout.com for API data —
 * both must be allowed in CSP (see next.config.mjs).
 */
export function RealScoutScript() {
  return (
    <Script
      src="https://em.realscout.com/widgets/realscout-web-components.js"
      type="module"
      strategy="afterInteractive"
    />
  );
}
