import type { ReactNode } from "react";

type PageHeroProps = {
  kicker: string;
  title: string;
  lede: string;
  actions?: ReactNode;
};

/**
 * Dark navy editorial hero used on luxury marketing pages.
 */
export function PageHero({ kicker, title, lede, actions }: PageHeroProps) {
  return (
    <section className="bg-navy-800 px-4 py-20">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-300">{kicker}</p>
        <h1 className="mt-3 font-serif text-4xl text-cream-100 md:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl font-sans text-lg font-light text-cream-300">{lede}</p>
        {actions ? (
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">{actions}</div>
        ) : null}
      </div>
    </section>
  );
}
