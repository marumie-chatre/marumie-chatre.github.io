import Link from "next/link";
import Image from "next/image";
import { Icon } from "../Icon";
import { IconShieldCheck, IconScale, IconSearch } from "@tabler/icons-react";
import { BreadcrumbSchema, FAQSchema } from "../StructuredData";
import { MM } from "../theme";

export const metadata = {
  alternates: { canonical: "/profile" },
  title: "運営方針・プロフィール｜広告ではなく、ほんとうのことを｜まるみえチャトレ",
  description: "まるみえチャトレの運営方針とプロフィール。広告費で順位を変えない・良い点も気になる点も両方書く・検証と実体験で書く・口コミは本物だけ。5つの約束と評価基準、口コミ投稿ガイドラインをまとめています。",
};

// 3つの約束
const PROMISES = [
  { n: "01", t: "広告費で順位は変えません", d: "おすすめ順は、公開している5つの評価基準だけで決めます。広告費の多さで順位は動かしません。", Icon: IconShieldCheck },
  { n: "02", t: "良い点も、気になる点も、両方書きます", d: "お店の魅力だけでなく、応募前に知っておきたい“気になる点”も正直に。片方しか書かないのは、求人広告と同じになってしまうから。", Icon: IconScale },
  { n: "03", t: "検証と実体験をもとに書きます", d: "書き手は、業界を実際に見てきた経験者です。調べたこと・体験したことをもとに、感覚ではなく根拠のある言葉でお伝えします。", Icon: IconSearch },
];

// 評価の5軸
const AXES = [
  { n: "01", label: "安全性", max: 30, image: "/eval-axis-1-safety.png", items: ["身バレ対策", "アダルト強要の有無", "プライバシー保護"] },
  { n: "02", label: "サポート", max: 25, image: "/eval-axis-2-support.png", items: ["マニュアルの充実度", "相談のしやすさ", "スタッフ常駐"] },
  { n: "03", label: "初心者向け", max: 20, image: "/eval-axis-3-beginner.png", items: ["未経験の受け入れ", "デビューまでの導線", "つまずきにくい設計"] },
  { n: "04", label: "働きやすさ", max: 15, image: "/eval-axis-4-work.png", items: ["シフトの自由度", "在宅・通勤の選びやすさ", "退店時のリスク"] },
  { n: "05", label: "稼ぎやすさ", max: 10, image: "/eval-axis-5-earn.png", items: ["待機対策", "戦略の提案", "リピート獲得サポート"] },
];

const FAQS = [
  { q: "まるみえチャトレはどんなサイトですか？", a: "チャットレディ事務所の口コミ・報酬条件・サポート体制・身バレ対策などを比較できる情報メディアです。" },
  { q: "ランキングは広告費で決まりますか？", a: "いいえ。広告費の有無だけで順位を決めることはありません。公開した5つの評価基準と、確認できた情報をもとに評価しています。" },
  { q: "口コミだけで事務所を選んでも大丈夫ですか？", a: "口コミは参考になりますが、それだけで判断するのはおすすめしません。報酬条件・サポート体制・身バレ対策・スタッフ対応もあわせて確認することが大切です。" },
  { q: "掲載情報はどのように確認していますか？", a: "公式サイト・公開情報・編集部の確認内容をもとに作成しています。誤りがある場合は、確認後に修正します。" },
  { q: "未経験でも参考になりますか？", a: "はい。未経験の方が不安になりやすい、身バレ・報酬・ノルマ・スタッフ対応・配信環境を分かりやすく比較できるようにしています。" },
];

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeoozsXNP5R5hgyPbxMlVPNPBrc2NOceFtI5f97Lbv3KUATkw/viewform?usp=dialog";

// 統一見出し（コーラルの左バー）
function H2({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2 id={id} style={{
      fontFamily: "'Zen Maru Gothic', sans-serif",
      fontWeight: 700,
      fontSize: 19,
      lineHeight: 1.5,
      color: MM.ink,
      borderLeft: `5px solid ${MM.tan}`,
      paddingLeft: 13,
      margin: "0 0 16px",
    }}>{children}</h2>
  );
}

export default function ProfilePage() {
  return (
    <main className="mm-profile" style={{ background: MM.bg, color: MM.text, paddingBottom: 48 }}>
      <BreadcrumbSchema items={[
        { name: "トップ", path: "/" },
        { name: "運営方針・プロフィール", path: "/profile" },
      ]} />
      <FAQSchema items={FAQS} />

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 18px" }}>

        {/* ===== HERO ===== */}
        <section style={{ paddingTop: 28 }}>
          <div style={{ fontSize: 10, letterSpacing: 2.5, fontWeight: 800, color: MM.green }}>ABOUT US</div>
          <h1 style={{
            fontFamily: "'Zen Maru Gothic', sans-serif",
            fontWeight: 900, fontSize: 27, lineHeight: 1.45, color: MM.ink, margin: "8px 0 0",
          }}>広告ではなく、<br />ほんとうのことを。</h1>
          <p style={{ fontSize: 13, lineHeight: 1.95, color: MM.text, margin: "14px 0 0" }}>
            まるみえチャトレは、<strong>真面目に働きたい女性が、安心してお店を選べるように</strong>作った比較メディアです。私たちが大事にしているのは、たったひとつ。<strong>広告のためではなく、ほんとうのことを書く</strong>ということ。
          </p>

          {/* みなみカード */}
          <div style={{
            display: "flex", alignItems: "center", gap: 16,
            padding: 18, marginTop: 18,
            background: MM.greenBg, borderRadius: 16,
          }}>
            <div style={{ width: 80, height: 80, borderRadius: "50%", overflow: "hidden", flexShrink: 0, background: MM.paper }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/minami-icon.png" alt="みなみ" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 9.5, letterSpacing: 2, fontWeight: 800, color: MM.tan }}>EDITOR</div>
              <div style={{ fontFamily: "'Zen Maru Gothic', sans-serif", fontSize: 21, fontWeight: 800, color: MM.ink, marginTop: 3 }}>みなみ</div>
              <div style={{ fontSize: 11.5, color: MM.muted, marginTop: 5, lineHeight: 1.7 }}>
                元保育士・現役チャットレディ4年目。<br />まるみえチャトレの運営・編集をしています。
              </div>
            </div>
          </div>
        </section>

        {/* ===== なぜ作ったか ===== */}
        <section style={{ paddingTop: 34 }}>
          <H2>なぜ、このサイトを作ったのか</H2>
          <p style={{ fontSize: 13, lineHeight: 1.95, margin: 0 }}>
            私がチャットレディを知ったのは、生活に少し余裕がほしくて副業を探していた時でした。でも調べてみると、求人には「簡単に稼げる」「高収入」の言葉ばかり。一方で口コミには「思ったより稼げなかった」「スタッフ対応が合わなかった」という声も。<strong>良い情報と悪い情報の差が大きく、何を信じていいか分からない</strong>——応募ボタンを押すまで、かなり悩みました。
          </p>
          <p style={{ fontSize: 13, lineHeight: 1.95, margin: "14px 0 0" }}>
            チャットレディの求人サイトやランキングは、<strong>広告費やアフィリエイト報酬で順位が決まっていること</strong>があります。「一番おすすめ」が、実は一番広告費を払っただけ、ということも。だからまるみえチャトレは、<strong>入ってからじゃないと分からないことを、先に正直に伝える</strong>ことにしました。
          </p>
          <div style={{
            marginTop: 16, padding: "14px 16px",
            background: MM.greenBg, borderRadius: 12, borderLeft: `4px solid ${MM.green}`,
            fontSize: 13, lineHeight: 1.85, fontWeight: 700, color: MM.ink,
          }}>
            「とにかく応募してほしい」ではなく、<br />
            <span style={{ color: MM.green, backgroundImage: "linear-gradient(transparent 64%, rgba(193,154,102,0.30) 64%)" }}>「ちゃんと選んでから決めてほしい」</span>。<br />それが、このサイトの基本方針です。
          </div>
        </section>

        {/* ===== 3つの約束 ===== */}
        <section style={{ paddingTop: 34 }}>
          <H2 id="yakusoku">まるみえチャトレの、3つの約束</H2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {PROMISES.map((p) => {
              const Ico = p.Icon;
              return (
                <div key={p.n} style={{
                  background: MM.tanBg, borderRadius: 12, padding: "16px 18px",
                  display: "flex", gap: 14, alignItems: "flex-start",
                }}>
                  <span style={{
                    width: 46, height: 46, borderRadius: "50%", flexShrink: 0,
                    background: MM.paper, color: MM.tan,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: `1.5px solid ${MM.tan}`,
                  }}>
                    <Ico size={24} stroke={1.7} />
                  </span>
                  <div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 7 }}>
                      <span style={{ fontFamily: "'Zen Maru Gothic', sans-serif", fontSize: 16, fontWeight: 900, color: MM.tan, lineHeight: 1 }}>{p.n}</span>
                      <span style={{ fontSize: 14, fontWeight: 800, color: MM.ink, lineHeight: 1.5 }}>{p.t}</span>
                    </div>
                    <p style={{ margin: "7px 0 0", fontSize: 12, lineHeight: 1.85, color: MM.text }}>{p.d}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== 評価の5つの基準 ===== */}
        <section style={{ paddingTop: 34 }}>
          <H2 id="hyoka">事務所を評価する、5つの基準</H2>
          <p style={{ fontSize: 13, lineHeight: 1.9, margin: "0 0 16px" }}>
            すべての事務所を、同じ<strong>5軸100点満点</strong>で採点しています。広告費で順位は変えません。スコアが動くのは、採点項目の“事実”が変わったときだけです。
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {AXES.map((a) => (
              <div key={a.n} style={{
                background: MM.paper, borderRadius: 14, padding: 14,
                border: `1px solid ${MM.rule}`, display: "flex", gap: 14, alignItems: "flex-start",
              }}>
                <Image src={a.image} alt={a.label} width={400} height={400}
                  sizes="92px" style={{ width: 92, height: 92, borderRadius: 12, flexShrink: 0, objectFit: "cover" }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                    <span style={{ fontFamily: "'Zen Maru Gothic', sans-serif", fontSize: 20, fontWeight: 900, color: MM.green }}>{a.n}</span>
                    <span style={{ fontSize: 15, fontWeight: 800, color: MM.ink }}>{a.label}</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: MM.tan }}>{a.max}pt</span>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0" }}>
                    {a.items.map((it, j) => (
                      <li key={j} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 11.5, color: MM.text, lineHeight: 1.7, marginBottom: 3 }}>
                        <span style={{ width: 15, height: 15, borderRadius: "50%", background: MM.green, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <Icon.Check size={9} />
                        </span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* NO PR */}
          <div style={{ marginTop: 16, padding: "16px 18px", background: MM.greenBg, borderRadius: 14 }}>
            <div style={{ fontSize: 9.5, letterSpacing: 2, fontWeight: 800, color: MM.green, marginBottom: 5 }}>NO PR</div>
            <div style={{ fontFamily: "'Zen Maru Gothic', sans-serif", fontSize: 16, fontWeight: 700, color: MM.ink, lineHeight: 1.5 }}>広告費で順位は変えません。</div>
            <p style={{ margin: "8px 0 0", fontSize: 11.5, lineHeight: 1.85, color: MM.muted }}>
              事務所からの広告費は順位に反映していません。スコアが上下するのは「採点項目の事実が変わったとき」だけです。
            </p>
          </div>
        </section>

        {/* ===== 口コミについて・投稿ガイドライン ===== */}
        <section style={{ paddingTop: 34 }}>
          <H2 id="kuchikomi">口コミについての考え方と、投稿ガイドライン</H2>
          <p style={{ fontSize: 13, lineHeight: 1.95, margin: 0 }}>
            口コミは事務所選びの参考になります。ただ、口コミだけで判断するのは危険です。働く時間・希望収入・スタッフとの相性で感じ方は大きく変わりますし、良いお店でも良い口コミが書かれるとは限りません。だから私たちは、口コミに加えて<strong>基本情報・サポート・報酬・身バレ対策まで確認して総合的に判断</strong>します。
          </p>

          <div style={{ marginTop: 16, padding: "14px 16px", background: MM.greenBg2, borderRadius: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: MM.ink, marginBottom: 8 }}>投稿していただきたいこと</div>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 12.5, lineHeight: 1.9, color: MM.text }}>
              <li>スタッフの対応・サポートの実態</li>
              <li>面接と入店後のギャップの有無</li>
              <li>働き方・シフトの自由度／辞めるときの手続き</li>
              <li>どんな人に向いていると思うか</li>
            </ul>
            <p style={{ margin: "8px 0 0", fontSize: 12, color: MM.muted, lineHeight: 1.8 }}>
              ※ 匿名でOK。名前・連絡先・勤務エリアなど個人が特定される情報は不要です。良かった点も気になった点も、同じように価値があります。
            </p>
          </div>

          <div style={{ marginTop: 12, padding: "14px 16px", background: MM.tanBg, borderRadius: 12, borderLeft: `4px solid ${MM.tan}` }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: "#9A7644", marginBottom: 8 }}>掲載できない内容</div>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 12.5, lineHeight: 1.9, color: MM.text }}>
              <li>事実ではない内容・噂話</li>
              <li>感情的な誹謗中傷</li>
              <li>個人が特定される情報</li>
              <li>事務所関係者による投稿・広告/勧誘目的の内容</li>
            </ul>
          </div>

          <a href={FORM_URL} target="_blank" rel="noopener noreferrer" style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            marginTop: 16, padding: "14px 18px", borderRadius: 99,
            background: MM.green, color: "#fff", fontSize: 13, fontWeight: 800, textDecoration: "none",
          }}>
            <Icon.Pencil size={15} />
            匿名で口コミを投稿する
          </a>
        </section>

        {/* ===== FAQ ===== */}
        <section style={{ paddingTop: 34 }}>
          <H2>よくある質問</H2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {FAQS.map((f, i) => (
              <div key={i} style={{ background: MM.paper, borderRadius: 12, padding: "14px 16px", border: `1px solid ${MM.rule}` }}>
                <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "'Zen Maru Gothic', sans-serif", fontSize: 14, fontWeight: 900, color: MM.green, flexShrink: 0 }}>Q.</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: MM.ink, lineHeight: 1.55 }}>{f.q}</span>
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "flex-start", marginTop: 7, paddingTop: 7, borderTop: `1px dashed ${MM.rule}` }}>
                  <span style={{ fontFamily: "'Zen Maru Gothic', sans-serif", fontSize: 14, fontWeight: 900, color: MM.tan, flexShrink: 0 }}>A.</span>
                  <span style={{ fontSize: 12, color: MM.text, lineHeight: 1.85 }}>{f.a}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== 運営者情報 ===== */}
        <section style={{ paddingTop: 34 }}>
          <H2>運営者情報</H2>
          <div style={{ background: MM.paper, borderRadius: 12, padding: "16px 18px", border: `1px solid ${MM.rule}` }}>
            <div style={{ display: "grid", gridTemplateColumns: "92px 1fr", gap: 6, rowGap: 10, fontSize: 12.5, lineHeight: 1.8 }}>
              <span style={{ color: MM.muted, fontWeight: 700 }}>サイト名</span><span>まるみえチャトレ</span>
              <span style={{ color: MM.muted, fontWeight: 700 }}>運営・編集</span><span>みなみ（元保育士・現役チャットレディ4年目）</span>
              <span style={{ color: MM.muted, fontWeight: 700 }}>掲載内容</span><span>チャットレディ事務所の比較・口コミ・報酬条件・サポート・身バレ対策</span>
              <span style={{ color: MM.muted, fontWeight: 700 }}>最終更新</span><span>2026年6月24日</span>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section style={{ paddingTop: 30 }}>
          <Link href="/jimusho" style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            padding: "15px 18px", borderRadius: 99,
            background: MM.green, color: "#fff", fontSize: 14, fontWeight: 800, textDecoration: "none",
          }}>
            自分に合う事務所を比較ランキングで見る
            <Icon.Arrow size={14} />
          </Link>
        </section>

      </div>
    </main>
  );
}
