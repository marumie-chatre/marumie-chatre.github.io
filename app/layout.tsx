import type { Metadata } from "next";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import FloatingCTA from "./FloatingCTA";
import "./globals.css";

export const metadata: Metadata = {
  title: "まるみえチャトレ｜中身で選ぶチャトレ事務所",
  description: "事務所選びで失敗したくない初心者のための口コミサイト。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta name="google-site-verification" content="dYhQMC8PxfBr0tehcNhY7KshfWBC4ttu_QuHf26DuUw" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700&family=Zen+Maru+Gothic:wght@400;500;700&family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{paddingTop: "68px"}}>
        {/* HEADER */}
        <header className="site-header">
          <div className="header-inner">
            <Link href="/" className="logo">
              <img src="/logo.png" alt="まるみえチャトレ" height={44} />
            </Link>
            {/* PC ナビ */}
            <nav className="gnav">
              <Link href="/jimusho">事務所を探す</Link>
              <Link href="/area">エリアから探す</Link>
              <Link href="/style">働き方から探す</Link>
              <Link href="/q">お悩みから探す</Link>
              <Link href="/kuchikomi">口コミ</Link>
              <Link href="/column">コラム</Link>
            </nav>
            {/* ハンバーガーメニュー（スマホのみ） */}
            <HamburgerMenu />
          </div>
        </header>

        {children}

        {/* スマホ固定CTA */}
        <FloatingCTA />

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
