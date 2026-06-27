// ============================================================
// 記事レジストリ ＝ TOP「注目の記事」カルーセルの単一の真実ソース
// ============================================================
//
// ■ 新しい記事を公開するときの手順（Cowork / 手動 共通・2ステップ）
//   1) 記事ページを作る（例：app/q/新記事スラッグ/page.tsx）
//   2) 下の ARTICLES 配列に「1件」追加する（↓のテンプレートをコピペして値を差し替え）
//   → date の新しい順に自動でソートされ、注目の記事に自動反映されます。
//      （並び順を手で直す必要はありません。場所はどこに貼ってもOK）
//
// ■ コピペ用テンプレート（この1行を ARTICLES の中に貼って値を差し替える）
//   { href: "/q/xxxx", category: "選び方", title: "記事タイトル", readTime: "約5分", date: "2026.07.01", accent: "#6FA858", image: "/サムネ.jpg" },
//
// ■ 各フィールドの意味
//   href     : 記事ページのパス（例 "/q/xxxx"）。必ず実在するページにする（404防止）
//   category : 小さなカテゴリ表示（例 "選び方" / "身バレ" / "働き方" / "お金の話"）
//   title    : 記事タイトル
//   readTime : 読了目安（例 "約5分"）
//   date     : 公開日 "YYYY.MM.DD"。★この値で新しい順に並ぶ（最新が先頭に来る）
//   accent   : アクセント色。指定トーン推奨（#6FA858 / #587A38 / #C19A66 / #EC9B86 等）
//   image    : サムネ画像。public/ 直下に置いたファイル名（例 "/サムネ.jpg"）。記事TOPと同じ画像推奨
// ============================================================
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
  { href: "/q/jimusho-erabi",  category: "選び方",   title: "チャットレディ事務所の選び方｜初心者が失敗しない見極め方", readTime: "約5分", date: "2026.06.19", accent: "#587A38", image: "/事務所選び.png" },
  { href: "/style/non-adult",  category: "働き方",   title: "ノンアダルトは本当にお話だけ？サポート・収入と安心の選び方", readTime: "約7分", date: "2026.06.24", accent: "#6FA858", image: "/お話しだけって本当？.jpg" },
  { href: "/style/honki", category: "働き方", title: "最初の3か月が大事｜お話だけで稼ぐロードマップ", readTime: "約7分", date: "2026.06.28", accent: "#6FA858", image: "/本気で稼ぐ.jpg" },
  { href: "/q/mibare-taisaku", category: "身バレ",   title: "身バレのよくある疑問に、ぜんぶ答えます", readTime: "約6分", date: "2026.06.26", accent: "#E89B85", image: "/身バレ.png" },
];

// 日付の新しい順にソートして返す（n を渡すと先頭 n 件）
export function latestArticles(n?: number): Article[] {
  const sorted = [...ARTICLES].sort((a, b) => b.date.localeCompare(a.date));
  return typeof n === "number" ? sorted.slice(0, n) : sorted;
}
