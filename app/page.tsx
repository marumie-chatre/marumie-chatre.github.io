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
      {/* ① TOP HERO IMAGE */}
      <HeroImage />

      {/* ① FV テキスト部分（HTML） */}
      <section className="hero" style={{padding: "0 16px 40px"}}>
        <div className="hero-inner" style={{maxWidth: "720px", margin: "0 auto", textAlign: "center"}}>
          <h1 className="hero-h1" style={{fontSize: "clamp(22px, 4vw, 34px)", marginBottom: "12px"}}>
            中身で選ぶ、<br />
            チャトレ事務所の<em>口コミサイト</em>
          </h1>
          <p className="hero-lead" style={{marginBottom: "24px"}}>
            良い点だけでなく、気になる点・サポート・身バレ対策まで比較できます。
          </p>
          <div style={{display: "flex", justifyContent: "center", marginBottom: "24px"}}>
            <Link href="/jimusho" className="btn-main">自分に合う事務所を探す →</Link>
          </div>
          {/* 信頼チップ4つ */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "8px",
            maxWidth: "480px",
            margin: "0 auto",
          }}>
            {[
              "✔ 良い点・気になる点を掲載",
              "✔ 採点基準を公開",
              "✔ 初心者向けに比較",
              "✔ 実際に働いた人の声",
            ].map((text) => (
              <div key={text} style={{
                padding: "10px 12px",
                background: "var(--cream)",
                borderRadius: "100px",
                fontSize: "12px",
                textAlign: "center",
                color: "var(--text-mid)",
              }}>{text}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ② 探し方メニュー（5入口）★最優先 */}
      <section className="section" style={{background: "var(--cream)", padding: "40px 16px"}}>
        <div className="si" style={{maxWidth: "720px"}}>
          <p className="eyebrow" style={{textAlign: "center"}}>HOW TO FIND</p>
          <h2 className="sec-h" style={{textAlign: "center", marginBottom: "24px"}}>あなたに合う探し方</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "12px",
          }}>
            {[
              { href: "/jimusho", icon: "🏆", label: "ランキング" },
              { href: "/area", icon: "📍", label: "エリア" },
              { href: "/style", icon: "💼", label: "働き方" },
              { href: "/q", icon: "💭", label: "不安から探す" },
              { href: "/kuchikomi", icon: "💬", label: "口コミ", span: true },
            ].map(({ href, icon, label, span }) => (
              <Link key={href} href={href} style={{
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                padding: "24px 12px", background: "var(--white)", borderRadius: "16px",
                textDecoration: "none", color: "var(--text)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                minHeight: "110px",
                gridColumn: span ? "span 2" : "auto",
              }}>
                <div style={{fontSize: "36px", marginBottom: "8px"}}>{icon}</div>
                <div style={{fontSize: "13px", fontWeight: 700}}>{label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ③ RANKING */}
      <section className="section rank-sec">
        <div className="si">
          <p className="eyebrow">RANKING</p>
          <h2 className="sec-h">編集部おすすめ事務所</h2>
          <p className="sec-sub">5軸100点満点で採点。スコアの根拠はすべて公開しています。</p>
          <div className="neutral-note">
            <p>掲載順位は広告費ではなく、公開している評価基準で決まります。同点の場合は、安全性・初心者向け度・口コミの具体性を優先。口コミが少ない事務所は公式情報中心の評価になるので、口コミが増え次第スコアを見直します。</p>
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
                <span className="r-tag">関東57店舗</span>
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

      {/* ④ できること（4カード） */}
      <section className="section" style={{background: "var(--white)"}}>
        <div className="si">
          <p className="eyebrow" style={{textAlign: "center"}}>WHAT WE DO</p>
          <h2 className="sec-h" style={{textAlign: "center"}}>まるみえチャトレでできること</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "16px",
            maxWidth: "640px",
            margin: "32px auto 0",
          }}>
            {[
              { icon: "🛡", title: "安全性を比較", desc: "身バレ対策・運営情報・ノンアダ対応をチェック" },
              { icon: "💬", title: "口コミを確認", desc: "良かった点だけでなく、気になった点も掲載" },
              { icon: "📊", title: "点数で比較", desc: "安全性・サポート・初心者向け度を見える化" },
              { icon: "🔍", title: "条件で探す", desc: "エリア・働き方・不安から自分に合う事務所を探せる" },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{
                padding: "24px 16px",
                background: "var(--cream)",
                borderRadius: "16px",
                textAlign: "center",
              }}>
                <div style={{fontSize: "40px", marginBottom: "8px"}}>{icon}</div>
                <div style={{fontSize: "15px", fontWeight: 700, marginBottom: "6px"}}>{title}</div>
                <p style={{fontSize: "12px", color: "var(--text-mid)", margin: 0, lineHeight: 1.6}}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑤ 5評価基準（横スクロールカード） */}
      <section className="section" style={{background: "var(--cream)"}}>
        <div className="si">
          <p className="eyebrow" style={{textAlign: "center"}}>EVALUATION</p>
          <h2 className="sec-h" style={{textAlign: "center"}}>5つの基準で公平にチェック</h2>
          <div style={{
            display: "flex",
            gap: "12px",
            overflowX: "auto",
            padding: "20px 4px 24px",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}>
            {[
              { icon: "🛡", name: "安全性", score: 30, desc: "身バレ対策・運営情報・強要の有無" },
              { icon: "💁", name: "サポート", score: 25, desc: "研修・相談体制・スタッフ対応" },
              { icon: "🌱", name: "初心者向け", score: 20, desc: "未経験でも始めやすいか" },
              { icon: "💼", name: "働きやすさ", score: 15, desc: "シフト・在宅/通勤・辞めやすさ" },
              { icon: "💰", name: "稼ぎやすさ", score: 10, desc: "報酬率・保証・稼げる環境" },
            ].map(({ icon, name, score, desc }) => (
              <div key={name} style={{
                flex: "0 0 150px",
                padding: "20px 14px",
                background: "var(--white)",
                borderRadius: "16px",
                textAlign: "center",
                scrollSnapAlign: "start",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}>
                <div style={{fontSize: "32px", marginBottom: "6px"}}>{icon}</div>
                <div style={{fontSize: "14px", fontWeight: 700}}>{name}</div>
                <div style={{fontSize: "22px", fontWeight: 700, color: "var(--green)", margin: "6px 0"}}>
                  {score}<span style={{fontSize: "12px", color: "var(--text-mid)"}}>点</span>
                </div>
                <p style={{fontSize: "11px", color: "var(--text-mid)", margin: 0, lineHeight: 1.5}}>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{textAlign: "center", marginTop: "16px"}}>
            <Link href="/hyoka-kijun" className="btn-sub">評価基準の詳細を見る →</Link>
          </div>
        </div>
      </section>

      {/* ⑥ 最新口コミ */}
      <section className="section reviews-sec" style={{background: "var(--white)"}}>
        <div className="si">
          <p className="eyebrow">REVIEWS</p>
          <h2 className="sec-h" style={{marginBottom: "8px"}}>良いことだけじゃない、リアルな声を読んでみてください。</h2>
          <p className="sec-sub">実際に働いた方の体験談が載っています。</p>
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

      {/* ⑦ 不安別コンテンツ（COLUMN） */}
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

      {/* ⑧ CTA（背景画像対応） */}
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
