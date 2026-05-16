import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "エリア別チャットレディ事務所｜まるみえチャトレ",
  description: "新宿・池袋・錦糸町・上野・福岡のエリア別にチャットレディ事務所を比較。元保育士の現役チャットレディが、各エリアの特性と評価が高い事務所をお伝えします。",
};

// エリア情報を配列で管理（追加したい時はここに足すだけでOK）
const areas = [
  {
    slug: "shinjuku",
    name: "新宿",
    icon: "🏢",
    image: "/area-shinjuku.jpg",
    catchphrase: "業界最大の激戦区",
    summary: "約50店舗が集中する選択肢の宝庫。事務所が多すぎて選びにくい一方、選択肢の多さは関東随一。「数の中から失敗しない選び方」を重視する方向け。",
    storeCount: "約50店舗",
    target: "選択肢の多さを活かしたい方",
  },
  {
    slug: "shibuya",
    name: "渋谷",
    icon: "🛍️",
    image: "/area-shibuya.jpg",
    catchphrase: "東京の中心・若年層の街",
    summary: "渋谷駅周辺に20店舗以上が集積する激戦区。アクセス抜群で関東圏全域から通える。マンション型店舗が多く、人目につきにくい構造。",
    storeCount: "20店舗以上",
    target: "アクセスの良さを重視する方",
  },
  {
    slug: "ikebukuro",
    name: "池袋",
    icon: "🛍️",
    image: "/area-ikebukuro.jpg",
    catchphrase: "学生街・若年層多めで初心者に優しい",
    summary: "18店舗以上。同年代が多く、初心者でも浮かない雰囲気。「派手な数字に騙されない選び方」を解説。",
    storeCount: "18店舗以上",
    target: "若年層・初心者の方",
  },
  {
    slug: "kinshicho",
    name: "錦糸町",
    icon: "☕",
    image: "/area-kinshicho.jpg",
    catchphrase: "「居心地で選ぶ」を叶えられるエリア",
    summary: "新宿・池袋の慌ただしさが苦手な方向け。カフェのような居心地のよい店舗が多く、長く続けやすい。",
    storeCount: "8店舗前後",
    target: "居心地で選びたい方",
  },
  {
    slug: "ueno",
    name: "上野",
    icon: "🎨",
    image: "/area-ueno.jpg",
    catchphrase: "少し落ち着いた大人のエリア",
    summary: "美術館・博物館・上野公園など文化と賑わいが共存。観光客の人混みに紛れて目立たずに働ける。",
    storeCount: "7〜10店舗",
    target: "大人の雰囲気を求める方",
  },
  {
    slug: "fukuoka",
    name: "福岡",
    icon: "🌆",
    image: "/area-fukuoka.jpg",
    catchphrase: "九州最大級の激戦区",
    summary: "県内130店舗以上。天神・博多を中心に大手・中小事務所が多数。「数より質」で選ぶ方法を解説。",
    storeCount: "130店舗以上",
    target: "九州在住の方",
  },
];

export default function AreaHub() {
  return (
    <main>
      <section className="col-article-hero">
        <div className="col-article-inner">
          <div className="col-article-cat">エリア別ガイド</div>
          <h1 className="col-article-h1">エリアから探す<br />チャットレディ事務所</h1>
          <div className="col-article-meta">
            <span>{areas.length}エリア</span>
            <span>2026.05.08更新</span>
          </div>
        </div>
      </section>

      <article className="col-article-body">

        <p>「自分の通えるエリアで、安心して始められる事務所を探したい」</p>
        <p>このページでは、まるみえチャトレが取り上げているエリアについて、地域ごとの特性と評価が高い事務所をご紹介します。</p>
        <p>同じ事務所でも、エリアによって店舗の雰囲気や働く方の年齢層が違います。<strong>「どのエリアの店舗がいいか」も含めて事務所選びを考えていただくと、より自分に合う場所が見つかります</strong>。</p>

        <div className="col-article-box">
          <p>各エリアページでは、その地域の特性・働く方の口コミ・おすすめ事務所TOP3を解説しています。<br />事務所そのものの比較は <Link href="/jimusho">掲載事務所の比較ランキング</Link> へ。</p>
        </div>

        {/* エリアカードグリッド */}
        <section className="area-hub-section">
          <h2>エリア一覧</h2>
          <div className="area-grid">
            {areas.map((area) => (
              <Link href={`/area/${area.slug}`} key={area.slug} className="area-card">
                <div className="area-card-image-wrap">
                  <Image
                    src={area.image}
                    alt={`${area.name}エリアの街並み`}
                    width={400}
                    height={240}
                    className="area-card-image"
                  />
                  <span className="area-card-icon">{area.icon}</span>
                </div>
                <div className="area-card-body">
                  <div className="area-card-header">
                    <h3 className="area-card-name">{area.name}エリア</h3>
                    <span className="area-card-count">{area.storeCount}</span>
                  </div>
                  <p className="area-card-catch">{area.catchphrase}</p>
                  <p className="area-card-summary">{area.summary}</p>
                  <div className="area-card-target">
                    <span className="area-card-target-label">こんな方に</span>
                    <span className="area-card-target-value">{area.target}</span>
                  </div>
                  <span className="area-card-link">詳しく見る →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <h2>エリア選びの3つの基準</h2>

        <h3>① 自宅から30分以内で来られるか</h3>
        <p>女性は長時間通勤を継続しにくいので、自宅から最も近いエリアを選ぶのが原則です。1時間以上かけて通うと、最初は気合で続けられても、3ヶ月後には負担が増えて辞めるきっかけになります。</p>

        <h3>② 自分の年齢層と合う雰囲気か</h3>
        <p>池袋は若年層多め、上野は大人エリア、錦糸町は落ち着いた雰囲気など、エリアによって雰囲気が違います。「自分が浮かない場所」を選ぶことで、長く続けやすくなります。</p>

        <h3>③ 事務所選びの選択肢の多さ</h3>
        <p>新宿・池袋・福岡は事務所数が多く比較しやすい反面、迷いやすい。錦糸町・上野は選択肢が絞られる分、選びやすい傾向があります。「比較に疲れたくない」方は、選択肢が絞られたエリアの方が決断しやすいです。</p>

        <h2>もっと詳しく知りたい方へ</h2>
        <ul>
          <li><Link href="/q/barebure">配信中に客に特定されるのが怖い</Link></li>
          <li><Link href="/q/kazoku-bare">家族・親・彼氏にバレるのが怖い</Link></li>
          <li><Link href="/q/shokuba-bare">職場・会社にバレない副業の始め方</Link></li>
          <li><Link href="/q/ayashii">チャトレって怪しくない？危なくない？</Link></li>
          <li><Link href="/q/shoshinsha">初心者が安心して始められる事務所</Link></li>
        </ul>

        <div style={{textAlign:"center", marginTop:"48px"}}>
          <Link href="/jimusho" className="btn-main">掲載事務所の比較ランキングを見る →</Link>
        </div>
      </article>
    </main>
  );
}
