import Link from "next/link";
import Image from "next/image";
import { Icon } from "../Icon";

export const metadata = {
  title: "エリア別チャットレディ事務所｜まるみえチャトレ",
  description: "新宿・池袋・錦糸町・上野・福岡のエリア別にチャットレディ事務所を比較。元保育士の現役チャットレディが、各エリアの特性と評価が高い事務所をお伝えします。",
};

// エリア情報を配列で管理（追加したい時はここに足すだけでOK）
const areas = [
  {
    slug: "shinjuku",
    name: "新宿",
    iconName: "Pin" as const,
    image: "/area-shinjuku.jpg",
    catchphrase: "業界最大の激戦区",
    summary: "約50店舗の中から失敗しない選び方。",
    storeCount: "約50店舗",
    target: "選択肢の多さを活かしたい方",
  },
  {
    slug: "shibuya",
    name: "渋谷",
    iconName: "Pin" as const,
    image: "/area-shibuya.jpg",
    catchphrase: "東京の中心・若年層多め",
    summary: "20店舗以上。20代キャストが中心で関東圏から通える。",
    storeCount: "20店舗以上",
    target: "アクセス重視の方",
  },
  {
    slug: "ikebukuro",
    name: "池袋",
    iconName: "Pin" as const,
    image: "/area-ikebukuro.jpg",
    catchphrase: "学生街・初心者に優しい",
    summary: "18店舗以上。同年代が多く浮かない雰囲気。",
    storeCount: "18店舗以上",
    target: "若年層・初心者の方",
  },
  {
    slug: "kinshicho",
    name: "錦糸町",
    iconName: "Cafe" as const,
    image: "/area-kinshicho.jpg",
    catchphrase: "居心地で選ぶエリア",
    summary: "新宿・池袋の慌ただしさが苦手な方向け。",
    storeCount: "8店舗前後",
    target: "居心地で選びたい方",
  },
  {
    slug: "ueno",
    name: "上野",
    iconName: "Pin" as const,
    image: "/area-ueno.jpg",
    catchphrase: "落ち着いた大人のエリア",
    summary: "観光客の人混みに紛れて目立たずに働ける。",
    storeCount: "7〜10店舗",
    target: "大人の雰囲気を求める方",
  },
  {
    slug: "fukuoka",
    name: "福岡",
    iconName: "Pin" as const,
    image: "/area-fukuoka.jpg",
    catchphrase: "九州最大級の激戦区",
    summary: "県内130店舗以上から「数より質」で選ぶ。",
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

        <p>自分の通えるエリアで、安心して始められる事務所を探したい方へ。</p>
        <p>同じ事務所でも、エリアによって店舗の雰囲気や働く方の年齢層が変わります。<strong>「どこに通うか」</strong>も含めて選ぶと、より自分に合う場所が見つかりますよ。</p>

        <div className="col-article-box">
          <p>各エリアページで、地域の特徴・働いた方の声・おすすめ事務所TOP3をまとめています。<br />事務所そのものの比較は <Link href="/jimusho">掲載事務所の比較ランキング</Link> へどうぞ。</p>
        </div>

        {/* エリアカードグリッド */}
        <section className="area-hub-section">
          <h2>エリア一覧</h2>
          <div className="area-grid">
            {areas.map((area) => {
              const IconComp = Icon[area.iconName];
              return (
              <Link href={`/area/${area.slug}`} key={area.slug} className="area-card">
                <div className="area-card-image-wrap">
                  <Image
                    src={area.image}
                    alt={`${area.name}エリアの街並み`}
                    width={400}
                    height={240}
                    className="area-card-image"
                  />
                  <span className="area-card-icon" style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    width: 36, height: 36, borderRadius: "50%",
                    background: "var(--white)", color: "var(--green-dark)",
                  }}>
                    <IconComp size={18} />
                  </span>
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
              );
            })}
          </div>
        </section>

        <h2>エリア選びの3つの基準</h2>

        <h3>① 自宅から30分以内で通えるか</h3>
        <p>1時間以上かけて通うと、3ヶ月後には負担が増えて辞めるきっかけになりやすいんです。<strong>自宅から最も近いエリア</strong>を選ぶのが原則ですよ。</p>

        <h3>② 自分が浮かない雰囲気か</h3>
        <p>池袋は若年層多め、上野は大人エリア、錦糸町は落ち着いた雰囲気。「自分が浮かない場所」を選ぶと、長く続けやすくなりますよ。</p>

        <h3>③ 選択肢の多さ</h3>
        <p>新宿・池袋・福岡は事務所数が多くて比較しやすい反面、迷いやすい。錦糸町・上野は選択肢が絞られる分、決めやすいです。<strong>「比較に疲れたくない」方は、絞られたエリアの方が向いています</strong>。</p>

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
