import Link from "next/link";
import type { ReactNode } from "react";
import { QABlock, PointBox, TipBox, WarningBox, MarkerSpan, MinamiBubble, ReadAlso } from "../../ArticleParts";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "../../StructuredData";
import { L3ArticleShell } from "../../L3";

export const metadata = {
  alternates: { canonical: "/q/mensetsu" },
  title: "チャットレディの面接って何するの？　流れ・持ち物・体験入店まで",
  description:
    "チャットレディの面接って何をするの？ 応募から面接・体験入店までの流れ、持ち物、聞かれること、こちらが聞いて見極めるポイントを、元保育士で現役4年のみなみが正直に解説。落とす試験ではないので、怖がらなくて大丈夫です。",
};

const FAQS = [
  {
    q: "チャットレディの面接って落ちますか？",
    a: "落とすための試験ではなく、面談に近いものです。お仕事の説明を受けて、シフトの希望や不安を話す場なので、よほど失礼な態度でなければ心配いりません。むしろ、こちらが事務所を見極める場だと思って、疑問を遠慮なく聞いてみてください。",
  },
  {
    q: "面接の持ち物・服装は？",
    a: "顔写真付きの身分証（運転免許証・パスポート・マイナンバーカードなど）が必須です。お店によっては印鑑が要ることも。履歴書はいりません。服装は普段着でOKで、清潔感があれば大丈夫です。",
  },
  {
    q: "体験入店したら、そのまま入店させられませんか？",
    a: "いいえ。体験入店はリスクなくお試しできる仕組みで、合わなければ体験だけで帰れます。メイクやサムネイル写真の撮影・操作説明をして少し配信してみる時間です。良いお店は決断を急かしません。",
  },
];

// 応募〜体験入店の流れ（番号カードで縦並び・スマホ最適）
const STEPS: { title: string; body: ReactNode }[] = [
  {
    title: "応募する",
    body: <>気になるお店に、名前・年齢・連絡先（LINEやメール）を送るだけ。履歴書はいりません。</>,
  },
  {
    title: "日程を決める",
    body: <>スタッフから連絡が来て、面接（説明会）の日を相談して決めます。</>,
  },
  {
    title: "当日、待ち合わせ",
    body: <>多くのお店は、女性のプライバシーを守るため、いきなり店舗に案内せず近くの待ち合わせ場所を経由します。徒歩5〜10分が多いので、合流の時間も見て余裕を持って向かいましょう。</>,
  },
  {
    title: "面接（説明）",
    body: <>お仕事の説明を受け、希望や不安を話します。30分〜1時間くらい。丁寧なお店ほどじっくり聞いてくれます。</>,
  },
  {
    title: "体験入店（希望すれば）",
    body: <>その場で試せるお店も。メイクやサムネイル写真の撮影、配信画面の操作説明などをして、実際に少しだけ配信してみます。</>,
  },
];

const TOC = [
  { id: "nagare", label: "応募から体験入店までの流れ" },
  { id: "kikareru", label: "面接で聞かれることは？" },
  { id: "mikiwame", label: "面接は“こちらが見極める場”" },
  { id: "mochimono", label: "持ち物・服装は？" },
  { id: "taiken", label: "体験入店って、無理やり入店させられない？" },
  { id: "hatsu", label: "初めての配信、緊張しても大丈夫" },
  { id: "sign", label: "急かさない事務所を選ぶ｜良いサイン・気になるサイン" },
  { id: "faq", label: "よくある質問" },
  { id: "matome", label: "まとめ" },
];

// /profile の枠内リストに合わせ、標準の箇条書きで詰めて整列
function CleanList({ items }: { items: ReactNode[] }) {
  return (
    <ul style={{ margin: 0, paddingLeft: 18, fontSize: "13px", lineHeight: 1.9, color: "#5e4a3a" }}>
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  );
}

export default function QMensetsu() {
  return (
    <>
      <ArticleSchema
        title="チャットレディの面接って何するの？　流れ・持ち物・体験入店まで"
        description="応募から面接・体験入店までの流れ、持ち物、聞かれること、こちらが聞いて見極めるポイントを、元保育士で現役4年のみなみが正直に解説。落とす試験ではないので、怖がらなくて大丈夫です。"
        url="https://marumie-chatre.vercel.app/q/mensetsu"
        datePublished="2026-06-27"
      />
      <BreadcrumbSchema
        items={[
          { name: "トップ", path: "/" },
          { name: "お悩みから探す", path: "/q" },
          { name: "面接・体験入店の流れ", path: "/q/mensetsu" },
        ]}
      />
      <FAQSchema items={FAQS} />

      <L3ArticleShell
        coverImage={{ src: "/面接から体験入店の流れ.jpg", alt: "チャットレディの面接って何するの？　流れ・持ち物・体験入店まで" }}
        breadcrumb={[
          { l: "トップ", href: "/" },
          { l: "お悩みから探す", href: "/q" },
          { l: "面接・体験入店の流れ" },
        ]}
        kicker="お悩み｜面接・体験入店"
        title={
          <>
            チャットレディの面接って何するの？
            <br />
            流れ・持ち物・体験入店まで
          </>
        }
        meta={{ date: "2026.06.27", readTime: "約6分で読めます" }}
      >
        <article className="col-article-body">
          <p>
            「面接って厳しいのかな」「変なこと聞かれたら…」「体験入店って、無理やり入店させられそうで怖い」。応募ボタンの前で固まってしまう気持ち、よく分かります。私、みなみも元保育士で、4年前に初めて応募したときは、当日まで何度もLINEを見返してドキドキしていました。
          </p>
          <p>
            でも、先に安心してほしいことを言いますね。
            <MarkerSpan>チャットレディの面接は、落とすための試験ではなく、「面談」に近いもの</MarkerSpan>
            です。お仕事の説明を受けて、希望を伝えて、不安をなくす場。流れが分かれば、怖くありません。当日のイメージから、正直にお話しします。
          </p>

          <TipBox title="この記事でわかること">
            <CleanList
              items={[
                "応募から面接・体験入店までの流れ（当日のイメージ）",
                "面接で聞かれること・持ち物（落とす試験ではないこと）",
                "こちらから聞いて“事務所を見極める”ポイント",
                "体験入店の中身と、急かさない事務所の選び方",
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

          <h2 id="nagare">応募から体験入店までの流れ</h2>
          <p>まずは全体像から。だいたいこんな順番で進みます。</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", margin: "22px 0" }}>
            {STEPS.map((s, i) => (
              <div
                key={i}
                style={{ background: "#fff", border: "1px solid var(--border-green)", borderRadius: "12px", padding: "16px 18px" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <span
                    style={{
                      flexShrink: 0, width: "28px", height: "28px", borderRadius: "8px",
                      background: "var(--green-pale)", color: "var(--green-dark)",
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      fontWeight: 700, fontSize: "15px",
                    }}
                  >
                    {i + 1}
                  </span>
                  <span style={{ fontSize: "15px", fontWeight: 700, color: "var(--text)", lineHeight: 1.5 }}>{s.title}</span>
                </div>
                <p style={{ fontSize: "13.5px", lineHeight: 1.85, color: "var(--text-mid)", margin: 0, paddingLeft: "38px" }}>{s.body}</p>
              </div>
            ))}
          </div>
          <p>
            ここで大事なのは、
            <MarkerSpan>どのステップも「合わなければ進まなくていい」</MarkerSpan>
            ということ。説明だけ聞いて帰っても、まったく問題ありません。
          </p>

          <h2 id="kikareru">面接で聞かれることは？</h2>
          <p>身構えなくて大丈夫。志望動機や長所短所を問い詰められる、いわゆる就活の面接とは違います。聞かれるのは、だいたいこのくらいです。</p>
          <TipBox title="面接で聞かれること">
            <CleanList
              items={[
                "チャットレディの経験があるか",
                "週に何回・どのくらい入れそうか（シフトの希望）",
                "始めようと思ったきっかけ",
                "アダルトかノンアダルトか、どう働きたいか",
              ]}
            />
          </TipBox>
          <p>
            おしゃべりの延長のような雰囲気で進みます。希望のシフトだけ、ざっくり考えていくとスムーズです。
            <MarkerSpan>「週に何回・何時間くらい入れそうか」をメモしておくと、担当者が稼ぎの見通しを一緒に立ててくれます。</MarkerSpan>
          </p>

          <h2 id="mikiwame">じつは、面接は“こちらが見極める場”でもあります</h2>
          <p>
            ここが、求人サイトにあまり書かれていない大事なところ。面接は「選ばれる場」だと思いがちですが、
            <MarkerSpan>あなたが事務所を見極める場でもあります。</MarkerSpan>
            疑問は、ここで遠慮なく聞いて大丈夫。答え方に、そのお店のサポートの質が表れます。
          </p>
          <TipBox title="こちらから聞いておくと安心なこと">
            <CleanList
              items={[
                "ノンアダルトで続けたいけど、大丈夫ですか？",
                "身バレ対策は具体的にどうしていますか？",
                "お話だけで稼ぐコツは、どう教えてもらえますか？",
                "報酬の仕組み（率や、引かれる費用がないか）を教えてください",
              ]}
            />
          </TipBox>
          <p>こうした質問に、嫌な顔をせず具体的に答えてくれるお店なら、入ってからも安心です。</p>

          <h2 id="mochimono">持ち物・服装は？</h2>
          <p>特別な準備はいりません。</p>
          <TipBox title="持ち物・服装の目安">
            <CleanList
              items={[
                <><strong>顔写真付きの身分証</strong>（運転免許証・パスポート・マイナンバーカードなど）。年齢確認に必須です</>,
                <>お店によっては<strong>印鑑</strong>が要ることも。事前に確認しておくと安心</>,
                <><strong>履歴書は不要</strong></>,
                <>服装は<strong>普段着でOK</strong>。清潔感があれば大丈夫です</>,
              ]}
            />
          </TipBox>

          <h2 id="taiken">体験入店って、無理やり入店させられない？</h2>
          <p>
            「体験」と聞くと身構えますが、
            <MarkerSpan>体験入店は“リスクなくお試しできる”仕組み</MarkerSpan>
            で、そのまま入店を強制されるものではありません。合わなければ、体験だけで帰って大丈夫です。
          </p>
          <p>
            中身は、メイクやサムネイル写真の撮影、配信画面の操作説明など。準備に時間がかかるので、トータルで3〜4時間ほどになるお店が多いです。体験の報酬は、最低賃金くらいのお店もあれば、当日の混み具合によっては数万円になる人も。
            <MarkerSpan>お客さんの数は日によって変わるので、稼げる額は運の要素も大きい</MarkerSpan>
            です。「いくら稼げた」より、「ここで続けられそうか」を見る時間だと思ってくださいね。
          </p>

          <h2 id="hatsu">初めての配信、緊張しても大丈夫</h2>
          <p>体験や初日は、誰でも緊張します。でも、ちゃんとフォローしてもらえます。</p>
          <PointBox title="現場のフォロー">
            スタッフが画面越しに「こう返すといいよ」と指示してくれるので、会話が苦手でもその場でコツをつかめます。接客のポイントを口頭で解説してくれたり、終わったあとに振り返りの時間をとってくれるお店も。<strong>良いお店ほど、決断を急かしません。</strong>
          </PointBox>

          <h2 id="sign">急かさない事務所を選ぶ｜良いサイン・気になるサイン</h2>
          <p>最後に、見分け方を。面接・体験での“空気”に、そのお店の方針が出ます。</p>
          <TipBox title="安心できるサイン">
            <CleanList
              items={[
                "説明がていねいで、質問にちゃんと答えてくれる",
                "「ノンアダルトで続けたい」に即答してくれる",
                "その場で入店を急かさない（持ち帰ってOK）",
              ]}
            />
          </TipBox>
          <WarningBox title="気になるサイン">
            <CleanList
              items={[
                <>入店を「今日決めて」と<strong>急かす</strong></>,
                <>「稼ぎたいならアダルトも」と<strong>勧めてくる</strong></>,
                <><strong>海外サイト</strong>での配信を勧めてくる</>,
                <><strong>「最大◯%」「すぐ稼げる」</strong>など、報酬の派手な数字ばかり推して実態がわからない</>,
                <>質問をはぐらかす・<strong>希望（ノンアダルト/顔出しなし）を流す</strong></>,
              ]}
            />
          </WarningBox>
          <ReadAlso href="/q/ayashii">チャットレディは怪しい？危ない？現役4年が正直に答えます</ReadAlso>
          <p>
            少しでも違和感があれば、その場で帰って大丈夫。良いお店は引き止めません。とはいえ、何社も面接を受けて回るのは大変ですよね。
            <MarkerSpan>先にこのサイトのランキングや口コミで見比べておけば、納得できる一社に絞って会いに行けます。</MarkerSpan>
            急かす店で即決しないことだけ、覚えておいてください。
          </p>
          <TipBox title="実際の口コミ｜★3・2024年10月・通勤・マスク配信">
            「面接で『うちはノンアダルト専門だけど、アダルト要求が来ないわけじゃない』と、良いことだけじゃなく現実も話してくれたのが、逆に信頼できました。変に売り込まれなかったのが入店の決め手です」── フェアリーテイル
          </TipBox>

          <MinamiBubble>
            私も4年前、応募ボタンを押すまで2週間迷いました。でも実際の面接は、拍子抜けするくらい“ただの面談”。怖かったのは「知らない」からでした。私は当時、情報がなくて何社か回る遠回りをしましたが、今はランキングや口コミで先に見比べられます。だからあなたは、納得できる一社から会いに行けば大丈夫ですよ。
          </MinamiBubble>

          <h2 id="faq">よくある質問</h2>
          {FAQS.map((f) => (
            <QABlock key={f.q} q={f.q} a={f.a} />
          ))}

          <h2 id="matome">まとめ｜流れが分かれば、面接は怖くない</h2>
          <p>
            チャットレディの面接は、落とす試験ではなく「面談」に近いもの。応募→面接→希望すれば体験入店、という流れで、どのステップも合わなければ進まなくて大丈夫です。むしろ面接は、こちらが事務所を見極める場。急かさず、質問に丁寧に答えてくれるお店を選べば安心です。まずは気になるお店に、説明を聞きに行くところから始めてみてくださいね。
          </p>

          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link href="/jimusho" className="btn-main">
              自分に合う事務所を比較ランキングで見る →
            </Link>
          </div>

          <h2>あわせて読みたい</h2>
          <ul>
            <li><Link href="/q/jimusho-erabi">失敗しない！チャットレディ事務所の選び方｜初心者がつまずく5つのポイント</Link></li>
            <li><Link href="/style/non-adult">ノンアダルトは本当にお話だけ？サポート・収入と安心の選び方</Link></li>
            <li><Link href="/q/ayashii">チャットレディは怪しい？危ない？現役4年が正直に答えます</Link></li>
            <li><Link href="/q/hoikushi-baito">チャットレディは職場にバレる？　元保育士が教える、バレない副業の始め方</Link></li>
          </ul>

          <div className="col-article-warn">
            ※本記事は一般的な情報提供・公開情報・現役4年（元保育士）の経験をもとに作成しています。面接の流れ・持ち物・体験入店の内容は事務所により異なるため、最新は各お店・面接でご確認ください。
          </div>
        </article>
      </L3ArticleShell>
    </>
  );
}
