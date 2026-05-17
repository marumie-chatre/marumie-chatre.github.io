import Link from "next/link";

export const metadata = {
  title: "コラム｜まるみえチャトレ",
  description: "チャットレディ事務所選びに役立つコラム13本。身バレ対策・事務所の選び方・副業ガイド・職業別ガイド・確定申告など、編集部が実際に調査した情報をもとに執筆しています。",
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
  {
    slug: "ol-fukugyou",
    cat: "副業ガイド｜OL向け",
    title: "OLが副業でチャットレディを始めるなら｜失敗しない選び方と職場バレ対策",
    desc: "OLが平日夜・週末を使って副業チャットレディを始めるためのガイド。職場バレ対策・確定申告・おすすめ事務所まで解説。",
    date: "2026.05.17",
    readTime: "約8分",
    thumb: "/col-default.png",
  },
  {
    slug: "shufu-zaitaku",
    cat: "在宅ガイド｜主婦向け",
    title: "主婦が在宅で稼ぐチャットレディ完全ガイド｜家事育児と両立する選び方",
    desc: "主婦が在宅でチャットレディを始めるためのガイド。家事育児と両立する稼働パターン、家族にバレない対策、おすすめ事務所まで。",
    date: "2026.05.17",
    readTime: "約8分",
    thumb: "/col-default.png",
  },
  {
    slug: "gakusei-chatre",
    cat: "学生ガイド",
    title: "学生がチャットレディで稼ぐコツ｜大学生・短大生向け選び方ガイド",
    desc: "大学生・短大生が学業と両立しながらチャットレディで稼ぐためのガイド。授業の合間・週末稼働で月10万円稼ぐ方法を解説。",
    date: "2026.05.17",
    readTime: "約7分",
    thumb: "/col-default.png",
  },
  {
    slug: "kangoshi-fukugyou",
    cat: "副業ガイド｜看護師向け",
    title: "看護師の副業にチャットレディが向く理由｜不規則勤務と高所得層の対策ガイド",
    desc: "看護師が副業でチャットレディを始めるためのガイド。不規則勤務との相性、夜勤明けの稼働パターン、高所得層の確定申告対策まで。",
    date: "2026.05.17",
    readTime: "約8分",
    thumb: "/col-default.png",
  },
  {
    slug: "sekkyaku-tenshoku",
    cat: "転職ガイド｜接客業向け",
    title: "接客業からチャットレディへの転職｜飲食店員・販売員のスキルが活きる",
    desc: "飲食店員・販売員・キャバ嬢など接客業からチャットレディに転職するためのガイド。前職の接客スキルが活きる理由を解説。",
    date: "2026.05.17",
    readTime: "約7分",
    thumb: "/col-default.png",
  },
  {
    slug: "single-mama",
    cat: "ガイド｜シングルマザー",
    title: "シングルマザーがチャットレディで稼ぐガイド｜子育てと両立する選び方",
    desc: "シングルマザーが在宅でチャットレディを始めるためのガイド。子供が寝た後の稼働、月10-20万円稼ぐ方法、児童扶養手当の影響まで。",
    date: "2026.05.17",
    readTime: "約8分",
    thumb: "/col-default.png",
  },
  {
    slug: "kaodashi-nashi",
    cat: "配信ガイド｜顔出しなし",
    title: "顔出しなしで稼ぐチャットレディ完全ガイド｜マスク/バーチャル/首から下",
    desc: "顔バレを完全に避けたい方向けのチャットレディ完全ガイド。マスク配信・バーチャル配信・首から下配信の3つの方式を解説。",
    date: "2026.05.17",
    readTime: "約8分",
    thumb: "/col-default.png",
  },
  {
    slug: "zaitaku-10man",
    cat: "在宅ガイド｜月10万",
    title: "在宅チャットレディで月10万円稼ぐコツ｜現実的な稼働時間と事務所選び",
    desc: "在宅チャットレディで月10万円を本気で稼ぐためのコツ。必要な稼働時間、報酬率の選び方、サポートが手厚い事務所まで解説。",
    date: "2026.05.17",
    readTime: "約8分",
    thumb: "/col-default.png",
  },
  {
    slug: "freeter-chatre",
    cat: "就業ガイド｜フリーター向け",
    title: "フリーターのチャットレディ就業ガイド｜本業化で月30万円稼ぐステップ",
    desc: "フリーターからチャットレディを本業化するためのガイド。週5回・本気稼働で月30-50万円稼ぐステップ、社会保険・確定申告まで。",
    date: "2026.05.17",
    readTime: "約8分",
    thumb: "/col-default.png",
  },
  {
    slug: "kakuteishinkoku",
    cat: "税務ガイド｜確定申告",
    title: "チャットレディと確定申告の正しい知識｜副業20万円ルール・経費・普通徴収",
    desc: "チャットレディが確定申告で気をつけるべきポイントを解説。副業20万円ルール・経費の考え方・普通徴収の選び方まで。",
    date: "2026.05.17",
    readTime: "約9分",
    thumb: "/col-default.png",
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
