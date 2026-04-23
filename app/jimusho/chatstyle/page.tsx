import Link from "next/link";

export const metadata = {
  title: "チャットスタイルの口コミ・評判【まるみえチャトレ】",
  description: "チャットスタイルの編集部調査レポートと口コミを掲載。バーチャル対応・現役スタッフ在籍。都市部で安心。",
};

export default function Page() {
  return (
    <main>
      <section className="detail-hero">
        <div className="si">
          <div className="detail-breadcrumb">
            <Link href="/">トップ</Link> &gt;
            <Link href="/jimusho">事務所一覧</Link> &gt;
            <span>チャットスタイル</span>
          </div>
          <div className="detail-hero-inner">
            <div className="detail-hero-left">
              <div className="detail-rank-badge gray">4位 4位</div>
              <h1 className="detail-h1">チャットスタイル</h1>
              <p className="detail-catch">バーチャル対応・現役スタッフ在籍。都市部で安心。</p>
              <div className="detail-tags">
                <span className="r-tag">バーチャル対応</span>
                <span className="r-tag">現役スタッフ在籍</span>
                <span className="r-tag">ノルマなし</span>
                <span className="r-tag">都市部安心</span>
              </div>
              <a href="https://chatstyle.jp/" target="_blank" rel="noopener noreferrer" className="detail-apply-btn">
                チャットスタイルの公式サイトを見る →
              </a>
            </div>
            <div className="detail-hero-right">
              <div className="detail-score-card">
                <div className="detail-score-total">
                  <span className="detail-score-num">81</span>
                  <span className="detail-score-sub">/ 100点</span>
                </div>
                <div className="r-bars">
              <div className="r-bar-row"><span className="r-bar-label">安全性 /30</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"77%"}}></div></div><span className="r-bar-val">23</span></div>
              <div className="r-bar-row"><span className="r-bar-label">サポート /25</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"84%"}}></div></div><span className="r-bar-val">21</span></div>
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
            <p className="detail-comment-text">現役チャットレディスタッフが在籍しており、リアルなアドバイスが受けられます。バーチャルジャンルにも対応しており、顔出しが不安な方にも選択肢が広い事務所です。都市部を中心に展開しており、サポート力の高さが評価されています。</p>
            <div className="detail-honest">
              <span className="detail-honest-label">正直なひとこと</span>
              <p>規模は中堅ですが、スタッフの質が安定しているという口コミが多い。稼ぎ重視よりサポート重視の方に向いています。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section diff-sec">
        <div className="si">
          <p className="eyebrow">FEATURES</p>
          <h2 className="sec-h">チャットスタイル　3つの強み</h2>
          <div className="diff-grid">
            <div className="diff-item">
              <div className="diff-num">01</div>
              <div className="diff-title">現役チャットレディスタッフ在籍</div>
              <p className="diff-body">実際に働いた経験のあるスタッフからリアルなアドバイスが受けられます。マニュアルではない実践的なサポートが強み。</p>
            </div>
            <div className="diff-item">
              <div className="diff-num">02</div>
              <div className="diff-title">バーチャルジャンル対応</div>
              <p className="diff-body">顔出しに不安がある方も、バーチャルキャラクターを使った配信で働けます。身バレリスクを大幅に下げられます。</p>
            </div>
            <div className="diff-item">
              <div className="diff-num">03</div>
              <div className="diff-title">ノルマなし・自由シフト</div>
              <p className="diff-body">出勤ノルマなし、シフトは自由。自分のペースで続けやすい環境が整っています。</p>
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
              <tr><th>身バレ対策</th><td>◎（バーチャル対応あり）</td></tr>
              <tr><th>スタッフ</th><td>現役チャットレディスタッフ在籍</td></tr>
              <tr><th>特徴</th><td>バーチャルジャンル対応・ノルマなし</td></tr>
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
            <p>チャットスタイルで働いた経験がある方、ぜひ口コミを投稿してください。<br />あなたの本音が、次に選ぶ誰かの安心になります。</p>
            <Link href="/kuchikomi" className="btn-main">口コミを投稿する →</Link>
          </div>
        </div>
      </section>

      <section className="detail-cta-sec">
        <div className="si detail-cta-inner">
          <h2 className="kuchi-h">チャットスタイルが気になったら</h2>
          <p className="kuchi-p">まずは公式サイトで詳細を確認してみてください。</p>
          <a href="https://chatstyle.jp/" target="_blank" rel="noopener noreferrer" className="btn-main">
            チャットスタイル公式サイトを見る →
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
