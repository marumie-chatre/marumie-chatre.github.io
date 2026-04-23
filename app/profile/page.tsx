import Link from "next/link";

export const metadata = {
  title: "運営者プロフィール｜まるみえチャトレ",
  description: "まるみえチャトレの運営者プロフィール。現役チャットレディ・みなみが運営しています。",
};

export default function ProfilePage() {
  return (
    <main>

      {/* HERO */}
      <section className="hero" style={{paddingBottom:"64px"}}>
        <div className="hero-inner" style={{maxWidth:"680px", margin:"0 auto", textAlign:"left"}}>
          <p className="eyebrow">PROFILE</p>
          <h1 className="hero-h1" style={{fontSize:"clamp(24px,3.5vw,36px)"}}>
            運営者プロフィール
          </h1>
          <p className="hero-lead" style={{marginBottom:"0"}}>
            まるみえチャトレを運営している、みなみです。<br />
            現役のチャットレディとして<br />
            フェアリーテイルでノンアダルトのお仕事をしながら、<br />
            このサイトを作っています。
          </p>
        </div>
      </section>

      {/* ストーリー */}
      <section className="section" style={{background:"var(--cream)"}}>
        <div className="si" style={{maxWidth:"680px"}}>
          <p className="eyebrow">STORY</p>
          <h2 className="sec-h" style={{marginBottom:"32px"}}>なぜこのサイトを作ったか</h2>

          <div className="profile-story">
            <div className="profile-story-block">
              <div className="profile-story-label">4年前まで、保育士をしていました。</div>
              <p>子どもが好きで選んだ仕事でしたが、本業の合間にできる副業を探し始めたとき、チャットレディという選択肢にたどり着きました。</p>
              <p>でも最初は、何を選んでいいのか全然わからなかった。疑おうと思ったら、全部怪しく見えてくる。ネットで調べても、良いことしか書いていないサイトばかり。</p>
              <p>「これで本当に大丈夫？」と思いながら応募するのは、怖かったです。</p>
            </div>

            <div className="profile-story-block">
              <div className="profile-story-label">そのとき選んだのが、フェアリーテイルでした。</div>
              <p>ノンアダルト専門で、アダルトへの勧誘が一切ないというのが唯一、安心できた理由でした。</p>
              <p>チャットレディを始めて4年。今もフェアリーテイルで働いています。</p>
              <p>このお仕事は、自分の頑張りがちゃんと返ってくる。稼ぎだけじゃなくて、自分を認めてくれるファンができていく。積み重ねが見えてくる。それがうれしくて、続けています。</p>
            </div>

            <div className="profile-story-block">
              <div className="profile-story-label">自分が事務所を選ぶとき、こういうサイトがあったら良かった。</div>
              <p>怪しくない事務所を、ちゃんと選べる場所。根拠のある情報で、納得して応募できる場所。</p>
              <p>「ちゃんと調べてから、安心して応募してきてほしい」そう思って、このサイトを作りました。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 運営者情報 */}
      <section className="section" style={{background:"var(--white)"}}>
        <div className="si" style={{maxWidth:"680px"}}>
          <p className="eyebrow">SITE INFO</p>
          <h2 className="sec-h" style={{marginBottom:"28px"}}>運営者情報</h2>
          <table className="detail-table">
            <tbody>
              <tr><th>サイト名</th><td>まるみえちゃとれ</td></tr>
              <tr><th>代表者</th><td>みなみ</td></tr>
              <tr><th>事業内容</th><td>webコンテンツサービス</td></tr>
              <tr><th>お問い合わせ</th><td>Googleフォームよりご連絡ください</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 関連情報 */}
      <section className="section" style={{background:"var(--cream)"}}>
        <div className="si" style={{maxWidth:"680px"}}>
          <p className="eyebrow">DISCLOSURE</p>
          <h2 className="sec-h" style={{marginBottom:"28px"}}>開示情報</h2>
          <div className="profile-disclosure">
            <p>本サイトの運営者は、フェアリーテイルに所属する現役チャットレディです。フェアリーテイルは本サイトの広告（PR）掲載事務所です。</p>
            <p>評価スコアは広告掲載の有無とは独立して算出しています。その他の掲載事務所との関係はありません。</p>
          </div>

          <h2 className="sec-h" style={{marginBottom:"28px", marginTop:"40px"}}>参考：フェアリーテイル会社情報</h2>
          <table className="detail-table">
            <tbody>
              <tr><th>会社名</th><td>フェアリーテイル</td></tr>
              <tr><th>代表者</th><td>北山 香穂</td></tr>
              <tr><th>設立</th><td>2020年3月（営業開始・2011年4月）</td></tr>
              <tr><th>事業内容</th><td>web広告業・webコンテンツサービス</td></tr>
              <tr><th>資本金</th><td>2,500万円</td></tr>
            </tbody>
          </table>
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
