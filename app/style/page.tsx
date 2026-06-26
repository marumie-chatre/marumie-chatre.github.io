import Link from "next/link";
import { Icon } from "../Icon";
import { IconMessageCircle2, IconHome, IconBuilding, IconMask, IconMoon, IconCoins } from "@tabler/icons-react";
import { BreadcrumbSchema } from "../StructuredData";

export const metadata = {
  alternates: { canonical: "/style" },
  title: "働き方から選ぶ",
  description: "在宅・通勤・副業・ノンアダルト（お話し）・本気で稼ぐなど、働き方ごとに「向いている人・確認ポイント・注意点」を整理。自分に無理なく続けられる働き方から事務所を選べます。",
};

// 指定トーン
const G = {
  bg: "#FBFCF6",
  subBg: "#EAF1E0",
  paper: "#FFFFFF",
  ink: "#2C3326",
  text: "#46503E",
  sub: "#8E9882",
  green: "#6FA858",
  greenDeep: "#587A38",
  tan: "#C19A66",
  coral: "#EC9B86",
  line: "rgba(70,80,62,0.12)",
};

// 先に見るポイント（場所・時間・目的）
const POINTS = [
  { n: "01", t: "場所", d: "自宅で落ち着いて働くか、設備やスタッフのいる店舗で働くかを先に整理します。" },
  { n: "02", t: "時間", d: "副業・夜だけ・週末中心など、生活リズムに合う稼働時間を確認します。" },
  { n: "03", t: "目的", d: "安心重視か収入重視かで、見るべき事務所の条件は大きく変わります。" },
];

type StyleItem = {
  href: string; kicker: string; title: string;
  icon: React.ComponentType<{ size?: number; stroke?: number; color?: string }>;
  summary: string; forWhom: string; check: string; caution: string;
  featured?: boolean;
};

// 働き方カード（向いている人・確認ポイント・注意点／CTA文言は全カード統一）
const STYLES: StyleItem[] = [
  {
    href: "/style/non-adult", kicker: "NON-ADULT", title: "ノンアダルト（お話し中心）", icon: IconMessageCircle2, featured: true,
    summary: "お話しメインで安心して始めたい人向け。会話力を活かして無理なく続けられます。",
    forWhom: "お話しだけで続けたい／安心重視の初心者",
    check: "客層・会話指導・運営方針・身バレ対策",
    caution: "「ノンアダ」の線引きは事務所差が大きいので、運営方針は必ず確認を。",
  },
  {
    href: "/style/zaitaku", kicker: "HOME", title: "在宅で働きたい", icon: IconHome,
    summary: "自宅から配信できる事務所。通勤時間をなくしたい人や、人目が気になる人に。",
    forWhom: "自宅で落ち着いて働きたい／通勤が負担",
    check: "機材サポート・身バレ対策・相談体制",
    caution: "一人で抱え込みやすいので、トラブル時の対応速度は必ず確認を。",
  },
  {
    href: "/style/tsukin", kicker: "OFFICE", title: "通勤で働きたい", icon: IconBuilding,
    summary: "個室・照明・衣装などを使って働くスタイル。初心者はサポートを受けやすいのが強み。",
    forWhom: "設備を使いたい／スタッフに相談したい",
    check: "個室環境・清潔感・スタッフとの距離感",
    caution: "店舗で雰囲気の差が大きいため、体験時の空気感も判断材料に。",
  },
  {
    href: "/style/virtual", kicker: "VIRTUAL", title: "バーチャル配信", icon: IconMask,
    summary: "アバターやエフェクトで顔を出さずに配信。顔バレが特に心配な人に向いています。",
    forWhom: "顔バレを徹底的に避けたい／素顔を出したくない",
    check: "アバター対応・エフェクト品質・客層",
    caution: "対応事務所はまだ限られるため、設備や運用実績を確認しましょう。",
  },
  {
    href: "/jimusho", kicker: "SIDE JOB", title: "副業・夜だけ", icon: IconMoon,
    summary: "本業や学校の後に短時間から。シフトの自由度と夜のサポート体制が重要です。",
    forWhom: "週1〜2回から試したい／夜だけ働きたい",
    check: "シフト自由度・短時間稼働・深夜対応",
    caution: "短時間だと成果まで時間がかかるため、初月の目標設定が大切です。",
  },
  {
    href: "/jimusho", kicker: "EARN", title: "本気で稼ぎたい", icon: IconCoins,
    summary: "収入をしっかり伸ばしたい人向け。報酬率だけでなく、教育・分析・イベント体制まで。",
    forWhom: "目標金額がある／改善しながら続けたい",
    check: "指導力・実績・イベント・振り返り体制",
    caution: "高収入をうたう求人ほど、実際の条件とサポートを冷静に確認してください。",
  },
];

const NOTES = [
  "報酬率だけで判断しない",
  "サポート内容を具体的に見る",
  "自分の生活に無理なく合う働き方を選ぶ",
];

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      fontSize: 10, letterSpacing: 2, fontWeight: 800, color: G.tan, textTransform: "uppercase",
    }}>
      <span style={{ width: 22, height: 2, background: G.tan, borderRadius: 2 }} />
      {children}
    </div>
  );
}

export default function StylePage() {
  return (
    <main style={{ background: G.bg, color: G.text, paddingBottom: 40 }}>
      <BreadcrumbSchema items={[
        { name: "トップ", path: "/" },
        { name: "働き方から選ぶ", path: "/style" },
      ]} />

      {/* ===== HERO ===== */}
      <section style={{ padding: "28px 22px 8px", maxWidth: 720, margin: "0 auto" }}>
        <Kicker>Style Guide</Kicker>
        <h1 style={{
          margin: "12px 0 0", fontFamily: "'Zen Maru Gothic', sans-serif",
          fontSize: "clamp(23px, 6.4vw, 32px)", lineHeight: 1.45, fontWeight: 800, color: G.ink,
        }}>
          どう働きたいかで、<br />選ぶ。
        </h1>
        <p style={{ margin: "14px 0 0", fontSize: 13, lineHeight: 1.95, color: G.sub }}>
          在宅・通勤・副業・お話し中心など、チャットレディの働き方はひとつではありません。良い点だけでなく、先に確認したい注意点もまとめています。
        </p>
        {/* 1つに集約した助言（条件より続けやすさ） */}
        <div style={{
          marginTop: 16, padding: "14px 16px", borderRadius: 16,
          background: G.subBg, border: "1px solid rgba(111,168,88,0.18)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 6 }}>
            <span style={{
              width: 26, height: 26, borderRadius: "50%", flexShrink: 0,
              background: G.tan, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
            }}><Icon.Check size={14} /></span>
            <span style={{ fontFamily: "'Zen Maru Gothic', sans-serif", fontWeight: 800, fontSize: 14, color: G.ink }}>
              初心者は「条件」より「続けやすさ」から
            </span>
          </div>
          <p style={{ margin: 0, fontSize: 12, lineHeight: 1.85, color: G.text }}>
            報酬率だけで決めると、サポート不足・身バレ対策・相談しやすさを見落としがち。まずは不安なく続けられる働き方を選ぶのが近道です。
          </p>
        </div>
      </section>

      {/* ===== 先に見るポイント（場所・時間・目的） ===== */}
      <section style={{ padding: "20px 22px 0", maxWidth: 720, margin: "0 auto" }}>
        <Kicker>Check Point</Kicker>
        <h2 style={{
          margin: "10px 0 14px", fontFamily: "'Zen Maru Gothic', sans-serif",
          fontSize: 19, fontWeight: 800, color: G.ink, lineHeight: 1.5,
        }}>
          働き方選びで、先に見るポイント
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 10 }}>
          {POINTS.map(p => (
            <div key={p.n} style={{
              display: "flex", gap: 12, alignItems: "flex-start",
              background: G.paper, border: `1px solid ${G.line}`, borderRadius: 16,
              padding: "14px 16px", boxShadow: "0 2px 10px rgba(70,80,62,0.05)",
            }}>
              <span style={{
                fontFamily: "'Zen Maru Gothic', sans-serif", fontSize: 13, fontWeight: 800,
                color: G.tan, flexShrink: 0, paddingTop: 1,
              }}>{p.n}</span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: G.ink }}>{p.t}</div>
                <div style={{ fontSize: 12, lineHeight: 1.8, color: G.sub, marginTop: 2 }}>{p.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 働き方別に探す ===== */}
      <section style={{ padding: "28px 22px 0", maxWidth: 720, margin: "0 auto" }}>
        <Kicker>Work Style</Kicker>
        <h2 style={{
          margin: "10px 0 6px", fontFamily: "'Zen Maru Gothic', sans-serif",
          fontSize: 19, fontWeight: 800, color: G.ink, lineHeight: 1.5,
        }}>
          働き方別に探す
        </h2>
        <p style={{ margin: "0 0 16px", fontSize: 12, lineHeight: 1.8, color: G.sub }}>
          向いている人・確認ポイント・注意点を入れました。今の生活に一番無理なく入れられるものから見てください。
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {STYLES.map(s => {
            const IconComp = s.icon;
            return (
              <div key={s.title} style={{
                position: "relative",
                background: s.featured
                  ? "linear-gradient(180deg, rgba(234,241,224,0.7), #FFFFFF)"
                  : G.paper,
                border: `1px solid ${s.featured ? "rgba(111,168,88,0.28)" : G.line}`,
                borderRadius: 22, padding: "20px 18px",
                boxShadow: "0 6px 20px rgba(70,80,62,0.06)",
                display: "flex", flexDirection: "column", gap: 14,
              }}>
                {/* top: 線アイコン（背景タイルなし）＋ kicker/title */}
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <span style={{ flexShrink: 0, display: "inline-flex", color: G.green }}>
                    <IconComp size={30} stroke={1.7} />
                  </span>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 10, letterSpacing: 1.4, fontWeight: 800, color: G.tan }}>{s.kicker}</div>
                    {s.featured && (
                      <span style={{
                        display: "inline-block", marginTop: 3, marginBottom: 1,
                        fontSize: 9.5, fontWeight: 800, color: "#fff", background: G.green,
                        padding: "2px 8px", borderRadius: 99,
                      }}>初心者にいちばん安心</span>
                    )}
                    <div style={{ fontFamily: "'Zen Maru Gothic', sans-serif", fontSize: 17, fontWeight: 800, color: G.ink, lineHeight: 1.4 }}>
                      {s.title}
                    </div>
                  </div>
                </div>

                <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.8, color: G.text }}>{s.summary}</p>

                {/* meta: 向いている人 / 確認ポイント */}
                <div style={{ display: "grid", gap: 8 }}>
                  {[["向いている人", s.forWhom], ["確認ポイント", s.check]].map(([label, val]) => (
                    <div key={label} style={{
                      display: "grid", gridTemplateColumns: "82px 1fr", gap: 10,
                      paddingTop: 8, borderTop: "1px dashed rgba(70,80,62,0.14)", fontSize: 12,
                    }}>
                      <span style={{ color: G.greenDeep, fontWeight: 800 }}>{label}</span>
                      <span style={{ color: G.text, fontWeight: 600, lineHeight: 1.7 }}>{val}</span>
                    </div>
                  ))}
                </div>

                {/* caution (coral) */}
                <div style={{
                  display: "flex", gap: 9, alignItems: "flex-start",
                  padding: "11px 13px", borderRadius: 12,
                  background: "rgba(236,155,134,0.11)", fontSize: 11.5, lineHeight: 1.7, color: G.text,
                }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: G.coral, flexShrink: 0, marginTop: 6 }} />
                  <span>{s.caution}</span>
                </div>

                {/* CTA（全カード統一文言） */}
                <Link href={s.href} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8,
                  marginTop: 2, padding: "13px 16px", borderRadius: 14,
                  background: G.green, color: "#fff", fontSize: 13, fontWeight: 800, textDecoration: "none",
                }}>
                  <span>詳しく見てみる</span>
                  <Icon.Arrow size={14} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== 編集部メモ ===== */}
      <section style={{ padding: "28px 22px 0", maxWidth: 720, margin: "0 auto" }}>
        <div style={{
          background: G.subBg, border: "1px solid rgba(111,168,88,0.16)",
          borderRadius: 22, padding: "22px 20px",
        }}>
          <Kicker>Editor&apos;s Note</Kicker>
          <h2 style={{
            margin: "10px 0 8px", fontFamily: "'Zen Maru Gothic', sans-serif",
            fontSize: 18, fontWeight: 800, color: G.ink, lineHeight: 1.5,
          }}>
            迷ったら、無理なく続く順で選ぶ。
          </h2>
          <p style={{ margin: "0 0 14px", fontSize: 12, lineHeight: 1.85, color: G.text }}>
            最初から一番稼げる働き方を選ぼうとすると、条件だけを見て失敗しがち。初心者が不安を減らしながら比較できるよう、働き方ごとの違いを整理しています。
          </p>
          <div style={{ display: "grid", gap: 9 }}>
            {NOTES.map((n, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 10,
                background: "rgba(255,255,255,0.75)", borderRadius: 12, padding: "11px 14px",
                fontSize: 13, fontWeight: 700, color: G.ink,
              }}>
                <span style={{ fontFamily: "'Zen Maru Gothic', sans-serif", fontSize: 12, fontWeight: 900, color: G.tan }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {n}
              </div>
            ))}
          </div>
        </div>

        {/* ランキングへの最終導線 */}
        <Link href="/jimusho" style={{
          marginTop: 16, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          padding: "14px 18px", borderRadius: 99,
          background: G.paper, color: G.ink, border: `1.5px solid ${G.line}`,
          fontSize: 13, fontWeight: 700, textDecoration: "none",
        }}>
          事務所の総合ランキングを見る
          <Icon.Arrow size={14} />
        </Link>
      </section>
    </main>
  );
}
