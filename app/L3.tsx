// tier-3 共通コンポーネント（office detail / concern detail / area detail 等）
// Palette E + handoff 設計に準拠

import Link from "next/link";
import { Icon } from "./Icon";
import { reviews } from "./reviews";
import { BreadcrumbSchema, OfficeProductSchema } from "./StructuredData";
import {
  IconMessageCircle, IconHeartHandshake, IconSparkles, IconCoin,
  IconShieldCheck, IconHome, IconDeviceLaptop, IconGift, IconUsers, IconClock,
} from "@tabler/icons-react";

// 強み用アイコン（Tabler・全レビューで使い回し）
const FEATURE_ICONS: Record<string, React.ComponentType<{ size?: number; stroke?: number }>> = {
  talk: IconMessageCircle,
  support: IconHeartHandshake,
  beauty: IconSparkles,
  reward: IconCoin,
  safety: IconShieldCheck,
  home: IconHome,
  device: IconDeviceLaptop,
  gift: IconGift,
  users: IconUsers,
  time: IconClock,
};

// ストーリー本文：【…】を淡いセージのマーカーで強調（トップの蛍光ペン調と統一）
function renderMarker(text: string) {
  return text.split(/【(.+?)】/g).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} style={{
        backgroundImage: "linear-gradient(transparent 60%, rgba(111,155,94,0.25) 60%)",
        color: "#241E16", fontWeight: 700, padding: "0 2px",
      }}>{part}</span>
    ) : part
  );
}

// Palette E refined v3（5/27）：ink 深化＋緑使用ナロー化
// 方針：kicker/h2/links/scoreNum は ink、CTAは sagePastel + ink、FINAL CTA は ink + white
export const L3G = {
  bg: "#FAFAF5",
  bgWarm: "#F5E8C8",
  paper: "#FFFFFF",
  ink: "#241E16",          // deep sumi（warm sumi）
  inkSoft: "#87796A",
  inkSofter: "#B5AC9B",
  sage: "#7BAA3F",         // 細い線・score bar fill のみ
  sageDeep: "#587A38",     // refined moss（限定使用）
  sageSoft: "#CDDDB0",     // タグ背景・アイコン背景
  sagePastel: "#A8C49A",   // CTA background（パステル + ink text）
  cream: "#F8EFE0",
  accent: "#F4B5A0",
  accentDeep: "#E89B85",
  rule: "rgba(36,30,22,0.10)",
  ruleStrong: "rgba(36,30,22,0.20)",
};

// 記事系 tier-3 共通：article shell（hero + breadcrumb を統一・article body は children として保持）
export function L3ArticleShell({
  breadcrumb,
  kicker,
  title,
  meta,
  coverImage,
  children,
}: {
  breadcrumb: { l: string; href?: string }[];
  kicker: string;
  title: React.ReactNode;
  meta?: { date?: string; readTime?: string };
  coverImage?: { src: string; alt: string };
  children: React.ReactNode;
}) {
  return (
    <main style={{ background: L3G.bg, color: L3G.ink, paddingBottom: 40 }}>
      {/* full-width cover image（任意・画像本来のサイズで表示・SP edge-to-edge / PC 720px contained） */}
      {coverImage && (
        <div className="l3-article-cover">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={coverImage.src} alt={coverImage.alt} />
        </div>
      )}

      <L3Breadcrumb items={breadcrumb} />

      <section style={{ padding: "8px 22px 20px", maxWidth: 720, margin: "0 auto" }}>
        {/* kicker（ink text + sage line - 緑をナロー化） */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontSize: 10, letterSpacing: 2.2, fontWeight: 800, color: L3G.ink,
          marginBottom: 10,
        }}>
          <span style={{ width: 18, height: 1.5, background: L3G.sage, borderRadius: 1 }} />
          {kicker}
        </div>

        <h1 style={{
          margin: 0,
          fontSize: "clamp(22px, 6vw, 30px)",
          lineHeight: 1.5, fontWeight: 800, letterSpacing: -0.4,
          color: L3G.ink,
        }}>{title}</h1>

        {meta && (
          <div style={{
            marginTop: 12, display: "flex", gap: 14, alignItems: "center",
            fontSize: 11, color: L3G.inkSoft, fontWeight: 500,
          }}>
            {meta.date && <span>{meta.date}</span>}
            {meta.readTime && (
              <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                <Icon.Clock size={11} />
                {meta.readTime}
              </span>
            )}
          </div>
        )}
      </section>

      {/* article body はそのまま渡す（既存 .col-article-body 等のCSSが効く） */}
      {children}
    </main>
  );
}

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

// L3 共通：セクション見出し（kicker は ink + sage line）
export function L3SectionHeader({ kicker, title }: { kicker: string; title: string | React.ReactNode }) {
  return (
    <div style={{ padding: "0 22px 14px", maxWidth: 720, margin: "0 auto" }}>
      <div style={{
        fontSize: 10, letterSpacing: 2.5, fontWeight: 700, color: L3G.ink,
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
    <div style={{ background: "#E7E2D6", borderRadius: 99, height: 6, overflow: "hidden" }}>
      <div style={{ width: `${pct}%`, height: "100%", background: L3G.sagePastel, borderRadius: 99 }} />
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
  headerImage?: string;  // cover/hero 画像（未指定なら logoSrc + green gradient のフォールバック）
  tagline: string;
  tags: string[];
  breakdown: { l: string; v: number; max: number }[];
  goodComment: string;
  honestComment: string;
  features?: { n: string; t: string; d: string; icon?: string }[];
  story?: { title: string; paragraphs: string[]; image?: string };
  basic: [string, string][];
  applyUrl: string;
  note?: string;
};

// 関連事務所（型）
export type RelatedOffice = { rank: number; slug: string; name: string; score: number; badge?: string };

// 下部「他の事務所も比べてみる」は全ページ共通で総合トップ3を表示（スコア順）
const TOP3: RelatedOffice[] = [
  { rank: 1, slug: "ft", name: "フェアリーテイル", score: 89, badge: "初心者におすすめ" },
  { rank: 2, slug: "bright-group", name: "ブライトグループ", score: 83 },
  { rank: 3, slug: "chatstyle", name: "チャットスタイル", score: 81 },
];

// 事務所詳細：full layout
// reviewsはサーバ側でフィルター済みのを渡す
export function OfficeDetailLayout({
  o,
  reviewsSlot,
}: {
  o: OfficeDetailData;
  reviewsSlot: React.ReactNode;
  relatedOffices?: RelatedOffice[];
}) {
  // 構造化データ用：この事務所宛の口コミだけ抜き出し
  const officeReviewsForSchema = reviews.filter((r) => r.slug === o.slug);
  const officeUrl = `https://marumie-chatre.vercel.app/jimusho/${o.slug}`;

  return (
    <main style={{ background: L3G.bg, color: L3G.ink, paddingBottom: 40 }}>

      {/* ===== JSON-LD: BreadcrumbList + Product + AggregateRating + Review ===== */}
      <BreadcrumbSchema items={[
        { name: "トップ", path: "/" },
        { name: "事務所一覧", path: "/jimusho" },
        { name: o.name, path: `/jimusho/${o.slug}` },
      ]} />
      <OfficeProductSchema
        name={o.name}
        description={o.tagline.replace(/\n/g, " ")}
        url={officeUrl}
        imageUrl={o.headerImage ? `https://marumie-chatre.vercel.app${o.headerImage}` : undefined}
        reviews={officeReviewsForSchema}
      />

      {/* ===== Breadcrumb（視覚版） ===== */}
      <L3Breadcrumb items={[
        { l: "トップ", href: "/" },
        { l: "事務所一覧", href: "/jimusho" },
        { l: o.name },
      ]} />

      {/* ===== HERO ===== */}
      <section style={{ padding: "14px 22px 20px", maxWidth: 720, margin: "0 auto" }}>
        {/* cover - headerImage は SP edge-to-edge / PC 親幅内、実寸 aspect ratio、画像下スペース最小化 */}
        {o.headerImage ? (
          <div className="office-detail-cover">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={o.headerImage} alt={o.name} loading="eager" />
          </div>
        ) : (
          <div style={{
            width: "100%", aspectRatio: "16/10",
            background: `linear-gradient(135deg, ${L3G.sageSoft}, ${L3G.cream})`,
            borderRadius: 14, overflow: "hidden",
            marginBottom: 16, position: "relative",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={o.logoSrc}
              alt={o.name}
              style={{ maxHeight: "70%", maxWidth: "60%", objectFit: "contain" }}
            />
          </div>
        )}

        {/* rank badge（ink bg + white text - refined） */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          padding: "4px 11px 4px 8px", borderRadius: 99,
          background: L3G.ink, color: "#fff",
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

      </section>

      {/* ===== Score Breakdown（ランキングのSCOREボックスと統一） ===== */}
      <section style={{ padding: "0 22px 16px", maxWidth: 720, margin: "0 auto" }}>
        <div style={{
          background: "var(--green-pale)", borderRadius: 14, padding: "14px 16px",
        }}>
          <div style={{
            display: "flex", alignItems: "baseline", justifyContent: "space-between",
            marginBottom: 12,
          }}>
            <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: ".12em", color: L3G.inkSoft }}>SCORE</span>
            <div style={{ textAlign: "right" }}>
              <span style={{ fontFamily: '"Zen Maru Gothic", sans-serif', fontSize: 27, fontWeight: 800, color: "#C19A66", lineHeight: 1 }}>
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
          <Link href="/profile#hyoka" style={{
            marginTop: 12, display: "inline-flex", alignItems: "center", gap: 5,
            fontSize: 11, fontWeight: 600, color: L3G.ink,
            borderBottom: `1px solid ${L3G.ink}`, paddingBottom: 1,
            textDecoration: "none",
          }}>
            このスコアの根拠を見る
            <Icon.Arrow size={11} />
          </Link>
        </div>
      </section>

      {/* ===== 公式サイト CTA（スコア直下に配置） ===== */}
      <div style={{ padding: "0 22px 8px", maxWidth: 720, margin: "0 auto" }}>
        <a href={o.applyUrl} target="_blank" rel="noopener noreferrer" style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "15px 18px", borderRadius: 99,
          background: L3G.sagePastel, color: "#5C3D1F",
          fontSize: 14, fontWeight: 700, textDecoration: "none",
          boxShadow: "0 4px 14px rgba(36,30,22,0.10)",
        }}>
          <span>{o.name}の公式サイトを見る</span>
          <Icon.Arrow size={14} />
        </a>
        {o.isPR && (
          <div style={{
            marginTop: 6, textAlign: "center",
            fontSize: 9.5, color: L3G.inkSofter, letterSpacing: 0.3,
          }}>※ このボタンはPR（広告）リンクです</div>
        )}
      </div>

      {/* ===== EDITORIAL（クリームの帯） ===== */}
      <div style={{ background: L3G.cream, padding: "26px 0", marginTop: 8 }}>
      <L3SectionHeader kicker="EDITORIAL" title="編集部の声" />
      <section style={{ padding: "0 22px", maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{
          padding: "14px 16px",
          background: L3G.paper, borderRadius: 12,
          borderLeft: `3px solid ${L3G.sage}`,
        }}>
          <div style={{ fontSize: 9.5, fontWeight: 800, color: L3G.sageDeep, letterSpacing: 1.5, marginBottom: 5 }}>
            GOOD
          </div>
          <p style={{ margin: 0, fontSize: 13, lineHeight: 2.05, color: L3G.ink }}>{o.goodComment}</p>
        </div>
        <div style={{
          padding: "14px 16px",
          background: L3G.paper, borderRadius: 12,
          borderLeft: `3px solid ${L3G.accentDeep}`,
        }}>
          <div style={{ fontSize: 9.5, fontWeight: 800, color: L3G.accentDeep, letterSpacing: 1.5, marginBottom: 5 }}>
            正直なひとこと
          </div>
          <p style={{ margin: 0, fontSize: 13, lineHeight: 2.05, color: L3G.ink }}>{o.honestComment}</p>
        </div>
      </section>
      </div>

      {o.note && (
        <div style={{ padding: "0 22px", maxWidth: 720, margin: "16px auto 0" }}>
          <p style={{ fontSize: 11.5, lineHeight: 1.95, color: L3G.inkSoft, background: L3G.bgWarm, borderRadius: 10, padding: "12px 14px", margin: 0 }}>※ {o.note}</p>
        </div>
      )}

      {/* ===== STORY（セージの帯・optional）===== */}
      {o.story && (
        <div style={{ background: "#EDF3E2", padding: "26px 0" }}>
          <L3SectionHeader kicker="STORY" title={o.story.title} />
          <div style={{ padding: "0 22px", maxWidth: 720, margin: "0 auto" }}>
          <div style={{ background: L3G.paper, border: `1px solid ${L3G.rule}`, borderRadius: 14, padding: "16px 18px" }}>
            {o.story.image && (
              <div style={{
                width: "100%", aspectRatio: "16/9",
                borderRadius: 10, marginBottom: 14, overflow: "hidden",
                background: L3G.sageSoft,
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={o.story.image}
                  alt={o.story.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            )}
            {o.story.paragraphs.map((p, i) => (
              <p key={i} style={{
                margin: i === 0 ? 0 : "12px 0 0",
                fontSize: 13.5, lineHeight: 2.05,
                color: i === 0 ? L3G.ink : L3G.inkSoft,
              }}>{renderMarker(p)}</p>
            ))}
          </div>
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
            {o.features.map(f => {
              const IconComp = f.icon ? FEATURE_ICONS[f.icon] : undefined;
              return (
              <div key={f.n} style={{
                padding: "14px 16px",
                background: L3G.paper, borderRadius: 12,
                border: `1px solid ${L3G.rule}`,
                display: "flex", gap: 14, alignItems: "flex-start",
              }}>
                {IconComp ? (
                  <div style={{ flexShrink: 0, color: L3G.sageDeep, paddingTop: 1, lineHeight: 0 }}>
                    <IconComp size={28} stroke={1.7} />
                  </div>
                ) : (
                  <div style={{
                    fontSize: 22, fontWeight: 800, color: L3G.sageDeep, lineHeight: 1,
                    paddingTop: 2,
                  }}>{f.n}</div>
                )}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: L3G.sageDeep }}>{f.t}</div>
                  <div style={{ fontSize: 12, color: L3G.inkSoft, marginTop: 5, lineHeight: 1.85 }}>{f.d}</div>
                </div>
              </div>
              );
            })}
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
                fontSize: 12.5,
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

      {/* ===== FINAL CTA（pastel sage + ink - HPトーン統一） ===== */}
      <div style={{ padding: "0 22px", maxWidth: 720, margin: "30px auto 0" }}>
        <div style={{
          padding: "22px 22px",
          background: L3G.sagePastel, color: "#5C3D1F",
          borderRadius: 14,
        }}>
          <div style={{
            fontSize: 16, fontWeight: 700, lineHeight: 1.5,
          }}>{o.name}が気になったら</div>
          <p style={{
            margin: "8px 0 14px",
            fontSize: 11.5, color: L3G.inkSoft, lineHeight: 1.85,
          }}>
            まずは公式サイトで詳細を確認してみてください。無料見学・相談から始められます。
          </p>
          <a href={o.applyUrl} target="_blank" rel="noopener noreferrer" style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "12px 16px", borderRadius: 99,
            background: "#fff", color: "#5C3D1F",
            fontSize: 12, fontWeight: 700, textDecoration: "none",
          }}>
            公式サイトを見る
            <Icon.Arrow size={13} />
          </a>
          {o.isPR && (
            <div style={{
              marginTop: 6, fontSize: 9, color: L3G.inkSofter, textAlign: "center",
            }}>※ PR（広告）リンクです</div>
          )}
        </div>
      </div>

      {/* ===== OTHER OFFICES ===== */}
      <div className="oo-sec">
        <div className="oo-head">
          <span className="oo-kicker">
            <svg className="oo-leaf" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" aria-hidden="true">
              <path d="M10 18 V7" />
              <path d="M10 11c0-2.5 1.6-4 4.5-4.3C14.3 9 12.7 10.6 10 11z" fill="currentColor" stroke="none" />
              <path d="M10 8.5C10 6 8.4 4.6 5.5 4.3 5.7 6.7 7.3 8.2 10 8.5z" fill="currentColor" stroke="none" />
            </svg>
            OTHER OFFICES
          </span>
          <h2 className="oo-title">他の事務所も比べてみる</h2>
          <div className="oo-divider" aria-hidden="true">
            <span className="oo-divider-line" />
            <svg className="oo-diamond" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
              <path d="M6 0l1.4 4.6L12 6l-4.6 1.4L6 12l-1.4-4.6L0 6l4.6-1.4z" />
            </svg>
          </div>
        </div>
        <div className="oo-list">
          {TOP3.map(r => {
            const first = r.rank === 1;
            const current = r.slug === o.slug;
            const rankMark = first ? (
              <span className="oo-medal" aria-hidden="true">
                <span className="oo-medal-crown">
                  <svg width="24" height="16" viewBox="0 0 26 18" aria-hidden="true">
                    <path d="M3 14.2 L1.5 5 6.3 8.2 13 2 19.7 8.2 24.5 5 23 14.2 Z" fill="#C99A3E" />
                    <rect x="3.2" y="13.6" width="19.6" height="2.6" rx="1.3" fill="#C99A3E" />
                  </svg>
                </span>
                <span className="oo-medal-circle">1</span>
              </span>
            ) : (
              <span className="oo-rank-dot">{r.rank}</span>
            );
            const inner = (
              <>
                {rankMark}
                <span className="oo-body">
                  <span className="oo-name">{r.name}</span>
                  {r.badge && <span className="oo-badge">{r.badge}</span>}
                </span>
                <span className="oo-score"><b>{r.score}</b></span>
              </>
            );
            if (current) {
              return (
                <div key={r.slug} className={`oo-card oo-card--current${first ? " oo-card--first" : ""}`} aria-current="page">
                  {inner}
                  <span className="oo-current">閲覧中</span>
                </div>
              );
            }
            return (
              <Link href={`/jimusho/${r.slug}`} key={r.slug} className={`oo-card${first ? " oo-card--first" : ""}`}>
                {inner}
                <span className="oo-arrow"><Icon.Arrow size={12} /></span>
              </Link>
            );
          })}
        </div>
        <Link href="/jimusho" className="oo-more">
          事務所の比較ランキングを見る
          <span className="oo-more-arrow"><Icon.Arrow size={14} /></span>
        </Link>
      </div>

    </main>
  );
}
