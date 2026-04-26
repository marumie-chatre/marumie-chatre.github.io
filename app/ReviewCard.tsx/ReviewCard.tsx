import type { Review } from "./reviews";

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
  return (
    <div style={{
      background: "var(--white)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius)",
      padding: "22px 24px",
      boxShadow: "var(--shadow-sm)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "4px" }}>
        <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
          <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--green)", background: "var(--green-pale)", border: "1px solid var(--border-green)", borderRadius: "100px", padding: "2px 10px" }}>
            {review.office}
          </span>
          <span style={{ fontSize: "12px", color: "var(--text-muted)", background: "var(--cream)", border: "1px solid var(--border)", borderRadius: "100px", padding: "2px 10px" }}>
            {review.style}
          </span>
        </div>
        <span style={{ fontSize: "12px", color: "var(--text-light)" }}>{review.period}</span>
      </div>
      <Stars rating={review.rating} />
      <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "10px" }}>
        <div>
          <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--green)", marginBottom: "4px", letterSpacing: "0.05em" }}>良かったこと</div>
          <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.8" }}>{review.good}</p>
        </div>
        <div>
          <div style={{ fontSize: "11px", fontWeight: 700, color: "#c06060", marginBottom: "4px", letterSpacing: "0.05em" }}>気になったこと</div>
          <p style={{ fontSize: "13px", color: "var(--text-mid)", lineHeight: "1.8" }}>{review.bad}</p>
        </div>
        <div style={{ background: "var(--cream)", borderRadius: "8px", padding: "8px 12px" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--text-muted)" }}>向いている人：</span>
          <span style={{ fontSize: "12px", color: "var(--text-mid)" }}>{review.recommend}</span>
        </div>
      </div>
    </div>
  );
}
