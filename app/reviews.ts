export type Review = {
  // 既存フィールド
  id: number;
  office: string;
  slug: string;
  period: string;
  style: string;
  rating: number;
  good: string;
  bad: string;
  recommend: string;

  // 🔴 新規追加フィールド（オプショナル）
  area?: string;                  // エリア（新宿/池袋/錦糸町/上野/福岡など）
  storeName?: string;             // 店舗名（FT錦糸町店など）
  ageGroup?: string;              // 年齢層（20代前半/20代後半/30代/40代）
  duration?: string;              // 継続期間（1ヶ月未満/1-3ヶ月/3-6ヶ月/6-12ヶ月/1年以上）
  isCurrentlyWorking?: boolean;   // 現在も働いているか
  contentStyle?: string;          // 事務所方針（ノンアダルト専門/ノンアダ・アダルト選択可/アダルト中心）
  visualStyle?: string;           // 個人の見た目（顔出しあり/マスク/顔出しなし/バーチャル）
  personalStyle?: string;         // 個人の内容（ノンアダルト/アダルト）
};

// レビューデータを直接インポート
const reviewsData = require("./reviews.json");
export const reviews: Review[] = reviewsData as Review[];

export function getReviewsBySlug(slug: string): Review[] {
  return reviews.filter((r: Review) => r.slug === slug);
}

export function getLatestReviews(count: number = 6): Review[] {
  return reviews.slice(0, count);
}

// 🔴 エリア別口コミ取得
export function getReviewsByArea(area: string): Review[] {
  return reviews.filter((r: Review) => r.area === area);
}

// 🔴 現役のみ取得
export function getCurrentlyWorkingReviews(): Review[] {
  return reviews.filter((r: Review) => r.isCurrentlyWorking === true);
}

// 🔴 事務所方針別取得（ノンアダ専門の声など）
export function getReviewsByContentStyle(contentStyle: string): Review[] {
  return reviews.filter((r: Review) => r.contentStyle === contentStyle);
}

// 🔴 見た目スタイル別取得（マスク配信・バーチャル配信の声など）
export function getReviewsByVisualStyle(visualStyle: string): Review[] {
  return reviews.filter((r: Review) => r.visualStyle === visualStyle);
}

// 🔴 個人の内容別取得（ノンアダルトで働いている人の声など）
export function getReviewsByPersonalStyle(personalStyle: string): Review[] {
  return reviews.filter((r: Review) => r.personalStyle === personalStyle);
}

// 🔴 継続期間別取得
export function getReviewsByDuration(duration: string): Review[] {
  return reviews.filter((r: Review) => r.duration === duration);
}

// 🔴 エリア×事務所のクロスフィルタ
export function getReviewsByAreaAndSlug(area: string, slug: string): Review[] {
  return reviews.filter((r: Review) => r.area === area && r.slug === slug);
}

// 🔴 エリアページ用の口コミ取得（B案：代用ロジック付き）
//
// 動作：
// 1. まずそのエリアの口コミ（area完全一致）を取得
// 2. 件数が指定数に満たない場合、そのエリアに店舗を持つ事務所の口コミ（area未指定）から補充
// 3. 重複は除外、合計で指定数まで取得
//
// 使い方：
// const newjukuReviews = getReviewsForAreaPage("新宿", ["ft", "bright-group", "chatstyle"], 5);
//
export function getReviewsForAreaPage(
  area: string,
  officeSlugsInArea: string[],
  limit: number = 5
): Review[] {
  // Step 1: エリア完全一致の口コミ
  const exactAreaReviews = reviews.filter((r) => r.area === area);

  // Step 2: 不足分を該当エリア店舗の事務所から代用
  const usedIds = new Set(exactAreaReviews.map((r) => r.id));
  const officeReviews = reviews.filter(
    (r) =>
      !usedIds.has(r.id) &&
      officeSlugsInArea.includes(r.slug) &&
      (!r.area || r.area === "") // areaが指定されていないものを代用
  );

  // ★評価が高いもの優先・現役優先で並び替え
  const sortedOfficeReviews = officeReviews.sort((a, b) => {
    // 現役を優先
    if (a.isCurrentlyWorking !== b.isCurrentlyWorking) {
      return a.isCurrentlyWorking ? -1 : 1;
    }
    // ★評価が高いものを優先
    return b.rating - a.rating;
  });

  // Step 3: 合計で指定数まで取得
  const result = [...exactAreaReviews, ...sortedOfficeReviews].slice(0, limit);

  return result;
}

// 🔴 エリアごとの口コミ件数（エリア完全一致のみ）
export function countReviewsByArea(area: string): number {
  return reviews.filter((r) => r.area === area).length;
}

// 🔴 身バレ対策で使える口コミ取得（マスク・バーチャル・顔出しなし）
export function getPrivacyFocusedReviews(): Review[] {
  return reviews.filter(
    (r) =>
      r.visualStyle === "マスク" ||
      r.visualStyle === "バーチャル" ||
      r.visualStyle === "顔出しなし"
  );
}
