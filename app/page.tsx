import Link from "next/link";
import { reviews } from "./reviews";
import ReviewCard from "./ReviewCard";

export const metadata = {
  title: "まるみえチャトレ｜中身で選ぶチャトレ事務所",
  description: "事務所選びで失敗したくない初心者のための口コミサイト。編集部が実際に調査した情報と評価基準をすべて公開しています。",
};

export default function Home() {
  const latestReviews = reviews.slice(0, 4);

  return (
    <main>
      {/* HERO */}
      <section className="hero hero-with-photo">
        <div className="hero-inner">
          <div className="hero-badges">
            <span className="hero-badge">評価基準をすべて公開</span>
            <span className="hero-badge">キャストの本音を掲載</span>
          </div>
          <h1 className="hero-h1">
            はじめての事務所選び、<br />
            <em>中身がわかる</em>から、安心して選べる。
          </h1>
          <p className="hero-lead">
            事務所選びで失敗したくない。<br />
            安全か、サポートは充実しているか——。<br />
            そんな疑問に、編集部が実際に調査した情報でちゃんと答えます。
          </p>
          <div className="hero-btns">
            <Link href="/jimusho" className="btn-main">事務所ランキングを見る →</Link>
            <Link href="/hyoka-kijun" className="btn-sub">評価基準を確認する</Link>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <div className="hero-photo-gradient" />
          <img src="/photo-cafe.jpg" alt="" className="hero-photo-img" />
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="section diff-sec">
        <div className="si">
          <h2 className="diff-heading">
            おすすめって書いてあるけど、<br />
            本当のところはどうなの？<br />
            <span>そう思って、真剣に調べました。</span>
          </h2>
          <div className="diff-grid">
            <div className="diff-item">
              <div className="diff-svg-icon">
                <img src="/icon-ranking.svg" alt="" width={44} height={44} />
              </div>
              <div className="diff-num">01</div>
              <div className="diff-title">なぜその順位なのか、全部説明します</div>
              <p className="diff-body">採点基準と根拠をすべて公開。「なんとなくおすすめ」のランキングは載せません。</p>
            </div>
            <div className="diff-item">
              <div className="diff-svg-icon">
                <img src="/icon-review.svg" alt="" width={44} height={44} />
              </div>
              <div className="diff-num">02</div>
              <div className="diff-title">実際に働いた人の声だけを載せます</div>
              <p className="diff-body">事務所側が書いた情報ではなく、キャストの本音口コミと編集部の調査コメントだけです。</p>
            </div>
            <div className="diff-item">
              <div className="diff-svg-icon">
                <img src="/icon-safety.svg" alt="" width={44} height={44} />
              </div>
              <div className="diff-num">03</div>
              <div className="diff-title">安全に、長く続けられる事務所を探している人へ</div>
              <p className="diff-body">稼ぎ額より、安全性・サポート・働きやすさを重視する人のための比較サイトです。</p>
            </div>
          </div>
        </div>
      </section>

      {/* RANKING */}
      <section className="section rank-sec">
        <div className="si">
          <p className="eyebrow">RANKING</p>
          <h2 className="sec-h">編集部おすすめ事務所</h2>
          <p className="sec-sub">5軸100点満点で採点。スコアの根拠はすべて公開しています。</p>
          <div className="rank-grid">
            <div className="r-card top">
              <div className="r-rank-badge gold">🥇 1位</div>
              <div className="r-name">フェアリーテイル</div>
              <div className="r-score">84<sub> / 100点</sub></div>
              <div className="r-bars">
                <div className="r-bar-row"><span className="r-bar-label">安全性 /30</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"97%"}}></div></div><span className="r-bar-val">29</span></div>
                <div className="r-bar-row"><span className="r-bar-label">サポート /25</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"80%"}}></div></div><span className="r-bar-val">20</span></div>
                <div className="r-bar-row"><span className="r-bar-label">初心者 /20</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"85%"}}></div></div><span className="r-bar-val">17</span></div>
              </div>
              <div className="r-tags">
                <span className="r-tag">ノンアダルト専門</span>
                <span className="r-tag">身バレ対策◎</span>
                <span className="r-tag">清楚系向け</span>
              </div>
              <p className="r-comment">完全ノンアダルト専門。身バレゼロ実績。清楚系・初心者に最適な事務所。</p>
              <Link href="/jimusho/ft" className="r-btn">詳細・口コミを見る →</Link>
            </div>
            <div className="r-card">
              <div className="r-rank-badge silver">🥈 2位</div>
              <div className="r-name">ブライトグループ</div>
              <div className="r-score">84<sub> / 100点</sub></div>
              <div className="r-bars">
                <div className="r-bar-row"><span className="r-bar-label">安全性 /30</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"83%"}}></div></div><span className="r-bar-val">25</span></div>
                <div className="r-bar-row"><span className="r-bar-label">サポート /25</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"80%"}}></div></div><span className="r-bar-val">20</span></div>
                <div className="r-bar-row"><span className="r-bar-label">初心者 /20</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"90%"}}></div></div><span className="r-bar-val">18</span></div>
              </div>
              <div className="r-tags">
                <span className="r-tag">全国140店舗</span>
                <span className="r-tag">老舗20年</span>
                <span className="r-tag">24h対応</span>
              </div>
              <p className="r-comment">運営20年・全国最大手。顧問税理士あり。初心者でも安心の大手ブランド。</p>
              <Link href="/jimusho/bright-group" className="r-btn">詳細・口コミを見る →</Link>
            </div>
            <div className="r-card">
              <div className="r-rank-badge bronze">🥉 3位</div>
              <div className="r-name">アットグループ</div>
              <div className="r-score">80<sub> / 100点</sub></div>
              <div className="r-bars">
                <div className="r-bar-row"><span className="r-bar-label">安全性 /30</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"73%"}}></div></div><span className="r-bar-val">22</span></div>
                <div className="r-bar-row"><span className="r-bar-label">サポート /25</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"84%"}}></div></div><span className="r-bar-val">21</span></div>
                <div className="r-bar-row"><span className="r-bar-label">初心者 /20</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"80%"}}></div></div><span className="r-bar-val">16</span></div>
              </div>
              <div className="r-tags">
                <span className="r-tag">カフェ空間</span>
                <span className="r-tag">居心地◎</span>
                <span className="r-tag">関東57店舗</span>
              </div>
              <p className="r-comment">カフェのような居心地の良さが特徴。応募数が多い大手。正直な評価で掲載。</p>
              <Link href="/jimusho/at-group" className="r-btn">詳細・口コミを見る →</Link>
            </div>
          </div>
          <div className="rank-more">
            <Link href="/jimusho" className="btn-main">全12社を比較する →</Link>
          </div>
        </div>
      </section>

      {/* 最新口コミ */}
      <section className="section" style={{background:"var(--white)"}}>
        <div className="si">
          <p className="eyebrow">REVIEWS</p>
          <h2 className="sec-h" style={{marginBottom:"8px"}}>良いことだけじゃない、リアルな声を読んでください。</h2>
          <p className="sec-sub">実際に働いた方の体験談を掲載しています。</p>
          <div className="review-grid">
            {latestReviews.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          <div style={{textAlign:"center", marginTop:"28px"}}>
            <Link href="/kuchikomi" className="btn-sub">口コミをもっと見る →</Link>
          </div>
        </div>
      </section>

      {/* FIND NAV */}
      <section className="section find-sec">
        <div className="si">
          <p className="eyebrow">HOW TO FIND</p>
          <h2 className="sec-h">あなたに合った探し方で</h2>
          <div className="find-grid">
            <Link href="/jimusho" className="find-item">
              <div className="find-icon">📊</div>
              <div className="find-title">どこがいいか比べたい</div>
              <div className="find-sub">12社を一覧でまとめて比較</div>
              <div className="find-arrow">→</div>
            </Link>
            <Link href="/area/shinjuku" className="find-item">
              <div className="find-icon">📍</div>
              <div className="find-title">通える場所で探したい</div>
              <div className="find-sub">新宿・池袋・錦糸町・上野・大宮・福岡</div>
              <div className="find-arrow">→</div>
            </Link>
            <Link href="/style/zaitaku" className="find-item">
              <div className="find-icon">💼</div>
              <div className="find-title">働き方で絞りたい</div>
              <div className="find-sub">在宅・通勤・ノンアダルト・バーチャル</div>
              <div className="find-arrow">→</div>
            </Link>
            <Link href="/q/barebure" className="find-item">
              <div className="find-icon">🙋</div>
              <div className="find-title">不安なことから調べたい</div>
              <div className="find-sub">身バレ・職場バレ・初心者・本当に稼げる？</div>
              <div className="find-arrow">→</div>
            </Link>
          </div>
        </div>
      </section>

      {/* COLUMN */}
      <section className="section col-sec">
        <div className="si">
          <p className="eyebrow">COLUMN</p>
          <h2 className="sec-h">不安なことから、読んでみてください</h2>
          <div className="col-grid">
            <Link href="/column/jimusho-erabi" className="col-card">
              <div className="col-cat">▶ 事務所の選び方</div>
              <div className="col-title">チャットレディ事務所の選び方｜失敗しない5つの基準</div>
              <div className="col-meta">2025.05.01</div>
            </Link>
            <Link href="/column/mibare-taisaku" className="col-card">
              <div className="col-cat">▶ 安全・身バレ対策</div>
              <div className="col-title">配信中に顔がバレる？家族にバレる？チャットレディの身バレ、よくある疑問に答えます</div>
              <div className="col-meta">2025.05.01</div>
            </Link>
            <Link href="/column/hoikushi-baito" className="col-card">
              <div className="col-cat">▶ 副業・働き方</div>
              <div className="col-title">チャットレディは副業にアリ？会社・職場にバレないための全対策</div>
              <div className="col-meta">2025.05.01</div>
            </Link>
          </div>
          <div className="col-more">
            <Link href="/column" className="btn-sub">コラムをもっと見る →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="kuchi-sec">
        <div className="kuchi-inner">
          <h2 className="kuchi-h">働いた経験がある方へ</h2>
          <p className="kuchi-p">
            あなたの本音が、次に選ぶ誰かの安心になります。<br />
            匿名・5分で投稿できます。
          </p>
          <Link href="/kuchikomi" className="btn-main">口コミを投稿する →</Link>
        </div>
      </section>
    </main>
  );
}
