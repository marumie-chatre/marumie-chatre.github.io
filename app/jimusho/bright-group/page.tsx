import { reviews } from "../../reviews";
import OfficeReviews from "../../OfficeReviews";
import { OfficeDetailLayout, type OfficeDetailData, type RelatedOffice } from "../../L3";

export const metadata = {
  title: "ブライトグループの口コミ・評判【まるみえチャトレ】",
  description: "ブライトグループの編集部調査レポートと口コミを掲載。運営20年・全国最大手。初心者でも安心の大手ブランド。",
};

const OFFICE_DATA: OfficeDetailData = {
  slug: "bright-group",
  name: "ブライトグループ",
  rank: 2,
  score: 84,
  isPR: false,
  logoSrc: "/logo-bright-group.png",
  headerImage: "/office-header-bright-group.png",
  tagline: "運営20年・全国最大手。\n初心者でも安心の大手ブランド。",
  tags: ["全国140店舗", "老舗20年", "24h対応", "顧問税理士"],
  breakdown: [
    { l: "安全性", v: 25, max: 30 },
    { l: "サポート", v: 20, max: 25 },
    { l: "初心者", v: 18, max: 20 },
    { l: "働きやすさ", v: 13, max: 15 },
    { l: "稼ぎ", v: 8, max: 10 },
  ],
  goodComment: "大手ならではの集客力があり、稼いでいる方の実績がSNSや公式HPで公開されている透明性は信頼できます。全国140店舗以上、運営20年の規模感は業界でも群を抜いており、顧問税理士サポートまで整っている点は安心材料です。",
  honestComment: "店舗によってスタッフの質に差があるため、事前に口コミで店舗を絞ってから応募するのがおすすめです。「大手だから安心」だけで選ぶと、想定と違う体験になることも。",
  basic: [
    ["ジャンル", "アダルト・ノンアダルト選択可"],
    ["在宅", "OK"],
    ["通勤", "OK（全国70店舗以上）"],
    ["身バレ対策", "◎"],
    ["スタッフ", "女性スタッフ在籍（店舗による）"],
    ["特徴", "顧問税理士あり・プレミアム店舗制度あり"],
    ["対応エリア", "全国47都道府県"],
  ],
  applyUrl: "https://chatlady.co.jp/",
};

const RELATED: RelatedOffice[] = [
  { rank: 1, slug: "ft", name: "フェアリーテイル", score: 84 },
  { rank: 3, slug: "at-group", name: "アットグループ", score: 80 },
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
