import { buildSitemapXml } from "@/lib/site-urls";

/**
 * Host-matched sitemap so GSC "URL not allowed" cannot recur.
 * www.villagestulesprings.com/sitemap.xml lists only www URLs.
 * Apex requests are redirected to www by Vercel Domains (307), so this
 * route typically only runs on the www host.
 * Foreign hosts (lasvegasrealestate.com) are never emitted.
 */
export function GET(request: Request): Response {
  const xml = buildSitemapXml(request.headers.get("host"));
  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
