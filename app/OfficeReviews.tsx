"use client";
import { useState } from "react";

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

function FaceIcon({ rating, size = 64 }: { rating: number; size?: number }) {
  // 1〜5 の範囲にクランプ
  const clamped = Math.min(5, Math.max(1, Math.round(rating)));
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={`/star-${clamped}.png`}
      alt={`評価 ${clamped}/5`}
      width={size}
      height={size}
      style={{
        width: size, height: size, borderRadius: "50%",
        display: "block", flexShrink: 0,
      }}
    />
  );
}

function StarRow({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{
          color: i <= rating ? "#f5a623" : "#ddd",
          fontSize: `${size}px`, lineHeight: 1,
        }}>★</span>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const maxLen = 60;
  const isLong = review.good.length > maxLen || review.bad.length > maxLen;
  const goodText = expanded ? review.good : review.good.slice(0, maxLen) + (review.good.length > maxLen ? "…" : "");
  const badText = expanded ? review.bad : review.bad.slice(0, maxLen) + (review.bad.length > maxLen ? "…" : "");

  return (
    <div style={{
      background: "var(--white)", border: "1px solid var(--border)",
      borderRadius: "var(--radius)", padding: "18px 20px",
      boxShadow: "var(--shadow-sm)", display: "flex", flexDirection: "column",
    }}>
      {/* 顔アイコン（左上 64px）＋右側 3段（星／タグ・事務所名／時期） */}
      <div style={{ display: "flex", gap: "14px", alignItems: "flex-start", marginBottom: "12px" }}>
        <FaceIcon rating={review.rating} size={64} />
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* 星 ★ */}
          <StarRow rating={review.rating} size={16} />
          {/* タグ + 事務所名 */}
          <div style={{
            display: "flex", gap: "6px", alignItems: "center", flexWrap: "wrap",
            marginTop: "6px",
          }}>
            <span style={{
              fontSize: "10px", padding: "2px 8px", borderRadius: "100px",
              background: "var(--cream)", border: "1px solid var(--border)",
              color: "var(--text-muted)", fontWeight: 700,
            }}>{review.style}</span>
            <span style={{ fontSize: "13px", fontWeight: 800, color: "var(--text)" }}>
              {review.office}
            </span>
          </div>
          {/* 入店日 + 投稿日時 */}
          <div style={{
            fontSize: "10.5px", color: "var(--text-light)", marginTop: "4px",
            display: "flex", gap: "10px", flexWrap: "wrap",
          }}>
            <span>入店：{review.period}</span>
            {review.submittedAt && (
              <span style={{ opacity: 0.75 }}>投稿：{review.submittedAt}</span>
            )}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "0" }}>
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
        <button onClick={() => setExpanded(!expanded)} style={{
          marginTop: "10px", background: "none", border: "none",
          color: "var(--green)", fontSize: "12px", fontWeight: 700,
          cursor: "pointer", padding: "0", textAlign: "left",
        }}>
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

const INITIAL_COUNT = 3;

export default function OfficeReviews({
  reviews,
  officeName,
}: {
  reviews: Review[];
  officeName: string;
}) {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? reviews : reviews.slice(0, INITIAL_COUNT);
  const remaining = reviews.length - INITIAL_COUNT;
  const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeoozsXNP5R5hgyPbxMlVPNPBrc2NOceFtI5f97Lbv3KUATkw/viewform?usp=dialog";

  if (reviews.length === 0) {
    return (
      <div className="detail-kuchikomi-empty">
        <p>{officeName}で働いた経験がある方、ぜひ口コミを投稿してください。<br />あなたの本音が、次に選ぶ誰かの安心になります。</p>
        <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-main">
          口コミを投稿する →
        </a>
      </div>
    );
  }

  const average = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
  const avgDisplay = (Math.round(average * 10) / 10).toFixed(1);

  return (
    <div>
      <div style={{
        display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap",
        background: "var(--cream)", padding: "14px 18px",
        borderRadius: "var(--radius)", marginBottom: "20px",
      }}>
        <FaceIcon rating={Math.round(average)} size={56} />
        <div>
          <StarRow rating={Math.round(average)} size={16} />
          <div style={{ marginTop: 2, display: "flex", alignItems: "baseline", gap: 6 }}>
            <span style={{ fontSize: "20px", fontWeight: 700, color: "var(--text)" }}>
              {avgDisplay}
            </span>
            <span style={{ fontSize: "12px", color: "var(--text-light)" }}>
              / 5.0（{officeName}の口コミ {reviews.length}件の平均）
            </span>
          </div>
        </div>
      </div>

      <div className="review-grid" style={{ marginBottom: "20px" }}>
        {displayed.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
        {!showAll && remaining > 0 && (
          <button
            onClick={() => setShowAll(true)}
            className="btn-sub"
            style={{ cursor: "pointer", border: "1px solid var(--border)" }}
          >
            口コミをもっと見る（残り{remaining}件）
          </button>
        )}
        {showAll && reviews.length > INITIAL_COUNT && (
          <button
            onClick={() => setShowAll(false)}
            className="btn-sub"
            style={{ cursor: "pointer", border: "1px solid var(--border)" }}
          >
            ▲ 閉じる
          </button>
        )}
        <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-sub">
          {officeName}の口コミを投稿する →
        </a>
      </div>
    </div>
  );
}
