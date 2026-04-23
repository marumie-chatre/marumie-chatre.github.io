import Link from "next/link";

export const metadata = {
  title: "口コミ投稿ガイドライン｜まるみえチャトレ",
  description: "まるみえチャトレの口コミ投稿ガイドライン。匿名で投稿できます。実際に働いた方のリアルな体験談をお待ちしています。",
};

export default function GuidelinePage() {
  return (
    <main>

      {/* HERO */}
      <section className="hero" style={{paddingBottom:"64px"}}>
        <div className="hero-inner" style={{maxWidth:"680px", margin:"0 auto", textAlign:"left"}}>
          <p className="eyebrow">GUIDELINE</p>
          <h1 className="hero-h1" style={{fontSize:"clamp(24px,3.5vw,36px)"}}>
            投稿する前に、<br />
            <em>確認してください。</em>
          </h1>
          <p className="hero-lead" style={{marginBottom:"0"}}>
            まるみえチャトレが集めたいのは、<br />
            感情的な批判でも、事務所のPRでもありません。<br /><br />
            実際に働いた方の、リアルな体験談です。<br /><br />
            「良かった」も「気になった」も、<br />
            事実にもとづいて書いていただけると、<br />
            読む人にとって本当に参考になる情報になります。
          </p>
        </div>
      </section>

      {/* Q&A */}
      <section className="section" style={{background:"var(--cream)"}}>
        <div className="si" style={{maxWidth:"720px"}}>
          <p className="eyebrow">FAQ</p>
          <h2 className="sec-h" style={{marginBottom:"36px"}}>よくある質問</h2>

          <div className="guide-qa-list">

            <div className="guide-qa-item">
              <div className="guide-q">匿名で投稿できますか？</div>
              <div className="guide-a">
                <p>できます。</p>
                <p>名前・連絡先・勤務エリアなど個人が特定される情報は一切不要です。時期や詳細をぼかして書いていただいて構いません。</p>
              </div>
            </div>

            <div className="guide-qa-item">
              <div className="guide-q">何を書けばいいですか？</div>
              <div className="guide-a">
                <p>実際に体験したことを、正直に書いてください。</p>
                <p>参考になりやすい内容はこちらです：</p>
                <ul className="guide-list">
                  <li>スタッフの対応・サポートの実態</li>
                  <li>面接と入店後のギャップの有無</li>
                  <li>働き方・シフトの自由度</li>
                  <li>辞めるときの手続き</li>
                  <li>どんな人に向いていると思うか</li>
                </ul>
                <p>良かった点・気になった点、どちらも同じように価値があります。</p>
              </div>
            </div>

            <div className="guide-qa-item">
              <div className="guide-q">書いた内容はそのまま掲載されますか？</div>
              <div className="guide-a">
                <p>編集部が確認してから掲載します。</p>
                <p>数日以内に掲載します。個人が特定される情報が含まれる場合は、その部分を編集してから掲載することがあります。</p>
              </div>
            </div>

            <div className="guide-qa-item">
              <div className="guide-q">掲載後に削除してもらえますか？</div>
              <div className="guide-a">
                <p>できます。</p>
                <p>掲載後に削除・修正をご希望の場合はお問い合わせください。速やかに対応します。</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 掲載できない内容 */}
      <section className="section" style={{background:"var(--white)"}}>
        <div className="si" style={{maxWidth:"720px"}}>
          <p className="eyebrow">POLICY</p>
          <h2 className="sec-h" style={{marginBottom:"24px"}}>掲載できない内容</h2>
          <div className="guide-ng-box">
            <div className="guide-ng-item">
              <span className="guide-ng-icon">✕</span>
              <span>事実ではない内容・噂話</span>
            </div>
            <div className="guide-ng-item">
              <span className="guide-ng-icon">✕</span>
              <span>感情的な誹謗中傷</span>
            </div>
            <div className="guide-ng-item">
              <span className="guide-ng-icon">✕</span>
              <span>個人が特定される情報</span>
            </div>
            <div className="guide-ng-item">
              <span className="guide-ng-icon">✕</span>
              <span>事務所関係者による投稿</span>
            </div>
            <div className="guide-ng-item">
              <span className="guide-ng-icon">✕</span>
              <span>広告・勧誘目的の内容</span>
            </div>
          </div>
        </div>
      </section>

      {/* 締め・CTA */}
      <section className="kuchi-sec">
        <div className="kuchi-inner">
          <h2 className="kuchi-h">
            信頼できる情報が集まるほど、<br />
            このサイトはより正確になります。
          </h2>
          <p className="kuchi-p">
            あなたの体験を、<br />
            次に選ぶ誰かのために残してください。
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeoozsXNP5R5hgyPbxMlVPNPBrc2NOceFtI5f97Lbv3KUATkw/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-main"
          >
            口コミを投稿する →
          </a>
        </div>
      </section>

    </main>
  );
}
