import { reviews } from "../../reviews";
import OfficeReviews from "../../OfficeReviews";
import { OfficeDetailLayout, type OfficeDetailData, type RelatedOffice } from "../../L3";

export const metadata = {
  alternates: { canonical: "/jimusho/pocket-work" },
  title: "ポケットワークの口コミ・評判【まるみえチャトレ】",
  description: "ポケットワークの編集部調査と口コミ。在宅メインの大手だが、広告の高料率には注意。在宅1か月の実体験をもとに正直にまとめました。",
};

const OFFICE_DATA: OfficeDetailData = {
  slug: "pocket-work",
  name: "ポケットワーク",
  rank: 11,
  score: 68,
  isPR: false,
  logoSrc: "/logo-pocket-work.png",
  headerImage: "/office-header-pocket-work.png",
  tagline: "在宅メインで、自分で動ける人向けの大手。\n広告の「高料率」は、条件をよく確かめて。",
  tags: ["在宅メイン", "即日払い", "ノルマ罰金なし", "24時間対応", "アダルト寄り", "通勤も可", "セルフ管理向き", "条件は要確認"],
  breakdown: [
    { l: "安全性", v: 24, max: 30 },
    { l: "サポート", v: 12, max: 25 },
    { l: "初心者", v: 13, max: 20 },
    { l: "働きやすさ", v: 13, max: 15 },
    { l: "稼ぎ", v: 6, max: 10 },
  ],
  goodComment: "在宅メインで働きたい人向けの大手です。即日払いができ、ノルマや罰金がなく、24時間365日いつでも有人で対応してもらえるのは、ひとりで在宅作業をするときに心強い点。マニュアルが定期的に届くので、近くに人がいなくても進め方の目安があります。通勤を選べば面接交通費や時給保証もあります。",
  honestComment: "正直に書くと、ここはアダルト寄りのお店です。ノンアダルトだと顔出しなし・マスク禁止で対応に制限がかかり、稼ぎにくい面があります。広告では料率の高さが目立ちますが、業界の標準は在宅40%・通勤30%。それを超える数字は、達成条件をよく確認してください（在宅の詳しい体験は下のストーリーに書きました）。サポートは通勤より在宅のほうが薄めなので、自分から動ける人に向いています。",
  features: [
    { n: "01", icon: "reward", t: "即日払い・罰金なし", d: "稼いだ分は即日払いに対応し、ノルマや罰金もありません。" },
    { n: "02", icon: "support", t: "24時間有人対応", d: "24時間365日、人が対応してくれます。ただし在宅は通勤よりサポートが薄めです。" },
    { n: "03", icon: "home", t: "在宅・通勤どちらも", d: "在宅メインのほか通勤も選べ、通勤なら面接交通費や時給保証もあります。" },
    { n: "04", icon: "device", t: "定期マニュアル配信", d: "進め方の目安になるマニュアルが定期的に届きます。在宅でひとりでも導線があります。" },
  ],
  story: {
    title: "ポケットワーク｜「高料率」の数字だけで決めないで。",
    paragraphs: [
      "これは、在宅で1か月だけ働いた子から届いた声です。広告では料率の高さが目立っていたけれど、在宅のスタートは38%。上の料率に上がるには条件があって、思った以上に稼働しないと届かなかったそうです。",
      "在宅は通勤よりサポートも薄めで、ひとりで頑張る覚悟がいる、と話していました。【数字の大きさより、その条件をちゃんと確かめること】。広告の印象と、入ってからの実感がずれることもあるんだな、と教えてくれた一件でした。",
    ],
  },
  basic: [
    ["ジャンル", "アダルト寄り（ノンアダルトは制限あり）"],
    ["働き方", "在宅メイン／通勤も選択可"],
    ["報酬（在宅）", "スタート38%・条件達成で段階的に上がる仕組み"],
    ["報酬（通勤）", "30%"],
    ["業界標準", "在宅40%・通勤30%（超える数字は条件を確認）"],
    ["支払い", "即日払いOK"],
    ["ノルマ・罰金", "なし"],
    ["スタッフ", "24時間365日有人対応（在宅はサポート薄め）"],
  ],
  applyUrl: "https://pokewaku.jp/",
  note: "在宅で1か月働いた実体験をもとにした内容です。広告で見る印象と、入ってからの実感が違う場合があります。ノンアダルト×在宅でどこまで稼げるか、顔出しなしの収支がどうなるかは、事前に確認しておくと安心です。",
};

const RELATED: RelatedOffice[] = [
  { rank: 10, slug: "asterisk", name: "アスタリスク", score: 69 },
  { rank: 12, slug: "liver-support", name: "ライバーサポートグループ", score: 68 },
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
