import { reviews } from "../../reviews";
import OfficeReviews from "../../OfficeReviews";
import { OfficeDetailLayout, type OfficeDetailData, type RelatedOffice } from "../../L3";

export const metadata = {
  alternates: { canonical: "/jimusho/pocket-work" },
  title: "ポケットワークの口コミ・評判【まるみえチャトレ】",
  description: "ポケットワークの編集部調査レポートと口コミを掲載。全国8拠点。教えてもらうより自分で動きたい人向けの事務所。",
};

const OFFICE_DATA: OfficeDetailData = {
  slug: "pocket-work",
  name: "ポケットワーク",
  rank: 11,
  score: 68,
  isPR: false,
  logoSrc: "/logo-pocket-work.png",
  headerImage: "/office-header-pocket-work.png",
  tagline: "全国8拠点。\n教えてもらうより自分で動きたい人向けの事務所。",
  tags: ["仕組み重視", "バーチャル対応"],
  breakdown: [
    { l: "安全性", v: 24, max: 30 },
    { l: "サポート", v: 12, max: 25 },
    { l: "初心者", v: 13, max: 20 },
    { l: "働きやすさ", v: 13, max: 15 },
    { l: "稼ぎ", v: 6, max: 10 },
  ],
  goodComment: "全国8拠点・自動仕分け型の仕組みが整っており、「自分で動ける人」にとってはスピード感を持って働ける環境です。働きやすさスコアも高く、稼ぎスコアも上位クラスで、稼げる人は稼げる仕組みになっています。",
  honestComment: "「教えてもらうより自分で動きたい人向け」と言える事務所で、サポートスコアが25点中12点と低めです。ノンアダルトで稼ぐノウハウや会話力指導はあまり期待できないため、初心者の伴走を求める方には不向きかも。",
  basic: [
    ["ジャンル", "アダルト・ノンアダルト選択可"],
    ["在宅", "OK"],
    ["通勤", "OK（全国8拠点）"],
    ["身バレ対策", "○（バーチャル対応）"],
    ["スタッフ", "女性スタッフ中心"],
    ["特徴", "自動仕分け型・仕組み重視"],
    ["対応エリア", "全国8拠点"],
  ],
  applyUrl: "https://pokewaku.jp/",
};

const RELATED: RelatedOffice[] = [
  { rank: 10, slug: "asterisk", name: "アスタリスク", score: 71 },
  { rank: 12, slug: "liver-support", name: "ライバーサポートグループ", score: 69 },
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
