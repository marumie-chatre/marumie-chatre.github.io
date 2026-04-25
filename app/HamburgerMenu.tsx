"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);

  // メニュー開閉時にbodyのスクロールを制御
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
        className={`hamburger${isOpen ? " active" : ""}`}
        aria-label="メニューを開く"
        onClick={toggle}
        style={{position:"relative", zIndex: 400}}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* オーバーレイ（背景暗幕） */}
      {isOpen && (
        <div
          onClick={close}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            zIndex: 350,
          }}
        />
      )}

      {/* スライドメニュー本体 */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "280px",
          height: "100vh",
          background: "#fff",
          zIndex: 400,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.28s ease",
          overflowY: "auto",
          boxShadow: "-4px 0 24px rgba(0,0,0,0.15)",
          paddingTop: "68px",
        }}
      >
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
