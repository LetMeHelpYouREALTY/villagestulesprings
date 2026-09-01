import { buildSitemapXml } from "@/lib/site-urls";

/**
 * Host-matched sitemap so GSC "URL not allowed" cannot recur.
 * The Host header decides apex vs www <loc> URLs. Vercel 307s apex → www,
 * so production requests typically hit this route on www.
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
