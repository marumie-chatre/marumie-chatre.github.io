import Link from "next/link";
import Image from "next/image";
import { Icon } from "../Icon";
import { BreadcrumbSchema } from "../StructuredData";

export const metadata = {
  title: "評価基準について｜まるみえチャトレ",
  description: "まるみえチャトレがなぜその順位をつけたのか、5軸100点満点の採点基準と根拠をすべて公開しています。",
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
};

// 5軸詳細（画像 + 説明 + 採点項目）
const AXIS_DETAIL = [
  {
    id: "safety",
    n: "01",
    label: "安全性",
    max: 30,
    color: G.sageDeep,
    image: "/eval-axis-1-safety.png",
    desc: "お仕事を続けるうえで一番大事な要素です。\n身バレ対策や無理な強要がないことを重視して採点しています。",
    items: ["身バレ対策", "アダルト強要の有無", "プライバシー保護の対応"],
  },
  {
    id: "support",
    n: "02",
    label: "サポート",
    max: 25,
    color: G.sage,
    image: "/eval-axis-2-support.png",
    desc: "事務所の雰囲気や技術を身に着けるスピードはスタッフの対応で大きく変わります。\n悩みや成長によりそう体制があるか採点しています。",
    items: ["サポートやマニュアルの充実度", "スタッフに相談をしやすいか", "スタッフが常駐しているか"],
  },
  {
    id: "beginner",
    n: "03",
    label: "初心者向け",
    max: 20,
    color: "#9BC25E",
    image: "/eval-axis-3-beginner.png",
    desc: "未経験でも安心して始められるか採点しています。",
    items: ["未経験者の受け入れ態勢", "配信デビューまでの導線", "初心者が躓きにくい設計"],
  },
  {
    id: "work",
    n: "04",
    label: "働きやすさ",
    max: 15,
    color: G.mint,
    image: "/eval-axis-4-work.png",
    desc: "無理なく続けらる環境や居心地の良さを採点しています。",
    items: ["シフトの自由度", "在宅・通勤の選びやすさ", "退店時のトラブルリスク"],
  },
  {
    id: "earn",
    n: "05",
    label: "稼ぎやすさ",
    max: 10,
    color: G.accent,
    image: "/eval-axis-5-earn.png",
    desc: "報酬率は業界ルール通りにうたっているか？\n実際に売り上げを伸ばしやすい環境か採点しています。",
    items: ["待機対策の有無", "戦略の提案クオリティ", "リピート獲得のサポート"],
  },
];

const PROCESS_STEPS = [
  { n: 1, l: "応募・問い合わせ", d: "匿名で実際に応募。返信内容・対応速度をチェック。" },
  { n: 2, l: "面接・体験",       d: "実際に面接 or 体験を受け、強要・契約条件を確認。" },
  { n: 3, l: "口コミ収集",       d: "匿名フォームで現職・元職の口コミを収集。" },
  { n: 4, l: "5軸採点",         d: "上記＋公式情報を統合して100点満点で採点。" },
  { n: 5, l: "公開・改訂",       d: "更新を月次で実施。スコアが変動したら即時反映。" },
];

export default function HyokaKijunPage() {
  return (
    <main style={{ background: G.bg, color: G.ink, paddingBottom: 40 }}>
      <BreadcrumbSchema items={[
        { name: "トップ", path: "/" },
        { name: "評価基準について", path: "/hyoka-kijun" },
      ]} />

      {/* ===== ヘッダー画像 ===== */}
      <section style={{ padding: 0, maxWidth: 720, margin: "0 auto" }}>
        <Image
          src="/eval-header.png"
          alt="評価基準ヘッダー"
          width={2172}
          height={560}
          priority
          sizes="(max-width:720px) 100vw, 720px"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </section>

      {/* ===== 導入文 ===== */}
      <section style={{ padding: "16px 22px 0", maxWidth: 720, margin: "0 auto" }}>
        <p style={{
          margin: 0, fontSize: 13, lineHeight: 1.9, color: G.ink, textAlign: "center",
        }}>
          初心者でも安心して選べるように、<br />
          いい点も気になる点も同じ基準で確認しています。
        </p>
      </section>

      {/* ===== お約束 box ===== */}
      <section style={{ padding: "20px 22px 0", maxWidth: 720, margin: "0 auto" }}>
        <div style={{
          padding: "16px 18px",
          background: G.bgWarm, borderRadius: 14,
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 13, fontWeight: 800, color: G.sageDeep, marginBottom: 8,
          }}>
            <Icon.Leaf size={16} />
            お約束
          </div>
          <p style={{
            margin: 0, fontSize: 12.5, lineHeight: 1.9, color: G.ink,
          }}>
            広告費で順位は変えません。<br />
            スコアが変わるのは、&ldquo;採点項目の事実&rdquo;が変わった時だけです
          </p>
        </div>
      </section>

      {/* ===== 5軸詳細カード（画像左 + テキスト右） ===== */}
      <section style={{
        padding: "20px 22px 0",
        maxWidth: 720,
        margin: "0 auto",
        display: "flex", flexDirection: "column", gap: 14,
      }}>
        {AXIS_DETAIL.map((a) => (
          <div key={a.id} style={{
            background: G.paper, borderRadius: 14, padding: 16,
            border: `1px solid ${G.rule}`,
          }}>
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              {/* LEFT: 軸画像 */}
              <Image
                src={a.image}
                alt={a.label}
                width={400}
                height={400}
                sizes="(max-width:640px) 100px, 110px"
                style={{
                  width: 100, height: 100,
                  borderRadius: 12, flexShrink: 0,
                  objectFit: "cover",
                }}
              />
              {/* RIGHT: 番号+ラベル+pt / 説明 / 採点項目 */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
                  <span style={{
                    fontSize: 22, fontWeight: 800, color: a.color,
                    fontFamily: "'Manrope', sans-serif", letterSpacing: -0.5,
                  }}>{a.n}</span>
                  <span style={{ fontSize: 16, fontWeight: 800, color: G.ink }}>{a.label}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: a.color }}>{a.max}pt</span>
                </div>
                <p style={{
                  margin: "6px 0 12px",
                  fontSize: 11.5, lineHeight: 1.75, color: G.inkSoft,
                  whiteSpace: "pre-line",
                }}>{a.desc}</p>
                <div style={{
                  fontSize: 10, fontWeight: 800, color: G.sageDeep,
                  letterSpacing: 1.5, marginBottom: 6,
                }}>採点項目</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {a.items.map((item, j) => (
                    <li key={j} style={{
                      display: "flex", alignItems: "center", gap: 8,
                      fontSize: 11.5, color: G.ink, lineHeight: 1.7, marginBottom: 4,
                    }}>
                      <span style={{
                        width: 16, height: 16, borderRadius: "50%",
                        background: G.sageDeep, color: "#fff",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                      }}>
                        <Icon.Check size={9} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ===== 編集プロセスタイムライン ===== */}
      <section style={{ padding: "32px 22px 0", maxWidth: 720, margin: "0 auto" }}>
        <div style={{
          fontSize: 10, letterSpacing: 2.5, fontWeight: 700, color: G.ink,
          display: "inline-flex", alignItems: "center", gap: 8,
        }}>
          <span style={{ width: 20, height: 1.5, background: G.sage }} />
          PROCESS
        </div>
        <h2 style={{
          margin: "10px 0 16px",
          fontSize: 20, fontWeight: 700, lineHeight: 1.5, color: G.ink,
        }}>編集プロセス</h2>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {PROCESS_STEPS.map((s, i) => (
            <div key={s.n} style={{
              display: "grid", gridTemplateColumns: "32px 1fr",
              gap: 14, alignItems: "flex-start",
              paddingBottom: i < PROCESS_STEPS.length - 1 ? 16 : 0,
              position: "relative",
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: "50%",
                background: G.sage, color: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 12, fontWeight: 800, zIndex: 1,
              }}>{s.n}</div>
              {i < PROCESS_STEPS.length - 1 && (
                <div style={{
                  position: "absolute", top: 32, left: 15, bottom: 0,
                  width: 2, background: G.sageSoft,
                }} />
              )}
              <div style={{ paddingTop: 5 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: G.ink }}>{s.l}</div>
                <div style={{ fontSize: 11.5, color: G.inkSoft, marginTop: 4, lineHeight: 1.7 }}>{s.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== NO PR マニフェスト ===== */}
      <section style={{
        margin: "28px auto 0",
        padding: "0 22px",
        maxWidth: 720,
      }}>
        <div style={{
          padding: "18px 20px",
          background: G.sagePastel, color: "#5C3D1F",
          borderRadius: 14,
        }}>
          <div style={{
            fontSize: 9.5, letterSpacing: 2, fontWeight: 700,
            color: G.sageDeep, marginBottom: 6,
          }}>NO PR</div>
          <div style={{
            fontSize: 17, fontWeight: 700, lineHeight: 1.5,
          }}>広告費で順位は変えません。</div>
          <p style={{
            margin: "10px 0 0",
            fontSize: 11.5, lineHeight: 1.85,
            color: G.inkSoft,
          }}>
            事務所からの広告費は順位に反映していません。スコアが上下するのは「採点項目の事実が変わったとき」だけです。
          </p>
          <div style={{
            marginTop: 14, fontSize: 10,
            color: G.inkSoft, letterSpacing: 0.5,
            display: "flex", justifyContent: "space-between",
            paddingTop: 12, borderTop: "1px solid rgba(36,30,22,0.15)",
          }}>
            <span>最終更新 2026.06.10</span>
            <span>次回更新 2026.07</span>
          </div>
        </div>
      </section>

      {/* ===== ランキングへ戻るCTA ===== */}
      <section style={{
        margin: "20px auto 0",
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
          <span>事務所のランキングを見る</span>
          <Icon.Arrow size={14} />
        </Link>
      </section>

    </main>
  );
}
