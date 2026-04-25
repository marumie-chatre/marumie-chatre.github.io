import Link from "next/link";

export const metadata = {
  title: "お悩みから探す｜まるみえチャトレ",
};

export default function PreparingPage() {
  return (
    <main>
      <section className="hero" style={{paddingBottom:"80px", textAlign:"center"}}>
        <div style={{maxWidth:"560px", margin:"0 auto"}}>
          <p className="eyebrow">COMING SOON</p>
          <h1 className="hero-h1" style={{fontSize:"clamp(24px,3vw,36px)"}}>
            お悩みから探す
          </h1>
          <p className="hero-lead" style={{marginBottom:"36px"}}>
            このページは現在準備中です。<br />
            もうしばらくお待ちください。
          </p>
          <Link href="/jimusho" className="btn-main">
            事務所ランキングを見る →
          </Link>
        </div>
      </section>
    </main>
  );
}
