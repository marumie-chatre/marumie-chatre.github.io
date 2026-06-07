import { reviews } from "../../reviews";
import OfficeReviews from "../../OfficeReviews";
import { OfficeDetailLayout, type OfficeDetailData, type RelatedOffice } from "../../L3";

export const metadata = {
  title: "ライバーサポートグループの口コミ・評判【まるみえチャトレ】",
  description: "ライバーサポートグループの編集部調査レポートと口コミを掲載。創業22年の老舗。広域展開が強みの事務所。",
};

const OFFICE_DATA: OfficeDetailData = {
  slug: "liver-support",
  name: "ライバーサポートグループ",
  rank: 12,
  score: 68,
  isPR: false,
  logoSrc: "/logo-liver-support.png",
  tagline: "創業22年の老舗。\n広域展開が強みの事務所。",
  tags: ["創業22年", "広域展開", "社会保険加入可"],
  breakdown: [
    { l: "安全性", v: 21, max: 30 },
    { l: "サポート", v: 16, max: 25 },
    { l: "初心者", v: 14, max: 20 },
    { l: "働きやすさ", v: 11, max: 15 },
    { l: "稼ぎ", v: 6, max: 10 },
  ],
  goodComment: "創業22年の老舗で安定感があります。社会保険加入ができる事務所は業界でも珍しく、「副業」ではなく「本業」として腰を据えて続けたい方には合います。池袋・博多・千葉・横浜・札幌など広域に展開しています。",
  honestComment: "サポートは控えめで自分から動く姿勢が必要です。「稼ぎ方のノウハウを積極的に教えてほしい方」「スタッフとの距離感を大切にしたい方」には物足りないかもしれません。",
  basic: [
    ["ジャンル", "アダルト・ノンアダルト選択可"],
    ["在宅", "OK"],
    ["通勤", "OK（広域展開）"],
    ["身バレ対策", "○"],
    ["スタッフ", "女性スタッフ在籍"],
    ["特徴", "社会保険加入可・創業22年"],
    ["対応エリア", "池袋・博多・千葉・横浜・札幌など"],
  ],
  applyUrl: "https://live-chat.jp/",
};

const RELATED: RelatedOffice[] = [
  { rank: 11, slug: "pocket-work", name: "ポケットワーク", score: 71 },
  { rank: 10, slug: "asterisk", name: "アスタリスク", score: 71 },
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
