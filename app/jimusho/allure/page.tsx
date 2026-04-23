import Link from "next/link";

export const metadata = {
  title: "アリュールの口コミ・評判【まるみえチャトレ】",
  description: "アリュールの編集部調査レポートと口コミを掲載。時給保証制度あり。稼ぎ重視層に強い事務所。",
};

export default function Page() {
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
              <p className="detail-catch">時給保証制度あり。稼ぎ重視層に強い事務所。</p>
              <div className="detail-tags">
                <span className="r-tag">時給保証あり</span>
                <span className="r-tag">稼ぎ重視向け</span>
                <span className="r-tag">大手実績あり</span>
              </div>
              <a href="https://allure-group.com/" target="_blank" rel="noopener noreferrer" className="detail-apply-btn">
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
            <p className="detail-comment-text">1日5時間以上の勤務で時給2,000円を保証する制度が特徴。「せっかく通ったのに稼げなかった」という初心者の不安を軽減する仕組みです。ただし保証条件（5時間）があるため、がっつり稼ぎたい方向けの事務所です。清楚系・慎重タイプには少し合わないかもしれません。</p>
            <div className="detail-honest">
              <span className="detail-honest-label">正直なひとこと</span>
              <p>時給保証は魅力的ですが「1日5時間以上」という条件があります。副業感覚で少しずつ始めたい方より、しっかり稼ぎたい方向きです。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section diff-sec">
        <div className="si">
          <p className="eyebrow">FEATURES</p>
          <h2 className="sec-h">アリュール　3つの強み</h2>
          <div className="diff-grid">
            <div className="diff-item">
              <div className="diff-num">01</div>
              <div className="diff-title">時給2,000円保証制度</div>
              <p className="diff-body">1日5時間以上稼働すれば時給2,000円を保証。稼働日は確実に収入が見込めます。</p>
            </div>
            <div className="diff-item">
              <div className="diff-num">02</div>
              <div className="diff-title">大手ライブチャットサイトで売上1位実績</div>
              <p className="diff-body">複数の大手ライブチャットサイトで全国代理店売上1位を獲得。稼ぎやすい環境が整っています。</p>
            </div>
            <div className="diff-item">
              <div className="diff-num">03</div>
              <div className="diff-title">10年以上の運営実績</div>
              <p className="diff-body">長年の運営で蓄積されたノウハウが豊富。スタッフからの具体的なアドバイスが受けられます。</p>
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
              <tr><th>通勤</th><td>OK</td></tr>
              <tr><th>身バレ対策</th><td>○</td></tr>
              <tr><th>スタッフ</th><td>女性スタッフ在籍</td></tr>
              <tr><th>特徴</th><td>時給2,000円保証（5h条件）</td></tr>
              <tr><th>対応エリア</th><td>都市部中心</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section detail-kuchikomi-sec">
        <div className="si">
          <p className="eyebrow">REVIEWS</p>
          <h2 className="sec-h">実際に働いた方の声</h2>
          <div className="detail-kuchikomi-empty">
            <p>アリュールで働いた経験がある方、ぜひ口コミを投稿してください。<br />あなたの本音が、次に選ぶ誰かの安心になります。</p>
            <Link href="/kuchikomi" className="btn-main">口コミを投稿する →</Link>
          </div>
        </div>
      </section>

      <section className="detail-cta-sec">
        <div className="si detail-cta-inner">
          <h2 className="kuchi-h">アリュールが気になったら</h2>
          <p className="kuchi-p">まずは公式サイトで詳細を確認してみてください。</p>
          <a href="https://allure-group.com/" target="_blank" rel="noopener noreferrer" className="btn-main">
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
