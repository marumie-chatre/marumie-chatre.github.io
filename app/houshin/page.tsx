import Link from "next/link";
import { ArticleSchema, BreadcrumbSchema } from "../StructuredData";
import { L3ArticleShell } from "../L3";
import { PointBox, TipBox, WarningBox, MinamiBubble, ReadAlso, RelatedList } from "../ArticleParts";

export const metadata = {
  alternates: { canonical: "/houshin" },
  title: "まるみえチャトレの約束｜広告ではなく、ほんとうのことを｜まるみえチャトレ",
  description: "まるみえチャトレの運営方針。広告費で順位を変えない・良い点も気になる点も両方書く・検証と実体験で書く・口コミは本物だけ。真面目に働きたい女性が安心して選べるための、私たちの約束です。",
};

export default function HoushinPage() {
  return (
    <>
      <ArticleSchema
        title="まるみえチャトレの約束｜広告ではなく、ほんとうのことを"
        description="広告費で順位を変えない・良い点も気になる点も両方書く・検証と実体験で書く・口コミは本物だけ。真面目に働きたい女性が安心して選べるための、私たちの運営方針です。"
        url="https://marumie-chatre.vercel.app/houshin"
        datePublished="2026-06-24"
      />
      <BreadcrumbSchema items={[
        { name: "トップ", path: "/" },
        { name: "私たちの約束", path: "/houshin" },
      ]} />

      <L3ArticleShell
        breadcrumb={[
          { l: "トップ", href: "/" },
          { l: "私たちの約束" },
        ]}
        kicker="運営方針｜私たちの約束"
        title={<>広告ではなく、<br />ほんとうのことを。</>}
        meta={{ date: "2026.06.24", readTime: "約3分で読めます" }}
      >

        <article className="col-article-body">

          <p>「チャットレディを始めてみたいけど、どのお店を選べばいいか分からない」「求人は良いことばかりで、入ってから“思ってたのと違う”が怖い」——まるみえチャトレは、そんな<strong>真面目に働きたい女性が、安心してお店を選べるように</strong>作った比較メディアです。</p>

          <p>私たちが大事にしているのは、たったひとつ。<strong>広告のためではなく、ほんとうのことを書く</strong>ということ。このページでは、その約束をはっきりお伝えします。</p>

          <h2>なぜ、このサイトを作ったのか</h2>
          <p>チャットレディの求人サイトやランキングは、<strong>広告費やアフィリエイト報酬で順位が決まっていること</strong>があります。「一番おすすめ」と書かれたお店が、実は一番広告費を払っただけ、ということも。</p>
          <p>それだと、本当に自分に合うお店は見つけにくいですよね。だからまるみえチャトレは、<strong>入ってからじゃないと分からないことを、先に正直に伝える</strong>ことにしました。</p>

          <h2>まるみえチャトレの、5つの約束</h2>

          <PointBox title="① 広告費で順位は変えません">
            おすすめ順は、公開している<strong>5つの評価基準だけ</strong>で決めます。広告費の多さで順位は動かしません。
          </PointBox>
          <ReadAlso href="/hyoka-kijun">評価基準のすべてを見る</ReadAlso>

          <PointBox title="② 良い点も、気になる点も、両方書きます">
            お店の魅力だけでなく、<strong>応募前に知っておきたい“気になる点”も正直に</strong>。片方しか書かないのは、求人広告と同じになってしまうから。
          </PointBox>

          <PointBox title="③ 検証と実体験をもとに書きます">
            書き手は、業界を実際に見てきた経験者です。<strong>調べたこと・体験したことをもとに</strong>、感覚ではなく根拠のある言葉でお伝えします。
          </PointBox>
          <ReadAlso href="/profile">このサイトを作った人</ReadAlso>

          <PointBox title="④ 口コミは、本物だけ。作りません">
            いただいた声を、<strong>投稿のルールにそってそのまま</strong>掲載します。サイト側が口コミを創作することは、絶対にしません。
          </PointBox>
          <ReadAlso href="/guideline">口コミ投稿ガイドラインを見る</ReadAlso>

          <PointBox title="⑤ 競合を品なくけなさず、誇大な数字に流されません">
            他社をむやみに悪く書くことはしません。報酬も、<strong>「在宅40%・通勤30%」という業界の標準</strong>を正直にお伝えし、「最大時給◯円」のような過度な期待はあおりません。
          </PointBox>

          <h2>私たちが「やらないこと」</h2>
          <WarningBox title="この3つは、絶対にしません">
            ・偽の口コミ・体験談を作ること<br />
            ・広告費の多さで順位を上げること<br />
            ・「絶対に稼げる」「最大時給◯円」のような、過度に期待をあおる見せ方
          </WarningBox>
          <p>これらは、あなたの信頼を裏切る行為だと考えています。だから、やりません。</p>

          <MinamiBubble>
            私自身、業界を見てきて「ここはちゃんと伝えなきゃ」と思ったことを、そのまま書いています。きれいごとだけじゃなく、正直に。あなたが後悔しないお店選びの、隣にいられたら嬉しいです。
          </MinamiBubble>

          <h2>安心して、選んでください</h2>
          <p>このサイトの情報が、あなたの「自分に合うお店」を見つける手がかりになればうれしいです。気になることがあれば、まずは気軽に比較から始めてみてくださいね。</p>

          <RelatedList title="あわせて読みたい" items={[
            { href: "/hyoka-kijun", label: "5つの評価基準｜順位の決め方をすべて公開" },
            { href: "/profile", label: "このサイトを作った人（運営者プロフィール）" },
            { href: "/guideline", label: "口コミ投稿ガイドライン" },
            { href: "/q/jimusho-erabi", label: "チャットレディ事務所の選び方" },
          ]} />

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/jimusho" className="btn-main">自分に合う事務所を比較ランキングで見る →</Link>
          </div>
        </article>
      </L3ArticleShell>
    </>
  );
}
