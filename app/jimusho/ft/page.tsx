import Link from "next/link";
import { reviews } from "../reviews";
import ReviewCard from "../ReviewCard";

export const metadata = {
  title: "フェアリーテイルの口コミ・評判｜ノンアダルト専門の先駆者【まるみえチャトレ】",
  description: "フェアリーテイルの編集部調査レポート・口コミを掲載。業界初のノンアダルト専門店。安全性29点・サポート20点・総合84点。",
};

export default function FTPage() {
  const ftReviews = reviews.filter(r => r.slug === "ft");

  return (
    <main>

      {/* HERO */}
      <section className="detail-hero">
        <div className="si">
          <div className="detail-breadcrumb">
            <Link href="/">トップ</Link> &gt;
            <Link href="/jimusho">事務所一覧</Link> &gt;
            <span>フェアリーテイル</span>
          </div>
          <div className="detail-hero-inner">
            <div className="detail-hero-left">
              <div className="detail-rank-badge gold">🥇 総合1位</div>
              <h1 className="detail-h1">フェアリーテイル</h1>
              <p className="detail-catch">ノンアダルト専門の先駆者。<br />安全に、自分らしく働ける事務所。</p>
              <div className="detail-tags">
                <span className="r-tag">業界初ノンアダルト専門</span>
                <span className="r-tag">女性スタッフ常駐</span>
                <span className="r-tag">在宅・通勤OK</span>
                <span className="r-tag">美容サロン連携</span>
                <span className="r-tag">初心者歓迎</span>
                <span className="r-tag">身バレ対策◎</span>
              </div>
              <a href="https://livecafefairytale.com/" target="_blank" rel="noopener noreferrer" className="detail-apply-btn">
                フェアリーテイルの公式サイトを見る →
              </a>
            </div>
            <div className="detail-hero-right">
              <div className="detail-score-card">
                <div className="detail-score-total">
                  <span className="detail-score-num">84</span>
                  <span className="detail-score-sub">/ 100点</span>
                </div>
                <div className="r-bars">
                  <div className="r-bar-row"><span className="r-bar-label">安全性 /30</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"97%"}}></div></div><span className="r-bar-val">29</span></div>
                  <div className="r-bar-row"><span className="r-bar-label">サポート /25</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"80%"}}></div></div><span className="r-bar-val">20</span></div>
                  <div className="r-bar-row"><span className="r-bar-label">初心者 /20</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"85%"}}></div></div><span className="r-bar-val">17</span></div>
                  <div className="r-bar-row"><span className="r-bar-label">働きやすさ /15</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"80%"}}></div></div><span className="r-bar-val">12</span></div>
                  <div className="r-bar-row"><span className="r-bar-label">稼ぎ /10</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"60%"}}></div></div><span className="r-bar-val">6</span></div>
                </div>
                <Link href="/hyoka-kijun" className="detail-score-link">このスコアの根拠を見る →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 編集部コメント */}
      <section className="section detail-comment-sec">
        <div className="si">
          <div className="detail-comment-box">
            <div className="detail-comment-label">編集部コメント</div>
            <p className="detail-comment-text">
              「ノンアダルト専門」という言葉がまだ珍しかった時代から、アダルトなしでも輝ける場所をつくり続けてきた事務所。チャットレディ歴3年以上の女性スタッフが常駐しているから、はじめての不安もちゃんと話せます。
            </p>
            <div className="detail-honest">
              <span className="detail-honest-label">正直なひとこと</span>
              <p>稼ぎ重視の方には向いていないかもしれません。でも「安全に、自分のペースで、長く続けたい」という方には業界でトップクラスの環境だと思います。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ストーリー */}
      <section className="section detail-story-sec">
        <div className="si detail-story-inner">
          <p className="eyebrow">STORY</p>
          <h2 className="sec-h">「アダルトができない子でも、<br />挑戦できる場所をつくりたい」</h2>
          <div className="detail-story-body">
            <p>チャットレディといえばアダルト——そんなイメージが強かった時代から、フェアリーテイルはノンアダルト専門店を立ち上げました。</p>
            <p>CMでも見かける国内大手ライブチャットサイトのノンアダルトジャンルだけを取り扱うグループです。</p>
            <p>専門店がほとんどなかった時代からやってきたからこそ、<strong>「ノンアダルトで、どうやって女の子を輝かせるか」</strong>を本気で考え続けてきました。</p>
          </div>
        </div>
      </section>

      {/* 3つの強み */}
      <section className="section diff-sec">
        <div className="si">
          <p className="eyebrow">FEATURES</p>
          <h2 className="sec-h">フェアリーテイル　3つの強み</h2>
          <div className="diff-grid">
            <div className="diff-item">
              <div className="diff-num">01</div>
              <div className="diff-title">業界初のノンアダルト専門店</div>
              <p className="diff-body">アダルトなしで稼げる環境を、業界でいち早く整えてきました。「ノンアダルトでも大丈夫？」という不安に、実績で答えます。</p>
            </div>
            <div className="diff-item">
              <div className="diff-num">02</div>
              <div className="diff-title">チャットレディ歴3年以上の<br />女性スタッフが常駐</div>
              <p className="diff-body">はじめてのことだらけでも、経験者に直接相談できます。マニュアルではなく、リアルなノウハウを教えてもらえます。</p>
            </div>
            <div className="diff-item">
              <div className="diff-num">03</div>
              <div className="diff-title">美容サロン連携店あり</div>
              <p className="diff-body">働きながら自分磨きができる環境。見た目に自信がつくと、配信にも自信が出てきます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 基本情報 */}
      <section className="section detail-info-sec">
        <div className="si">
          <p className="eyebrow">BASIC INFO</p>
          <h2 className="sec-h">基本情報</h2>
          <table className="detail-table">
            <tbody>
              <tr><th>ジャンル</th><td>完全ノンアダルト専門</td></tr>
              <tr><th>在宅</th><td>OK</td></tr>
              <tr><th>通勤</th><td>OK</td></tr>
              <tr><th>身バレ対策</th><td>◎（実績あり）</td></tr>
              <tr><th>スタッフ</th><td>チャットレディ歴3年以上の女性スタッフ常駐</td></tr>
              <tr><th>特徴</th><td>美容サロン連携店あり・ノウハウ重視</td></tr>
              <tr><th>対応エリア</th><td>池袋・上野（自社店舗）・在宅全国対応</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 口コミ */}
      <section className="section detail-kuchikomi-sec">
        <div className="si">
          <p className="eyebrow">REVIEWS</p>
          <h2 className="sec-h">実際に働いた方の声</h2>
          {ftReviews.length > 0 ? (
            <>
              <div className="review-grid" style={{marginBottom:"28px"}}>
                {ftReviews.map(review => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
              <div style={{textAlign:"center"}}>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeoozsXNP5R5hgyPbxMlVPNPBrc2NOceFtI5f97Lbv3KUATkw/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sub"
                >
                  フェアリーテイルの口コミを投稿する →
                </a>
              </div>
            </>
          ) : (
            <div className="detail-kuchikomi-empty">
              <p>まだ口コミが集まっていません。<br />フェアリーテイルで働いた経験がある方、ぜひ投稿してください。</p>
              <Link href="/kuchikomi" className="btn-main">口コミを投稿する →</Link>
            </div>
          )}
        </div>
      </section>

      {/* 応募CTA */}
      <section className="detail-cta-sec">
        <div className="si detail-cta-inner">
          <h2 className="kuchi-h">フェアリーテイルが気になったら</h2>
          <p className="kuchi-p">まずは公式サイトで詳細を確認してみてください。<br />無料見学・相談から始められます。</p>
          <a href="https://livecafefairytale.com/" target="_blank" rel="noopener noreferrer" className="btn-main">
            フェアリーテイル公式サイトを見る →
          </a>
        </div>
      </section>

      {/* 他の事務所 */}
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
