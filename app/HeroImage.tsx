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
    <div style={{ marginTop: "-68px", marginBottom: 0, width: "100%", lineHeight: 0 }}>
      <img
        src={isSp ? "/hero-sp.jpg" : "/hero-pc.jpg"}
        alt="ちょっとだけ余裕がほしいあなたへ"
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </div>
  );
}
