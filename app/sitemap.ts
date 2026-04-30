import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://marumie-chatre.vercel.app";
  
  const offices = [
    "ft", "bright-group", "at-group", "chatstyle",
    "flavor-group", "allure", "nmr-group", "chatlady-jp",
    "asterisk", "pocket-work", "liver-support",
  ];

  const columns = [
    "jimusho-erabi", "mibare-taisaku", "hoikushi-baito",
  ];

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/jimusho`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/kuchikomi`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${base}/column`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/hyoka-kijun`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/profile`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/guideline`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    ...offices.map(slug => ({
      url: `${base}/jimusho/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...columns.map(slug => ({
      url: `${base}/column/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
