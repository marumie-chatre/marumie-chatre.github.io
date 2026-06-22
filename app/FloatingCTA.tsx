"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeoozsXNP5R5hgyPbxMlVPNPBrc2NOceFtI5f97Lbv3KUATkw/viewform?usp=dialog";

const btnStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  background: "#A8C49A",
  color: "#5C3D1F",
  fontWeight: 700,
  fontSize: "14px",
  padding: "13px 28px",
  borderRadius: "100px",
  textDecoration: "none",
  boxShadow: "0 4px 16px rgba(88,122,56,0.18)",
  whiteSpace: "nowrap",
};

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 口コミ投稿が主役のページ（口コミ一覧・各事務所詳細）では「口コミを書く」、
  // それ以外（トップ・お悩み・働き方・エリア・用語などのSEO記事）では
  // 応募導線として「自分に合う事務所をさがす」を出す（押し売りでなく"さがす"の入口）。
  const isReviewContext =
    pathname === "/kuchikomi" || pathname.startsWith("/jimusho/");

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
      {isReviewContext ? (
        <a href={FORM_URL} target="_blank" rel="noopener noreferrer" style={btnStyle}>
          <Icon.Pencil size={16} />
          匿名で口コミを書く
        </a>
      ) : (
        <Link href="/jimusho" style={btnStyle}>
          <Icon.Trophy size={16} />
          自分に合う事務所をさがす
        </Link>
      )}
    </div>
  );
}
