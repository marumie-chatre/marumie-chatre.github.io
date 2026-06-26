"use client";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";

type Review = {
  id: number;
  office: string;
  slug: string;
  period: string;
  submittedAt?: string;
  style: string;
  rating: number;
  good: string;
  bad: string;
  recommend: string;
};

const FADE = "linear-gradient(to bottom, #000 0%, #000 38%, rgba(0,0,0,0.12) 100%)";
const clamp2: CSSProperties = { display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" };

function ReviewCarouselCard({ r }: { r: Review }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = r.good.length > 48 || r.bad.length > 28;
  const collapsed = isLong && !expanded;
  const pBase: CSSProperties = { fontSize: 12.5, lineHeight: 1.7, color: "#46503E", margin: 0 };
  const goodStyle: CSSProperties = collapsed ? { ...pBase, ...clamp2 } : pBase;
  const badStyle: CSSProperties = collapsed
    ? { ...pBase, ...clamp2, filter: "blur(1.5px)", WebkitMaskImage: FADE, maskImage: FADE }
    : pBase;

  return (
    <div data-card className="rc-card">
      <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 10 }}>
        <Image
          src={`/star-${Math.min(5, Math.max(1, Math.round(r.rating)))}.png`}
          alt="" width={52} height={52}
          style={{ width: 52, height: 52, borderRadius: "50%", display: "block", flexShrink: 0 }}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", gap: 1 }}>
            {[1, 2, 3, 4, 5].map(s => (
              <span key={s} style={{ color: s <= r.rating ? "#f5a623" : "#dcdcd2", fontSize: 13, lineHeight: 1 }}>★</span>
            ))}
          </div>
          <div style={{ display: "flex", gap: 5, alignItems: "center", flexWrap: "wrap", marginTop: 5 }}>
            <span style={{ fontSize: 9.5, padding: "2px 7px", borderRadius: 99, background: "#EAF1E0", color: "#587A38", fontWeight: 700 }}>{r.style}</span>
            <span style={{ fontSize: 13, fontWeight: 800, color: "#2C3326" }}>{r.office}</span>
          </div>
          <div style={{ fontSize: 10.5, color: "#8E9882", marginTop: 3 }}>入店：{r.period}</div>
        </div>
      </div>

      <div style={{ fontSize: 11, fontWeight: 700, color: "#587A38", marginBottom: 3 }}>良かったこと</div>
      <p style={{ ...goodStyle, marginBottom: 9 }}>{r.good}</p>

      <div style={{ fontSize: 11, fontWeight: 700, color: "#D17F66", marginBottom: 3 }}>気になったこと</div>
      <p style={badStyle}>{r.bad}</p>

      {expanded && r.recommend && (
        <div style={{ background: "#FAF6F0", borderRadius: 8, padding: "8px 12px", marginTop: 8 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: "#8E9882" }}>向いている人：</span>
          <span style={{ fontSize: 12, color: "#46503E" }}>{r.recommend}</span>
        </div>
      )}

      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            marginTop: 10, background: "none", border: "none",
            color: "#587A38", fontSize: 12, fontWeight: 700,
            cursor: "pointer", padding: 0, textAlign: "left", alignSelf: "flex-start",
          }}
        >
          {expanded ? "▲ 閉じる" : "▼ 続きを見る"}
        </button>
      )}

      <Link href={`/jimusho/${r.slug}`} style={{
        marginTop: 12, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
        padding: "10px 12px", borderRadius: 10, background: "#EFF4E5", color: "#587A38",
        fontSize: 12, fontWeight: 800, textDecoration: "none",
      }}>
        この事務所を見る →
      </Link>
    </div>
  );
}

// TOP用：口コミの横スライド（スワイプ）カルーセル。
export default function ReviewCarousel({ reviews }: { reviews: Review[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const center = el.scrollLeft + el.clientWidth / 2;
        const cards = [...el.querySelectorAll<HTMLElement>("[data-card]")];
        let best = 0, bd = Infinity;
        cards.forEach((c, i) => {
          const cc = c.offsetLeft + c.offsetWidth / 2;
          const d = Math.abs(cc - center);
          if (d < bd) { bd = d; best = i; }
        });
        setActive(best);
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => { el.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const c = el.querySelectorAll<HTMLElement>("[data-card]")[i];
    if (c) el.scrollTo({ left: c.offsetLeft - (el.clientWidth - c.offsetWidth) / 2, behavior: "smooth" });
  };

  return (
    <div>
      <div ref={trackRef} className="rc-track">
        {reviews.map((r) => (
          <ReviewCarouselCard key={r.id} r={r} />
        ))}
      </div>
      <div className="ac-dots" aria-label="口コミの枚数">
        {reviews.map((r, i) => (
          <button
            key={r.id}
            type="button"
            aria-label={`${i + 1}件目を見る`}
            aria-current={i === active ? "true" : undefined}
            className={`ac-dot${i === active ? " ac-dot--active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
