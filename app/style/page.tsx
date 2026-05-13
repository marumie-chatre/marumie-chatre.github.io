import Link from "next/link";

export const metadata = {
  title: "チャットレディの働き方ガイド｜4つの選択肢と自分に合う事務所の選び方｜まるみえチャトレ",
  description: "チャットレディの「在宅」「通勤」「ノンアダルト専門」「バーチャル」4つの働き方を比較。自分に合う事務所の選び方を、現役チャットレディが解説します。",
};

export default function StyleHubPage() {
  return (
    <main>

      {/* HERO */}
      <section className="hero" style={{paddingBottom:"64px"}}>
        <div className="hero-inner" style={{maxWidth:"720px", margin:"0 auto", textAlign:"left"}}>
          <p className="eyebrow">STYLES</p>
          <h1 className="hero-h1" style={{fontSize:"clamp(26px,3.5vw,38px)"}}>
            働き方ガイド｜<br /><em>4つの選択肢から自分に合う事務所を選ぶ</em>
          </h1>
          <p className="hero-lead" style={{marginBottom:"0"}}>
            チャットレディには、「在宅」「通勤」「ノンアダルト専門」「バーチャル」の4つの働き方があるんです。<br />
            ここではそれぞれの違いと、自分に合う働き方を一緒に見ていきましょう。
          </p>
        </div>
      </section>

      {/* 4つの働き方 */}
      <section className="section" style={{background:"var(--cream)"}}>
        <div className="si" style={{maxWidth:"1080px"}}>
          <p className="eyebrow">4 STYLES</p>
          <h2 className="sec-h" style={{marginBottom:"40px"}}>チャットレディの4つの働き方</h2>

          <div className="area-grid">

            <Link href="/style/zaitaku" className="area-card">
              <div className="area-card-body">
                <div className="area-card-header">
                  <h3 className="area-card-name">🏠 在宅型</h3>
                  <span className="area-card-count">副業向け</span>
                </div>
                <p className="area-card-catch">お家で気軽にスタート</p>
                <p className="area-card-summary">おうちのパソコンやスマホでそのまま配信。通勤しなくていいから、副業や育児中の方にもぴったりなんです。ただ、ひとりで稼ぎ方を覚えていくのは、ちょっとハードルが高めかもしれません。</p>
                <div className="area-card-target">
                  <span className="area-card-target-label">こんな方に</span>
                  <span className="area-card-target-value">育児中・本業がある方</span>
                </div>
                <span className="area-card-link">詳しく見る →</span>
              </div>
            </Link>

            <Link href="/style/tsukin" className="area-card">
              <div className="area-card-body">
                <div className="area-card-header">
                  <h3 className="area-card-name">🏢 通勤型</h3>
                  <span className="area-card-count">本格派向け</span>
                </div>
                <p className="area-card-catch">防音個室でのびのび配信</p>
                <p className="area-card-summary">事務所の防音個室でのびのび配信できて、スタッフから直接サポートがあるから、常連さんが早く着くんです。「本気で稼ぎたい」と思っている方には、まず通勤型がおすすめ。</p>
                <div className="area-card-target">
                  <span className="area-card-target-label">こんな方に</span>
                  <span className="area-card-target-value">本気で稼ぎたい方</span>
                </div>
                <span className="area-card-link">詳しく見る →</span>
              </div>
            </Link>

            <Link href="/style/non-adult" className="area-card">
              <div className="area-card-body">
                <div className="area-card-header">
                  <h3 className="area-card-name">💚 ノンアダルト専門</h3>
                  <span className="area-card-count">安心・専門</span>
                </div>
                <p className="area-card-catch">お話だけで稼ぐ安心感</p>
                <p className="area-card-summary">アダルトを勧められる心配がない、ノンアダ専門の事務所。「お話だけで稼ぐ」働き方なので、じっくり長く続けたい方に向いています。</p>
                <div className="area-card-target">
                  <span className="area-card-target-label">こんな方に</span>
                  <span className="area-card-target-value">真面目に長く続けたい方</span>
                </div>
                <span className="area-card-link">詳しく見る →</span>
              </div>
            </Link>

            <Link href="/style/virtual" className="area-card">
              <div className="area-card-body">
                <div className="area-card-header">
                  <h3 className="area-card-name">🎭 バーチャル配信</h3>
                  <span className="area-card-count">顔バレ対策</span>
                </div>
                <p className="area-card-catch">顔バレほぼゼロの選択肢</p>
                <p className="area-card-summary">アバター越しの配信だから、顔バレのリスクはほぼゼロ。集客にちょっと時間がかかる面もあるけれど、副業として安心して続けられる選択肢です。</p>
                <div className="area-card-target">
                  <span className="area-card-target-label">こんな方に</span>
                  <span className="area-card-target-value">顔バレ絶対NGの方</span>
                </div>
                <span className="area-card-link">詳しく見る →</span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* 自分に合う働き方の選び方 */}
      <section className="section" style={{background:"var(--white)"}}>
        <div className="si" style={{maxWidth:"760px"}}>
          <p className="eyebrow">SELECT</p>
          <h2 className="sec-h" style={{marginBottom:"24px"}}>自分に合う働き方の選び方</h2>
          <p style={{marginBottom:"32px"}}>タイプ別に、向いている働き方をまとめました。</p>

          <div style={{marginBottom:"32px"}}>
            <h3 style={{marginBottom:"12px", fontSize:"18px"}}>「在宅」が向いているのは、こんな方</h3>
            <p>育児中・本業がある方で、<strong>おうちのすきま時間で働きたい</strong>方。または、近くに通える事務所がない方にも。まずはお小遣い稼ぎから始めてみたい方にもぴったりです。</p>
          </div>

          <div style={{marginBottom:"32px"}}>
            <h3 style={{marginBottom:"12px", fontSize:"18px"}}>「通勤」がおすすめなのは、こんな方</h3>
            <p>本気で稼ぎたい、しっかり技術を身につけたい方。自宅だと集中できない方や、スタッフに直接相談しながら進めたい方にも向いています。</p>
          </div>

          <div style={{marginBottom:"32px"}}>
            <h3 style={{marginBottom:"12px", fontSize:"18px"}}>「ノンアダルト専門」を選んでほしいのは、こんな方</h3>
            <p>アダルトは絶対にしたくない、真面目に長く続けたい方。「ノンアダ対応」と書いてあっても現場でアダルトを勧められる事務所もあるので、最初から<strong>「専門」の事務所</strong>を選ぶと安心です。</p>
          </div>

          <div>
            <h3 style={{marginBottom:"12px", fontSize:"18px"}}>「バーチャル配信」が合うのは、こんな方</h3>
            <p>顔バレが絶対NG、職場バレが何より怖い方。アバター越しに配信するので、容姿に自信がない方も「もう一人の自分」として活躍できます。</p>
          </div>
        </div>
      </section>

      {/* 4つの働き方を比較 */}
      <section className="section" style={{background:"var(--cream)"}}>
        <div className="si" style={{maxWidth:"760px"}}>
          <p className="eyebrow">COMPARE</p>
          <h2 className="sec-h" style={{marginBottom:"24px"}}>4つの働き方を比較</h2>
          <p style={{marginBottom:"24px"}}>それぞれの違いを表で整理しました。</p>

          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%", borderCollapse:"collapse", fontSize:"14px", background:"var(--white)"}}>
              <thead>
                <tr>
                  <th style={{padding:"12px", textAlign:"left", border:"1px solid #ddd"}}></th>
                  <th style={{padding:"12px", border:"1px solid #ddd"}}>在宅</th>
                  <th style={{padding:"12px", border:"1px solid #ddd"}}>通勤</th>
                  <th style={{padding:"12px", border:"1px solid #ddd"}}>ノンアダ専門</th>
                  <th style={{padding:"12px", border:"1px solid #ddd"}}>バーチャル</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th style={{padding:"12px", textAlign:"left", border:"1px solid #ddd"}}>顔バレリスク</th>
                  <td style={{padding:"12px", border:"1px solid #ddd"}}>やや低い</td>
                  <td style={{padding:"12px", border:"1px solid #ddd"}}>低い（防音個室）</td>
                  <td style={{padding:"12px", border:"1px solid #ddd"}}>低い〜マスクOK</td>
                  <td style={{padding:"12px", border:"1px solid #ddd"}}>ほぼゼロ</td>
                </tr>
                <tr>
                  <th style={{padding:"12px", textAlign:"left", border:"1px solid #ddd"}}>月収目安（中堅層）</th>
                  <td style={{padding:"12px", border:"1px solid #ddd"}}>月10〜20万</td>
                  <td style={{padding:"12px", border:"1px solid #ddd"}}>月50〜80万</td>
                  <td style={{padding:"12px", border:"1px solid #ddd"}}>月40〜70万</td>
                  <td style={{padding:"12px", border:"1px solid #ddd"}}>月10〜20万</td>
                </tr>
                <tr>
                  <th style={{padding:"12px", textAlign:"left", border:"1px solid #ddd"}}>サポートの手厚さ</th>
                  <td style={{padding:"12px", border:"1px solid #ddd"}}>事務所により差</td>
                  <td style={{padding:"12px", border:"1px solid #ddd"}}>直接対面で手厚い</td>
                  <td style={{padding:"12px", border:"1px solid #ddd"}}>専門ノウハウあり</td>
                  <td style={{padding:"12px", border:"1px solid #ddd"}}>事務所により差</td>
                </tr>
                <tr>
                  <th style={{padding:"12px", textAlign:"left", border:"1px solid #ddd"}}>向いている方</th>
                  <td style={{padding:"12px", border:"1px solid #ddd"}}>副業・地方在住</td>
                  <td style={{padding:"12px", border:"1px solid #ddd"}}>本気で稼ぎたい</td>
                  <td style={{padding:"12px", border:"1px solid #ddd"}}>真面目に長く続けたい</td>
                  <td style={{padding:"12px", border:"1px solid #ddd"}}>顔バレ絶対NG</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 結論：通勤×ノンアダ専門 */}
      <section className="section" style={{background:"var(--white)"}}>
        <div className="si" style={{maxWidth:"720px"}}>
          <p className="eyebrow">CONCLUSION</p>
          <h2 className="sec-h" style={{marginBottom:"24px"}}>迷ったら、「通勤×ノンアダ専門」が一番安心</h2>

          <p style={{marginBottom:"20px"}}>迷っている方には、<strong>通勤型のノンアダルト専門事務所</strong>をおすすめします。</p>

          <p style={{marginBottom:"12px"}}>理由はシンプルです。</p>
          <ul style={{marginBottom:"32px", paddingLeft:"20px", lineHeight:"1.8"}}>
            <li><strong>通勤型</strong>だから、防音個室でのびのび配信できて、スタッフから直接サポートしてもらえる</li>
            <li><strong>ノンアダルト専門</strong>だから、アダルトを勧められる心配がなく、真面目に長く続けられる</li>
            <li>「<strong>学びやすさ × 安心感</strong>」を両立できるのが、この組み合わせなんです</li>
          </ul>

          <p style={{marginBottom:"20px"}}>業界でこの「通勤×ノンアダ専門」を両立できる代表が、<strong>業界初のノンアダルト専門店であるフェアリーテイル</strong>です。</p>

          <ul style={{marginBottom:"24px", paddingLeft:"20px", lineHeight:"1.8"}}>
            <li>業界初のノンアダ専門店として運営する<strong>業界の先駆者</strong></li>
            <li>在籍チャトレの<strong>98.4%がノンアダ</strong></li>
            <li><strong>1,000項目以上のノンアダ専用ノウハウ</strong>で、未経験者でも段階的に稼げる</li>
            <li>日本チャットレディ連盟（JCF）から<strong>3年連続最優秀店舗賞</strong>を受賞</li>
          </ul>

          <p style={{marginBottom:"24px"}}>派手な事務所が苦手で、ノンアダルトで真面目に長く続けたい方には、フェアリーテイルが一番ぴったりかもしれません。</p>

          <div style={{display:"flex", flexDirection:"column", gap:"12px"}}>
            <Link href="/jimusho/ft" className="btn-main">フェアリーテイルの詳細を見る →</Link>
            <Link href="/style/non-adult" className="btn-main">ノンアダルト専門事務所のページを見る →</Link>
          </div>
        </div>
      </section>

      {/* エリア */}
      <section className="section" style={{background:"var(--cream)"}}>
        <div className="si" style={{maxWidth:"680px"}}>
          <p className="eyebrow">AREA</p>
          <h2 className="sec-h" style={{marginBottom:"24px"}}>自分の通えるエリアの店舗を探す</h2>
          <ul style={{paddingLeft:"20px", lineHeight:"2"}}>
            <li><Link href="/area/shinjuku">新宿エリアの事務所を見る →</Link></li>
            <li><Link href="/area/ikebukuro">池袋エリアの事務所を見る →</Link></li>
            <li><Link href="/area/kinshicho">錦糸町エリアの事務所を見る →</Link></li>
            <li><Link href="/area/ueno">上野エリアの事務所を見る →</Link></li>
            <li><Link href="/area/fukuoka">福岡エリアの事務所を見る →</Link></li>
            <li><Link href="/area">エリア一覧 →</Link></li>
          </ul>
        </div>
      </section>

      {/* 関連ページ */}
      <section className="section" style={{background:"var(--white)"}}>
        <div className="si" style={{maxWidth:"680px"}}>
          <p className="eyebrow">RELATED</p>
          <h2 className="sec-h" style={{marginBottom:"24px"}}>もっと詳しく知りたい方へ</h2>
          <ul style={{paddingLeft:"20px", lineHeight:"2"}}>
            <li><Link href="/q/barebure">配信中に客に特定されるのが怖い →</Link></li>
            <li><Link href="/q/kazoku-bare">家族・親・彼氏にバレるのが怖い →</Link></li>
            <li><Link href="/q/shokuba-bare">職場・会社にバレない副業の始め方 →</Link></li>
            <li><Link href="/q/ayashii">チャトレって怪しくない？危なくない？ →</Link></li>
            <li><Link href="/q/shoshinsha">初心者が安心して始められる事務所 →</Link></li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="kuchi-sec">
        <div className="kuchi-inner">
          <h2 className="kuchi-h">自分に合うチャットレディ事務所を見つけたい方へ</h2>
          <p className="kuchi-p">
            チャットレディの働き方は、人によって正解が違います。<br />
            でも、迷ったときは「通勤×ノンアダ専門」を選んでおくと、失敗しにくいですよ。
          </p>
          <Link href="/jimusho" className="btn-main">掲載事務所の比較ランキングを見る →</Link>
        </div>
      </section>

    </main>
  );
}
