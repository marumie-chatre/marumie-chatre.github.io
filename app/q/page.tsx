import { BreadcrumbSchema } from "../StructuredData";
import QHubList from "./QHubList";

export const metadata = {
  alternates: { canonical: "/q" },
  title: "お悩みから探す｜まるみえチャトレ",
  description: "身バレ・家族バレ・職場バレ・初心者の不安など、応募前後の不安にカテゴリ別に答える編集部記事と Q&A をまとめています。元保育士の現役チャットレディが運営しています。",
};

const G = {
  bg: "#FBF7F0",
  paper: "#FFFFFF",
  ink: "#2C3326",
  inkSoft: "#8E9882",
  sage: "#6FA858",
  sageDeep: "#587A38",
  sagePastel: "#A8C49A",
  brown: "#2C3326",
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

      {/* 「働いた経験がある方へ」は全ページ共通フッター（WorkedBeforeCTA）へ集約 */}

    </main>
  );
}
