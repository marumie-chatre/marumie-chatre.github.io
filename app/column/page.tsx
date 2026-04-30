import Link from "next/link";

export const metadata = {
  title: "コラム｜まるみえチャトレ",
  description: "チャットレディ事務所選びに役立つコラム。身バレ対策・事務所の選び方・副業ガイドなど、編集部が実際に調査した情報をもとに執筆しています。",
};

const columns = [
  {
    slug: "jimusho-erabi",
    cat: "事務所の選び方",
    title: "チャットレディ事務所の選び方｜失敗しない5つの基準",
    desc: "「なんとなく良さそう」で選ぶと後悔します。編集部が実際に調査した、安全な事務所を見極める5つのチェックポイントを解説します。",
    date: "2025.05.01",
    readTime: "約5分",
    thumb: "/col-jimusho-erabi.png",
  },
  {
    slug: "mibare-taisaku",
    cat: "安全・身バレ対策",
    title: "配信中に顔がバレる？家族にバレる？チャットレディの身バレ、よくある疑問に答えます",
    desc: "顔出しなしなら大丈夫？家族や職場にバレない？よくある疑問に具体的な対策とともに答えます。",
    date: "2025.05.01",
    readTime: "約6分",
    thumb: "/col-mibare-taisaku.png",
  },
  {
    slug: "hoikushi-baito",
    cat: "副業・働き方",
    title: "チャットレディは副業にアリ？会社・職場にバレないための全対策",
    desc: "本業をしながらチャットレディを始めたい方へ。就業規則の確認から住民税・バレる原因と対策まで解説します。",
    date: "2025.05.01",
    readTime: "約7分",
    thumb: "/col-hoikushi-baito.png",
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
            事務所選びに役立つ情報を、編集部が実際に調査して書いています。<br />
            「これ知りたかった」という情報だけを載せています。
          </p>
        </div>
      </section>

      <section className="section" style={{background:"var(--cream)"}}>
        <div className="si">
          <div className="column-list-grid">
            {columns.map((col) => (
              <Link href={`/column/${col.slug}`} key={col.slug} className="column-list-card">
                <div className="column-list-thumb">
                  <img src={col.thumb} alt={col.title} />
                  <span className="column-list-arrow">→</span>
                </div>
                <div className="column-list-cat">{col.cat}</div>
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
