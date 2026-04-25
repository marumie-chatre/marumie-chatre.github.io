"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* 三本線ボタン（メニューが開いたら非表示） */}
      <button
        aria-label="メニューを開く"
        onClick={toggle}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "5px",
          width: "40px",
          height: "40px",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "6px",
          borderRadius: "8px",
          position: "relative",
          zIndex: 401,
          opacity: isOpen ? 0 : 1,
          pointerEvents: isOpen ? "none" : "auto",
          transition: "opacity 0.2s ease",
        }}
      >
        <span style={{display:"block",width:"100%",height:"2px",background:"#2d2d2d",borderRadius:"2px"}}/>
        <span style={{display:"block",width:"100%",height:"2px",background:"#2d2d2d",borderRadius:"2px"}}/>
        <span style={{display:"block",width:"100%",height:"2px",background:"#2d2d2d",borderRadius:"2px"}}/>
      </button>

      {/* オーバーレイ */}
      {isOpen && (
        <div
          onClick={close}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(0,0,0,0.45)",
            zIndex: 398,
          }}
        />
      )}

      {/* メニュー本体 */}
      <div style={{
        position: "fixed", top: 0, right: 0,
        width: "280px", height: "100vh",
        background: "#fff",
        zIndex: 399,
        transform: isOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.28s ease",
        overflowY: "auto", overflowX: "hidden",
        boxShadow: isOpen ? "-4px 0 24px rgba(0,0,0,0.15)" : "none",
      }}>

        {/* メニューヘッダー */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 20px",
          borderBottom: "1px solid #ebebeb",
        }}>
          <span style={{fontSize:"14px", fontWeight:700, color:"#6a9e35"}}>メニュー</span>
          <button
            onClick={close}
            aria-label="メニューを閉じる"
            style={{
              width: "32px", height: "32px",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "20px",
              color: "#777",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              lineHeight: 1,
            }}
          >✕</button>
        </div>

        {/* ナビリンク */}
        <nav style={{display:"flex", flexDirection:"column"}}>
          {[
            { href: "/jimusho", icon: "📊", label: "事務所を探す" },
            { href: "/area/shinjuku", icon: "📍", label: "エリアから探す" },
            { href: "/style/zaitaku", icon: "💼", label: "働き方から探す" },
            { href: "/q/barebure", icon: "🙋", label: "お悩みから探す" },
            { href: "/kuchikomi", icon: "💬", label: "口コミを投稿する" },
            { href: "/column", icon: "📝", label: "コラム" },
          ].map(({ href, icon, label }) => (
            <Link
              key={href}
              href={href}
              onClick={close}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px 24px",
                fontSize: "15px",
                fontWeight: 500,
                color: "#2d2d2d",
                textDecoration: "none",
                borderBottom: "1px solid #ebebeb",
              }}
            >
              <span style={{fontSize:"18px", width:"24px", textAlign:"center"}}>{icon}</span>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
