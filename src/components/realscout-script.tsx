import Script from "next/script";

/**
 * Loads the RealScout widget script once globally.
 * Script: em.realscout.com. Listing APIs: www.realscout.com/widgets/api/*.
 * Sister sites also allow widgets.realscout.com. CSP covers all three in next.config.mjs.
 */
export function RealScoutScript() {
  return (
    <>
      <link rel="preconnect" href="https://em.realscout.com" />
      <link rel="preconnect" href="https://www.realscout.com" />
      <link rel="preconnect" href="https://widgets.realscout.com" />
      <Script
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        type="module"
        strategy="afterInteractive"
      />
    </>
  );
}
