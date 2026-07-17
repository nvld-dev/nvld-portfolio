import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://nvld.my.id/sitemap.xml",
    host: "https://nvld.my.id",
  };
}
