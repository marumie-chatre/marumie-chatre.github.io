import { reviews } from "../../reviews";
import OfficeReviews from "../../OfficeReviews";
import { OfficeDetailLayout, type OfficeDetailData, type RelatedOffice } from "../../L3";

export const metadata = {
  alternates: { canonical: "/jimusho/nmr-group" },
  title: "NMRグループの口コミ・評判【まるみえチャトレ】",
  description: "NMRグループの編集部調査レポートと口コミを掲載。完全防音個室。関東・東北中心の中堅事務所。",
};

const OFFICE_DATA: OfficeDetailData = {
  slug: "nmr-group",
  name: "NMRグループ",
  rank: 8,
  score: 74,
  isPR: false,
  logoSrc: "/logo-nmr-group.png",
  headerImage: "/office-header-nmr-group.png",
  tagline: "完全防音個室。\n関東・東北中心の中堅事務所。",
  tags: ["完全防音個室", "関東東北"],
  breakdown: [
    { l: "安全性", v: 23, max: 30 },
    { l: "サポート", v: 18, max: 25 },
    { l: "初心者", v: 15, max: 20 },
    { l: "働きやすさ", v: 11, max: 15 },
    { l: "稼ぎ", v: 7, max: 10 },
  ],
  goodComment: "完全防音個室という設備面の強みは本物で、「声が漏れない」「隣の音が気にならない」環境で集中して配信できます。身バレ対策の徹底度では、業界でも上位クラスです。",
  honestComment: "関東・東北中心の展開なので、エリア外の方には選択肢が限られます。「大手の安心感」「アットホームさ」を重視する方には、規模・距離感ともに物足りなく感じる可能性があります。",
  basic: [
    ["ジャンル", "アダルト・ノンアダルト選択可"],
    ["在宅", "OK"],
    ["通勤", "OK"],
    ["身バレ対策", "◎（完全防音個室）"],
    ["スタッフ", "女性スタッフ在籍"],
    ["特徴", "完全防音個室・ブログコンテンツ充実"],
    ["対応エリア", "関東・東北中心"],
  ],
  applyUrl: "https://recruit-chat-lady.com/",
};

const RELATED: RelatedOffice[] = [
  { rank: 7, slug: "allure", name: "アリュール", score: 76 },
  { rank: 9, slug: "chatlady-jp", name: "チャットレディJP", score: 71 },
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
