import Link from "next/link";
import { Icon } from "../Icon";

export const metadata = {
  title: "運営者プロフィール｜まるみえチャトレ",
  description: "まるみえチャトレの運営者プロフィール。元保育士・現役チャットレディ4年目のみなみが、編集の3つの約束を守って運営しています。",
};

// Palette E カラー（インライン使用用）
const G = {
  bg: "#FBF7F0",
  paper: "#FFFFFF",
  ink: "#2E1F10",
  inkSoft: "#87796A",
  inkSofter: "#B5AC9B",
  sage: "#7BAA3F",
  sageDeep: "#587A38",
  sageSoft: "#CDDDB0",
  sagePastel: "#A8C49A",
  sagePastelText: "#8FAD7F",
  cream: "#F8EFE0",
  bgWarm: "#F5E8C8",
  accent: "#F4B5A0",
  accentDeep: "#E89B85",
  brown: "#5C3D1F",
  gold: "#C9923F",
  rule: "rgba(46,31,16,0.10)",
  ruleStrong: "rgba(46,31,16,0.20)",
};

// 編集部の3つの約束（画像付き）
const POLICIES = [
  {
    n: "01",
    title: "広告費だけで順位を決めません",
    image: "/profile-promise-1.png",
    body: "事務所から広告費をいただく場合でも、ランキングのスコアにそのまま反映することはありません。\n順位は、掲載基準や採点項目、確認できた情報をもとに、できるだけ公平に判断しています。",
  },
  {
    n: "02",
    title: "良いところも、気になるところも書きます",
    image: "/profile-promise-2.png",
    body: "メリットだけを並べるレビューではなく、実際に選ぶ前に知っておきたいことも、きちんと掲載します。\n報酬、サポート、身バレ対策、通いやすさ、スタッフ対応など、良いところと注意したいところの両方を見られるようにしています。",
  },
  {
    n: "03",
    title: "採点の理由をわかりやすく公開します",
    image: "/profile-promise-3.png",
    body: "ランキングの配点、採点項目、情報の更新日などは、できるだけわかりやすく確認できるようにしています。\nもし掲載情報に誤りがあった場合は、内容を確認したうえで、必要に応じて修正します。",
  },
];

const FAQ_ITEMS = [
  {
    q: "まるみえチャトレはどんなサイトですか？",
    a: "チャットレディ事務所の口コミ、報酬条件、サポート体制、身バレ対策などを比較できる情報メディアです。",
  },
  {
    q: "ランキングは広告費で決まりますか？",
    a: "いいえ。広告費の有無だけでランキング順位を決めることはありません。採点項目と確認できた情報をもとに評価しています。",
  },
  {
    q: "口コミだけで事務所を選んでも大丈夫ですか？",
    a: "口コミは参考になりますが、それだけで判断するのはおすすめしません。報酬条件、サポート体制、身バレ対策、スタッフ対応なども合わせて確認することが大切です。",
  },
  {
    q: "掲載情報はどのように確認していますか？",
    a: "公式サイト、公開情報、編集部による確認内容をもとに作成しています。情報に誤りがある場合は、確認後に修正します。",
  },
  {
    q: "チャットレディ未経験でも参考になりますか？",
    a: "はい。未経験の方が不安になりやすい、身バレ、報酬、ノルマ、スタッフ対応、配信環境などを分かりやすく比較できるようにしています。",
  },
];

// セクション kicker
function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      fontSize: 10, letterSpacing: 2.5, fontWeight: 700,
      color: G.ink,
    }}>
      <span style={{ width: 20, height: 1.5, background: G.sage, borderRadius: 1 }} />
      {children}
    </div>
  );
}

export default function ProfilePage() {
  return (
    <main style={{ background: G.bg, color: G.ink, paddingBottom: 40 }}>

      <div style={{ padding: "32px 22px 0", maxWidth: 720, margin: "0 auto" }}>

        {/* ===== photo + name カード ===== */}
        <div style={{
          display: "flex", alignItems: "center", gap: 16,
          padding: "20px",
          background: G.paper, borderRadius: 16,
          border: `1px solid ${G.rule}`,
        }}>
          {/* avatar - みなみアイコン */}
          <div style={{
            width: 88, height: 88, borderRadius: "50%",
            background: G.sageSoft,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
            overflow: "hidden",
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/minami-icon.png"
              alt="みなみ"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          {/* name + meta */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontSize: 9.5, letterSpacing: 2.5, fontWeight: 700, color: G.gold,
            }}>EDITOR</div>
            <div style={{
              marginTop: 4,
              fontSize: 22, fontWeight: 800, lineHeight: 1.2, color: G.brown,
            }}>みなみ</div>
            <div style={{
              fontSize: 11, color: G.inkSoft, marginTop: 6, lineHeight: 1.7,
            }}>
              元保育士で現役チャットレディをしています。<br />
              チャットレディ経験は4年目、<br />
              まるみえチャトレの運営をしてます。
            </div>
          </div>
        </div>

        {/* ===== WORKSPACE 編集部の机画像 ===== */}
        <div style={{ marginTop: 26 }}>
          <SectionKicker>WORKSPACE</SectionKicker>
          <h2 style={{
            margin: "8px 0 12px",
            fontSize: 19, fontWeight: 700, lineHeight: 1.6, color: G.ink,
          }}>編集部の机から。</h2>
          <div style={{
            width: "100%", aspectRatio: "16/10",
            borderRadius: 12, overflow: "hidden",
            background: G.sageSoft,
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/editor-desk.png"
              alt="編集部の机"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>

        {/* ===== BIOGRAPHY セクション ===== */}
        <div style={{ marginTop: 30 }}>
          <SectionKicker>MESSAGE</SectionKicker>
          <h2 style={{
            margin: "8px 0 14px",
            fontSize: 19, fontWeight: 700, lineHeight: 1.6, color: G.ink,
          }}>チャットレディを始めたいけど<br />悩んでいる方へ。</h2>

          <p style={{
            margin: 0, fontSize: 12.5, lineHeight: 1.95, color: G.ink,
          }}>
            チャットレディを始めたいけど、どのお店を選べばいいか分からない。
          </p>
          <p style={{
            margin: "12px 0 0", fontSize: 12.5, lineHeight: 1.95, color: G.ink,
          }}>
            まるみえチャトレは、そんな人が<br />
            お店の雰囲気やサポート、口コミ、報酬のことまで<br />
            中身を見て選べるように作った情報サイトです。
          </p>
          <p style={{
            margin: "14px 0 0", fontSize: 12.5, lineHeight: 1.95, color: G.ink,
          }}>
            「簡単に稼げる」という言葉だけではなく、<br />
            良い点も気になる点も見たうえで、自分に合う事務所を選べることを大切にしています。
          </p>
        </div>

        {/* ===== このサイトを作った理由 ===== */}
        <div style={{ marginTop: 32 }}>
          <SectionKicker>WHY</SectionKicker>
          <h2 style={{
            margin: "8px 0 14px",
            fontSize: 19, fontWeight: 700, lineHeight: 1.6, color: G.ink,
          }}>このサイトを作った理由。</h2>

          <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.95, color: G.ink }}>
            私がチャットレディというお仕事を知ったのは、生活に少し余裕を持ちたくて副業を探していた時でした。
          </p>

          <div style={{
            margin: "14px 0", padding: "14px 16px",
            background: G.bgWarm, borderRadius: 10,
            fontSize: 12, lineHeight: 1.95, color: G.ink,
          }}>
            本業に影響が出ない範囲で働きたい。<br />
            でも、できれば収入も増やしたい。<br />
            そんな気持ちで調べていた時に、チャットレディのお仕事を見つけました。
          </div>

          <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.95, color: G.ink }}>
            ただ、実際に調べてみると、求人サイトには「簡単に稼げる」「高収入」といった言葉が多く、逆にネットの口コミには「思ったより稼げなかった」「スタッフ対応が合わなかった」「ノルマが不安だった」といった声もありました。
          </p>
          <p style={{ margin: "12px 0 0", fontSize: 12.5, lineHeight: 1.95, color: G.ink, fontWeight: 700 }}>
            良い情報と悪い情報の差が大きく、何を信じていいのか分からない。
          </p>
          <p style={{ margin: "12px 0 0", fontSize: 12.5, lineHeight: 1.95, color: G.ink }}>
            応募ボタンを押すまで、かなり悩んだことを覚えています。
          </p>
          <p style={{ margin: "14px 0 0", fontSize: 12.5, lineHeight: 1.95, color: G.ink }}>
            だからこそ、まるみえチャトレでは、これから始める人が勢いだけで応募するのではなく、事務所の中身を見て、納得して選べる状態を作りたいと考えています。
          </p>
        </div>

        {/* ===== 大切にしていること ===== */}
        <div style={{ marginTop: 32 }}>
          <SectionKicker>OUR VALUE</SectionKicker>
          <h2 style={{
            margin: "8px 0 14px",
            fontSize: 19, fontWeight: 700, lineHeight: 1.6, color: G.ink,
          }}>まるみえチャトレが<br />大切にしていること。</h2>

          <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.95, color: G.ink }}>
            チャットレディのお仕事は、事務所選びによって働きやすさが大きく変わります。
          </p>
          <p style={{ margin: "12px 0 0", fontSize: 12.5, lineHeight: 1.95, color: G.ink }}>
            報酬率だけでなく、スタッフの対応、身バレ対策、配信環境、サポート体制、未経験者への説明の丁寧さなど、見るべきポイントはたくさんあります。
          </p>
          <p style={{ margin: "12px 0 0", fontSize: 12.5, lineHeight: 1.95, color: G.ink }}>
            まるみえチャトレでは、良い点だけを並べるのではなく、気になる点や注意点も含めて掲載します。
          </p>
          <div style={{
            margin: "16px 0", padding: "14px 16px",
            background: "rgba(168,196,154,0.18)", borderRadius: 10,
            borderLeft: `3px solid ${G.sagePastel}`,
            fontSize: 12.5, lineHeight: 1.85, color: G.ink, fontWeight: 600,
          }}>
            「とにかく応募してほしい」ではなく、<br />
            <span style={{ color: G.sagePastelText, fontWeight: 800 }}>「ちゃんと選んでから決めてほしい」</span>
            <br />
            それが、このサイトの基本方針です。
          </div>
        </div>

        {/* ===== 編集部の3つの約束（画像付き） ===== */}
        <div style={{ marginTop: 32 }}>
          <SectionKicker>EDITORIAL POLICY</SectionKicker>
          <h2 style={{
            margin: "8px 0 18px",
            fontSize: 19, fontWeight: 700, lineHeight: 1.6, color: G.ink,
          }}>編集部の3つの約束。</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {POLICIES.map(p => (
              <div key={p.n} style={{
                background: G.paper, borderRadius: 14, padding: 16,
                border: `1px solid ${G.rule}`,
                display: "flex", gap: 14, alignItems: "flex-start",
              }}>
                {/* イラストアイコン */}
                <div style={{
                  width: 88, height: 88, borderRadius: 12,
                  background: G.sageSoft,
                  overflow: "hidden", flexShrink: 0,
                }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontSize: 20, fontWeight: 800, color: G.sageDeep, lineHeight: 1,
                    fontFamily: "'Manrope', sans-serif", marginBottom: 4,
                  }}>{p.n}</div>
                  <div style={{
                    fontSize: 14, fontWeight: 800, color: G.ink, lineHeight: 1.45,
                  }}>{p.title}</div>
                  <p style={{
                    margin: "8px 0 0", fontSize: 11.5, color: G.inkSoft, lineHeight: 1.85,
                    whiteSpace: "pre-line",
                  }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== 口コミについての考え方 ===== */}
        <div style={{ marginTop: 32 }}>
          <SectionKicker>ABOUT REVIEWS</SectionKicker>
          <h2 style={{
            margin: "8px 0 14px",
            fontSize: 19, fontWeight: 700, lineHeight: 1.6, color: G.ink,
          }}>口コミについての考え方。</h2>

          <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.95, color: G.ink }}>
            ネット上の口コミは、事務所選びの参考になります。<br />
            ただし、口コミだけですべてを判断するのは危険です。
          </p>
          <p style={{ margin: "12px 0 0", fontSize: 12.5, lineHeight: 1.95, color: G.ink }}>
            チャットレディのお仕事は、働く時間、希望する収入、スタッフとの相性、配信スタイルによって感じ方が大きく変わります。
          </p>
          <p style={{ margin: "12px 0 0", fontSize: 12.5, lineHeight: 1.95, color: G.ink }}>
            また、良い事務所であっても、働いている人が積極的に良い口コミを書くとは限りません。
            一方で、不満があった時には口コミとして表に出やすい傾向があります。
          </p>
          <p style={{ margin: "12px 0 0", fontSize: 12.5, lineHeight: 1.95, color: G.ink }}>
            だからこそ、まるみえチャトレでは、口コミだけではなく、事務所の基本情報・サポート体制・報酬条件・身バレ対策・未経験者への説明内容まで確認し、総合的に判断します。
          </p>
        </div>

        {/* ===== よくある質問 FAQ ===== */}
        <div style={{ marginTop: 32 }}>
          <SectionKicker>FAQ</SectionKicker>
          <h2 style={{
            margin: "8px 0 14px",
            fontSize: 19, fontWeight: 700, lineHeight: 1.6, color: G.ink,
          }}>よくある質問。</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} style={{
                background: G.paper, borderRadius: 12, padding: "14px 16px",
                border: `1px solid ${G.rule}`,
              }}>
                <div style={{
                  display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 6,
                }}>
                  <span style={{
                    fontSize: 13, fontWeight: 800, color: G.sageDeep,
                    fontFamily: "'Manrope', sans-serif", flexShrink: 0,
                  }}>Q.</span>
                  <span style={{
                    fontSize: 13, fontWeight: 700, color: G.ink, lineHeight: 1.55,
                  }}>{item.q}</span>
                </div>
                <div style={{
                  display: "flex", gap: 8, alignItems: "flex-start",
                  paddingTop: 6, borderTop: `1px dashed ${G.rule}`,
                }}>
                  <span style={{
                    fontSize: 13, fontWeight: 800, color: G.accentDeep,
                    fontFamily: "'Manrope', sans-serif", flexShrink: 0,
                  }}>A.</span>
                  <span style={{
                    fontSize: 12, color: G.inkSoft, lineHeight: 1.85,
                  }}>{item.a}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== 運営者情報 ===== */}
        <div style={{ marginTop: 32 }}>
          <SectionKicker>SITE INFO</SectionKicker>
          <h2 style={{
            margin: "8px 0 14px",
            fontSize: 19, fontWeight: 700, lineHeight: 1.6, color: G.ink,
          }}>運営者情報。</h2>

          <div style={{
            background: G.paper, borderRadius: 12, padding: "16px 18px",
            border: `1px solid ${G.rule}`,
            fontSize: 12.5, lineHeight: 1.95, color: G.ink,
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: 6, rowGap: 10 }}>
              <span style={{ color: G.inkSoft, fontWeight: 600 }}>サイト名</span>
              <span>まるみえチャトレ</span>
              <span style={{ color: G.inkSoft, fontWeight: 600 }}>運営者</span>
              <span>みなみ</span>
              <span style={{ color: G.inkSoft, fontWeight: 600 }}>編集責任者</span>
              <span>みなみ</span>
              <span style={{ color: G.inkSoft, fontWeight: 600 }}>主な掲載内容</span>
              <span>チャットレディ事務所の比較、口コミ、報酬条件、サポート体制、身バレ対策に関する情報</span>
              <span style={{ color: G.inkSoft, fontWeight: 600 }}>最終更新日</span>
              <span>2026年6月</span>
            </div>
          </div>
        </div>

        {/* ===== CONTACT ===== */}
        <div style={{ marginTop: 30 }}>
          <SectionKicker>CONTACT</SectionKicker>
          <h2 style={{
            margin: "8px 0 14px",
            fontSize: 19, fontWeight: 700, lineHeight: 1.6, color: G.ink,
          }}>お問い合わせ。</h2>

          <Link href="/kuchikomi" style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "14px 16px", borderRadius: 99,
            background: G.paper, color: G.brown,
            border: `1px solid ${G.ruleStrong}`,
            fontSize: 13, fontWeight: 700, textDecoration: "none",
          }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <Icon.Mail size={16} />
              編集部にメッセージを送る
            </span>
            <Icon.Arrow size={13} />
          </Link>
        </div>

      </div>
    </main>
  );
}
