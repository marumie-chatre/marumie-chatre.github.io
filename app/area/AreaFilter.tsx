"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "../Icon";

const G = {
  bg: "#FBF7F0",
  paper: "#FFFFFF",
  ink: "#2C3326",
  inkSoft: "#8E9882",
  inkSofter: "#B5AC9B",
  sage: "#6FA858",
  sageDeep: "#587A38",
  sageSoft: "#CDDDB0",
  sagePastel: "#A8C49A",
  bgPale: "#F0F5E8",
  brown: "#2C3326",
  border: "#E2EBDD",
};

type RegionId = "all" | "hokkaido" | "tohoku" | "kanto" | "kansai" | "kinki" | "chubu" | "kyushu";

const REGIONS: { id: RegionId; label: string }[] = [
  { id: "all",      label: "全国" },
  { id: "hokkaido", label: "北海道" },
  { id: "tohoku",   label: "東北" },
  { id: "kanto",    label: "関東" },
  { id: "kansai",   label: "関西" },
  { id: "kinki",    label: "近畿" },
  { id: "chubu",    label: "中部" },
  { id: "kyushu",   label: "九州" },
];

type City = {
  slug: string;
  name: string;
  region: RegionId;
  image: string;
  count: number;
  desc: string;
};

const CITIES: City[] = [
  {
    slug: "shinjuku", name: "新宿", region: "kanto",
    image: "/area-shinjuku.jpg", count: 7,
    desc: "都内でもチャットレディ事務所が多いエリア",
  },
  {
    slug: "shibuya", name: "渋谷", region: "kanto",
    image: "/area-shibuya.jpg", count: 5,
    desc: "東京屈指の繁華街で通勤の利便性抜群のエリア",
  },
  {
    slug: "ikebukuro", name: "池袋", region: "kanto",
    image: "/area-ikebukuro.jpg", count: 5,
    desc: "埼玉エリアからの応募も多数。人気エリア。",
  },
  {
    slug: "kinshicho", name: "錦糸町", region: "kanto",
    image: "/area-kinshicho.jpg", count: 5,
    desc: "居心地のいい店を選びたい人におすすめのエリア",
  },
  {
    slug: "ueno", name: "上野", region: "kanto",
    image: "/area-ueno.jpg", count: 4,
    desc: "距離感の近いサポートが売りのエリア",
  },
  {
    slug: "fukuoka", name: "福岡", region: "kyushu",
    image: "/area-fukuoka.jpg", count: 5,
    desc: "九州最大のチャットレディ事務所が多いエリア",
  },
  {
    slug: "osaka", name: "大阪", region: "kansai",
    image: "/area-osaka.jpg", count: 5,
    desc: "梅田・難波・心斎橋・堺と通勤圏が広いエリア",
  },
  {
    slug: "umeda", name: "梅田", region: "kansai",
    image: "/area-umeda.jpg", count: 5,
    desc: "仕事帰りに寄りやすい駅近店が集まる激戦区",
  },
  {
    slug: "yokohama", name: "横浜", region: "kanto",
    image: "/area-yokohama.jpg", count: 5,
    desc: "みなとみらい・横浜駅・関内。お話で始めやすいエリア",
  },
  {
    slug: "sapporo", name: "札幌", region: "hokkaido",
    image: "/area-sapporo.jpg", count: 5,
    desc: "すすきの・札幌駅・大通。冬でも通いやすさで選ぶエリア",
  },
  {
    slug: "nagoya", name: "名古屋", region: "chubu",
    image: "/area-nagoya.jpg", count: 5,
    desc: "名古屋駅・栄・金山。お話で始めやすい東海最大のエリア",
  },
];

export default function AreaFilter() {
  const [active, setActive] = useState<RegionId>("all");
  // "all" のときは全件、それ以外は地方フィルタ
  const filtered = active === "all"
    ? CITIES
    : CITIES.filter(c => c.region === active);

  return (
    <>
      {/* ===== 地方タブ（SP 横スクロール chip） ===== */}
      <div
        role="group"
        aria-label="地方の切り替え"
        style={{
          display: "flex", gap: 8,
          overflowX: "auto",
          padding: "8px 20px 16px",
          maxWidth: 760, margin: "0 auto",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
        }}
      >
        {REGIONS.map(r => {
          const isActive = active === r.id;
          return (
            <button
              key={r.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(r.id)}
              style={{
                flexShrink: 0,
                padding: "8px 16px",
                borderRadius: 999,
                fontSize: 13, fontWeight: 700,
                cursor: "pointer", whiteSpace: "nowrap",
                background: isActive ? "#6FA858" : "#fff",
                color: isActive ? "#fff" : G.sageDeep,
                border: isActive ? "1.5px solid #6FA858" : `1px solid ${G.border}`,
                transition: "background 0.18s, border-color 0.18s",
              }}
            >
              {r.label}
            </button>
          );
        })}
      </div>

      {/* ===== 都市カード一覧 ===== */}
      <section style={{
        padding: "0 20px",
        maxWidth: 760, margin: "0 auto",
      }}>
        {filtered.length > 0 ? (
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12,
          }}>
            {filtered.map(c => (
              <Link
                href={`/area/${c.slug}`}
                key={c.slug}
                style={{
                  display: "block",
                  background: G.paper,
                  border: `1px solid ${G.border}`,
                  borderRadius: 14,
                  overflow: "hidden",
                  textDecoration: "none", color: G.ink,
                  boxShadow: "0 2px 10px rgba(58,42,32,0.04)",
                }}
              >
                {/* 画像 */}
                <div style={{
                  position: "relative",
                  width: "100%", aspectRatio: "16/10",
                  background: G.bgPale,
                }}>
                  <Image
                    src={c.image}
                    alt={`${c.name}エリア`}
                    fill
                    sizes="(max-width:720px) 50vw, 360px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                {/* 本体 */}
                <div style={{ padding: "12px 14px 14px" }}>
                  <div style={{
                    display: "flex", alignItems: "baseline", gap: 8,
                    marginBottom: 6,
                  }}>
                    <span style={{ fontSize: 15, fontWeight: 800, color: G.ink }}>
                      {c.name}
                    </span>
                    <span style={{
                      fontSize: 10, fontWeight: 700, color: G.sageDeep,
                      padding: "2px 7px", borderRadius: 99,
                      background: G.bgPale,
                      whiteSpace: "nowrap",
                    }}>
                      おすすめ{c.count}選
                    </span>
                  </div>
                  <p style={{
                    margin: 0,
                    fontSize: 11, lineHeight: 1.6,
                    color: G.inkSoft,
                  }}>
                    {c.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          // 空の地方：準備中表示
          <div style={{
            padding: "30px 22px",
            background: G.paper,
            border: `1px dashed ${G.border}`,
            borderRadius: 14,
            textAlign: "center",
          }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: G.ink, marginBottom: 6 }}>
              この地方の都市別ページは準備中です
            </div>
            <p style={{ margin: 0, fontSize: 11.5, lineHeight: 1.7, color: G.inkSoft }}>
              全国対応の事務所はランキングからご確認いただけます。
            </p>
          </div>
        )}
      </section>
    </>
  );
}
