import Link from "next/link";

export const metadata = {
  title: "お悩み別に事務所を選ぶ｜まるみえチャトレ",
  description: "チャットレディを始めるときの不安は人それぞれ。身バレ・職場バレ・家族バレ・怪しさ・初心者の不安、それぞれの観点から事務所を選べます。元保育士の現役チャットレディが運営しています。",
};

export default function QHubPage() {
  return (
    <main>

      {/* HERO */}
      <section className="hero" style={{paddingBottom:"64px"}}>
        <div className="hero-inner" style={{maxWidth:"720px", margin:"0 auto", textAlign:"left"}}>
          <p className="eyebrow">QUESTIONS</p>
          <h1 className="hero-h1" style={{fontSize:"clamp(26px,3.5vw,38px)"}}>
            お悩み別に、<br /><em>事務所を選ぶ</em>
          </h1>
          <p className="hero-lead" style={{marginBottom:"0"}}>
            チャットレディを始めるときの不安は、人それぞれ違います。<br />
            「誰にバレるのが一番怖いか」「どんな働き方をしたいか」によって、<br />
            選ぶべき事務所も変わります。<br />
            あなたの不安に近い記事から、読んでみてください。
          </p>
        </div>
      </section>

      {/* お悩み一覧 */}
      <section className="section" style={{background:"var(--cream)"}}>
        <div className="si" style={{maxWidth:"1080px"}}>
          <p className="eyebrow">5 TOPICS</p>
          <h2 className="sec-h" style={{marginBottom:"40px"}}>5つのお悩みに応えます</h2>

          <div className="area-grid">

            <Link href="/q/barebure" className="area-card">
              <div className="area-card-body">
                <div className="area-card-header">
                  <h3 className="area-card-name">🛡️ 身バレが怖い</h3>
                  <span className="area-card-count">配信中対策</span>
                </div>
                <p className="area-card-catch">配信を見ている客に特定されないか不安</p>
                <p className="area-card-summary">配信を見ている客に特定されるのが怖い方へ。実際の身バレ確率と、マスク・ウィッグ・バーチャル配信などの具体的な対策をまとめました。</p>
                <div className="area-card-target">
                  <span className="area-card-target-label">こんな方に</span>
                  <span className="area-card-target-value">配信中の身バレが心配な方</span>
                </div>
                <span className="area-card-link">詳しく見る →</span>
              </div>
            </Link>

            <Link href="/q/shokuba-bare" className="area-card">
              <div className="area-card-body">
                <div className="area-card-header">
                  <h3 className="area-card-name">💼 職場にバレたくない</h3>
                  <span className="area-card-count">副業バレ対策</span>
                </div>
                <p className="area-card-catch">副業がバレるのが何より怖い</p>
                <p className="area-card-summary">副業でチャットレディを始めたい方へ。職場バレの最大原因「住民税」の対策と、マイナンバー誤解、副業に厳しい職種の判断ポイントをまとめました。</p>
                <div className="area-card-target">
                  <span className="area-card-target-label">こんな方に</span>
                  <span className="area-card-target-value">副業として始めたい方</span>
                </div>
                <span className="area-card-link">詳しく見る →</span>
              </div>
            </Link>

            <Link href="/q/kazoku-bare" className="area-card">
              <div className="area-card-body">
                <div className="area-card-header">
                  <h3 className="area-card-name">🏠 家族にバレたくない</h3>
                  <span className="area-card-count">家族バレ対策</span>
                </div>
                <p className="area-card-catch">同居家族にバレずに続けたい</p>
                <p className="area-card-summary">同居家族にバレるのが不安な方へ。検索履歴・SNS・声漏れ・部屋など、家庭内で起きやすい身バレの原因と対策をまとめました。</p>
                <div className="area-card-target">
                  <span className="area-card-target-label">こんな方に</span>
                  <span className="area-card-target-value">家族にバレたくない方</span>
                </div>
                <span className="area-card-link">詳しく見る →</span>
              </div>
            </Link>

            <Link href="/q/ayashii" className="area-card">
              <div className="area-card-body">
                <div className="area-card-header">
                  <h3 className="area-card-name">❓ 業界が怪しく見える</h3>
                  <span className="area-card-count">業界の実態</span>
                </div>
                <p className="area-card-catch">「怪しくない？危なくない？」への答え</p>
                <p className="area-card-summary">業界に対する漠然とした不安への答え。アダルト強要・お話だけで稼げるか・怪しい事務所の見分け方を、現役が正直に答えます。</p>
                <div className="area-card-target">
                  <span className="area-card-target-label">こんな方に</span>
                  <span className="area-card-target-value">業界に不安がある方</span>
                </div>
                <span className="area-card-link">詳しく見る →</span>
              </div>
            </Link>

            <Link href="/q/shoshinsha" className="area-card">
              <div className="area-card-body">
                <div className="area-card-header">
                  <h3 className="area-card-name">🌱 初心者で不安</h3>
                  <span className="area-card-count">初心者向け</span>
                </div>
                <p className="area-card-catch">これから始める方への総合ガイド</p>
                <p className="area-card-summary">これから始める方へ。初心者がつまずく5つのポイントと、サポートが手厚い事務所、応募〜配信デビューまでの流れをまとめました。</p>
                <div className="area-card-target">
                  <span className="area-card-target-label">こんな方に</span>
                  <span className="area-card-target-value">これから始める初心者</span>
                </div>
                <span className="area-card-link">詳しく見る →</span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* 運営者からのメッセージ */}
      <section className="section" style={{background:"var(--white)"}}>
        <div className="si" style={{maxWidth:"680px"}}>
          <p className="eyebrow">FROM MINAMI</p>
          <h2 className="sec-h" style={{marginBottom:"24px"}}>運営者から</h2>
          <div className="profile-disclosure">
            <p>4年前、私自身がチャットレディを始めようとしたとき、何を信じていいか分からなくて、応募ボタンを押すまでに2週間悩みました。</p>
            <p>「ノンアダって書いてあるけど、本当かな」「家族にバレたらどうしよう」「保育士の仕事と両立できるかな」。不安の種類は本当にいろいろあって、ひとつのページに全部まとめると、結局どれも浅くなってしまう。</p>
            <p>だから、お悩みごとに記事を分けました。あなたの不安に一番近い記事から、読んでみてください。</p>
            <p>みなみ</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="kuchi-sec">
        <div className="kuchi-inner">
          <h2 className="kuchi-h">まずは比較ランキングから見たい方へ</h2>
          <p className="kuchi-p">
            お悩みより先に、まず全体像を把握したい方は<br />
            掲載事務所の比較ランキングをご覧ください。
          </p>
          <Link href="/jimusho" className="btn-main">掲載事務所の比較ランキングを見る →</Link>
        </div>
      </section>

    </main>
  );
}
