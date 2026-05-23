import React from "react";

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
      background: "var(--cream)",
      padding: "20px 24px",
      borderRadius: "12px",
      marginBottom: "20px",
      borderLeft: "4px solid #5a9a30",
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
      background: "#fff8e1",
      borderRadius: "10px",
      padding: "16px 20px",
      display: "flex",
      gap: "12px",
      alignItems: "flex-start",
      marginBottom: "16px",
      border: "1px solid #f5dc80",
    }}>
      <span style={{fontSize: "22px", lineHeight: 1, flexShrink: 0}}>💡</span>
      <div style={{flex: 1}}>
        <div style={{
          fontSize: "13px",
          fontWeight: 700,
          color: "#a07a30",
          marginBottom: "6px",
        }}>{title}</div>
        <div style={{
          fontSize: "14px",
          lineHeight: 1.7,
          color: "#5e4a3a",
        }}>{children}</div>
      </div>
    </div>
  );
}

export function WarningBox({ children, title = "注意" }: { children: React.ReactNode; title?: string }) {
  return (
    <div style={{
      background: "#fdf0f0",
      borderRadius: "10px",
      padding: "16px 20px",
      display: "flex",
      gap: "12px",
      alignItems: "flex-start",
      marginBottom: "16px",
      borderLeft: "4px solid #e57373",
    }}>
      <span style={{fontSize: "22px", lineHeight: 1, flexShrink: 0}}>⚠️</span>
      <div style={{flex: 1}}>
        <div style={{
          fontSize: "13px",
          fontWeight: 700,
          color: "#c06060",
          marginBottom: "6px",
        }}>{title}</div>
        <div style={{
          fontSize: "14px",
          lineHeight: 1.7,
          color: "#5e4a3a",
        }}>{children}</div>
      </div>
    </div>
  );
}

export function TipBox({ children, title = "ここがポイント" }: { children: React.ReactNode; title?: string }) {
  return (
    <div style={{
      background: "#f0f8ec",
      borderRadius: "10px",
      padding: "16px 20px",
      display: "flex",
      gap: "12px",
      alignItems: "flex-start",
      marginBottom: "16px",
      borderLeft: "4px solid #5a9a30",
    }}>
      <span style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "22px",
        height: "22px",
        background: "var(--green-dark)",
        color: "#fff",
        borderRadius: "50%",
        fontSize: "13px",
        fontWeight: 900,
        flexShrink: 0,
        lineHeight: 1,
      }}>✓</span>
      <div style={{flex: 1}}>
        <div style={{
          fontSize: "13px",
          fontWeight: 700,
          color: "var(--green-dark)",
          marginBottom: "6px",
        }}>{title}</div>
        <div style={{
          fontSize: "14px",
          lineHeight: 1.7,
          color: "#5e4a3a",
        }}>{children}</div>
      </div>
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
