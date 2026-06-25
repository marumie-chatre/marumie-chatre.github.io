import React from "react";
import Link from "next/link";
import Image from "next/image";

// エリアページのランキングカード（全エリア共通の型・中身はページごとに差し替え）
// スコア/タグ/forYou は app/jimusho/JimushoList.tsx の実データに準拠すること。
// レイアウト方針：スマホ前提で全幅・縦積み。情報の種類ごとに淡い色面で区切る。
export type AreaReview = { meta: string; good: string; bad: string };
export type AreaCardData = {
  rank: number;
  name: string;
  slug: string;
  score: number; // 5基準の総合（/100）
  tags: string[];
  intro: React.ReactNode;
  forYou: string[]; // 向いている人
  concern: React.ReactNode; // 気になる点
  reward: string;
  review: AreaReview; // 実投稿のgood/bad（出典metaつき）
};

// office-header-{slug}.png の実寸（比率保持用）。画像を差し替えたら、その社の寸法をここで更新する。
const BANNER_SIZE: Record<string, [number, number]> = {
  ft: [1901, 918],
  "bright-group": [1410, 832],
  chatstyle: [1893, 777],
  "at-group": [1382, 543],
  "flavor-group": [1142, 571],
  "liver-support": [1518, 926],
  "chatlady-jp": [622, 350],
  asterisk: [1895, 1051],
  "pocket-work": [1892, 638],
  "nmr-group": [1701, 918],
  allure: [1410, 798],
};

export function AreaRankingCard({ c }: { c: AreaCardData }) {
  const isTop = c.rank === 1;
  const badge = c.slug === "ft" ? "初心者に最もおすすめ" : `${c.rank}位`;
  const [bw, bh] = BANNER_SIZE[c.slug] ?? [1600, 800];

  return (
    <article
      style={{
        background: "#fff",
        border: isTop ? "2px solid #6FA858" : "1px solid var(--border-green)",
        borderRadius: "16px",
        overflow: "hidden",
        margin: "20px 0",
      }}
    >
      {/* 1位バッジ（画像に重ねず、上の独立した帯で常に読みやすく） */}
      {isTop && (
        <div
          style={{
            background: "#587A38",
            color: "#fff",
            fontSize: "12px",
            fontWeight: 700,
            padding: "7px 16px",
            letterSpacing: "0.02em",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span aria-hidden="true">★</span>
          {badge}
        </div>
      )}

      {/* バナー画像（事務所ヘッダー・自然な比率で全体表示） */}
      <div style={{ width: "100%", lineHeight: 0, background: "var(--green-pale)" }}>
        <Image
          src={`/office-header-${c.slug}.png`}
          alt={c.name}
          width={bw}
          height={bh}
          sizes="(max-width: 768px) 100vw, 720px"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>

      {/* ヘッダー帯：順位・店名・スコア */}
      <div style={{ background: "var(--green-pale)", padding: "13px 16px", display: "flex", alignItems: "center", gap: "11px" }}>
        <span
          style={{
            flexShrink: 0,
            width: "36px",
            height: "36px",
            borderRadius: "10px",
            background: "var(--green-dark)",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: 1,
          }}
        >
          <span style={{ fontSize: "8px", letterSpacing: "0.05em" }}>No.</span>
          <span style={{ fontSize: "16px", fontWeight: 800 }}>{c.rank}</span>
        </span>
        <h3
          style={{
            flex: 1,
            margin: 0,
            fontFamily: '"Zen Maru Gothic", sans-serif',
            fontSize: "17px",
            fontWeight: 700,
            color: "var(--text)",
          }}
        >
          <Link href={`/jimusho/${c.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
            {c.name}
          </Link>
        </h3>
        <span style={{ flexShrink: 0, color: "var(--green-dark)", fontWeight: 800, lineHeight: 1 }}>
          <span style={{ fontSize: "22px" }}>{c.score}</span>
          <span style={{ fontSize: "11px", color: "#9aa886" }}>/100</span>
        </span>
      </div>

      <div style={{ padding: "15px 16px" }}>
        {/* タグ */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "12px" }}>
          {c.tags.map((t) => (
            <span
              key={t}
              style={{
                fontSize: "11px",
                padding: "3px 10px",
                borderRadius: "100px",
                background: "var(--green-pale)",
                color: "var(--green-dark)",
                border: "1px solid var(--border-green)",
                fontWeight: 600,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* 紹介文 */}
        <p style={{ fontSize: "14px", lineHeight: 1.85, color: "var(--text-mid)", margin: "0 0 14px" }}>{c.intro}</p>

        {/* 向いている人（緑） */}
        <div style={{ background: "#F2F7E8", border: "1px solid var(--border-green)", borderRadius: "12px", padding: "12px 14px", marginBottom: "11px" }}>
          <div style={{ fontSize: "12px", fontWeight: 700, color: "#3B6D11", marginBottom: "8px" }}>
            <span aria-hidden="true" style={{ marginRight: "5px" }}>✓</span>向いている人
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
            {c.forYou.map((f, i) => (
              <li key={i} style={{ fontSize: "13px", lineHeight: 1.6, color: "var(--text-mid)", paddingLeft: "16px", position: "relative" }}>
                <span aria-hidden="true" style={{ position: "absolute", left: 0, color: "var(--green)", fontWeight: 700, fontSize: "11px" }}>✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* 気になる点（アンバー） */}
        <div style={{ background: "#FEF7E7", border: "1px solid #F0E3BE", borderRadius: "12px", padding: "12px 14px", marginBottom: "11px" }}>
          <div style={{ fontSize: "12px", fontWeight: 700, color: "#8a6206", marginBottom: "8px" }}>
            <span aria-hidden="true" style={{ marginRight: "5px" }}>⚠️</span>気になる点
          </div>
          <p style={{ fontSize: "13px", lineHeight: 1.7, color: "var(--text-mid)", margin: 0 }}>{c.concern}</p>
        </div>

        {/* 報酬（メタ行） */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "8px",
            fontSize: "12.5px",
            lineHeight: 1.6,
            color: "#6f6a60",
            background: "var(--cream)",
            border: "1px solid #ECEEE4",
            borderRadius: "10px",
            padding: "10px 12px",
            marginBottom: "11px",
          }}
        >
          <span aria-hidden="true" style={{ color: "#C19A66", flexShrink: 0 }}>￥</span>
          <span>
            <span style={{ fontWeight: 700, color: "var(--text-mid)", marginRight: "4px" }}>報酬</span>
            {c.reward}
          </span>
        </div>

        {/* 実在口コミ（good＋bad・出典つき） */}
        <div style={{ background: "#FAF6EE", border: "1px solid #EBE3D2", borderRadius: "12px", padding: "12px 14px", marginBottom: "14px" }}>
          <div style={{ fontSize: "11.5px", fontWeight: 700, color: "#9c7a3e", marginBottom: "9px" }}>{c.review.meta}</div>
          <p style={{ fontSize: "13px", lineHeight: 1.7, color: "var(--text-mid)", margin: "0 0 8px" }}>
            <span style={{ display: "inline-block", fontSize: "11px", fontWeight: 700, color: "#fff", background: "var(--green)", borderRadius: "5px", padding: "1px 7px", marginRight: "6px", verticalAlign: "1px" }}>よかった</span>
            {c.review.good}
          </p>
          <p style={{ fontSize: "13px", lineHeight: 1.7, color: "var(--text-mid)", margin: 0 }}>
            <span style={{ display: "inline-block", fontSize: "11px", fontWeight: 700, color: "#fff", background: "#C7972F", borderRadius: "5px", padding: "1px 7px", marginRight: "6px", verticalAlign: "1px" }}>気になった</span>
            {c.review.bad}
          </p>
        </div>

        {/* 詳細リンク（全幅ピル） */}
        <div style={{ textAlign: "center" }}>
          <Link
            href={`/jimusho/${c.slug}`}
            style={{
              display: "block",
              fontSize: "13px",
              fontWeight: 700,
              color: "var(--green-dark)",
              textDecoration: "none",
              border: "1px solid var(--border-green)",
              borderRadius: "100px",
              padding: "11px",
            }}
          >
            {c.name}の詳細・口コミを見る →
          </Link>
        </div>
      </div>
    </article>
  );
}
