"use client";
import Link from "next/link";
import { useState } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <>
      <button
        className={`hamburger${isOpen ? " active" : ""}`}
        aria-label="メニューを開く"
        onClick={toggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`sp-menu${isOpen ? " open" : ""}`}>
        <nav className="sp-nav">
          <Link href="/jimusho" onClick={close}>
            <span className="sp-nav-icon">📊</span>事務所を探す
          </Link>
          <Link href="/area/shinjuku" onClick={close}>
            <span className="sp-nav-icon">📍</span>エリアから探す
          </Link>
          <Link href="/style/zaitaku" onClick={close}>
            <span className="sp-nav-icon">💼</span>働き方から探す
          </Link>
          <Link href="/q/barebure" onClick={close}>
            <span className="sp-nav-icon">🙋</span>お悩みから探す
          </Link>
          <Link href="/kuchikomi" onClick={close}>
            <span className="sp-nav-icon">💬</span>口コミを投稿する
          </Link>
          <Link href="/column" onClick={close}>
            <span className="sp-nav-icon">📝</span>コラム
          </Link>
        </nav>
      </div>

      {isOpen && (
        <div className="sp-overlay visible" onClick={close} />
      )}
    </>
  );
}
