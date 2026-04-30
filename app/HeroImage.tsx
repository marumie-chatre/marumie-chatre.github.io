"use client";
import Link from "next/link";

export default function HeroImage() {
  return (
    <div style={{
      position: "relative",
      width: "100%",
      lineHeight: 0,
    }}>
      {/* PC用画像（960px以上） */}
      <img
        src="/hero-pc.png"
        alt="ちょっとだけ余裕がほしいあなたへ"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
        className="hero-img-pc"
      />
      {/* スマホ用画像（960px未満） */}
      <img
        src="/hero-sp.png"
        alt="ちょっとだけ余裕がほしいあなたへ"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
        className="hero-img-sp"
      />
      {/* ボタン領域（画像の上に重ねる） */}
      <Link
        href="/jimusho"
        className="hero-img-btn-pc"
        aria-label="自分に合う事務所を見てみる"
      />
      <Link
        href="/jimusho"
        className="hero-img-btn-sp"
        aria-label="自分に合う事務所を見てみる"
      />
    </div>
  );
}
