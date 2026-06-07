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
    tags: ["ノンアダ専門", "身バレ対策◎", "会話から見せ方までサポート"],
    summary: "見た目を磨いて会話力も身に着けられるサポートを求めてる方",
    breakdown: { safe: 29, support: 20, beginner: 17, work: 12, earn: 6 },
  },
  {
    id: "bright-group",
    rank: 2,
    name: "ブライトグループ",
    score: 84,
    tags: ["老舗20年", "全国140店舗", "税理士サポート"],
    summary: "大手・老舗店のサポートを求めてる方。",
    breakdown: { safe: 25, support: 20, beginner: 18, work: 13, earn: 8 },
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

// データ：不安カテゴリ（sage 単色テーマで統一）
const CONCERNS = [
  { id: "barebure",     icon: "Shield" as const,    label: "身バレが怖い",       sub: "配信中対策" },
  { id: "shokuba-bare", icon: "Briefcase" as const, label: "職場にバレたくない", sub: "副業バレ" },
  { id: "kazoku-bare",  icon: "Home" as const,      label: "家族にバレたくない", sub: "家族バレ" },
  { id: "ayashii",      icon: "Question" as const,  label: "業界が怪しく見える", sub: "実態解説" },
  { id: "shoshinsha",   icon: "Sprout" as const,    label: "初心者で不安",       sub: "総合ガイド" },
];

// データ：クイックナビ（単色 sage テーマで統一）
const QUICK_NAV = [
  { href: "/jimusho", icon: "Trophy" as const,   label: "ランキングから探す" },
  { href: "/area",    icon: "Pin" as const,      label: "一番近い事務所を探す" },
  { href: "/style",   icon: "Home" as const,     label: "働き方から探す" },
  { href: "/q",       icon: "Question" as const, label: "お悩みからさがす" },
];

// データ：評価軸詳細（画像 + 説明 + 採点項目）
const AXES_DETAIL = [
  {
    id: "safety",
    n: "01",
    label: "安全性",
    image: "/eval-axis-1-safety.png",
    desc: "お仕事を続けるうえで一番大事な要素です。\n身バレ対策や無理な強要がないことを重視して採点しています。",
    items: ["身バレ対策", "アダルト強要の有無", "プライバシー保護の対応"],
  },
  {
    id: "support",
    n: "02",
    label: "サポート",
    image: "/eval-axis-2-support.png",
    desc: "事務所の雰囲気や技術を身に着けるスピードはスタッフの対応で大きく変わります。\n悩みや成長によりそう体制があるか採点しています。",
    items: ["サポートやマニュアルの充実度", "スタッフに相談をしやすいか", "スタッフが常駐しているか"],
  },
  {
    id: "beginner",
    n: "03",
    label: "初心者向け",
    image: "/eval-axis-3-beginner.png",
    desc: "未経験でも安心して始められるか採点しています。",
    items: ["未経験者の受け入れ態勢", "配信デビューまでの導線", "初心者が躓きにくい設計"],
  },
  {
    id: "work",
    n: "04",
    label: "働きやすさ",
    image: "/eval-axis-4-work.png",
    desc: "無理なく続けらる環境や居心地の良さを採点しています。",
    items: ["シフトの自由度", "在宅・通勤の選びやすさ", "退店時のトラブルリスク"],
  },
  {
    id: "earn",
    n: "05",
    label: "稼ぎやすさ",
    image: "/eval-axis-5-earn.png",
    desc: "報酬率は業界ルール通りにうたっているか？\n実際に売り上げを伸ばしやすい環境か採点しています。",
    items: ["待機対策の有無", "戦略の提案クオリティ", "リピート獲得のサポート"],
  },
];

// データ：コラム3本
const COLUMNS_PREVIEW = [
  { slug: "jimusho-erabi",  cat: "事務所の選び方", title: "チャットレディ事務所の選び方｜失敗しない5つの基準", time: "5分", date: "2025.05.01", image: "/col-jimusho-erabi.png" },
  { slug: "mibare-taisaku", cat: "身バレ対策",     title: "配信中に顔がバレる？家族にバレる？よくある疑問に答えます", time: "6分", date: "2025.05.01", image: "/col-mibare-taisaku.png" },
  { slug: "hoikushi-baito", cat: "副業ガイド",     title: "チャットレディは副業にアリ？会社・職場にバレない全対策", time: "7分", date: "2025.05.01", image: "/col-hoikushi-baito.png" },
];

// ========== サブコンポーネント ==========

function SectionHead({ kicker, title, note, image }: {
  kicker: string; title: string; note?: string; image?: string;
}) {
  // 画像版：画面幅いっぱい + 上下文字削除 + 下端グラデで馴染ませる
  if (image) {
    return (
      <div style={{
        position: "relative",
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
        lineHeight: 0,
      }}>
        <Image
          src={image}
          alt={title}
          width={2172}
          height={560}
          sizes="100vw"
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
    <div style={{
      background: G.paper, borderRadius: 20, padding: 16, position: "relative",
      boxShadow: isTop
        ? `0 6px 22px rgba(46,31,16,0.08), 0 0 0 1.5px ${G.sagePastel}`
        : "0 2px 10px rgba(46,31,16,0.04)",
    }}>
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
            <span style={{ opacity: 0.7, fontWeight: 400 }}>＼</span>
            初心者に最もおすすめ
            <span style={{ opacity: 0.7, fontWeight: 400 }}>／</span>
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

      <Link href={`/jimusho/${r.id}`} style={{
        marginTop: 12, display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "11px 14px", borderRadius: 10,
        background: isTop ? G.sagePastel : "transparent",
        color: G.ink,
        border: isTop ? "none" : `1.5px solid ${G.rule}`,
        fontSize: 12, fontWeight: 700, textDecoration: "none",
      }}>
        <span>詳細・口コミを見る</span>
        <Icon.Arrow size={13} />
      </Link>
    </div>
  );
}

// ========== メインコンポーネント ==========

export default function Home() {
  const topReviews = reviews.slice(0, 2);

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

      {/* ===== EDITOR'S PROMISE（CTA エリアと同色で地続き化） ===== */}
      <section style={{
        background: "#F8FCF7",
        padding: "14px 22px 24px",
        textAlign: "center",
      }}>
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
      <section style={{ padding: "36px 20px 0", maxWidth: 760, margin: "0 auto" }}>
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

      {/* ===== EVALUATION（header + 5軸詳細）===== */}
      <section style={{ padding: "40px 20px 0", maxWidth: 760, margin: "0 auto" }}>
        <SectionHead
          kicker="EVALUATION"
          title="5つの基準で丁寧に採点"
          note="5つの評価軸で事務所を丁寧に採点しています。"
          image="/top-title-evaluation.png"
        />

        {/* 導入文 */}
        <p style={{
          margin: "12px 0 0",
          fontSize: 13, lineHeight: 1.9, color: G.ink, textAlign: "center",
        }}>
          初心者でも安心して選べるように、<br />
          いい点も気になる点も同じ基準で確認しています。
        </p>

        {/* お約束 box */}
        <div style={{
          marginTop: 22, padding: "16px 18px",
          background: G.bgWarm, borderRadius: 14,
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 13, fontWeight: 800, color: G.sageDeep, marginBottom: 8,
          }}>
            <Icon.Leaf size={16} />
            お約束
          </div>
          <p style={{
            margin: 0, fontSize: 12.5, lineHeight: 1.9, color: G.ink,
          }}>
            広告費で順位は変えません。<br />
            スコアが変わるのは、&ldquo;採点項目の事実&rdquo;が変わった時だけです
          </p>
        </div>

        {/* 5軸詳細（画像左 + テキスト右） */}
        <div style={{
          marginTop: 24, display: "flex", flexDirection: "column", gap: 16,
        }}>
          {AXES_DETAIL.map((axis) => (
            <div key={axis.id} style={{
              background: G.paper, borderRadius: 16, padding: 16,
              boxShadow: "0 2px 10px rgba(46,31,16,0.04)",
            }}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                {/* LEFT: 軸画像 */}
                <Image
                  src={axis.image}
                  alt={axis.label}
                  width={400}
                  height={400}
                  sizes="(max-width:640px) 100px, 110px"
                  style={{
                    width: 100, height: 100,
                    borderRadius: 12, flexShrink: 0,
                    objectFit: "cover",
                  }}
                />
                {/* RIGHT: 番号+ラベル / 説明 / 採点項目 */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                    <span style={{
                      fontSize: 22, fontWeight: 800, color: G.sageDeep,
                      fontFamily: "'Manrope', sans-serif", letterSpacing: -0.5,
                    }}>{axis.n}</span>
                    <span style={{ fontSize: 16, fontWeight: 800, color: G.ink }}>{axis.label}</span>
                  </div>
                  <p style={{
                    margin: "6px 0 12px",
                    fontSize: 11.5, lineHeight: 1.75, color: G.inkSoft,
                    whiteSpace: "pre-line",
                  }}>{axis.desc}</p>
                  <div style={{
                    fontSize: 10, fontWeight: 800, color: G.sageDeep,
                    letterSpacing: 1.5, marginBottom: 6,
                  }}>採点項目</div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {axis.items.map((item, j) => (
                      <li key={j} style={{
                        display: "flex", alignItems: "center", gap: 8,
                        fontSize: 11.5, color: G.ink, lineHeight: 1.7, marginBottom: 4,
                      }}>
                        <span style={{
                          width: 16, height: 16, borderRadius: "50%",
                          background: G.sageDeep, color: "#fff",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0,
                        }}>
                          <Icon.Check size={9} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link href="/hyoka-kijun" style={{
          marginTop: 18, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
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
          title="お悩みから、探す。"
          note="始める前の心配ごとに、まっすぐ答える記事を用意しています。"
          image="/top-title-reviews.png"
        />
        <div style={{ marginTop: 0, display: "flex", flexDirection: "column", gap: 8 }}>
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
                  background: G.sageSoft, color: G.sageDeep,
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
          title="リアルな声を集めました。"
          note="良かった点も、気になった点もどちらも公開。"
          image="/top-title-worries.png"
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
                  {/* 時期 */}
                  <div style={{ fontSize: 10.5, color: G.inkSoft, marginTop: 4 }}>
                    {r.period}
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
          title="もう一歩ふかく答えていきます。"
          note="編集部が書く、応募前後の不安を解決する記事。"
          image="/top-title-column.png"
        />
        <div style={{ marginTop: 0, display: "flex", flexDirection: "column", gap: 10 }}>
          {COLUMNS_PREVIEW.map(c => (
            <Link href={`/column/${c.slug}`} key={c.slug} style={{
              display: "flex", gap: 12,
              background: G.paper, borderRadius: 12, padding: 10,
              border: `1px solid ${G.rule}`,
              textDecoration: "none", color: G.ink,
            }}>
              <div style={{
                width: 84, height: 70, borderRadius: 8, flexShrink: 0,
                position: "relative", overflow: "hidden",
                background: G.sageSoft,
              }}>
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="84px"
                  style={{ objectFit: "cover" }}
                />
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
