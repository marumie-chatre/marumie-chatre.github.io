import Link from "next/link";
import Image from "next/image";
import { reviews } from "../../reviews";
import OfficeReviews from "../../OfficeReviews";
import { Icon } from "../../Icon";

export const metadata = {
  title: "フェアリーテイルの口コミ・評判｜ノンアダルト専門の先駆者【まるみえチャトレ】",
  description: "フェアリーテイルの編集部調査レポート・口コミを掲載。業界初のノンアダルト専門店。安全性29点・サポート20点・総合84点。",
};

// Palette E カラー
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
  cream: "#F8EFE0",
  accent: "#F4B5A0",
  accentDeep: "#E89B85",
  rule: "rgba(58,50,42,0.10)",
  ruleStrong: "rgba(58,50,42,0.20)",
};

// L3 共通：パンくず
function L3Breadcrumb({ items }: { items: { l: string; href?: string }[] }) {
  return (
    <div style={{
      padding: "14px 22px 8px",
      fontSize: 10.5, color: G.inkSoft, fontWeight: 500,
      display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap",
      maxWidth: 720, margin: "0 auto",
    }}>
      {items.map((it, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            {i > 0 && <span style={{ color: G.inkSofter, fontSize: 9 }}>›</span>}
            {it.href && !isLast ? (
              <Link href={it.href} style={{
                color: G.inkSoft, fontWeight: 500, textDecoration: "none",
              }}>{it.l}</Link>
            ) : (
              <span style={{
                color: isLast ? G.ink : G.inkSoft,
                fontWeight: isLast ? 700 : 500,
              }}>{it.l}</span>
            )}
          </span>
        );
      })}
    </div>
  );
}

// L3 共通：セクション見出し
function L3SectionHeader({ kicker, title }: { kicker: string; title: string | React.ReactNode }) {
  return (
    <div style={{ padding: "0 22px 14px", maxWidth: 720, margin: "0 auto" }}>
      <div style={{
        fontSize: 10, letterSpacing: 2.5, fontWeight: 700, color: G.sageDeep,
        display: "inline-flex", alignItems: "center", gap: 8,
      }}>
        <span style={{ width: 20, height: 1.5, background: G.sage }} />
        {kicker}
      </div>
      <h2 style={{
        margin: "8px 0 0",
        fontSize: 20, fontWeight: 800, lineHeight: 1.5, letterSpacing: -0.1,
        color: G.ink,
      }}>{title}</h2>
    </div>
  );
}

// ScoreBar
function ScoreBar({ value, max }: { value: number; max: number }) {
  const pct = (value / max) * 100;
  return (
    <div style={{ background: G.cream, borderRadius: 99, height: 6, overflow: "hidden" }}>
      <div style={{ width: `${pct}%`, height: "100%", background: G.sage, borderRadius: 99 }} />
    </div>
  );
}

// FT 固有データ
const FT = {
  name: "フェアリーテイル",
  rank: 1,
  score: 84,
  isPR: false,
  tagline: "ノンアダルト専門の先駆者。\n安全に、自分らしく働ける事務所。",
  tags: ["業界初ノンアダルト専門", "女性スタッフ常駐", "在宅・通勤OK", "美容サロン連携", "初心者歓迎", "身バレ対策◎"],
  breakdown: [
    { l: "安全性",     v: 29, max: 30 },
    { l: "サポート",   v: 20, max: 25 },
    { l: "初心者",     v: 17, max: 20 },
    { l: "働きやすさ", v: 12, max: 15 },
    { l: "稼ぎ",       v: 6,  max: 10 },
  ],
  goodComment: "「ノンアダルト専門」という言葉がまだ珍しかった時代から、アダルトなしでも輝ける場所をつくり続けてきた事務所。チャットレディ歴3年以上の女性スタッフが常駐しているから、はじめての不安もちゃんと話せます。",
  honestComment: "稼ぎ重視の方には向いていないかもしれません。でも「安全に、自分のペースで、長く続けたい」という方には業界でトップクラスの環境だと思います。",
  features: [
    { n: "01", t: "業界初のノンアダルト専門店", d: "アダルトなしで稼げる環境を、業界でいち早く整えてきました。「ノンアダルトでも大丈夫？」という不安に、実績で答えます。" },
    { n: "02", t: "チャットレディ歴3年以上の女性スタッフが常駐", d: "はじめてのことだらけでも、経験者に直接相談できます。マニュアルではなく、リアルなノウハウを教えてもらえます。" },
    { n: "03", t: "美容サロン連携店あり", d: "働きながら自分磨きができる環境。見た目に自信がつくと、配信にも自信が出てきます。" },
  ],
  basic: [
    ["ジャンル", "完全ノンアダルト専門"],
    ["在宅", "OK"],
    ["通勤", "OK"],
    ["身バレ対策", "◎（実績あり）"],
    ["スタッフ", "チャットレディ歴3年以上の女性スタッフ常駐"],
    ["特徴", "美容サロン連携店あり・ノウハウ重視"],
    ["対応エリア", "全国対応"],
  ] as [string, string][],
  applyUrl: "https://livecafefairytale.com/",
};

const OTHER_OFFICES = [
  { rank: 2, slug: "bright-group", name: "ブライトグループ", score: 84 },
  { rank: 3, slug: "at-group",     name: "アットグループ",   score: 80 },
];

export default function FTPage() {
  const officeReviews = reviews.filter(r => r.slug === "ft");

  return (
    <main style={{ background: G.bg, color: G.ink, paddingBottom: 40 }}>

      {/* ===== Breadcrumb ===== */}
      <L3Breadcrumb items={[
        { l: "トップ", href: "/" },
        { l: "事務所一覧", href: "/jimusho" },
        { l: FT.name },
      ]} />

      {/* ===== HERO（cover + rank + name + tags + CTA） ===== */}
      <section style={{ padding: "14px 22px 20px", maxWidth: 720, margin: "0 auto" }}>
        {/* cover - ロゴ＋緑グラデ背景 */}
        <div style={{
          width: "100%", aspectRatio: "16/10",
          background: `linear-gradient(135deg, ${G.sageSoft}, ${G.cream})`,
          borderRadius: 14, overflow: "hidden",
          marginBottom: 16, position: "relative",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <Image
            src="/logo-ft.png"
            alt="フェアリーテイル"
            width={180}
            height={180}
            style={{ objectFit: "contain", maxHeight: "70%", maxWidth: "60%" }}
          />
        </div>

        {/* rank badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          padding: "4px 11px 4px 8px", borderRadius: 99,
          background: G.sageDeep, color: "#fff",
          fontSize: 10.5, letterSpacing: 0.5, fontWeight: 700,
        }}>
          <Icon.Crown size={12} />
          総合 {FT.rank}位 / {FT.score}点
        </div>

        {/* h1 + PR badge（FTはnonPRなので無し） */}
        <h1 style={{
          margin: "14px 0 0",
          fontSize: "clamp(22px, 6.5vw, 28px)",
          fontWeight: 800, lineHeight: 1.4, letterSpacing: -0.4,
          color: G.ink,
        }}>
          {FT.name}
          {FT.isPR && (
            <span style={{
              fontSize: 11, fontWeight: 700, marginLeft: 8, color: G.accentDeep,
              padding: "2px 6px", borderRadius: 4, background: `${G.accent}40`,
              verticalAlign: "middle",
            }}>PR</span>
          )}
        </h1>

        {/* tagline */}
        <p style={{
          margin: "14px 0 0",
          fontSize: 13.5, lineHeight: 1.9, color: G.inkSoft,
          whiteSpace: "pre-line",
        }}>{FT.tagline}</p>

        {/* tags */}
        <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 5 }}>
          {FT.tags.map(t => (
            <span key={t} style={{
              fontSize: 10, fontWeight: 600,
              padding: "3px 9px", borderRadius: 99,
              background: G.sageSoft, color: G.sageDeep,
            }}>{t}</span>
          ))}
        </div>

        {/* CTA */}
        <a href={FT.applyUrl} target="_blank" rel="noopener noreferrer" style={{
          marginTop: 18, display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 18px", borderRadius: 99,
          background: G.sageDeep, color: "#fff",
          fontSize: 13, fontWeight: 700, textDecoration: "none",
          boxShadow: "0 6px 18px rgba(79,130,37,0.30)",
        }}>
          <span>公式サイトを見る</span>
          <Icon.Arrow size={14} />
        </a>
        {FT.isPR && (
          <div style={{
            marginTop: 6, textAlign: "center",
            fontSize: 9.5, color: G.inkSofter, letterSpacing: 0.3,
          }}>※ このボタンはPR（広告）リンクです</div>
        )}
      </section>

      {/* ===== Score Breakdown ===== */}
      <section style={{ padding: "0 22px 24px", maxWidth: 720, margin: "0 auto" }}>
        <div style={{
          background: G.paper, borderRadius: 14, padding: 18,
          border: `1px solid ${G.rule}`,
        }}>
          <div style={{
            display: "flex", alignItems: "baseline", justifyContent: "space-between",
            marginBottom: 14,
          }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: G.ink }}>5軸スコア</div>
            <div style={{ textAlign: "right" }}>
              <span style={{ fontSize: 28, fontWeight: 800, color: G.sageDeep, lineHeight: 1 }}>
                {FT.score}
              </span>
              <span style={{ fontSize: 11, color: G.inkSoft, marginLeft: 3 }}>/100</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {FT.breakdown.map(b => (
              <div key={b.l} style={{
                display: "flex", alignItems: "center", gap: 10, fontSize: 11,
              }}>
                <span style={{ width: 70, color: G.inkSoft, fontWeight: 600 }}>{b.l}</span>
                <div style={{ flex: 1 }}>
                  <ScoreBar value={b.v} max={b.max} />
                </div>
                <span style={{ width: 40, textAlign: "right", fontWeight: 700 }}>
                  {b.v}<span style={{ color: G.inkSoft, fontWeight: 500, fontSize: 9 }}>/{b.max}</span>
                </span>
              </div>
            ))}
          </div>
          <Link href="/hyoka-kijun" style={{
            marginTop: 14, display: "inline-flex", alignItems: "center", gap: 5,
            fontSize: 11, fontWeight: 600, color: G.sageDeep,
            borderBottom: `1px solid ${G.sageDeep}`, paddingBottom: 1,
            textDecoration: "none",
          }}>
            このスコアの根拠を見る
            <Icon.Arrow size={11} />
          </Link>
        </div>
      </section>

      {/* ===== EDITORIAL（GOOD / 正直なひとこと） ===== */}
      <L3SectionHeader kicker="EDITORIAL" title="編集部の声" />
      <section style={{ padding: "0 22px", maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
        {/* GOOD */}
        <div style={{
          padding: "14px 16px",
          background: "rgba(123,170,63,0.08)", borderRadius: 12,
          borderLeft: `3px solid ${G.sage}`,
        }}>
          <div style={{
            fontSize: 9.5, fontWeight: 800, color: G.sageDeep,
            letterSpacing: 1.5, marginBottom: 5,
          }}>GOOD</div>
          <p style={{ margin: 0, fontSize: 12, lineHeight: 1.9, color: G.ink }}>{FT.goodComment}</p>
        </div>
        {/* 正直なひとこと */}
        <div style={{
          padding: "14px 16px",
          background: "rgba(232,155,133,0.12)", borderRadius: 12,
          borderLeft: `3px solid ${G.accentDeep}`,
        }}>
          <div style={{
            fontSize: 9.5, fontWeight: 800, color: G.accentDeep,
            letterSpacing: 1.5, marginBottom: 5,
          }}>正直なひとこと</div>
          <p style={{ margin: 0, fontSize: 12, lineHeight: 1.9, color: G.ink }}>{FT.honestComment}</p>
        </div>
      </section>

      {/* ===== STORY ===== */}
      <div style={{ marginTop: 30 }}>
        <L3SectionHeader kicker="STORY" title="アダルトができない子でも、挑戦できる場所を。" />
        <div style={{ padding: "0 22px", maxWidth: 720, margin: "0 auto" }}>
          <div style={{
            width: "100%", aspectRatio: "16/9",
            background: `linear-gradient(135deg, ${G.sageSoft}, ${G.cream})`,
            borderRadius: 10, marginBottom: 14,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 11, color: G.inkSoft, opacity: 0.7,
          }}>
            STORY画像（差し替え予定）
          </div>
          <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.95, color: G.ink }}>
            チャットレディといえばアダルト——そんなイメージが強かった時代から、フェアリーテイルはノンアダルト専門店を立ち上げました。
          </p>
          <p style={{ margin: "12px 0 0", fontSize: 12.5, lineHeight: 1.95, color: G.inkSoft }}>
            CMでも見かける国内大手ライブチャットサイトのノンアダルトジャンルだけを取り扱うグループです。専門店がほとんどなかった時代からやってきたからこそ、<strong>「ノンアダルトで、どうやって女の子を輝かせるか」</strong>を本気で考え続けてきました。
          </p>
        </div>
      </div>

      {/* ===== FEATURES 3カード ===== */}
      <div style={{ marginTop: 30 }}>
        <L3SectionHeader kicker="FEATURES" title="3つの強み" />
        <div style={{ padding: "0 22px", maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", gap: 10 }}>
          {FT.features.map(f => (
            <div key={f.n} style={{
              padding: "14px 16px",
              background: G.paper, borderRadius: 12,
              border: `1px solid ${G.rule}`,
              display: "flex", gap: 14, alignItems: "flex-start",
            }}>
              <div style={{
                fontSize: 22, fontWeight: 800, color: G.sageDeep, lineHeight: 1,
                paddingTop: 2,
              }}>{f.n}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: G.ink }}>{f.t}</div>
                <div style={{ fontSize: 11, color: G.inkSoft, marginTop: 5, lineHeight: 1.7 }}>{f.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== BASIC INFO ===== */}
      <div style={{ marginTop: 30 }}>
        <L3SectionHeader kicker="BASIC INFO" title="基本情報" />
        <div style={{ padding: "0 22px", maxWidth: 720, margin: "0 auto" }}>
          <div style={{
            background: G.paper, borderRadius: 12,
            border: `1px solid ${G.rule}`,
            overflow: "hidden",
          }}>
            {FT.basic.map((row, i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "100px 1fr",
                fontSize: 11.5,
                borderBottom: i < FT.basic.length - 1 ? `1px solid ${G.rule}` : "none",
              }}>
                <div style={{
                  padding: "11px 14px",
                  background: G.bgWarm,
                  color: G.inkSoft, fontWeight: 600,
                }}>{row[0]}</div>
                <div style={{ padding: "11px 14px", lineHeight: 1.7, color: G.ink }}>{row[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== REVIEWS ===== */}
      <div style={{ marginTop: 30 }}>
        <L3SectionHeader kicker="REVIEWS" title="実際に働いた方の声" />
        <div style={{ padding: "0 22px", maxWidth: 720, margin: "0 auto" }}>
          {officeReviews.length > 0 ? (
            <OfficeReviews reviews={officeReviews} officeName={FT.name} />
          ) : (
            <div style={{
              padding: "24px 18px",
              background: G.bgWarm, borderRadius: 12,
              textAlign: "center",
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: G.paper, color: G.sageDeep,
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 10px",
              }}>
                <Icon.Chat size={20} />
              </div>
              <div style={{ fontSize: 12.5, fontWeight: 700, marginBottom: 6, color: G.ink }}>
                まだ口コミが集まっていません
              </div>
              <p style={{ margin: 0, fontSize: 11, color: G.inkSoft, lineHeight: 1.8 }}>
                {FT.name}で働いた経験がある方、<br />ぜひ投稿してください。
              </p>
              <Link href="/kuchikomi" style={{
                marginTop: 14, display: "inline-flex", alignItems: "center", gap: 6,
                padding: "10px 18px", borderRadius: 99,
                background: G.ink, color: "#fff",
                fontSize: 11.5, fontWeight: 600, textDecoration: "none",
              }}>
                <Icon.Pencil size={12} />
                口コミを投稿する
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* ===== FINAL CTA ===== */}
      <div style={{ marginTop: 30, padding: "0 22px", maxWidth: 720, margin: "30px auto 0" }}>
        <div style={{
          padding: "22px 22px",
          background: G.sageDeep, color: "#fff",
          borderRadius: 14,
        }}>
          <div style={{
            fontSize: 16, fontWeight: 700, lineHeight: 1.5,
          }}>{FT.name}が気になったら</div>
          <p style={{
            margin: "8px 0 14px",
            fontSize: 11.5, color: "rgba(255,255,255,0.80)", lineHeight: 1.85,
          }}>
            まずは公式サイトで詳細を確認してみてください。無料見学・相談から始められます。
          </p>
          <a href={FT.applyUrl} target="_blank" rel="noopener noreferrer" style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "12px 16px", borderRadius: 99,
            background: "#fff", color: G.sageDeep,
            fontSize: 12, fontWeight: 700, textDecoration: "none",
          }}>
            公式サイトを見る
            <Icon.Arrow size={13} />
          </a>
          {FT.isPR && (
            <div style={{
              marginTop: 6, fontSize: 9, color: "rgba(255,255,255,0.55)", textAlign: "center",
            }}>※ PR（広告）リンクです</div>
          )}
        </div>
      </div>

      {/* ===== OTHER OFFICES ===== */}
      <div style={{ marginTop: 32, padding: "0 22px", maxWidth: 720, margin: "32px auto 0" }}>
        <L3SectionHeader kicker="OTHER OFFICES" title="他の事務所も比べてみる" />
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {OTHER_OFFICES.map(r => (
            <Link href={`/jimusho/${r.slug}`} key={r.slug} style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "12px 14px",
              background: G.paper, border: `1px solid ${G.rule}`, borderRadius: 12,
              textDecoration: "none", color: G.ink,
            }}>
              <div style={{
                fontSize: 16, fontWeight: 800, color: G.inkSoft, width: 26,
              }}>{r.rank}</div>
              <div style={{ flex: 1, fontSize: 13.5, fontWeight: 800, color: G.ink }}>
                {r.name}
              </div>
              <div style={{
                fontSize: 16, fontWeight: 800, color: G.sageDeep,
              }}>{r.score}</div>
              <Icon.Arrow size={12} />
            </Link>
          ))}
        </div>
        <Link href="/jimusho" style={{
          marginTop: 12, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          padding: 12, border: `1px solid ${G.rule}`, borderRadius: 99,
          fontSize: 12, fontWeight: 600, color: G.ink, textDecoration: "none",
        }}>
          全11社の比較ランキングを見る
          <Icon.Arrow size={12} />
        </Link>
      </div>

    </main>
  );
}
