import { reviews } from "../../reviews";
import OfficeReviews from "../../OfficeReviews";
import { OfficeDetailLayout, type OfficeDetailData } from "../../L3";

export const metadata = {
  alternates: { canonical: "/jimusho/allure" },
  title: "アリュールの口コミ・評判",
  description: "アリュールの編集部調査と口コミ。5時間で日給1万円保証・体験は条件なしで保証適用。保証重視で始めたい人向けの評判を正直にまとめました。",
};

const OFFICE_DATA: OfficeDetailData = {
  slug: "allure",
  name: "アリュール",
  rank: 6,
  score: 74,
  isPR: false,
  logoSrc: "/logo-allure.png",
  headerImage: "/office-header-allure.png",
  tagline: "まずは「保証」で安心して始めたい人へ。\n5時間で日給1万円、体験は条件なしで保証されます。",
  tags: ["アダルトもあり", "日給保証", "入店祝い金", "日払い対応", "面接交通費", "在宅・通勤", "明細発行", "初心者向け"],
  breakdown: [
    { l: "安全性", v: 24, max: 30 },
    { l: "サポート", v: 18, max: 25 },
    { l: "初心者", v: 13, max: 20 },
    { l: "働きやすさ", v: 12, max: 15 },
    { l: "稼ぎ", v: 7, max: 10 },
  ],
  goodComment: "「稼げるか分からないのに飛び込むのは不安」という人を、保証で支えてくれる事務所です。5時間で日給1万円の保証があり、体験のときは条件なしで適用されると案内されています。面接は女性スタッフが説明し、合わなければ無理に続けさせない方針とのこと。入店祝い金や面接交通費もあり、数字が見えている状態から始めたい人に向いています。",
  honestComment: "保証やボーナスは手厚いのですが、お客さんをつかんで報酬を伸ばすノウハウの部分は、やや薄い印象です。技術もしっかり伸ばしたい人には物足りないかもしれません。保証や祝い金で選ぶなら、NMRグループやポケットワークと見比べてもいいと思います。入ってから分かる条件もありそうなので、日給保証の適用条件や保証適用外の額は、面接で具体的に確認してください。アダルトもノンアダルトも扱うため、店舗の方針によってはアダルトをすすめられる場面もあります。ノンアダルトでの進め方も合わせて聞いておくと安心です。",
  features: [
    { n: "01", icon: "reward", t: "5時間で日給1万円保証", d: "日給が約束されるのが看板です。数字が見えている状態から始めたい人向けです。" },
    { n: "02", icon: "safety", t: "体験は条件なしで保証", d: "体験のときは条件なしで保証が適用されると案内されています。合わなければ強要しない方針です。" },
    { n: "03", icon: "gift", t: "入店祝い金・交通費", d: "入店祝い金は最大3万円、面接交通費も用意されています。" },
    { n: "04", icon: "support", t: "明細発行・税理士サポート", d: "日払い精算時に明細を発行し、税理士のサポートもあります。" },
  ],
  basic: [
    ["ジャンル", "アダルト・ノンアダルトの両方"],
    ["働き方", "在宅・通勤どちらも"],
    ["報酬", "5時間で日給1万円保証・体験時は無条件で適用"],
    ["支払い・明細", "日払い精算時に明細を発行"],
    ["ボーナス", "入店祝い金（最大3万円）・面接交通費・各種ボーナス"],
    ["サポート", "面接は女性スタッフが説明・税理士サポートあり"],
    ["設備", "自動補正カメラ・バーチャル配信に対応"],
    ["確認したい点", "日給保証の適用条件・保証適用外の額を面接で確認"],
  ],
  applyUrl: "https://allure.work/",
  note: "口コミがまだ少なく、公式サイトを中心に調べた内容です。保証の適用条件や保証適用外の額は、応募前に具体的に確認してください。",
};

export default function Page() {
  const officeReviews = reviews.filter(r => r.slug === OFFICE_DATA.slug);
  return (
    <OfficeDetailLayout
      o={OFFICE_DATA}
      reviewsSlot={<OfficeReviews reviews={officeReviews} officeName={OFFICE_DATA.name} />}
    />
  );
}
