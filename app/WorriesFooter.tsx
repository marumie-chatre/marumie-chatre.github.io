"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";

// お悩みから探す（全ページ共通フッター）
// 白枠カード＋正方形サムネ＋テキスト（カテゴリ／タイトル／所要時間・日付）のリスト。
const WORRIES = [
  { href: "/q/jimusho-erabi", cat: "初心者・選び方", title: "チャットレディ事務所の選び方｜初心者が失敗しない見極め方", time: "5分", date: "2026.05.05", image: "/事務所選び.png" },
  { href: "/q/barebure",      cat: "身バレ対策",     title: "配信中にお客さんにばれる？　よくある原因と対策5選", time: "5分", date: "2026.05.07", image: "/配信中身バレ対策.jpg" },
  { href: "/q/mibare-taisaku", cat: "身バレ対策",    title: "身バレのよくある疑問に、ぜんぶ答えます", time: "6分", date: "2026.05.06", image: "/col-mibare-taisaku.png" },
  { href: "/q/kazoku-bare",   cat: "身バレ対策",     title: "家族や彼氏にバレる？　よくある原因とバレない対策", time: "5分", date: "2026.05.07", image: "/家族、彼氏ばれ.jpg" },
  { href: "/q/hoikushi-baito", cat: "身バレ対策",     title: "職場にバレない副業の始め方　元保育士の実体験", time: "7分", date: "2026.06.26", image: "/職場ばれ.jpg" },
  { href: "/q/ayashii",       cat: "業界の不安",     title: "チャットレディは怪しい？危ない？現役4年が正直に答えます", time: "5分", date: "2026.05.07", image: "/q-ayashii.png" },
];

export default function WorriesFooter() {
  const pathname = usePathname();
  // お悩みハブ（/q）では内容が重複するため非表示（個別記事ページでは関連導線として表示）
  if (pathname === "/q") return null;

  return (
    <section style={{
      background: "#F3F6EC",
      padding: "22px 20px 34px",
    }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontSize: 10, letterSpacing: 2.2, fontWeight: 800, color: "#587A38",
        }}>
          <span style={{ width: 18, height: 1.5, background: "#6FA858", borderRadius: 1 }} />
          WORRIES
        </div>
        <h2 style={{
          margin: "9px 0 0", fontFamily: "'Zen Maru Gothic', sans-serif",
          fontSize: 20, fontWeight: 700, color: "#2C3326",
        }}>お悩みからさがす</h2>
        <p style={{ margin: "8px 0 0", fontSize: 12, color: "#8E9882", lineHeight: 1.7 }}>
          始める前の心配ごとから、答える記事を探せます。
        </p>

        {/* 白枠カード＋正方形サムネ＋テキストのリスト */}
        <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
          {WORRIES.map((w) => (
            <Link key={w.href} href={w.href} style={{
              display: "flex", gap: 12, alignItems: "center",
              background: "#FFFFFF", borderRadius: 14, padding: 10,
              border: "1px solid #E4E8DA",
              boxShadow: "0 3px 12px rgba(46,31,16,0.07)",
              textDecoration: "none", color: "#2C3326",
            }}>
              {/* 正方形サムネ */}
              <div style={{
                position: "relative", width: 76, height: 76, flexShrink: 0,
                borderRadius: 10, overflow: "hidden", background: "#EAF1E0",
              }}>
                <Image src={w.image} alt={w.title} fill sizes="76px" style={{ objectFit: "cover" }} />
              </div>
              {/* テキスト */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: 0.6, color: "#587A38", marginBottom: 4 }}>
                  {w.cat}
                </div>
                <div style={{
                  fontSize: 12.5, fontWeight: 700, lineHeight: 1.5, color: "#2C3326",
                  display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
                }}>{w.title}</div>
                <div style={{
                  marginTop: 6, fontSize: 10, color: "#8E9882",
                  display: "flex", gap: 10, alignItems: "center",
                }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 3 }}>
                    <Icon.Clock size={10} /> {w.time}
                  </span>
                  <span>{w.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link href="/q" style={{
          marginTop: 18, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          padding: 13, border: "1.5px solid rgba(46,31,16,0.18)", borderRadius: 14,
          fontSize: 13, fontWeight: 700, color: "#2C3326", textDecoration: "none",
        }}>
          お悩みの記事をすべて見る →
        </Link>
      </div>
    </section>
  );
}
