import Link from "next/link";
import { Icon } from "../Icon";

export const metadata = {
  title: "運営者プロフィール｜まるみえチャトレ",
  description: "まるみえチャトレの運営者プロフィール。元保育士・現役チャットレディ4年目のみなみが、編集の3つの約束を守って運営しています。",
};

// Palette E カラー（インライン使用用）
const G = {
  bg: "#FAFAF5",
  paper: "#FFFFFF",
  ink: "#241E16",
  inkSoft: "#87796A",
  inkSofter: "#B5AC9B",
  sage: "#7BAA3F",
  sageDeep: "#587A38",
  sageSoft: "#CDDDB0",
  sagePastel: "#A8C49A",
  cream: "#F8EFE0",
  accent: "#F4B5A0",
  accentDeep: "#E89B85",
  rule: "rgba(36,30,22,0.10)",
  ruleStrong: "rgba(36,30,22,0.20)",
};

// 編集ポリシー3カード
const POLICIES = [
  { n: "01", t: "広告費で順位を変えない",        d: "事務所からの広告費は、スコアに一切反映していません。" },
  { n: "02", t: "良い点も気になる点も載せる",   d: "メリットだけのレビューサイトはやめます。両面公開。" },
  { n: "03", t: "採点根拠を公開する",            d: "配点・採点項目・更新日をすべて見られるようにしています。" },
];

// セクションタグ helper（kicker風・線付き）
function SectionTagE({ children }: { children: React.ReactNode }) {
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
          {/* avatar */}
          <div style={{
            width: 80, height: 80, borderRadius: "50%",
            background: G.sageSoft, color: G.sageDeep,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 32, fontWeight: 800,
            flexShrink: 0,
            overflow: "hidden",
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photo-minami.png"
              alt="みなみ"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          {/* name + meta */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontSize: 9.5, letterSpacing: 2.5, fontWeight: 700, color: G.ink,
            }}>EDITOR</div>
            <div style={{
              marginTop: 4,
              fontSize: 22, fontWeight: 800, lineHeight: 1.2, color: G.ink,
            }}>みなみ</div>
            <div style={{
              fontSize: 10.5, color: G.inkSoft, marginTop: 5, lineHeight: 1.6,
            }}>
              元保育士 / 現役チャットレディ<br />
              まるみえチャトレ 運営4年目
            </div>
          </div>
        </div>

        {/* ===== WORKSPACE セクション ===== */}
        <div style={{ marginTop: 26 }}>
          <SectionTagE>WORKSPACE</SectionTagE>
          <h2 style={{
            margin: "8px 0 12px",
            fontSize: 19, fontWeight: 700, lineHeight: 1.5, color: G.ink,
          }}>編集部の机から。</h2>

          {/* desk image placeholder */}
          <div style={{
            width: "100%", aspectRatio: "16/9",
            background: `linear-gradient(135deg, ${G.sageSoft}, ${G.cream})`,
            borderRadius: 12, overflow: "hidden",
            position: "relative",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{
              fontSize: 11, color: G.inkSoft, opacity: 0.7,
            }}>編集部 workspace 写真（差し替え予定）</div>
          </div>

          <p style={{
            margin: "12px 0 0", fontSize: 11.5, color: G.inkSoft, lineHeight: 1.85,
          }}>
            毎月の更新は、ここで作業しています。事務所への応募・面接記録、口コミ整理、採点更新まで、すべて手作業です。
          </p>
        </div>

        {/* ===== BIOGRAPHY セクション ===== */}
        <div style={{ marginTop: 30 }}>
          <SectionTagE>BIOGRAPHY</SectionTagE>
          <h2 style={{
            margin: "8px 0 14px",
            fontSize: 19, fontWeight: 700, lineHeight: 1.5, color: G.ink,
          }}>このサイトを<br />運営している人。</h2>

          <p style={{
            margin: 0, fontSize: 12.5, lineHeight: 1.95, color: G.ink,
            fontFamily: "'Klee One', 'Zen Maru Gothic', sans-serif",
          }}>
            4年前、保育士の仕事だけでは生活が苦しくて、副業を探していた時にチャットレディに出会いました。
            何を信じていいか分からなくて、応募ボタンを押すまでに2週間悩んだのを今でも覚えています。
          </p>

          <p style={{
            margin: "14px 0 0", fontSize: 12, lineHeight: 1.95, color: G.inkSoft,
          }}>
            「ちゃんと選びたい人」が選びやすいサイトを作りたい、という想いで「まるみえチャトレ」を立ち上げました。広告費で順位を変えないこと、良いことも気になることも両面で書くこと、それだけは絶対に守っています。
          </p>
        </div>

        {/* ===== EDITORIAL POLICY セクション ===== */}
        <div style={{ marginTop: 30 }}>
          <SectionTagE>EDITORIAL POLICY</SectionTagE>
          <h2 style={{
            margin: "8px 0 14px",
            fontSize: 19, fontWeight: 700, lineHeight: 1.5, color: G.ink,
          }}>編集の3つの約束。</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {POLICIES.map(p => (
              <div key={p.n} style={{
                background: G.paper, borderRadius: 12, padding: 14,
                border: `1px solid ${G.rule}`,
                display: "flex", gap: 14, alignItems: "flex-start",
              }}>
                <div style={{
                  fontSize: 18, fontWeight: 800, color: G.sageDeep, lineHeight: 1,
                  paddingTop: 2,
                }}>{p.n}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: G.ink }}>{p.t}</div>
                  <div style={{ fontSize: 11, color: G.inkSoft, marginTop: 4, lineHeight: 1.7 }}>{p.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== CONTACT セクション ===== */}
        <div style={{ marginTop: 30 }}>
          <SectionTagE>CONTACT</SectionTagE>
          <h2 style={{
            margin: "8px 0 14px",
            fontSize: 19, fontWeight: 700, lineHeight: 1.5, color: G.ink,
          }}>お問い合わせ。</h2>

          <Link href="/kuchikomi" style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "14px 16px", borderRadius: 99,
            background: G.paper, color: G.ink,
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
