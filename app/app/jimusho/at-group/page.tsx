import Link from "next/link";
import { reviews } from "../../reviews";
import OfficeReviews from "../../OfficeReviews";

export const metadata = {
  title: "アットグループの口コミ・評判【まるみえチャトレ】",
  description: "アットグループの編集部調査レポートと口コミを掲載。カフェのような居心地。関東57店舗展開の大手。",
};

export default function Page() {
  const officeReviews = reviews.filter(r => r.slug === "at-group");

  return (
    <main>
      <section className="detail-hero">
        <div className="si">
          <div className="detail-breadcrumb">
            <Link href="/">トップ</Link> &gt;
            <Link href="/jimusho">事務所一覧</Link> &gt;
            <span>アットグループ</span>
          </div>
          <div className="detail-hero-inner">
            <div className="detail-hero-left">
              <div className="detail-office-logo">
                <img src="/logo-at-group.png" alt="" />
              </div>
              <div className="detail-rank-badge bronze">🥉 3位</div>
              <h1 className="detail-h1">アットグループ</h1>
              <p className="detail-catch">カフェのような居心地。関東57店舗展開の大手。</p>
              <div className="detail-tags">
                <span className="r-tag">カフェ空間</span>
                <span className="r-tag">居心地◎</span>
                <span className="r-tag">関東57店舗</span>
                <span className="r-tag">体験入店OK</span>
              </div>
              <a href="https://atgroup.jp/" target="_blank" rel="noopener noreferrer" className="detail-apply-btn">
                アットグループの公式サイトを見る →
              </a>
            </div>
            <div className="detail-hero-right">
              <div className="detail-score-card">
                <div className="detail-score-total">
                  <span className="detail-score-num">80</span>
                  <span className="detail-score-sub">/ 100点</span>
                </div>
                <div className="r-bars">
                  <div className="r-bar-row"><span className="r-bar-label">安全性 /30</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"73%"}}></div></div><span className="r-bar-val">22</span></div>
                  <div className="r-bar-row"><span className="r-bar-label">サポート /25</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"84%"}}></div></div><span className="r-bar-val">21</span></div>
                  <div className="r-bar-row"><span className="r-bar-label">初心者 /20</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"80%"}}></div></div><span className="r-bar-val">16</span></div>
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
            <p className="detail-comment-text">カフェのような居心地。関東57店舗展開の大手。</p>
            <div className="detail-honest">
              <span className="detail-honest-label">正直なひとこと</span>
              <p>カフェのような居心地の良さは本当で、通うのが苦にならない事務所です。ただし稼ぎ方のノウハウは自分から聞きにいく姿勢が必要です。</p>
            </div>
            <div className="detail-not-suitable">
              <span className="detail-not-suitable-label">こんな方には向いていないかも</span>
              <ul>
                <li>稼ぎ方を手取り足取り教えてほしい方</li>
                <li>混雑する時間帯に自由に入りたい方</li>
                <li>大手の規模感よりアットホームさを求める方</li>
              </ul>
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
              <tr><th>在宅</th><td>△（店舗中心）</td></tr>
              <tr><th>通勤</th><td>OK（関東57店舗）</td></tr>
              <tr><th>身バレ対策</th><td>○</td></tr>
              <tr><th>スタッフ</th><td>女性・男性スタッフ在籍</td></tr>
              <tr><th>特徴</th><td>カフェ空間・体験入店後お祝い金</td></tr>
              <tr><th>対応エリア</th><td>関東中心・全国展開</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section detail-kuchikomi-sec">
        <div className="si">
          <p className="eyebrow">REVIEWS</p>
          <h2 className="sec-h">実際に働いた方の声</h2>
          <OfficeReviews reviews={officeReviews} officeName="アットグループ" />
        </div>
      </section>

      <section className="detail-cta-sec">
        <div className="si detail-cta-inner">
          <h2 className="kuchi-h">アットグループが気になったら</h2>
          <p className="kuchi-p">まずは公式サイトで詳細を確認してみてください。</p>
          <a href="https://atgroup.jp/" target="_blank" rel="noopener noreferrer" className="btn-main">
            アットグループ公式サイトを見る →
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
