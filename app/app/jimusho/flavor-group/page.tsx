import Link from "next/link";
import { reviews } from "../../reviews";
import OfficeReviews from "../../OfficeReviews";

export const metadata = {
  title: "フレイバーグループの口コミ・評判【まるみえチャトレ】",
  description: "フレイバーグループの編集部調査レポートと口コミを掲載。稼ぎ方のノウハウを具体的に教えてくれる。全国300店舗の老舗。",
};

export default function Page() {
  const officeReviews = reviews.filter(r => r.slug === "flavor-group");

  return (
    <main>
      <section className="detail-hero">
        <div className="si">
          <div className="detail-breadcrumb">
            <Link href="/">トップ</Link> &gt;
            <Link href="/jimusho">事務所一覧</Link> &gt;
            <span>フレイバーグループ</span>
          </div>
          <div className="detail-hero-inner">
            <div className="detail-hero-left">
              <div className="detail-office-logo">
                <img src="/logo-flavor-group.png" alt="" />
              </div>
              <div className="detail-rank-badge gray">5位 5位</div>
              <h1 className="detail-h1">フレイバーグループ</h1>
              <p className="detail-catch">稼ぎ方のノウハウを具体的に教えてくれる。全国300店舗の老舗。</p>
              <div className="detail-tags">
                <span className="r-tag">全国300店舗</span>
                <span className="r-tag">老舗20年</span>
                <span className="r-tag">固定給選択可</span>
                <span className="r-tag">24h対応</span>
              </div>
              <a href="https://www.find-job.jp/" target="_blank" rel="noopener noreferrer" className="detail-apply-btn">
                フレイバーグループの公式サイトを見る →
              </a>
            </div>
            <div className="detail-hero-right">
              <div className="detail-score-card">
                <div className="detail-score-total">
                  <span className="detail-score-num">80</span>
                  <span className="detail-score-sub">/ 100点</span>
                </div>
                <div className="r-bars">
                  <div className="r-bar-row"><span className="r-bar-label">安全性 /30</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"77%"}}></div></div><span className="r-bar-val">23</span></div>
                  <div className="r-bar-row"><span className="r-bar-label">サポート /25</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"80%"}}></div></div><span className="r-bar-val">20</span></div>
                  <div className="r-bar-row"><span className="r-bar-label">初心者 /20</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"85%"}}></div></div><span className="r-bar-val">17</span></div>
                  <div className="r-bar-row"><span className="r-bar-label">働きやすさ /15</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"80%"}}></div></div><span className="r-bar-val">12</span></div>
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
            <p className="detail-comment-text">稼ぎ方のノウハウを具体的に教えてくれる。全国300店舗の老舗。</p>
                                    <div className="detail-honest">
              <span className="detail-honest-label">正直なひとこと</span>
              <p>稼ぎのノウハウを具体的に教えてくれる姿勢は評価できます。ただし店舗によってスタッフの質に差があるため、事前に店舗の口コミを確認することをおすすめします。</p>
            </div>
            <div className="detail-not-suitable">
              <span className="detail-not-suitable-label">こんな方には向いていないかも</span>
              <ul>
                <li>スタッフとの密なサポートを求める方</li>
                <li>のんびり自分のペースでやりたい方</li>
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
              <tr><th>通勤</th><td>OK（全国300店舗）</td></tr>
              <tr><th>身バレ対策</th><td>○</td></tr>
              <tr><th>スタッフ</th><td>24時間常駐</td></tr>
              <tr><th>特徴</th><td>固定給選択可・稼ぎノウハウ重視</td></tr>
              <tr><th>対応エリア</th><td>全国</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section detail-kuchikomi-sec">
        <div className="si">
          <p className="eyebrow">REVIEWS</p>
          <h2 className="sec-h">実際に働いた方の声</h2>
          <OfficeReviews reviews={officeReviews} officeName="フレイバーグループ" />
        </div>
      </section>

      <section className="detail-cta-sec">
        <div className="si detail-cta-inner">
          <h2 className="kuchi-h">フレイバーグループが気になったら</h2>
          <p className="kuchi-p">まずは公式サイトで詳細を確認してみてください。</p>
          <a href="https://www.find-job.jp/" target="_blank" rel="noopener noreferrer" className="btn-main">
            フレイバーグループ公式サイトを見る →
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
