import type { MetadataRoute } from "next";

import { WWW_HOST } from "@/lib/site-urls";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard/", "/admin/", "/api/", "/auth/"],
      },
    ],
    host: `https://${WWW_HOST}`,
    sitemap: [`https://${WWW_HOST}/sitemap.xml`],
  };
}
