/**
 * Loads the RealScout web-component module once in the document head.
 * A native type="module" tag is required: next/script afterInteractive only
 * preloads this file, and beforeInteractive is rejected outside _document.
 * Script host: em.realscout.com. API host: www.realscout.com.
 */
export function RealScoutScript() {
  return <script src="https://em.realscout.com/widgets/realscout-web-components.umd.js" type="module" async />;
}
