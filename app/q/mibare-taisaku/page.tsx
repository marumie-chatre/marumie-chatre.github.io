import type { ReactNode } from "react";
import Link from "next/link";
import { QABlock, PointBox, TipBox, MarkerSpan, MinamiBubble, RelatedList } from "../../ArticleParts";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "../../StructuredData";
import { L3ArticleShell } from "../../L3";

export const metadata = {
  alternates: { canonical: "/q/mibare-taisaku" },
  title: "チャットレディの身バレ、よくある疑問にぜんぶ答えます",
  description:
    "「身バレが怖くて始められない」方へ。なぜ身バレは起きにくいのか、顔を出さずに働けること、サイトや事務所が守ってくれること、自分に合った対策を相談できることまで、現役チャットレディ4年のみなみがやさしく解説します。",
};

const FAQS = [
  {
    q: "顔出しなしなら身バレしませんか？",
    a: "顔バレのリスクは大きく下がります。メイクや髪型で雰囲気を変える、マスク、顔出しなし、バーチャルに加えて、本名・住所・勤務先は話さないと決めておけば、さらに安心です。",
  },
  {
    q: "もし配信が録画されて流出したらどうなりますか？",
    a: "国内の大手サイトは配信に個別のコード番号やロゴを入れていて、流出しても誰のものか特定でき、通報フォームから事務所と一緒にすぐ削除依頼を出せます。無断でアップした側は著作権・肖像権の侵害で法的責任を問われます。海外サイトは保護が弱いので、国内サイトを選ぶのが安心です。",
  },
  {
    q: "身バレが不安なら、どんな事務所を選べばいい？",
    a: "面接で身バレ対策を具体的に説明してくれるかで選びましょう。ノンアダルト専門のフェアリーテイルのように、会話の仕方や顔出しなしでの稼ぎ方まで自分に合わせて一緒に考えてくれるお店だと、一人で悩まずに始められます。",
  },
];

const CONDITIONS: { title: string; body: ReactNode }[] = [
  {
    title: "知り合いが同じサイトをよく見てる",
    body: "ライブチャット系のサイトは国内だけでも数多くあり、人気サイトでは1日に数百〜1万人規模の女性が配信しています。あなたはその大勢の一人。たまたま見ている知り合いが、偶然あなたに行き当たることは、めったにありません。",
  },
  {
    title: "その人が、たまたまあなたの配信に来る",
    body: "時間帯・サイト・ジャンル・好みの配信者。条件がすべて合わないと、まず見られません。",
  },
  {
    title: "顔・声から「本人だ」と分かる",
    body: (
      <>
        ここがいちばん大事。でも顔は、<strong>メイクや髪型で雰囲気を変える → マスクをつける → 顔出しなしにする</strong>、と段階で選べます。声を聞くのもお客さんが課金してから。つまり③は、<strong>自分でほぼ完全に防げます。</strong>
      </>
    ),
  },
];

const TOC = [
  { id: "naze", label: "なぜ身バレは起きにくいの？" },
  { id: "taisaku", label: "対策はシンプル" },
  { id: "ryushutsu", label: "流出が怖い方へ｜サイトと事務所の守り" },
  { id: "funnel", label: "あなたの不安はどれ？" },
  { id: "jimusho", label: "事務所選びで身バレリスクは変わる？" },
  { id: "faq", label: "よくある質問" },
  { id: "matome", label: "まとめ" },
];

// /profile の枠内リストに合わせ、標準の箇条書きで詰めて整列（項目間に余分な余白を入れない）
function CleanList({ items }: { items: ReactNode[] }) {
  return (
    <ul style={{ margin: 0, paddingLeft: 18, fontSize: "13px", lineHeight: 1.9, color: "#5e4a3a" }}>
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  );
}

export default function ColMibareTaisakuPage() {
  return (
    <>
      <ArticleSchema
        title="チャットレディの身バレ、よくある疑問にぜんぶ答えます"
        description="なぜ身バレは起きにくいのか、顔を出さずに働けること、サイトや事務所が守ってくれること、自分に合った対策を相談できることまで、現役チャットレディ4年のみなみがやさしく解説します。"
        url="https://marumie-chatre.vercel.app/q/mibare-taisaku"
        datePublished="2026-06-26"
      />
      <BreadcrumbSchema
        items={[
          { name: "トップ", path: "/" },
          { name: "お悩みから探す", path: "/q" },
          { name: "身バレ対策", path: "/q/mibare-taisaku" },
        ]}
      />
      <FAQSchema items={FAQS} />

      <L3ArticleShell
        coverImage={{ src: "/身バレ.png", alt: "チャットレディの身バレ、よくある疑問にぜんぶ答えます" }}
        breadcrumb={[
          { l: "トップ", href: "/" },
          { l: "お悩みから探す", href: "/q" },
          { l: "身バレ対策" },
        ]}
        kicker="お悩み｜安全・身バレ対策"
        title={
          <>
            チャットレディの身バレ、
            <br />
            よくある疑問にぜんぶ答えます
          </>
        }
        meta={{ date: "2026.06.26", readTime: "約7分で読めます" }}
      >
        <article className="col-article-body">
          <p>
            「始めてみたいけど、知り合いにバレたらどうしよう」。始める前に、いちばん不安になるのが身バレですよね。
          </p>
          <p>
            でも安心してください。
            <MarkerSpan>身バレは、仕組みを知って少し気をつけるだけで、そうそう起きません。</MarkerSpan>{" "}
            現役チャットレディ4年の私、みなみも無理なく続けています。なぜ起きにくいのか、やさしくお話ししますね。
          </p>

          <TipBox title="この記事でわかること">
            <CleanList
              items={[
                "身バレが「起きにくい」理由と、3つの偶然の仕組み",
                "顔を出さずに働ける段階的な方法",
                "万一のときも、サイトと事務所が守ってくれること",
                "自分に合った身バレ対策を、面接で相談できること",
                "あなたの不安はどれ？　配信中・家族・職場の別ページへ",
              ]}
            />
          </TipBox>

          <nav
            aria-label="もくじ"
            style={{ background: "var(--cream)", border: "1px solid var(--border-green)", borderRadius: "12px", padding: "16px 18px", margin: "24px 0" }}
          >
            <div style={{ fontSize: "12px", fontWeight: 800, color: "var(--green-dark)", marginBottom: "10px" }}>もくじ</div>
            <ol style={{ margin: 0, paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "8px" }}>
              {TOC.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} style={{ color: "var(--text)", textDecoration: "none", fontWeight: 700, fontSize: "13.5px" }}>
                    {t.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <h2 id="naze">なぜ起きにくいの？　身バレは「3つの偶然」が重なった時だけ</h2>
          <p>身バレが起きるには、次の3つが<strong>同時にそろう</strong>必要があります。1つずつ見ると、どれもめったに起きません。</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px", margin: "22px 0" }}>
            {CONDITIONS.map((c, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  border: "1px solid var(--border-green)",
                  borderRadius: "12px",
                  padding: "16px 18px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <span
                    style={{
                      flexShrink: 0,
                      width: "28px",
                      height: "28px",
                      borderRadius: "8px",
                      background: "var(--green-pale)",
                      color: "var(--green-dark)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "15px",
                    }}
                  >
                    {i + 1}
                  </span>
                  <span style={{ fontSize: "15.5px", fontWeight: 700, color: "var(--text)", lineHeight: 1.5 }}>{c.title}</span>
                </div>
                <p style={{ fontSize: "14px", lineHeight: 1.85, color: "var(--text-mid)", margin: 0, paddingLeft: "38px" }}>{c.body}</p>
              </div>
            ))}
          </div>

          <PointBox title="ここが安心ポイント">
            <strong>どれか1つでも断てば身バレは起きません。</strong>とくに③は自分で防げるので、ここを押さえれば安心です。
          </PointBox>

          <MinamiBubble>
            私のまわりで「気をつけているのにバレた」という話は、ほとんど聞きません。押さえるポイントはシンプルなので、最初に知ってしまえば、あとは安心して配信に集中できますよ。
          </MinamiBubble>

          <h2 id="taisaku">対策はシンプル｜自分で防げます</h2>
          <p>身バレ対策というと身構えてしまいますが、やることは多くありません。</p>
          <TipBox title="押さえるのはこれだけ">
            <CleanList
              items={[
                <><strong>顔</strong>　まずはメイクや髪型で雰囲気を変えるだけでもバレにくくなります。さらに不安ならマスク配信、顔出しなし、バーチャルも選べます。自分に合うやり方でOKです。</>,
                <><strong>背景</strong>　外の景色はサイトの規約でそもそも映せません。通勤型なら自宅も映りません。</>,
                <><strong>話す内容</strong>　本名・住所・最寄り駅・勤務先は言わない、と決めておくだけ。</>,
                <><strong>SNS</strong>　大きな原因ではありませんが、念のため、配信で使った写真はふだんのSNSに流用しないこと。</>,
              ]}
            />
          </TipBox>

          <h2 id="ryushutsu">それでも「流出が怖い」方へ｜サイトと事務所が守ってくれます</h2>
          <p>「もし録画されて出回ったら」という不安もありますよね。ここも、あなた一人で抱える話ではありません。</p>
          <PointBox title="国内サイトと事務所の守り｜公開情報より">
            <CleanList
              items={[
                <>国内の大手サイトは、配信に<strong>個別のコード番号やロゴ</strong>が入っていて、万一流出しても<strong>誰の配信かを特定できる</strong>仕組みになっています。</>,
                <>各サイトに<strong>違法アップロードの通報フォーム</strong>があり、事務所と協力して<strong>すぐに削除依頼</strong>を出せます。</>,
                <>無断で録画・アップロードした側は、<strong>著作権・肖像権の侵害で法的責任</strong>を問われます。賠償を求められることもあります。</>,
              ]}
            />
            <p style={{ fontSize: "13.5px", lineHeight: 1.8, color: "var(--text-mid)", margin: "12px 0 0" }}>
              こうした守りが効くのは<strong>国内サイト</strong>だから。海外サイトは保護が弱いので、国内サイトを選ぶこと自体が大きな安心になります。
            </p>
          </PointBox>

          <h2 id="funnel">あなたの不安はどれ？　くわしくは別ページへ</h2>
          <p>身バレといっても、不安の中身は人それぞれ。あなたの「いちばん気になる」に合わせて、対策をまとめています。</p>
          <RelatedList items={[
            { href: "/q/barebure", label: "配信中に、お客さんに特定されるのが怖い" },
            { href: "/q/kazoku-bare", label: "家族・親・彼氏にバレるのが怖い" },
            { href: "/q/hoikushi-baito", label: "職場・会社にバレたくない人へ" },
          ]} />

          <h2 id="jimusho">事務所選びで身バレリスクは変わる？</h2>
          <p>
            少し変わります。といっても「どこが身バレ対策No.1」という話ではありません。対策は基本どの事務所もしてくれるので、見るのは順位ではなく、
            <MarkerSpan>面接で身バレ対策を“具体的に”説明してくれるか</MarkerSpan>。聞けば、たいてい丁寧に教えてくれます。
          </p>
          <TipBox title="面接で気軽に聞いてOK">
            <CleanList
              items={[
                "身バレ対策は具体的にどうしていますか？",
                "顔出しなしでも稼げますか？",
                "身分証は何に使いますか？　多くはサイト登録の本人確認用です。",
              ]}
            />
          </TipBox>
          <p>
            なかでも、身バレが不安な人に相性がいいのが<strong>ノンアダルト専門のフェアリーテイル</strong>です。理由は「対策が最強だから」ではなく、
            <MarkerSpan>身バレ対策を“あなたに合わせて”一緒に考えてくれるから。</MarkerSpan>
          </p>
          <PointBox title="フェアリーテイルがやってくれること">
            <CleanList
              items={[
                <><strong>会話からバレる要素を教えてくれる</strong>　話の中で身元のヒントになりやすい部分を説明し、どんな設定・話題なら安全かをアドバイスしてくれます。</>,
                <><strong>雰囲気の変え方</strong>　髪型やメイクを少し変えるだけでも、ぐっとバレにくくなります。</>,
                <><strong>顔出しなしでも稼ぐ方法</strong>　それでも不安なら、顔を出さずにお客さんをつかむやり方を提案してくれます。</>,
                <><strong>収入と身バレ、両方の目線で</strong>　安全に、でもちゃんと稼げるよう一緒に考えてくれるので、一人で悩まずに済みます。</>,
              ]}
            />
          </PointBox>
          <p>もちろんノンアダルト専門なので、過激なことを求められる心配がなく、お話だけで働けるのも安心材料です。</p>
          <TipBox title="実際の口コミ｜★5・2023年11月・通勤・マスク配信">
            「本業が副業禁止なので、顔バレ・身バレが一番の不安でした。マスク配信OKで、しかもノンアダルト専門というのが決め手です」── フェアリーテイル
          </TipBox>

          <h2 id="faq">よくある質問</h2>
          {FAQS.map((f) => (
            <QABlock key={f.q} q={f.q} a={f.a} />
          ))}

          <h2 id="matome">まとめ｜知れば怖くない。まずは気軽に話を聞いてみよう</h2>
          <p>
            身バレは「3つの偶然が重なった時だけ」で、しかも<strong>顔を出さない・ヒントを出さない</strong>を押さえれば、そうそう起きません。万一のときもサイトと事務所が守ってくれますし、自分に合った対策は面接で相談できます。まずは気軽に話を聞いてみてくださいね。
          </p>

          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link href="/jimusho" className="btn-main">
              自分に合う事務所をさがす →
            </Link>
          </div>

          <h2>あわせて読みたい</h2>
          <ul>
            <li><Link href="/q/barebure">配信中に客に特定されるのが怖い</Link></li>
            <li><Link href="/q/kazoku-bare">家族・親・彼氏にバレるのが怖い</Link></li>
            <li><Link href="/q/hoikushi-baito">職場にバレない副業の始め方　保育士の実体験</Link></li>
            <li><Link href="/q/ayashii">チャトレって怪しくない？危なくない？</Link></li>
            <li><Link href="/q/jimusho-erabi">初心者の事務所選び</Link></li>
          </ul>

          <div className="col-article-warn">
            ※本記事は一般的な情報提供・公開情報・現役チャットレディ4年の経験をもとに作成しています。サイトや事務所の対応は変わることがあるため、最新は各サイト・面接でご確認ください。税務の詳細は税務署・専門家へ。
          </div>
        </article>
      </L3ArticleShell>
    </>
  );
}
