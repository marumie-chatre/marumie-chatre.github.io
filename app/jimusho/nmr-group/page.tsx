import Link from "next/link";

export const metadata = {
  title: "NMRグループの口コミ・評判【まるみえチャトレ】",
  description: "NMRグループの編集部調査レポートと口コミを掲載。完全防音個室・関東東北中心の中堅事務所。",
};

export default function Page() {
  return (
    <main>
      <section className="detail-hero">
        <div className="si">
          <div className="detail-breadcrumb">
            <Link href="/">トップ</Link> &gt;
            <Link href="/jimusho">事務所一覧</Link> &gt;
            <span>NMRグループ</span>
          </div>
          <div className="detail-hero-inner">
            <div className="detail-hero-left">
              <div className="detail-rank-badge gray">8位 8位</div>
              <h1 className="detail-h1">NMRグループ</h1>
              <p className="detail-catch">完全防音個室・関東東北中心の中堅事務所。</p>
              <div className="detail-tags">
                <span className="r-tag">完全防音個室</span>
                <span className="r-tag">関東東北</span>
                <span className="r-tag">中堅安定</span>
              </div>
              <a href="https://nmr-group.jp/" target="_blank" rel="noopener noreferrer" className="detail-apply-btn">
                NMRグループの公式サイトを見る →
              </a>
            </div>
            <div className="detail-hero-right">
              <div className="detail-score-card">
                <div className="detail-score-total">
                  <span className="detail-score-num">74</span>
                  <span className="detail-score-sub">/ 100点</span>
                </div>
                <div className="r-bars">
              <div className="r-bar-row"><span className="r-bar-label">安全性 /30</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"77%"}}></div></div><span className="r-bar-val">23</span></div>
              <div className="r-bar-row"><span className="r-bar-label">サポート /25</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"72%"}}></div></div><span className="r-bar-val">18</span></div>
              <div className="r-bar-row"><span className="r-bar-label">初心者 /20</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"75%"}}></div></div><span className="r-bar-val">15</span></div>
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
            <p className="detail-comment-text">完全防音個室にこだわった設備が特徴の中堅事務所。関東・東北を中心に展開しており、ブログやコンテンツが充実しているため情報収集しやすい。規模は大手ほどではありませんが、設備と安全性への配慮が高評価を受けています。</p>
            <div className="detail-honest">
              <span className="detail-honest-label">正直なひとこと</span>
              <p>大手ほどの知名度はありませんが、設備の質は高い。関東・東北在住で防音環境を重視する方におすすめです。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section diff-sec">
        <div className="si">
          <p className="eyebrow">FEATURES</p>
          <h2 className="sec-h">NMRグループ　3つの強み</h2>
          <div className="diff-grid">
            <div className="diff-item">
              <div className="diff-num">01</div>
              <div className="diff-title">完全防音個室</div>
              <p className="diff-body">隣の音が聞こえない完全防音設計。プライバシーが守られた環境で集中して働けます。</p>
            </div>
            <div className="diff-item">
              <div className="diff-num">02</div>
              <div className="diff-title">関東・東北に展開</div>
              <p className="diff-body">関東から東北にかけて店舗を展開。首都圏だけでなく東北在住の方も通勤できます。</p>
            </div>
            <div className="diff-item">
              <div className="diff-num">03</div>
              <div className="diff-title">情報コンテンツが充実</div>
              <p className="diff-body">公式ブログやコンテンツが充実しており、事前に事務所の雰囲気や働き方を調べやすい。</p>
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
              <tr><th>身バレ対策</th><td>◎（完全防音個室）</td></tr>
              <tr><th>スタッフ</th><td>女性スタッフ在籍</td></tr>
              <tr><th>特徴</th><td>完全防音個室・ブログコンテンツ充実</td></tr>
              <tr><th>対応エリア</th><td>関東・東北中心</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section detail-kuchikomi-sec">
        <div className="si">
          <p className="eyebrow">REVIEWS</p>
          <h2 className="sec-h">実際に働いた方の声</h2>
          <div className="detail-kuchikomi-empty">
            <p>NMRグループで働いた経験がある方、ぜひ口コミを投稿してください。<br />あなたの本音が、次に選ぶ誰かの安心になります。</p>
            <Link href="/kuchikomi" className="btn-main">口コミを投稿する →</Link>
          </div>
        </div>
      </section>

      <section className="detail-cta-sec">
        <div className="si detail-cta-inner">
          <h2 className="kuchi-h">NMRグループが気になったら</h2>
          <p className="kuchi-p">まずは公式サイトで詳細を確認してみてください。</p>
          <a href="https://nmr-group.jp/" target="_blank" rel="noopener noreferrer" className="btn-main">
            NMRグループ公式サイトを見る →
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
