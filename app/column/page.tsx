import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "コラム｜まるみえチャトレ",
  description: "チャットレディ事務所選びに役立つコラム。身バレ対策・事務所の選び方・副業ガイドなど、現役4年の視点で書いています。",
};

const columns = [
  {
    slug: "jimusho-erabi",
    icon: "📋",
    image: "/col-jimusho-erabi.png",
    cat: "5つの基準",
    title: "事務所の選び方",
    catch: "失敗しない5つのチェックポイント",
    summary: "「なんとなく良さそう」で選ぶと後悔します。安全な事務所を見極める5つの基準を、現役の視点で解説します。",
    target: "事務所選びで迷っている方",
  },
  {
    slug: "mibare-taisaku",
    icon: "🎭",
    image: "/col-mibare-taisaku.png",
    cat: "身バレ対策",
    title: "身バレ、よくある疑問に答えます",
    catch: "顔バレ・家族バレ・職場バレ",
    summary: "顔出しなしなら大丈夫？家族や職場にバレない？よくある疑問に、具体的な対策とともに答えます。",
    target: "身バレが何より不安な方",
  },
  {
    slug: "hoikushi-baito",
    icon: "💼",
    image: "/col-hoikushi-baito.png",
    cat: "副業ガイド",
    title: "チャトレは副業にアリ？",
    catch: "会社・職場にバレないための全対策",
    summary: "本業をしながらチャットレディを始めたい方へ。住民税・バレる原因と対策まで全部解説します。",
    target: "副業として始めたい方",
  },
];

export default function ColumnPage() {
  return (
    <main>

      {/* HERO */}
      <section className="hero" style={{paddingBottom:"64px"}}>
        <div className="hero-inner" style={{maxWidth:"720px", margin:"0 auto", textAlign:"left"}}>
          <p className="eyebrow">COLUMN</p>
          <h1 className="hero-h1" style={{fontSize:"clamp(26px,3.5vw,38px)"}}>
            不安なことから、<br /><em>読んでみてください。</em>
          </h1>
          <p className="hero-lead" style={{marginBottom:"0"}}>
            事務所選びに役立つ情報を、現役4年の視点で書いています。<br />
            「これ知りたかった」と思える記事だけ載せていますね。
          </p>
        </div>
      </section>

      {/* コラム一覧 */}
      <section className="section" style={{background:"var(--cream)"}}>
        <div className="si" style={{maxWidth:"1080px"}}>
          <p className="eyebrow">3 ARTICLES</p>
          <h2 className="sec-h" style={{marginBottom:"40px"}}>3つのテーマで深掘り</h2>

          <div className="area-grid">
            {columns.map((col) => (
              <Link href={`/column/${col.slug}`} key={col.slug} className="area-card">
                <div className="area-card-image-wrap">
                  <Image
                    src={col.image}
                    alt={col.title}
                    width={400}
                    height={240}
                    className="area-card-image"
                  />
                  <span className="area-card-icon">{col.icon}</span>
                </div>
                <div className="area-card-body">
                  <div className="area-card-header">
                    <h3 className="area-card-name">{col.title}</h3>
                    <span className="area-card-count">{col.cat}</span>
                  </div>
                  <p className="area-card-catch">{col.catch}</p>
                  <p className="area-card-summary">{col.summary}</p>
                  <div className="area-card-target">
                    <span className="area-card-target-label">こんな方に</span>
                    <span className="area-card-target-value">{col.target}</span>
                  </div>
                  <span className="area-card-link">詳しく見る →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
