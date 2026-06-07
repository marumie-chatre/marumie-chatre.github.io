import Link from "next/link";
import { Icon } from "../Icon";
import JimushoList from "./JimushoList";

export const metadata = {
  title: "事務所ランキングを見る｜まるみえチャトレ",
  description: "なんとなくのおすすめではなく、安全性・サポート・初心者向け・働きやすさ・稼ぎやすさの5つの基準で11事務所を比較しています。応募する前に、お店の中身を見て選びたい方のためのランキングです。",
};

// Palette E カラー
const G = {
  bg: "#FBF7F0",
  paper: "#FFFFFF",
  ink: "#3A2A20",
  inkSoft: "#87796A",
  sage: "#7BAA3F",
  sageDeep: "#587A38",
  sageSoft: "#CDDDB0",
  sagePastel: "#A8C49A",
  bgPale: "#F0F5E8",
  brown: "#5C3D1F",
  border: "#E2EBDD",
};

export default function JimushoPage() {
  return (
    <main style={{ background: G.bg, color: G.ink, paddingBottom: 60 }}>

      {/* ===== HERO ===== */}
      <section style={{ padding: "28px 20px 22px", maxWidth: 760, margin: "0 auto" }}>
        {/* kicker */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontSize: 10, letterSpacing: 2.2, fontWeight: 800, color: G.ink,
          marginBottom: 12,
        }}>
          <span style={{ width: 18, height: 1.5, background: G.sage, borderRadius: 1 }} />
          RANKING
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
          事務所ランキングを見る
        </h1>

        {/* sub */}
        <p style={{
          margin: "14px 0 0",
          fontSize: 13, lineHeight: 2.05, color: G.ink,
        }}>
          なんとなくのおすすめではなく、<br />
          安全性・サポート・初心者向け・稼ぎやすさなど、<br />
          5つの基準で比べています。
        </p>
        <p style={{
          margin: "12px 0 0",
          fontSize: 13, lineHeight: 2.05, color: G.ink,
        }}>
          応募する前に、
          <span style={{
            color: "#3A2A20",
            backgroundImage: "linear-gradient(transparent 62%, rgba(168,196,154,0.30) 62%)",
            padding: "0 3px", fontWeight: 600,
          }}>お店の中身を見て選びたい方</span>
          のためのランキングです。
        </p>
      </section>

      {/* ===== ランキング本体（クライアント・タブで並び替え） ===== */}
      <JimushoList />

      {/* ===== 下部CTA：採点基準への導線 ===== */}
      <section style={{
        padding: "32px 20px 0",
        maxWidth: 760, margin: "0 auto",
      }}>
        <div style={{
          background: G.paper,
          border: `1px solid ${G.border}`,
          borderRadius: 18,
          padding: "22px 22px",
          textAlign: "center",
        }}>
          <h2 style={{
            margin: 0,
            fontSize: 17, fontWeight: 800, lineHeight: 1.5, color: G.ink,
          }}>
            このスコア、どうやって決めているの？
          </h2>
          <p style={{
            margin: "10px 0 18px",
            fontSize: 12.5, lineHeight: 1.95, color: G.inkSoft,
          }}>
            まるみえチャトレでは、採点基準と確認した内容を公開しています。<br />
            なんとなくのおすすめではなく、理由がわかるランキングを目指しています。
          </p>
          <Link href="/hyoka-kijun" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
            padding: "12px 26px",
            background: G.sagePastel, color: G.brown,
            borderRadius: 99,
            fontSize: 13, fontWeight: 700, textDecoration: "none",
          }}>
            評価基準を確認する
            <Icon.Arrow size={13} />
          </Link>
        </div>
      </section>
    </main>
  );
}
