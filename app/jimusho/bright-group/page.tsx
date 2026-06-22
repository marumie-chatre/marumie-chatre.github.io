import { reviews } from "../../reviews";
import OfficeReviews from "../../OfficeReviews";
import { OfficeDetailLayout, type OfficeDetailData, type RelatedOffice } from "../../L3";

export const metadata = {
  alternates: { canonical: "/jimusho/bright-group" },
  title: "ブライトグループの口コミ・評判【まるみえチャトレ】",
  description: "ブライトグループの編集部調査と口コミ。住める寮がある全国規模の大手グループ。両対応・未経験スタートが多い事務所の評判を、正直にまとめました。",
};

const OFFICE_DATA: OfficeDetailData = {
  slug: "bright-group",
  name: "ブライトグループ",
  rank: 2,
  score: 83,
  isPR: false,
  logoSrc: "/logo-bright-group.png",
  headerImage: "/office-header-bright-group.png",
  tagline: "住める寮もある、全国規模の大手グループ。\n本業として腰を据えたい人に向いています。",
  tags: ["両対応", "寮あり", "大手", "未経験歓迎", "24時間スタッフ", "全国対応", "ボーナスあり", "顔出し向き"],
  breakdown: [
    { l: "安全性", v: 25, max: 30 },
    { l: "サポート", v: 20, max: 25 },
    { l: "初心者", v: 17, max: 20 },
    { l: "働きやすさ", v: 13, max: 15 },
    { l: "稼ぎ", v: 8, max: 10 },
  ],
  goodComment: "大手ならではの安心感があって、在籍ランカーを公開するなど包み隠さない姿勢が伝わってきます。特徴的なのは、実際に住める寮があること。敷金・礼金・管理費が無料の店舗もあり、上京して通いで始めたい人には現実的な選択肢です。スタッフは24時間常駐で、9割以上が未経験スタートと案内されています。",
  honestComment: "気をつけたいのは、店舗による差が大きいこと。同じグループでも環境や扱いが変わるので、どの店舗かをよく確認してから決めてください。報酬は時給制と歩合制を選べてボーナスも多めですが、その分条件はやや複雑です。雰囲気は競争的なところもあります。それと両対応のお店なので、お店の方針としてアダルトもすすめます。会話のコツより先にアダルト対応を教わる場面もあるので、ノンアダルトで続けたい人は、教え方やノンアダルトの実績を面接で確認しておくと安心です。",
  features: [
    { n: "01", icon: "home", t: "住める寮がある", d: "敷金・礼金・管理費が無料の店舗や、オートロックの寮もあります。通いで上京スタートしたい人向けの設備です。" },
    { n: "02", icon: "support", t: "24時間スタッフが常駐", d: "スタッフが24時間いて、ヘアメイク・衣装・テキスト添削などの用意があります。" },
    { n: "03", icon: "users", t: "未経験スタートが多い", d: "在籍の9割以上が未経験からと案内されています。体験入店で様子を見てから決められます。" },
    { n: "04", icon: "reward", t: "報酬は選択式", d: "時給制と歩合制を選べます。ボーナスは多めですが、条件はやや複雑です。" },
  ],
  story: {
    title: "「だらだらできないっ！」と頑張る子の言葉。",
    paragraphs: [
      "ブライトグループは、全店舗での表彰式があったりして、グループ内の競争意識は強めの事務所です。でも、求人ページに実際に配信しているランカーさんが載っているのは、信頼できるなと感じます。",
      "中でも、ある女の子の【「配信初期は、住み込みしているから、だらだらするわけにはいかないっ！」】というコメントが、私はちょっと好きで。環境を変えて頑張る前向きさが伝わってきます。配信の経験がある方や、住み込みで集中したい方には、合う環境かもしれませんね。",
    ],
  },
  basic: [
    ["ジャンル", "両対応（アダルト・ノンアダルト）"],
    ["働き方", "通勤＋寮利用が可能"],
    ["対応エリア", "全国規模"],
    ["報酬", "時給制と歩合制の選択式・ボーナスあり（条件はやや複雑）"],
    ["支払い", "日払い・週払い・月払い"],
    ["スタッフ", "24時間常駐・元チャットレディの女性スタッフも在籍"],
    ["未経験", "在籍の9割以上が未経験スタート"],
    ["特徴", "在籍ランカーを公開・店舗ごとの差は大きめ"],
  ],
  applyUrl: "https://chatlady.co.jp/",
};

const RELATED: RelatedOffice[] = [
  { rank: 1, slug: "ft", name: "フェアリーテイル", score: 89, badge: "初心者におすすめ" },
  { rank: 3, slug: "at-group", name: "アットグループ", score: 80 },
  { rank: 4, slug: "chatstyle", name: "チャットスタイル", score: 81 },
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
