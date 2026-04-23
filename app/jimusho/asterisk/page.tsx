import Link from "next/link";

export const metadata = {
  title: "アスタリスクの口コミ・評判【まるみえチャトレ】",
  description: "アスタリスクの編集部調査レポートと口コミを掲載。全店女性スタッフ・AI動画監視。ガチ勢向けの事務所。",
};

export default function Page() {
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
              <p className="detail-catch">全店女性スタッフ・AI動画監視。ガチ勢向けの事務所。</p>
              <div className="detail-tags">
                <span className="r-tag">全店女性スタッフ</span>
                <span className="r-tag">AI動画監視</span>
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
            <p className="detail-comment-text">全店舗で女性スタッフのみが対応し、AI動画流出検知システム「HIMEPA」を導入している安全性の高い事務所。ただし体育会系の雰囲気があり、本気で稼ぎたい方向けのスタンスが強め。清楚系・慎重タイプの初心者には少しハードルが高いかもしれません。</p>
            <div className="detail-honest">
              <span className="detail-honest-label">正直なひとこと</span>
              <p>安全性は高いですが、稼ぎ重視・本気勢向けの空気感があります。「のんびり始めたい」より「しっかり稼ぎたい」方向けです。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section diff-sec">
        <div className="si">
          <p className="eyebrow">FEATURES</p>
          <h2 className="sec-h">アスタリスク　3つの強み</h2>
          <div className="diff-grid">
            <div className="diff-item">
              <div className="diff-num">01</div>
              <div className="diff-title">全店女性スタッフのみ</div>
              <p className="diff-body">すべての店舗で女性スタッフのみが対応。男性スタッフに相談しにくい内容も気軽に話せます。</p>
            </div>
            <div className="diff-item">
              <div className="diff-num">02</div>
              <div className="diff-title">AI動画流出検知「HIMEPA」導入</div>
              <p className="diff-body">業界初のAI動画流出検知システムを導入。録画・スクリーンショットを自動検知し、身バレリスクを最小化します。</p>
            </div>
            <div className="diff-item">
              <div className="diff-num">03</div>
              <div className="diff-title">稼ぐためのノウハウが豊富</div>
              <p className="diff-body">長年の運営で蓄積された稼ぎのノウハウが豊富。本気で収入を上げたい方には充実したサポートがあります。</p>
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
              <tr><th>身バレ対策</th><td>◎（AI動画監視）</td></tr>
              <tr><th>スタッフ</th><td>全店女性スタッフのみ</td></tr>
              <tr><th>特徴</th><td>HIMEPA（AI動画流出検知）導入</td></tr>
              <tr><th>対応エリア</th><td>全国展開</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section detail-kuchikomi-sec">
        <div className="si">
          <p className="eyebrow">REVIEWS</p>
          <h2 className="sec-h">実際に働いた方の声</h2>
          <div className="detail-kuchikomi-empty">
            <p>アスタリスクで働いた経験がある方、ぜひ口コミを投稿してください。<br />あなたの本音が、次に選ぶ誰かの安心になります。</p>
            <Link href="/kuchikomi" className="btn-main">口コミを投稿する →</Link>
          </div>
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
