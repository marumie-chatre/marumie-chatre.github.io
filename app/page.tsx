import Link from "next/link";
import Image from "next/image";
import { reviews } from "./reviews";
import { Icon } from "./Icon";

export const metadata = {
  title: "まるみえチャトレ｜中身で選ぶチャトレ事務所",
  description: "事務所選びで失敗したくない初心者のための口コミサイト。編集部が実際に調査した情報と評価基準をすべて公開しています。",
};

// Design Refresh v2 カラーパレット（Palette E: Natural Kiss 風）
// Fresh Sage × Peach × Warm Yellow × Near-White Cream
const G = {
  bg: "#FAFAF5",            // near-white cream（清潔感UP）
  bgWarm: "#F5E8C8",        // warm yellow band
  paper: "#FFFFFF",
  ink: "#241E16",           // deep sumi
  inkSoft: "#87796A",
  inkSofter: "#B5AC9B",
  sage: "#7BAA3F",          // fresh forest（明るく爽やかな草緑）
  sageDeep: "#587A38",      // refined moss
  sageSoft: "#CDDDB0",      // Natural Kiss mint chip color
  sagePastel: "#A8C49A",    // pastel sage (CTA bg)
  mint: "#B5D670",          // light lime（戻し）
  cream: "#F8EFE0",         // soft cream
  accent: "#F4B5A0",        // light peach
  accentDeep: "#E89B85",    // coral
  warmYellow: "#F5E8C8",    // 第3カラー：黄/クリーム
  warmYellowDeep: "#D5A93C", // 番号バッジ文字色
  rule: "rgba(36,30,22,0.10)",
  ruleStrong: "rgba(36,30,22,0.20)",
};

// データ：評価軸
const AXES = [
  { id: "safe", label: "安全性", max: 30, desc: "アダルト強要なし・身バレ対策・運営年数" },
  { id: "support", label: "サポート", max: 25, desc: "スタッフ・研修・面談の手厚さ" },
  { id: "beginner", label: "初心者向け", max: 20, desc: "未経験のキャストの定着率" },
  { id: "work", label: "働きやすさ", max: 15, desc: "シフトの自由度・施設・通いやすさ" },
  { id: "earn", label: "稼ぎやすさ", max: 10, desc: "報酬率・常連の作りやすさ" },
];

// データ：TOP3ランキング
const RANKING = [
  {
    id: "ft",
    rank: 1,
    name: "フェアリーテイル",
    score: 84,
    tags: ["ノンアダ専門", "身バレ対策◎", "清楚系向け"],
    summary: "稼ぎより安心して長く続けたい・アダルト絶対NGの方",
    breakdown: { safe: 29, support: 20, beginner: 17, work: 12, earn: 6 },
  },
  {
    id: "bright-group",
    rank: 2,
    name: "ブライトグループ",
    score: 84,
    tags: ["老舗20年", "全国140店舗", "税理士サポート"],
    summary: "副業バレ対策で安心して大手で始めたい方",
    breakdown: { safe: 25, support: 20, beginner: 18, work: 13, earn: 8 },
  },
  {
    id: "chatstyle",
    rank: 3,
    name: "チャットスタイル",
    score: 81,
    tags: ["会話指導◎", "バーチャル対応"],
    summary: "接客スキルを磨きながら稼げるようになりたい方",
    breakdown: { safe: 23, support: 21, beginner: 17, work: 12, earn: 8 },
  },
];

// データ：不安カテゴリ
const CONCERNS = [
  { id: "barebure",     icon: "Shield" as const,    label: "身バレが怖い",       sub: "配信中対策", color: G.sageDeep, tint: G.sageSoft },
  { id: "shokuba-bare", icon: "Briefcase" as const, label: "職場にバレたくない", sub: "副業バレ",   color: "#7AAE3A",  tint: "#E2EBB8"  },
  { id: "kazoku-bare",  icon: "Home" as const,      label: "家族にバレたくない", sub: "家族バレ",   color: "#B36947",  tint: G.bgWarm  },
  { id: "ayashii",      icon: "Question" as const,  label: "業界が怪しく見える", sub: "実態解説",   color: "#A88830",  tint: "#FBEEC4"  },
  { id: "shoshinsha",   icon: "Sprout" as const,    label: "初心者で不安",       sub: "総合ガイド", color: G.sage,     tint: G.sageSoft },
];

// データ：クイックナビ
const QUICK_NAV = [
  { href: "/jimusho", icon: "Trophy" as const,   label: "ランキング", sub: "11社を比較",  bg: G.sageSoft, color: G.sage },
  { href: "/area",    icon: "Pin" as const,      label: "エリア",     sub: "全国対応",    bg: "#FCE0CC",  color: "#B36947" },
  { href: "/style",   icon: "Home" as const,     label: "働き方",     sub: "在宅/通勤",   bg: "#FBEEC4",  color: "#A88830" },
  { href: "/q",       icon: "Question" as const, label: "不安から",   sub: "Q&Aで探す",  bg: "#F5DBC9",  color: "#C97755" },
];

// データ：コラム3本
const COLUMNS_PREVIEW = [
  { slug: "jimusho-erabi",  cat: "事務所の選び方", title: "チャットレディ事務所の選び方｜失敗しない5つの基準", time: "5分", date: "2025.05.01" },
  { slug: "mibare-taisaku", cat: "身バレ対策",     title: "配信中に顔がバレる？家族にバレる？よくある疑問に答えます", time: "6分", date: "2025.05.01" },
  { slug: "hoikushi-baito", cat: "副業ガイド",     title: "チャットレディは副業にアリ？会社・職場にバレない全対策", time: "7分", date: "2025.05.01" },
];

// ========== サブコンポーネント ==========

function SectionHead({ kicker, title, note }: { kicker: string; title: string; note?: string }) {
  return (
    <div>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        fontSize: 10, letterSpacing: 2.2, fontWeight: 800, color: G.ink,
      }}>
        <span style={{ width: 18, height: 1.5, background: G.sage, borderRadius: 1 }} />
        {kicker}
      </div>
      <h2 style={{
        margin: "8px 0 0", fontSize: 22, lineHeight: 1.45,
        fontWeight: 700, letterSpacing: -0.2, color: G.ink,
      }}>{title}</h2>
      {note && (
        <p style={{ margin: "6px 0 0", fontSize: 12, color: G.inkSoft, lineHeight: 1.7 }}>{note}</p>
      )}
    </div>
  );
}

function ScoreBar({ value, max, height = 5, bg, fill }: { value: number; max: number; height?: number; bg: string; fill: string }) {
  const pct = (value / max) * 100;
  return (
    <div style={{ background: bg, borderRadius: 99, height, overflow: "hidden" }}>
      <div style={{ width: `${pct}%`, height: "100%", background: fill, borderRadius: 99 }} />
    </div>
  );
}

function RankingCard({ r, idx }: { r: typeof RANKING[0]; idx: number }) {
  const isTop = idx === 0;
  const medalColors = ["#E8B85B", "#C5C0BA", "#D69C71"];
  return (
    <div style={{
      background: G.paper, borderRadius: 20, padding: 16, position: "relative",
      boxShadow: isTop
        ? `0 10px 30px rgba(36,30,22,0.15), 0 0 0 2px ${G.sage}`
        : "0 2px 10px rgba(51,45,34,0.05)",
    }}>
      {isTop && (
        <div style={{
          position: "absolute", top: -12, left: 14,
          padding: "5px 11px 5px 9px", borderRadius: 99,
          background: G.ink, color: "#fff",
          fontSize: 10.5, fontWeight: 800, letterSpacing: 0.3,
          display: "flex", alignItems: "center", gap: 5,
          boxShadow: "0 4px 12px rgba(36,30,22,0.25)",
        }}>
          <Icon.Crown size={13} />
          初心者に最もおすすめ
        </div>
      )}

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        {/* office image - placeholder */}
        <div style={{ position: "relative", flexShrink: 0 }}>
          <div style={{
            width: 56, height: 56, borderRadius: "50%",
            background: G.sageSoft, color: G.sageDeep,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 15, fontWeight: 700, letterSpacing: 1,
          }}>{r.name.slice(0, 2)}</div>
          <div style={{
            position: "absolute", bottom: -4, right: -4,
            width: 24, height: 24, borderRadius: "50%",
            background: medalColors[idx],
            color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 11, fontWeight: 800, border: `2px solid ${G.paper}`,
          }}>{r.rank}</div>
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: G.ink }}>{r.name}</div>
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginTop: 6 }}>
            {r.tags.map(t => (
              <span key={t} style={{
                fontSize: 9.5, fontWeight: 600,
                padding: "2px 7px", borderRadius: 99,
                background: G.mint, color: G.sageDeep,
              }}>{t}</span>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{
            fontSize: 26, fontWeight: 800, lineHeight: 1,
            color: G.ink,
          }}>{r.score}</div>
          <div style={{ fontSize: 9, color: G.inkSoft, marginTop: 2 }}>/100点</div>
        </div>
      </div>

      <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 6 }}>
        {AXES.map(a => {
          const v = r.breakdown[a.id as keyof typeof r.breakdown];
          return (
            <div key={a.id}>
              <div style={{ fontSize: 8.5, color: G.inkSoft, marginBottom: 4, textAlign: "center", fontWeight: 600 }}>
                {a.label}
              </div>
              <ScoreBar value={v} max={a.max} height={5} bg={G.cream} fill={isTop ? G.sage : G.inkSofter} />
              <div style={{ fontSize: 9.5, fontWeight: 700, textAlign: "center", marginTop: 4 }}>{v}</div>
            </div>
          );
        })}
      </div>

      <div style={{
        marginTop: 12, padding: "10px 12px",
        background: isTop ? G.mint : G.bg, borderRadius: 10,
        fontSize: 11.5, lineHeight: 1.65,
        display: "flex", gap: 8, alignItems: "flex-start",
      }}>
        <span style={{
          fontSize: 9.5, fontWeight: 800, color: isTop ? G.sageDeep : G.inkSoft,
          letterSpacing: 0.5, paddingTop: 1, flexShrink: 0,
        }}>こんな方に →</span>
        <span style={{ color: G.ink }}>{r.summary}</span>
      </div>

      <Link href={`/jimusho/${r.id}`} style={{
        marginTop: 12, display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "11px 14px", borderRadius: 10,
        background: isTop ? G.ink : "transparent",
        color: isTop ? "#fff" : G.ink,
        border: isTop ? "none" : `1.5px solid ${G.rule}`,
        fontSize: 12, fontWeight: 700, textDecoration: "none",
      }}>
        <span>詳細・口コミを見る</span>
        <Icon.Arrow size={13} />
      </Link>
    </div>
  );
}

function DonutChart() {
  const colors = ["#82964A", "#A4B559", "#C9D77B", "#E2EBB8", "#F8B5A8"];
  const sizes = [30, 25, 20, 15, 10];
  const total = 100;
  let offset = 0;
  const r = 32, cx = 40, cy = 40, c = 2 * Math.PI * r;
  return (
    <svg width="100" height="100" viewBox="0 0 80 80" style={{ flexShrink: 0 }}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={G.cream} strokeWidth="14" />
      {sizes.map((s, i) => {
        const len = (s / total) * c;
        const el = (
          <circle key={i}
            cx={cx} cy={cy} r={r}
            fill="none" stroke={colors[i]} strokeWidth="14"
            strokeDasharray={`${len} ${c - len}`}
            strokeDashoffset={-offset}
            transform={`rotate(-90 ${cx} ${cy})`} />
        );
        offset += len;
        return el;
      })}
      <text x={cx} y={cy + 1} textAnchor="middle" dominantBaseline="middle"
        fontSize="15" fontWeight="800" fill={G.ink}>100</text>
      <text x={cx} y={cy + 12} textAnchor="middle" dominantBaseline="middle"
        fontSize="6" fill={G.inkSoft} fontWeight="600">点満点</text>
    </svg>
  );
}

// ========== メインコンポーネント ==========

export default function Home() {
  const topReviews = reviews.slice(0, 2);

  return (
    <main style={{ background: G.bg, color: G.ink, paddingBottom: 60 }}>

      {/* ===== HERO 上 CTA（1枚目画像の上に配置） ===== */}
      <section style={{ padding: "16px 16px 4px", maxWidth: 720, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 420, margin: "0 auto" }}>
          <Link href="/jimusho" style={{
            padding: "13px 18px",
            background: G.sagePastel, color: G.ink,
            borderRadius: 14, fontSize: 14, fontWeight: 700,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            boxShadow: "0 4px 14px rgba(36,30,22,0.10)",
            textDecoration: "none",
          }}>
            <span>自分に合う事務所を探す</span>
            <span style={{
              width: 28, height: 28, borderRadius: "50%",
              background: G.accent, color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}><Icon.Arrow size={13} /></span>
          </Link>
          <Link href="/jimusho" style={{
            padding: "11px 18px",
            background: "transparent", color: G.ink,
            border: `1.5px solid ${G.ruleStrong}`, borderRadius: 14,
            fontSize: 13, fontWeight: 700, textAlign: "center",
            textDecoration: "none",
          }}>11事務所のランキング</Link>
        </div>
      </section>

      {/* ===== HERO 本体（文字 ← → 写真 横並び・PC/SP 整合） ===== */}
      <section className="top-hero-flex">
        <div className="top-hero-flex-text">
          {/* badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "5px 10px 5px 6px", borderRadius: 999,
            background: G.cream,
            fontSize: 10, fontWeight: 700, color: G.ink,
            alignSelf: "flex-start",
            maxWidth: "100%",
          }}>
            <span style={{
              width: 16, height: 16, borderRadius: "50%",
              background: G.sageDeep, color: "#fff",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}><Icon.Check size={10} /></span>
            <span style={{
              overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
            }}>編集部が11事務所を実地調査</span>
          </div>

          {/* h1 */}
          <h1 style={{
            margin: "12px 0 0",
            fontSize: "clamp(18px, 5.5vw, 30px)",
            lineHeight: 1.45,
            fontWeight: 800,
            letterSpacing: -0.5,
            color: G.ink,
          }}>
            中身で選ぶ、<br />
            チャトレ事務所の<br />口コミサイト。
          </h1>

          {/* sub */}
          <p style={{
            margin: "10px 0 0",
            fontSize: "clamp(10.5px, 2.8vw, 13px)",
            lineHeight: 1.85, color: G.inkSoft,
            fontWeight: 500,
          }}>
            初心者でも失敗しないために。<br />
            良い点も気になる点も、<br />まるっと公開して
          </p>
        </div>
        <div className="top-hero-flex-photo">
          <Image
            src="/top-hero-photo.jpg"
            alt="まるみえチャトレ"
            fill
            priority
            sizes="(max-width:720px) 42vw, 480px"
          />
        </div>
      </section>

      {/* ===== EDITOR'S PROMISE（差し替え画像版） ===== */}
      <section style={{
        marginTop: 20,
        padding: "16px 16px 20px",
        background: G.bg,
      }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <Image
            src="/editor-promise.jpg"
            alt="EDITOR'S PROMISE - ちゃんと選んでほしいから、全部かいてます。良い点も気になる点もどちらも掲載／採点基準をすべて公開／広告費で順位は変えません"
            width={1240}
            height={1240}
            sizes="(max-width:720px) 100vw, 640px"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: 14,
            }}
          />
        </div>
      </section>

      {/* ===== QUICK NAV「あなたに合う探し方」（葉模様背景） ===== */}
      <section className="top-find-section">
        <div className="top-find-bg-leaves" />
        <div className="top-find-inner">
          <SectionHead kicker="HOW TO FIND" title="あなたに合う探し方" />
          <div style={{
            marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10,
          }}>
            {QUICK_NAV.map((it) => {
              const I = Icon[it.icon];
              return (
                <Link href={it.href} key={it.href} style={{
                  background: G.paper, borderRadius: 16, padding: 14,
                  boxShadow: "0 2px 10px rgba(51,45,34,0.04)",
                  display: "flex", alignItems: "center", gap: 12,
                  textDecoration: "none", color: G.ink,
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: it.bg, color: it.color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <I size={22} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13.5, fontWeight: 800 }}>{it.label}</div>
                    <div style={{ fontSize: 10.5, color: G.inkSoft, marginTop: 2 }}>{it.sub}</div>
                  </div>
                  <Icon.Arrow size={14} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== RANKING ===== */}
      <section style={{ padding: "36px 20px 0", maxWidth: 760, margin: "0 auto" }}>
        <SectionHead
          kicker="RANKING"
          title="編集部おすすめ事務所"
          note="広告費ではなく、公開している評価基準で順位を決めています。"
        />
        <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 14 }}>
          {RANKING.map((r, i) => (
            <RankingCard key={r.id} r={r} idx={i} />
          ))}
        </div>
        <Link href="/jimusho" style={{
          marginTop: 18, width: "100%",
          padding: 14, background: G.paper, color: G.ink,
          border: `1.5px solid ${G.ruleStrong}`, borderRadius: 14,
          fontSize: 13, fontWeight: 700,
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          textDecoration: "none",
        }}>
          全11社を比較する
          <Icon.Arrow size={14} />
        </Link>
      </section>

      {/* ===== AXES ===== */}
      <section style={{ padding: "40px 20px 0", maxWidth: 760, margin: "0 auto" }}>
        <SectionHead
          kicker="EVALUATION"
          title="5つの基準で公平に"
          note="配点の重みをすべて公開しています。"
        />
        <div style={{
          marginTop: 18, background: G.paper, borderRadius: 20,
          padding: 18, boxShadow: "0 2px 12px rgba(51,45,34,0.05)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <DonutChart />
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
              {AXES.map((a, i) => (
                <div key={a.id} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11 }}>
                  <span style={{
                    width: 10, height: 10, borderRadius: 3,
                    background: ["#82964A", "#A4B559", "#C9D77B", "#E2EBB8", "#F8B5A8"][i],
                  }} />
                  <span style={{ flex: 1, fontWeight: 600 }}>{a.label}</span>
                  <span style={{ fontWeight: 800 }}>
                    {a.max}<span style={{ color: G.inkSoft, fontWeight: 500, fontSize: 9 }}>pt</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 14, paddingTop: 14, borderTop: `1px solid ${G.rule}` }}>
            {AXES.map((a, i) => {
              const IconComp = [Icon.Shield, Icon.HeartHand, Icon.Sprout, Icon.Briefcase, Icon.Coin][i];
              const c = ["#82964A", "#A4B559", "#C9D77B", "#E2EBB8", "#F8B5A8"][i];
              return (
                <div key={a.id} style={{
                  display: "grid", gridTemplateColumns: "36px 1fr",
                  gap: 12, alignItems: "flex-start", padding: "10px 0",
                  borderBottom: i < AXES.length - 1 ? `1px dashed ${G.rule}` : "none",
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: `${c}22`, color: c,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <IconComp size={20} />
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                      <span style={{ fontSize: 13, fontWeight: 800 }}>{a.label}</span>
                      <span style={{ fontSize: 11, fontWeight: 700, color: c }}>{a.max}pt</span>
                    </div>
                    <div style={{ fontSize: 10.5, color: G.inkSoft, marginTop: 2, lineHeight: 1.5 }}>{a.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Link href="/hyoka-kijun" style={{
          marginTop: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          padding: 12, border: `1px solid ${G.rule}`, borderRadius: 99,
          fontSize: 12, fontWeight: 600, color: G.ink, textDecoration: "none",
        }}>
          評価基準の詳細を見る
          <Icon.Arrow size={12} />
        </Link>
      </section>

      {/* ===== CONCERN PREVIEW ===== */}
      <section style={{ padding: "40px 20px 0", maxWidth: 760, margin: "0 auto" }}>
        <SectionHead
          kicker="WORRIES"
          title="不安から、探す。"
          note="始める前の心配ごとに、まっすぐ答える記事を用意しています。"
        />
        <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
          {CONCERNS.map(c => {
            const I = Icon[c.icon];
            return (
              <Link href={`/q/${c.id}`} key={c.id} style={{
                display: "flex", alignItems: "center", gap: 12,
                background: G.paper, borderRadius: 12, padding: "12px 14px",
                border: `1px solid ${G.rule}`,
                textDecoration: "none", color: G.ink,
              }}>
                <div style={{
                  width: 38, height: 38, borderRadius: "50%",
                  background: c.tint, color: c.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}><I size={19} /></div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 700 }}>{c.label}</div>
                  <div style={{ fontSize: 10, color: G.inkSoft, marginTop: 2 }}>{c.sub}</div>
                </div>
                <Icon.Arrow size={12} />
              </Link>
            );
          })}
        </div>
        <Link href="/q" style={{
          marginTop: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          padding: 12, border: `1px solid ${G.rule}`, borderRadius: 99,
          fontSize: 12, fontWeight: 600, color: G.ink, textDecoration: "none",
        }}>
          すべての不安カテゴリを見る
          <Icon.Arrow size={12} />
        </Link>
      </section>

      {/* ===== REVIEWS ===== */}
      <section style={{ padding: "40px 20px 0", maxWidth: 760, margin: "0 auto" }}>
        <SectionHead
          kicker="REVIEWS"
          title="リアルな声を、両面から"
          note="良かった点も、気になった点も。"
        />
        <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          {topReviews.map((r) => (
            <div key={r.id} style={{
              background: G.paper, borderRadius: 16, padding: 16,
              boxShadow: "0 2px 10px rgba(51,45,34,0.04)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div style={{
                  width: 38, height: 38, borderRadius: "50%",
                  background: G.sageSoft, color: G.sageDeep,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 14, fontWeight: 700, flexShrink: 0,
                }}>{r.office.slice(0, 1)}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", gap: 5, alignItems: "center", flexWrap: "wrap" }}>
                    <span style={{
                      fontSize: 9.5, padding: "2px 7px", borderRadius: 99,
                      background: G.mint, color: G.sageDeep, fontWeight: 700,
                    }}>{r.style}</span>
                    <span style={{ fontSize: 12.5, fontWeight: 800 }}>{r.office}</span>
                  </div>
                  <div style={{ fontSize: 10, color: G.inkSoft, marginTop: 3 }}>
                    {r.period}
                  </div>
                </div>
                <div style={{ display: "flex", gap: 1.5 }}>
                  {[1, 2, 3, 4, 5].map(s => (
                    <Icon.Star key={s} size={11} fill={s <= r.rating ? G.accent : G.cream} />
                  ))}
                </div>
              </div>

              <div style={{
                padding: "10px 12px", borderRadius: 10,
                background: "rgba(107, 144, 128, 0.08)",
                fontSize: 11.5, lineHeight: 1.75, color: G.ink,
              }}>
                <div style={{ fontSize: 9, fontWeight: 800, color: G.sageDeep, letterSpacing: 1, marginBottom: 4 }}>
                  GOOD
                </div>
                {r.good}
              </div>
              <div style={{
                marginTop: 8, padding: "10px 12px", borderRadius: 10,
                background: "rgba(232, 149, 121, 0.10)",
                fontSize: 11.5, lineHeight: 1.75, color: G.ink,
              }}>
                <div style={{ fontSize: 9, fontWeight: 800, color: G.accentDeep, letterSpacing: 1, marginBottom: 4 }}>
                  気になった点
                </div>
                {r.bad}
              </div>
            </div>
          ))}
        </div>
        <Link href="/kuchikomi" style={{
          marginTop: 16, width: "100%",
          padding: 13, background: "transparent",
          border: `1.5px solid ${G.ruleStrong}`, borderRadius: 14,
          fontSize: 12.5, fontWeight: 700, color: G.ink,
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          textDecoration: "none",
        }}>
          {reviews.length}件の口コミをもっと見る
          <Icon.Arrow size={13} />
        </Link>
      </section>

      {/* ===== COLUMN PREVIEW ===== */}
      <section style={{ padding: "40px 20px 0", maxWidth: 760, margin: "0 auto" }}>
        <SectionHead
          kicker="COLUMN"
          title="読み物で、もう一歩深く。"
          note="編集部が書く、応募前後の不安に答える記事。"
        />
        <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
          {COLUMNS_PREVIEW.map(c => (
            <Link href={`/column/${c.slug}`} key={c.slug} style={{
              display: "flex", gap: 12,
              background: G.paper, borderRadius: 12, padding: 10,
              border: `1px solid ${G.rule}`,
              textDecoration: "none", color: G.ink,
            }}>
              <div style={{
                width: 84, height: 70, borderRadius: 8, flexShrink: 0,
                background: `linear-gradient(135deg, ${G.sageSoft}, ${G.cream})`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Icon.Pencil size={22} color={G.sage} />
              </div>
              <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                <div style={{
                  fontSize: 9, fontWeight: 700, letterSpacing: 0.8,
                  color: G.sageDeep, marginBottom: 5,
                }}>{c.cat}</div>
                <div style={{ fontSize: 12.5, fontWeight: 700, lineHeight: 1.5 }}>
                  {c.title}
                </div>
                <div style={{ marginTop: 5, fontSize: 9.5, color: G.inkSoft, display: "flex", gap: 10 }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                    <Icon.Clock size={10} /> {c.time}
                  </span>
                  <span>{c.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/column" style={{
          marginTop: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          padding: 12, border: `1px solid ${G.rule}`, borderRadius: 99,
          fontSize: 12, fontWeight: 600, color: G.ink, textDecoration: "none",
        }}>
          コラムをもっと見る
          <Icon.Arrow size={12} />
        </Link>
      </section>

      {/* ===== CTA ===== */}
      <section style={{ padding: "40px 20px 0", maxWidth: 760, margin: "0 auto" }}>
        <div style={{
          position: "relative", overflow: "hidden",
          background: G.ink,
          borderRadius: 24, padding: "28px 22px", color: "#fff",
        }}>
          <svg width="140" height="140" viewBox="0 0 140 140" style={{
            position: "absolute", top: -30, right: -30, opacity: 0.18,
          }}>
            <path d="M 20 120 C 20 50 60 10 130 10 C 130 80 90 120 20 120 Z" fill="#fff" />
          </svg>
          <div style={{ position: "relative" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "5px 11px", borderRadius: 99,
              background: G.accent, color: "#fff",
              fontSize: 9.5, letterSpacing: 1.8, fontWeight: 800,
            }}>
              <Icon.Pencil size={11} />
              FOR YOU
            </div>
            <h3 style={{ margin: "12px 0 8px", fontSize: 22, lineHeight: 1.45, fontWeight: 700 }}>
              働いた経験がある方へ
            </h3>
            <p style={{ margin: 0, fontSize: 12, lineHeight: 1.9, color: "rgba(255,255,255,0.92)" }}>
              匿名・個人情報不要で投稿できます。<br />
              良かった点はもちろん、気になった点も歓迎です。
            </p>
            <Link href="/kuchikomi" style={{
              marginTop: 18, width: "100%", padding: 14,
              background: "#fff", color: G.ink,
              borderRadius: 12, fontSize: 13, fontWeight: 800,
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              textDecoration: "none",
            }}>
              <Icon.Pencil size={14} />
              匿名で口コミを書く
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
