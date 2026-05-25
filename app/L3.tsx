// tier-3 共通コンポーネント（office detail / concern detail / area detail 等）
// Palette E + handoff 設計に準拠

import Link from "next/link";
import { Icon } from "./Icon";

// Palette E カラー（tier-3 で使う色）
export const L3G = {
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
export function L3Breadcrumb({ items }: { items: { l: string; href?: string }[] }) {
  return (
    <div style={{
      padding: "14px 22px 8px",
      fontSize: 10.5, color: L3G.inkSoft, fontWeight: 500,
      display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap",
      maxWidth: 720, margin: "0 auto",
    }}>
      {items.map((it, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            {i > 0 && <span style={{ color: L3G.inkSofter, fontSize: 9 }}>›</span>}
            {it.href && !isLast ? (
              <Link href={it.href} style={{
                color: L3G.inkSoft, fontWeight: 500, textDecoration: "none",
              }}>{it.l}</Link>
            ) : (
              <span style={{
                color: isLast ? L3G.ink : L3G.inkSoft,
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
export function L3SectionHeader({ kicker, title }: { kicker: string; title: string | React.ReactNode }) {
  return (
    <div style={{ padding: "0 22px 14px", maxWidth: 720, margin: "0 auto" }}>
      <div style={{
        fontSize: 10, letterSpacing: 2.5, fontWeight: 700, color: L3G.sageDeep,
        display: "inline-flex", alignItems: "center", gap: 8,
      }}>
        <span style={{ width: 20, height: 1.5, background: L3G.sage }} />
        {kicker}
      </div>
      <h2 style={{
        margin: "8px 0 0",
        fontSize: 20, fontWeight: 800, lineHeight: 1.5, letterSpacing: -0.1,
        color: L3G.ink,
      }}>{title}</h2>
    </div>
  );
}

// L3 共通：スコアバー
export function L3ScoreBar({ value, max }: { value: number; max: number }) {
  const pct = (value / max) * 100;
  return (
    <div style={{ background: L3G.cream, borderRadius: 99, height: 6, overflow: "hidden" }}>
      <div style={{ width: `${pct}%`, height: "100%", background: L3G.sage, borderRadius: 99 }} />
    </div>
  );
}

// 事務所詳細：メダル色
export const MEDAL_COLORS: Record<number, string> = {
  1: "#E8B85B",
  2: "#C5C0BA",
  3: "#D69C71",
};

// 事務所詳細用のデータ型
export type OfficeDetailData = {
  slug: string;
  name: string;
  rank: number;
  score: number;
  isPR: boolean;
  logoSrc: string;
  tagline: string;
  tags: string[];
  breakdown: { l: string; v: number; max: number }[];
  goodComment: string;
  honestComment: string;
  features?: { n: string; t: string; d: string }[];
  story?: { title: string; paragraphs: string[] };
  basic: [string, string][];
  applyUrl: string;
};

// 関連事務所（手動指定可・デフォルト：ランクが近い2社）
export type RelatedOffice = { rank: number; slug: string; name: string; score: number };

// 事務所詳細：full layout
// reviewsはサーバ側でフィルター済みのを渡す
export function OfficeDetailLayout({
  o,
  reviewsSlot,
  relatedOffices,
}: {
  o: OfficeDetailData;
  reviewsSlot: React.ReactNode;
  relatedOffices: RelatedOffice[];
}) {
  return (
    <main style={{ background: L3G.bg, color: L3G.ink, paddingBottom: 40 }}>

      {/* ===== Breadcrumb ===== */}
      <L3Breadcrumb items={[
        { l: "トップ", href: "/" },
        { l: "事務所一覧", href: "/jimusho" },
        { l: o.name },
      ]} />

      {/* ===== HERO ===== */}
      <section style={{ padding: "14px 22px 20px", maxWidth: 720, margin: "0 auto" }}>
        {/* cover - ロゴ＋緑グラデ */}
        <div style={{
          width: "100%", aspectRatio: "16/10",
          background: `linear-gradient(135deg, ${L3G.sageSoft}, ${L3G.cream})`,
          borderRadius: 14, overflow: "hidden",
          marginBottom: 16, position: "relative",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <img
            src={o.logoSrc}
            alt={o.name}
            style={{ maxHeight: "70%", maxWidth: "60%", objectFit: "contain" }}
          />
        </div>

        {/* rank badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          padding: "4px 11px 4px 8px", borderRadius: 99,
          background: L3G.sageDeep, color: "#fff",
          fontSize: 10.5, letterSpacing: 0.5, fontWeight: 700,
        }}>
          <Icon.Crown size={12} />
          総合 {o.rank}位 / {o.score}点
        </div>

        {/* h1 + optional PR badge */}
        <h1 style={{
          margin: "14px 0 0",
          fontSize: "clamp(22px, 6.5vw, 28px)",
          fontWeight: 800, lineHeight: 1.4, letterSpacing: -0.4,
          color: L3G.ink,
        }}>
          {o.name}
          {o.isPR && (
            <span style={{
              fontSize: 11, fontWeight: 700, marginLeft: 8, color: L3G.accentDeep,
              padding: "2px 6px", borderRadius: 4, background: `${L3G.accent}40`,
              verticalAlign: "middle",
            }}>PR</span>
          )}
        </h1>

        {/* tagline */}
        <p style={{
          margin: "14px 0 0",
          fontSize: 13.5, lineHeight: 1.9, color: L3G.inkSoft,
          whiteSpace: "pre-line",
        }}>{o.tagline}</p>

        {/* tags */}
        <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 5 }}>
          {o.tags.map(t => (
            <span key={t} style={{
              fontSize: 10, fontWeight: 600,
              padding: "3px 9px", borderRadius: 99,
              background: L3G.sageSoft, color: L3G.sageDeep,
            }}>{t}</span>
          ))}
        </div>

        {/* CTA */}
        <a href={o.applyUrl} target="_blank" rel="noopener noreferrer" style={{
          marginTop: 18, display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 18px", borderRadius: 99,
          background: L3G.sageDeep, color: "#fff",
          fontSize: 13, fontWeight: 700, textDecoration: "none",
          boxShadow: "0 6px 18px rgba(79,130,37,0.30)",
        }}>
          <span>公式サイトを見る</span>
          <Icon.Arrow size={14} />
        </a>
        {o.isPR && (
          <div style={{
            marginTop: 6, textAlign: "center",
            fontSize: 9.5, color: L3G.inkSofter, letterSpacing: 0.3,
          }}>※ このボタンはPR（広告）リンクです</div>
        )}
      </section>

      {/* ===== Score Breakdown ===== */}
      <section style={{ padding: "0 22px 24px", maxWidth: 720, margin: "0 auto" }}>
        <div style={{
          background: L3G.paper, borderRadius: 14, padding: 18,
          border: `1px solid ${L3G.rule}`,
        }}>
          <div style={{
            display: "flex", alignItems: "baseline", justifyContent: "space-between",
            marginBottom: 14,
          }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: L3G.ink }}>5軸スコア</div>
            <div style={{ textAlign: "right" }}>
              <span style={{ fontSize: 28, fontWeight: 800, color: L3G.sageDeep, lineHeight: 1 }}>
                {o.score}
              </span>
              <span style={{ fontSize: 11, color: L3G.inkSoft, marginLeft: 3 }}>/100</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {o.breakdown.map(b => (
              <div key={b.l} style={{
                display: "flex", alignItems: "center", gap: 10, fontSize: 11,
              }}>
                <span style={{ width: 70, color: L3G.inkSoft, fontWeight: 600 }}>{b.l}</span>
                <div style={{ flex: 1 }}>
                  <L3ScoreBar value={b.v} max={b.max} />
                </div>
                <span style={{ width: 40, textAlign: "right", fontWeight: 700, color: L3G.ink }}>
                  {b.v}<span style={{ color: L3G.inkSoft, fontWeight: 500, fontSize: 9 }}>/{b.max}</span>
                </span>
              </div>
            ))}
          </div>
          <Link href="/hyoka-kijun" style={{
            marginTop: 14, display: "inline-flex", alignItems: "center", gap: 5,
            fontSize: 11, fontWeight: 600, color: L3G.sageDeep,
            borderBottom: `1px solid ${L3G.sageDeep}`, paddingBottom: 1,
            textDecoration: "none",
          }}>
            このスコアの根拠を見る
            <Icon.Arrow size={11} />
          </Link>
        </div>
      </section>

      {/* ===== EDITORIAL ===== */}
      <L3SectionHeader kicker="EDITORIAL" title="編集部の声" />
      <section style={{ padding: "0 22px", maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{
          padding: "14px 16px",
          background: "rgba(123,170,63,0.08)", borderRadius: 12,
          borderLeft: `3px solid ${L3G.sage}`,
        }}>
          <div style={{ fontSize: 9.5, fontWeight: 800, color: L3G.sageDeep, letterSpacing: 1.5, marginBottom: 5 }}>
            GOOD
          </div>
          <p style={{ margin: 0, fontSize: 12, lineHeight: 1.9, color: L3G.ink }}>{o.goodComment}</p>
        </div>
        <div style={{
          padding: "14px 16px",
          background: "rgba(232,155,133,0.12)", borderRadius: 12,
          borderLeft: `3px solid ${L3G.accentDeep}`,
        }}>
          <div style={{ fontSize: 9.5, fontWeight: 800, color: L3G.accentDeep, letterSpacing: 1.5, marginBottom: 5 }}>
            正直なひとこと
          </div>
          <p style={{ margin: 0, fontSize: 12, lineHeight: 1.9, color: L3G.ink }}>{o.honestComment}</p>
        </div>
      </section>

      {/* ===== STORY（optional）===== */}
      {o.story && (
        <div style={{ marginTop: 30 }}>
          <L3SectionHeader kicker="STORY" title={o.story.title} />
          <div style={{ padding: "0 22px", maxWidth: 720, margin: "0 auto" }}>
            <div style={{
              width: "100%", aspectRatio: "16/9",
              background: `linear-gradient(135deg, ${L3G.sageSoft}, ${L3G.cream})`,
              borderRadius: 10, marginBottom: 14,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 11, color: L3G.inkSoft, opacity: 0.7,
            }}>STORY画像（差し替え予定）</div>
            {o.story.paragraphs.map((p, i) => (
              <p key={i} style={{
                margin: i === 0 ? 0 : "12px 0 0",
                fontSize: 12.5, lineHeight: 1.95,
                color: i === 0 ? L3G.ink : L3G.inkSoft,
              }}>{p}</p>
            ))}
          </div>
        </div>
      )}

      {/* ===== FEATURES（optional）===== */}
      {o.features && o.features.length > 0 && (
        <div style={{ marginTop: 30 }}>
          <L3SectionHeader kicker="FEATURES" title={`${o.features.length}つの強み`} />
          <div style={{
            padding: "0 22px", maxWidth: 720, margin: "0 auto",
            display: "flex", flexDirection: "column", gap: 10,
          }}>
            {o.features.map(f => (
              <div key={f.n} style={{
                padding: "14px 16px",
                background: L3G.paper, borderRadius: 12,
                border: `1px solid ${L3G.rule}`,
                display: "flex", gap: 14, alignItems: "flex-start",
              }}>
                <div style={{
                  fontSize: 22, fontWeight: 800, color: L3G.sageDeep, lineHeight: 1,
                  paddingTop: 2,
                }}>{f.n}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: L3G.ink }}>{f.t}</div>
                  <div style={{ fontSize: 11, color: L3G.inkSoft, marginTop: 5, lineHeight: 1.7 }}>{f.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ===== BASIC INFO ===== */}
      <div style={{ marginTop: 30 }}>
        <L3SectionHeader kicker="BASIC INFO" title="基本情報" />
        <div style={{ padding: "0 22px", maxWidth: 720, margin: "0 auto" }}>
          <div style={{
            background: L3G.paper, borderRadius: 12,
            border: `1px solid ${L3G.rule}`,
            overflow: "hidden",
          }}>
            {o.basic.map((row, i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "100px 1fr",
                fontSize: 11.5,
                borderBottom: i < o.basic.length - 1 ? `1px solid ${L3G.rule}` : "none",
              }}>
                <div style={{
                  padding: "11px 14px",
                  background: L3G.bgWarm,
                  color: L3G.inkSoft, fontWeight: 600,
                }}>{row[0]}</div>
                <div style={{ padding: "11px 14px", lineHeight: 1.7, color: L3G.ink }}>{row[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== REVIEWS ===== */}
      <div style={{ marginTop: 30 }}>
        <L3SectionHeader kicker="REVIEWS" title="実際に働いた方の声" />
        <div style={{ padding: "0 22px", maxWidth: 720, margin: "0 auto" }}>
          {reviewsSlot}
        </div>
      </div>

      {/* ===== FINAL CTA ===== */}
      <div style={{ padding: "0 22px", maxWidth: 720, margin: "30px auto 0" }}>
        <div style={{
          padding: "22px 22px",
          background: L3G.sageDeep, color: "#fff",
          borderRadius: 14,
        }}>
          <div style={{
            fontSize: 16, fontWeight: 700, lineHeight: 1.5,
          }}>{o.name}が気になったら</div>
          <p style={{
            margin: "8px 0 14px",
            fontSize: 11.5, color: "rgba(255,255,255,0.80)", lineHeight: 1.85,
          }}>
            まずは公式サイトで詳細を確認してみてください。無料見学・相談から始められます。
          </p>
          <a href={o.applyUrl} target="_blank" rel="noopener noreferrer" style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "12px 16px", borderRadius: 99,
            background: "#fff", color: L3G.sageDeep,
            fontSize: 12, fontWeight: 700, textDecoration: "none",
          }}>
            公式サイトを見る
            <Icon.Arrow size={13} />
          </a>
          {o.isPR && (
            <div style={{
              marginTop: 6, fontSize: 9, color: "rgba(255,255,255,0.55)", textAlign: "center",
            }}>※ PR（広告）リンクです</div>
          )}
        </div>
      </div>

      {/* ===== OTHER OFFICES ===== */}
      <div style={{ padding: "0 22px", maxWidth: 720, margin: "32px auto 0" }}>
        <L3SectionHeader kicker="OTHER OFFICES" title="他の事務所も比べてみる" />
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {relatedOffices.map(r => (
            <Link href={`/jimusho/${r.slug}`} key={r.slug} style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "12px 14px",
              background: L3G.paper, border: `1px solid ${L3G.rule}`, borderRadius: 12,
              textDecoration: "none", color: L3G.ink,
            }}>
              <div style={{
                fontSize: 16, fontWeight: 800, color: L3G.inkSoft, width: 26,
              }}>{r.rank}</div>
              <div style={{ flex: 1, fontSize: 13.5, fontWeight: 800, color: L3G.ink }}>
                {r.name}
              </div>
              <div style={{
                fontSize: 16, fontWeight: 800, color: L3G.sageDeep,
              }}>{r.score}</div>
              <Icon.Arrow size={12} />
            </Link>
          ))}
        </div>
        <Link href="/jimusho" style={{
          marginTop: 12, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          padding: 12, border: `1px solid ${L3G.rule}`, borderRadius: 99,
          fontSize: 12, fontWeight: 600, color: L3G.ink, textDecoration: "none",
        }}>
          全11社の比較ランキングを見る
          <Icon.Arrow size={12} />
        </Link>
      </div>

    </main>
  );
}
