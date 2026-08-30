/**
 * Public, indexable paths for Villages at Tule Springs only.
 * Never include a foreign host (e.g. lasvegasrealestate.com) — Google Search Console
 * rejects those as "URL not allowed" for a sitemap at this location.
 */
import { marketingSlugs } from "@/content/marketing-pages";
import { neighborhoodSlugs } from "@/content/neighborhoods";

export type SiteHost = "apex" | "www";

export const APEX_HOST = "villagestulesprings.com";
export const WWW_HOST = `www.${APEX_HOST}`;

const STATIC_SITEMAP_PATHS: readonly {
  path: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog/las-vegas-market-update-2024", changeFrequency: "monthly", priority: 0.7 },
  { path: "/neighborhoods", changeFrequency: "weekly", priority: 0.9 },
];

export const PUBLIC_SITEMAP_PATHS: readonly {
  path: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
}[] = [
  ...STATIC_SITEMAP_PATHS,
  ...marketingSlugs().map((slug) => ({
    path: `/${slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  })),
  ...neighborhoodSlugs().map((slug) => ({
    path: `/neighborhoods/${slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  })),
];

export function resolveSiteHost(hostHeader: string | null): SiteHost {
  const host = (hostHeader ?? "").split(":")[0]?.toLowerCase() ?? "";
  if (host === WWW_HOST) return "www";
  return "apex";
}

export function siteOrigin(which: SiteHost): string {
  switch (which) {
    case "www":
      return `https://${WWW_HOST}`;
    case "apex":
      return `https://${APEX_HOST}`;
    default: {
      const exhaustive: never = which;
      return exhaustive;
    }
  }
}

export function absoluteUrl(origin: string, path: string): string {
  if (path === "/") return `${origin}/`;
  return `${origin}${path}`;
}

function escapeXml(value: string): string {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

/** lastmod is a real content date, not "now", so Google does not see the whole map as churn. */
const LASTMOD = "2026-08-30";

export function buildSitemapXml(hostHeader: string | null): string {
  const origin = siteOrigin(resolveSiteHost(hostHeader));
  const urls = PUBLIC_SITEMAP_PATHS.map(({ path, changeFrequency, priority }) => {
    const loc = escapeXml(absoluteUrl(origin, path));
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${changeFrequency}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;
}
