/**
 * 構造化データ（JSON-LD）コンポーネント群
 * SEO・AIO（AI Optimization）・AEO（Answer Engine Optimization）の3軸を最適化
 *
 * - FAQSchema：QABlock の内容を Schema.org FAQ形式で出力
 * - ArticleSchema：記事メタ情報を Article形式で出力
 * - BreadcrumbSchema：パンくずリストを構造化
 * - LocalBusinessSchema：エリアページの地域情報
 */

const SITE_URL = "https://marumie-chatre.vercel.app";
const SITE_NAME = "まるみえチャトレ";
const LOGO_URL = `${SITE_URL}/logo.png`;

type FAQItem = { q: string; a: string };

export function FAQSchema({ items }: { items: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  imageUrl,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  imageUrl?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": imageUrl ?? `${SITE_URL}/hero-pc.jpg`,
    "datePublished": datePublished,
    "dateModified": dateModified ?? datePublished,
    "author": {
      "@type": "Organization",
      "name": `${SITE_NAME}編集部`,
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": LOGO_URL,
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; path: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": `${SITE_URL}${item.path}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE_NAME,
    "url": SITE_URL,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SITE_URL}/jimusho?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// 事務所詳細用：Product + AggregateRating + Review[]
// → Google の rich result（検索結果に星表示）対象
type OfficeReviewInput = {
  rating: number;
  good: string;
  bad: string;
  submittedAt?: string;
  hideInInitial?: boolean;
};

// "2026.3.2 18:00" → "2026-03-02T18:00:00+09:00"
function toISO8601(s?: string): string | undefined {
  if (!s) return undefined;
  const m = s.match(/(\d+)\.(\d+)\.(\d+)\s+(\d+):(\d+)/);
  if (!m) return undefined;
  const [, y, mo, d, h, min] = m;
  const pad = (n: string) => n.padStart(2, "0");
  return `${y}-${pad(mo)}-${pad(d)}T${pad(h)}:${pad(min)}:00+09:00`;
}

export function OfficeProductSchema({
  name,
  description,
  url,
  imageUrl,
  reviews,
}: {
  name: string;
  description: string;
  url: string;
  imageUrl?: string;
  reviews: OfficeReviewInput[];
}) {
  // 集計は表示中の口コミ（hideInInitial を除く）でカウント、AggregateRating は実態と一致させる
  const visible = reviews.filter((r) => !r.hideInInitial);

  const ratingValue =
    visible.length > 0
      ? Math.round(
          (visible.reduce((sum, r) => sum + r.rating, 0) / visible.length) * 10,
        ) / 10
      : 0;

  type Schema = {
    "@context": string;
    "@type": string;
    name: string;
    description: string;
    url: string;
    image: string;
    brand: { "@type": string; name: string };
    aggregateRating?: {
      "@type": string;
      ratingValue: number;
      reviewCount: number;
      bestRating: number;
      worstRating: number;
    };
    review?: Array<{
      "@type": string;
      author: { "@type": string; name: string };
      reviewRating: {
        "@type": string;
        ratingValue: number;
        bestRating: number;
        worstRating: number;
      };
      reviewBody: string;
      datePublished?: string;
    }>;
  };

  const schema: Schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url,
    image: imageUrl ?? `${SITE_URL}/logo.png`,
    brand: { "@type": "Organization", name: SITE_NAME },
  };

  if (visible.length > 0) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount: visible.length,
      bestRating: 5,
      worstRating: 1,
    };
    // 最大 10 件まで Review として送出（Google 推奨上限程度）
    schema.review = visible.slice(0, 10).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: "匿名ユーザー" },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: `${r.good}\n\n気になった点: ${r.bad}`.trim(),
      ...(toISO8601(r.submittedAt) && {
        datePublished: toISO8601(r.submittedAt) as string,
      }),
    }));
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_NAME,
    "url": SITE_URL,
    "logo": LOGO_URL,
    "description": "中身で選ぶチャトレ事務所の口コミ・比較サイト。良い点も気になる点も掲載・採点根拠を全公開。",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
