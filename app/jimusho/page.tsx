import Link from "next/link";
import { OFFICE_COUNT } from "../offices";

export const metadata = {
  title: "チャットレディ事務所 比較ランキング12社｜まるみえチャトレ",
  description: "「なんとなくおすすめ」じゃ、選べない。12社を安全性・サポート・初心者おすすめ度など5軸で採点。スコアの根拠をすべて公開しています。",
};

const offices = [
  {
    rank: 1,
    slug: "ft",
    name: "フェアリーテイル",
    
    score: 84,
    bars: [
      { label: "安全性 /30", val: 29, pct: 97 },
      { label: "サポート /25", val: 20, pct: 80 },
      { label: "初心者 /20", val: 17, pct: 85 },
    ],
    tags: ["ノンアダルト専門", "身バレ対策◎", "清楚系向け"],
    comment: "完全ノンアダルト専門。業界初の先駆者。清楚系・初心者に最適な事務所。",
  },
  {
    rank: 2,
    slug: "bright-group",
    name: "ブライトグループ",
    pr: false,
    score: 84,
    bars: [
      { label: "安全性 /30", val: 25, pct: 83 },
      { label: "サポート /25", val: 20, pct: 80 },
      { label: "初心者 /20", val: 18, pct: 90 },
    ],
    tags: ["全国140店舗", "老舗20年", "24h対応"],
    comment: "運営20年・全国最大手。顧問税理士あり。初心者でも安心の大手ブランド。",
  },
  {
    rank: 3,
    slug: "at-group",
    name: "アットグループ",
    pr: false,
    score: 80,
    bars: [
      { label: "安全性 /30", val: 22, pct: 73 },
      { label: "サポート /25", val: 21, pct: 84 },
      { label: "初心者 /20", val: 16, pct: 80 },
    ],
    tags: ["カフェ空間", "居心地◎", "関東57店舗"],
    comment: "カフェのような居心地の良さが特徴。応募数が多い大手。正直な評価で掲載。",
  },
  {
    rank: 4,
    slug: "chatstyle",
    name: "チャットスタイル",
    pr: false,
    score: 81,
    bars: [
      { label: "安全性 /30", val: 23, pct: 77 },
      { label: "サポート /25", val: 21, pct: 84 },
      { label: "初心者 /20", val: 17, pct: 85 },
    ],
    tags: ["バーチャル対応", "現役スタッフ在籍", "都市部安心"],
    comment: "バーチャルジャンル対応・現役スタッフ在籍。都市部で安心して働ける環境。",
  },
  {
    rank: 5,
    slug: "flavor-group",
    name: "フレイバーグループ",
    pr: false,
    score: 80,
    bars: [
      { label: "安全性 /30", val: 23, pct: 77 },
      { label: "サポート /25", val: 20, pct: 80 },
      { label: "初心者 /20", val: 17, pct: 85 },
    ],
    tags: ["全国300店舗", "老舗20年", "固定給選択可"],
    comment: "運営20年・全国300店舗の老舗。固定給選択可。スタッフ質はあるある。",
  },
  {
    rank: 6,
    slug: "allure",
    name: "アリュール",
    pr: false,
    score: 76,
    bars: [
      { label: "安全性 /30", val: 24, pct: 80 },
      { label: "サポート /25", val: 18, pct: 72 },
      { label: "初心者 /20", val: 13, pct: 65 },
    ],
    tags: ["時給保証あり", "稼ぎ重視向け"],
    comment: "時給保証制度あり（5h条件）。稼ぎ重視層に強い。清楚系初心者には少し合わないかも。",
  },
  {
    rank: 7,
    slug: "nmr-group",
    name: "NMRグループ",
    pr: false,
    score: 74,
    bars: [
      { label: "安全性 /30", val: 23, pct: 77 },
      { label: "サポート /25", val: 18, pct: 72 },
      { label: "初心者 /20", val: 15, pct: 75 },
    ],
    tags: ["完全防音個室", "関東東北中心"],
    comment: "完全防音個室・関東東北中心。ブログコンテンツ充実。中堅規模の安定感。",
  },
  {
    rank: 8,
    slug: "chatlady-jp",
    name: "チャットレディJP",
    pr: false,
    score: 71,
    bars: [
      { label: "安全性 /30", val: 22, pct: 73 },
      { label: "サポート /25", val: 17, pct: 68 },
      { label: "初心者 /20", val: 14, pct: 70 },
    ],
    tags: ["新宿・上野多店舗", "美容機器無料"],
    comment: "新宿・上野に多店舗展開。美容機器無料。時給保証あり。",
  },
  {
    rank: 9,
    slug: "asterisk",
    name: "アスタリスク",
    pr: false,
    score: 71,
    bars: [
      { label: "安全性 /30", val: 25, pct: 83 },
      { label: "サポート /25", val: 18, pct: 72 },
      { label: "初心者 /20", val: 9, pct: 45 },
    ],
    tags: ["全店女性スタッフ", "AI動画監視", "ガチ勢向け"],
    comment: "全店女性スタッフ・AI動画監視。本気で稼ぎたい人向け。初心者にはやや厳しめ。",
  },
  {
    rank: 10,
    slug: "pocket-work",
    name: "ポケットワーク",
    pr: false,
    score: 71,
    bars: [
      { label: "安全性 /30", val: 24, pct: 80 },
      { label: "サポート /25", val: 12, pct: 48 },
      { label: "初心者 /20", val: 13, pct: 65 },
    ],
    tags: ["仕組み重視", "自動仕分け型"],
    comment: "仕組みの力が強く自動仕分け型。スタッフサポートより効率重視の事務所。",
  },
  {
    rank: 11,
    slug: "liver-support",
    name: "ライバーサポートグループ",
    pr: false,
    score: 69,
    bars: [
      { label: "安全性 /30", val: 21, pct: 70 },
      { label: "サポート /25", val: 16, pct: 64 },
      { label: "初心者 /20", val: 14, pct: 70 },
    ],
    tags: ["広域展開", "大宮・福岡あり"],
    comment: "広域展開が強み。新宿〜大宮・福岡まで対応。サポートはやや薄め。",
  },
  {
    rank: 12,
    slug: "furari",
    name: "ふらり",
    
    score: 88,
    hidden: true,
    bars: [],
    tags: [],
    comment: "",
  },
];

const visibleOffices = offices.filter((o) => !o.hidden);

function RankBadgeClass(rank: number) {
  if (rank === 1) return "r-rank-badge gold";
  if (rank === 2) return "r-rank-badge silver";
  if (rank === 3) return "r-rank-badge bronze";
  return "r-rank-badge gray";
}

function RankEmoji(rank: number) {
  if (rank === 1) return "🥇";
  if (rank === 2) return "🥈";
  if (rank === 3) return "🥉";
  return `${rank}位`;
}

export default function JimushoPage() {
  return (
    <main>
      {/* HERO */}
      <section className="list-hero">
        <div className="si">
          <p className="eyebrow">RANKING</p>
          <h1 className="list-h1">
            「なんとなくおすすめ」じゃ、選べない。<br />
            <span>5軸で採点した比較ランキングです。</span>
          </h1>
          <p className="list-lead">
            安全性・サポート・初心者おすすめ度など5つの軸で採点。<br />
            なぜその順位なのか、根拠をすべて公開しています。
          </p>
          <div className="list-meta">
            <Link href="/hyoka-kijun" className="list-meta-link">評価基準についてはこちら →</Link>
          </div>
        </div>
      </section>

      <div className="si" style={{padding:"0 32px"}}>
        
      </div>

      {/* OFFICE LIST */}
      <section className="section">
        <div className="si">
          <div className="list-grid">
            {visibleOffices.map((office) => (
              <div
                key={office.slug}
                className={`r-card${office.rank === 1 ? " top" : ""}`}
              >
                <div className={RankBadgeClass(office.rank)}>
                  {RankEmoji(office.rank)} {office.rank <= 3 ? "" : ""}
                </div>
                <div className="r-name">
                  {office.name}
                </div>
                <div className="r-score">
                  {office.score}<sub> / 100点</sub>
                </div>
                <div className="r-bars">
                  {office.bars.map((bar) => (
                    <div className="r-bar-row" key={bar.label}>
                      <span className="r-bar-label">{bar.label}</span>
                      <div className="r-bar-track">
                        <div className="r-bar-fill" style={{width:`${bar.pct}%`}}></div>
                      </div>
                      <span className="r-bar-val">{bar.val}</span>
                    </div>
                  ))}
                </div>
                <div className="r-tags">
                  {office.tags.map((tag) => (
                    <span className="r-tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <p className="r-comment">{office.comment}</p>
                <Link href={`/jimusho/${office.slug}`} className="r-btn">
                  詳細・口コミを見る →
                </Link>
              </div>
            ))}
          </div>

          {/* ふらり：HP公開後にhidden:trueを削除する */}
        </div>
      </section>

      {/* 比較表 */}
      <section className="section" style={{background:"var(--cream)"}}>
        <div className="si">
          <p className="eyebrow">COMPARE</p>
          <h2 className="sec-h">全社を一覧で比較する</h2>
          <p className="sec-sub">横にスクロールして比較できます。</p>
          <div className="compare-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th className="compare-th-name">事務所名</th>
                  <th className="compare-th">総合</th>
                  <th className="compare-th">安全性<br/><span>/30</span></th>
                  <th className="compare-th">サポート<br/><span>/25</span></th>
                  <th className="compare-th">初心者<br/><span>/20</span></th>
                  <th className="compare-th">ノンアダ</th>
                  <th className="compare-th">通勤エリア</th>
                  <th className="compare-th">詳細</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name:"フェアリーテイル", slug:"ft", total:84, safe:29, support:20, beginner:17, nonadult:"専門", area:"池袋・上野", top:true },
                  { name:"ブライトグループ", slug:"bright-group", total:84, safe:25, support:20, beginner:18, nonadult:"選択可", area:"全国" },
                  { name:"チャットスタイル", slug:"chatstyle", total:81, safe:23, support:21, beginner:17, nonadult:"選択可", area:"都市部" },
                  { name:"アットグループ", slug:"at-group", total:80, safe:22, support:21, beginner:16, nonadult:"選択可", area:"関東" },
                  { name:"フレイバーグループ", slug:"flavor-group", total:80, safe:23, support:20, beginner:17, nonadult:"選択可", area:"全国" },
                  { name:"アリュール", slug:"allure", total:76, safe:24, support:18, beginner:13, nonadult:"選択可", area:"都市部" },
                  { name:"NMRグループ", slug:"nmr-group", total:74, safe:23, support:18, beginner:15, nonadult:"選択可", area:"関東・東北" },
                  { name:"チャットレディJP", slug:"chatlady-jp", total:71, safe:22, support:17, beginner:14, nonadult:"選択可", area:"新宿・上野" },
                  { name:"アスタリスク", slug:"asterisk", total:71, safe:25, support:18, beginner:9, nonadult:"選択可", area:"全国" },
                  { name:"ポケットワーク", slug:"pocket-work", total:71, safe:24, support:12, beginner:13, nonadult:"選択可", area:"全国8拠点" },
                  { name:"ライバーサポートG", slug:"liver-support", total:69, safe:21, support:16, beginner:14, nonadult:"選択可", area:"広域" },
                ].map((o) => (
                  <tr key={o.slug} className={o.top ? "compare-tr-top" : ""}>
                    <td className="compare-td-name">
                      {o.top && <span className="compare-crown">👑</span>}
                      {o.name}
                    </td>
                    <td className="compare-td-score">{o.total}</td>
                    <td className="compare-td">{o.safe}</td>
                    <td className="compare-td">{o.support}</td>
                    <td className="compare-td">{o.beginner}</td>
                    <td className={`compare-td ${o.nonadult === "専門" ? "compare-td-best" : ""}`}>
                      {o.nonadult}
                    </td>
                    <td className="compare-td compare-td-area">{o.area}</td>
                    <td className="compare-td">
                      <Link href={`/jimusho/${o.slug}`} className="compare-btn">見る →</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{fontSize:"11px", color:"var(--text-light)", marginTop:"12px", textAlign:"center"}}>
            ※掲載順位は広告費ではなく評価基準にもとづいています
          </p>
        </div>
      </section>

      {/* 評価基準CTA */}
      <section className="kuchi-sec">
        <div className="kuchi-inner">
          <h2 className="kuchi-h">このスコアはどうやって決めているの？</h2>
          <p className="kuchi-p">
            採点基準と根拠をすべて公開しています。<br />
            「なんとなくおすすめ」のランキングは載せません。
          </p>
          <Link href="/hyoka-kijun" className="btn-main">評価基準を確認する →</Link>
        </div>
      </section>

    </main>
  );
}
