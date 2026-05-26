import Link from "next/link";
import { Icon } from "../Icon";

export const metadata = {
  title: "評価基準について｜まるみえチャトレ",
  description: "まるみえチャトレがなぜその順位をつけたのか、5軸100点満点の採点基準と根拠をすべて公開しています。",
};

// Palette E カラー（インライン使用用）
const G = {
  bg: "#FAFAF5",
  bgWarm: "#F5E8C8",
  paper: "#FFFFFF",
  ink: "#241E16",
  inkSoft: "#87796A",
  inkSofter: "#B5AC9B",
  sage: "#7BAA3F",
  sageDeep: "#587A38",
  sageSoft: "#CDDDB0",
  sagePastel: "#A8C49A",
  mint: "#B5D670",
  cream: "#F8EFE0",
  accent: "#F4B5A0",
  accentDeep: "#E89B85",
  rule: "rgba(36,30,22,0.10)",
};

// 5軸詳細
type AxisIconName = "Shield" | "HeartHand" | "Sprout" | "Briefcase" | "Coin";

const AXIS_DETAIL: {
  id: string;
  label: string;
  max: number;
  color: string;
  iconName: AxisIconName;
  sub: string;
  items: { l: string; pt: number }[];
}[] = [
  {
    id: "safety", label: "安全性", max: 30, color: G.sageDeep,
    iconName: "Shield",
    sub: "身バレ対策・運営情報・アダルト強要の有無",
    items: [
      { l: "身バレ対策の質", pt: 12 },
      { l: "運営情報の公開度", pt: 10 },
      { l: "アダルト強要の有無", pt: 8 },
    ],
  },
  {
    id: "support", label: "サポート", max: 25, color: G.sage,
    iconName: "HeartHand",
    sub: "研修・相談体制・スタッフ対応",
    items: [
      { l: "研修・マニュアル", pt: 10 },
      { l: "相談しやすさ", pt: 8 },
      { l: "スタッフ常駐の体制", pt: 7 },
    ],
  },
  {
    id: "beginner", label: "初心者向け", max: 20, color: "#9BC25E",
    iconName: "Sprout",
    sub: "未経験でも始めやすいか",
    items: [
      { l: "未経験者の受け入れ", pt: 8 },
      { l: "配信デビューまでの導線", pt: 7 },
      { l: "失敗しにくい設計", pt: 5 },
    ],
  },
  {
    id: "work", label: "働きやすさ", max: 15, color: G.mint,
    iconName: "Briefcase",
    sub: "シフト・在宅/通勤・辞めやすさ",
    items: [
      { l: "シフトの自由度", pt: 6 },
      { l: "在宅／通勤の選択肢", pt: 5 },
      { l: "辞めやすさ", pt: 4 },
    ],
  },
  {
    id: "earn", label: "稼ぎやすさ", max: 10, color: G.accent,
    iconName: "Coin",
    sub: "報酬率・保証・稼げる環境",
    items: [
      { l: "報酬率", pt: 4 },
      { l: "保証・最低時給", pt: 3 },
      { l: "稼げる仕組み", pt: 3 },
    ],
  },
];

const PROCESS_STEPS = [
  { n: 1, l: "応募・問い合わせ", d: "匿名で実際に応募。返信内容・対応速度をチェック。" },
  { n: 2, l: "面接・体験",       d: "実際に面接 or 体験を受け、強要・契約条件を確認。" },
  { n: 3, l: "口コミ収集",       d: "匿名フォームで現職・元職の口コミを収集。" },
  { n: 4, l: "5軸採点",         d: "上記＋公式情報を統合して100点満点で採点。" },
  { n: 5, l: "公開・改訂",       d: "更新を月次で実施。スコアが変動したら即時反映。" },
];

export default function HyokaKijunPage() {
  return (
    <main style={{ background: G.bg, color: G.ink, paddingBottom: 40 }}>

      {/* ===== HERO ===== */}
      <section style={{ padding: "28px 22px 18px", maxWidth: 720, margin: "0 auto" }}>
        {/* kicker */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontSize: 10, letterSpacing: 2.2, fontWeight: 800, color: G.ink,
          marginBottom: 12,
        }}>
          <span style={{ width: 18, height: 1.5, background: G.sage, borderRadius: 1 }} />
          HOW WE SCORE
        </div>

        {/* h1 */}
        <h1 style={{
          margin: 0,
          fontSize: "clamp(24px, 6.5vw, 32px)",
          lineHeight: 1.5,
          fontWeight: 800,
          letterSpacing: -0.4,
          color: G.ink,
        }}>
          5軸100点満点。
        </h1>

        {/* sub */}
        <p style={{
          margin: "14px 0 0", fontSize: 12.5, lineHeight: 1.9, color: G.inkSoft,
        }}>
          広告費で順位は変えません。編集部が実際に応募・面接・体験まで行った調査結果と、匿名口コミを元に採点しています。配点と採点項目はすべて公開しています。
        </p>
      </section>

      {/* ===== 横棒ウェイトグラフ ===== */}
      <section style={{ padding: "8px 22px 8px", maxWidth: 720, margin: "0 auto" }}>
        <div style={{
          display: "flex", height: 32, borderRadius: 6, overflow: "hidden",
          boxShadow: "inset 0 0 0 1px rgba(36,30,22,0.06)",
        }}>
          {AXIS_DETAIL.map(a => (
            <div key={a.id} style={{
              flex: a.max,
              background: a.color,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 11, fontWeight: 800,
              color: [G.mint, G.accent].includes(a.color) ? G.ink : "#fff",
            }}>{a.max}</div>
          ))}
        </div>
        <div style={{
          marginTop: 6, display: "flex",
          fontSize: 9, color: G.inkSoft, fontWeight: 600,
        }}>
          {AXIS_DETAIL.map(a => (
            <div key={a.id} style={{ flex: a.max, textAlign: "center", whiteSpace: "nowrap" }}>{a.label}</div>
          ))}
        </div>
      </section>

      {/* ===== 5軸詳細カード ===== */}
      <section style={{
        padding: "24px 22px 0",
        maxWidth: 720,
        margin: "0 auto",
        display: "flex", flexDirection: "column", gap: 14,
      }}>
        {AXIS_DETAIL.map((a, i) => {
          const IconComp = Icon[a.iconName];
          return (
            <div key={a.id} style={{
              background: G.paper, borderRadius: 14, padding: 16,
              border: `1px solid ${G.rule}`,
            }}>
              {/* header */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: "50%",
                  background: `${a.color}22`,
                  color: a.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <IconComp size={22} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontSize: 9.5, letterSpacing: 1.5, fontWeight: 700,
                    color: G.inkSofter, marginBottom: 1,
                  }}>0{i + 1} · AXIS</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                    <span style={{ fontSize: 17, fontWeight: 700, color: G.ink }}>{a.label}</span>
                    <span style={{ fontSize: 13, fontWeight: 800, color: a.color }}>
                      {a.max}pt
                    </span>
                  </div>
                </div>
              </div>

              {/* sub */}
              <div style={{ fontSize: 11, color: G.inkSoft, marginTop: 8, lineHeight: 1.6 }}>
                {a.sub}
              </div>

              {/* 採点項目 */}
              <div style={{ marginTop: 14, paddingTop: 12, borderTop: `1px dashed ${G.rule}` }}>
                <div style={{
                  fontSize: 9.5, letterSpacing: 1.2, fontWeight: 800,
                  color: G.inkSoft, marginBottom: 8,
                }}>採点項目</div>
                {a.items.map((it, j) => (
                  <div key={j} style={{
                    display: "flex", alignItems: "center", gap: 8,
                    padding: "6px 0", fontSize: 12, color: G.ink,
                  }}>
                    <span style={{
                      width: 4, height: 4, borderRadius: "50%",
                      background: a.color, flexShrink: 0,
                    }} />
                    <span style={{ flex: 1 }}>{it.l}</span>
                    <span style={{
                      fontSize: 11, fontWeight: 700, color: G.inkSoft,
                    }}>{it.pt}pt</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* ===== 編集プロセスタイムライン ===== */}
      <section style={{ padding: "32px 22px 0", maxWidth: 720, margin: "0 auto" }}>
        <div style={{
          fontSize: 10, letterSpacing: 2.5, fontWeight: 700, color: G.ink,
          display: "inline-flex", alignItems: "center", gap: 8,
        }}>
          <span style={{ width: 20, height: 1.5, background: G.sage }} />
          PROCESS
        </div>
        <h2 style={{
          margin: "10px 0 16px",
          fontSize: 20, fontWeight: 700, lineHeight: 1.5, color: G.ink,
        }}>編集プロセス</h2>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {PROCESS_STEPS.map((s, i) => (
            <div key={s.n} style={{
              display: "grid", gridTemplateColumns: "32px 1fr",
              gap: 14, alignItems: "flex-start",
              paddingBottom: i < PROCESS_STEPS.length - 1 ? 16 : 0,
              position: "relative",
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: "50%",
                background: G.sage, color: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 12, fontWeight: 800, zIndex: 1,
              }}>{s.n}</div>
              {i < PROCESS_STEPS.length - 1 && (
                <div style={{
                  position: "absolute", top: 32, left: 15, bottom: 0,
                  width: 2, background: G.sageSoft,
                }} />
              )}
              <div style={{ paddingTop: 5 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: G.ink }}>{s.l}</div>
                <div style={{ fontSize: 11.5, color: G.inkSoft, marginTop: 4, lineHeight: 1.7 }}>{s.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== NO PR マニフェスト ===== */}
      <section style={{
        margin: "28px auto 0",
        padding: "0 22px",
        maxWidth: 720,
      }}>
        <div style={{
          padding: "18px 20px",
          background: G.ink, color: "#fff",
          borderRadius: 14,
        }}>
          <div style={{
            fontSize: 9.5, letterSpacing: 2, fontWeight: 700,
            color: G.accent, marginBottom: 6,
          }}>NO PR</div>
          <div style={{
            fontSize: 17, fontWeight: 700, lineHeight: 1.5,
          }}>広告費で順位は変えません。</div>
          <p style={{
            margin: "10px 0 0",
            fontSize: 11.5, lineHeight: 1.85,
            color: "rgba(255,255,255,0.80)",
          }}>
            事務所からの広告費は順位に反映していません。スコアが上下するのは「採点項目の事実が変わったとき」だけです。
          </p>
          <div style={{
            marginTop: 14, fontSize: 10,
            color: "rgba(255,255,255,0.65)", letterSpacing: 0.5,
            display: "flex", justifyContent: "space-between",
            paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.15)",
          }}>
            <span>最終更新 2026.05.20</span>
            <span>次回更新 2026.06</span>
          </div>
        </div>
      </section>

      {/* ===== ランキングへ戻るCTA ===== */}
      <section style={{
        margin: "20px auto 0",
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
