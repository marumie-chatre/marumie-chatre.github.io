"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Icon } from "./Icon";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navItems = [
    { href: "/jimusho", icon: "/icon-recommend.svg", label: "ランキング" },
    { href: "/area", icon: "/icon-area.svg", label: "エリア" },
    { href: "/style", icon: "/icon-work.svg", label: "働き方" },
    { href: "/q", icon: "/icon-safe.svg", label: "不安から探す" },
    { href: "/kuchikomi", icon: "/icon-review2.svg", label: "口コミ" },
    { href: "/column", icon: "/icon-column.svg", label: "コラム" },
  ];

  return (
    <>
      {/* 三本線ボタン */}
      <button
        aria-label="メニューを開く"
        onClick={toggle}
        style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          gap: "5px", width: "40px", height: "40px",
          background: "none", border: "none", cursor: "pointer",
          padding: "6px", borderRadius: "8px",
          position: "relative", zIndex: 401,
          opacity: isOpen ? 0 : 1,
          pointerEvents: isOpen ? "none" : "auto",
          transition: "opacity 0.2s ease",
        }}
      >
        <span style={{display:"block",width:"100%",height:"2px",background:"var(--text)",borderRadius:"2px"}}/>
        <span style={{display:"block",width:"100%",height:"2px",background:"var(--text)",borderRadius:"2px"}}/>
        <span style={{display:"block",width:"100%",height:"2px",background:"var(--text)",borderRadius:"2px"}}/>
      </button>

      {/* オーバーレイ */}
      {isOpen && (
        <div onClick={close} style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.45)", zIndex:398 }} />
      )}

      {/* メニュー本体（中央大展開UI・クリーム背景） */}
      <div style={{
        position:"fixed", top:0, left:0, width:"100%", height:"100vh",
        background:"var(--cream)", zIndex:399,
        transform: isOpen ? "translateY(0)" : "translateY(-100%)",
        transition:"transform 0.35s ease",
        overflowY:"auto",
        display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
      }}>
        {/* 閉じるボタン（ink 薄シェル + ink text - refined） */}
        <button onClick={close} aria-label="閉じる" style={{
          position:"absolute", top:"16px", right:"20px",
          width:"44px", height:"44px",
          background:"rgba(36,30,22,0.08)", border:"none",
          cursor:"pointer", fontSize:"22px", color:"var(--text)", fontWeight:700,
          display:"flex", alignItems:"center", justifyContent:"center",
          borderRadius:"50%",
        }}>✕</button>

        {/* サイトロゴ（ink color - 緑をナロー化） */}
        <div style={{marginBottom:"32px", textAlign:"center"}}>
          <div style={{
            fontSize:"22px", fontWeight:900, color:"var(--text)",
            letterSpacing:"0.1em", marginBottom:"4px",
          }}>まるみえチャトレ</div>
          <div style={{fontSize:"12px", color:"var(--text-muted)", letterSpacing:"0.15em"}}>
            REAL CHATRE REVIEW
          </div>
        </div>

        {/* ナビ（中央・大きく・ink color） */}
        <nav style={{
          display:"flex", flexDirection:"column",
          alignItems:"center", gap:"4px",
          width:"100%", maxWidth:"320px",
          padding:"0 20px",
        }}>
          {navItems.map(({ href, label }) => (
            <Link key={href} href={href} onClick={close} style={{
              display:"flex", alignItems:"center", justifyContent:"center",
              padding:"14px 20px",
              fontSize:"19px", fontWeight:700,
              color:"var(--text)", textDecoration:"none",
              width:"100%",
              borderBottom:"1px solid rgba(36,30,22,0.10)",
            }}>
              {label}
            </Link>
          ))}
        </nav>

        {/* 投稿ボタン（ink bg + white text - refined） */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeoozsXNP5R5hgyPbxMlVPNPBrc2NOceFtI5f97Lbv3KUATkw/viewform?usp=dialog"
          target="_blank" rel="noopener noreferrer" onClick={close}
          style={{
            display:"inline-flex", alignItems:"center", justifyContent:"center",
            gap:"8px",
            background:"var(--text)", color:"#fff",
            fontWeight:700, fontSize:"15px",
            padding:"14px 32px", borderRadius:"100px",
            textDecoration:"none",
            marginTop:"32px",
            boxShadow:"0 6px 22px rgba(36,30,22,0.28)",
          }}
        >
          <Icon.Pencil size={16} />
          匿名で口コミを投稿する
        </a>
      </div>
    </>
  );
}
