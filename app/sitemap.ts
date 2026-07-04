import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://marumie-chatre.vercel.app";
  const now = new Date();

  const offices = [
    "ft", "bright-group", "at-group", "chatstyle",
    "flavor-group", "allure", "nmr-group", "chatlady-jp",
    "asterisk", "pocket-work", "liver-support",
  ];

  // /q 配下記事（旧 /column 統合済・shokuba-bare は hoikushi-baito に 301 統合）
  const qArticles = [
    "barebure", "kazoku-bare", "ayashii",
    "jimusho-erabi", "mibare-taisaku", "hoikushi-baito", "mensetsu",
    "man100",
  ];

  const areas = [
    "shibuya", "shinjuku", "ikebukuro", "kinshicho", "ueno", "fukuoka",
  ];

  const styles = [
    "non-adult", "tsukin", "zaitaku", "virtual", "honki",
  ];

  // /yougo 配下の辞書エントリ（深掘り記事）
  const yougoArticles = [
    "houshu-60",
  ];

  // 静的ページ（法務・概要系）
  const staticPages: { slug: string; priority: number; freq: "weekly" | "monthly" | "yearly" }[] = [
    { slug: "profile",     priority: 0.6, freq: "monthly" },
    // /yougo は noindex のため sitemap から除外（/yougo/houshu-60 は残す）
    // /tokushoho は削除済みのため除外
    { slug: "privacy",     priority: 0.3, freq: "yearly" },
    { slug: "terms",       priority: 0.3, freq: "yearly" },
  ];

  return [
    // TOP
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },

    // ハブ
    { url: `${base}/jimusho`,   lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/area`,      lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/style`,     lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/q`,         lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/kuchikomi`, lastModified: now, changeFrequency: "daily",  priority: 0.8 },

    // 事務所詳細
    ...offices.map(slug => ({
      url: `${base}/jimusho/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),

    // /q 配下記事（旧 /column も統合）
    ...qArticles.map(slug => ({
      url: `${base}/q/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // エリア詳細
    ...areas.map(slug => ({
      url: `${base}/area/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // 働き方詳細
    ...styles.map(slug => ({
      url: `${base}/style/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // /yougo 配下の辞書エントリ
    ...yougoArticles.map(slug => ({
      url: `${base}/yougo/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),

    // 静的ページ
    ...staticPages.map(p => ({
      url: `${base}/${p.slug}`,
      lastModified: now,
      changeFrequency: p.freq,
      priority: p.priority,
    })),
  ];
}
