import Link from "next/link";
import Image from "next/image";
import { Icon } from "../Icon";

export const metadata = {
  title: "お悩み別に事務所を選ぶ｜まるみえチャトレ",
  description: "チャットレディを始めるときの不安は人それぞれ。身バレ・職場バレ・家族バレ・怪しさ・初心者の不安、それぞれの観点から事務所を選べます。元保育士の現役チャットレディが運営しています。",
};

// Palette E カラー（インライン使用用）
const G = {
  bg: "#FAFAF5",
  bgWarm: "#F5E8C8",
  paper: "#FFFFFF",
  ink: "#3A322A",
  inkSoft: "#87796A",
  inkSofter: "#B5AC9B",
  sage: "#7BAA3F",
  sageDeep: "#4F8225",
  sageSoft: "#CDDDB0",
  mint: "#B5D670",
  cream: "#F8EFE0",
  accent: "#F4B5A0",
  accentDeep: "#E89B85",
  rule: "rgba(58,50,42,0.10)",
};

type ConcernIconName = "Shield" | "Briefcase" | "Home" | "Question" | "Sprout";

type Concern = {
  id: string;
  label: string;
  iconName: ConcernIconName;
  image: string;
  tagline: string;
  who: string;
  sub: string;
  body: string;
  color: string;
  tint: string;
};

const CONCERNS: Concern[] = [
  {
    id: "barebure",
    label: "身バレが怖い",
    iconName: "Shield",
    image: "/q-barebure.jpg",
    tagline: "配信中対策",
    who: "配信中の身バレが心配な方",
    sub: "配信を見ている客に特定されないか不安",
    body: "実際の身バレ確率と、マスク・ウィッグ・バーチャル配信などの具体的な対策をまとめました。",
    color: G.sageDeep, tint: G.sageSoft,
  },
  {
    id: "shokuba-bare",
    label: "職場にバレたくない",
    iconName: "Briefcase",
    image: "/q-shokuba-bare.jpg",
    tagline: "副業バレ対策",
    who: "副業として始めたい方",
    sub: "副業がバレるのが何より怖い",
    body: "職場バレの最大原因「住民税」の対策と、マイナンバー誤解、副業に厳しい職種の判断ポイントをまとめました。",
    color: "#5C9A2C", tint: "#E2EBB8",
  },
  {
    id: "kazoku-bare",
    label: "家族にバレたくない",
    iconName: "Home",
    image: "/q-kazoku-bare.jpg",
    tagline: "家族バレ対策",
    who: "家族にバレたくない方",
    sub: "同居家族にバレずに続けたい",
    body: "検索履歴・SNS・声漏れ・部屋など、家庭内で起きやすい身バレの原因と対策をまとめました。",
    color: "#B36947", tint: "#FCE0DC",
  },
  {
    id: "ayashii",
    label: "業界が怪しく見える",
    iconName: "Question",
    image: "/q-ayashii.jpg",
    tagline: "業界の実態",
    who: "業界に不安がある方",
    sub: "「怪しくない？危なくない？」への答え",
    body: "アダルト強要・お話だけで稼げるか・怪しい事務所の見分け方を、現役が正直に答えます。",
    color: "#A88830", tint: "#FBEEC4",
  },
  {
    id: "shoshinsha",
    label: "初心者で不安",
    iconName: "Sprout",
    image: "/q-shoshinsha.jpg",
    tagline: "初心者向け",
    who: "これから始める初心者",
    sub: "これから始める方への総合ガイド",
    body: "初心者がつまずく5つのポイントと、サポートが手厚い事務所、応募〜配信デビューまでの流れをまとめました。",
    color: G.sageDeep, tint: G.sageSoft,
  },
];

export default function QFinderPage() {
  return (
    <main style={{ background: G.bg, color: G.ink, paddingBottom: 40 }}>

      {/* ===== HERO ===== */}
      <section style={{ padding: "28px 22px 18px", maxWidth: 720, margin: "0 auto" }}>
        {/* kicker */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontSize: 10, letterSpacing: 2.2, fontWeight: 800, color: G.sageDeep,
          marginBottom: 12,
        }}>
          <span style={{ width: 18, height: 1.5, background: G.sage, borderRadius: 1 }} />
          5 TOPICS
        </div>

        {/* h1 */}
        <h1 style={{
          margin: 0,
          fontSize: "clamp(22px, 6vw, 30px)",
          lineHeight: 1.5,
          fontWeight: 800,
          letterSpacing: -0.4,
          color: G.ink,
        }}>
          お悩み別に、<br />事務所を選ぶ。
        </h1>

        {/* sub */}
        <p style={{
          margin: "14px 0 0", fontSize: 12.5, lineHeight: 1.9, color: G.inkSoft,
        }}>
          チャットレディを始めるときの不安は、人それぞれ違います。「誰にバレるのが一番怖いか」「どんな働き方をしたいか」によって、選ぶべき事務所も変わります。
        </p>
      </section>

      {/* ===== 5 大型 concern カード ===== */}
      <section style={{
        padding: "0 22px",
        maxWidth: 720,
        margin: "0 auto",
        display: "flex", flexDirection: "column", gap: 12,
      }}>
        {CONCERNS.map(c => {
          const IconComp = Icon[c.iconName];
          return (
            <Link href={`/q/${c.id}`} key={c.id} style={{
              background: G.paper, borderRadius: 14, overflow: "hidden",
              border: `1px solid ${G.rule}`,
              textDecoration: "none", color: G.ink,
              display: "block",
            }}>
              {/* concern cover image */}
              <div style={{
                position: "relative",
                background: c.tint,
                width: "100%", aspectRatio: "16/7",
              }}>
                <Image
                  src={c.image}
                  alt={c.label}
                  fill
                  sizes="(max-width:720px) 100vw, 720px"
                  style={{ objectFit: "cover" }}
                />
                {/* tagline overlay */}
                <div style={{
                  position: "absolute", top: 10, left: 14,
                  fontSize: 9, letterSpacing: 1.8, fontWeight: 800,
                  color: c.color,
                  background: "rgba(255,255,255,0.85)",
                  padding: "2px 8px", borderRadius: 99,
                  pointerEvents: "none",
                }}>
                  {c.tagline.toUpperCase()}
                </div>
              </div>

              {/* card body */}
              <div style={{ padding: 16 }}>
                {/* icon + label */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 11,
                    background: c.tint, color: c.color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <IconComp size={20} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 16, fontWeight: 800, lineHeight: 1.4, color: G.ink }}>
                      {c.label}
                    </div>
                    <div style={{ fontSize: 10, color: G.inkSoft, marginTop: 2 }}>{c.sub}</div>
                  </div>
                </div>

                {/* body text */}
                <div style={{ fontSize: 11.5, color: G.inkSoft, lineHeight: 1.8 }}>{c.body}</div>

                {/* footer: こんな方に + 詳しく見る */}
                <div style={{
                  marginTop: 12, paddingTop: 10,
                  borderTop: `1px dashed ${G.rule}`,
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  gap: 8,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, minWidth: 0 }}>
                    <span style={{
                      fontSize: 9, fontWeight: 700, padding: "2px 7px", borderRadius: 99,
                      background: c.tint, color: c.color,
                      flexShrink: 0,
                    }}>こんな方に</span>
                    <span style={{ fontSize: 10.5, color: G.inkSoft, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {c.who}
                    </span>
                  </div>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: 4,
                    fontSize: 11, fontWeight: 700, color: c.color,
                    flexShrink: 0,
                  }}>
                    詳しく見る <Icon.Arrow size={11} />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </section>

      {/* ===== FROM MINAMI 引用ボックス ===== */}
      <section style={{
        margin: "32px auto 0",
        padding: "0 22px",
        maxWidth: 720,
      }}>
        <div style={{
          padding: "22px",
          background: G.paper, borderRadius: 14,
          border: `1px solid ${G.rule}`,
          position: "relative",
        }}>
          <div style={{
            fontSize: 9.5, letterSpacing: 2.2, fontWeight: 700, color: G.sageDeep,
          }}>FROM MINAMI</div>
          <div style={{
            marginTop: 8,
            fontSize: 17, fontWeight: 700, lineHeight: 1.5, color: G.ink,
          }}>運営者から</div>

          <div style={{ display: "flex", gap: 12, marginTop: 14, alignItems: "flex-start" }}>
            <div style={{
              width: 52, height: 52, borderRadius: "50%",
              background: G.sageSoft, color: G.sageDeep,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 22, fontWeight: 800,
              flexShrink: 0,
            }}>み</div>
            <p style={{
              margin: 0, fontSize: 12, lineHeight: 1.9, color: G.ink,
              fontFamily: "'Klee One', 'Zen Maru Gothic', sans-serif",
            }}>
              4年前、私自身がチャットレディを始めようとしたとき、何を信じていいか分からなくて、応募ボタンを押すまでに2週間悩みました。
            </p>
          </div>

          <p style={{
            margin: "12px 0 0", fontSize: 11.5, lineHeight: 1.9, color: G.inkSoft,
          }}>
            不安の種類は本当にいろいろあって、ひとつのページに全部まとめると、結局どれも浅くなってしまう。だからお悩みごとに記事を分けました。
          </p>

          <div style={{
            marginTop: 12, textAlign: "right",
            fontFamily: "'Klee One', cursive",
            fontSize: 13, color: G.sageDeep, fontWeight: 600,
          }}>— みなみ ✎</div>
        </div>
      </section>

      {/* ===== ランキングへのCTA ===== */}
      <section style={{
        margin: "28px auto 0",
        padding: "0 22px",
        maxWidth: 720,
      }}>
        <div style={{
          padding: "20px 22px",
          background: G.bgWarm, borderRadius: 14,
        }}>
          <div style={{
            fontSize: 15, fontWeight: 700, lineHeight: 1.5, color: G.ink,
          }}>まずは比較ランキングから<br />見たい方へ</div>
          <p style={{
            margin: "8px 0 12px",
            fontSize: 11, color: G.inkSoft, lineHeight: 1.85,
          }}>
            お悩みより先に、まず全体像を把握したい方は掲載事務所の比較ランキングをご覧ください。
          </p>
          <Link href="/jimusho" style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "11px 14px", borderRadius: 99,
            background: G.ink, color: "#fff",
            fontSize: 12, fontWeight: 600, textDecoration: "none",
          }}>
            掲載事務所の比較ランキング
            <Icon.Arrow size={13} />
          </Link>
        </div>
      </section>

    </main>
  );
}
