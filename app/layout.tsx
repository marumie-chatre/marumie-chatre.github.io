"use client";
import Link from "next/link";
import "./globals.css";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700&family=Zen+Maru+Gothic:wght@400;500;700&family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* HEADER */}
        <header className="site-header">
          <div className="header-inner">
            <Link href="/" className="logo">
              <img src="/logo.png" alt="まるみえチャトレ" height={44} />
            </Link>
            {/* PC ナビ */}
            <nav className="gnav">
              <Link href="/jimusho">事務所を探す</Link>
              <Link href="/area/shinjuku">エリアから探す</Link>
              <Link href="/style/zaitaku">働き方から探す</Link>
              <Link href="/q/barebure">お悩みから探す</Link>
              <Link href="/kuchikomi">口コミ</Link>
              <Link href="/column">コラム</Link>
            </nav>
            {/* ハンバーガーボタン（スマホのみ表示） */}
            <button
              className="hamburger"
              aria-label="メニューを開く"
              onClick={() => {
                const menu = document.getElementById("sp-menu");
                const btn = document.querySelector(".hamburger");
                if (menu) menu.classList.toggle("open");
                if (btn) btn.classList.toggle("active");
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </header>

        {/* スマホメニュー */}
        <div id="sp-menu" className="sp-menu">
          <nav className="sp-nav">
            <Link href="/jimusho" onClick={() => {
              document.getElementById("sp-menu")?.classList.remove("open");
              document.querySelector(".hamburger")?.classList.remove("active");
            }}>
              <span className="sp-nav-icon">📊</span>事務所を探す
            </Link>
            <Link href="/area/shinjuku" onClick={() => {
              document.getElementById("sp-menu")?.classList.remove("open");
              document.querySelector(".hamburger")?.classList.remove("active");
            }}>
              <span className="sp-nav-icon">📍</span>エリアから探す
            </Link>
            <Link href="/style/zaitaku" onClick={() => {
              document.getElementById("sp-menu")?.classList.remove("open");
              document.querySelector(".hamburger")?.classList.remove("active");
            }}>
              <span className="sp-nav-icon">💼</span>働き方から探す
            </Link>
            <Link href="/q/barebure" onClick={() => {
              document.getElementById("sp-menu")?.classList.remove("open");
              document.querySelector(".hamburger")?.classList.remove("active");
            }}>
              <span className="sp-nav-icon">🙋</span>お悩みから探す
            </Link>
            <Link href="/kuchikomi" onClick={() => {
              document.getElementById("sp-menu")?.classList.remove("open");
              document.querySelector(".hamburger")?.classList.remove("active");
            }}>
              <span className="sp-nav-icon">💬</span>口コミを投稿する
            </Link>
            <Link href="/column" onClick={() => {
              document.getElementById("sp-menu")?.classList.remove("open");
              document.querySelector(".hamburger")?.classList.remove("active");
            }}>
              <span className="sp-nav-icon">📝</span>コラム
            </Link>
          </nav>
        </div>
        {/* オーバーレイ */}
        <div
          className="sp-overlay"
          onClick={() => {
            document.getElementById("sp-menu")?.classList.remove("open");
            document.querySelector(".hamburger")?.classList.remove("active");
          }}
        />

        {children}

        {/* FOOTER */}
        <footer className="site-footer">
          <div className="footer-inner">
            <div className="footer-top">
              <div>
                <div className="footer-logo">
                  <img src="/logo.png" alt="まるみえチャトレ" height={36} />
                </div>
                <div className="footer-tag">ちゃんと選びたい人のための事務所比較サイト</div>
              </div>
              <div className="footer-links">
                <Link href="/hyoka-kijun">評価基準について</Link>
                <Link href="/profile">運営者プロフィール</Link>
                <Link href="/guideline">口コミガイドライン</Link>
              </div>
            </div>
            <div className="footer-bottom">
              <span>© 2025 まるみえチャトレ</span>
              <span>当サイトの評価スコアは独自調査に基づきます</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
