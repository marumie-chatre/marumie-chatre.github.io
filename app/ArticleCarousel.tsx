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

  // 横長カードの自動スライド行（hero直下の「注目の記事」用）
  if (variant === "row") {
    return (
      <div ref={trackRef} className="ac-track ac-track--bleed">
        {articles.map((a) => (
          <Link key={a.href} href={a.href} data-card className="ac-row-card" aria-label={a.title}>
            <Image src={a.image} alt={a.title} fill sizes="260px" style={{ objectFit: "cover" }} />
          </Link>
        ))}
      </div>
    );
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
