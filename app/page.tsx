import Link from "next/link";
import { OFFICE_COUNT } from "./offices";
import { reviews } from "./reviews";
import ReviewCard from "./ReviewCard";
import HeroImage from "./HeroImage";

export const metadata = {
  title: "まるみえチャトレ｜中身で選ぶチャトレ事務所",
  description: "事務所選びで失敗したくない初心者のための口コミサイト。編集部が実際に調査した情報と評価基準をすべて公開しています。",
};

export default function Home() {
  const latestReviews = reviews.slice(0, 4);

  return (
    <main>
      {/* TOP HERO IMAGE */}
      <HeroImage />

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badges">
            <span className="hero-badge">良い点も気になる点も掲載</span>
            <span className="hero-badge">採点根拠をすべて公開</span>
          </div>
          <h1 className="hero-h1">
            チャットレディ事務所の<br />
            <em>「良いところ」と「気になるところ」</em>を、<br />
            両方見て選べる。
          </h1>
          <p className="hero-lead">
            口コミ・公式情報・編集部調査をもとに、<br />
            安全性・サポート・初心者向け度を100点満点で比較しています。
          </p>
          <div className="hero-btns">
            <Link href="/jimusho" className="btn-main">事務所を比較する →</Link>
            <Link href="/kuchikomi" className="btn-sub">口コミを見る</Link>
          </div>
        </div>
      </section>

      {/* 実績バナー（HERO直下） */}
      <section className="stats-banner-sec">
        <div className="si">
          <div className="stats-banner">
            <div className="stats-banner-img">
              <img src="/top-stats-banner.jpg" alt="実績：11社・54件・4年" />
            </div>
            <div className="stats-banner-grid">
              <div className="stats-item">
                <div className="stats-num">{OFFICE_COUNT}</div>
                <div className="stats-label">掲載事務所</div>
                <div className="stats-unit">社</div>
              </div>
              <div className="stats-item">
                <div className="stats-num">{reviews.length}</div>
                <div className="stats-label">実体験口コミ</div>
                <div className="stats-unit">件</div>
              </div>
              <div className="stats-item">
                <div className="stats-num">4</div>
                <div className="stats-label">運営者の現役歴</div>
                <div className="stats-unit">年</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="section diff-sec">
        <div className="si">
          <h2 className="diff-heading">
            おすすめって書いてあるけど、<br />
            本当のところはどうなの？<br />
            <span>そう思って、すべて確認しました。</span>
          </h2>
          <div className="diff-evidence">
            <div className="diff-evidence-item">✔ 口コミ・働いた経験を確認</div>
            <div className="diff-evidence-item">✔ 公式情報・安全性を検証</div>
            <div className="diff-evidence-item">✔ サポート内容を比較</div>
            <div className="diff-evidence-item">✔ 採点根拠をすべて公開</div>
          </div>
          <div className="diff-grid">
            <div className="diff-item">
              <div className="diff-illust">
                <img src="/top-diff-1-ranking.jpg" alt="ランキング比較" />
              </div>
              <div className="diff-svg-icon">
                <img src="/icon-ranking.svg" alt="" width={44} height={44} />
              </div>
              <div className="diff-num">01</div>
              <div className="diff-title">なぜその順位なのか、全部説明します</div>
              <p className="diff-body">採点基準と根拠をすべて公開。「なんとなくおすすめ」のランキングは載せません。</p>
            </div>
            <div className="diff-item">
              <div className="diff-illust">
                <img src="/top-diff-2-review.jpg" alt="口コミ" />
              </div>
              <div className="diff-svg-icon">
                <img src="/icon-review.svg" alt="" width={44} height={44} />
              </div>
              <div className="diff-num">02</div>
              <div className="diff-title">実際に働いた人の声だけを載せます</div>
              <p className="diff-body">事務所側が書いた情報ではなく、キャストの本音口コミと編集部の調査コメントだけです。</p>
            </div>
            <div className="diff-item">
              <div className="diff-illust">
                <img src="/top-diff-3-safety.jpg" alt="安全性" />
              </div>
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
          <div className="neutral-note">
            <p>掲載順位は広告費ではなく、公開している評価基準にもとづいて決定しています。同点の場合は、安全性スコア・初心者向け度・口コミ内容の具体性を優先して順位を決定しています。口コミが少ない事務所は公式情報中心の評価になるため、口コミが増え次第スコアを見直します。</p>
          </div>
          <div className="rank-grid">
            <div className="r-card top">
              <div className="r-logo-wrap">
                <img src="/logo-ft.png" alt="フェアリーテイル" className="r-logo" />
              </div>
              <div className="r-crown-badge">
                <img src="/icon-crown.svg" alt="" width={20} height={20} />
                <span>初心者に最もおすすめ</span>
              </div>
              <div className="r-rank-badge gold">🥇 1位</div>
              <div className="r-name">フェアリーテイル</div>
              <div className="r-score">84<sub> / 100点</sub></div>
              <div className="r-bars">
                <div className="r-bar-row"><span className="r-bar-label">安全性 /30</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"97%"}}></div></div><span className="r-bar-val">29</span></div>
                <div className="r-bar-row"><span className="r-bar-label">サポート /25</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"80%"}}></div></div><span className="r-bar-val">20</span></div>
                <div className="r-bar-row"><span className="r-bar-label">初心者 /20</span><div className="r-bar-track"><div className="r-bar-fill" style={{width:"85%"}}></div></div><span className="r-bar-val">17</span></div>
              </div>
              <div className="r-crown-reason">
                <span>安全性・サポートが高評価のため</span>
              </div>
              <div className="r-tags">
                <span className="r-tag">ノンアダルト専門</span>
                <span className="r-tag">身バレ対策◎</span>
                <span className="r-tag">スキルで稼ぐ環境</span>
                <span className="r-tag">清楚系向け</span>
              </div>
              <p className="r-comment">完全ノンアダルト専門。身バレゼロ実績。清楚系・初心者に最適な事務所。</p>
              <Link href="/jimusho/ft" className="r-btn">詳細・口コミを見る →</Link>
            </div>
            <div className="r-card">
              <div className="r-logo-wrap">
                <img src="/logo-bright-group.png" alt="ブライトグループ" className="r-logo" />
              </div>
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
              <div className="r-logo-wrap">
                <img src="/logo-at-group.png" alt="アットグループ" className="r-logo" />
              </div>
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
                <span className="r-tag">全国95店舗</span>
              </div>
              <p className="r-comment">カフェのような居心地の良さが特徴。応募数が多い大手。正直な評価で掲載。</p>
              <Link href="/jimusho/at-group" className="r-btn">詳細・口コミを見る →</Link>
            </div>
          </div>
          <div className="rank-more">
            <Link href="/jimusho" className="btn-main">全{OFFICE_COUNT}社を比較する →</Link>
          </div>
        </div>
      </section>

      {/* 最新口コミ */}
      <section className="section reviews-sec" style={{background:"var(--white)"}}>
        <div className="si">
          <p className="eyebrow">REVIEWS</p>
          <h2 className="sec-h" style={{marginBottom:"8px"}}>良いことだけじゃない、リアルな声を読んでください。</h2>
          <p className="sec-sub">実際に働いた方の体験談を掲載しています。</p>
          <div className="reviews-lead-img">
            <img src="/top-reviews-lead.jpg" alt="リアルな声" />
          </div>
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
              <div className="find-thumb">
                <img src="/top-find-1-compare.jpg" alt="比較する" />
              </div>
              <div className="find-icon-svg"><img src="/icon-recommend.svg" alt="" width={28} height={28} /></div>
              <div className="find-title">どこがいいか比べたい</div>
              <div className="find-sub">{OFFICE_COUNT}社を一覧でまとめて比較</div>
              <div className="find-arrow">→</div>
            </Link>
            <Link href="/area" className="find-item">
              <div className="find-thumb">
                <img src="/top-find-2-area.jpg" alt="エリアで探す" />
              </div>
              <div className="find-icon-svg"><img src="/icon-area.svg" alt="" width={28} height={28} /></div>
              <div className="find-title">通える場所で探したい</div>
              <div className="find-sub">新宿・池袋・錦糸町・上野・福岡</div>
              <div className="find-arrow">→</div>
            </Link>
            <Link href="/style/zaitaku" className="find-item">
              <div className="find-thumb">
                <img src="/top-find-3-style.jpg" alt="働き方で探す" />
              </div>
              <div className="find-icon-svg"><img src="/icon-work.svg" alt="" width={28} height={28} /></div>
              <div className="find-title">働き方で絞りたい</div>
              <div className="find-sub">在宅・通勤・ノンアダルト・バーチャル</div>
              <div className="find-arrow">→</div>
            </Link>
            <Link href="/q/" className="find-item">
              <div className="find-thumb">
                <img src="/top-find-4-worry.jpg" alt="お悩みで探す" />
              </div>
              <div className="find-icon-svg"><img src="/icon-safe.svg" alt="" width={28} height={28} /></div>
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
              <div className="col-thumb">
                <img src="/col-jimusho-erabi.png" alt="事務所の選び方" />
                <span className="col-arrow">→</span>
              </div>
              <div className="col-tag">▶ 事務所の選び方</div>
            </Link>
            <Link href="/column/mibare-taisaku" className="col-card">
              <div className="col-thumb">
                <img src="/col-mibare-taisaku.png" alt="身バレ対策" />
                <span className="col-arrow">→</span>
              </div>
              <div className="col-tag">▶ 安全・身バレ対策</div>
            </Link>
            <Link href="/column/hoikushi-baito" className="col-card">
              <div className="col-thumb">
                <img src="/col-hoikushi-baito.png" alt="副業・働き方" />
                <span className="col-arrow">→</span>
              </div>
              <div className="col-tag">▶ 副業・働き方</div>
            </Link>
          </div>
          <div className="col-more">
            <Link href="/column" className="btn-sub">コラムをもっと見る →</Link>
          </div>
        </div>
      </section>

      {/* CTA（背景画像対応） */}
      <section className="kuchi-sec kuchi-sec-with-bg">
        <div className="kuchi-bg-img">
          <img src="/top-cta-bg.jpg" alt="" />
        </div>
        <div className="kuchi-inner">
          <h2 className="kuchi-h">働いた経験がある方へ</h2>
          <p className="kuchi-p">
            あなたが感じた違和感や安心感は、次に応募する人の判断材料になります。<br />
            良かった点だけでなく「ここは事前に知りたかった」という内容も歓迎です。<br />
            匿名・個人情報不要で投稿できます。
          </p>
          <Link href="/kuchikomi" className="btn-main">匿名で口コミを書く →</Link>
        </div>
      </section>
    </main>
  );
}
