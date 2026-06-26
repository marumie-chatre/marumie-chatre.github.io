import React from "react";
import Link from "next/link";

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

/** あわせて読みたい（本文中インラインの回遊ボタン） */
export function ReadAlso({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      background: "var(--green-pale)",
      border: "1px solid #cdddb0",
      borderLeft: "4px solid var(--green-dark)",
      borderRadius: "10px",
      padding: "12px 16px",
      margin: "22px 0",
      textDecoration: "none",
      color: "var(--green-dark)",
    }}>
      <span style={{
        fontSize: "10px",
        fontWeight: 800,
        color: "#fff",
        background: "var(--green-dark)",
        padding: "3px 8px",
        borderRadius: "999px",
        whiteSpace: "nowrap",
        letterSpacing: "0.04em",
        flexShrink: 0,
      }}>あわせて読みたい</span>
      <span style={{
        fontSize: "13px", fontWeight: 700, lineHeight: 1.45, flex: 1,
        color: "var(--green-dark)", textDecoration: "underline", textUnderlineOffset: "2px",
      }}>{children}</span>
      <span style={{
        flexShrink: 0, width: 22, height: 22, borderRadius: "50%",
        background: "var(--green-dark)", color: "#fff", fontWeight: 800, fontSize: 12,
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
        background: "var(--green-pale)",
        color: "var(--green-dark)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 800,
        fontSize: 15,
        border: "2px solid #cdddb0",
        fontFamily: '"Zen Maru Gothic", sans-serif',
      }}>み</span>
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

/** 記事末の関連記事リスト */
export function RelatedList({ title = "あわせて読みたい記事", items }: { title?: string; items: { href: string; label: string }[] }) {
  return (
    <div style={{
      background: "var(--cream)",
      borderRadius: "12px",
      padding: "16px 18px",
      margin: "28px 0",
    }}>
      <div style={{ fontSize: "12px", fontWeight: 800, color: "var(--green-dark)", marginBottom: "10px" }}>{title}</div>
      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "9px" }}>
        {items.map((it) => (
          <li key={it.href}>
            <Link href={it.href} style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              fontWeight: 700,
              color: "var(--green-dark)",
              textDecoration: "none",
              lineHeight: 1.4,
            }}>
              <span style={{ flexShrink: 0 }}>›</span>
              <span style={{ textDecoration: "underline", textUnderlineOffset: "2px" }}>{it.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
