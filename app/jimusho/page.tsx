import Link from "next/link";
import { OFFICE_COUNT } from "../offices";
import { Icon } from "../Icon";

export const metadata = {
  title: "チャットレディ事務所 比較ランキング11社｜まるみえチャトレ",
  description: "「なんとなくおすすめ」じゃ、選べない。11社を安全性・サポート・初心者おすすめ度など5軸で採点。スコアの根拠をすべて公開しています。",
};

// Palette E カラー（インライン使用用）
const G = {
  bg: "#FAFAF5",
  bgWarm: "#F5E8C8",
  paper: "#FFFFFF",
  ink: "#241E16",
  inkSoft: "#87796A",
  inkSofter: "#B5AC9B",
  sage: "#7BAA3F",
  sageDeep: "#587A38",
  sageSoft: "#CDDDB0",
  sagePastel: "#A8C49A",
  mint: "#B5D670",
  cream: "#F8EFE0",
  accent: "#F4B5A0",
  accentDeep: "#E89B85",
  rule: "rgba(36,30,22,0.10)",
  ruleStrong: "rgba(36,30,22,0.20)",
};

// メダル色
const MEDAL_COLORS: Record<number, string> = {
  1: "#E8B85B",
  2: "#C5C0BA",
  3: "#D69C71",
};

type Office = {
  rank: number;
  slug: string;
  name: string;
  score: number;
  bars: { label: string; val: number; pct: number }[];
  tags: string[];
  comment: string;
  hidden?: boolean;
};

const offices: Office[] = [
  { rank: 1,  slug: "ft",            name: "フェアリーテイル",         score: 84, bars: [{label:"安全性",val:29,pct:97},{label:"サポート",val:20,pct:80},{label:"初心者",val:17,pct:85}], tags: ["ノンアダルト専門","身バレ対策◎","清楚系向け"],     comment: "完全ノンアダルト専門。業界初の先駆者。清楚系・初心者に最適な事務所。" },
  { rank: 2,  slug: "bright-group",  name: "ブライトグループ",         score: 84, bars: [{label:"安全性",val:25,pct:83},{label:"サポート",val:20,pct:80},{label:"初心者",val:18,pct:90}], tags: ["全国140店舗","老舗20年","24h対応"],                 comment: "運営20年・全国最大手。顧問税理士あり。初心者でも安心の大手ブランド。" },
  { rank: 3,  slug: "at-group",      name: "アットグループ",           score: 80, bars: [{label:"安全性",val:22,pct:73},{label:"サポート",val:21,pct:84},{label:"初心者",val:16,pct:80}], tags: ["カフェ空間","居心地◎","関東57店舗"],               comment: "カフェのような居心地の良さが特徴。応募数が多い大手。正直な評価で掲載。" },
  { rank: 4,  slug: "chatstyle",     name: "チャットスタイル",         score: 81, bars: [{label:"安全性",val:23,pct:77},{label:"サポート",val:21,pct:84},{label:"初心者",val:17,pct:85}], tags: ["バーチャル対応","現役スタッフ在籍","都市部安心"],   comment: "バーチャルジャンル対応・現役スタッフ在籍。都市部で安心して働ける環境。" },
  { rank: 5,  slug: "flavor-group",  name: "フレイバーグループ",       score: 80, bars: [{label:"安全性",val:23,pct:77},{label:"サポート",val:20,pct:80},{label:"初心者",val:17,pct:85}], tags: ["全国300店舗","老舗20年","固定給選択可"],            comment: "運営20年・全国300店舗の老舗。固定給選択可。" },
  { rank: 6,  slug: "allure",        name: "アリュール",               score: 76, bars: [{label:"安全性",val:24,pct:80},{label:"サポート",val:18,pct:72},{label:"初心者",val:13,pct:65}], tags: ["時給保証あり","稼ぎ重視向け"],                       comment: "時給保証制度あり（5h条件）。稼ぎ重視層に強い。清楚系初心者にはやや合わないかも。" },
  { rank: 7,  slug: "nmr-group",     name: "NMRグループ",              score: 74, bars: [{label:"安全性",val:23,pct:77},{label:"サポート",val:18,pct:72},{label:"初心者",val:15,pct:75}], tags: ["完全防音個室","関東東北中心"],                       comment: "完全防音個室・関東東北中心。中堅規模の安定感。" },
  { rank: 8,  slug: "chatlady-jp",   name: "チャットレディJP",         score: 71, bars: [{label:"安全性",val:22,pct:73},{label:"サポート",val:17,pct:68},{label:"初心者",val:14,pct:70}], tags: ["新宿・上野多店舗","美容機器無料"],                   comment: "新宿・上野に多店舗展開。美容機器無料。時給保証あり。" },
  { rank: 9,  slug: "asterisk",      name: "アスタリスク",             score: 71, bars: [{label:"安全性",val:25,pct:83},{label:"サポート",val:18,pct:72},{label:"初心者",val:9, pct:45}], tags: ["全店女性スタッフ","AI動画監視","ガチ勢向け"],         comment: "全店女性スタッフ・AI動画監視。本気で稼ぎたい人向け。初心者にはやや厳しめ。" },
  { rank: 10, slug: "pocket-work",   name: "ポケットワーク",           score: 71, bars: [{label:"安全性",val:24,pct:80},{label:"サポート",val:12,pct:48},{label:"初心者",val:13,pct:65}], tags: ["仕組み重視","自動仕分け型"],                         comment: "仕組みの力が強く自動仕分け型。効率重視の事務所。" },
  { rank: 11, slug: "liver-support", name: "ライバーサポートグループ", score: 69, bars: [{label:"安全性",val:21,pct:70},{label:"サポート",val:16,pct:64},{label:"初心者",val:14,pct:70}], tags: ["広域展開","大宮・福岡あり"],                         comment: "広域展開が強み。新宿〜大宮・福岡まで対応。" },
];

// ScoreBar コンポーネント
function ScoreBar({ value, max, height = 4, bg, fill }: { value: number; max: number; height?: number; bg: string; fill: string }) {
  const pct = (value / max) * 100;
  return (
    <div style={{ background: bg, borderRadius: 99, height, overflow: "hidden" }}>
      <div style={{ width: `${pct}%`, height: "100%", background: fill, borderRadius: 99 }} />
    </div>
  );
}

// コンパクトオフィスカード
function CompactOfficeCard({ o }: { o: Office }) {
  const isTop3 = o.rank <= 3;
  const medal = MEDAL_COLORS[o.rank];
  return (
    <div style={{
      background: G.paper,
      borderRadius: 14,
      padding: 14,
      border: isTop3 ? `1.5px solid ${G.sage}` : `1px solid ${G.rule}`,
      boxShadow: isTop3
        ? "0 4px 16px rgba(36,30,22,0.10)"
        : "0 1px 4px rgba(36,30,22,0.04)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {/* rank pill */}
        <div style={{
          width: 38, height: 38, borderRadius: "50%",
          background: medal || G.sageSoft,
          color: medal ? "#fff" : G.sageDeep,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          flexShrink: 0,
          boxShadow: medal ? "inset 0 -2px 0 rgba(0,0,0,0.08)" : "none",
        }}>
          <div style={{ fontSize: 7, opacity: 0.85, fontWeight: 700, letterSpacing: 0.5 }}>No.</div>
          <div style={{ fontSize: 14, fontWeight: 800, lineHeight: 1 }}>{o.rank}</div>
        </div>

        {/* name + tags */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.3, color: G.ink }}>{o.name}</div>
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginTop: 4 }}>
            {o.tags.map(t => (
              <span key={t} style={{
                fontSize: 9, fontWeight: 600,
                padding: "1px 6px", borderRadius: 99,
                background: G.sageSoft, color: G.sageDeep,
              }}>{t}</span>
            ))}
          </div>
        </div>

        {/* score */}
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{
            fontSize: 22, fontWeight: 800, lineHeight: 1,
            color: G.ink,
          }}>{o.score}</div>
          <div style={{ fontSize: 8.5, color: G.inkSoft, marginTop: 2 }}>/100</div>
        </div>
      </div>

      {/* breakdown */}
      <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
        {o.bars.map(b => {
          const max = parseInt(b.label.replace(/[^\d]/g, "")) || (b.label.includes("安全") ? 30 : b.label.includes("サポート") ? 25 : 20);
          return (
            <div key={b.label} style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 8.5, marginBottom: 2 }}>
                <span style={{ color: G.inkSoft, fontWeight: 600 }}>{b.label}</span>
                <span style={{ fontWeight: 700 }}>
                  {b.val}<span style={{ color: G.inkSoft, fontWeight: 500 }}>/{max}</span>
                </span>
              </div>
              <ScoreBar value={b.val} max={max} height={3} bg={G.cream} fill={isTop3 ? G.sage : G.inkSofter} />
            </div>
          );
        })}
      </div>

      {/* comment */}
      <div style={{ fontSize: 11, color: G.inkSoft, lineHeight: 1.7, marginTop: 10 }}>
        {o.comment}
      </div>

      {/* CTA */}
      <Link href={`/jimusho/${o.slug}`} style={{
        marginTop: 10, display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "8px 12px", borderRadius: 99,
        background: "transparent", color: G.ink,
        border: `1px solid ${G.rule}`,
        fontSize: 11, fontWeight: 600, textDecoration: "none",
      }}>
        詳細・口コミを見る
        <Icon.Arrow size={11} />
      </Link>
    </div>
  );
}

export default function JimushoPage() {
  return (
    <main style={{ background: G.bg, color: G.ink, paddingBottom: 40 }}>

      {/* ===== HERO ===== */}
      <section style={{ padding: "28px 22px 18px", maxWidth: 720, margin: "0 auto" }}>
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
          fontSize: "clamp(22px, 5.8vw, 28px)",
          lineHeight: 1.5,
          fontWeight: 800,
          letterSpacing: -0.4,
          color: G.ink,
        }}>
          「なんとなくおすすめ」<br />じゃ、選べない。
        </h1>

        {/* sub */}
        <p style={{
          margin: "14px 0 0",
          fontSize: 12.5,
          lineHeight: 1.9,
          color: G.inkSoft,
        }}>
          安全性・サポート・初心者おすすめ度など5つの軸で採点。
          なぜその順位なのか、根拠をすべて公開しています。
        </p>

        {/* 評価基準リンク */}
        <Link href="/hyoka-kijun" style={{
          marginTop: 16,
          display: "inline-flex", alignItems: "center", gap: 6,
          fontSize: 12, fontWeight: 600, color: G.ink,
          borderBottom: `1px solid ${G.ink}`, paddingBottom: 2,
          textDecoration: "none",
        }}>
          評価基準について
          <Icon.Arrow size={11} />
        </Link>
      </section>

      {/* ===== SORT CHIPS（横スクロール）===== */}
      <div style={{
        padding: "0 22px 14px",
        maxWidth: 720,
        margin: "0 auto",
        display: "flex", gap: 6, overflowX: "auto",
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
      }}>
        {[
          { l: "おすすめ順", active: true },
          { l: "安全性" },
          { l: "サポート" },
          { l: "初心者向け" },
          { l: "稼ぎやすさ" },
        ].map(t => (
          <span key={t.l} style={{
            whiteSpace: "nowrap",
            fontSize: 11, fontWeight: 600,
            padding: "7px 13px", borderRadius: 99,
            background: t.active ? G.ink : G.paper,
            color: t.active ? "#fff" : G.ink,
            border: t.active ? "none" : `1px solid ${G.rule}`,
          }}>{t.l}</span>
        ))}
      </div>

      {/* ===== 11事務所カード ===== */}
      <div style={{
        padding: "0 18px",
        maxWidth: 720,
        margin: "0 auto",
        display: "flex", flexDirection: "column", gap: 10,
      }}>
        {offices.map(o => <CompactOfficeCard key={o.slug} o={o} />)}
      </div>

      {/* ===== 評価基準 CTA ===== */}
      <div style={{
        margin: "28px auto 0",
        maxWidth: 720,
        padding: "22px 24px",
      }}>
        <div style={{
          background: G.bgWarm,
          borderRadius: 14,
          padding: "22px 24px",
        }}>
          <div style={{
            fontSize: 16, fontWeight: 700, lineHeight: 1.5, color: G.ink,
          }}>
            このスコアはどうやって<br />決めているの？
          </div>
          <p style={{
            margin: "10px 0 14px",
            fontSize: 11.5, color: G.inkSoft, lineHeight: 1.85,
          }}>
            採点基準と根拠をすべて公開しています。
            「なんとなくおすすめ」のランキングは載せません。
          </p>
          <Link href="/hyoka-kijun" style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "11px 14px", borderRadius: 99,
            background: G.ink, color: "#fff",
            fontSize: 12, fontWeight: 600, textDecoration: "none",
          }}>
            評価基準を確認する
            <Icon.Arrow size={13} />
          </Link>
        </div>
      </div>

      {/* ===== 全{OFFICE_COUNT}社の根拠付きコメント（補足表示）===== */}
      <div style={{
        margin: "8px auto 0",
        maxWidth: 720,
        padding: "0 22px",
        fontSize: 10.5, color: G.inkSoft, textAlign: "center", lineHeight: 1.7,
      }}>
        全{OFFICE_COUNT}社の評価データは編集部が独自調査したものです。
      </div>

    </main>
  );
}
