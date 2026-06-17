import { reviews } from "../../reviews";
import OfficeReviews from "../../OfficeReviews";
import { OfficeDetailLayout, type OfficeDetailData, type RelatedOffice } from "../../L3";

export const metadata = {
  alternates: { canonical: "/jimusho/flavor-group" },
  title: "フレイバーグループの口コミ・評判【まるみえチャトレ】",
  description: "フレイバーグループの編集部調査レポートと口コミを掲載。稼ぎ方のノウハウを具体的に教えてくれる。全国300店舗の老舗。",
};

const OFFICE_DATA: OfficeDetailData = {
  slug: "flavor-group",
  name: "フレイバーグループ",
  rank: 5,
  score: 80,
  isPR: false,
  logoSrc: "/logo-flavor-group.png",
  headerImage: "/office-header-flavor-group.png",
  tagline: "稼ぎ方のノウハウを具体的に教えてくれる。\n全国300店舗の老舗。",
  tags: ["全国300店舗", "老舗20年", "固定給選択可", "24h対応"],
  breakdown: [
    { l: "安全性", v: 23, max: 30 },
    { l: "サポート", v: 20, max: 25 },
    { l: "初心者", v: 17, max: 20 },
    { l: "働きやすさ", v: 12, max: 15 },
    { l: "稼ぎ", v: 8, max: 10 },
  ],
  goodComment: "「稼ぎ方を具体的に教える」を看板にしているだけあって、ノウハウは具体的で実践しやすいです。全国300店舗・老舗20年という規模感に加えて、固定給を選択できる珍しい仕組みもあり、収入の安定を求める方にも向いています。",
  honestComment: "店舗によってスタッフの質に差があるため、事前に店舗の口コミを確認することをおすすめします。「のんびり自分のペースで」より「ちゃんと稼ぎたい」方向きの空気感です。",
  basic: [
    ["ジャンル", "アダルト・ノンアダルト選択可"],
    ["在宅", "OK"],
    ["通勤", "OK（全国300店舗）"],
    ["身バレ対策", "○"],
    ["スタッフ", "24時間常駐"],
    ["特徴", "固定給選択可・稼ぎノウハウ重視"],
    ["対応エリア", "全国"],
  ],
  applyUrl: "https://www.find-job.jp/",
};

const RELATED: RelatedOffice[] = [
  { rank: 4, slug: "chatstyle", name: "チャットスタイル", score: 81 },
  { rank: 7, slug: "allure", name: "アリュール", score: 76 },
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
