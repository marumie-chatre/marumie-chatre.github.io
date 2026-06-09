import { reviews } from "../../reviews";
import OfficeReviews from "../../OfficeReviews";
import { OfficeDetailLayout, type OfficeDetailData, type RelatedOffice } from "../../L3";

export const metadata = {
  title: "フェアリーテイルの口コミ・評判｜ノンアダルト専門の先駆者【まるみえチャトレ】",
  description: "フェアリーテイルの編集部調査レポート・口コミを掲載。業界初のノンアダルト専門店。安全性29点・初心者向け19点・総合89点。",
};

const OFFICE_DATA: OfficeDetailData = {
  slug: "ft",
  name: "フェアリーテイル",
  rank: 1,
  score: 89,
  isPR: false,
  logoSrc: "/logo-ft.png",
  headerImage: "/office-header-ft.png",
  tagline: "ノンアダルト専門の先駆者。\n安全に、自分らしく働ける事務所。",
  tags: ["業界初ノンアダルト専門", "女性スタッフ常駐", "在宅・通勤OK", "美容サロン連携", "初心者歓迎", "身バレ対策◎"],
  breakdown: [
    { l: "安全性", v: 29, max: 30 },
    { l: "サポート", v: 20, max: 25 },
    { l: "初心者", v: 19, max: 20 },
    { l: "働きやすさ", v: 14, max: 15 },
    { l: "稼ぎ", v: 7, max: 10 },
  ],
  goodComment: "「ノンアダルト専門」という言葉がまだ珍しかった時代から、アダルトなしでも輝ける場所をつくり続けてきた事務所。チャットレディ歴3年以上の女性スタッフが常駐しているから、はじめての不安もちゃんと話せます。",
  honestComment: "稼ぎ重視の方には向いていないかもしれません。でも「安全に、自分のペースで、長く続けたい」という方には業界でトップクラスの環境だと思います。",
  features: [
    { n: "01", t: "業界初のノンアダルト専門店", d: "アダルトなしで稼げる環境を、業界でいち早く整えてきました。「ノンアダルトでも大丈夫？」という不安に、実績で答えます。" },
    { n: "02", t: "チャットレディ歴3年以上の女性スタッフが常駐", d: "はじめてのことだらけでも、経験者に直接相談できます。マニュアルではなく、リアルなノウハウを教えてもらえます。" },
    { n: "03", t: "美容サロン連携店あり", d: "働きながら自分磨きができる環境。見た目に自信がつくと、配信にも自信が出てきます。" },
  ],
  story: {
    title: "アダルトができない子でも、挑戦できる場所を。",
    paragraphs: [
      "チャットレディといえばアダルト——そんなイメージが強かった時代から、フェアリーテイルはノンアダルト専門店を立ち上げました。",
      "CMでも見かける国内大手ライブチャットサイトのノンアダルトジャンルだけを取り扱うグループです。専門店がほとんどなかった時代からやってきたからこそ、「ノンアダルトで、どうやって女の子を輝かせるか」を本気で考え続けてきました。",
    ],
  },
  basic: [
    ["ジャンル", "完全ノンアダルト専門"],
    ["在宅", "OK"],
    ["通勤", "OK"],
    ["身バレ対策", "◎（実績あり）"],
    ["スタッフ", "チャットレディ歴3年以上の女性スタッフ常駐"],
    ["特徴", "美容サロン連携店あり・ノウハウ重視"],
    ["対応エリア", "全国対応"],
  ],
  applyUrl: "https://livecafefairytale.com/",
};

const RELATED: RelatedOffice[] = [
  { rank: 2, slug: "bright-group", name: "ブライトグループ", score: 83 },
  { rank: 3, slug: "at-group", name: "アットグループ", score: 80 },
];

export default function FTPage() {
  const officeReviews = reviews.filter(r => r.slug === OFFICE_DATA.slug);
  return (
    <OfficeDetailLayout
      o={OFFICE_DATA}
      reviewsSlot={<OfficeReviews reviews={officeReviews} officeName={OFFICE_DATA.name} />}
      relatedOffices={RELATED}
    />
  );
}
