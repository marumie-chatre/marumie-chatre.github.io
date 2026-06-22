import { reviews } from "../../reviews";
import OfficeReviews from "../../OfficeReviews";
import { OfficeDetailLayout, type OfficeDetailData, type RelatedOffice } from "../../L3";

export const metadata = {
  alternates: { canonical: "/jimusho/chatstyle" },
  title: "チャットスタイルの口コミ・評判【まるみえチャトレ】",
  description: "チャットスタイルの編集部調査と口コミ。ノンアダルトでも稼ぎ方を教えてくれるサポート重視の事務所。バーチャル配信OK。初心者向けの評判を正直にまとめました。",
};

const OFFICE_DATA: OfficeDetailData = {
  slug: "chatstyle",
  name: "チャットスタイル",
  rank: 4,
  score: 81,
  isPR: false,
  logoSrc: "/logo-chatstyle.png",
  headerImage: "/office-header-chatstyle.png",
  tagline: "ノンアダルトでも稼ぎ方を教えてくれる、サポート重視の事務所。\nバーチャル配信にも対応しています。",
  tags: ["両対応", "ノンアダルトOK", "バーチャル配信", "初回時給保証", "日払い", "初心者向け", "サポート手厚い", "在宅相談OK"],
  breakdown: [
    { l: "安全性", v: 23, max: 30 },
    { l: "サポート", v: 21, max: 25 },
    { l: "初心者", v: 17, max: 20 },
    { l: "働きやすさ", v: 12, max: 15 },
    { l: "稼ぎ", v: 8, max: 10 },
  ],
  goodComment: "接客のコツを一から教わりたい初心者に向いた事務所です。実際に働いた人からも「サポートが分かりやすく、スムーズに始められた」という声があります。バーチャル配信に対応しているので、顔出しは避けたいけれど別のかたちで挑戦したい人の選択肢にもなります。日払いに対応し、サポートの距離も近めです。",
  honestComment: "両対応のお店なので、お客さんによってはアダルト寄りのお願いが来ることもあります。応募のときに「ノンアダルトで働けるか」を、自分の言葉で確認しておくと安心です。顔出しなしだと報酬が少し下がる場合があると公式FAQに明記されています。隠さず書いているのは誠実ですが、高単価を最優先したい人には物足りないかもしれません。掛け持ちは基本NGとされている点も、先に知っておいてください。",
  features: [
    { n: "01", icon: "talk", t: "稼ぎ方を一から教われる", d: "ノンアダルトでも接客のコツを教えてくれます。スキルを身につけたい初心者向けです。" },
    { n: "02", icon: "device", t: "バーチャル配信に対応", d: "顔出し以外のかたちでも挑戦できます。" },
    { n: "03", icon: "support", t: "サポートが近め", d: "店舗により女性スタッフ2名が24時間体制。研修4年以上のスタッフがいる店舗もあります。" },
    { n: "04", icon: "reward", t: "日払い対応", d: "日払いに対応し、初回時給保証もあります。" },
  ],
  story: {
    title: "チャットスタイル｜眠そうにしてたら、一緒にスクワット。",
    paragraphs: [
      "いただいた口コミの中で、思わずクスッとした話があります。配信の待機中に眠そうにしていた子へ、熱血なスタッフが「よし、目を覚まそう！」と一緒にスクワットに付き合ってくれたそうです。",
      "待機が長くなると、つい眠気に負けそうになることってありますよね。そこまで一緒に盛り上げてくれるスタッフがいるんだ、と思うと和みます。【「サポートが近い」って、こういう小さな場面に出る】んですよね。",
    ],
  },
  basic: [
    ["ジャンル", "両対応（アダルト・ノンアダルト）"],
    ["働き方", "通勤／在宅向けの機材貸出は相談OK"],
    ["対応サイト", "国内大手6サイト"],
    ["報酬", "初回時給保証あり・各種ボーナス"],
    ["支払い", "日払い可"],
    ["スタッフ", "店舗により女性スタッフ2名24時間・研修4年以上"],
    ["設備", "防音完全個室・無料衣装100着以上"],
    ["特徴", "バーチャル配信OK・掛け持ちは基本NG"],
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
