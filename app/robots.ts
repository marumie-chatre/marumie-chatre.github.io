import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = "https://marumie-chatre.github.io";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Next.js 内部 API/asset paths はクロール対象外
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
