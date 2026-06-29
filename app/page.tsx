import Link from "next/link";
import Image from "next/image";
import { reviews } from "./reviews";
import { Icon } from "./Icon";
import ArticleCarousel from "./ArticleCarousel";
import ReviewCarousel from "./ReviewCarousel";
import { latestArticles } from "./articles";
import { IconShieldCheck, IconHeadset, IconSparkles, IconClock, IconCoins } from "@tabler/icons-react";

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
  ink: "#2C3326",           // 統一・完成版 ink
  inkSoft: "#8E9882",       // 統一・完成版 muted
  inkSofter: "#B5AC9B",
  sage: "#6FA858",          // 統一・完成版 緑
  sageDeep: "#587A38",      // refined moss
  sageSoft: "#CDDDB0",      // mint chip
  sagePastel: "#A8C49A",    // pastel sage (CTA bg)
  sagePastelText: "#6FA858", // 文字強調（指定トーンのプライマリ緑に統一）
  mint: "#B5D670",
  cream: "#F8EFE0",
  accent: "#EC9B86",        // 統一・完成版 コーラル
  accentDeep: "#D17F66",
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

// データ：クイックナビ（LIPS風・アイコン優先／ラベルは短く1語）
const QUICK_NAV = [
  { href: "/jimusho", icon: "Crown" as const,    label: "ランキング" },
  { href: "/area",    icon: "Pin" as const,      label: "エリア" },
  { href: "/style",   icon: "Home" as const,     label: "働き方" },
  { href: "/q",       icon: "Question" as const, label: "お悩み" },
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
  // テキスト版（文字構造化・「ちゃんと選んでほしいから」と色味統一）
  return (
    <div>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        fontSize: 10, letterSpacing: 2.2, fontWeight: 800, color: G.sageDeep,
      }}>
        <span style={{ width: 18, height: 1.5, background: G.sage, borderRadius: 1 }} />
        {kicker}
      </div>
      <h2 style={{
        margin: "9px 0 0", fontFamily: "'Zen Maru Gothic', sans-serif",
        fontSize: 21, lineHeight: 1.45, fontWeight: 700, letterSpacing: -0.2, color: G.ink,
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
  const TAN = "#C19A66", TAN_BG = "#F4EADB", GREEN_BTN = "#6FA858";
  const MEDAL = ["#E3B23C", "#B7BCC4", "#CB8E5C"];
  const pills = isTop ? ["初心者に最もおすすめ", r.tags[0]] : [r.tags[0]];
  return (
    <Link
      href={`/jimusho/${r.id}`}
      aria-label={`${r.name} の詳細・口コミを見る`}
      style={{
        display: "block",
        background: G.paper, borderRadius: 18, padding: 16, position: "relative",
        boxShadow: isTop
          ? `0 6px 22px rgba(46,31,16,0.08), 0 0 0 1.5px ${TAN}66`
          : "0 2px 10px rgba(46,31,16,0.04)",
        textDecoration: "none", color: "inherit", cursor: "pointer",
      }}
    >
      <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
        {/* ロゴ + 順位バッジ */}
        <div style={{ position: "relative", flexShrink: 0 }}>
          <div style={{
            width: 56, height: 56, borderRadius: 14,
            background: "#fff", border: `1px solid ${G.rule}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            overflow: "hidden",
          }}>
            <Image src={`/logo-${r.id}.png`} alt={r.name} width={48} height={48}
              style={{ width: "82%", height: "82%", objectFit: "contain" }} />
          </div>
          <div style={{
            position: "absolute", top: -9, left: -9,
            minWidth: 30, height: 22, padding: "0 7px",
            borderRadius: 99, background: MEDAL[idx], color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 2,
            fontSize: 11, fontWeight: 800, border: "2px solid #fff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.18)",
          }}>
            {isTop && <Icon.Crown size={11} />}
            {r.rank}位
          </div>
        </div>

        {/* pills + name + tagline */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
            {pills.map((p, i) => (
              <span key={p} style={{
                fontSize: 9.5, fontWeight: 800,
                padding: "2px 9px", borderRadius: 99,
                background: (isTop && i === 0) ? TAN : TAN_BG,
                color: (isTop && i === 0) ? "#fff" : TAN,
              }}>{p}</span>
            ))}
          </div>
          <div style={{ marginTop: 6, fontSize: 16, fontWeight: 800, color: G.ink }}>{r.name}</div>
          <div style={{ marginTop: 3, fontSize: 10.5, color: G.inkSoft, lineHeight: 1.5 }}>{r.tags.join("／")}</div>
        </div>

        {/* score */}
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ fontFamily: "'Zen Maru Gothic', sans-serif", fontSize: 28, fontWeight: 800, lineHeight: 1, color: TAN }}>{r.score}</div>
          <div style={{ fontSize: 9, color: G.inkSoft, marginTop: 2 }}>/100点</div>
        </div>
      </div>

      {/* 5軸 横バー */}
      <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 7 }}>
        {AXES.map(a => {
          const v = r.breakdown[a.id as keyof typeof r.breakdown];
          return (
            <div key={a.id} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 10.5 }}>
              <span style={{ width: 62, color: G.inkSoft, fontWeight: 600, flexShrink: 0 }}>{a.label}</span>
              <div style={{ flex: 1 }}>
                <ScoreBar value={v} max={a.max} height={6} bg={G.cream} fill={GREEN_BTN} />
              </div>
              <span style={{ width: 42, textAlign: "right", fontWeight: 700, color: G.ink, flexShrink: 0 }}>
                {v}<span style={{ color: G.inkSoft, fontWeight: 500, fontSize: 9 }}>/{a.max}</span>
              </span>
            </div>
          );
        })}
      </div>

      {/* こんな方に */}
      <div style={{
        marginTop: 12, padding: "10px 12px",
        background: "#EFF4E5", borderRadius: 10,
        fontSize: 11.5, lineHeight: 1.6,
        display: "flex", gap: 8, alignItems: "flex-start",
      }}>
        <span style={{ fontSize: 9.5, fontWeight: 800, color: G.sageDeep, paddingTop: 1, flexShrink: 0 }}>こんな方に →</span>
        <span style={{ color: G.ink }}>{r.summary}</span>
      </div>

      {/* 緑ボタン（カード全体がリンクなので装飾） */}
      <div aria-hidden="true" style={{
        marginTop: 12, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        padding: "13px 14px", borderRadius: 12,
        background: GREEN_BTN, color: "#fff", fontSize: 13, fontWeight: 800,
      }}>
        事務所のなかみを確認する
        <Icon.Arrow size={14} />
      </div>
    </Link>
  );
}

function DonutChart() {
  const colors = ["#587A38", "#6FA858", "#88BC72", "#A7CE92", "#C7E3B4"];
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
  // TOP 口コミ横スライド用：非表示フラグを除いた先頭から数件
  const carouselReviews = reviews.filter(r => !r.hideInInitial).slice(0, 8);
  // 注目の記事：レジストリから日付の新しい順で自動取得（新記事は articles.ts に追加するだけ）
  const articles = latestArticles();

  return (
    <main style={{ background: G.bg, color: G.ink, paddingBottom: 40 }}>

      {/* ===== ヒーローカード（画像＋CTA を1枚のカードに） ===== */}
      <section style={{ padding: 0 }}>
        <div className="top-hero-card">
          {/* 画像エリア（テキストオーバーレイ＋下端グラデ） */}
          <div className="top-hero-card-img">
            <Image
              src="/top-hero-photo2.jpg"
              alt="まるみえチャトレ"
              fill
              priority
              quality={90}
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
                  margin: "8px 0 0",
                  fontSize: "clamp(22px, 6vw, 30px)",
                  lineHeight: 1.4,
                  fontWeight: 800,
                  letterSpacing: -0.6,
                  color: G.ink,
                }}>
                  <span style={{ color: G.sagePastelText }}>中身</span>で選ぶ<br />
                  チャットレディ事務所の<br />
                  <span style={{ color: G.sagePastelText }}>口コミ</span>サイト
                </h1>

                {/* sub：お話し（ノンアダルト）で稼げるお店選びを前面に */}
                <p style={{
                  margin: "9px 0 0",
                  fontSize: "clamp(9.5px, 2.4vw, 11.5px)",
                  lineHeight: 1.6, color: G.ink,
                  fontWeight: 500,
                }}>
                  初心者でも「本当に<span style={{ color: G.sagePastelText, fontWeight: 700 }}>お話し</span>で稼げる」<br />
                  お店を選ぶために<br />
                  いい点も気になる点もまるっと公開して
                </p>
              </div>

              {/* CTA を画像の上にオーバーレイ（テキストは上・ボタンは下に振り分けて重ならない） */}
              <Link href="/jimusho" className="top-hero-cta-primary">
                <span>自分に合う事務所を探す</span>
                <span className="top-hero-cta-primary-arrow">
                  <Icon.Arrow size={13} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 注目の記事（hero直下・PICK UP のみ・上余白を詰める） ===== */}
      <section style={{ padding: "12px 0 4px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 10, letterSpacing: 2.2, fontWeight: 800, color: G.sageDeep }}>
            <span style={{ width: 18, height: 1.5, background: G.sage, borderRadius: 1 }} />
            PICK UP
          </div>
        </div>
        <div style={{ marginTop: 8 }}>
          <ArticleCarousel articles={articles} variant="row" />
        </div>
      </section>

      {/* ===== QUICK NAV「あなたに合う探し方」（LIPS風・アイコン優先の1行・薄緑背景なし） ===== */}
      <section className="top-find-section">
        <div className="top-find-inner">
          <SectionHead kicker="HOW TO FIND" title="あなたに合う探し方" />
          <div style={{
            marginTop: 16, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8,
          }}>
            {QUICK_NAV.map((it) => {
              const I = Icon[it.icon];
              return (
                <Link href={it.href} key={it.href} style={{
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 9,
                  textDecoration: "none", color: G.ink,
                }}>
                  <span style={{
                    width: 62, height: 62, borderRadius: "50%",
                    background: G.paper, border: `1px solid ${G.rule}`,
                    boxShadow: "0 4px 14px rgba(46,31,16,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: G.sage,
                  }}>
                    <I size={29} />
                  </span>
                  <span style={{ fontSize: 11.5, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0.2 }}>
                    {it.label}
                  </span>
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
        />
        <div style={{ marginTop: 8, textAlign: "right" }}>
          <Link href="/profile#hyoka" style={{
            display: "inline-flex", alignItems: "center", gap: 4,
            fontSize: 12, fontWeight: 700, color: G.ink,
            borderBottom: `1px solid ${G.ink}`, paddingBottom: 1,
            textDecoration: "none",
          }}>
            さきに評価基準をみる
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
          ぜんぶ比較する
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
                    background: ["#587A38", "#6FA858", "#88BC72", "#A7CE92", "#C7E3B4"][i],
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
              const AxisIcon = [IconShieldCheck, IconHeadset, IconSparkles, IconClock, IconCoins][i];
              return (
                <div key={a.id} style={{
                  display: "grid", gridTemplateColumns: "40px 1fr",
                  gap: 12, alignItems: "flex-start", padding: "11px 0",
                  borderBottom: i < AXES.length - 1 ? `1px dashed ${G.rule}` : "none",
                }}>
                  {/* 線アイコン（3つの約束と同系統の Tabler・緑） */}
                  <div style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <AxisIcon size={28} stroke={1.7} color="#6FA858" />
                  </div>
                  <div>
                    {/* 【アイコン】 タイトル（緑） 〇pt */}
                    <div style={{ display: "flex", alignItems: "baseline", gap: 7 }}>
                      <span style={{ fontSize: 14, fontWeight: 800, color: "#587A38" }}>{a.label}</span>
                      <span style={{ fontSize: 11.5, fontWeight: 800, color: "#6FA858" }}>{a.max}pt</span>
                    </div>
                    {/* 説明テキスト */}
                    <div style={{ fontSize: 10.5, color: G.inkSoft, marginTop: 3, lineHeight: 1.55 }}>{a.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Link href="/profile#hyoka" style={{
          marginTop: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          padding: 12, border: `1px solid ${G.rule}`, borderRadius: 99,
          fontSize: 12, fontWeight: 600, color: G.ink, textDecoration: "none",
        }}>
          もっとくわしく知りたい方は
          <Icon.Arrow size={12} />
        </Link>
      </section>

      {/* ===== ABOUT 紹介文＋プロフィールリンク（AXES の直後・信頼の人格付け） ===== */}
      <section style={{ padding: "30px 20px 0", maxWidth: 760, margin: "0 auto" }}>
        {/* 1行目 */}
        <p style={{
          margin: 0,
          fontSize: 13.5, lineHeight: 2.1, color: "#46503E",
          textAlign: "center", fontWeight: 400, letterSpacing: 0.2,
        }}>
          チャットレディを始めてみたい。
        </p>
        {/* 2行目：お話しのみ／どのお店…を緑強調 */}
        <p style={{
          margin: "16px 0 0",
          fontSize: 13.5, lineHeight: 2.1, color: "#46503E",
          textAlign: "center", letterSpacing: 0.2,
        }}>
          <span style={{ color: "#6FA858", fontWeight: 500 }}>お話しのみ</span>でしたいのに<br />
          <span style={{ color: "#6FA858", fontWeight: 500 }}>どのお店を選べばいいのか</span>
          分からない。
        </p>
        {/* 3段落：地ブラウン／「お店の雰囲気やサポート、口コミ、報酬」にピンクベージュ下線／「中身を見て選べる」メイン強調 */}
        <p style={{
          margin: "26px 0 0",
          fontSize: 13.5, lineHeight: 2.2, color: "#46503E",
          textAlign: "center", letterSpacing: 0.2,
        }}>
          まるみえチャトレは、そんな初心者さんが<br />
          <span style={{
            color: "#46503E",
            backgroundImage: "linear-gradient(transparent 62%, rgba(223,165,154,0.25) 62%)",
            padding: "0 3px",
          }}>お店の雰囲気やサポート、口コミ、報酬</span>
          のことまで<br />
          <span style={{
            color: "#6FA858",
            fontWeight: 600,
            backgroundImage: "linear-gradient(transparent 62%, rgba(111,155,94,0.18) 62%)",
            padding: "0 3px",
          }}>中身を見て選べる</span>
          ように作った情報サイトです。
        </p>
        {/* 編集部プロフィール（みなみ）は全ページ共通の EditorProfile（お悩みフッター直上）へ移設 */}
      </section>

      {/* ===== REVIEWS（横スライド・各カードは事務所リンク） ===== */}
      <section style={{ padding: "26px 0 0" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 20px" }}>
          <SectionHead
            kicker="REVIEWS"
            title="リアルな声を集めました。"
            note="良かった点も、気になった点もどちらも公開。気になるお店はタップで詳細へ。"
          />
        </div>
        <div style={{ marginTop: 14 }}>
          <ReviewCarousel reviews={carouselReviews} />
        </div>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 20px" }}>
          <Link href="/kuchikomi" style={{
            marginTop: 16, width: "100%",
            padding: 13, background: "transparent",
            border: `1.5px solid ${G.ruleStrong}`, borderRadius: 14,
            fontSize: 12.5, fontWeight: 700, color: G.ink,
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            textDecoration: "none", boxSizing: "border-box",
          }}>
            {reviews.length}件の口コミをもっと見る
            <Icon.Arrow size={13} />
          </Link>
        </div>
      </section>

      {/* 働いた経験がある方へ・編集部情報・お悩みからさがすは全ページ共通フッター
          （WorkedBeforeCTA / EditorProfile / WorriesFooter）へ集約 */}

    </main>
  );
}
