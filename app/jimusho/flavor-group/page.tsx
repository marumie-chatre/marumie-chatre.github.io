import Link from "next/link";

export const metadata = {
  title: "フレイバーグループの口コミ・評判【まるみえチャトレ】",
  description: "フレイバーグループの編集部調査レポートと口コミを掲載。運営20年・全国300店舗。業界最大規模の老舗。",
};

export default function Page() {
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
              <div className="detail-rank-badge gray">5位 5位</div>
              <h1 className="detail-h1">フレイバーグループ</h1>
              <p className="detail-catch">運営20年・全国300店舗。業界最大規模の老舗。</p>
              <div className="detail-tags">
                <span className="r-tag">全国300店舗</span>
                <span className="r-tag">老舗20年</span>
                <span className="r-tag">固定給選択可</span>
                <span className="r-tag">24h対応</span>
              </div>
              <a href="https://flavorgroup.jp/" target="_blank" rel="noopener noreferrer" className="detail-apply-btn">
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
            <p className="detail-comment-text">運営20年以上、全国300店舗を展開する業界最大規模の事務所グループ。固定給を選べる珍しい仕組みがあり、稼働時間が安定しない初期段階でも収入の見通しが立てやすい。スタッフの質にばらつきがあるのは大規模展開ゆえのあるあるです。</p>
            <div className="detail-honest">
              <span className="detail-honest-label">正直なひとこと</span>
              <p>規模が大きい分、店舗によってスタッフの対応差があります。面接前に希望店舗の口コミを確認することをおすすめします。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section diff-sec">
        <div className="si">
          <p className="eyebrow">FEATURES</p>
          <h2 className="sec-h">フレイバーグループ　3つの強み</h2>
          <div className="diff-grid">
            <div className="diff-item">
              <div className="diff-num">01</div>
              <div className="diff-title">全国300店舗・業界最大規模</div>
              <p className="diff-body">全国どこからでも通勤できる圧倒的な店舗数。地方在住でも選択肢が広いのが強みです。</p>
            </div>
            <div className="diff-item">
              <div className="diff-num">02</div>
              <div className="diff-title">固定給を選べる</div>
              <p className="diff-body">完全歩合制だけでなく固定給を選択できます。稼働時間が安定しない初期段階でも収入の見通しが立てやすい。</p>
            </div>
            <div className="diff-item">
              <div className="diff-num">03</div>
              <div className="diff-title">24時間スタッフ常駐</div>
              <p className="diff-body">夜間・深夜でもスタッフが常駐。困ったことがあればいつでも相談できる体制が整っています。</p>
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
              <tr><th>通勤</th><td>OK（全国300店舗）</td></tr>
              <tr><th>身バレ対策</th><td>○</td></tr>
              <tr><th>スタッフ</th><td>24時間常駐</td></tr>
              <tr><th>特徴</th><td>固定給選択可・業界最大規模</td></tr>
              <tr><th>対応エリア</th><td>全国</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section detail-kuchikomi-sec">
        <div className="si">
          <p className="eyebrow">REVIEWS</p>
          <h2 className="sec-h">実際に働いた方の声</h2>
          <div className="detail-kuchikomi-empty">
            <p>フレイバーグループで働いた経験がある方、ぜひ口コミを投稿してください。<br />あなたの本音が、次に選ぶ誰かの安心になります。</p>
            <Link href="/kuchikomi" className="btn-main">口コミを投稿する →</Link>
          </div>
        </div>
      </section>

      <section className="detail-cta-sec">
        <div className="si detail-cta-inner">
          <h2 className="kuchi-h">フレイバーグループが気になったら</h2>
          <p className="kuchi-p">まずは公式サイトで詳細を確認してみてください。</p>
          <a href="https://flavorgroup.jp/" target="_blank" rel="noopener noreferrer" className="btn-main">
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
