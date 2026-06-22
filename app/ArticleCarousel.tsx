"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "./Icon";

export type CarouselArticle = {
  href: string;
  category: string;
  title: string;
  readTime: string;
  date: string;
  accent: string;     // カテゴリのアクセント色
  accentSoft: string; // 表紙グラデの淡色
  image?: string;     // あれば写真表紙、なければデザイン表紙
};

const INK = "#2E1F10";
const INK_SOFT = "#87796A";
const PAPER = "#FFFFFF";

// 表紙（写真があれば写真／無ければカテゴリ別のやわらかいデザイン表紙）
function Cover({ a, big = false }: { a: CarouselArticle; big?: boolean }) {
  return (
    <div style={{
      position: "relative",
      width: "100%",
      aspectRatio: big ? "16/9" : "5/3",
      borderRadius: 14,
      overflow: "hidden",
      background: `linear-gradient(135deg, ${a.accentSoft} 0%, #FFFFFF 120%)`,
      flexShrink: 0,
    }}>
      {a.image ? (
        <Image src={a.image} alt={a.title} fill sizes={big ? "(max-width:760px) 100vw, 720px" : "260px"} style={{ objectFit: "cover" }} />
      ) : (
        <>
          {/* デザイン表紙：大きなカテゴリ文字＋葉のアクセント */}
          <span style={{
            position: "absolute", left: big ? 18 : 12, top: big ? 14 : 10,
            fontSize: big ? 13 : 10, fontWeight: 800, letterSpacing: 2,
            color: a.accent, background: PAPER,
            padding: big ? "4px 12px" : "3px 9px", borderRadius: 99,
            boxShadow: "0 2px 8px rgba(46,31,16,0.06)",
          }}>{a.category}</span>
          <span style={{
            position: "absolute", right: big ? 16 : 10, bottom: big ? -8 : -6,
            fontSize: big ? 84 : 52, fontWeight: 800, lineHeight: 1,
            color: a.accent, opacity: 0.16,
            fontFamily: '"Zen Maru Gothic", sans-serif',
            userSelect: "none",
          }}>{a.category.slice(0, 2)}</span>
          <svg viewBox="0 0 20 20" width={big ? 30 : 22} height={big ? 30 : 22} fill="none"
            stroke={a.accent} strokeWidth={1.4} strokeLinecap="round"
            style={{ position: "absolute", left: big ? 20 : 13, bottom: big ? 16 : 12, opacity: 0.7 }}>
            <path d="M10 18 V7" />
            <path d="M10 11c0-2.5 1.6-4 4.5-4.3C14.3 9 12.7 10.6 10 11z" fill={a.accent} stroke="none" />
            <path d="M10 8.5C10 6 8.4 4.6 5.5 4.3 5.7 6.7 7.3 8.2 10 8.5z" fill={a.accent} stroke="none" />
          </svg>
        </>
      )}
    </div>
  );
}

export default function ArticleCarousel({ articles }: { articles: CarouselArticle[] }) {
  const [featured, ...rest] = articles;
  const trackRef = useRef<HTMLDivElement>(null);

  // 自動スライド（横）：ホバー/タッチ/reduced-motion で停止。端まで来たら先頭へ戻る。
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let paused = false;
    const onEnter = () => { paused = true; };
    const onLeave = () => { paused = false; };
    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerdown", onEnter);
    el.addEventListener("pointerleave", onLeave);

    const id = window.setInterval(() => {
      if (paused) return;
      const card = el.querySelector<HTMLElement>("[data-card]");
      const step = card ? card.offsetWidth + 12 : 260;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
      el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + step, behavior: "smooth" });
    }, 3200);

    return () => {
      window.clearInterval(id);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerdown", onEnter);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const nudge = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 12 : 260;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
    if (dir === 1 && atEnd) { el.scrollTo({ left: 0, behavior: "smooth" }); return; }
    if (dir === -1 && el.scrollLeft <= 8) { el.scrollTo({ left: el.scrollWidth, behavior: "smooth" }); return; }
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div>
      {/* 最新記事（フィーチャー・大） */}
      {featured && (
        <Link href={featured.href} className="ac-featured" aria-label={featured.title}>
          <Cover a={featured} big />
          <div style={{ padding: "14px 4px 0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{
                fontSize: 9.5, fontWeight: 800, letterSpacing: 0.8,
                padding: "2px 9px", borderRadius: 99,
                background: featured.accent, color: "#fff",
              }}>NEW</span>
              <span style={{ fontSize: 10.5, fontWeight: 700, color: featured.accent }}>{featured.category}</span>
            </div>
            <div style={{ marginTop: 9, fontSize: 17, fontWeight: 800, lineHeight: 1.5, color: INK }}>
              {featured.title}
            </div>
            <div style={{ marginTop: 8, fontSize: 10, color: INK_SOFT, display: "flex", gap: 10, alignItems: "center" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                <Icon.Clock size={11} /> {featured.readTime}で読める
              </span>
              <span>{featured.date}</span>
            </div>
          </div>
        </Link>
      )}

      {/* 横スライド（自動・5記事） */}
      <div style={{ position: "relative", marginTop: 18 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.5, color: INK }}>PICK UP</span>
          <span style={{ display: "flex", gap: 6 }}>
            <button onClick={() => nudge(-1)} aria-label="前へ" className="ac-nav">
              <Icon.Arrow size={13} />
            </button>
            <button onClick={() => nudge(1)} aria-label="次へ" className="ac-nav ac-nav--next">
              <Icon.Arrow size={13} />
            </button>
          </span>
        </div>

        <div ref={trackRef} className="ac-track">
          {rest.map((a) => (
            <Link key={a.href} href={a.href} data-card className="ac-card" aria-label={a.title}>
              <Cover a={a} />
              <div style={{ padding: "10px 2px 0" }}>
                <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: 0.6, color: a.accent }}>{a.category}</span>
                <div style={{ marginTop: 5, fontSize: 12.5, fontWeight: 700, lineHeight: 1.45, color: INK,
                  display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {a.title}
                </div>
                <div style={{ marginTop: 7, fontSize: 9.5, color: INK_SOFT, display: "inline-flex", alignItems: "center", gap: 4 }}>
                  <Icon.Clock size={10} /> {a.readTime}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
