import { reviews } from "../../reviews";
import OfficeReviews from "../../OfficeReviews";
import { OfficeDetailLayout, type OfficeDetailData, type RelatedOffice } from "../../L3";

export const metadata = {
  alternates: { canonical: "/jimusho/nmr-group" },
  title: "NMRグループの口コミ・評判【まるみえチャトレ】",
  description: "NMRグループの編集部調査と口コミ。年1回の在籍アンケートを公開する事務所。完全防音個室・在宅通勤の切替OK。中堅事務所の評判を正直にまとめました。",
};

const OFFICE_DATA: OfficeDetailData = {
  slug: "nmr-group",
  name: "NMRグループ",
  rank: 7,
  score: 74,
  isPR: false,
  logoSrc: "/logo-nmr-group.png",
  headerImage: "/office-header-nmr-group.png",
  tagline: "条件を「数字」で見せてくれるグループ。\n年1回の在籍アンケートを公開しています。",
  tags: ["アダルトもあり", "在宅・通勤切替", "ノルマ罰金なし", "完全防音個室", "機材衣装完備", "初心者向け", "店舗により月20万保証", "条件が見える"],
  breakdown: [
    { l: "安全性", v: 23, max: 30 },
    { l: "サポート", v: 18, max: 25 },
    { l: "初心者", v: 15, max: 20 },
    { l: "働きやすさ", v: 11, max: 15 },
    { l: "稼ぎ", v: 7, max: 10 },
  ],
  goodComment: "ノルマや罰金がないこと、自己負担がないことを示してくれて、年1回の在籍アンケートも公開しているグループです。聞きにくい条件を、数字や言葉で確かめながら進められます。完全防音の個室で、通勤と在宅を切り替えられるのも使いやすい点。店舗によっては、元チャットレディの女性スタッフが運営し、ランキング入りの経験から具体的にサポートしてくれるところもあります。",
  honestComment: "気をつけたいのは、「会社全体で見える条件」と「店舗ごとの保証条件」は別だということ。たとえば月20万円の給与保証は全店一律ではなく、保証のある店舗とない店舗があります。「どこでも20万保証」と思い込んで応募すると、ずれが出ます。気になる店舗の条件は個別に確認してください（保証の看板がはっきりしているのはアリュールです）。アダルトもノンアダルトも扱うので、お店によってはアダルトもすすめられます。ノンアダルトのままでも稼ぐ教え方があるかを、聞いておくと安心です。",
  features: [
    { n: "01", icon: "reward", t: "条件が見える", d: "年1回の在籍アンケートを公開し、ノルマ・罰金・自己負担なしを示してくれます。納得して始めやすい点です。" },
    { n: "02", icon: "home", t: "在宅・通勤を切り替え", d: "完全防音の個室があり、その日の都合で場所を選べます。" },
    { n: "03", icon: "device", t: "機材も衣装もそろう", d: "配信に必要な機材や衣装が用意され、自己負担なしで始められます。" },
    { n: "04", icon: "support", t: "経験者によるサポート", d: "店舗により、元チャットレディの女性スタッフが運営し、実践的なアドバイスをもらえます。" },
  ],
  basic: [
    ["ジャンル", "アダルト・ノンアダルトの両方"],
    ["働き方", "通勤・在宅の切替OK・完全防音個室"],
    ["報酬", "店舗により月20万円の給与保証（全店一律ではない）・ボーナスあり"],
    ["ノルマ・罰金", "なし・自己負担なし"],
    ["稼働", "月1回から稼働OK・体験あり"],
    ["スタッフ", "店舗により元チャットレディの女性スタッフが運営"],
    ["生活面", "店舗により近隣託児所・宿泊・交通費・生理休暇"],
    ["特徴", "年1回の在籍アンケートを公開"],
  ],
  applyUrl: "https://recruit-chat-lady.com/",
  note: "月20万円の給与保証・近隣託児所・生理休暇などの条件は店舗によって異なります。会社全体で見える条件と、応募する店舗ごとの条件は別なので、必ず個別に確認してください。",
};

const RELATED: RelatedOffice[] = [
  { rank: 1, slug: "ft", name: "フェアリーテイル", score: 89, badge: "初心者におすすめ" },
  { rank: 7, slug: "allure", name: "アリュール", score: 74 },
  { rank: 9, slug: "chatlady-jp", name: "チャットレディJP", score: 70 },
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
