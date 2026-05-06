import Link from "next/link";

export const metadata = {
  title: "評価基準について｜まるみえチャトレ",
  description: "まるみえチャトレがなぜその順位をつけたのか、5軸100点満点の採点基準と根拠をすべて公開しています。",
};

export default function HyokaKijunPage() {
  return (
    <main>

      {/* HERO */}
      <section className="hero" style={{paddingBottom:"64px"}}>
        <div className="hero-inner" style={{maxWidth:"720px",margin:"0 auto",textAlign:"left"}}>
          <p className="eyebrow">EVALUATION CRITERIA</p>
          <h1 className="hero-h1" style={{fontSize:"clamp(26px,3.5vw,38px)"}}>
            まるみえチャトレの<br /><em>評価基準</em>
          </h1>
          <p className="hero-lead" style={{marginBottom:"0"}}>
            なぜその順位なのか、全部説明します。<br />
            「なんとなくおすすめ」のランキングは載せません。<br />
            編集部が実際に調査した情報をもとに、5つの軸で採点しています。
          </p>
        </div>
      </section>

      {/* 5軸の説明 */}
      <section className="section" style={{background:"var(--cream)"}}>
        <div className="si" style={{maxWidth:"760px"}}>
          <p className="eyebrow">5 AXES</p>
          <h2 className="sec-h" style={{marginBottom:"40px"}}>採点の5つの軸</h2>

          {/* 安全性 */}
          <div className="hyoka-item">
            <div className="hyoka-head">
              <div className="hyoka-axis-name">安全性</div>
              <div className="hyoka-axis-score">30点満点</div>
              <div className="hyoka-axis-bar">
                <div className="hyoka-axis-fill" style={{width:"100%"}}></div>
              </div>
            </div>
            <div className="hyoka-body">
              <p className="hyoka-quote">
                「ノンアダルトと書いてあるのに、入店後にアダルトを勧められた」
              </p>
              <p className="hyoka-text">
                こういった声を、私たちは実際に耳にしています。公式サイトの記載だけでなく、口コミや体験談と照らし合わせながら「書いてあること」と「実態」が一致しているかを確認して採点しています。
              </p>
              <div className="hyoka-points">
                <div className="hyoka-point">運営会社名・住所が公式サイトに明記されているか</div>
                <div className="hyoka-point">女性スタッフの在籍が確認できるか</div>
                <div className="hyoka-point">個人情報・動画流出対策の仕組みがあるか</div>
                <div className="hyoka-point">身バレ対策の実績・仕組みがあるか</div>
                <div className="hyoka-point">ノンアダルト対応の実態が確認できるか</div>
              </div>
            </div>
          </div>

          {/* サポート充実度 */}
          <div className="hyoka-item">
            <div className="hyoka-head">
              <div className="hyoka-axis-name">サポート充実度</div>
              <div className="hyoka-axis-score">25点満点</div>
              <div className="hyoka-axis-bar">
                <div className="hyoka-axis-fill" style={{width:"83%"}}></div>
              </div>
            </div>
            <div className="hyoka-body">
              <p className="hyoka-quote">
                「面接では丁寧だったのに、入店後はほとんど放置だった」
              </p>
              <p className="hyoka-text">
                口コミに繰り返し登場する不満です。私たちは面接時の印象ではなく、入店後にサポートが続くかどうかを重視しています。スタッフの経験・女性比率・相談しやすい雰囲気かどうかも確認ポイントです。
              </p>
              <div className="hyoka-points">
                <div className="hyoka-point">初回面談・研修の有無</div>
                <div className="hyoka-point">相談窓口（LINE・電話）の充実度</div>
                <div className="hyoka-point">スタッフの質・経験・女性比率</div>
                <div className="hyoka-point">機材・衣装の貸し出しがあるか</div>
                <div className="hyoka-point">稼ぎ方のノウハウを継続的に提供しているか</div>
              </div>
            </div>
          </div>

          {/* 初心者おすすめ度 */}
          <div className="hyoka-item">
            <div className="hyoka-head">
              <div className="hyoka-axis-name">初心者おすすめ度</div>
              <div className="hyoka-axis-score">20点満点</div>
              <div className="hyoka-axis-bar">
                <div className="hyoka-axis-fill" style={{width:"67%"}}></div>
              </div>
            </div>
            <div className="hyoka-body">
              <p className="hyoka-text">
                はじめての方ほど、事務所選びでその後の経験が大きく変わります。やり取りの仕方・配信のコツをちゃんと教えてもらえるか。ノルマや強制がなく、自分のペースで始められるか。「未経験歓迎」の言葉だけでなく、実態として初心者を支える仕組みがあるかを見て採点しています。
              </p>
              <div className="hyoka-points">
                <div className="hyoka-point">未経験歓迎の体制が実態として整っているか</div>
                <div className="hyoka-point">配信・やり取りのノウハウを基礎から教えてもらえるか</div>
                <div className="hyoka-point">ノルマ・強制がないか</div>
                <div className="hyoka-point">ノンアダルト対応があるか</div>
                <div className="hyoka-point">口コミで「初心者でも安心」の声があるか</div>
              </div>
            </div>
          </div>

          {/* 働きやすさ */}
          <div className="hyoka-item">
            <div className="hyoka-head">
              <div className="hyoka-axis-name">働きやすさ</div>
              <div className="hyoka-axis-score">15点満点</div>
              <div className="hyoka-axis-bar">
                <div className="hyoka-axis-fill" style={{width:"50%"}}></div>
              </div>
            </div>
            <div className="hyoka-body">
              <p className="hyoka-text">
                長く続けられるかどうかは、入口だけでは判断できません。シフトの自由度・辞めやすさ・日常のスタッフとの関係性まで含めて「働き続けられる環境かどうか」を見ています。「退会しようとしたら引き止められた」という声も実際にあります。出口の透明さも、私たちの採点基準のひとつです。
              </p>
              <div className="hyoka-points">
                <div className="hyoka-point">出勤ノルマがないか</div>
                <div className="hyoka-point">シフトの自由度が高いか</div>
                <div className="hyoka-point">在宅・通勤を選べるか</div>
                <div className="hyoka-point">退会・辞めやすい手続きが明確か</div>
              </div>
            </div>
          </div>

          {/* 稼ぎやすさ */}
          <div className="hyoka-item" style={{marginBottom:"0"}}>
            <div className="hyoka-head">
              <div className="hyoka-axis-name">稼ぎやすさ</div>
              <div className="hyoka-axis-score">10点満点</div>
              <div className="hyoka-axis-bar">
                <div className="hyoka-axis-fill" style={{width:"33%"}}></div>
              </div>
            </div>
            <div className="hyoka-body">
              <p className="hyoka-quote">
                「HPに書かれているほど稼げなかった」
              </p>
              <p className="hyoka-text">
                この声は少なくありません。ただ正直に言うと、稼ぎは事務所の環境だけで決まるものではなく、個人差が大きい部分もあります。だからこそ私たちは「稼げる環境が整っているか」という視点で採点し、稼ぎの数字だけを前面に出す事務所を高く評価しない方針をとっています。まるみえチャトレが安全・サポート・働きやすさを最優先にしているのは、そういう理由からです。
              </p>
              <div className="hyoka-points">
                <div className="hyoka-point">報酬率・時給の明記があるか</div>
                <div className="hyoka-point">時給保証・ボーナス制度があるか</div>
                <div className="hyoka-point">提携サイト数が多いか</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 採点の透明性 */}
      <section className="section" style={{background:"var(--white)"}}>
        <div className="si" style={{maxWidth:"760px"}}>
          <p className="eyebrow">TRANSPARENCY</p>
          <h2 className="sec-h" style={{marginBottom:"24px"}}>採点の透明性について</h2>
          <div className="hyoka-transparency">
            <div className="hyoka-trans-item">
              <div className="hyoka-trans-icon">📋</div>
              <div>
                <div className="hyoka-trans-title">公式サイト調査＋口コミ調査をもとに採点</div>
                <p className="hyoka-trans-text">各事務所の公式サイトの記載内容と、実際に働いた方の口コミ・体験談を照らし合わせながら採点しています。</p>
              </div>
            </div>
            <div className="hyoka-trans-item">
              <div className="hyoka-trans-icon">🔄</div>
              <div>
                <div className="hyoka-trans-title">情報が更新されたらスコアも見直します</div>
                <p className="hyoka-trans-text">事務所の状況は変わることがあります。新しい口コミや情報が集まった際はスコアを随時見直しています。</p>
              </div>
            </div>
            <div className="hyoka-trans-item">
              <div className="hyoka-trans-icon">📣</div>
              <div>
                <div className="hyoka-trans-title">掲載事務所との関係はスコアに影響しません</div>
                <p className="hyoka-trans-text">掲載事務所との関係性はスコアの採点に一切影響しません。すべての事務所を同じ基準で採点しています。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 免責・口コミ募集 */}
      <section className="kuchi-sec">
        <div className="kuchi-inner">
          <h2 className="kuchi-h">このサイトについて、正直に伝えます</h2>
          <div className="hyoka-disclaimer">
            <p>
              本サイトの評価は、公式サイト調査と集まった口コミをもとに作成しています。
            </p>
            <p>
              まだ口コミが少ない事務所については、調査情報が中心となっており評価の精度が十分でない部分があります。<strong>口コミが増えるほど、評価はより実態に近づきます。</strong>
            </p>
            <p>
              実際の環境は掲載情報と異なる場合もあります。最終的な事務所選びはご自身でご判断いただき、応募・契約後のトラブルについては当サイトは責任を負いかねます。
            </p>
            <p>
              それでも、このサイトが安心して選ぶためのひとつの参考になれたら嬉しいです。
            </p>
          </div>
          <Link href="/kuchikomi" className="btn-main" style={{marginTop:"8px"}}>
            口コミを投稿して評価精度を上げる →
          </Link>
        </div>
      </section>

      {/* ランキングへ */}
      <section className="section">
        <div className="si" style={{textAlign:"center"}}>
          <p className="eyebrow">RANKING</p>
          <h2 className="sec-h" style={{marginBottom:"32px"}}>
            評価基準がわかったら、ランキングを見てみましょう
          </h2>
          <Link href="/jimusho" className="btn-main">掲載事務所の比較ランキングを見る →</Link>
        </div>
      </section>

    </main>
  );
}
