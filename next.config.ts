import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages 向け静的エクスポート
  output: "export",
  // 静的ホスティングでは next/image のサーバー最適化が使えないため無効化
  images: {
    unoptimized: true,
  },
  // 注意: GitHub Pages では next.config の redirects() は動作しない。
  // 旧URLの301相当は public/ 配下の静的リダイレクトHTML(canonical + meta refresh)で代替。
};

export default nextConfig;
