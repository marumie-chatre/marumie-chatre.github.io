import { reviews } from "../../reviews";
import OfficeReviews from "../../OfficeReviews";
import { OfficeDetailLayout, type OfficeDetailData } from "../../L3";

export const metadata = {
  alternates: { canonical: "/jimusho/liver-support" },
  title: "ライバーサポートグループの口コミ・評判",
  description: "ライバーサポートグループの編集部調査と口コミ。FANZA正規代理店の大手で、寮や福利厚生・税務相談まで。店舗差も含めて正直にまとめました。",
};

const OFFICE_DATA: OfficeDetailData = {
  slug: "liver-support",
  name: "ライバーサポートグループ",
  rank: 11,
  score: 68,
  isPR: false,
  logoSrc: "/logo-liver-support.png",
  headerImage: "/office-header-liver-support.png",
  tagline: "正規代理店で、寮も福利厚生も見たいなら。\n税務相談までまとめて頼れる大手です。",
  tags: ["FANZA正規代理店", "大手", "無料寮あり", "通勤", "福利厚生", "社会保険", "顔出しなしOK", "ノルマなし"],
  breakdown: [
    { l: "安全性", v: 21, max: 30 },
    { l: "サポート", v: 16, max: 25 },
    { l: "初心者", v: 14, max: 20 },
    { l: "働きやすさ", v: 11, max: 15 },
    { l: "稼ぎ", v: 6, max: 10 },
  ],
  goodComment: "仕事だけでなく、住むところやお金の手続きまで任せたい人に向く大手です。国内でも数社しかないFANZAの正規代理店のひとつで、無料の通勤ルームや寮・送迎がある店舗、専属ヘアメイクが常勤の店舗、1000着以上の衣装無料、社会保険や健康診断まで打ち出しています。FAQでは登録・退会費用なし、罰金・ノルマなし、顔出しなしOK、アダルト強要なしと書かれ、当日体験もできます。",
  honestComment: "「グループ全体」での魅力が大きいぶん、店舗による差がけっこうあります。女性スタッフの有無・賞与・寮が無料か・ヘアメイク常勤かは、店舗によって変わります。「グループ全体ですごい」と聞いて入っても、配属先で条件が思ったのと違うことが起こりえます。基本の報酬率を会社横断でまとめて開示している感じも薄めです。最初に統一条件を知ってから決めたい人には、NMRグループやポケットワークのほうが比べやすいと思います。希望の条件は応募前に個別に確認してください。",
  features: [
    { n: "01", icon: "home", t: "無料寮・通勤ルーム・送迎", d: "無料の通勤ルームや寮、送迎がある店舗があります。地方や複数都市で通勤したい人向けです。" },
    { n: "02", icon: "support", t: "福利厚生・税務まで", d: "社会保険の加入や健康診断、顧問税理士の税務相談まで打ち出している大手です。" },
    { n: "03", icon: "beauty", t: "ヘアメイク・衣装・フィルター", d: "専属ヘアメイク常勤の店舗や、1000着以上の衣装無料、ビューティーフィルターもあります。" },
    { n: "04", icon: "safety", t: "ノルマなし・顔出しなし可", d: "FAQでは登録退会費用なし・罰金ノルマなし・顔出しなし可・アダルト強要なし。当日体験もできます。" },
  ],
  basic: [
    ["正式名称", "ライバーサポートグループ（FANZA正規代理店）"],
    ["ジャンル", "FANZA正規代理店・グループ運営の大手"],
    ["働き方", "通勤中心・寮や無料通勤ルーム・送迎がある店舗あり"],
    ["対応エリア", "店舗による（地方・複数都市も）"],
    ["報酬", "店舗により日払い・週払い・月払い／ボーナスあり（会社横断の率開示は薄め）"],
    ["罰金・ノルマ", "FAQでは罰金・ノルマなし・登録退会費用なし"],
    ["スタッフ", "女性スタッフは店舗による（要確認）"],
    ["特徴", "社会保険・健康診断・顧問税理士・専属ヘアメイク・1000着以上衣装無料・顔出しなし可・当日体験可"],
  ],
  applyUrl: "https://live-chat.jp/",
  note: "口コミがまだ少なく、公式サイトを中心に調べた内容です。女性スタッフの有無・賞与・寮の無料/有料などは店舗によって差があるため、応募前に希望の店舗で確認してください。",
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
