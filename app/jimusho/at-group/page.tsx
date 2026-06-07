import { reviews } from "../../reviews";
import OfficeReviews from "../../OfficeReviews";
import { OfficeDetailLayout, type OfficeDetailData, type RelatedOffice } from "../../L3";

export const metadata = {
  title: "アットグループの口コミ・評判【まるみえチャトレ】",
  description: "アットグループの編集部調査レポートと口コミを掲載。カフェのような居心地。関東57店舗展開の大手。",
};

const OFFICE_DATA: OfficeDetailData = {
  slug: "at-group",
  name: "アットグループ",
  rank: 3,
  score: 79,
  isPR: false,
  logoSrc: "/logo-at-group.png",
  headerImage: "/office-header-at-group.png",
  tagline: "カフェのような居心地。\n関東57店舗展開の大手。",
  tags: ["カフェ空間", "居心地◎", "関東57店舗", "体験入店OK"],
  breakdown: [
    { l: "安全性", v: 22, max: 30 },
    { l: "サポート", v: 21, max: 25 },
    { l: "初心者", v: 16, max: 20 },
    { l: "働きやすさ", v: 13, max: 15 },
    { l: "稼ぎ", v: 7, max: 10 },
  ],
  goodComment: "カフェのような居心地の良さは本当で、通うのが苦にならない事務所です。関東圏に57店舗を展開しており、内装やインテリアにもこだわっているため、「働く環境」を大切にしたい方には特に合います。体験入店制度も整っています。",
  honestComment: "稼ぎ方のノウハウは自分から聞きにいく姿勢が必要です。「居心地は良いけど、ガツガツ稼ぎたい方向けではない」という割り切りをしておくと、入ってからのギャップが少なく済みます。",
  basic: [
    ["ジャンル", "アダルト・ノンアダルト選択可"],
    ["在宅", "△（店舗中心）"],
    ["通勤", "OK（関東57店舗）"],
    ["身バレ対策", "○"],
    ["スタッフ", "女性・男性スタッフ在籍"],
    ["特徴", "カフェ空間・体験入店後お祝い金"],
    ["対応エリア", "関東中心・全国展開"],
  ],
  applyUrl: "https://atgroup.jp/",
};

const RELATED: RelatedOffice[] = [
  { rank: 2, slug: "bright-group", name: "ブライトグループ", score: 84 },
  { rank: 4, slug: "chatstyle", name: "チャットスタイル", score: 81 },
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
