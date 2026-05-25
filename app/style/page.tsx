import Link from "next/link";
import { Icon } from "../Icon";

export const metadata = {
  title: "働き方から探す｜まるみえチャトレ",
  description: "同じチャットレディでも、在宅/通勤、副業/専業、時間帯で「向いている事務所」がまったく違います。あなたに合う働き方から事務所を選べます。",
};

// Palette E カラー（インライン使用用）
const G = {
  bg: "#FAFAF5",
  paper: "#FFFFFF",
  ink: "#3A322A",
  inkSoft: "#87796A",
  inkSofter: "#B5AC9B",
  sage: "#7BAA3F",
  sageDeep: "#4F8225",
  sageSoft: "#CDDDB0",
  cream: "#F8EFE0",
  accent: "#F4B5A0",
  rule: "rgba(58,50,42,0.10)",
};

type StyleIconName = "Home" | "Briefcase" | "Clock" | "Sprout" | "Coin" | "HeartHand";

type StyleItem = {
  href: string;
  l: string;
  n: number;
  sub: string;
  iconName: StyleIconName;
};

// 6 スタイル（handoff の StylePage に準拠）
const STYLES: StyleItem[] = [
  { href: "/style/zaitaku",   l: "在宅で働きたい",   n: 7, sub: "自宅から配信できる事務所",   iconName: "Home" },
  { href: "/style/tsukin",    l: "通勤で働きたい",   n: 9, sub: "完全個室・設備充実",         iconName: "Briefcase" },
  { href: "/jimusho",         l: "副業・夜だけ",     n: 6, sub: "本業と両立しやすい",         iconName: "Clock" },
  { href: "/jimusho",         l: "主婦・スキマで",   n: 5, sub: "短時間 / 日中OK",            iconName: "Sprout" },
  { href: "/jimusho",         l: "本気で稼ぎたい",   n: 4, sub: "時給保証 / 高還元率",        iconName: "Coin" },
  { href: "/style/non-adult", l: "ノンアダルト",     n: 3, sub: "お話のみ / 清楚系",          iconName: "HeartHand" },
];

// その他の働き方（既存ページへの導線維持）
const OTHER_STYLES = [
  { href: "/style/virtual", l: "バーチャル配信", sub: "顔バレほぼゼロ" },
];

export default function StylePage() {
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
          BY STYLE
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
          どう働きたいかで、<br />選ぶ。
        </h1>

        {/* sub */}
        <p style={{
          margin: "14px 0 0", fontSize: 12.5, lineHeight: 1.9, color: G.inkSoft,
        }}>
          同じチャットレディでも、在宅/通勤、副業/専業、時間帯で「向いている事務所」がまったく違います。
        </p>
      </section>

      {/* ===== 6スタイル 2列グリッド ===== */}
      <section style={{
        padding: "0 22px",
        maxWidth: 720, margin: "0 auto",
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10,
      }}>
        {STYLES.map(s => {
          const IconComp = Icon[s.iconName];
          return (
            <Link href={s.href} key={s.l} style={{
              background: G.paper, borderRadius: 14, padding: 14,
              border: `1px solid ${G.rule}`,
              textDecoration: "none", color: G.ink,
              display: "flex", flexDirection: "column", gap: 10,
              minHeight: 150,
            }}>
              {/* icon */}
              <div style={{
                width: 40, height: 40, borderRadius: 11,
                background: G.sageSoft, color: G.sageDeep,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <IconComp size={20} />
              </div>
              {/* label + sub */}
              <div>
                <div style={{
                  fontSize: 14, fontWeight: 800, lineHeight: 1.4, color: G.ink,
                }}>{s.l}</div>
                <div style={{
                  fontSize: 10, color: G.inkSoft, marginTop: 4, lineHeight: 1.5,
                }}>{s.sub}</div>
              </div>
              {/* count footer */}
              <div style={{
                marginTop: "auto",
                fontSize: 11, fontWeight: 700, color: G.sageDeep,
                display: "inline-flex", alignItems: "center", gap: 4,
              }}>
                {s.n}社 <Icon.Arrow size={10} />
              </div>
            </Link>
          );
        })}
      </section>

      {/* ===== その他の働き方（既存ページ導線維持） ===== */}
      <section style={{
        margin: "28px auto 0",
        padding: "0 22px",
        maxWidth: 720,
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontSize: 10, letterSpacing: 2.2, fontWeight: 800, color: G.sageDeep,
          marginBottom: 10,
        }}>
          <span style={{ width: 18, height: 1.5, background: G.sage, borderRadius: 1 }} />
          OTHER
        </div>
        <h2 style={{
          margin: "0 0 12px",
          fontSize: 16, fontWeight: 800, color: G.ink, lineHeight: 1.5,
        }}>
          他の働き方も見てみる
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {OTHER_STYLES.map(o => (
            <Link href={o.href} key={o.l} style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "12px 16px", borderRadius: 12,
              background: G.paper, color: G.ink,
              border: `1px solid ${G.rule}`,
              textDecoration: "none",
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: G.sageSoft, color: G.sageDeep,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <Icon.Star size={16} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 700 }}>{o.l}</div>
                <div style={{ fontSize: 10, color: G.inkSoft, marginTop: 1 }}>{o.sub}</div>
              </div>
              <Icon.Arrow size={12} />
            </Link>
          ))}
        </div>
      </section>

      {/* ===== ランキングCTA ===== */}
      <section style={{
        margin: "28px auto 0",
        padding: "0 22px",
        maxWidth: 720,
      }}>
        <Link href="/jimusho" style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 18px", borderRadius: 99,
          background: G.paper, color: G.ink,
          border: `1.5px solid ${G.rule}`,
          fontSize: 13, fontWeight: 700, textDecoration: "none",
        }}>
          <span>11事務所のランキングを見る</span>
          <Icon.Arrow size={14} />
        </Link>
      </section>

    </main>
  );
}
