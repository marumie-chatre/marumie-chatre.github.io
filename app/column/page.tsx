import Link from "next/link";

export const metadata = {
  title: "コラム｜まるみえチャトレ",
  description: "チャットレディ事務所選びに役立つコラム。身バレ対策・事務所の選び方・副業ガイドなど、現役4年の視点で書いています。",
};

const columns = [
  {
    slug: "jimusho-erabi",
    cat: "事務所の選び方",
    title: "チャットレディ事務所の選び方｜失敗しない5つの基準",
    desc: "「なんとなく良さそう」で選ぶと後悔します。安全な事務所を見極める5つのチェックポイントを解説します。",
    date: "2025.05.01",
    readTime: "約5分",
  },
  {
    slug: "mibare-taisaku",
    cat: "身バレ対策",
    title: "配信中に顔がバレる？家族にバレる？よくある疑問に答えます",
    desc: "顔出しなしなら大丈夫？家族や職場にバレない？よくある疑問に具体的な対策とともに答えます。",
    date: "2025.05.01",
    readTime: "約6分",
  },
  {
    slug: "hoikushi-baito",
    cat: "副業ガイド",
    title: "チャットレディは副業にアリ？会社・職場にバレないための全対策",
    desc: "本業をしながらチャットレディを始めたい方へ。住民税・バレる原因と対策まで解説します。",
    date: "2025.05.01",
    readTime: "約7分",
  },
];

export default function ColumnPage() {
  return (
    <main>
      <section className="list-hero">
        <div className="si">
          <p className="eyebrow">COLUMN</p>
          <h1 className="list-h1">
            不安なことから、<br />
            <span>読んでみてください。</span>
          </h1>
          <p className="list-lead">
            事務所選びに役立つ情報を、現役4年の視点で書いています。<br />
            「これ知りたかった」という情報だけを載せています。
          </p>
        </div>
      </section>

      <section className="section" style={{background:"var(--cream)", padding:"32px 16px 56px"}}>
        <div className="si" style={{maxWidth:"720px"}}>
          <div style={{display:"flex", flexDirection:"column", gap:"16px"}}>
            {columns.map((col) => (
              <Link
                href={`/column/${col.slug}`}
                key={col.slug}
                style={{
                  display:"block",
                  background:"var(--white)",
                  borderRadius:"14px",
                  padding:"20px 20px 18px",
                  textDecoration:"none",
                  color:"var(--text)",
                  boxShadow:"0 2px 8px rgba(0,0,0,0.04)",
                  border:"1px solid var(--border)",
                  transition:"transform .2s, box-shadow .2s, border-color .2s",
                }}
                className="column-card-v3"
              >
                <div style={{
                  display:"inline-block",
                  fontSize:"11px",
                  fontWeight:700,
                  color:"#5a9a30",
                  letterSpacing:".06em",
                  padding:"3px 10px",
                  background:"var(--green-pale)",
                  borderRadius:"100px",
                  marginBottom:"10px",
                }}>
                  {col.cat}
                </div>
                <h3 style={{
                  fontFamily:'"Zen Maru Gothic", sans-serif',
                  fontSize:"16px",
                  fontWeight:700,
                  color:"var(--text)",
                  lineHeight:1.55,
                  margin:"0 0 8px",
                }}>
                  {col.title}
                </h3>
                <p style={{
                  fontSize:"13px",
                  color:"var(--text-muted)",
                  lineHeight:1.7,
                  margin:"0 0 12px",
                }}>
                  {col.desc}
                </p>
                <div style={{
                  display:"flex",
                  justifyContent:"space-between",
                  alignItems:"center",
                  fontSize:"11px",
                  color:"var(--text-light)",
                  paddingTop:"10px",
                  borderTop:"1px solid var(--border)",
                }}>
                  <span>{col.date}・{col.readTime}</span>
                  <span style={{color:"#5a9a30", fontWeight:700}}>読む →</span>
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
