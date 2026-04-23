import Link from "next/link";

export const metadata = {
  title: "コラム｜まるみえチャトレ",
  description: "チャットレディ事務所選びに役立つコラム。身バレ対策・事務所の選び方・職業別ガイドなど、編集部が実際に調査した情報をもとに執筆しています。",
};

const columns = [
  {
    slug: "jimusho-erabi",
    cat: "事務所の選び方",
    title: "チャットレディ事務所の選び方｜失敗しない5つの基準",
    desc: "「なんとなく良さそう」で選ぶと後悔します。編集部が実際に調査した、安全な事務所を見極める5つのチェックポイントを解説します。",
    date: "2025.05.01",
    readTime: "約5分",
  },
  {
    slug: "mibare-taisaku",
    cat: "安全・身バレ対策",
    title: "身バレ対策の完全ガイド｜4つのリスク経路と防ぎ方",
    desc: "「顔出しなしなら大丈夫」は本当？身バレには4つのリスク経路があります。それぞれの防ぎ方を具体的に解説します。",
    date: "2025.05.01",
    readTime: "約6分",
  },
  {
    slug: "hoikushi-baito",
    cat: "職業別ガイド",
    title: "保育士の副業にチャットレディはアリ？リスクと対策を解説",
    desc: "保育士はチャットレディの副業ができるのか。就業規則・身バレリスク・税金まで、同じ経験を持つ運営者が正直に解説します。",
    date: "2025.05.01",
    readTime: "約7分",
  },
];

export default function ColumnPage() {
  return (
    <main>

      {/* HERO */}
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

      {/* コラム一覧 */}
      <section className="section" style={{background:"var(--cream)"}}>
        <div className="si">
          <div className="column-list-grid">
            {columns.map((col) => (
              <Link href={`/column/${col.slug}`} key={col.slug} className="column-list-card">
                <div className="column-list-cat">{col.cat}</div>
                <h2 className="column-list-title">{col.title}</h2>
                <p className="column-list-desc">{col.desc}</p>
                <div className="column-list-meta">
                  <span>{col.date}</span>
                  <span>{col.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 口コミCTA */}
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
