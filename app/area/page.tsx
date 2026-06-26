import Link from "next/link";
import { Icon } from "../Icon";
import { BreadcrumbSchema } from "../StructuredData";
import AreaFilter from "./AreaFilter";

export const metadata = {
  alternates: { canonical: "/area" },
  title: "エリアから探す｜まるみえチャトレ",
  description: "通勤・在宅問わず、住んでいる地域からチャットレディ事務所を選びたい方へ。地方タブから主要都市の事務所選びをご覧いただけます。",
};

const G = {
  bg: "#FBF7F0",
  paper: "#FFFFFF",
  ink: "#2C3326",
  inkSoft: "#8E9882",
  sage: "#6FA858",
  sageDeep: "#587A38",
  sageSoft: "#CDDDB0",
  sagePastel: "#A8C49A",
  brown: "#2C3326",
  border: "#E2EBDD",
};

export default function AreaPage() {
  return (
    <main style={{ background: G.bg, color: G.ink, paddingBottom: 60 }}>
      <BreadcrumbSchema items={[
        { name: "トップ", path: "/" },
        { name: "エリアから探す", path: "/area" },
      ]} />

      {/* ===== HERO ===== */}
      <section style={{ padding: "28px 20px 12px", maxWidth: 760, margin: "0 auto" }}>
        {/* kicker */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontSize: 10, letterSpacing: 2.2, fontWeight: 800, color: G.ink,
          marginBottom: 12,
        }}>
          <span style={{ width: 18, height: 1.5, background: G.sage, borderRadius: 1 }} />
          BY REGION
        </div>

        {/* h1 */}
        <h1 style={{
          margin: 0,
          fontSize: "clamp(22px, 6vw, 30px)",
          lineHeight: 1.5,
          fontWeight: 800,
          letterSpacing: -0.3,
          color: G.ink,
        }}>
          近くの事務所を探してみる
        </h1>

        {/* sub */}
        <p style={{
          margin: "14px 0 0",
          fontSize: 12.5, lineHeight: 1.9, color: G.inkSoft,
        }}>
          主要都市は事務所選びのコツ・口コミなどを別記事でまとめています。
        </p>
      </section>

      {/* ===== 地方タブ + 都市カード（クライアント側フィルタ） ===== */}
      <AreaFilter />

      {/* ===== 下部CTA：事務所のランキングを見る ===== */}
      <section style={{
        margin: "32px auto 0",
        padding: "0 20px",
        maxWidth: 760,
      }}>
        <Link href="/jimusho" style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 20px",
          background: G.sagePastel,
          color: G.brown,
          borderRadius: 99,
          fontSize: 13.5, fontWeight: 700, textDecoration: "none",
        }}>
          <span>事務所のランキングを見る</span>
          <Icon.Arrow size={14} />
        </Link>
      </section>

    </main>
  );
}
