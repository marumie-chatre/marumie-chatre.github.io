import type { Metadata } from "next";
import Link from "next/link";
import { SpeedInsights } from "@vercel/speed-insights/next";
import HamburgerMenu from "./HamburgerMenu";
import FloatingCTA from "./FloatingCTA";
import { WebSiteSchema, OrganizationSchema } from "./StructuredData";
import { Icon } from "./Icon";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://marumie-chatre.vercel.app"),
  title: {
    default: "まるみえチャトレ｜中身で選ぶチャトレ事務所",
    template: "%s｜まるみえチャトレ",
  },
  description: "事務所選びで失敗したくない初心者のための口コミサイト。広告費では順位を決めず、良い点・気になる点の両方を公開しています。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "まるみえチャトレ",
    title: "まるみえチャトレ｜中身で選ぶチャトレ事務所",
    description: "事務所選びで失敗したくない初心者のための口コミサイト。広告費では順位を決めず、良い点・気になる点の両方を公開しています。",
    images: [
      {
        url: "/top-hero-photo.jpg",
        width: 1200,
        height: 630,
        alt: "まるみえチャトレ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "まるみえチャトレ｜中身で選ぶチャトレ事務所",
    description: "事務所選びで失敗したくない初心者のための口コミサイト。",
    images: ["/top-hero-photo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta name="google-site-verification" content="dYhQMC8PxfBr0tehcNhY7KshfWBC4ttu_QuHf26DuUw" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700&family=Zen+Maru+Gothic:wght@400;500;700&family=Noto+Sans+JP:wght@300;400;500;700&family=Shippori+Mincho:wght@500;600;700&family=Klee+One:wght@400;600&family=Manrope:wght@500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* 構造化データ（全ページ共通：WebSite + Organization） */}
        <WebSiteSchema />
        <OrganizationSchema />
        {/* HEADER */}
        <header className="site-header">
          <div className="header-inner">
            <Link href="/" className="logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="まるみえチャトレ" height={44} />
            </Link>
            {/* PC ナビ */}
            <nav className="gnav">
              <Link href="/jimusho">ランキング</Link>
              <Link href="/area">エリア</Link>
              <Link href="/style">働き方</Link>
              <Link href="/q">お悩みから探す</Link>
              <Link href="/kuchikomi">口コミ</Link>
            </nav>
            {/* 口コミを見るボタン（CTA・常時表示・pastel sage で統一） */}
            <Link
              href="/kuchikomi"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 14px",
                background: "#A8C49A",
                color: "#5C3D1F",
                textDecoration: "none",
                borderRadius: "100px",
                fontSize: "13px",
                fontWeight: 700,
                whiteSpace: "nowrap",
                marginRight: "8px",
                marginLeft: "auto",
              }}
            >
              <Icon.Chat size={15} />
              口コミを見る
            </Link>
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo.png" alt="まるみえチャトレ" height={36} />
                </div>
                <div className="footer-tag">ちゃんと選びたい人のための事務所比較サイト</div>
              </div>
              <div className="footer-links">
                <Link href="/hyoka-kijun">評価基準について</Link>
                <Link href="/profile">運営者プロフィール</Link>
                <Link href="/guideline">口コミガイドライン</Link>
                <Link href="/privacy">プライバシーポリシー</Link>
                <Link href="/tokushoho">特定商取引法表記</Link>
                <Link href="/terms">利用規約</Link>
              </div>
            </div>
            <div className="footer-bottom">
              <span>© 2025 まるみえチャトレ</span>
              <span>当サイトの評価スコアは独自調査に基づきます</span>
            </div>
          </div>
        </footer>
        <SpeedInsights />
      </body>
    </html>
  );
}
