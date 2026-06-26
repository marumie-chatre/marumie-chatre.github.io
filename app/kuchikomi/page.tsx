import { IconMessage2Plus, IconBan } from "@tabler/icons-react";
import { reviews } from "../reviews";
import OfficeReviews from "../OfficeReviews";
import { BreadcrumbSchema } from "../StructuredData";

export const metadata = {
  alternates: { canonical: "/kuchikomi" },
  title: "口コミ",
  description: "チャットレディ事務所で働いた方のリアルな口コミ。良いことだけじゃない、リアルな声を読んでください。",
};

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeoozsXNP5R5hgyPbxMlVPNPBrc2NOceFtI5f97Lbv3KUATkw/viewform?usp=dialog";

export default function KuchikomiPage() {

  return (
    <main>
      <BreadcrumbSchema items={[
        { name: "トップ", path: "/" },
        { name: "口コミ", path: "/kuchikomi" },
      ]} />
      {/* HERO */}
      <section className="hero" style={{paddingTop:"26px", paddingBottom:"40px"}}>
        <div className="hero-inner" style={{maxWidth:"680px", margin:"0 auto", textAlign:"left", paddingTop:0}}>
          <p className="eyebrow">VOICE</p>
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
          <p style={{fontSize:"12px", color:"var(--text-light)", marginTop:"8px"}}>匿名・約1分で投稿できます</p>
        </div>
      </section>

      {/* 最新口コミ一覧 */}
      <section className="section" style={{background:"var(--cream)", paddingBottom:"32px"}}>
        <div className="si">
          <p className="eyebrow">REVIEWS</p>
          <h2 className="sec-h" style={{marginBottom:"8px"}}>良いことだけじゃない、リアルな声を読んでみてください。</h2>
          <p className="sec-sub">実際に働いた方の体験談が載っています。</p>
          <OfficeReviews reviews={reviews} officeName="まるみえチャトレ" excludeHiddenInInitial linkToOffice />
        </div>
      </section>

      {/* 投稿の流れ（余白を詰める） */}
      <section className="section" style={{background:"var(--white)", paddingTop:"32px", paddingBottom:"32px"}}>
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
                <p className="kuchi-step-text">良かったこと・気になったこと、どちらも正直に書いてください。所要時間は約1分です。</p>
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

      {/* 投稿ガイドライン（ページ内に直接表示・余白を詰める） */}
      <section className="section" style={{ background: "var(--cream)", paddingTop: "32px", paddingBottom: "36px" }}>
        <div className="si" style={{ maxWidth: "680px" }}>
          <p className="eyebrow">GUIDELINE</p>
          <h2 className="sec-h" style={{ marginBottom: "8px" }}>口コミ投稿のガイドライン</h2>
          <p className="sec-sub" style={{ marginBottom: "20px" }}>
            安心して読めるサイトにするため、投稿内容を確認しています。
          </p>

          <div style={{ padding: "16px 18px", border: "1.5px solid #6FA858", borderRadius: 12, marginBottom: 12, background: "var(--white)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 14, fontWeight: 800, color: "#2C3326", marginBottom: 8 }}>
              <IconMessage2Plus size={19} stroke={1.7} color="#6FA858" />
              投稿していただきたいこと
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, lineHeight: 1.9, color: "#46503E" }}>
              <li>スタッフの対応・サポートの実態</li>
              <li>面接と入店後のギャップの有無</li>
              <li>働き方・シフトの自由度／辞めるときの手続き</li>
              <li>どんな人に向いていると思うか</li>
            </ul>
            <p style={{ margin: "8px 0 0", fontSize: 12, color: "#8E9882", lineHeight: 1.8 }}>
              ※ 匿名でOK。名前・連絡先・勤務エリアなど個人が特定される情報は不要です。良かった点も気になった点も、同じように価値があります。
            </p>
          </div>

          <div style={{ padding: "16px 18px", border: "1.5px solid #C19A66", borderRadius: 12, background: "var(--white)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 14, fontWeight: 800, color: "#9A7644", marginBottom: 8 }}>
              <IconBan size={19} stroke={1.7} color="#C19A66" />
              掲載できない内容
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, lineHeight: 1.9, color: "#46503E" }}>
              <li>事実ではない内容・噂話</li>
              <li>感情的な誹謗中傷</li>
              <li>個人が特定される情報</li>
              <li>事務所関係者による投稿・広告/勧誘目的の内容</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
