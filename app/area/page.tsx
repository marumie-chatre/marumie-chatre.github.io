import Link from "next/link";
import Image from "next/image";
import { Icon } from "../Icon";

export const metadata = {
  title: "エリアから探す｜まるみえチャトレ",
  description: "通勤・在宅問わず、住んでいる地域からチャットレディ事務所を選びたい方へ。関東・関西・中部・東北・九州・在宅可の6つのエリアから探せます。",
};

// Palette E カラー（インライン使用用）
const G = {
  bg: "#FAFAF5",
  bgWarm: "#F5E8C8",
  paper: "#FFFFFF",
  ink: "#3A322A",
  inkSoft: "#87796A",
  inkSofter: "#B5AC9B",
  sage: "#7BAA3F",
  sageDeep: "#4F8225",
  sageSoft: "#CDDDB0",
  cream: "#F8EFE0",
  accent: "#F4B5A0",
  accentDeep: "#E89B85",
  rule: "rgba(58,50,42,0.10)",
};

// region データ（6地域）
const REGIONS = [
  { id: "kanto",  l: "関東",  n: 11, area: "東京 / 神奈川 / 千葉 / 埼玉", href: "/jimusho" },
  { id: "kansai", l: "関西",  n: 5,  area: "大阪 / 京都 / 兵庫",          href: "/jimusho" },
  { id: "chubu",  l: "中部",  n: 4,  area: "愛知 / 静岡 / 岐阜",          href: "/jimusho" },
  { id: "tohoku", l: "東北",  n: 3,  area: "宮城 / 福島",                 href: "/jimusho" },
  { id: "kyushu", l: "九州",  n: 4,  area: "福岡 / 鹿児島 / 熊本",        href: "/area/fukuoka" },
  { id: "home",   l: "在宅可", n: 8, area: "全国どこからでも",            href: "/style/zaitaku" },
];

// 既存の都市別ページ（後方互換）
const CITIES = [
  { slug: "shinjuku",  name: "新宿",   image: "/area-shinjuku.jpg",  count: "約50店舗" },
  { slug: "shibuya",   name: "渋谷",   image: "/area-shibuya.jpg",   count: "20店舗以上" },
  { slug: "ikebukuro", name: "池袋",   image: "/area-ikebukuro.jpg", count: "18店舗以上" },
  { slug: "kinshicho", name: "錦糸町", image: "/area-kinshicho.jpg", count: "8店舗前後" },
  { slug: "ueno",      name: "上野",   image: "/area-ueno.jpg",      count: "7〜10店舗" },
  { slug: "fukuoka",   name: "福岡",   image: "/area-fukuoka.jpg",   count: "130店舗以上" },
];

export default function AreaPage() {
  return (
    <main style={{ background: G.bg, color: G.ink, paddingBottom: 40 }}>

      {/* ===== HERO ===== */}
      <section style={{ padding: "28px 22px 18px", maxWidth: 720, margin: "0 auto" }}>
        {/* kicker */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontSize: 10, letterSpacing: 2.2, fontWeight: 800, color: G.sageDeep,
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
          letterSpacing: -0.4,
          color: G.ink,
        }}>
          お住まいの近くから、<br />探す。
        </h1>

        {/* sub */}
        <p style={{
          margin: "14px 0 0", fontSize: 12.5, lineHeight: 1.9, color: G.inkSoft,
        }}>
          通勤・在宅問わず、住んでいる地域から事務所を選びたい方向け。タップすると該当事務所の一覧へ。
        </p>
      </section>

      {/* ===== 6 region 行 ===== */}
      <section style={{
        padding: "0 22px",
        maxWidth: 720, margin: "0 auto",
        display: "flex", flexDirection: "column", gap: 10,
      }}>
        {REGIONS.map(r => (
          <Link href={r.href} key={r.id} style={{
            display: "flex", alignItems: "center", gap: 14,
            background: G.paper, borderRadius: 12, padding: "14px 16px",
            border: `1px solid ${G.rule}`,
            textDecoration: "none", color: G.ink,
          }}>
            {/* pin icon box */}
            <div style={{
              width: 38, height: 38, borderRadius: 10,
              background: G.sageSoft, color: G.sageDeep,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <Icon.Pin size={18} />
            </div>
            {/* region name + areas */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: G.ink }}>{r.l}</div>
              <div style={{ fontSize: 10.5, color: G.inkSoft, marginTop: 2 }}>{r.area}</div>
            </div>
            {/* count + arrow */}
            <div style={{ textAlign: "right", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 2 }}>
              <div style={{
                fontSize: 16, fontWeight: 800, color: G.sageDeep, lineHeight: 1,
              }}>
                {r.n}<span style={{ fontSize: 10, color: G.inkSoft, fontWeight: 500, marginLeft: 1 }}>社</span>
              </div>
              <span style={{ color: G.inkSoft }}>
                <Icon.Arrow size={11} />
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* ===== 30分以内インフォカード ===== */}
      <section style={{
        margin: "24px auto 0",
        padding: "0 22px",
        maxWidth: 720,
      }}>
        <div style={{
          padding: "16px 18px",
          background: G.bgWarm, borderRadius: 12,
          fontSize: 11.5, lineHeight: 1.8, color: G.ink,
          display: "flex", gap: 10, alignItems: "flex-start",
        }}>
          <span style={{
            width: 22, height: 22, borderRadius: "50%",
            background: G.accentDeep, color: "#fff", flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 11, fontWeight: 800,
          }}>i</span>
          <div>
            通勤前提でも、最寄り駅まで30分以内が現実的なライン。
            毎週通えるかが、続けられるかの分かれ目になります。
          </div>
        </div>
      </section>

      {/* ===== 都市別の詳細ガイド（既存・後方互換）===== */}
      <section style={{
        margin: "36px auto 0",
        padding: "0 22px",
        maxWidth: 720,
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontSize: 10, letterSpacing: 2.2, fontWeight: 800, color: G.sageDeep,
          marginBottom: 12,
        }}>
          <span style={{ width: 18, height: 1.5, background: G.sage, borderRadius: 1 }} />
          BY CITY
        </div>
        <h2 style={{
          margin: "0 0 14px",
          fontSize: "clamp(18px, 5vw, 24px)",
          lineHeight: 1.5, fontWeight: 800, color: G.ink,
        }}>
          都市別に詳しく見る
        </h2>
        <p style={{
          margin: "0 0 16px", fontSize: 12, lineHeight: 1.85, color: G.inkSoft,
        }}>
          主要都市は事務所選びのコツ・口コミなどを別記事でまとめています。
        </p>

        {/* city grid */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10,
        }}>
          {CITIES.map(c => (
            <Link href={`/area/${c.slug}`} key={c.slug} style={{
              display: "block",
              background: G.paper, borderRadius: 12, overflow: "hidden",
              border: `1px solid ${G.rule}`,
              textDecoration: "none", color: G.ink,
            }}>
              {/* image */}
              <div style={{
                position: "relative",
                width: "100%", aspectRatio: "16/10",
                background: G.sageSoft,
              }}>
                <Image
                  src={c.image}
                  alt={`${c.name}エリア`}
                  fill
                  sizes="(max-width:720px) 50vw, 360px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              {/* body */}
              <div style={{ padding: "10px 12px" }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: G.ink }}>
                  {c.name}
                </div>
                <div style={{
                  fontSize: 10, color: G.inkSoft, marginTop: 2,
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                }}>
                  <span>{c.count}</span>
                  <Icon.Arrow size={10} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== ランキングCTA ===== */}
      <section style={{
        margin: "28px auto 0",
        padding: "0 22px",
        maxWidth: 720,
      }}>
        <Link href="/jimusho" style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 18px", borderRadius: 99,
          background: G.paper, color: G.ink,
          border: `1.5px solid ${G.rule}`,
          fontSize: 13, fontWeight: 700, textDecoration: "none",
        }}>
          <span>11事務所のランキングを見る</span>
          <Icon.Arrow size={14} />
        </Link>
      </section>

    </main>
  );
}
