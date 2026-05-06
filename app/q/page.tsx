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
        <div className="si" style={{maxWidth:"760px"}}>
          <p className="eyebrow">5 TOPICS</p>
          <h2 className="sec-h" style={{marginBottom:"40px"}}>5つのお悩みに応えます</h2>

          <div className="q-hub-list">

            <Link href="/q/barebure" className="q-hub-card">
              <div className="q-hub-card-num">01</div>
              <div className="q-hub-card-body">
                <h3 className="q-hub-card-h">身バレが怖い人へ</h3>
                <p className="q-hub-card-p">配信を見ている客に特定されるのが怖い方へ。実際の身バレ確率と、マスク・ウィッグ・バーチャル配信などの具体的な対策をまとめました。</p>
                <div className="q-hub-card-tag">配信中の身バレ対策</div>
              </div>
            </Link>

            <Link href="/q/shokuba-bare" className="q-hub-card">
              <div className="q-hub-card-num">02</div>
              <div className="q-hub-card-body">
                <h3 className="q-hub-card-h">職場・会社にバレないチャトレの始め方</h3>
                <p className="q-hub-card-p">副業でチャットレディを始めたい方へ。職場バレの最大原因「住民税」の対策と、マイナンバー誤解、副業に厳しい職種の判断ポイントをまとめました。</p>
                <div className="q-hub-card-tag">副業バレ対策</div>
              </div>
            </Link>

            <Link href="/q/kazoku-bare" className="q-hub-card">
              <div className="q-hub-card-num">03</div>
              <div className="q-hub-card-body">
                <h3 className="q-hub-card-h">家族・親・彼氏にバレないチャトレの始め方</h3>
                <p className="q-hub-card-p">同居家族にバレるのが不安な方へ。検索履歴・SNS・声漏れ・部屋など、家庭内で起きやすい身バレの原因と対策をまとめました。</p>
                <div className="q-hub-card-tag">家族バレ対策</div>
              </div>
            </Link>

            <Link href="/q/ayashii" className="q-hub-card">
              <div className="q-hub-card-num">04</div>
              <div className="q-hub-card-body">
                <h3 className="q-hub-card-h">チャトレって怪しくない？危なくない？</h3>
                <p className="q-hub-card-p">業界に対する漠然とした不安への答え。アダルト強要・お話だけで稼げるか・怪しい事務所の見分け方を、現役が正直に答えます。</p>
                <div className="q-hub-card-tag">業界の実態と見分け方</div>
              </div>
            </Link>

            <Link href="/q/shoshinsha" className="q-hub-card">
              <div className="q-hub-card-num">05</div>
              <div className="q-hub-card-body">
                <h3 className="q-hub-card-h">初心者が安心して始められる事務所</h3>
                <p className="q-hub-card-p">これから始める方へ。初心者がつまずく5つのポイントと、サポートが手厚い事務所、応募〜配信デビューまでの流れをまとめました。</p>
                <div className="q-hub-card-tag">初心者向け総合ガイド</div>
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
