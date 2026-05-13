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
    <div style={{ marginTop: "-68px", marginBottom: 0 }}>
      <div style={{ width: "100%", lineHeight: 0 }}>
        <img
          src={isSp ? "/hero-sp.jpg" : "/hero-pc.jpg"}
          alt="ちょっとだけ余裕がほしいあなたへ"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        padding: "24px 16px 8px",
      }}>
        <Link
          href="/jimusho"
          className="btn-main"
          style={{ minWidth: "280px", textAlign: "center" }}
        >
          自分に合う事務所を見てみる →
        </Link>
      </div>
    </div>
  );
}
