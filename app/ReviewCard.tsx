"use client";
import { useState } from "react";

type Review = {
  id: number;
  office: string;
  slug: string;
  period: string;
  style: string;
  rating: number;
  good: string;
  bad: string;
  recommend: string;
};

function Stars({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: "2px", margin: "6px 0" }}>
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ color: i <= rating ? "#f5a623" : "#ddd", fontSize: "16px" }}>★</span>
      ))}
    </div>
  );
}

export default function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);

  const maxLen = 60;
  const isLong = review.good.length > maxLen || review.bad.length > maxLen;
  const goodText = expanded ? review.good : review.good.slice(0, maxLen) + (review.good.length > maxLen ? "…" : "");
  const badText = expanded ? review.bad : review.bad.slice(0, maxLen) + (review.bad.length > maxLen ? "…" : "");

  return (
    <div style={{
      background: "var(--white)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius)",
      padding: "18px 20px",
      boxShadow: "var(--shadow-sm)",
      display: "flex",
      flexDirection: "column",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "6px" }}>
        <div style={{ display: "flex", gap: "6px", alignItems: "center", flexWrap: "wrap" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--green)", background: "var(--green-pale)", border: "1px solid var(--border-green)", borderRadius: "100px", padding: "2px 10px" }}>
            {review.office}
          </span>
          <span style={{ fontSize: "11px", color: "var(--text-muted)", background: "var(--cream)", border: "1px solid var(--border)", borderRadius: "100px", padding: "2px 8px" }}>
            {review.style}
          </span>
        </div>
        <span style={{ fontSize: "11px", color: "var(--text-light)" }}>{review.period}</span>
      </div>

      <Stars rating={review.rating} />

      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px" }}>
        <div>
          <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--green)", marginBottom: "3px" }}>良かったこと</div>
          <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.75", margin: 0 }}>{goodText}</p>
        </div>
        <div>
          <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-accent-deep)", marginBottom: "3px" }}>気になったこと</div>
          <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.75", margin: 0 }}>{badText}</p>
        </div>
      </div>

      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            marginTop: "10px", background: "none", border: "none",
            color: "var(--green)", fontSize: "12px", fontWeight: 700,
            cursor: "pointer", padding: "0", textAlign: "left",
          }}
        >
          {expanded ? "▲ 閉じる" : "▼ もっと見る"}
        </button>
      )}

      {expanded && (
        <div style={{ background: "var(--cream)", borderRadius: "8px", padding: "8px 12px", marginTop: "8px" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--text-muted)" }}>向いている人：</span>
          <span style={{ fontSize: "12px", color: "var(--text-mid)" }}>{review.recommend}</span>
        </div>
      )}
    </div>
  );
}
