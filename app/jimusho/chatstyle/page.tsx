import { reviews } from "../../reviews";
import OfficeReviews from "../../OfficeReviews";
import { OfficeDetailLayout, type OfficeDetailData, type RelatedOffice } from "../../L3";

export const metadata = {
  title: "チャットスタイルの口コミ・評判【まるみえチャトレ】",
  description: "チャットスタイルの編集部調査レポートと口コミを掲載。会話テクニック・接客サポートが充実。現役スタッフが教えてくれる事務所。",
};

const OFFICE_DATA: OfficeDetailData = {
  slug: "chatstyle",
  name: "チャットスタイル",
  rank: 4,
  score: 81,
  isPR: false,
  logoSrc: "/logo-chatstyle.png",
  tagline: "会話テクニック・接客サポートが充実。\n現役スタッフが教えてくれる事務所。",
  tags: ["会話テクニック指導", "現役スタッフ在籍", "バーチャル対応"],
  breakdown: [
    { l: "安全性", v: 23, max: 30 },
    { l: "サポート", v: 21, max: 25 },
    { l: "初心者", v: 17, max: 20 },
    { l: "働きやすさ", v: 12, max: 15 },
    { l: "稼ぎ", v: 8, max: 10 },
  ],
  goodComment: "スタッフが現役チャットレディ経験者という点は、業界でも珍しい強みです。会話テクニックや接客サポートを具体的に教えてもらえるため、「ただ顔出しすればいい」では伸び悩む方の伴走役として頼りになります。",
  honestComment: "中堅規模なので、大手ほどの集客力はありません。「サポートはほしいけど、稼ぎのスピードを最優先」という方には少し物足りないかも。",
  basic: [
    ["ジャンル", "アダルト・ノンアダルト選択可"],
    ["在宅", "OK"],
    ["通勤", "OK"],
    ["身バレ対策", "◎（バーチャル対応あり）"],
    ["スタッフ", "現役チャットレディスタッフ在籍"],
    ["特徴", "接客・会話テクニック指導充実"],
    ["対応エリア", "都市部中心"],
  ],
  applyUrl: "https://chatstyle.net/",
};

const RELATED: RelatedOffice[] = [
  { rank: 3, slug: "at-group", name: "アットグループ", score: 80 },
  { rank: 5, slug: "flavor-group", name: "フレイバーグループ", score: 80 },
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
