import Link from "next/link";
import { reviews } from "../../reviews";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "../../StructuredData";
import { L3ArticleShell } from "../../L3";
import { PointBox, TipBox, WarningBox, MarkerSpan, MinamiBubble, ReadAlso, RelatedList } from "../../ArticleParts";

export const metadata = {
  alternates: { canonical: "/style/honki" },
  title: "お話だけで稼ぐロードマップ｜最初の3か月でやること",
  description:
    "「アダルトは避けたい、でもちゃんと稼ぎたい」方へ。お話で早く軌道に乗るコツと、最初の3か月でやることを、元保育士で現役チャットレディ4年目のみなみが正直に解説。収入は時給で、条件つき・保証ではないとお伝えします。",
};

// 早く軌道に乗る9つのポイント（MASTER A-9補強【一】）
const STEPS: { n: string; t: string; d: React.ReactNode }[] = [
  { n: "1", t: "サイトが盛り上がる時間帯に合わせて配信する", d: <>お客さんが多い時間帯に配信すると、それだけ出会いの数が増えます。最初に自分のところへ来てくれるお客さんは全体のごく一部なので、<MarkerSpan>まずは見てもらえる母数を増やすことが軌道に乗る近道</MarkerSpan>。人が多い時間は、スタッフに聞くのがいちばん早いですよ。</> },
  { n: "2", t: "お客さんづくりのメールを丁寧に頑張る", d: <>配信のあと、来てくれたお客さん一人ひとりに、その日の会話を振り返ってお礼のメッセージを。<MarkerSpan>ここが常連さんになってもらえるかの入口</MarkerSpan>です。数より、一通の丁寧さ。「覚えてくれてる」と感じてもらえると、また会いに来てくれます。</> },
  { n: "3", t: "配信する時間を固定にする", d: <>配信の時間をなるべく決めておくと、「この時間に行けば会える」と覚えてもらえます。<MarkerSpan>固定すると常連さんがつきやすく、自分も生活リズムになって続けやすい</MarkerSpan>。決めた時間を守ることが、地味ですがいちばん効きます。</> },
  { n: "4", t: "リピーター（常連さん）づくりに力を入れる", d: <>収入を安定させるのは、一見のお客さんより常連さんです。新しい出会いを追いかけ続けるより、<MarkerSpan>来てくれた人を大事にして、常連さんを少しずつ増やすほうが結局ラク</MarkerSpan>。2と3は、そのための土台です。</> },
  { n: "5", t: "きわどい要望の“かわし方”を知っておく", d: <>ノンアダルトでも、お客さんからきわどい要望が来ることはあります。慌てないために、<MarkerSpan>あらかじめかわし方を知っておくと安心</MarkerSpan>。会話でやんわり話題を変える、笑って受け流す——具体的な言い回しはスタッフが教えてくれます。事前に準備しておけば、怖くありません。</> },
  { n: "6", t: "男性受けのいいサムネイル写真を設定する", d: <>サムネイル写真は、お客さんが入室するかどうかを決める看板です。<MarkerSpan>清潔感のある笑顔で、自分のキャラに合った一枚</MarkerSpan>を。盛りすぎる必要はありません。撮影や選び方も、迷ったらスタッフに手伝ってもらえます。</> },
  { n: "7", t: "待機中の表情を意識する", d: <>待機の画面は、いつ誰に見られているか分かりません。<MarkerSpan>ふとした表情やしぐさが、入ってもらえるかを左右します</MarkerSpan>。猫背や頬杖をやめて、やわらかい表情を意識するだけで印象が変わりますよ。</> },
  { n: "8", t: "会話は「相手の話」を中心にする", d: <>自分のことを話しすぎず、お客さんの話したいことを引き出すのがコツ。<MarkerSpan>聞き上手な子ほど常連さんがつきます</MarkerSpan>。プロフィールに自分のことを書き込みすぎるのも同じで、主役は相手。これは元保育士の私には、子どもと向き合う感覚に少し似ていました。</> },
  { n: "9", t: "スタッフに相談して、一緒に作戦を練る", d: <>そして、いちばん効くのがこれ。<MarkerSpan>一人で抱え込まず、スタッフと作戦を練ること</MarkerSpan>。どの時間帯が向くか、どんなメールが響くか、サムネイルはどれがいいか——プロの目で一緒に考えてもらうと、遠回りがぐっと減ります。1〜8も、教わりながらやるほうが何倍も早く身につきます。</> },
];

const FAQS = [
  {
    q: "お話（ノンアダルト）だけで稼げますか？",
    a: "稼げます。ただし一回ごとの単価はアダルトより控えめなので、“いきなり高収入”より“続けて伸ばす”イメージです。盛り上がる時間帯に配信する・常連さんを増やす・スタッフに相談する、といった順番を知ると、早く軌道に乗りやすいです。",
  },
  {
    q: "最初の3か月でどれくらい稼げますか？",
    a: "個人差が大きく保証はできませんが、目安として、しっかり入れる方がコツを本気で実践すれば、週5回×5時間で時給3,000円ペースも現実的です。最初の1か月は基礎作り、2か月目から実行、と段階で見てください。副業の方は基礎作りに1〜3か月みておくと安心です。",
  },
  {
    q: "自分に合うジャンルはどう選べばいいですか？",
    a: "年齢や雰囲気が目安になります。アイドルっぽい初々しさが活きる方は若年層向けのノンアダルト、落ち着きや包容力が強みの方はマダムジャンルが合いやすいです。どちらもノンアダルトで成立します。迷ったらスタッフに相談しましょう。",
  },
  {
    q: "SNSで集客したほうが稼げますか？",
    a: "合う人には効きますが、身バレのリスクがいちばん高いのもSNSです。やるなら私生活のアカウントと完全に分け、私物や配信写真は載せないこと。不安なら無理に使わなくても、配信内のコツだけで十分に伸ばせます。",
  },
];

// この記事でわかること用の整列リスト（barebure型）
function CleanList({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: 0, paddingLeft: "1.1em", display: "flex", flexDirection: "column", gap: "6px" }}>
      {items.map((t, i) => (
        <li key={i} style={{ lineHeight: 1.7 }}>{t}</li>
      ))}
    </ul>
  );
}

// もくじ（本文h2のidと対応）
const TOC = [
  { id: "points", label: "早く軌道に乗る9つのポイント" },
  { id: "genre", label: "自分に合うジャンルを選ぶ" },
  { id: "income", label: "収入の目安" },
  { id: "tsumazuki", label: "つまずかないための注意点" },
  { id: "kankyo", label: "軌道に乗るいちばんの近道は「教われる環境」" },
  { id: "faq", label: "よくある質問" },
];

export default function StyleHonkiPage() {
  const r1 = reviews.find((r) => r.id === 1);
  const r66 = reviews.find((r) => r.id === 66);
  const r2 = reviews.find((r) => r.id === 2);

  return (
    <>
      <ArticleSchema
        title="お話だけで稼ぐロードマップ｜最初の3か月でやること"
        description="アダルトは避けたいけれど、ちゃんと稼ぎたい。お話で早く軌道に乗るコツと最初の3か月でやることを、元保育士で現役チャットレディ4年目のみなみが正直に解説します。収入は時給で、条件つき・保証ではないとお伝えします。"
        url="https://marumie-chatre.github.io/style/honki"
        datePublished="2026-06-28"
        dateModified="2026-06-28"
      />
      <BreadcrumbSchema items={[
        { name: "トップ", path: "/" },
        { name: "働き方から探す", path: "/style" },
        { name: "お話で稼ぐロードマップ", path: "/style/honki" },
      ]} />
      <FAQSchema items={FAQS} />

      <L3ArticleShell
        coverImage={{ src: "/本気で稼ぐ.jpg", alt: "最初の3か月が大事。お話だけで稼ぐロードマップ" }}
        breadcrumb={[
          { l: "トップ", href: "/" },
          { l: "働き方から探す", href: "/style" },
          { l: "お話で稼ぐロードマップ" },
        ]}
        kicker="働き方｜本気で稼ぎたい人へ"
        title={<>最初の3か月が大事。<br />お話だけで稼ぐロードマップ</>}
        meta={{ date: "2026.06.28", readTime: "約7分で読めます" }}
      >

        <article className="col-article-body">

          <p>「アダルトは避けたい。でも、せっかくやるならちゃんと稼ぎたい」。その願いは、ちゃんと叶います。ただ、やみくもに頑張るより順番が大事。<MarkerSpan>お話で稼ぐ人は、才能がある人ではなく、早く軌道に乗るコツを知って、素直に続けた人</MarkerSpan>です。現役チャットレディ4年目の私、みなみが、最初の3か月でやることを具体的にお話ししますね。</p>

          <p>先に正直なことを。お話（ノンアダルト）は、1回あたりの単価がアダルトより控えめで、<MarkerSpan>“いきなり高収入”より“続けて伸ばす”タイプ</MarkerSpan>です。だからこそ、最初の立ち上がりを丁寧にやると、その後がぐっと楽になります。この記事は、アダルトは避けたい、堅実に伸ばしたいあなた向け。焦らず軌道に乗せたい方は、このまま読み進めてくださいね。</p>

          <TipBox title="この記事でわかること">
            <CleanList items={[
              "お話だけで「早く軌道に乗る」9つのコツ",
              "自分に合うジャンルの選び方",
              "最初の3か月でやること",
              "収入の目安（時給で・条件つき・保証ではない）",
              "つまずかないための注意点",
            ]} />
          </TipBox>

          <nav aria-label="もくじ" style={{ background: "var(--cream)", border: "1px solid var(--border-green)", borderRadius: "12px", padding: "16px 18px", margin: "24px 0" }}>
            <div style={{ fontSize: "12px", fontWeight: 800, color: "var(--green-dark)", marginBottom: "10px" }}>もくじ</div>
            <ol style={{ margin: 0, paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "8px" }}>
              {TOC.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} style={{ color: "var(--text)", textDecoration: "none", fontWeight: 700, fontSize: "13.5px" }}>{t.label}</a>
                </li>
              ))}
            </ol>
          </nav>

          <h2 id="points">早く軌道に乗る9つのポイント</h2>
          <p>私や、伸びていく子たちが実際にやっていることです。どれも特別な才能はいりません。ひとつずつ、なぜ効くのかも添えて説明しますね。</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", margin: "18px 0 8px" }}>
            {STEPS.map((s) => (
              <div key={s.n} style={{
                display: "flex", gap: "13px", alignItems: "flex-start",
                background: "#fff", border: "1px solid #E4E8DA", borderRadius: "12px",
                padding: "14px 16px",
              }}>
                <span style={{
                  flexShrink: 0, width: "30px", height: "30px", borderRadius: "10px",
                  background: "var(--green-pale)", color: "var(--green-dark)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 900, fontSize: "15px",
                  fontFamily: '"Zen Maru Gothic", sans-serif',
                }}>{s.n}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "15px", fontWeight: 800, color: "var(--text)", lineHeight: 1.5, marginBottom: "4px" }}>{s.t}</div>
                  <div style={{ fontSize: "13.5px", lineHeight: 1.9, color: "#5e4a3a" }}>{s.d}</div>
                </div>
              </div>
            ))}
          </div>

          <h2 id="genre">自分に合うジャンルを選ぶ</h2>
          <p>同じお話でも、自分の雰囲気に合うジャンルを選ぶと、ぐっと楽になります。</p>

          <TipBox title="ジャンルの目安（どちらもノンアダルトで成立します）">
            <strong>ノンアダルト（18歳〜20代前半が多い）</strong>：アイドルっぽい・初々しいフレッシュな雰囲気が活きる<br />
            <strong>マダムジャンル（20代後半以降が多い）</strong>：落ち着いた雰囲気・包容力で安心感を出せる
          </TipBox>

          <p>年齢でどちらが上ということはありません。<MarkerSpan>自分のキャラクターに合うほうを選ぶと、無理なく続けられて、結果的に稼ぎやすい</MarkerSpan>んです。迷ったら、ここもスタッフに相談を。</p>

          <h2>人によっては合う方法（注意つき）</h2>
          <p>万人向けではないけれど、合う人には効く方法も。ここは注意点とセットでお伝えします。</p>

          <WarningBox title="SNS集客は“身バレ対策とセット”で">
            SNSでファンを増やす方法もありますが、<strong>身バレのリスクがいちばん高いのもSNS</strong>です。やるなら、私生活のアカウントと完全に分け、私物や配信で使った写真は絶対に載せないこと。少しでも不安なら、無理にやらなくて大丈夫です。
          </WarningBox>

          <ReadAlso href="/q/barebure">配信中にお客さんにバレる？身バレの仕組みと対策</ReadAlso>

          <p>なお、瞬発的な単価で言えばアダルトジャンルのほうが上です。ただ、このサイトは「アダルトは避けたい」あなたを前提にしています。<MarkerSpan>アダルトを無理に勧めることはしません</MarkerSpan>。お話で、自分のペースで伸ばす道をいっしょに見ていきましょう。</p>

          <h2 id="income">収入の目安｜“時給”で、条件つきで、正直に</h2>
          <p>いちばん気になるお金の話。誇張せず、条件つきでお伝えします。あくまで私の経験で、個人差が大きく、保証できる数字ではありません。</p>

          <div style={{ width: "100%", borderRadius: "12px", overflow: "hidden", margin: "18px 0" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/3か月ロードマップ.jpg" alt="最初の3か月のロードマップ：1か月目は基礎づくり、2か月目はアドバイスを実行、3か月目で軌道に乗る" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>

          <PointBox title="最初の3か月の目安（みなみの基準・個人差あり・保証ではない）">
            <strong>基準ペース</strong>：週2〜3回 × 5時間くらいから<br />
            <strong>1か月目</strong>：基礎作りの時期（焦らなくて大丈夫）<br />
            <strong>2か月目</strong>：アドバイスされたことを、素直に実行していく<br />
            <strong>しっかり入れる人が上のコツを本気でやれば</strong>：週5回 × 5時間で時給3,000円ペースも意外と現実的<br />
            ※数字は条件つきの目安で、保証ではありません。
          </PointBox>

          <p>なかには初月からレギュラーで入って、きちんと稼ぐ子もいます。一方で、<MarkerSpan>副業で始める人も多いので、配信ペースによっては基礎作りに1〜3か月を見ておくと現実的</MarkerSpan>です。大事なのは、最初の数字で一喜一憂せず、月単位で見ること。</p>

          {r1 && (
            <div className="col-article-box" style={{ borderLeft: "4px solid var(--green-dark)" }}>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "var(--green-dark)", marginBottom: "6px" }}>
                ★★★★★ {r1.office}｜{r1.style}・在籍{r1.duration}（現在も継続中）
              </p>
              <p style={{ margin: 0 }}>{r1.good}</p>
            </div>
          )}

          <h2 id="tsumazuki">つまずかないための注意点</h2>
          <p>本気な人ほど、頑張る方向を間違えると空回りします。正直に。</p>

          <TipBox title="ありがちなつまずき">
            メールや配信時間を“とにかく増やそう”と頑張りすぎて疲れる<br />
            プロフィールに自分のことを書き込みすぎる<br />
            「大手で部屋数が多いから」で選び、入ってから放置される<br />
            「お話だけで稼げる」に惹かれたら、実際はアダルトを勧められた
          </TipBox>

          <p>見抜くポイントはシンプル。<MarkerSpan>サポートより「報酬の高さ」を強く押し出すお店は、アダルトを勧められやすい傾向</MarkerSpan>があります。逆に、稼ぎ方を一から教えてくれるお店なら、こうしたつまずきは起きにくいですよ。</p>

          <h2 id="kankyo">軌道に乗るいちばんの近道は「教われる環境」</h2>

          <div style={{ width: "100%", borderRadius: "12px", overflow: "hidden", margin: "18px 0" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/教われる環境-相談.jpg" alt="配信ブースで女性スタッフに相談しながら学べる環境" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>

          <p>ここまでの9つのコツも、一人で手探りするより、教われる環境があるほうが圧倒的に早く身につきます。実際、ランキング上位で人気の女性の多くは、報酬率の高い在宅ではなく、<MarkerSpan>スタッフに相談できる通勤でコツコツ配信している人たち</MarkerSpan>。見た目の率より、伸ばし方を教われるかが効くんです。</p>

          <MinamiBubble>
            報酬率が高い在宅より、<strong>通勤の子のほうが結果的に稼げているケースが多い</strong>んです。理由はシンプルで、通勤は<strong>サポートをしっかり受けられるから</strong>。お話で稼ぐコツを、その場で教われる環境って大きいんですよ。
          </MinamiBubble>

          {r66 && (
            <div className="col-article-box" style={{ borderLeft: "4px solid var(--green-dark)" }}>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "var(--green-dark)", marginBottom: "6px" }}>
                ★★★★ {r66.office}｜{r66.style}・{r66.ageGroup}・在籍{r66.duration}（現在も継続中）
              </p>
              <p style={{ margin: 0 }}>{r66.good}</p>
            </div>
          )}

          {r2 && (
            <div className="col-article-box" style={{ borderLeft: "4px solid var(--green-dark)" }}>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "var(--green-dark)", marginBottom: "6px" }}>
                ★★★★ {r2.office}｜{r2.style}・在籍{r2.duration}（現在も継続中）
              </p>
              <p style={{ margin: 0 }}>{r2.good}</p>
            </div>
          )}

          <h2>教わりながら伸ばしたい人と相性がいい、ノンアダルト専門のフェアリーテイル</h2>
          <p>「アダルトは避けたい、でも稼ぎ方はちゃんと教わりたい」。そんな人と相性がいいのが<strong>ノンアダルト専門のフェアリーテイル</strong>です。正直に言うと、<MarkerSpan>ノンアダルト専門なので一回ごとの単価は控えめで、“すぐ高収入”タイプではありません</MarkerSpan>。その代わり、お話で稼ぐノウハウが体系化されていて、ここまでの9つのコツを段階的に教われます。早く軌道に乗りたい人にこそ、教われる環境は近道になります。</p>

          <h2>みなみの経験｜順番どおりにやったら、ちゃんと伸びた</h2>
          <p>最後に私の話を少しだけ。元保育士の私も、最初は何も分かりませんでした。でも、スタッフに相談しながら、時間帯を合わせて、メールを丁寧に書いて、常連さんを大事にして——<MarkerSpan>順番どおりにやっていったら、3か月を過ぎたあたりから、ちゃんと手応えが出てきました</MarkerSpan>。一発で大きく、ではなく、軌道に乗せて伸ばす。これがお話で稼ぐいちばん確実な道だと、4年続けて実感しています。焦らなくて大丈夫。まずは話を聞いてみてくださいね。</p>

          <h2 id="faq">よくある質問</h2>
          {FAQS.map((f) => (
            <div key={f.q} className="col-article-box">
              <p style={{ fontWeight: 700, color: "var(--green-dark)", marginBottom: "6px" }}>Q. {f.q}</p>
              <p style={{ margin: 0 }}>A. {f.a}</p>
            </div>
          ))}

          <h2>まとめ：順番を知れば、お話でもちゃんと稼げる</h2>
          <PointBox title="この記事のまとめ">
            お話で稼ぐコツは、早く軌道に乗るための順番を知ること<br />
            時間帯・メール・固定配信・常連づくり・サムネイル・表情・聞く会話、そしてスタッフと作戦を練る<br />
            最初の3か月は基礎作りと割り切って、素直に実行<br />
            収入は時給で、条件つき・保証ではないと心得て、月単位で見る<br />
            教われる環境を選べば、遠回りせずに伸ばせる
          </PointBox>

          <div className="col-article-warn">
            ※この記事は一般的な情報提供・公開情報・現役チャットレディ4年（元保育士）の経験をもとに作成しています。収入は条件つきの目安で個人差が大きく、保証ではありません。サイトや事務所の対応は変わることがあるため、最新は各サイト・面接でご確認ください。
          </div>

          <RelatedList items={[
            { href: "/style/non-adult", label: "ノンアダルトは本当にお話だけ？サポート・収入と安心の選び方" },
            { href: "/style/tsukin", label: "通勤型チャットレディ事務所｜選び方" },
            { href: "/q/jimusho-erabi", label: "チャットレディ事務所の選び方｜失敗しない見極め方" },
            { href: "/q/barebure", label: "配信中にお客さんにバレる？身バレの仕組みと対策" },
          ]} />

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/jimusho" className="btn-main">自分に合う事務所をさがす →</Link>
          </div>
        </article>
      </L3ArticleShell>
    </>
  );
}
