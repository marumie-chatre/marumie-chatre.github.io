import Link from "next/link";

export const metadata = {
  title: "口コミを投稿する｜まるみえチャトレ",
  description: "チャットレディ事務所で働いた経験を教えてください。あなたの本音が、次に選ぶ誰かの安心になります。匿名・5分で投稿できます。",
};

export default function KuchikomiPage() {
  return (
    <main>

      {/* HERO */}
      <section className="hero" style={{paddingBottom:"64px"}}>
        <div className="hero-inner" style={{maxWidth:"680px",margin:"0 auto",textAlign:"left"}}>
          <p className="eyebrow">REVIEW</p>
          <h1 className="hero-h1">
            働いた経験、<br />
            <em>教えてもらえませんか。</em>
          </h1>
          <p className="hero-lead" style={{marginBottom:"0"}}>
            「実際どうだったか」を知りたい人が、このサイトに来ています。<br />
            事務所のHPには良いことしか書いていない。<br />
            ネットの情報は古かったり、信用できなかったり。<br /><br />
            あなたの本音のひとことが、次に選ぶ誰かの安心になります。
          </p>
        </div>
      </section>

      {/* 投稿フォームへ */}
      <section className="section" style={{background:"var(--cream)"}}>
        <div className="si" style={{maxWidth:"680px"}}>

          {/* 投稿の流れ */}
          <div className="kuchi-flow">
            <p className="eyebrow">HOW TO</p>
            <h2 className="sec-h" style={{marginBottom:"28px"}}>投稿の流れ</h2>
            <div className="kuchi-steps">
              <div className="kuchi-step">
                <div className="kuchi-step-num">01</div>
                <div className="kuchi-step-body">
                  <div className="kuchi-step-title">下のボタンをタップ</div>
                  <p className="kuchi-step-text">Googleフォームが開きます。匿名で投稿できます。</p>
                </div>
              </div>
              <div className="kuchi-step">
                <div className="kuchi-step-num">02</div>
                <div className="kuchi-step-body">
                  <div className="kuchi-step-title">事務所・評価・感想を入力</div>
                  <p className="kuchi-step-text">良かったこと・気になったこと、どちらも正直に書いてください。所要時間は約5分です。</p>
                </div>
              </div>
              <div className="kuchi-step">
                <div className="kuchi-step-num">03</div>
                <div className="kuchi-step-body">
                  <div className="kuchi-step-title">編集部が確認して掲載</div>
                  <p className="kuchi-step-text">内容を確認のうえ、順次掲載していきます。掲載まで数日かかる場合があります。</p>
                </div>
              </div>
            </div>
          </div>

          {/* メインCTA */}
          <div className="kuchi-cta-box">
            <p className="kuchi-cta-label">匿名・約5分で投稿できます</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeoozsXNP5R5hgyPbxMlVPNPBrc2NOceFtI5f97Lbv3KUATkw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-main"
              style={{fontSize:"16px", padding:"18px 48px"}}
            >
              口コミを投稿する →
            </a>
            <p className="kuchi-cta-note">
              Googleフォームが開きます
            </p>
          </div>

          {/* 投稿の注意事項 */}
          <div className="kuchi-notes">
            <div className="kuchi-notes-title">投稿前にご確認ください</div>
            <div className="kuchi-note-item">個人が特定される情報（名前・住所・連絡先など）は書かないでください</div>
            <div className="kuchi-note-item">事実に基づいた内容をお願いします</div>
            <div className="kuchi-note-item">誹謗中傷・虚偽の内容は掲載できません</div>
            <div className="kuchi-note-item">掲載まで数日かかる場合があります</div>
          </div>

        </div>
      </section>

      {/* なぜ口コミが大事か */}
      <section className="section" style={{background:"var(--white)"}}>
        <div className="si" style={{maxWidth:"680px"}}>
          <p className="eyebrow">WHY IT MATTERS</p>
          <h2 className="sec-h" style={{marginBottom:"24px"}}>口コミがこのサイトの一番の財産です</h2>
          <div className="kuchi-why-grid">
            <div className="kuchi-why-item">
              <div className="kuchi-why-icon">📊</div>
              <div className="kuchi-why-title">口コミが増えると評価の精度が上がります</div>
              <p className="kuchi-why-text">現在の評価は公式サイト調査が中心です。実際に働いた方の声が集まるほど、スコアがより実態に近づきます。</p>
            </div>
            <div className="kuchi-why-item">
              <div className="kuchi-why-icon">🙋</div>
              <div className="kuchi-why-title">次に選ぶ誰かの安心になります</div>
              <p className="kuchi-why-text">「実際どうだったか」を知りたい人が、今もこのサイトを見ています。あなたの経験が、その人の決断を助けます。</p>
            </div>
            <div className="kuchi-why-item">
              <div className="kuchi-why-icon">🔍</div>
              <div className="kuchi-why-title">良い事務所が正当に評価されます</div>
              <p className="kuchi-why-text">広告費がなくても、本当に良い事務所がちゃんと発見される仕組みを作りたいと思っています。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ガイドライン */}
      <section className="section" style={{background:"var(--cream)"}}>
        <div className="si" style={{maxWidth:"680px", textAlign:"center"}}>
          <p style={{fontSize:"14px", color:"var(--text-muted)", marginBottom:"12px"}}>
            口コミの審査基準・掲載ルールについては
          </p>
          <Link href="/guideline" className="btn-sub">
            口コミガイドラインを確認する →
          </Link>
        </div>
      </section>

    </main>
  );
}
