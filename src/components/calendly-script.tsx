import Script from "next/script";

/**
 * Loads Calendly popup helpers once globally.
 * Inline embeds use an iframe (CalendlyInlineWidget); this script powers popup buttons.
 * Widget CSS is linked from the root layout <head>.
 */
export function CalendlyScript() {
  return <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />;
}
