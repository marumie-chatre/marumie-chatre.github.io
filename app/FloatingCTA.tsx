"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: `translateX(-50%) translateY(${visible ? "0" : "80px"})`,
      opacity: visible ? 1 : 0,
      transition: "transform 0.3s ease, opacity 0.3s ease",
      zIndex: 500,
      pointerEvents: visible ? "auto" : "none",
    }}>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeoozsXNP5R5hgyPbxMlVPNPBrc2NOceFtI5f97Lbv3KUATkw/viewform?usp=dialog"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "#7ab548",
          color: "#fff",
          fontWeight: 700,
          fontSize: "14px",
          padding: "13px 28px",
          borderRadius: "100px",
          textDecoration: "none",
          boxShadow: "0 4px 20px rgba(122,181,72,0.45)",
          whiteSpace: "nowrap",
        }}
      >
        ✏️ 匿名で口コミを書く
      </a>
    </div>
  );
}
