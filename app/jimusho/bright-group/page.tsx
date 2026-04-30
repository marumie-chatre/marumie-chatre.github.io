import Link from "next/link";
import { reviews } from "../reviews";
import ReviewCard from "../ReviewCard";

export const metadata = {
  title: "ブライトグループの口コミ・評判【まるみえチャトレ】",
  description: "ブライトグループの編集部調査レポートと口コミを掲載。運営20年・全国最大手。初心者でも安心の大手ブランド。",
};

export default function Page() {
  const officeReviews = reviews.filter(r => r.slug === "bright-group");

  return (
    <main>
      <section className="detail-hero">
        <div className="si">
          <div className="detail-breadcrumb">
            <Link href="/">トップ</Link> &gt;
            <Link href="/jimusho">事務所一覧</Link> &gt;
            <span>ブライトグループ</span>
          </div>
          <div className="detail-hero-inner">
            <div className="detail-hero-left">
              <div className="detail-rank-badge silver">🥈 2位</div>
              <h1 className="detail-h1">ブライトグループ</h1>
              <p className="detail-catch">運営20年・全国最大手。初心者でも安心の大手ブランド。</p>
              <div className="detail-tags">
                <span className="r-tag">全国140店舗</span>
                <span className="r-tag">老舗20年</span>
                <span className="r-tag">24h対応</span>
                <span className="r-tag">顧問税理士</span>
              </div>
              <a href="https://chatlady.co.jp/" target="_blank" rel="noopener noreferrer" className="detail-apply-btn">
                ブライトグループの公式サイトを見る →
              </a>
            </div>
            <div className="detail-hero-right">
              <div className="detail-score-card">
                <div className="detail-score-total">
                  <span className="detail-score-num">84</span>
                  <span className="detail-score-sub">/ 100点</span>
                </div>
                <div className="r-bars">
                  <div className="r-bar-row"><span className="r-bar-label">安全性 /30</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"83%"}}></div></div><span className="r-bar-val">25</span></div>
                  <div className="r-bar-row"><span className="r-bar-label">サポート /25</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"80%"}}></div></div><span className="r-bar-val">20</span></div>
                  <div className="r-bar-row"><span className="r-bar-label">初心者 /20</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"90%"}}></div></div><span className="r-bar-val">18</span></div>
                  <div className="r-bar-row"><span className="r-bar-label">働きやすさ /15</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"87%"}}></div></div><span className="r-bar-val">13</span></div>
                  <div className="r-bar-row"><span className="r-bar-label">稼ぎ /10</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"80%"}}></div></div><span className="r-bar-val">8</span></div>
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
            <p className="detail-comment-text">運営20年・全国最大手。初心者でも安心の大手ブランド。</p>
            <div className="detail-honest">
              <span className="detail-honest-label">正直なひとこと</span>
              <p>店舗によってスタッフの質に差があります。事前に店舗の口コミを確認してから応募することをおすすめします。</p>
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
              <tr><th>通勤</th><td>OK（全国70店舗以上）</td></tr>
              <tr><th>身バレ対策</th><td>◎</td></tr>
              <tr><th>スタッフ</th><td>女性スタッフ在籍（店舗による）</td></tr>
              <tr><th>特徴</th><td>顧問税理士あり・プレミアム店舗制度あり</td></tr>
              <tr><th>対応エリア</th><td>全国47都道府県</td></tr>
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
                  ブライトグループの口コミを投稿する →
                </a>
              </div>
            </>
          ) : (
            <div className="detail-kuchikomi-empty">
              <p>ブライトグループで働いた経験がある方、ぜひ口コミを投稿してください。<br />あなたの本音が、次に選ぶ誰かの安心になります。</p>
              <Link href="/kuchikomi" className="btn-main">口コミを投稿する →</Link>
            </div>
          )}
        </div>
      </section>

      <section className="detail-cta-sec">
        <div className="si detail-cta-inner">
          <h2 className="kuchi-h">ブライトグループが気になったら</h2>
          <p className="kuchi-p">まずは公式サイトで詳細を確認してみてください。</p>
          <a href="https://chatlady.co.jp/" target="_blank" rel="noopener noreferrer" className="btn-main">
            ブライトグループ公式サイトを見る →
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
