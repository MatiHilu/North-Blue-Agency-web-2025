import { MetadataRoute } from "next";
import { sitemapConfig } from "@/lib/sitemap-config";

export default function robots(): MetadataRoute.Robots {
  const { baseUrl, robots } = sitemapConfig;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: robots.disallow,
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
