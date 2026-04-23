import Link from "next/link";

export const metadata = {
  title: "チャットレディJPの口コミ・評判【まるみえチャトレ】",
  description: "チャットレディJPの編集部調査レポートと口コミを掲載。新宿・上野に多店舗展開。美容機器無料サービスあり。",
};

export default function Page() {
  return (
    <main>
      <section className="detail-hero">
        <div className="si">
          <div className="detail-breadcrumb">
            <Link href="/">トップ</Link> &gt;
            <Link href="/jimusho">事務所一覧</Link> &gt;
            <span>チャットレディJP</span>
          </div>
          <div className="detail-hero-inner">
            <div className="detail-hero-left">
              <div className="detail-rank-badge gray">9位 9位</div>
              <h1 className="detail-h1">チャットレディJP</h1>
              <p className="detail-catch">新宿・上野に多店舗展開。美容機器無料サービスあり。</p>
              <div className="detail-tags">
                <span className="r-tag">新宿・上野</span>
                <span className="r-tag">美容機器無料</span>
                <span className="r-tag">Vtuber対応</span>
              </div>
              <a href="https://chatlady-jp.com/" target="_blank" rel="noopener noreferrer" className="detail-apply-btn">
                チャットレディJPの公式サイトを見る →
              </a>
            </div>
            <div className="detail-hero-right">
              <div className="detail-score-card">
                <div className="detail-score-total">
                  <span className="detail-score-num">71</span>
                  <span className="detail-score-sub">/ 100点</span>
                </div>
                <div className="r-bars">
              <div className="r-bar-row"><span className="r-bar-label">安全性 /30</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"73%"}}></div></div><span className="r-bar-val">22</span></div>
              <div className="r-bar-row"><span className="r-bar-label">サポート /25</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"68%"}}></div></div><span className="r-bar-val">17</span></div>
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
            <p className="detail-comment-text">新宿・上野エリアに複数店舗を展開。美容機器の無料使用や時給保証制度が特徴です。Vtuber対応も可能で、顔出しなしの選択肢が広い事務所。都市部で働きたい方に選択肢として入れておきたい事務所です。</p>
            <div className="detail-honest">
              <span className="detail-honest-label">正直なひとこと</span>
              <p>スコアはやや低めですが、美容機器無料など独自のサービスがあります。新宿・上野に通える方には試してみる価値あり。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section diff-sec">
        <div className="si">
          <p className="eyebrow">FEATURES</p>
          <h2 className="sec-h">チャットレディJP　3つの強み</h2>
          <div className="diff-grid">
            <div className="diff-item">
              <div className="diff-num">01</div>
              <div className="diff-title">美容機器を無料で使える</div>
              <p className="diff-body">チャットルーム内の美容機器を無料で使用可能。見た目のケアをしながら働ける珍しいサービスです。</p>
            </div>
            <div className="diff-item">
              <div className="diff-num">02</div>
              <div className="diff-title">Vtuber対応可能</div>
              <p className="diff-body">バーチャルキャラクターを使った配信に対応。顔出し不要で働きたい方の選択肢が広がります。</p>
            </div>
            <div className="diff-item">
              <div className="diff-num">03</div>
              <div className="diff-title">時給保証制度あり</div>
              <p className="diff-body">一定条件を満たせば時給保証が受けられます。初月から安定した収入の目安が立てやすい。</p>
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
              <tr><th>在宅</th><td>△</td></tr>
              <tr><th>通勤</th><td>OK（新宿・上野中心）</td></tr>
              <tr><th>身バレ対策</th><td>○（Vtuber対応）</td></tr>
              <tr><th>スタッフ</th><td>女性スタッフ在籍</td></tr>
              <tr><th>特徴</th><td>美容機器無料・Vtuber対応・時給保証</td></tr>
              <tr><th>対応エリア</th><td>新宿・上野</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section detail-kuchikomi-sec">
        <div className="si">
          <p className="eyebrow">REVIEWS</p>
          <h2 className="sec-h">実際に働いた方の声</h2>
          <div className="detail-kuchikomi-empty">
            <p>チャットレディJPで働いた経験がある方、ぜひ口コミを投稿してください。<br />あなたの本音が、次に選ぶ誰かの安心になります。</p>
            <Link href="/kuchikomi" className="btn-main">口コミを投稿する →</Link>
          </div>
        </div>
      </section>

      <section className="detail-cta-sec">
        <div className="si detail-cta-inner">
          <h2 className="kuchi-h">チャットレディJPが気になったら</h2>
          <p className="kuchi-p">まずは公式サイトで詳細を確認してみてください。</p>
          <a href="https://chatlady-jp.com/" target="_blank" rel="noopener noreferrer" className="btn-main">
            チャットレディJP公式サイトを見る →
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
