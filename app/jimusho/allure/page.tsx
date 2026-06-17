import { reviews } from "../../reviews";
import OfficeReviews from "../../OfficeReviews";
import { OfficeDetailLayout, type OfficeDetailData, type RelatedOffice } from "../../L3";

export const metadata = {
  alternates: { canonical: "/jimusho/allure" },
  title: "アリュールの口コミ・評判【まるみえチャトレ】",
  description: "アリュールの編集部調査レポートと口コミを掲載。時給保証制度あり。稼ぎ重視層向けの事務所。",
};

const OFFICE_DATA: OfficeDetailData = {
  slug: "allure",
  name: "アリュール",
  rank: 7,
  score: 74,
  isPR: false,
  logoSrc: "/logo-allure.png",
  headerImage: "/office-header-allure.png",
  tagline: "時給保証制度あり。\n稼ぎ重視層向けの事務所。",
  tags: ["時給保証あり", "稼ぎ重視向け"],
  breakdown: [
    { l: "安全性", v: 24, max: 30 },
    { l: "サポート", v: 18, max: 25 },
    { l: "初心者", v: 13, max: 20 },
    { l: "働きやすさ", v: 12, max: 15 },
    { l: "稼ぎ", v: 7, max: 10 },
  ],
  goodComment: "時給保証の仕組みは魅力的で、「稼ぐ前提で本気で取り組みたい」方には合います。稼ぎスコアが10点中9点と業界でも上位クラスで、本気で取り組めば結果が出やすい環境です。",
  honestComment: "時給保証は条件が複雑で、体験中と通常で異なる場合があります。条件をしっかり確認した上で入るかどうかを判断してください。「シンプルな条件で始めたい方」「のんびり働きたい方」には向きません。",
  basic: [
    ["ジャンル", "アダルト・ノンアダルト選択可"],
    ["在宅", "OK"],
    ["通勤", "OK"],
    ["身バレ対策", "○"],
    ["スタッフ", "女性スタッフ在籍"],
    ["特徴", "時給保証制度あり（条件あり）"],
    ["対応エリア", "都市部中心"],
  ],
  applyUrl: "https://allure.work/",
};

const RELATED: RelatedOffice[] = [
  { rank: 5, slug: "flavor-group", name: "フレイバーグループ", score: 80 },
  { rank: 8, slug: "nmr-group", name: "NMRグループ", score: 74 },
];

export default function Page() {
  const officeReviews = reviews.filter(r => r.slug === OFFICE_DATA.slug);
  return (
    <OfficeDetailLayout
      o={OFFICE_DATA}
      reviewsSlot={<OfficeReviews reviews={officeReviews} officeName={OFFICE_DATA.name} />}
      relatedOffices={RELATED}
    />
  );
}
