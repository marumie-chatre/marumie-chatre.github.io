import Link from "next/link";
import { reviews } from "../../reviews";
import OfficeReviews from "../../OfficeReviews";

export const metadata = {
  title: "アスタリスクの口コミ・評判【まるみえチャトレ】",
  description: "アスタリスクの編集部調査レポートと口コミを掲載。全店女性スタッフ。本気で稼ぎたい方向けの事務所。",
};

export default function Page() {
  const officeReviews = reviews.filter(r => r.slug === "asterisk");

  return (
    <main>
      <section className="detail-hero">
        <div className="si">
          <div className="detail-breadcrumb">
            <Link href="/">トップ</Link> &gt;
            <Link href="/jimusho">事務所一覧</Link> &gt;
            <span>アスタリスク</span>
          </div>
          <div className="detail-hero-inner">
            <div className="detail-hero-left">
              <div className="detail-rank-badge gray">10位 10位</div>
              <h1 className="detail-h1">アスタリスク</h1>
              <p className="detail-catch">全店女性スタッフ。本気で稼ぎたい方向けの事務所。</p>
              <div className="detail-tags">
                <span className="r-tag">全店女性スタッフ</span>
                <span className="r-tag">安全性◎</span>
              </div>
              <a href="https://asterisk-chatlady.com/" target="_blank" rel="noopener noreferrer" className="detail-apply-btn">
                アスタリスクの公式サイトを見る →
              </a>
            </div>
            <div className="detail-hero-right">
              <div className="detail-score-card">
                <div className="detail-score-total">
                  <span className="detail-score-num">71</span>
                  <span className="detail-score-sub">/ 100点</span>
                </div>
                <div className="r-bars">
                  <div className="r-bar-row"><span className="r-bar-label">安全性 /30</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"83%"}}></div></div><span className="r-bar-val">25</span></div>
                  <div className="r-bar-row"><span className="r-bar-label">サポート /25</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"72%"}}></div></div><span className="r-bar-val">18</span></div>
                  <div className="r-bar-row"><span className="r-bar-label">初心者 /20</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"45%"}}></div></div><span className="r-bar-val">9</span></div>
                  <div className="r-bar-row"><span className="r-bar-label">働きやすさ /15</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"67%"}}></div></div><span className="r-bar-val">10</span></div>
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
            <p className="detail-comment-text">全店女性スタッフ。本気で稼ぎたい方向けの事務所。</p>
                                    <div className="detail-honest">
              <span className="detail-honest-label">正直なひとこと</span>
              <p>全店女性スタッフで安全性が高く、稼ぎへのサポートも本物です。ただし稼ぎ重視の空気が強いため、ゆるく働きたい方には合わないかもしれません。</p>
            </div>
            <div className="detail-not-suitable">
              <span className="detail-not-suitable-label">こんな方には向いていないかも</span>
              <ul>
                <li>のんびり自分のペースで働きたい方</li>
                <li>ノンアダルト一本でゆるく続けたい方</li>
                <li>プレッシャーを感じやすい方</li>
              </ul>
            </div></div>
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
              <tr><th>通勤</th><td>OK</td></tr>
              <tr><th>身バレ対策</th><td>◎</td></tr>
              <tr><th>スタッフ</th><td>全店女性スタッフのみ</td></tr>
              <tr><th>特徴</th><td>全女性スタッフ・稼ぎノウハウ充実</td></tr>
              <tr><th>対応エリア</th><td>全国展開</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section detail-kuchikomi-sec">
        <div className="si">
          <p className="eyebrow">REVIEWS</p>
          <h2 className="sec-h">実際に働いた方の声</h2>
          <OfficeReviews reviews={officeReviews} officeName="アスタリスク" />
        </div>
      </section>

      <section className="detail-cta-sec">
        <div className="si detail-cta-inner">
          <h2 className="kuchi-h">アスタリスクが気になったら</h2>
          <p className="kuchi-p">まずは公式サイトで詳細を確認してみてください。</p>
          <a href="https://asterisk-chatlady.com/" target="_blank" rel="noopener noreferrer" className="btn-main">
            アスタリスク公式サイトを見る →
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
