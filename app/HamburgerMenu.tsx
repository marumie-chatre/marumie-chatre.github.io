"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* 三本線ボタン */}
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
        }}
      >
        <span style={{
          display: "block", width: "100%", height: "2px",
          background: "#2d2d2d", borderRadius: "2px",
          transition: "all .25s ease", transformOrigin: "center",
          transform: isOpen ? "translateY(7px) rotate(45deg)" : "none",
        }}/>
        <span style={{
          display: "block", width: "100%", height: "2px",
          background: "#2d2d2d", borderRadius: "2px",
          transition: "all .25s ease",
          opacity: isOpen ? 0 : 1,
          transform: isOpen ? "scaleX(0)" : "none",
        }}/>
        <span style={{
          display: "block", width: "100%", height: "2px",
          background: "#2d2d2d", borderRadius: "2px",
          transition: "all .25s ease", transformOrigin: "center",
          transform: isOpen ? "translateY(-7px) rotate(-45deg)" : "none",
        }}/>
      </button>

      {/* オーバーレイ */}
      {isOpen && (
        <div
          onClick={close}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            zIndex: 398,
          }}
        />
      )}

      {/* メニュー本体 */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "280px",
          height: "100vh",
          background: "#fff",
          zIndex: 399,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.28s ease",
          overflowY: "auto",
          overflowX: "hidden",
          boxShadow: isOpen ? "-4px 0 24px rgba(0,0,0,0.15)" : "none",
        }}
      >
        {/* ✕ボタン */}
        <div style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "16px 16px 0",
        }}>
          <button
            onClick={close}
            aria-label="メニューを閉じる"
            style={{
              width: "36px", height: "36px",
              background: "#f4f9ed",
              border: "1px solid #cce8a0",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "16px",
              color: "#6a9e35",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
            }}
          >✕</button>
        </div>

        {/* ナビリンク */}
        <nav style={{display:"flex", flexDirection:"column", marginTop:"8px"}}>
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
