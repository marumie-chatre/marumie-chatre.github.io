"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "../Icon";

const G = {
  paper: "#FFFFFF",
  ink: "#3A2A20",
  inkSoft: "#87796A",
  sage: "#7BAA3F",
  sageDeep: "#587A38",
  sageSoft: "#CDDDB0",
  sagePastel: "#A8C49A",
  bgPale: "#F0F5E8",
  border: "#E2EBDD",
  rule: "rgba(58,42,32,0.10)",
};

type Article = {
  slug: string;
  cat: string;
  title: string;
  excerpt: string;
  time: string;
  date: string;
  image: string;
};

const ARTICLES: Article[] = [
  {
    slug: "jimusho-erabi",
    cat: "事務所の選び方",
    title: "チャットレディ事務所の選び方｜失敗しない5つの基準",
    excerpt: "「なんとなく良さそう」で選ぶと後悔します。安全な事務所を見極める5つの基準を、現役の視点で解説します。",
    time: "5分",
    date: "2025.05.01",
    image: "/col-jimusho-erabi.png",
  },
  {
    slug: "mibare-taisaku",
    cat: "身バレ対策",
    title: "身バレ、よくある疑問に答えます｜顔バレ・家族バレ・職場バレ",
    excerpt: "配信中の身バレが心配な方へ。マスク配信・バーチャル配信・地域ブロックなど、よく聞かれる質問に現役4年の視点で答えます。",
    time: "6分",
    date: "2025.05.01",
    image: "/col-mibare-taisaku.png",
  },
  {
    slug: "hoikushi-baito",
    cat: "副業ガイド",
    title: "チャトレは副業にアリ？会社・職場にバレないための全対策",
    excerpt: "副業として始めたい方へ。住民税・確定申告・職場バレ対策まで、副業チャトレの始め方を整理しました。",
    time: "7分",
    date: "2025.05.01",
    image: "/col-hoikushi-baito.png",
  },
];

const CATEGORIES = ["すべて", "事務所の選び方", "身バレ対策", "副業ガイド"];

export default function ColumnList() {
  const [active, setActive] = useState<string>("すべて");

  const filtered = active === "すべて"
    ? ARTICLES
    : ARTICLES.filter(a => a.cat === active);

  // 「すべて」のときは最初をフィーチャー扱い、それ以外は全件フィーチャー
  const isAll = active === "すべて";
  const featured = isAll ? filtered[0] : null;
  const list = isAll ? filtered.slice(1) : filtered;

  return (
    <>
      {/* ===== カテゴリチップ（横スクロール・連動） ===== */}
      <div
        role="group"
        aria-label="コラムのカテゴリ"
        style={{
          padding: "0 22px 18px",
          maxWidth: 720, margin: "0 auto",
          display: "flex", gap: 8, overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
        }}
      >
        {CATEGORIES.map(t => {
          const isActive = active === t;
          return (
            <button
              key={t}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(t)}
              style={{
                whiteSpace: "nowrap",
                fontSize: 12, fontWeight: 700,
                padding: "8px 16px", borderRadius: 99,
                cursor: "pointer",
                background: isActive ? G.sagePastel : G.paper,
                color: G.sageDeep,
                border: isActive ? `1.5px solid ${G.sagePastel}` : `1px solid ${G.border}`,
                transition: "background 0.18s, border-color 0.18s",
              }}
            >
              {t}
            </button>
          );
        })}
      </div>

      {/* ===== FEATURED 記事（「すべて」のときだけ） ===== */}
      {featured && (
        <section style={{ padding: "0 22px 16px", maxWidth: 720, margin: "0 auto" }}>
          <Link href={`/column/${featured.slug}`} style={{
            display: "block",
            background: G.paper, borderRadius: 14, overflow: "hidden",
            border: `1px solid ${G.border}`,
            textDecoration: "none", color: G.ink,
            boxShadow: "0 2px 10px rgba(58,42,32,0.04)",
          }}>
            {/* cover */}
            <div style={{
              position: "relative",
              width: "100%", aspectRatio: "16/9",
              background: G.bgPale,
            }}>
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width:720px) 100vw, 720px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{
                  fontSize: 9.5, fontWeight: 800, letterSpacing: 0.8,
                  padding: "2px 8px", borderRadius: 99,
                  background: G.sageDeep, color: "#fff",
                }}>FEATURED</span>
                <span style={{ fontSize: 10.5, fontWeight: 700, color: G.sageDeep }}>
                  {featured.cat}
                </span>
              </div>
              <div style={{
                marginTop: 10,
                fontSize: 18, fontWeight: 800, lineHeight: 1.5, color: G.ink,
              }}>{featured.title}</div>
              <p style={{
                margin: "8px 0 0", fontSize: 12, lineHeight: 1.8, color: G.inkSoft,
              }}>{featured.excerpt}</p>
              <div style={{
                marginTop: 12, fontSize: 10, color: G.inkSoft,
                display: "flex", alignItems: "center", gap: 10,
              }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                  <Icon.Clock size={11} /> {featured.time}で読める
                </span>
                <span>{featured.date}</span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* ===== 記事リスト ===== */}
      {list.length > 0 ? (
        <section style={{
          padding: "0 22px",
          maxWidth: 720, margin: "0 auto",
          display: "flex", flexDirection: "column", gap: 12,
        }}>
          {list.map(c => (
            <Link href={`/column/${c.slug}`} key={c.slug} style={{
              display: "flex", gap: 12,
              background: G.paper, borderRadius: 12, padding: 10,
              border: `1px solid ${G.border}`,
              textDecoration: "none", color: G.ink,
            }}>
              <div style={{
                position: "relative",
                width: 88, height: 72,
                borderRadius: 8, overflow: "hidden",
                background: G.bgPale, flexShrink: 0,
              }}>
                <Image
                  src={c.image} alt={c.title} fill sizes="88px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                <div style={{
                  fontSize: 9.5, fontWeight: 700, letterSpacing: 0.8,
                  color: G.sageDeep, marginBottom: 5,
                }}>{c.cat}</div>
                <div style={{
                  fontSize: 13, fontWeight: 700, lineHeight: 1.5, color: G.ink,
                }}>{c.title}</div>
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
      ) : (
        !featured && (
          <div style={{
            padding: "30px 22px", maxWidth: 720, margin: "0 auto",
            background: G.paper, border: `1px dashed ${G.border}`,
            borderRadius: 14, textAlign: "center",
          }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: G.ink, marginBottom: 6 }}>
              このカテゴリの記事は準備中です
            </div>
            <p style={{ margin: 0, fontSize: 11.5, lineHeight: 1.7, color: G.inkSoft }}>
              現在「すべて」または別のカテゴリから記事をご覧いただけます。
            </p>
          </div>
        )
      )}
    </>
  );
}
