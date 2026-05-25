import Link from "next/link";
import Image from "next/image";
import { Icon } from "../Icon";

export const metadata = {
  title: "コラム｜まるみえチャトレ",
  description: "チャットレディ事務所選びに役立つコラム。身バレ対策・事務所の選び方・副業ガイドなど、現役4年の視点で書いています。",
};

// Palette E カラー（インライン使用用）
const G = {
  bg: "#FAFAF5",
  paper: "#FFFFFF",
  ink: "#3A322A",
  inkSoft: "#87796A",
  inkSofter: "#B5AC9B",
  sage: "#7BAA3F",
  sageDeep: "#4F8225",
  sageSoft: "#CDDDB0",
  cream: "#F8EFE0",
  rule: "rgba(58,50,42,0.10)",
};

// FEATURED 記事（先頭1本）
const FEATURED = {
  slug: "jimusho-erabi",
  cat: "事務所の選び方",
  title: "チャットレディ事務所の選び方｜失敗しない5つの基準",
  excerpt: "「なんとなく良さそう」で選ぶと後悔します。安全な事務所を見極める5つの基準を、現役の視点で解説します。",
  time: "5分",
  date: "2025.05.01",
  image: "/col-jimusho-erabi.png",
};

// LIST 記事（残り）
const LIST = [
  {
    slug: "mibare-taisaku",
    cat: "身バレ対策",
    title: "身バレ、よくある疑問に答えます｜顔バレ・家族バレ・職場バレ",
    time: "6分",
    date: "2025.05.01",
    image: "/col-mibare-taisaku.png",
  },
  {
    slug: "hoikushi-baito",
    cat: "副業ガイド",
    title: "チャトレは副業にアリ？会社・職場にバレないための全対策",
    time: "7分",
    date: "2025.05.01",
    image: "/col-hoikushi-baito.png",
  },
];

// カテゴリチップ（全カテゴリ）
const CATEGORIES = ["すべて", "事務所の選び方", "身バレ対策", "副業ガイド"];

export default function ColumnPage() {
  return (
    <main style={{ background: G.bg, color: G.ink, paddingBottom: 40 }}>

      {/* ===== HERO ===== */}
      <section style={{ padding: "28px 22px 18px", maxWidth: 720, margin: "0 auto" }}>
        {/* kicker */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontSize: 10, letterSpacing: 2.2, fontWeight: 800, color: G.sageDeep,
          marginBottom: 12,
        }}>
          <span style={{ width: 18, height: 1.5, background: G.sage, borderRadius: 1 }} />
          LEARN MORE
        </div>

        {/* h1 */}
        <h1 style={{
          margin: 0,
          fontSize: "clamp(22px, 6vw, 30px)",
          lineHeight: 1.5,
          fontWeight: 800,
          letterSpacing: -0.4,
          color: G.ink,
        }}>
          読み物で、<br />もう一歩深く。
        </h1>

        {/* sub */}
        <p style={{
          margin: "14px 0 0", fontSize: 12.5, lineHeight: 1.9, color: G.inkSoft,
        }}>
          事務所選び・身バレ対策・働き方・税金など、応募前後の不安に答える編集部記事をまとめています。
        </p>
      </section>

      {/* ===== カテゴリチップ（横スクロール） ===== */}
      <div style={{
        padding: "0 22px 18px",
        maxWidth: 720, margin: "0 auto",
        display: "flex", gap: 6, overflowX: "auto",
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
      }}>
        {CATEGORIES.map((t, i) => (
          <span key={t} style={{
            whiteSpace: "nowrap",
            fontSize: 11, fontWeight: 600,
            padding: "7px 13px", borderRadius: 99,
            background: i === 0 ? G.ink : G.paper,
            color: i === 0 ? "#fff" : G.ink,
            border: i === 0 ? "none" : `1px solid ${G.rule}`,
          }}>{t}</span>
        ))}
      </div>

      {/* ===== FEATURED 記事 ===== */}
      <section style={{ padding: "0 22px 16px", maxWidth: 720, margin: "0 auto" }}>
        <Link href={`/column/${FEATURED.slug}`} style={{
          display: "block",
          background: G.paper, borderRadius: 14, overflow: "hidden",
          border: `1px solid ${G.rule}`,
          textDecoration: "none", color: G.ink,
        }}>
          {/* featured cover image */}
          <div style={{
            position: "relative",
            width: "100%", aspectRatio: "16/9",
            background: G.sageSoft,
          }}>
            <Image
              src={FEATURED.image}
              alt={FEATURED.title}
              fill
              sizes="(max-width:720px) 100vw, 720px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div style={{ padding: 16 }}>
            {/* FEATURED label + category */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{
                fontSize: 9.5, fontWeight: 800, letterSpacing: 0.8,
                padding: "2px 8px", borderRadius: 99,
                background: G.sageDeep, color: "#fff",
              }}>FEATURED</span>
              <span style={{ fontSize: 10.5, fontWeight: 700, color: G.sageDeep }}>
                {FEATURED.cat}
              </span>
            </div>
            {/* title */}
            <div style={{
              marginTop: 10,
              fontSize: 18, fontWeight: 800, lineHeight: 1.5, color: G.ink,
            }}>
              {FEATURED.title}
            </div>
            {/* excerpt */}
            <p style={{
              margin: "8px 0 0", fontSize: 12, lineHeight: 1.8, color: G.inkSoft,
            }}>
              {FEATURED.excerpt}
            </p>
            {/* meta */}
            <div style={{
              marginTop: 12, fontSize: 10, color: G.inkSoft,
              display: "flex", alignItems: "center", gap: 10,
            }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                <Icon.Clock size={11} /> {FEATURED.time}で読める
              </span>
              <span>{FEATURED.date}</span>
            </div>
          </div>
        </Link>
      </section>

      {/* ===== 記事リスト（thumb + メタ）===== */}
      <section style={{
        padding: "0 22px",
        maxWidth: 720, margin: "0 auto",
        display: "flex", flexDirection: "column", gap: 12,
      }}>
        {LIST.map(c => (
          <Link href={`/column/${c.slug}`} key={c.slug} style={{
            display: "flex", gap: 12,
            background: G.paper, borderRadius: 12, padding: 10,
            border: `1px solid ${G.rule}`,
            textDecoration: "none", color: G.ink,
          }}>
            {/* thumbnail */}
            <div style={{
              position: "relative",
              width: 88, height: 72,
              borderRadius: 8, overflow: "hidden",
              background: G.sageSoft,
              flexShrink: 0,
            }}>
              <Image
                src={c.image}
                alt={c.title}
                fill
                sizes="88px"
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* text */}
            <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
              <div style={{
                fontSize: 9.5, fontWeight: 700, letterSpacing: 0.8,
                color: G.sageDeep, marginBottom: 5,
              }}>{c.cat}</div>
              <div style={{
                fontSize: 13, fontWeight: 700, lineHeight: 1.5, color: G.ink,
              }}>
                {c.title}
              </div>
              <div style={{
                marginTop: 6, fontSize: 9.5, color: G.inkSoft,
                display: "flex", gap: 10,
              }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                  <Icon.Clock size={10} /> {c.time}
                </span>
                <span>{c.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* ===== 口コミ投稿 CTA（既存維持・色合わせ）===== */}
      <section style={{
        margin: "28px auto 0",
        padding: "0 22px",
        maxWidth: 720,
      }}>
        <div style={{
          padding: "20px 22px",
          background: G.sageDeep, color: "#fff",
          borderRadius: 14, position: "relative", overflow: "hidden",
        }}>
          <div style={{
            fontSize: 9.5, letterSpacing: 2, fontWeight: 700,
            color: "#F4B5A0", marginBottom: 6,
          }}>FOR YOU</div>
          <div style={{
            fontSize: 16, fontWeight: 700, lineHeight: 1.5,
          }}>働いた経験がある方へ</div>
          <p style={{
            margin: "8px 0 14px",
            fontSize: 11.5, lineHeight: 1.85,
            color: "rgba(255,255,255,0.85)",
          }}>
            匿名・個人情報不要で投稿できます。良かった点も、気になった点も歓迎です。
          </p>
          <Link href="/kuchikomi" style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "11px 14px", borderRadius: 99,
            background: "#fff", color: G.sageDeep,
            fontSize: 12, fontWeight: 700, textDecoration: "none",
          }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <Icon.Pencil size={13} />
              口コミを投稿する
            </span>
            <Icon.Arrow size={13} />
          </Link>
        </div>
      </section>

    </main>
  );
}
