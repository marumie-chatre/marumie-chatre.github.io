import Link from "next/link";

export const metadata = {
  title: "ライバーサポートグループの口コミ・評判【まるみえチャトレ】",
  description: "ライバーサポートグループの編集部調査レポートと口コミを掲載。創業22年の老舗。広域展開が強みの事務所。",
};

export default function Page() {
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
            <p className="detail-comment-text">創業22年の老舗事務所グループ。池袋・博多・千葉・横浜など広域に展開しており、エリアの選択肢が広いのが特徴。ただし広域展開の反面、個別スタッフのサポート密度はやや薄めという評判があります。広い地域から通いたい方向け。</p>
            <div className="detail-honest">
              <span className="detail-honest-label">正直なひとこと</span>
              <p>老舗の安心感はありますが、広域展開ゆえサポートが薄めという声があります。エリアの選択肢の広さが最大の強みです。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section diff-sec">
        <div className="si">
          <p className="eyebrow">FEATURES</p>
          <h2 className="sec-h">ライバーサポートグループ　3つの強み</h2>
          <div className="diff-grid">
            <div className="diff-item">
              <div className="diff-num">01</div>
              <div className="diff-title">創業22年の老舗</div>
              <p className="diff-body">業界最古参クラスの運営歴。長年の実績と安定感があり、突然閉店するリスクが低い。</p>
            </div>
            <div className="diff-item">
              <div className="diff-num">02</div>
              <div className="diff-title">池袋・博多・千葉など広域展開</div>
              <p className="diff-body">関東から九州まで広域に展開。他の事務所では通えないエリアでも選択肢に入ります。</p>
            </div>
            <div className="diff-item">
              <div className="diff-num">03</div>
              <div className="diff-title">社会保険加入可能</div>
              <p className="diff-body">チャットレディ事務所では珍しい社会保険加入制度あり。長期で働くことを考えている方に安心です。</p>
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
          <div className="detail-kuchikomi-empty">
            <p>ライバーサポートグループで働いた経験がある方、ぜひ口コミを投稿してください。<br />あなたの本音が、次に選ぶ誰かの安心になります。</p>
            <Link href="/kuchikomi" className="btn-main">口コミを投稿する →</Link>
          </div>
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
