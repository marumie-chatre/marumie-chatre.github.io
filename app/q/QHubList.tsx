"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
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
  brown: "#5C3D1F",
  border: "#E2EBDD",
};

type Article = {
  href: string;
  cat: string;
  title: string;
  excerpt: string;
  time: string;
  date: string;
  image: string;
};

// 8記事：旧 /q × 5 + 旧 /column × 3 を統合
const ARTICLES: Article[] = [
  {
    href: "/column/jimusho-erabi",
    cat: "初心者・選び方",
    title: "チャットレディ事務所の選び方｜失敗しない5つの基準",
    excerpt: "「なんとなく良さそう」で選ぶと後悔します。安全な事務所を見極める5つの基準を、現役の視点で解説します。",
    time: "5分", date: "2025.05.01",
    image: "/col-jimusho-erabi.png",
  },
  {
    href: "/q/barebure",
    cat: "身バレ",
    title: "身バレが怖い人のための、事務所選び",
    excerpt: "配信中の身バレが心配な方へ。マスク・バーチャル・地域ブロックなど対策を具体的に。",
    time: "5分", date: "2026.05.07",
    image: "/q-barebure.png",
  },
  {
    href: "/column/mibare-taisaku",
    cat: "身バレ",
    title: "身バレ、よくある疑問に答えます｜顔バレ・家族バレ・職場バレ",
    excerpt: "配信中の身バレが心配な方へ。マスク・バーチャル・地域ブロックなど、よく聞かれる質問を一気に整理。",
    time: "6分", date: "2025.05.01",
    image: "/col-mibare-taisaku.png",
  },
  {
    href: "/q/kazoku-bare",
    cat: "家族バレ",
    title: "家族にバレずに続けるための、安全対策",
    excerpt: "同居家族にバレずに続けたい方へ。検索履歴・SNS・声漏れ・部屋の対策まで。",
    time: "5分", date: "2026.05.07",
    image: "/q-kazoku-bare.png",
  },
  {
    href: "/q/shokuba-bare",
    cat: "副業バレ",
    title: "職場にバレずに始める、副業チャットレディ",
    excerpt: "副業として始めたい方へ。住民税対策・マイナンバー誤解・職種別の判断ポイント。",
    time: "5分", date: "2026.05.07",
    image: "/q-shokuba-bare.png",
  },
  {
    href: "/column/hoikushi-baito",
    cat: "副業バレ",
    title: "チャトレは副業にアリ？会社・職場にバレないための全対策",
    excerpt: "副業として始めたい方へ。住民税・確定申告・職場バレ対策まで一気通貫で整理。",
    time: "7分", date: "2025.05.01",
    image: "/col-hoikushi-baito.png",
  },
  {
    href: "/q/shoshinsha",
    cat: "初心者・選び方",
    title: "初心者が安心して始めるための、総合ガイド",
    excerpt: "これから始める方へ。初心者がつまずく5つのポイントと、サポートが手厚い事務所選び。",
    time: "5分", date: "2026.05.07",
    image: "/q-shoshinsha.png",
  },
  {
    href: "/q/ayashii",
    cat: "業界の不安",
    title: "業界が怪しく見える方へ、現役が正直に答える",
    excerpt: "アダルト強要・ノルマ・怪しい事務所の見分け方を、現役4年の視点で正直に解説。",
    time: "5分", date: "2026.05.07",
    image: "/q-ayashii.png",
  },
];

const CATEGORIES = [
  "すべて",
  "身バレ",
  "家族バレ",
  "副業バレ",
  "初心者・選び方",
  "業界の不安",
];

// useSearchParams を使う Inner を Suspense で包む（Next.js 16 の SSG 要件）
export default function QHubList() {
  return (
    <Suspense fallback={null}>
      <QHubListInner />
    </Suspense>
  );
}

function QHubListInner() {
  const searchParams = useSearchParams();
  const catParam = searchParams.get("cat");
  // URL ?cat= が有効カテゴリと一致する場合のみ初期値に採用
  const initial = catParam && CATEGORIES.includes(catParam) ? catParam : "すべて";
  const [active, setActive] = useState<string>(initial);

  const filtered = active === "すべて"
    ? ARTICLES
    : ARTICLES.filter(a => a.cat === active);

  const isAll = active === "すべて";
  const featured = isAll && filtered.length > 0 ? filtered[0] : null;
  const list = isAll ? filtered.slice(1) : filtered;

  return (
    <>
      {/* ===== カテゴリチップ（連動） ===== */}
      <div
        role="group"
        aria-label="お悩みカテゴリ"
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

      {/* ===== FEATURED 記事（「すべて」のみ） ===== */}
      {featured && (
        <section style={{ padding: "0 22px 16px", maxWidth: 720, margin: "0 auto" }}>
          <Link href={featured.href} style={{
            display: "block",
            background: G.paper, borderRadius: 14, overflow: "hidden",
            border: `1px solid ${G.border}`,
            textDecoration: "none", color: G.ink,
            boxShadow: "0 2px 10px rgba(58,42,32,0.04)",
          }}>
            <div style={{
              position: "relative",
              width: "100%", aspectRatio: "16/9",
              background: G.bgPale,
            }}>
              <Image
                src={featured.image} alt={featured.title} fill
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
            <Link href={c.href} key={c.href} style={{
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
          </div>
        )
      )}
    </>
  );
}
