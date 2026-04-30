import Link from "next/link";
import { reviews } from "../../reviews";
import OfficeReviews from "../../OfficeReviews";

export const metadata = {
  title: "アリュールの口コミ・評判【まるみえチャトレ】",
  description: "アリュールの編集部調査レポートと口コミを掲載。時給保証制度あり。稼ぎ重視層向けの事務所。",
};

export default function Page() {
  const officeReviews = reviews.filter(r => r.slug === "allure");

  return (
    <main>
      <section className="detail-hero">
        <div className="si">
          <div className="detail-breadcrumb">
            <Link href="/">トップ</Link> &gt;
            <Link href="/jimusho">事務所一覧</Link> &gt;
            <span>アリュール</span>
          </div>
          <div className="detail-hero-inner">
            <div className="detail-hero-left">
              <div className="detail-rank-badge gray">7位 7位</div>
              <h1 className="detail-h1">アリュール</h1>
              <p className="detail-catch">時給保証制度あり。稼ぎ重視層向けの事務所。</p>
              <div className="detail-tags">
                <span className="r-tag">時給保証あり</span>
                <span className="r-tag">稼ぎ重視向け</span>
              </div>
              <a href="https://allure.work/" target="_blank" rel="noopener noreferrer" className="detail-apply-btn">
                アリュールの公式サイトを見る →
              </a>
            </div>
            <div className="detail-hero-right">
              <div className="detail-score-card">
                <div className="detail-score-total">
                  <span className="detail-score-num">76</span>
                  <span className="detail-score-sub">/ 100点</span>
                </div>
                <div className="r-bars">
                  <div className="r-bar-row"><span className="r-bar-label">安全性 /30</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"80%"}}></div></div><span className="r-bar-val">24</span></div>
                  <div className="r-bar-row"><span className="r-bar-label">サポート /25</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"72%"}}></div></div><span className="r-bar-val">18</span></div>
                  <div className="r-bar-row"><span className="r-bar-label">初心者 /20</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"65%"}}></div></div><span className="r-bar-val">13</span></div>
                  <div className="r-bar-row"><span className="r-bar-label">働きやすさ /15</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"80%"}}></div></div><span className="r-bar-val">12</span></div>
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
            <p className="detail-comment-text">時給保証制度あり。稼ぎ重視層向けの事務所。</p>
                                    <div className="detail-honest">
              <span className="detail-honest-label">正直なひとこと</span>
              <p>時給保証の仕組みは魅力的ですが、条件が複雑で体験中と通常で異なる場合があります。条件をしっかり確認した上で入るかどうかを判断してください。</p>
            </div>
            <div className="detail-not-suitable">
              <span className="detail-not-suitable-label">こんな方には向いていないかも</span>
              <ul>
                <li>隙間時間に少しだけ働きたい方</li>
                <li>シンプルな条件で始めたい方</li>
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
              <tr><th>身バレ対策</th><td>○</td></tr>
              <tr><th>スタッフ</th><td>女性スタッフ在籍</td></tr>
              <tr><th>特徴</th><td>時給保証制度あり（条件あり）</td></tr>
              <tr><th>対応エリア</th><td>都市部中心</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section detail-kuchikomi-sec">
        <div className="si">
          <p className="eyebrow">REVIEWS</p>
          <h2 className="sec-h">実際に働いた方の声</h2>
          <OfficeReviews reviews={officeReviews} officeName="アリュール" />
        </div>
      </section>

      <section className="detail-cta-sec">
        <div className="si detail-cta-inner">
          <h2 className="kuchi-h">アリュールが気になったら</h2>
          <p className="kuchi-p">まずは公式サイトで詳細を確認してみてください。</p>
          <a href="https://allure.work/" target="_blank" rel="noopener noreferrer" className="btn-main">
            アリュール公式サイトを見る →
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
