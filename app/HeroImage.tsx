"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroImage() {
  const [isSp, setIsSp] = useState(false);

  useEffect(() => {
    const check = () => setIsSp(window.innerWidth < 960);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", lineHeight: 0, marginTop: "-68px", marginBottom: 0 }}>
      <img
        src={isSp ? "/hero-sp.png" : "/hero-pc.png"}
        alt="ちょっとだけ余裕がほしいあなたへ"
        style={{ width: "100%", height: "auto", display: "block" }}
      />
      <Link
        href="/jimusho"
        aria-label="自分に合う事務所を見てみる"
        style={{
          position: "absolute",
          display: "block",
          cursor: "pointer",
          borderRadius: "100px",
          ...(isSp ? {
            bottom: "6%",
            left: "5%",
            right: "5%",
            height: "7%",
          } : {
            bottom: "14%",
            right: "5%",
            width: "26%",
            height: "14%",
          })
        }}
      />
    </div>
  );
}
