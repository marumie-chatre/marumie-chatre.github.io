import { reviews } from "../../reviews";
import OfficeReviews from "../../OfficeReviews";
import { OfficeDetailLayout, type OfficeDetailData } from "../../L3";

export const metadata = {
  alternates: { canonical: "/jimusho/asterisk" },
  title: "アスタリスクの口コミ・評判【まるみえチャトレ】",
  description: "アスタリスクの編集部調査と口コミ。全店を女性スタッフが運営する高収入向けの事務所。アダルト寄りの色も含めて正直にまとめました。",
};

const OFFICE_DATA: OfficeDetailData = {
  slug: "asterisk",
  name: "アスタリスク",
  rank: 9,
  score: 69,
  isPR: false,
  logoSrc: "/logo-asterisk.png",
  headerImage: "/office-header-asterisk.png",
  tagline: "全店を女性スタッフが運営する、高収入向けのお店。\nしっかり稼ぎたい人に向いています。",
  tags: ["高収入向け", "女性スタッフのみ", "完全個室", "毎月昇給", "各種ボーナス", "表彰制度", "アダルト寄り", "1日体験あり"],
  breakdown: [
    { l: "安全性", v: 25, max: 30 },
    { l: "サポート", v: 18, max: 25 },
    { l: "初心者", v: 9, max: 20 },
    { l: "働きやすさ", v: 9, max: 15 },
    { l: "稼ぎ", v: 8, max: 10 },
  ],
  goodComment: "運営しているのが全員女性スタッフというのは、安心しやすい点です。男性スタッフに気をつかわず相談できるのは、はじめての人にはうれしいところ。メイクのサポートや美肌補正カメラ、完全個室もそろっていて、見せ方の部分も整えられます。現役で結果を出している人が直接教えてくれる仕組みや、表彰制度もあります。1日体験のレビューも公開されています。",
  honestComment: "ここは高収入を前面に出したお店で、お店のスタイル自体がアダルト寄りです。会話のコツより、アダルト対応を中心に教えられる可能性が高めです。お客さんは選べないぶん、ノンアダルトのつもりでも対応を求められる場面が増えやすく、落ち着いてノンアダルトで続けたい人には少しハードルが高いかもしれません。続けたいなら、面接で「ノンアダルトのまま続けられるか」「どう教えてもらえるか」を必ず確認してください。細かい情報は公式サイトが中心なので、雰囲気は1日体験で確かめてください。",
  features: [
    { n: "01", icon: "support", t: "女性スタッフだけで運営", d: "全店を女性スタッフが運営しています。男性に気をつかわず相談できる点は、はじめての人にうれしいところです。" },
    { n: "02", icon: "reward", t: "高収入に特化", d: "毎月の昇給や各種ボーナス、表彰制度があります。ただしアダルト寄りの色は強めです。" },
    { n: "03", icon: "beauty", t: "メイク・美肌補正・完全個室", d: "見せ方を整える環境がそろっています。" },
    { n: "04", icon: "talk", t: "現役の人が直接指導", d: "結果を出している人が直接教えてくれます。無料の衣装・メイクや独立サポートもあると案内されています。" },
  ],
  basic: [
    ["ジャンル", "高収入向け（アダルト寄り）・ノンアダルト可否は面接で確認"],
    ["働き方", "完全個室の通勤型・1日体験のレビューが多数公開"],
    ["報酬", "毎月昇給・各種ボーナス（具体額は公式サイト中心）"],
    ["サポート", "メイクサポート・美肌補正カメラ・無料衣装メイク"],
    ["スタッフ", "全店を女性スタッフが運営"],
    ["制度", "現役の人の直接指導・表彰制度・独立サポート"],
    ["向き不向き", "しっかり稼ぎたい人向け・ノンアダルトで落ち着きたい初心者には不向き"],
  ],
  applyUrl: "https://asterisk.network/",
  note: "細かい情報は公式サイトが中心で、確認しきれていない部分もあります。女性スタッフのみという点も含め、実際の雰囲気は1日体験や面接で確かめてください。",
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
