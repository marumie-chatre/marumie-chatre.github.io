import Link from "next/link";
import { reviews } from "../reviews";
import ReviewCard from "../ReviewCard";

export const metadata = {
  title: "ポケットワークの口コミ・評判【まるみえチャトレ】",
  description: "ポケットワークの編集部調査レポートと口コミを掲載。仕組み重視の自動仕分け型事務所。",
};

export default function Page() {
  const officeReviews = reviews.filter(r => r.slug === "pocket-work");

  return (
    <main>
      <section className="detail-hero">
        <div className="si">
          <div className="detail-breadcrumb">
            <Link href="/">トップ</Link> &gt;
            <Link href="/jimusho">事務所一覧</Link> &gt;
            <span>ポケットワーク</span>
          </div>
          <div className="detail-hero-inner">
            <div className="detail-hero-left">
              <div className="detail-rank-badge gray">11位 11位</div>
              <h1 className="detail-h1">ポケットワーク</h1>
              <p className="detail-catch">仕組み重視の自動仕分け型事務所。</p>
              <div className="detail-tags">
                <span className="r-tag">仕組み重視</span>
                <span className="r-tag">バーチャル対応</span>
              </div>
              <a href="https://pocket-work.com/" target="_blank" rel="noopener noreferrer" className="detail-apply-btn">
                ポケットワークの公式サイトを見る →
              </a>
            </div>
            <div className="detail-hero-right">
              <div className="detail-score-card">
                <div className="detail-score-total">
                  <span className="detail-score-num">71</span>
                  <span className="detail-score-sub">/ 100点</span>
                </div>
                <div className="r-bars">
                  <div className="r-bar-row"><span className="r-bar-label">安全性 /30</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"80%"}}></div></div><span className="r-bar-val">24</span></div>
                  <div className="r-bar-row"><span className="r-bar-label">サポート /25</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"48%"}}></div></div><span className="r-bar-val">12</span></div>
                  <div className="r-bar-row"><span className="r-bar-label">初心者 /20</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"65%"}}></div></div><span className="r-bar-val">13</span></div>
                  <div className="r-bar-row"><span className="r-bar-label">働きやすさ /15</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"87%"}}></div></div><span className="r-bar-val">13</span></div>
                  <div className="r-bar-row"><span className="r-bar-label">稼ぎ /10</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"90%"}}></div></div><span className="r-bar-val">9</span></div>
                </div>
                <Link href="/hyoka-kijun" className="detail-score-link">このスコアの根拠を見る →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section detail-comment-sec">
        <div className="si">
          <div className="detail-comment-box">
            <div className="detail-comment-label">編集部コメント</div>
            <p className="detail-comment-text">仕組み重視の自動仕分け型事務所。</p>
            <div className="detail-honest">
              <span className="detail-honest-label">正直なひとこと</span>
              <p>アダルト対応への誘導が強く、ノンアダルトで稼ぎにくい雰囲気があります。通勤から在宅への切替時にアカウント削除が必要な点も注意が必要です。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section detail-info-sec">
        <div className="si">
          <p className="eyebrow">BASIC INFO</p>
          <h2 className="sec-h">基本情報</h2>
          <table className="detail-table">
            <tbody>
              <tr><th>ジャンル</th><td>アダルト・ノンアダルト選択可</td></tr>
              <tr><th>在宅</th><td>OK</td></tr>
              <tr><th>通勤</th><td>OK（全国8拠点）</td></tr>
              <tr><th>身バレ対策</th><td>○（バーチャル対応）</td></tr>
              <tr><th>スタッフ</th><td>女性スタッフ中心</td></tr>
              <tr><th>特徴</th><td>自動仕分け型・仕組み重視</td></tr>
              <tr><th>対応エリア</th><td>全国8拠点</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section detail-kuchikomi-sec">
        <div className="si">
          <p className="eyebrow">REVIEWS</p>
          <h2 className="sec-h">実際に働いた方の声</h2>
          {officeReviews.length > 0 ? (
            <>
              <div className="review-grid" style={{marginBottom:"28px"}}>
                {officeReviews.map(review => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
              <div style={{textAlign:"center"}}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeoozsXNP5R5hgyPbxMlVPNPBrc2NOceFtI5f97Lbv3KUATkw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="btn-sub">
                  ポケットワークの口コミを投稿する →
                </a>
              </div>
            </>
          ) : (
            <div className="detail-kuchikomi-empty">
              <p>ポケットワークで働いた経験がある方、ぜひ口コミを投稿してください。<br />あなたの本音が、次に選ぶ誰かの安心になります。</p>
              <Link href="/kuchikomi" className="btn-main">口コミを投稿する →</Link>
            </div>
          )}
        </div>
      </section>

      <section className="detail-cta-sec">
        <div className="si detail-cta-inner">
          <h2 className="kuchi-h">ポケットワークが気になったら</h2>
          <p className="kuchi-p">まずは公式サイトで詳細を確認してみてください。</p>
          <a href="https://pocket-work.com/" target="_blank" rel="noopener noreferrer" className="btn-main">
            ポケットワーク公式サイトを見る →
          </a>
        </div>
      </section>

      <section className="section">
        <div className="si" style={{textAlign:"center"}}>
          <p className="eyebrow">OTHER OFFICES</p>
          <h2 className="sec-h" style={{marginBottom:"32px"}}>他の事務所も比べてみる</h2>
          <Link href="/jimusho" className="btn-sub">全12社の比較ランキングを見る →</Link>
        </div>
      </section>
    </main>
  );
}
