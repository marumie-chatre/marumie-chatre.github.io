import { reviews } from "../../reviews";
import OfficeReviews from "../../OfficeReviews";
import { OfficeDetailLayout, type OfficeDetailData, type RelatedOffice } from "../../L3";

export const metadata = {
  alternates: { canonical: "/jimusho/chatlady-jp" },
  title: "チャットレディJPの口コミ・評判【まるみえチャトレ】",
  description: "チャットレディJPの編集部調査レポートと口コミを掲載。新宿・上野に多店舗展開。美容機器無料サービスあり。",
};

const OFFICE_DATA: OfficeDetailData = {
  slug: "chatlady-jp",
  name: "チャットレディJP",
  rank: 9,
  score: 70,
  isPR: false,
  logoSrc: "/logo-chatlady-jp.png",
  headerImage: "/office-header-chatlady-jp.png",
  tagline: "新宿・上野に多店舗展開。\n美容機器無料サービスあり。",
  tags: ["新宿・上野", "美容機器無料", "バーチャル対応"],
  breakdown: [
    { l: "安全性", v: 22, max: 30 },
    { l: "サポート", v: 17, max: 25 },
    { l: "初心者", v: 14, max: 20 },
    { l: "働きやすさ", v: 11, max: 15 },
    { l: "稼ぎ", v: 6, max: 10 },
  ],
  goodComment: "新宿・上野エリアに通える方には利便性が高く、美容機器を無料で使えるサービスは女性向けのうれしい特典です。バーチャル対応も整っており、身バレへの配慮も一定レベルあります。",
  honestComment: "通勤前提の事務所という印象が強く、在宅サポートは薄めです。新宿・上野エリア以外の方には選びにくく、稼ぎ方のノウハウを丁寧に教えてほしい方には物足りないかも。",
  basic: [
    ["ジャンル", "アダルト・ノンアダルト選択可"],
    ["在宅", "△"],
    ["通勤", "OK（新宿・上野中心）"],
    ["身バレ対策", "○（バーチャル対応）"],
    ["スタッフ", "女性スタッフ在籍"],
    ["特徴", "美容機器無料・バーチャル対応"],
    ["対応エリア", "新宿・上野"],
  ],
  applyUrl: "https://chat-lady.jp/",
};

const RELATED: RelatedOffice[] = [
  { rank: 8, slug: "nmr-group", name: "NMRグループ", score: 74 },
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
