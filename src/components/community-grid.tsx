import Link from "next/link";

import { HeadingPhoto } from "@/components/heading-photo";
import { SectionIntro } from "@/components/section-intro";
import { TULE_SPRINGS_COMMUNITIES } from "@/data/communities";

export function CommunityGrid() {
  return (
    <section className="bg-cream-50 py-24">
      <div className="container mx-auto px-4">
        <SectionIntro
          kicker="North Las Vegas 89084"
          title={
            <>
              Neighborhoods around <span className="text-gold-600">Tule Springs</span>
            </>
          }
          subtitle="Master plan, gated Heartland Cottages, Aliante, the Fossil Beds, and the North 215 corridor."
        />
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 xl:grid-cols-3">
          {TULE_SPRINGS_COMMUNITIES.map((community) => {
            const card = (
              <article className="flex h-full flex-col overflow-hidden rounded-lg border border-navy-200/20 bg-white">
                <HeadingPhoto asset={community.image} />
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-600">{community.kicker}</p>
                  <h3 className="mt-2 font-serif text-2xl text-navy-800">{community.name}</h3>
                  <p className="mt-3 flex-1 font-sans text-navy-500">{community.summary}</p>
                  <ul className="mt-4 space-y-1 font-sans text-sm text-navy-700">
                    {community.facts.map((fact) => (
                      <li key={fact}>{fact}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );

            if (!community.href) return <div key={community.name}>{card}</div>;

            return (
              <Link key={community.name} href={community.href} className="transition-opacity hover:opacity-90">
                {card}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
