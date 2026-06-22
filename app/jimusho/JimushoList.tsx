"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "../Icon";

// Palette E カラー（並び替えタブのインライン使用用）
const G = {
  paper: "#FFFFFF",
  inkSoft: "#87796A",
  sageDeep: "#587A38",
  sagePastel: "#A8C49A",
  border: "#E2EBDD",
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
    tags: ["業界初ノンアダルト専門", "女性スタッフ常駐", "身バレ対策◎"],
    forYou: [
      "ノンアダルト中心で始めたい方",
      "会話や見せ方のコツまで丁寧に教えてほしい方",
      "いきなり稼ぐより、まずは安心して慣れていきたい方",
    ],
    scores: { total: 89, safety: 29, support: 20, beginner: 19, work: 14, earning: 7 },
  },
  {
    defaultRank: 2, name: "ブライトグループ", slug: "bright-group", logo: "/logo-bright-group.png",
    tags: ["大手", "寮あり", "24時間スタッフ"],
    forYou: [
      "大手の安心感で選びたい方",
      "通いやすい店舗を見つけたい方",
      "SNS活動も含めて相談したい方",
    ],
    scores: { total: 83, safety: 25, support: 20, beginner: 17, work: 13, earning: 8 },
  },
  {
    defaultRank: 3, name: "チャットスタイル", slug: "chatstyle", logo: "/logo-chatstyle.png",
    tags: ["ノンアダルトOK", "バーチャル配信", "サポート手厚い"],
    forYou: [
      "バーチャル配信も気になる方",
      "顔出しや身バレに不安がある方",
      "実際の配信経験があるスタッフに相談したい方",
    ],
    scores: { total: 81, safety: 23, support: 21, beginner: 17, work: 12, earning: 8 },
  },
  {
    defaultRank: 4, name: "アットグループ", slug: "at-group", logo: "/logo-at-group.png",
    tags: ["居心地重視", "完全個室", "顔出しなしOK"],
    forYou: [
      "カフェのような落ち着いた空間で配信したい方",
      "在宅よりも、店舗に通ってお仕事したい方",
      "居心地のよさや通いやすさを重視したい方",
    ],
    scores: { total: 80, safety: 22, support: 21, beginner: 16, work: 13, earning: 8 },
  },
  {
    defaultRank: 5, name: "フレイバーグループ", slug: "flavor-group", logo: "/logo-flavor-group.png",
    tags: ["老舗", "店舗数多い", "地方・通勤"],
    forYou: [
      "近くに通える店舗を探している方",
      "報酬の安定感も重視したい方",
      "複数の働き方を比べて選びたい方",
    ],
    scores: { total: 80, safety: 23, support: 20, beginner: 17, work: 12, earning: 8 },
  },
  {
    defaultRank: 6, name: "アリュール", slug: "allure", logo: "/logo-allure.png",
    tags: ["日給保証", "入店祝い金", "初心者向け"],
    forYou: [
      "時給保証制度がある事務所を検討したい方",
      "収入面を重視して比較したい方",
      "自分に合う配信スタイルを相談しながら決めたい方",
    ],
    scores: { total: 74, safety: 24, support: 18, beginner: 13, work: 12, earning: 7 },
  },
  {
    defaultRank: 7, name: "NMRグループ", slug: "nmr-group", logo: "/logo-nmr-group.png",
    tags: ["完全防音個室", "在宅・通勤切替", "条件が見える"],
    forYou: [
      "周りを気にせず配信できる環境を重視したい方",
      "関東・東北エリアで店舗を探している方",
      "在宅よりも、設備のある店舗で配信したい方",
    ],
    scores: { total: 74, safety: 23, support: 18, beginner: 15, work: 11, earning: 7 },
  },
  {
    defaultRank: 8, name: "チャットレディJP", slug: "chatlady-jp", logo: "/logo-chatlady-jp.png",
    tags: ["比較プラットフォーム", "全国対応", "ノンアダルト可"],
    forYou: [
      "配信環境だけでなく、美容面のサポートも気になる方",
      "新宿・上野エリアで通える店舗を探している方",
      "時給保証のある事務所も比較したい方",
    ],
    scores: { total: 70, safety: 22, support: 17, beginner: 14, work: 11, earning: 6 },
  },
  {
    defaultRank: 9, name: "アスタリスク", slug: "asterisk", logo: "/logo-asterisk.png",
    tags: ["女性スタッフのみ", "高収入向け", "1日体験あり"],
    forYou: [
      "女性スタッフに相談できる環境を重視したい方",
      "高収入を目指せる事務所も比較したい方",
      "稼げるならアダルトも選択肢に入れれる方",
    ],
    scores: { total: 69, safety: 25, support: 18, beginner: 9, work: 9, earning: 8 },
  },
  {
    defaultRank: 10, name: "ポケットワーク", slug: "pocket-work", logo: "/logo-pocket-work.png",
    tags: ["在宅メイン", "即日払い", "アダルト寄り"],
    forYou: [
      "在宅でコツコツ配信したい方",
      "在宅サポートを重視したい方に",
      "バーチャルジャンルも検討している方",
    ],
    scores: { total: 68, safety: 24, support: 12, beginner: 13, work: 13, earning: 6 },
  },
  {
    defaultRank: 11, name: "ライバーサポートグループ", slug: "liver-support", logo: "/logo-liver-support.png",
    tags: ["FANZA正規代理店", "無料寮あり", "福利厚生"],
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
                color: G.sageDeep,
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
          margin: "0 auto 16px",
          maxWidth: 760,
          padding: "0 20px",
          fontSize: 12, lineHeight: 1.7, color: G.inkSoft,
          textAlign: "center",
          transition: "opacity 0.18s",
        }}
      >
        {activeTabDesc}
      </p>

      {/* ===== カード一覧（ランキング v3・クラスベース） ===== */}
      <section className="rk-list">
        {sorted.map((o, idx) => {
          const displayRank = idx + 1;
          const isTopRecommend = o.slug === "ft" && sortKey === "total" && displayRank === 1;
          const isFirst = displayRank === 1;
          return (
            <article
              key={o.slug}
              className={`rk-card${isFirst ? " rk-card--first" : ""}`}
              data-score-total={o.scores.total}
              data-score-safety={o.scores.safety}
              data-score-support={o.scores.support}
              data-score-beginner={o.scores.beginner}
              data-score-work={o.scores.work}
              data-score-earning={o.scores.earning}
            >
              <Link
                href={`/jimusho/${o.slug}`}
                aria-label={`${o.name} の詳細・口コミを見る`}
                className="rk-link"
              >
                {isFirst && (
                  <span className="rk-crown">
                    <Icon.Crown size={15} />
                    {isTopRecommend ? <><b>総合1位</b>｜初心者に最もおすすめ</> : <b>{displayRank}位</b>}
                  </span>
                )}

                <div className="rk-head">
                  <div className="rk-rank">
                    <span className="rk-rank-label">No.</span>
                    <span className="rk-rank-num">{displayRank}</span>
                  </div>
                  <div className="rk-logo">
                    <Image src={o.logo} alt={`${o.name} ロゴ`} width={120} height={120} />
                  </div>
                  <h3 className="rk-name">{o.name}</h3>
                </div>

                <div className="rk-tags">
                  {o.tags.map(t => <span key={t} className="rk-tag">{t}</span>)}
                </div>

                <div className="rk-score">
                  <div className="rk-score-head">
                    <span className="rk-score-cap">SCORE</span>
                    <span className="rk-score-num">{o.scores.total}<small>/100</small></span>
                  </div>
                  <div className="rk-bars">
                    {AXIS_META.map(a => {
                      const v = o.scores[a.key];
                      const pct = (v / a.max) * 100;
                      return (
                        <div key={a.key} className="rk-bar">
                          <span className="rk-bar-label">{a.label}</span>
                          <span className="rk-bar-track">
                            <span className="rk-bar-fill" style={{ width: `${pct}%` }} />
                          </span>
                          <span className="rk-bar-val">{v}<small>/{a.max}</small></span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="rk-foryou">
                  <div className="rk-foryou-cap">こんな方におすすめ</div>
                  <ul>
                    {o.forYou.map((line, i) => (
                      <li key={i}>
                        <span className="rk-foryou-check"><Icon.Check size={9} /></span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rk-cta" aria-hidden="true">
                  <span>詳細・口コミを見る</span>
                  <span className="rk-cta-arrow"><Icon.Arrow size={13} /></span>
                </div>
              </Link>
            </article>
          );
        })}
      </section>
    </>
  );
}
