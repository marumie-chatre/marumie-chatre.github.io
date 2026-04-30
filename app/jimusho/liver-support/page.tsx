import Link from "next/link";
import { reviews } from "../../reviews";
import OfficeReviews from "../../OfficeReviews";

export const metadata = {
  title: "ライバーサポートグループの口コミ・評判【まるみえチャトレ】",
  description: "ライバーサポートグループの編集部調査レポートと口コミを掲載。創業22年の老舗。広域展開が強みの事務所。",
};

export default function Page() {
  const officeReviews = reviews.filter(r => r.slug === "liver-support");

  return (
    <main>
      <section className="detail-hero">
        <div className="si">
          <div className="detail-breadcrumb">
            <Link href="/">トップ</Link> &gt;
            <Link href="/jimusho">事務所一覧</Link> &gt;
            <span>ライバーサポートグループ</span>
          </div>
          <div className="detail-hero-inner">
            <div className="detail-hero-left">
              <div className="detail-office-logo">
                <img src="/logo-liver-support.png" alt="" />
              </div>
              <div className="detail-rank-badge gray">12位 12位</div>
              <h1 className="detail-h1">ライバーサポートグループ</h1>
              <p className="detail-catch">創業22年の老舗。広域展開が強みの事務所。</p>
              <div className="detail-tags">
                <span className="r-tag">創業22年</span>
                <span className="r-tag">広域展開</span>
                <span className="r-tag">社会保険加入可</span>
              </div>
              <a href="https://live-chat.jp/" target="_blank" rel="noopener noreferrer" className="detail-apply-btn">
                ライバーサポートグループの公式サイトを見る →
              </a>
            </div>
            <div className="detail-hero-right">
              <div className="detail-score-card">
                <div className="detail-score-total">
                  <span className="detail-score-num">69</span>
                  <span className="detail-score-sub">/ 100点</span>
                </div>
                <div className="r-bars">
                  <div className="r-bar-row"><span className="r-bar-label">安全性 /30</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"70%"}}></div></div><span className="r-bar-val">21</span></div>
                  <div className="r-bar-row"><span className="r-bar-label">サポート /25</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"64%"}}></div></div><span className="r-bar-val">16</span></div>
                  <div className="r-bar-row"><span className="r-bar-label">初心者 /20</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"70%"}}></div></div><span className="r-bar-val">14</span></div>
                  <div className="r-bar-row"><span className="r-bar-label">働きやすさ /15</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"73%"}}></div></div><span className="r-bar-val">11</span></div>
                  <div className="r-bar-row"><span className="r-bar-label">稼ぎ /10</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"70%"}}></div></div><span className="r-bar-val">7</span></div>
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
            <p className="detail-comment-text">創業22年の老舗。広域展開が強みの事務所。</p>
                                    <div className="detail-honest">
              <span className="detail-honest-label">正直なひとこと</span>
              <p>創業22年の老舗で安定感があります。社会保険加入ができる珍しい事務所ですが、サポートは控えめで自分から動く姿勢が必要です。</p>
            </div>
            <div className="detail-not-suitable">
              <span className="detail-not-suitable-label">こんな方には向いていないかも</span>
              <ul>
                <li>稼ぎ方のノウハウを積極的に教えてほしい方</li>
                <li>スタッフとの距離感を大切にしたい方</li>
                <li>対応エリア外に住んでいる方</li>
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
              <tr><th>通勤</th><td>OK（広域展開）</td></tr>
              <tr><th>身バレ対策</th><td>○</td></tr>
              <tr><th>スタッフ</th><td>女性スタッフ在籍</td></tr>
              <tr><th>特徴</th><td>社会保険加入可・創業22年</td></tr>
              <tr><th>対応エリア</th><td>池袋・博多・千葉・横浜・札幌など</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section detail-kuchikomi-sec">
        <div className="si">
          <p className="eyebrow">REVIEWS</p>
          <h2 className="sec-h">実際に働いた方の声</h2>
          <OfficeReviews reviews={officeReviews} officeName="ライバーサポートグループ" />
        </div>
      </section>

      <section className="detail-cta-sec">
        <div className="si detail-cta-inner">
          <h2 className="kuchi-h">ライバーサポートグループが気になったら</h2>
          <p className="kuchi-p">まずは公式サイトで詳細を確認してみてください。</p>
          <a href="https://live-chat.jp/" target="_blank" rel="noopener noreferrer" className="btn-main">
            ライバーサポートグループ公式サイトを見る →
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
