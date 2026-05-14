import Link from "next/link";
import { reviews } from "../reviews";
import OfficeReviews from "../OfficeReviews";

export const metadata = {
  title: "口コミ｜まるみえチャトレ",
  description: "チャットレディ事務所で働いた方のリアルな口コミ。良いことだけじゃない、リアルな声を読んでください。",
};

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeoozsXNP5R5hgyPbxMlVPNPBrc2NOceFtI5f97Lbv3KUATkw/viewform?usp=dialog";

export default function KuchikomiPage() {

  return (
    <main>
      {/* HERO */}
      <section className="hero" style={{paddingBottom:"48px"}}>
        <div className="hero-inner" style={{maxWidth:"680px", margin:"0 auto", textAlign:"left"}}>
          <p className="eyebrow">REVIEW</p>
          <h1 className="hero-h1">
            働いた経験、<br />
            <em>教えてもらえませんか。</em>
          </h1>
          <p className="hero-lead" style={{marginBottom:"32px"}}>
            「実際どうだったか」を知りたい人が、このサイトに来ています。<br />
            事務所のHPには書いていない<strong>本音のひとこと</strong>が、<br />
            次に選ぶ誰かの安心になります。
          </p>
          {/* 上部投稿ボタン */}
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-main"
          >
            口コミを投稿する →
          </a>
          <p style={{fontSize:"12px", color:"var(--text-light)", marginTop:"8px"}}>匿名・約5分で投稿できます</p>
        </div>
      </section>

      {/* 最新口コミ一覧 */}
      <section className="section" style={{background:"var(--cream)"}}>
        <div className="si">
          <p className="eyebrow">REVIEWS</p>
          <h2 className="sec-h" style={{marginBottom:"8px"}}>良いことだけじゃない、リアルな声を読んでみてください。</h2>
          <p className="sec-sub">実際に働いた方の体験談が載っています。</p>
          <OfficeReviews reviews={reviews} officeName="まるみえチャトレ" />
          <div style={{textAlign:"center", marginTop:"32px"}}>
            <Link href="/jimusho" className="btn-sub">
              事務所ごとの口コミを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* 投稿の流れ */}
      <section className="section" style={{background:"var(--white)"}}>
        <div className="si" style={{maxWidth:"680px"}}>
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
      </section>

      {/* 下部CTA */}
      <section className="kuchi-sec">
        <div className="kuchi-inner">
          <h2 className="kuchi-h">働いた経験がある方へ</h2>
          <p className="kuchi-p">
            あなたの本音が、次に選ぶ誰かの安心になります。<br />
            匿名・5分で投稿できます。
          </p>
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-main">
            口コミを投稿する →
          </a>
        </div>
      </section>

      {/* ガイドライン */}
      <section className="section" style={{background:"var(--cream)"}}>
        <div className="si" style={{maxWidth:"680px", textAlign:"center"}}>
          <p style={{fontSize:"14px", color:"var(--text-muted)", marginBottom:"12px"}}>
            口コミの審査基準・掲載ルールについては
          </p>
          <Link href="/guideline" className="btn-sub">口コミガイドラインを確認する →</Link>
        </div>
      </section>
    </main>
  );
}
