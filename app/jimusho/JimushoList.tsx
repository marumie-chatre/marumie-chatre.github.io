"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "../Icon";

// Palette E カラー（インライン使用用）
const G = {
  bg: "#FBF7F0",
  paper: "#FFFFFF",
  ink: "#3A2A20",
  inkSoft: "#87796A",
  inkSofter: "#B5AC9B",
  sage: "#7BAA3F",
  sageDeep: "#587A38",
  sageSoft: "#CDDDB0",
  sagePastel: "#A8C49A",
  sagePastelText: "#8FAD7F",
  cream: "#F8EFE0",
  bgPale: "#F0F5E8",
  brown: "#5C3D1F",
  gold: "#C9923F",
  border: "#E2EBDD",
  rule: "rgba(58,42,32,0.10)",
};

// 11事務所データ
type ScoreKey = "total" | "safety" | "support" | "beginner" | "work" | "earning";

type Office = {
  defaultRank: number;
  name: string;
  slug: string;
  logo: string;
  tags: string[];
  forYou: string[];
  scores: Record<ScoreKey, number>;
};

const OFFICES: Office[] = [
  {
    defaultRank: 1, name: "フェアリーテイル", slug: "ft", logo: "/logo-ft.png",
    tags: ["ノンアダ専門", "身バレ対策◎", "会話サポート"],
    forYou: [
      "ノンアダルト中心で始めたい方",
      "会話や見せ方のコツまで丁寧に教えてほしい方",
      "いきなり稼ぐより、まずは安心して慣れていきたい方",
    ],
    scores: { total: 88, safety: 29, support: 20, beginner: 17, work: 14, earning: 8 },
  },
  {
    defaultRank: 2, name: "ブライトグループ", slug: "bright-group", logo: "/logo-bright-group.png",
    tags: ["全国展開", "老舗運営", "24時間サポート"],
    forYou: [
      "大手の安心感で選びたい方",
      "通いやすい店舗を見つけたい方",
      "SNS活動も含めて相談したい方",
    ],
    scores: { total: 84, safety: 25, support: 20, beginner: 18, work: 13, earning: 8 },
  },
  {
    defaultRank: 3, name: "チャットスタイル", slug: "chatstyle", logo: "/logo-chatstyle.png",
    tags: ["バーチャル対応", "現役スタッフ在籍", "都市部中心"],
    forYou: [
      "バーチャル配信も気になる方",
      "顔出しや身バレに不安がある方",
      "実際の配信経験があるスタッフに相談したい方",
    ],
    scores: { total: 81, safety: 23, support: 21, beginner: 17, work: 12, earning: 8 },
  },
  {
    defaultRank: 4, name: "アットグループ", slug: "at-group", logo: "/logo-at-group.png",
    tags: ["カフェ風空間", "店舗配信向け", "全国展開"],
    forYou: [
      "カフェのような落ち着いた空間で配信したい方",
      "在宅よりも、店舗に通ってお仕事したい方",
      "居心地のよさや通いやすさを重視したい方",
    ],
    scores: { total: 79, safety: 22, support: 21, beginner: 16, work: 13, earning: 7 },
  },
  {
    defaultRank: 5, name: "フレイバーグループ", slug: "flavor-group", logo: "/logo-flavor-group.png",
    tags: ["全国展開", "老舗運営", "固定給制度あり"],
    forYou: [
      "近くに通える店舗を探している方",
      "報酬の安定感も重視したい方",
      "複数の働き方を比べて選びたい方",
    ],
    scores: { total: 79, safety: 23, support: 20, beginner: 17, work: 12, earning: 7 },
  },
  {
    defaultRank: 6, name: "アリュール", slug: "allure", logo: "/logo-allure.png",
    tags: ["時給保証あり", "収入重視", "サポートあり"],
    forYou: [
      "時給保証制度がある事務所を検討したい方",
      "収入面を重視して比較したい方",
      "自分に合う配信スタイルを相談しながら決めたい方",
    ],
    scores: { total: 74, safety: 24, support: 18, beginner: 13, work: 12, earning: 7 },
  },
  {
    defaultRank: 7, name: "NMRグループ", slug: "nmr-group", logo: "/logo-nmr-group.png",
    tags: ["完全防音個室", "関東・東北中心", "店舗配信向け"],
    forYou: [
      "周りを気にせず配信できる環境を重視したい方",
      "関東・東北エリアで店舗を探している方",
      "在宅よりも、設備のある店舗で配信したい方",
    ],
    scores: { total: 74, safety: 23, support: 18, beginner: 15, work: 11, earning: 7 },
  },
  {
    defaultRank: 8, name: "チャットレディJP", slug: "chatlady-jp", logo: "/logo-chatlady-jp.png",
    tags: ["新宿・上野エリア", "美容機器あり", "時給保証あり"],
    forYou: [
      "配信環境だけでなく、美容面のサポートも気になる方",
      "新宿・上野エリアで通える店舗を探している方",
      "時給保証のある事務所も比較したい方",
    ],
    scores: { total: 70, safety: 22, support: 17, beginner: 14, work: 11, earning: 6 },
  },
  {
    defaultRank: 9, name: "アスタリスク", slug: "asterisk", logo: "/logo-asterisk.png",
    tags: ["女性スタッフ対応", "監視体制あり", "収入重視"],
    forYou: [
      "女性スタッフに相談できる環境を重視したい方",
      "高収入を目指せる事務所も比較したい方",
      "稼げるならアダルトも選択肢に入れれる方",
    ],
    scores: { total: 68, safety: 25, support: 18, beginner: 9, work: 9, earning: 7 },
  },
  {
    defaultRank: 10, name: "ポケットワーク", slug: "pocket-work", logo: "/logo-pocket-work.png",
    tags: ["在宅対応", "効率重視", "バーチャル対応"],
    forYou: [
      "在宅でコツコツ配信したい方",
      "在宅サポートを重視したい方に",
      "バーチャルジャンルも検討している方",
    ],
    scores: { total: 68, safety: 24, support: 12, beginner: 13, work: 13, earning: 6 },
  },
  {
    defaultRank: 11, name: "ライバーサポートグループ", slug: "liver-support", logo: "/logo-liver-support.png",
    tags: ["広域展開", "老舗運営", "福利厚生あり"],
    forYou: [
      "福利厚生の内容も確認して選びたい方",
      "運営歴のある事務所を比較したい方",
      "通えるエリアの選択肢を広く見たい方",
    ],
    scores: { total: 68, safety: 21, support: 16, beginner: 14, work: 11, earning: 6 },
  },
];

// 軸メタ：max + ラベル
const AXIS_META: { key: Exclude<ScoreKey, "total">; label: string; max: number }[] = [
  { key: "safety",   label: "安全性",     max: 30 },
  { key: "support",  label: "サポート",   max: 25 },
  { key: "beginner", label: "初心者",     max: 20 },
  { key: "work",     label: "働きやすさ", max: 15 },
  { key: "earning",  label: "稼ぎ",       max: 10 },
];

// タブ
const TABS: { id: ScoreKey; label: string; desc: string }[] = [
  { id: "total",    label: "おすすめ順",   desc: "総合的にバランスよく見たい方に" },
  { id: "safety",   label: "安全性",       desc: "身バレや強要から守ってくれるかをチェック" },
  { id: "support",  label: "サポート",     desc: "困ったときに相談しやすいかをチェック" },
  { id: "beginner", label: "初心者向け",   desc: "はじめてでも無理なく続けやすいかをチェック" },
  { id: "work",     label: "働きやすさ",   desc: "通いやすさや続けやすさをチェック" },
  { id: "earning",  label: "稼ぎやすさ",   desc: "報酬アップを目指しやすい環境かをチェック" },
];

export default function JimushoList() {
  const [sortKey, setSortKey] = useState<ScoreKey>("total");

  // 選択中タブの説明文
  const activeTabDesc = TABS.find(t => t.id === sortKey)?.desc ?? "";

  // ソート（安定ソートで同点は defaultRank 順）
  const sorted = [...OFFICES]
    .map((o, originalIdx) => ({ o, originalIdx }))
    .sort((a, b) => {
      const diff = b.o.scores[sortKey] - a.o.scores[sortKey];
      if (diff !== 0) return diff;
      return a.o.defaultRank - b.o.defaultRank;
    })
    .map(x => x.o);

  return (
    <>
      {/* ===== 並び替えタブ（SP横スクロール chip UI） ===== */}
      <div
        role="group"
        aria-label="事務所の並び替え"
        style={{
          display: "flex",
          gap: 8,
          overflowX: "auto",
          padding: "4px 20px 12px",
          maxWidth: 760,
          margin: "0 auto",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
        }}
      >
        {TABS.map(tab => {
          const isActive = sortKey === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setSortKey(tab.id)}
              style={{
                flexShrink: 0,
                padding: "8px 16px",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "background 0.18s, color 0.18s, border-color 0.18s",
                background: isActive ? G.sagePastel : "#fff",
                color: isActive ? G.sageDeep : G.sageDeep,
                border: isActive
                  ? `1.5px solid ${G.sagePastel}`
                  : `1px solid ${G.border}`,
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* ===== 選択中タブの説明文（aria-live で SR にも通知） ===== */}
      <p
        aria-live="polite"
        style={{
          margin: "0 20px 16px",
          maxWidth: 760,
          marginLeft: "auto", marginRight: "auto",
          padding: "0 20px",
          fontSize: 12, lineHeight: 1.7, color: G.inkSoft,
          textAlign: "center",
          transition: "opacity 0.18s",
        }}
      >
        {activeTabDesc}
      </p>

      {/* ===== カード一覧 ===== */}
      <section style={{
        padding: "8px 20px 0",
        maxWidth: 760,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: 22,
      }}>
        {sorted.map((o, idx) => {
          const displayRank = idx + 1;
          const isTopRecommend = o.slug === "ft" && sortKey === "total" && displayRank === 1;
          return (
            <article
              key={o.slug}
              data-score-total={o.scores.total}
              data-score-safety={o.scores.safety}
              data-score-support={o.scores.support}
              data-score-beginner={o.scores.beginner}
              data-score-work={o.scores.work}
              data-score-earning={o.scores.earning}
              style={{
                position: "relative",
                background: G.paper,
                border: `1px solid ${G.border}`,
                borderRadius: 20,
                boxShadow: "0 2px 12px rgba(58,42,32,0.04)",
                overflow: "hidden",
              }}
            >
              {/* カード全体をリンク化（padding を Link 内に移し、視覚を変えずクリック領域だけ拡張） */}
              <Link
                href={`/jimusho/${o.slug}`}
                aria-label={`${o.name} の詳細・口コミを見る`}
                style={{
                  display: "block",
                  padding: 18,
                  textDecoration: "none",
                  color: "inherit",
                  cursor: "pointer",
                }}
              >
              {/* 初心者に最もおすすめ badge（ft × 総合 のみ） */}
              {isTopRecommend && (
                <div style={{
                  position: "absolute", top: -13, left: 14,
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "5px 14px", borderRadius: 99,
                  background: "linear-gradient(135deg, #E8B85B 0%, #C9923F 100%)",
                  color: "#fff",
                  fontSize: 11, fontWeight: 800, letterSpacing: 1,
                  boxShadow: "0 4px 12px rgba(180,135,50,0.32)",
                }}>
                  初心者に最もおすすめ
                </div>
              )}

              {/* 1. No.{rank} */}
              <div style={{
                display: "inline-block",
                fontSize: 11, fontWeight: 800, letterSpacing: 0.5,
                color: G.sageDeep,
                padding: "3px 10px",
                borderRadius: 99,
                background: G.bgPale,
                whiteSpace: "nowrap",
                marginBottom: 14,
                marginTop: isTopRecommend ? 8 : 0,
              }}>
                No.{displayRank}
              </div>

              {/* 2-3. ロゴ + 事務所名 横並び */}
              <div style={{
                display: "flex", gap: 14, alignItems: "center",
                marginBottom: 10,
              }}>
                <div style={{
                  width: 64, height: 64, borderRadius: 12,
                  background: G.bgPale,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  overflow: "hidden", flexShrink: 0,
                  border: `1px solid ${G.border}`,
                }}>
                  <Image
                    src={o.logo}
                    alt={`${o.name} ロゴ`}
                    width={120}
                    height={120}
                    style={{ width: "100%", height: "100%", objectFit: "contain", padding: 6 }}
                  />
                </div>
                <h3 style={{
                  margin: 0,
                  fontSize: 17, fontWeight: 800,
                  color: G.ink, lineHeight: 1.4,
                  letterSpacing: -0.2,
                }}>{o.name}</h3>
              </div>

              {/* 4-5. 特徴タグ（横並び） */}
              <div style={{
                display: "flex", flexWrap: "wrap", gap: 5,
                marginBottom: 14,
              }}>
                {o.tags.map(t => (
                  <span key={t} style={{
                    fontSize: 10.5, fontWeight: 600,
                    color: G.sageDeep,
                    padding: "3px 9px", borderRadius: 99,
                    background: G.sageSoft,
                  }}>{t}</span>
                ))}
              </div>

              {/* 6. スコア表（5軸） */}
              <div style={{
                background: G.bgPale,
                padding: "12px 14px",
                borderRadius: 12,
                marginBottom: 14,
              }}>
                <div style={{
                  display: "flex", alignItems: "baseline", justifyContent: "space-between",
                  marginBottom: 10,
                }}>
                  <div style={{
                    fontSize: 10, fontWeight: 800, letterSpacing: 1,
                    color: G.sageDeep,
                  }}>SCORE</div>
                  <div>
                    <span style={{ fontSize: 22, fontWeight: 800, color: G.brown, lineHeight: 1 }}>
                      {o.scores.total}
                    </span>
                    <span style={{ fontSize: 10, color: G.inkSoft, marginLeft: 3 }}>/100</span>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {AXIS_META.map(a => {
                    const v = o.scores[a.key];
                    const pct = (v / a.max) * 100;
                    return (
                      <div key={a.key} style={{
                        display: "flex", alignItems: "center", gap: 8, fontSize: 10.5,
                      }}>
                        <span style={{ width: 62, color: G.inkSoft, fontWeight: 600 }}>{a.label}</span>
                        <div style={{
                          flex: 1, height: 5, borderRadius: 99,
                          background: "rgba(58,42,32,0.06)", overflow: "hidden",
                        }}>
                          <div style={{
                            width: `${pct}%`, height: "100%",
                            background: G.sagePastel, borderRadius: 99,
                          }} />
                        </div>
                        <span style={{
                          width: 36, textAlign: "right", fontWeight: 700, color: G.ink,
                        }}>
                          {v}<span style={{ color: G.inkSofter, fontWeight: 500, fontSize: 9 }}>/{a.max}</span>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 7. こんな方におすすめ */}
              <div style={{ marginBottom: 16 }}>
                <div style={{
                  fontSize: 11, fontWeight: 800, color: G.sageDeep,
                  letterSpacing: 0.5, marginBottom: 8,
                }}>
                  こんな方におすすめ
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {o.forYou.map((line, i) => (
                    <li key={i} style={{
                      display: "flex", alignItems: "flex-start", gap: 8,
                      padding: "4px 0",
                      fontSize: 12, color: G.ink, lineHeight: 1.65,
                    }}>
                      <span style={{
                        flexShrink: 0, marginTop: 4,
                        width: 14, height: 14, borderRadius: "50%",
                        background: G.sagePastel,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: G.sageDeep,
                      }}>
                        <Icon.Check size={8} />
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 8. 詳細・口コミを見るボタン（視覚装飾／カード全体がリンクなので入れ子リンクは作らない） */}
              <div aria-hidden="true" style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "13px 18px",
                background: G.sagePastel, color: G.brown,
                borderRadius: 12, fontSize: 13, fontWeight: 700,
              }}>
                <span>詳細・口コミを見る</span>
                <Icon.Arrow size={14} />
              </div>
              </Link>
            </article>
          );
        })}
      </section>
    </>
  );
}
