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
  accent: string;   // カテゴリチップの色
  image: string;    // カバー写真（写真誌型）
};

// 写真の上に乗せる下方向スクリム（文字可読性）
const SCRIM = "linear-gradient(to top, rgba(28,18,10,0.82) 0%, rgba(28,18,10,0.34) 42%, rgba(28,18,10,0) 72%)";

export default function ArticleCarousel({ articles }: { articles: CarouselArticle[] }) {
  const [featured, ...rest] = articles;
  const trackRef = useRef<HTMLDivElement>(null);

  // 自動スライド（横）：ホバー/タッチ/reduced-motion で停止。端まで来たら先頭へ。
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
      const step = card ? card.offsetWidth + 12 : 192;
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
    const step = card ? card.offsetWidth + 12 : 192;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
    if (dir === 1 && atEnd) { el.scrollTo({ left: 0, behavior: "smooth" }); return; }
    if (dir === -1 && el.scrollLeft <= 8) { el.scrollTo({ left: el.scrollWidth, behavior: "smooth" }); return; }
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const chip = (a: CarouselArticle, extra?: React.ReactNode) => (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      {extra}
      <span style={{
        fontSize: 9.5, fontWeight: 800, letterSpacing: 0.6,
        padding: "3px 10px", borderRadius: 99,
        background: a.accent, color: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
      }}>{a.category}</span>
    </div>
  );

  return (
    <div>
      {/* 最新記事（フィーチャー・写真大・テキストは写真上にオーバーレイ） */}
      {featured && (
        <Link href={featured.href} className="ac-featured" aria-label={featured.title}>
          <Image src={featured.image} alt={featured.title} fill priority
            sizes="(max-width:760px) 100vw, 720px" style={{ objectFit: "cover" }} />
          <span className="ac-scrim" style={{ background: SCRIM }} />
          <div className="ac-featured-body">
            {chip(featured, (
              <span style={{
                fontSize: 9.5, fontWeight: 800, letterSpacing: 0.8,
                padding: "3px 9px", borderRadius: 99,
                background: "#fff", color: featured.accent,
              }}>NEW</span>
            ))}
            <div style={{ marginTop: 10, fontSize: 19, fontWeight: 800, lineHeight: 1.45, color: "#fff",
              textShadow: "0 1px 8px rgba(0,0,0,0.35)" }}>
              {featured.title}
            </div>
            <div style={{ marginTop: 9, fontSize: 10.5, color: "rgba(255,255,255,0.92)", display: "flex", gap: 12, alignItems: "center" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                <Icon.Clock size={11} /> {featured.readTime}で読める
              </span>
              <span>{featured.date}</span>
            </div>
          </div>
        </Link>
      )}

      {/* 横スライド（自動・5記事・縦長の写真カード） */}
      <div style={{ position: "relative", marginTop: 18 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.5, color: "#2E1F10" }}>PICK UP</span>
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
              <Image src={a.image} alt={a.title} fill sizes="200px" style={{ objectFit: "cover" }} />
              <span className="ac-scrim" style={{ background: SCRIM }} />
              <div className="ac-card-body">
                {chip(a)}
                <div style={{ marginTop: 8, fontSize: 13, fontWeight: 700, lineHeight: 1.4, color: "#fff",
                  textShadow: "0 1px 6px rgba(0,0,0,0.4)",
                  display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {a.title}
                </div>
                <div style={{ marginTop: 7, fontSize: 9.5, color: "rgba(255,255,255,0.9)", display: "inline-flex", alignItems: "center", gap: 4 }}>
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
