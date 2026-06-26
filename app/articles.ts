// 記事レジストリ（単一の真実ソース）
// ─────────────────────────────────────────────────────────────
// 新しい記事を公開したら、このリストに 1 件追加するだけで
// TOP「注目の記事」に “日付の新しい順” で自動的に表示されます。
// （手動で並び順を編集する必要はありません）
export type Article = {
  href: string;
  category: string;
  title: string;
  readTime: string;
  date: string; // "YYYY.MM.DD"（この値で新しい順にソートされます）
  accent: string;
  image: string;
};

export const ARTICLES: Article[] = [
  { href: "/yougo/houshu-60",  category: "お金の話", title: "報酬率「最大60%」って本当？数字でわかる、安心できる事務所選び", readTime: "約3分", date: "2026.06.23", accent: "#D5A93C", image: "/報酬率60％って本当？.jpg" },
  { href: "/q/jimusho-erabi",  category: "選び方",   title: "チャットレディ事務所の選び方｜失敗しない見極め方", readTime: "約5分", date: "2026.06.19", accent: "#587A38", image: "/col-jimusho-erabi.png" },
  { href: "/style/non-adult",  category: "働き方",   title: "ノンアダルト専門で、安心して始めるには", readTime: "約7分", date: "2026.05.14", accent: "#6FA858", image: "/hero-pc.jpg" /* 仮 */ },
  { href: "/q/hoikushi-baito", category: "副業バレ", title: "チャトレは副業にアリ？会社にバレないための全対策", readTime: "約7分", date: "2026.05.07", accent: "#8FAD7F", image: "/職場ばれ.jpg" },
  { href: "/q/mibare-taisaku", category: "身バレ",   title: "身バレのよくある疑問に、ぜんぶ答えます", readTime: "約6分", date: "2026.05.06", accent: "#E89B85", image: "/col-mibare-taisaku.png" },
];

// 日付の新しい順にソートして返す（n を渡すと先頭 n 件）
export function latestArticles(n?: number): Article[] {
  const sorted = [...ARTICLES].sort((a, b) => b.date.localeCompare(a.date));
  return typeof n === "number" ? sorted.slice(0, n) : sorted;
}
