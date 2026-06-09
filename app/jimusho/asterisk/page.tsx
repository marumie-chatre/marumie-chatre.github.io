import { reviews } from "../../reviews";
import OfficeReviews from "../../OfficeReviews";
import { OfficeDetailLayout, type OfficeDetailData, type RelatedOffice } from "../../L3";

export const metadata = {
  title: "アスタリスクの口コミ・評判【まるみえチャトレ】",
  description: "アスタリスクの編集部調査レポートと口コミを掲載。全店女性スタッフ。本気で稼ぎたい方向けの事務所。",
};

const OFFICE_DATA: OfficeDetailData = {
  slug: "asterisk",
  name: "アスタリスク",
  rank: 10,
  score: 69,
  isPR: false,
  logoSrc: "/logo-asterisk.png",
  headerImage: "/office-header-asterisk.png",
  tagline: "全店女性スタッフ。\n本気で稼ぎたい方向けの事務所。",
  tags: ["全店女性スタッフ", "安全性◎"],
  breakdown: [
    { l: "安全性", v: 25, max: 30 },
    { l: "サポート", v: 18, max: 25 },
    { l: "初心者", v: 9, max: 20 },
    { l: "働きやすさ", v: 9, max: 15 },
    { l: "稼ぎ", v: 8, max: 10 },
  ],
  goodComment: "全店女性スタッフのみという徹底ぶりは、業界でも特筆すべき安心材料です。安全性スコアは業界トップクラスで、稼ぎへのサポートも本物。「相談しにくい話を男性スタッフにしたくない」方には、特に向いています。",
  honestComment: "稼ぎ重視の空気が強いため、ゆるく働きたい方には合わないかもしれません。初心者スコアが20点中9点と低めなのは、未経験者へのサポート設計よりも「経験者・本気層向け」に振っているため。",
  basic: [
    ["ジャンル", "アダルト・ノンアダルト選択可"],
    ["在宅", "OK"],
    ["通勤", "OK"],
    ["身バレ対策", "◎"],
    ["スタッフ", "全店女性スタッフのみ"],
    ["特徴", "全女性スタッフ・稼ぎノウハウ充実"],
    ["対応エリア", "全国展開"],
  ],
  applyUrl: "https://asterisk.network/",
};

const RELATED: RelatedOffice[] = [
  { rank: 9, slug: "chatlady-jp", name: "チャットレディJP", score: 71 },
  { rank: 11, slug: "pocket-work", name: "ポケットワーク", score: 71 },
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
