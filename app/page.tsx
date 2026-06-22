import Link from "next/link";
import Image from "next/image";
import { reviews } from "./reviews";
import { Icon } from "./Icon";
import ArticleCarousel from "./ArticleCarousel";

export const metadata = {
  title: "まるみえチャトレ｜中身で選ぶチャトレ事務所",
  description: "事務所選びで失敗したくない初心者のための口コミサイト。編集部が実際に調査した情報と評価基準をすべて公開しています。",
  alternates: {
    canonical: "/",
  },
};

// Design Refresh v2 カラーパレット（Palette E: Natural Kiss 風）
// Fresh Sage × Peach × Warm Yellow × Near-White Cream
const G = {
  bg: "#FBF7F0",            // タイトル画像の実 bg（#FAF6EE〜#FBF7F1 平均）に合わせた淡いクリーム
  bgWarm: "#F5E8C8",        // warm yellow band
  paper: "#FFFFFF",
  ink: "#2E1F10",           // 濃い目のブラウン（warm dark brown）
  inkSoft: "#87796A",
  inkSofter: "#B5AC9B",
  sage: "#7BAA3F",          // fresh forest
  sageDeep: "#587A38",      // refined moss
  sageSoft: "#CDDDB0",      // mint chip
  sagePastel: "#A8C49A",    // pastel sage (CTA bg)
  sagePastelText: "#8FAD7F", // パステル緑（文字強調用・読みやすい彩度）
  mint: "#B5D670",
  cream: "#F8EFE0",
  accent: "#F4B5A0",
  accentDeep: "#E89B85",
  warmYellow: "#F5E8C8",
  warmYellowDeep: "#D5A93C",
  rule: "rgba(46,31,16,0.10)",
  ruleStrong: "rgba(46,31,16,0.20)",
};

// データ：評価軸
const AXES = [
  { id: "safe",     label: "安全性",     max: 30, desc: "身バレ対策やプライバシーを守る姿勢があるか見ていきます。" },
  { id: "support",  label: "サポート",   max: 25, desc: "スタッフは悩みや成長に寄り添ってくれるか見ていきます。" },
  { id: "beginner", label: "初心者向け", max: 20, desc: "未経験でも安心して始められる体制があるか見ていきます。" },
  { id: "work",     label: "働きやすさ", max: 15, desc: "無理なく続けられる環境があるか見ていきます。" },
  { id: "earn",     label: "稼ぎやすさ", max: 10, desc: "売上を伸ばしやすい環境があるか見ていきます。" },
];

// データ：TOP3ランキング
const RANKING = [
  {
    id: "ft",
    rank: 1,
    name: "フェアリーテイル",
    score: 89,
    tags: ["ノンアダルト専門", "身バレ対策◎", "会話から見せ方までサポート"],
    summary: "見た目を磨いて会話力も身に着けられるサポートを求めてる方",
    breakdown: { safe: 29, support: 20, beginner: 19, work: 14, earn: 7 },
  },
  {
    id: "bright-group",
    rank: 2,
    name: "ブライトグループ",
    score: 83,
    tags: ["老舗20年", "全国140店舗", "税理士サポート"],
    summary: "大手・老舗店のサポートを求めてる方。",
    breakdown: { safe: 25, support: 20, beginner: 17, work: 13, earn: 8 },
  },
  {
    id: "chatstyle",
    rank: 3,
    name: "チャットスタイル",
    score: 81,
    tags: ["会話指導◎", "バーチャル対応"],
    summary: "安定したサポートを求める方。",
    breakdown: { safe: 23, support: 21, beginner: 17, work: 12, earn: 8 },
  },
];

// データ：お悩みカテゴリ（チップ表示用・/q への入口）
const WORRIES_CHIPS = [
  "すべて",
  "身バレ",
  "家族バレ",
  "副業バレ",
  "初心者・選び方",
  "業界の不安",
];

// データ：クイックナビ（単色 sage テーマで統一）
const QUICK_NAV = [
  { href: "/jimusho", icon: "Trophy" as const,   label: "ランキングから探す" },
  { href: "/area",    icon: "Pin" as const,      label: "一番近い事務所を探す" },
  { href: "/style",   icon: "Home" as const,     label: "働き方から探す" },
  { href: "/q",       icon: "Question" as const, label: "お悩みからさがす" },
];

// データ：TOP「読みもの」カルーセル（先頭＝最新記事＝フィーチャー、以降を横スライド）
const ARTICLES = [
  { href: "/yougo/houshu-60", category: "お金の話", title: "報酬率「最大60%」って本当？数字でわかる、安心できる事務所選び", readTime: "約3分", date: "2026.06.23", accent: "#D5A93C", accentSoft: "#F5E8C8" },
  { href: "/q/jimusho-erabi", category: "選び方", title: "チャットレディ事務所の選び方｜失敗しない見極め方", readTime: "約5分", date: "2026.06.19", accent: "#587A38", accentSoft: "#CDDDB0", image: "/col-jimusho-erabi.png" },
  { href: "/style/non-adult", category: "働き方", title: "ノンアダルト専門で、安心して始めるには", readTime: "約7分", date: "2026.05.14", accent: "#7BAA3F", accentSoft: "#CDDDB0" },
  { href: "/q/mibare-taisaku", category: "身バレ", title: "身バレのよくある疑問に、ぜんぶ答えます", readTime: "約6分", date: "2026.05.06", accent: "#E89B85", accentSoft: "#F8DCD2", image: "/col-mibare-taisaku.png" },
  { href: "/q/shokuba-bare", category: "副業バレ", title: "職場・会社にバレない副業の始め方", readTime: "約7分", date: "2026.05.07", accent: "#8FAD7F", accentSoft: "#E2EBB8" },
  { href: "/yougo", category: "用語", title: "チャットレディ用語辞典｜迷う言葉をやさしく解説", readTime: "約8分", date: "2026.05.16", accent: "#A8893C", accentSoft: "#F5E8C8" },
];

// ========== サブコンポーネント ==========

function SectionHead({ kicker, title, note, image }: {
  kicker: string; title: string; note?: string; image?: string;
}) {
  // 画像版：SP は edge-to-edge（100vw）、PC は親コンテナ幅で固定
  if (image) {
    return (
      <div className="top-section-title-img">
        <Image
          src={image}
          alt={title}
          width={2172}
          height={560}
          sizes="(max-width:640px) 100vw, 760px"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            maskImage: "linear-gradient(to bottom, #000 85%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, #000 85%, transparent 100%)",
          }}
        />
      </div>
    );
  }
  // テキスト版（既存）
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
        <p style={{ margin: "10px 0 0", fontSize: 12, color: G.inkSoft, lineHeight: 1.7 }}>{note}</p>
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
    <Link
      href={`/jimusho/${r.id}`}
      aria-label={`${r.name} の詳細・口コミを見る`}
      style={{
        display: "block",
        background: G.paper, borderRadius: 20, padding: 16, position: "relative",
        boxShadow: isTop
          ? `0 6px 22px rgba(46,31,16,0.08), 0 0 0 1.5px ${G.sagePastel}`
          : "0 2px 10px rgba(46,31,16,0.04)",
        textDecoration: "none", color: "inherit", cursor: "pointer",
      }}
    >
      {isTop && (
        <div style={{
          position: "absolute", top: -14, left: 16,
          display: "flex", justifyContent: "flex-start", pointerEvents: "none",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "5px 14px", borderRadius: 99,
            background: "linear-gradient(135deg, #E8B85B 0%, #C9923F 100%)",
            color: "#fff",
            fontSize: 11, fontWeight: 800, letterSpacing: 1,
            boxShadow: "0 4px 12px rgba(180,135,50,0.32)",
          }}>
            初心者に最もおすすめ
          </div>
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
                background: G.sageSoft, color: G.sageDeep,
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
              <ScoreBar value={v} max={a.max} height={5} bg={G.cream} fill={isTop ? G.sagePastelText : G.inkSofter} />
              <div style={{ fontSize: 9.5, fontWeight: 700, textAlign: "center", marginTop: 4 }}>{v}</div>
            </div>
          );
        })}
      </div>

      <div style={{
        marginTop: 12, padding: "10px 12px",
        background: isTop ? G.sageSoft : G.bg, borderRadius: 10,
        fontSize: 11.5, lineHeight: 1.65,
        display: "flex", gap: 8, alignItems: "flex-start",
      }}>
        <span style={{
          fontSize: 9.5, fontWeight: 800, color: isTop ? G.sageDeep : G.inkSoft,
          letterSpacing: 0.5, paddingTop: 1, flexShrink: 0,
        }}>こんな方に →</span>
        <span style={{ color: G.ink }}>{r.summary}</span>
      </div>

      {/* 視覚装飾としての「詳細を見る」ボタン（カード全体がリンクなので入れ子リンクは作らない） */}
      <div aria-hidden="true" style={{
        marginTop: 12, display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "11px 14px", borderRadius: 10,
        background: isTop ? G.sagePastel : "transparent",
        color: isTop ? "#5C3D1F" : G.ink,
        border: isTop ? "none" : `1.5px solid ${G.rule}`,
        fontSize: 12, fontWeight: 700,
      }}>
        <span>詳細・口コミを見る</span>
        <Icon.Arrow size={13} />
      </div>
    </Link>
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
  const topReviews = reviews.filter(r => !r.hideInInitial).slice(0, 2);

  return (
    <main style={{ background: G.bg, color: G.ink, paddingBottom: 60 }}>

      {/* ===== ヒーローカード（画像＋CTA を1枚のカードに） ===== */}
      <section style={{ padding: 0 }}>
        <div className="top-hero-card">
          {/* 画像エリア（テキストオーバーレイ＋下端グラデ） */}
          <div className="top-hero-card-img">
            <Image
              src="/top-hero-photo.jpg"
              alt="まるみえチャトレ"
              fill
              priority
              sizes="(max-width:640px) 100vw, 608px"
            />
            <div className="top-hero-card-text">
              <div className="top-hero-card-text-content">
                {/* badge */}
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "4px 10px 4px 6px", borderRadius: 999,
                  background: "#fff",
                  boxShadow: "0 2px 8px rgba(36,30,22,0.08)",
                  fontSize: "clamp(9.5px, 2.5vw, 11px)", fontWeight: 700, color: G.ink,
                  maxWidth: "100%",
                }}>
                  <span style={{
                    width: 14, height: 14, borderRadius: "50%",
                    background: G.sageDeep, color: "#fff",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}><Icon.Check size={9} /></span>
                  <span>編集部が実地調査</span>
                </div>

                {/* h1 - 「中身」「口コミ」をパステル緑で強調（EDITOR'S PROMISE と統一） */}
                <h1 style={{
                  margin: "10px 0 0",
                  fontSize: "clamp(22px, 6.2vw, 32px)",
                  lineHeight: 1.45,
                  fontWeight: 800,
                  letterSpacing: -0.3,
                  color: G.ink,
                }}>
                  <span style={{ color: G.sagePastelText }}>中身</span>で選ぶ、<br />
                  チャトレ事務所の<br />
                  <span style={{ color: G.sagePastelText }}>口コミ</span>サイト。
                </h1>

                {/* sub */}
                <p style={{
                  margin: "10px 0 0",
                  fontSize: "clamp(10px, 2.5vw, 12px)",
                  lineHeight: 1.8, color: G.ink,
                  fontWeight: 500,
                }}>
                  初心者でも失敗しないために。<br />
                  良い点も気になる点も、<br />
                  まるっと公開して
                </p>
              </div>
            </div>
          </div>

          {/* CTA エリア（カード内・薄緑背景でグラデと自然繋ぎ） */}
          <div className="top-hero-card-cta">
            <Link href="/jimusho" className="top-hero-cta-primary">
              <span>自分に合う事務所を探す</span>
              <span className="top-hero-cta-primary-arrow">
                <Icon.Arrow size={13} />
              </span>
            </Link>
            <Link href="/jimusho" className="top-hero-cta-sub">
              事務所のランキングをみる
            </Link>
          </div>
        </div>
      </section>

      {/* ===== QUICK NAV「あなたに合う探し方」（葉模様背景） ===== */}
      <section className="top-find-section">
        <div className="top-find-inner">
          <SectionHead kicker="HOW TO FIND" title="あなたに合う探し方" image="/top-title-find.png" />
          <div style={{
            marginTop: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10,
          }}>
            {QUICK_NAV.map((it) => {
              const I = Icon[it.icon];
              return (
                <Link href={it.href} key={it.href} style={{
                  background: G.paper, borderRadius: 16, padding: 14,
                  boxShadow: "0 2px 10px rgba(46,31,16,0.04)",
                  display: "flex", alignItems: "center", gap: 10,
                  textDecoration: "none", color: G.ink,
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 11,
                    background: G.sageSoft, color: G.sageDeep,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <I size={20} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0, fontSize: 12.5, fontWeight: 800, lineHeight: 1.35 }}>
                    {it.label}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== RANKING ===== */}
      <section style={{ padding: "24px 20px 0", maxWidth: 760, margin: "0 auto" }}>
        <SectionHead
          kicker="RANKING"
          title="編集部おすすめ事務所"
          note="広告費ではなく、公開している評価基準で順位を決めています。"
          image="/top-title-ranking.png"
        />
        <div style={{ marginTop: 8, textAlign: "right" }}>
          <Link href="/hyoka-kijun" style={{
            display: "inline-flex", alignItems: "center", gap: 4,
            fontSize: 12, fontWeight: 700, color: G.ink,
            borderBottom: `1px solid ${G.ink}`, paddingBottom: 1,
            textDecoration: "none",
          }}>
            → 先に評価基準を確認する
          </Link>
        </div>
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
          全部比較する
          <Icon.Arrow size={14} />
        </Link>
      </section>

      {/* ===== EDITOR'S PROMISE（葉模様bg + AXES の真上に配置） ===== */}
      <section style={{
        background: "#F8FCF7",
        padding: "14px 22px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        marginTop: 26,
      }}>
        {/* 葉模様 bg overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/bg-leaves-pattern.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.55,
          pointerEvents: "none",
          zIndex: 0,
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
        {/* Kicker：＼ EDITOR'S PROMISE ／ */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.5em",
          fontSize: 10.5, letterSpacing: 2.5, fontWeight: 700,
          color: G.sageDeep,
        }}>
          <span style={{ opacity: 0.65, fontWeight: 400, fontSize: "1.3em" }}>＼</span>
          EDITOR&apos;S PROMISE
          <span style={{ opacity: 0.65, fontWeight: 400, fontSize: "1.3em" }}>／</span>
        </div>

        {/* 大見出し（雑誌風・2行）：選んで＝パステル緑文字、全部＝濃緑pill */}
        <h2 style={{
          fontSize: "clamp(20px, 5.4vw, 28px)",
          lineHeight: 1.55,
          fontWeight: 700,
          letterSpacing: -0.3,
          color: G.ink,
          margin: "10px 0 14px",
        }}>
          ちゃんと
          <span style={{ color: G.sagePastelText, fontWeight: 700 }}>選んで</span>
          ほしいから、<br />
          <span style={{ color: G.sagePastelText, fontWeight: 700 }}>全部</span>
          かいてます。
        </h2>

        {/* 3 チェックリスト（白pill + 緑チェック・末尾語をパステル緑強調） */}
        <div style={{
          display: "flex", flexDirection: "column", gap: 8,
          maxWidth: 400, margin: "0 auto",
        }}>
          {[
            { plain: "良い点も気になる点も", emphasis: "どちらも掲載", suffix: "" },
            { plain: "採点基準を",             emphasis: "すべて公開",   suffix: "" },
            { plain: "広告費で",               emphasis: "順位",         suffix: "は変えません" },
          ].map((item, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 10,
              background: "#FFFFFF",
              borderRadius: 99,
              padding: "10px 16px 10px 12px",
              boxShadow: "0 1px 4px rgba(46,31,16,0.04)",
            }}>
              <span style={{
                width: 22, height: 22, borderRadius: "50%",
                background: G.sageDeep, color: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <Icon.Check size={12} />
              </span>
              <span style={{
                fontSize: 12.5, fontWeight: 600, color: G.ink,
                lineHeight: 1.5, textAlign: "left",
              }}>
                {item.plain}
                <span style={{ color: G.sagePastelText, fontWeight: 700 }}>{item.emphasis}</span>
                {item.suffix}
              </span>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* ===== AXES ===== */}
      <section style={{ padding: "26px 20px 0", maxWidth: 760, margin: "0 auto" }}>
        <SectionHead
          kicker="EVALUATION"
          title="5つの基準で丁寧に採点"
          note="5つの評価軸で事務所を丁寧に採点しています。"
          image="/top-title-evaluation.png"
        />
        <div style={{
          marginTop: 0, background: G.paper, borderRadius: 20,
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

      {/* ===== ABOUT 紹介文＋プロフィールリンク（AXES の直後・信頼の人格付け） ===== */}
      <section style={{ padding: "30px 20px 0", maxWidth: 760, margin: "0 auto" }}>
        {/* 1行目 */}
        <p style={{
          margin: 0,
          fontSize: 13.5, lineHeight: 2.1, color: "#3A2A20",
          textAlign: "center", fontWeight: 400, letterSpacing: 0.2,
        }}>
          チャットレディを始めてみたい。
        </p>
        {/* 2行目：「どのお店を選べばいいのか」を緑強調 */}
        <p style={{
          margin: "16px 0 0",
          fontSize: 13.5, lineHeight: 2.1, color: "#3A2A20",
          textAlign: "center", letterSpacing: 0.2,
        }}>
          でも、
          <span style={{ color: "#6F9B5E", fontWeight: 500 }}>どのお店を選べばいいのか</span>
          分からない。
        </p>
        {/* 3段落：地ブラウン／「お店の雰囲気やサポート、口コミ、報酬」にピンクベージュ下線／「中身を見て選べる」メイン強調 */}
        <p style={{
          margin: "26px 0 0",
          fontSize: 13.5, lineHeight: 2.2, color: "#3A2A20",
          textAlign: "center", letterSpacing: 0.2,
        }}>
          まるみえチャトレは、そんな人が<br />
          <span style={{
            color: "#3A2A20",
            backgroundImage: "linear-gradient(transparent 62%, rgba(223,165,154,0.25) 62%)",
            padding: "0 3px",
          }}>お店の雰囲気やサポート、口コミ、報酬</span>
          のことまで<br />
          <span style={{
            color: "#6F9B5E",
            fontWeight: 600,
            backgroundImage: "linear-gradient(transparent 62%, rgba(111,155,94,0.18) 62%)",
            padding: "0 3px",
          }}>中身を見て選べる</span>
          ように作った情報サイトです。
        </p>
        {/* プロフィールリンク */}
        <div style={{ marginTop: 26, textAlign: "center" }}>
          <Link href="/profile" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 12.5, fontWeight: 600, color: "#3A2A20",
            borderBottom: "1px solid rgba(58,42,32,0.35)", paddingBottom: 2,
            textDecoration: "none", letterSpacing: 0.3,
          }}>
            このサイトを作った人
            <Icon.Arrow size={12} />
          </Link>
        </div>
      </section>

      {/* ===== お悩みハブ統合（旧 CONCERN PREVIEW + WORRIES PREVIEW を合体） ===== */}
      <section style={{ padding: "30px 20px 0", maxWidth: 760, margin: "0 auto" }}>
        <SectionHead
          kicker="WORRIES"
          title="お悩みから、探す。"
          note="始める前の心配ごとに、まっすぐ答える記事を用意しています。"
          image="/top-title-worries.png"
        />

        {/* チップ帯（/q ハブと同意匠・全てが /q へのリンク） */}
        <div
          aria-label="お悩みカテゴリ"
          style={{
            marginTop: 0,
            display: "flex", gap: 8, overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            paddingBottom: 16,
          }}
        >
          {WORRIES_CHIPS.map((t, i) => (
            <Link
              href={i === 0 ? "/q" : `/q?cat=${encodeURIComponent(t)}`}
              key={t}
              style={{
                whiteSpace: "nowrap",
                fontSize: 12, fontWeight: 700,
                padding: "8px 16px", borderRadius: 99,
                textDecoration: "none",
                background: i === 0 ? G.sagePastel : G.paper,
                color: G.sageDeep,
                border: i === 0 ? `1.5px solid ${G.sagePastel}` : `1px solid ${G.rule}`,
              }}>
              {t}
            </Link>
          ))}
        </div>

        {/* 読みものカルーセル（最新記事＋横スライド5本） */}
        <ArticleCarousel articles={ARTICLES} />

        {/* CTA：もっと探す */}
        <Link href="/q" style={{
          marginTop: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          padding: 12, border: `1px solid ${G.rule}`, borderRadius: 99,
          fontSize: 12, fontWeight: 600, color: G.ink, textDecoration: "none",
        }}>
          お悩みからもっと探す
          <Icon.Arrow size={12} />
        </Link>
      </section>

      {/* ===== REVIEWS ===== */}
      <section style={{ padding: "26px 20px 0", maxWidth: 760, margin: "0 auto" }}>
        <SectionHead
          kicker="REVIEWS"
          title="リアルな声を集めました。"
          note="良かった点も、気になった点もどちらも公開。"
          image="/top-title-reviews.png"
        />
        <div style={{ marginTop: 0, display: "flex", flexDirection: "column", gap: 12 }}>
          {topReviews.map((r) => (
            <div key={r.id} style={{
              background: G.paper, borderRadius: 16, padding: 16,
              boxShadow: "0 2px 10px rgba(51,45,34,0.04)",
            }}>
              {/* 顔アイコン（左上 64px）＋右側 3段（星／タグ・事務所名／時期） */}
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 12 }}>
                {/* LEFT: 顔アイコン大 */}
                <Image
                  src={`/star-${Math.min(5, Math.max(1, Math.round(r.rating)))}.png`}
                  alt={`評価 ${Math.round(r.rating)}/5`}
                  width={64}
                  height={64}
                  style={{ width: 64, height: 64, borderRadius: "50%", display: "block", flexShrink: 0 }}
                />
                {/* RIGHT: stacked */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  {/* 星 ★ */}
                  <div style={{ display: "flex", gap: 1.5 }}>
                    {[1, 2, 3, 4, 5].map(s => (
                      <Icon.Star key={s} size={12} fill={s <= r.rating ? G.accent : G.cream} />
                    ))}
                  </div>
                  {/* タグ + 事務所名 */}
                  <div style={{
                    display: "flex", gap: 5, alignItems: "center", flexWrap: "wrap",
                    marginTop: 5,
                  }}>
                    <span style={{
                      fontSize: 9.5, padding: "2px 7px", borderRadius: 99,
                      background: G.sageSoft, color: G.sageDeep, fontWeight: 700,
                    }}>{r.style}</span>
                    <span style={{ fontSize: 13, fontWeight: 800 }}>{r.office}</span>
                  </div>
                  {/* 入店日 */}
                  <div style={{ fontSize: 10.5, color: G.inkSoft, marginTop: 4 }}>
                    入店：{r.period}
                  </div>
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
              {/* 投稿日時：右下 */}
              {r.submittedAt && (
                <div style={{
                  marginTop: 10, fontSize: 10, color: G.inkSoft,
                  textAlign: "right", opacity: 0.85,
                }}>
                  投稿：{r.submittedAt}
                </div>
              )}
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

      {/* ===== CTA ===== */}
      <section style={{ padding: "26px 20px 0", maxWidth: 760, margin: "0 auto" }}>
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
