"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "../Icon";

const G = {
  paper: "#FFFFFF",
  ink: "#2C3326",
  inkSoft: "#8E9882",
  sage: "#6FA858",
  sageDeep: "#587A38",
  sageSoft: "#CDDDB0",
  sagePastel: "#A8C49A",
  bgPale: "#F0F5E8",
  brown: "#2C3326",
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
  // FEATURED 運用ルール：true をつけた記事が「すべて」タブの先頭に大カードで出る
  // どこにも true がない場合は配列先頭が自動的に FEATURED になる
  featured?: boolean;
};

// 8記事：旧 /q × 5 + 旧 /column × 3 を統合
const ARTICLES: Article[] = [
  {
    href: "/q/jimusho-erabi",
    cat: "初心者・選び方",
    title: "チャットレディ事務所の選び方｜失敗しない5つの基準",
    excerpt: "「なんとなく良さそう」で選ぶと後悔します。安全な事務所を見極める5つの基準を、現役の視点で解説します。",
    time: "5分", date: "2026.05.05",
    image: "/col-jimusho-erabi.png",
    featured: true,
  },
  {
    href: "/q/barebure",
    cat: "身バレ対策",
    title: "身バレが怖い人のための、事務所選び",
    excerpt: "配信中の身バレが心配な方へ。マスク・バーチャル・地域ブロックなど対策を具体的に。",
    time: "5分", date: "2026.05.07",
    image: "/配信中身バレ対策.jpg",
  },
  {
    href: "/q/mibare-taisaku",
    cat: "身バレ対策",
    title: "身バレ、よくある疑問に答えます｜顔バレ・家族バレ・職場バレ",
    excerpt: "配信中の身バレが心配な方へ。マスク・バーチャル・地域ブロックなど、よく聞かれる質問を一気に整理。",
    time: "6分", date: "2026.05.06",
    image: "/col-mibare-taisaku.png",
  },
  {
    href: "/q/kazoku-bare",
    cat: "身バレ対策",
    title: "家族にバレずに続けるための、安全対策",
    excerpt: "同居家族にバレずに続けたい方へ。検索履歴・SNS・声漏れ・部屋の対策まで。",
    time: "5分", date: "2026.05.07",
    image: "/家族、彼氏ばれ.jpg",
  },
  {
    href: "/q/hoikushi-baito",
    cat: "身バレ対策",
    title: "職場にバレない副業の始め方　元保育士の実体験",
    excerpt: "本業をしながら始めたい方へ。職場バレの入口は住民税だけ。普通徴収・確定申告まで、元保育士のみなみが正直に。",
    time: "7分", date: "2026.06.26",
    image: "/職場ばれ.jpg",
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

// タグは中身（記事数）に合わせて4分類に集約。
// 旧「身バレ／家族バレ／副業バレ」は実質すべて“バレ対策”なので「身バレ対策」に統合。
const CATEGORIES = [
  "すべて",
  "身バレ対策",
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
  // FEATURED：「すべて」タブの時のみ、featured: true 指定 (なければ配列先頭) を大カードで出す
  const featured = isAll && filtered.length > 0
    ? (ARTICLES.find(a => a.featured) ?? filtered[0])
    : null;
  const list = isAll && featured
    ? filtered.filter(a => a.href !== featured.href)
    : filtered;

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
                background: isActive ? "#6FA858" : G.paper,
                color: isActive ? "#fff" : G.sageDeep,
                border: isActive ? "1.5px solid #6FA858" : `1px solid ${G.border}`,
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
