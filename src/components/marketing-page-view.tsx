import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { HeadingPhoto } from "@/components/heading-photo";
import { JsonLd } from "@/components/json-ld";
import { MarketingPageBody } from "@/components/marketing-page-body";
import { PublicPageShell } from "@/components/public-page-shell";
import { getRealScoutAgentId } from "@/config/env";
import type { MarketingPageContent } from "@/content/marketing-pages";
import { buildPageJsonLd } from "@/lib/schema";

type MarketingPageViewProps = {
  page: MarketingPageContent;
};

export function MarketingPageView({ page }: MarketingPageViewProps) {
  const path = `/${page.slug}`;
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: page.h1, path },
  ];
  const jsonLd = buildPageJsonLd({
    path,
    title: page.title,
    description: page.description,
    pageType: page.pageType,
    breadcrumbs,
    faqs: page.faqs,
    service: page.service,
    howTo: page.howTo,
    itemList: page.itemList,
  });

  return (
    <PublicPageShell
      before={<JsonLd data={jsonLd} />}
      hero={
        <section className="bg-navy-800 px-4 py-20">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-300">{page.kicker}</p>
            <h1 className="mt-3 font-serif text-4xl text-cream-100 md:text-5xl">{page.h1}</h1>
            <p className="seo-direct-answer mx-auto mt-4 max-w-3xl font-sans text-lg font-light text-cream-300">
              {page.directAnswer}
            </p>
            <HeadingPhoto asset={page.photo} className="mx-auto mt-10 max-w-3xl" priority />
          </div>
        </section>
      }
    >
      <BreadcrumbNav items={breadcrumbs} />
      <MarketingPageBody page={page} agentId={getRealScoutAgentId()} />
    </PublicPageShell>
  );
}
