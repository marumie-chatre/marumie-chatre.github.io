import { reviews } from "../../reviews";
import OfficeReviews from "../../OfficeReviews";
import { OfficeDetailLayout, type OfficeDetailData } from "../../L3";

export const metadata = {
  alternates: { canonical: "/jimusho/chatlady-jp" },
  title: "チャットレディJPの口コミ・評判",
  description: "チャットレディJPの編集部調査と口コミ。全国の事務所を条件で見比べられる比較窓口。ノンアダルト可・顔出し強制なし。使い方の注意点も正直にまとめました。",
};

const OFFICE_DATA: OfficeDetailData = {
  slug: "chatlady-jp",
  name: "チャットレディJP",
  rank: 8,
  score: 70,
  isPR: false,
  logoSrc: "/logo-chatlady-jp.png",
  headerImage: "/office-header-chatlady-jp.png",
  tagline: "1社に決める前に。\n全国の事務所を条件で見比べる窓口です。",
  tags: ["比較プラットフォーム", "全国対応", "条件で逆引き", "ノンアダルト可", "顔出し強制なし", "日払い基本あり", "罰金なし", "地方もOK"],
  breakdown: [
    { l: "安全性", v: 22, max: 30 },
    { l: "サポート", v: 17, max: 25 },
    { l: "初心者", v: 14, max: 20 },
    { l: "働きやすさ", v: 11, max: 15 },
    { l: "稼ぎ", v: 6, max: 10 },
  ],
  goodComment: "いきなり1社に決める前に、全国の事務所を条件で見比べられる窓口です。女性スタッフがいる・寮がある・保証がある・美容部がある…といった条件から逆引きで探せます。公式のFAQが丁寧で、ノンアダルト可・顔出しは強制されない・外で会うのは禁止・迷惑なお客さんは断っていい、と気になる点が書かれています。まずは広く比べたい人に向いています。",
  honestComment: "気をつけたいのは、「JP全体の印象」と「実際に入る個別の店舗」は別物になりやすいこと。寮・保証・女性スタッフの有無は店舗ごとにバラバラなので、全体のイメージだけで決めないでください。また在宅50%〜といった数字も見られますが、業界の標準は在宅40%・通勤30%です。それを超える率をうたう場合は、達成条件や持続性をよく確認してください。最初から統一基準を期待する人には、向かないかもしれません。",
  features: [
    { n: "01", icon: "users", t: "条件から逆引き", d: "女性スタッフ・寮・保証・美容部などのタグで、全国の事務所を横断検索できます。" },
    { n: "02", icon: "safety", t: "情報量の多いFAQ", d: "ノンアダルト可・顔出し強制なし・外で会う禁止・迷惑客は拒否OK。罰金や登録料もなしと明記されています。" },
    { n: "03", icon: "home", t: "全国から候補を探せる", d: "地方在住でも複数の候補を見つけやすく、通勤も在宅も条件から探せます。" },
    { n: "04", icon: "reward", t: "日払いが基本", d: "日払いが基本で、精算は月2回が基本です（店舗により異なります）。" },
  ],
  basic: [
    ["ジャンル", "全国の事務所を比較できるプラットフォーム型"],
    ["看板", "1社に決める前に全国の条件を見比べる窓口"],
    ["働き方", "通勤・在宅（店舗により選べる）"],
    ["対応エリア", "全国（地方含む）"],
    ["報酬", "店舗による（業界標準は在宅40%・通勤30%。超える率は条件を確認）"],
    ["支払い", "日払い基本あり・精算は月2回が基本（店舗による）"],
    ["罰金/ノルマ", "罰金・退会手数料・登録料なし（公式FAQ記載）"],
    ["安心面", "ノンアダルト可・顔出し強制なし・外で会う禁止・迷惑客は拒否OK"],
  ],
  applyUrl: "https://chat-lady.jp/",
  note: "公式サイトを中心に調べた内容で、実際に働いた人の口コミはまだ少なめです。ノンアダルト条件・保証・寮は「JP全体」ではなく実際に入る店舗ごとに違うので、個別に確認してください。",
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
