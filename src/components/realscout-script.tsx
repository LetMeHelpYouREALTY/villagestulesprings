/**
 * RealScout official embed — script + listing CSS in <head>, once.
 * type="module" is deferred by spec; the Next.js sync-scripts rule is a false positive here.
 */
export function RealScoutHead() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script src="https://em.realscout.com/widgets/realscout-web-components.umd.js" type="module" />
      <style
        dangerouslySetInnerHTML={{
          __html: `
  realscout-office-listings {
    --rs-listing-divider-color: rgb(101, 141, 172);
    width: 100%;
  }
`,
        }}
      />
    </>
  );
}
