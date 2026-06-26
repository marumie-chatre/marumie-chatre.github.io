"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "./Icon";

export type CarouselArticle = {
  href: string;
  category: string;
  title: string;
  readTime: string;
  date: string;
  accent: string;
  image: string;
};

const SCRIM = "linear-gradient(to top, rgba(28,18,10,0.82) 0%, rgba(28,18,10,0.34) 42%, rgba(28,18,10,0) 72%)";

function useAutoSlide(trackRef: React.RefObject<HTMLDivElement | null>) {
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
      const step = card ? card.offsetWidth + 12 : 240;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
      el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + step, behavior: "smooth" });
    }, 3000);
    return () => {
      window.clearInterval(id);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerdown", onEnter);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [trackRef]);
}

export default function ArticleCarousel({ articles, variant = "featured" }: { articles: CarouselArticle[]; variant?: "featured" | "row" }) {
  const trackRef = useRef<HTMLDivElement>(null);
  useAutoSlide(trackRef);

  // hero直下の「注目の記事」：中央1枚＋左右チラ見せ＋下のドットで枚数を示す
  if (variant === "row") {
    return <RowCarousel articles={articles} />;
  }

  // featured（大カード）＋縦長スライダー
  const [featured, ...rest] = articles;
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

  return (
    <div>
      {featured && (
        <Link href={featured.href} className="ac-featured" aria-label={featured.title}>
          <Image src={featured.image} alt={featured.title} fill priority sizes="(max-width:760px) 100vw, 720px" style={{ objectFit: "cover" }} />
          <span className="ac-scrim" style={{ background: SCRIM }} />
          <div className="ac-featured-body">
            <span style={{ fontSize: 9.5, fontWeight: 800, letterSpacing: 0.8, padding: "3px 9px", borderRadius: 99, background: featured.accent, color: "#fff", alignSelf: "flex-start" }}>{featured.category}</span>
            <div style={{ marginTop: 9, fontSize: 19, fontWeight: 800, lineHeight: 1.45, color: "#fff", textShadow: "0 1px 8px rgba(0,0,0,0.35)" }}>{featured.title}</div>
          </div>
        </Link>
      )}
      <div style={{ position: "relative", marginTop: 18 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.5, color: "#2E1F10" }}>PICK UP</span>
          <span style={{ display: "flex", gap: 6 }}>
            <button onClick={() => nudge(-1)} aria-label="前へ" className="ac-nav"><Icon.Arrow size={13} /></button>
            <button onClick={() => nudge(1)} aria-label="次へ" className="ac-nav ac-nav--next"><Icon.Arrow size={13} /></button>
          </span>
        </div>
        <div ref={trackRef} className="ac-track">
          {rest.map((a) => (
            <Link key={a.href} href={a.href} data-card className="ac-card" aria-label={a.title}>
              <Image src={a.image} alt={a.title} fill sizes="200px" style={{ objectFit: "cover" }} />
              <span className="ac-scrim" style={{ background: SCRIM }} />
              <div className="ac-card-body">
                <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: 0.6, padding: "2px 8px", borderRadius: 99, background: a.accent, color: "#fff", alignSelf: "flex-start" }}>{a.category}</span>
                <div style={{ marginTop: 8, fontSize: 13, fontWeight: 700, lineHeight: 1.4, color: "#fff", textShadow: "0 1px 6px rgba(0,0,0,0.4)", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{a.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// 中央に1枚を大きく見せ、左右に前後をチラ見せ。下のドットで枚数と現在地を示す。
function RowCarousel({ articles }: { articles: CarouselArticle[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const len = articles.length;
  // 無限ループ用に同じ並びを2セット分並べる（末尾→先頭を巻き戻さず繋ぐ）
  const loopItems = [...articles, ...articles];

  const cards = (el: HTMLDivElement) =>
    [...el.querySelectorAll<HTMLElement>("[data-card]")];
  const nearestIndex = (el: HTMLDivElement) => {
    const c = el.scrollLeft + el.clientWidth / 2;
    let best = 0, bestDist = Infinity;
    cards(el).forEach((card, i) => {
      const cc = card.offsetLeft + card.offsetWidth / 2;
      const d = Math.abs(cc - c);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    return best;
  };
  const centerTo = (el: HTMLDivElement, i: number, behavior: ScrollBehavior = "smooth") => {
    const card = cards(el)[i];
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2, behavior });
  };

  // スクロール追従：ドット更新＋2セット目に入ったら1セット分だけ無音で巻き戻して無限化
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf = 0;
    let settle = 0;
    const onScroll = () => {
      // ドット更新（rAFで間引き）
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setActive(nearestIndex(el) % len));
      // 巻き戻し（rAFに依存させない）：止まったら2セット目→1セット分戻して無限化
      window.clearTimeout(settle);
      settle = window.setTimeout(() => {
        const cur = nearestIndex(el);
        if (cur >= len) centerTo(el, cur - len, "auto");
      }, 130);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => { el.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); window.clearTimeout(settle); };
  }, [len]);

  // 自動スライド（常に前進・末尾でも先頭へ巻き戻さずシームレスにループ）
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
    el.addEventListener("pointerup", onLeave);
    const id = window.setInterval(() => {
      if (paused) return;
      centerTo(el, nearestIndex(el) + 1, "smooth");
    }, 3500);
    return () => {
      window.clearInterval(id);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerdown", onEnter);
      el.removeEventListener("pointerleave", onLeave);
      el.removeEventListener("pointerup", onLeave);
    };
  }, [len]);

  return (
    <div>
      <div ref={trackRef} className="ac-center-track">
        {loopItems.map((a, i) => (
          <Link key={`${a.href}-${i}`} href={a.href} data-card className="ac-center-card" aria-label={a.title} tabIndex={i >= len ? -1 : undefined}>
            <Image src={a.image} alt={a.title} fill sizes="(max-width:640px) 80vw, 360px" style={{ objectFit: "cover" }} />
          </Link>
        ))}
      </div>
      <div className="ac-dots" aria-label="記事の枚数">
        {articles.map((a, i) => (
          <button
            key={a.href}
            type="button"
            aria-label={`${i + 1}枚目を見る`}
            aria-current={i === active ? "true" : undefined}
            className={`ac-dot${i === active ? " ac-dot--active" : ""}`}
            onClick={() => { const el = trackRef.current; if (el) centerTo(el, i); }}
          />
        ))}
      </div>
    </div>
  );
}
