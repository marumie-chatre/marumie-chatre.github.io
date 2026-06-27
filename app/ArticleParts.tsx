import React from "react";
import Link from "next/link";
import { ARTICLE_THUMBS } from "./relatedThumbs";

/**
 * 記事内で使う装飾コンポーネント群
 * - QABlock：Q&A表示（緑Qバッジ・橙Aバッジ）
 * - PointBox：💡ポイント枠（黄色背景）
 * - WarningBox：⚠️注意枠（薄ピンク背景）
 * - TipBox：✅チェック枠（薄緑背景）
 * - MarkerSpan：黄色マーカー強調
 * - HighlightText：緑色強調
 */

export function QABlock({ q, a }: { q: string; a: React.ReactNode }) {
  return (
    <div style={{
      background: "#fff",
      padding: "20px 24px",
      borderRadius: "12px",
      marginBottom: "20px",
      border: "1px solid #E4E8DA",
      borderLeft: "4px solid var(--green-dark)",
    }}>
      <div style={{
        display: "flex",
        gap: "12px",
        marginBottom: "12px",
        alignItems: "flex-start",
      }}>
        <span style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "28px",
          height: "28px",
          background: "var(--green-dark)",
          color: "#fff",
          borderRadius: "50%",
          fontSize: "14px",
          fontWeight: 900,
          flexShrink: 0,
          lineHeight: 1,
        }}>Q</span>
        <p style={{
          fontSize: "16px",
          fontWeight: 700,
          color: "var(--text)",
          margin: 0,
          lineHeight: 1.5,
          paddingTop: "3px",
        }}>{q}</p>
      </div>
      <div style={{
        display: "flex",
        gap: "12px",
        alignItems: "flex-start",
      }}>
        <span style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "28px",
          height: "28px",
          background: "#e89752",
          color: "#fff",
          borderRadius: "50%",
          fontSize: "14px",
          fontWeight: 900,
          flexShrink: 0,
          lineHeight: 1,
        }}>A</span>
        <div style={{
          fontSize: "14px",
          lineHeight: 1.8,
          color: "#5e4a3a",
          flex: 1,
          paddingTop: "3px",
        }}>{a}</div>
      </div>
    </div>
  );
}

export function PointBox({ children, title = "ポイント" }: { children: React.ReactNode; title?: string }) {
  return (
    <div style={{
      background: "#fff",
      borderRadius: "10px",
      padding: "14px 16px",
      marginBottom: "16px",
      border: "1.5px solid #EAD58A",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "8px" }}>
        <span style={{fontSize: "18px", lineHeight: 1, flexShrink: 0}}>💡</span>
        <div style={{ fontSize: "13px", fontWeight: 700, color: "#a07a30" }}>{title}</div>
      </div>
      <div style={{ fontSize: "14px", lineHeight: 1.95, color: "#5e4a3a" }}>{children}</div>
    </div>
  );
}

export function WarningBox({ children, title = "注意" }: { children: React.ReactNode; title?: string }) {
  return (
    <div style={{
      background: "#fff",
      borderRadius: "10px",
      padding: "14px 16px",
      marginBottom: "16px",
      border: "1px solid #F2D2D2",
      borderLeft: "4px solid #e57373",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "8px" }}>
        <span style={{fontSize: "18px", lineHeight: 1, flexShrink: 0}}>⚠️</span>
        <div style={{ fontSize: "13px", fontWeight: 700, color: "#c06060" }}>{title}</div>
      </div>
      <div style={{ fontSize: "14px", lineHeight: 1.95, color: "#5e4a3a" }}>{children}</div>
    </div>
  );
}

export function TipBox({ children, title = "ここがポイント" }: { children: React.ReactNode; title?: string }) {
  return (
    <div style={{
      background: "#fff",
      borderRadius: "10px",
      padding: "14px 16px",
      marginBottom: "16px",
      border: "1px solid #CDDDB0",
      borderLeft: "4px solid var(--green-dark)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "8px" }}>
        <span style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "20px",
          height: "20px",
          background: "var(--green-dark)",
          color: "#fff",
          borderRadius: "50%",
          fontSize: "12px",
          fontWeight: 900,
          flexShrink: 0,
          lineHeight: 1,
        }}>✓</span>
        <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--green-dark)" }}>{title}</div>
      </div>
      <div style={{ fontSize: "14px", lineHeight: 1.95, color: "#5e4a3a" }}>{children}</div>
    </div>
  );
}

export function MarkerSpan({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      background: "linear-gradient(transparent 60%, #fff3a3 60%)",
      fontWeight: 700,
      padding: "0 2px",
    }}>{children}</span>
  );
}

export function HighlightText({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      color: "var(--green-dark)",
      fontWeight: 700,
    }}>{children}</span>
  );
}

/** あわせて読みたい（本文中インライン／タグ＋サムネ＋タイトルのカード） */
export function ReadAlso({ href, children }: { href: string; children: React.ReactNode }) {
  const thumb = ARTICLE_THUMBS[href];
  return (
    <Link href={href} style={{
      position: "relative",
      display: "flex", gap: "14px", alignItems: "center",
      margin: "30px 0 22px",
      padding: "12px 14px",
      background: "#fff",
      border: "1px solid var(--border-green)",
      borderRadius: "14px",
      boxShadow: "0 2px 10px rgba(70,80,62,0.06)",
      textDecoration: "none",
    }}>
      <span style={{
        position: "absolute", top: "-11px", left: "14px",
        display: "inline-flex", alignItems: "center", gap: "5px",
        fontSize: "10px", fontWeight: 800, letterSpacing: "0.04em",
        color: "#fff", background: "var(--green-dark)",
        padding: "3px 9px", borderRadius: "999px",
        boxShadow: "0 1px 3px rgba(46,31,16,0.18)",
      }}>✓ あわせて読みたい</span>
      {thumb && (
        <span style={{ flexShrink: 0, width: 116, height: 78, borderRadius: "8px", overflow: "hidden", background: "var(--cream)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={thumb} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </span>
      )}
      <span style={{
        flex: 1, minWidth: 0, fontSize: "14.5px", fontWeight: 700, lineHeight: 1.5,
        color: "#2C3326",
      }}>{children}</span>
      <span style={{
        flexShrink: 0, width: 26, height: 26, borderRadius: "50%",
        background: "var(--green-pale)", color: "var(--green-dark)", fontWeight: 800, fontSize: 13,
        display: "inline-flex", alignItems: "center", justifyContent: "center",
      }}>→</span>
    </Link>
  );
}

/** みなみのひとこと（吹き出し）— 会話感・余白・親近感 */
export function MinamiBubble({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", margin: "22px 0" }}>
      <span style={{
        width: 42,
        height: 42,
        borderRadius: "50%",
        flexShrink: 0,
        overflow: "hidden",
        border: "2.5px solid #fff",
        boxShadow: "0 2px 8px rgba(46,31,16,0.16)",
        display: "block",
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/minami-icon.jpg" alt="みなみ" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </span>
      <div style={{
        position: "relative",
        flex: 1,
        background: "var(--green-pale)",
        border: "1.5px solid #CDDDB0",
        borderRadius: "12px",
        padding: "12px 16px",
      }}>
        <span style={{
          position: "absolute",
          left: "-9px",
          top: "14px",
          width: 0,
          height: 0,
          borderTop: "8px solid transparent",
          borderBottom: "8px solid transparent",
          borderRight: "9px solid #CDDDB0",
        }} />
        <span style={{
          position: "absolute",
          left: "-7px",
          top: "15px",
          width: 0,
          height: 0,
          borderTop: "7px solid transparent",
          borderBottom: "7px solid transparent",
          borderRight: "8px solid var(--green-pale)",
        }} />
        <div style={{ fontSize: "10px", fontWeight: 800, color: "var(--green-dark)", marginBottom: "4px" }}>みなみのひとこと</div>
        <div style={{ fontSize: "13.5px", lineHeight: 1.85, color: "#5e4a3a" }}>{children}</div>
      </div>
    </div>
  );
}

/** 記事末の関連記事（タグ見出し＋サムネ＋タイトルのみのカード） */
export function RelatedList({ title = "あわせて読みたい", items }: { title?: string; items: { href: string; label: string }[] }) {
  return (
    <div style={{ margin: "28px 0" }}>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: "5px",
        fontSize: "12px", fontWeight: 800, color: "var(--green-dark)",
        background: "var(--green-pale)", border: "1px solid #cdddb0",
        padding: "5px 12px", borderRadius: "999px", marginBottom: "12px",
      }}>✓ {title}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {items.map((it) => {
          const thumb = ARTICLE_THUMBS[it.href];
          return (
            <Link key={it.href} href={it.href} style={{
              display: "flex", gap: "14px", alignItems: "center",
              background: "#fff", border: "1px solid var(--border-green)", borderRadius: "14px",
              padding: "12px 14px", textDecoration: "none",
              boxShadow: "0 2px 10px rgba(70,80,62,0.06)",
            }}>
              {thumb && (
                <span style={{ flexShrink: 0, width: 116, height: 78, borderRadius: "8px", overflow: "hidden", background: "var(--cream)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={thumb} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </span>
              )}
              <span style={{
                flex: 1, minWidth: 0, fontSize: "14.5px", fontWeight: 700, lineHeight: 1.5,
                color: "#2C3326",
              }}>{it.label}</span>
              <span style={{
                flexShrink: 0, width: 26, height: 26, borderRadius: "50%",
                background: "var(--green-pale)", color: "var(--green-dark)", fontWeight: 800, fontSize: 13,
                display: "inline-flex", alignItems: "center", justifyContent: "center",
              }}>→</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
