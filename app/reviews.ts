export type Review = {
  id: number;
  office: string;
  slug: string;
  period: string;
  style: string;
  rating: number;
  good: string;
  bad: string;
  recommend: string;
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
