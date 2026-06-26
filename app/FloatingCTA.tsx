"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeoozsXNP5R5hgyPbxMlVPNPBrc2NOceFtI5f97Lbv3KUATkw/viewform?usp=dialog";

// 固定CTAは新しい色を足さず、指定色の範囲で「ベタ塗りをやめて枠線型」に。
// 白地＋緑の枠線＋緑文字＋浮き上がる影で、緑基調の本体に埋もれず・浮かず目立たせる。
const btnStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  background: "#FFFFFF",
  color: "#6FA858",
  fontWeight: 800,
  fontSize: "14px",
  padding: "13px 26px",
  borderRadius: "100px",
  textDecoration: "none",
  border: "2px solid #6FA858",
  boxShadow: "0 8px 24px rgba(46,31,16,0.18)",
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

  // 事務所一覧（ランキング）ページ自体が「事務所をさがす」場所なので、固定CTAは出さない（自己リンク回避）。
  if (pathname === "/jimusho") return null;

  // 事務所詳細ページでは「働いた経験＝口コミを書く」を主導線に。
  // 口コミ一覧ページは「読んだ→事務所をさがす」が自然なので、他ページと同じ「事務所をさがす」を出す。
  const isReviewContext = pathname.startsWith("/jimusho/");

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
