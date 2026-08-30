import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard/", "/admin/", "/api/", "/auth/"],
      },
    ],
    sitemap: "https://villagestulesprings.com/sitemap.xml",
    host: "https://villagestulesprings.com",
  };
}
