import Link from "next/link";
import { Icon } from "../Icon";
import { BreadcrumbSchema } from "../StructuredData";
import QHubList from "./QHubList";

export const metadata = {
  title: "お悩みから探す｜まるみえチャトレ",
  description: "身バレ・家族バレ・職場バレ・初心者の不安など、応募前後の不安にカテゴリ別に答える編集部記事と Q&A をまとめています。元保育士の現役チャットレディが運営しています。",
};

const G = {
  bg: "#FBF7F0",
  paper: "#FFFFFF",
  ink: "#3A2A20",
  inkSoft: "#87796A",
  sage: "#7BAA3F",
  sageDeep: "#587A38",
  sagePastel: "#A8C49A",
  brown: "#5C3D1F",
};

export default function QHubPage() {
  return (
    <main style={{ background: G.bg, color: G.ink, paddingBottom: 40 }}>
      <BreadcrumbSchema items={[
        { name: "トップ", path: "/" },
        { name: "お悩みから探す", path: "/q" },
      ]} />

      {/* ===== HERO ===== */}
      <section style={{ padding: "28px 22px 18px", maxWidth: 720, margin: "0 auto" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontSize: 10, letterSpacing: 2.2, fontWeight: 800, color: G.ink,
          marginBottom: 12,
        }}>
          <span style={{ width: 18, height: 1.5, background: G.sage, borderRadius: 1 }} />
          WORRIES
        </div>

        <h1 style={{
          margin: 0,
          fontSize: "clamp(22px, 6vw, 30px)",
          lineHeight: 1.5,
          fontWeight: 800,
          letterSpacing: -0.4,
          color: G.ink,
        }}>
          お悩みから、<br />探す。
        </h1>

        <p style={{
          margin: "14px 0 0", fontSize: 12.5, lineHeight: 1.9, color: G.inkSoft,
        }}>
          身バレ・家族バレ・副業バレ・初心者の不安など、応募前後の不安に答える記事をカテゴリ別にまとめています。
        </p>
      </section>

      {/* ===== カテゴリチップ + 記事一覧（クライアントフィルタ） ===== */}
      <QHubList />

      {/* ===== 口コミ投稿 CTA ===== */}
      <section style={{
        margin: "28px auto 0",
        padding: "0 22px",
        maxWidth: 720,
      }}>
        <div style={{
          padding: "20px 22px",
          background: G.sagePastel, color: G.brown,
          borderRadius: 14,
        }}>
          <div style={{
            fontSize: 9.5, letterSpacing: 2, fontWeight: 700,
            color: G.sageDeep, marginBottom: 6,
          }}>FOR YOU</div>
          <div style={{
            fontSize: 16, fontWeight: 700, lineHeight: 1.5,
          }}>働いた経験がある方へ</div>
          <p style={{
            margin: "8px 0 14px",
            fontSize: 11.5, lineHeight: 1.85,
            color: G.inkSoft,
          }}>
            匿名・個人情報不要で投稿できます。良かった点も、気になった点も歓迎です。
          </p>
          <Link href="/kuchikomi" style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "11px 14px", borderRadius: 99,
            background: "#fff", color: G.brown,
            fontSize: 12, fontWeight: 700, textDecoration: "none",
          }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <Icon.Pencil size={13} />
              口コミを投稿する
            </span>
            <Icon.Arrow size={13} />
          </Link>
        </div>
      </section>

    </main>
  );
}
