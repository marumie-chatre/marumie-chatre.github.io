import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next 16 では qualities のデフォルトが [75] のみに制限されたため、
  // ヒーロー等の高画質画像用に 90 を許可リストへ追加する
  images: {
    qualities: [75, 90],
  },
  async redirects() {
    return [
      // /column 系を /q 配下に統合（SEO equity 引継ぎ用 301）
      { source: "/column", destination: "/q", permanent: true },
      { source: "/column/jimusho-erabi", destination: "/q/jimusho-erabi", permanent: true },
      { source: "/column/mibare-taisaku", destination: "/q/mibare-taisaku", permanent: true },
      { source: "/column/hoikushi-baito", destination: "/q/hoikushi-baito", permanent: true },
      // 職場バレ記事を hoikushi-baito（元保育士の一人称）に統合（301）
      { source: "/q/shokuba-bare", destination: "/q/hoikushi-baito", permanent: true },
      // 初心者向け記事を jimusho-erabi（事務所の選び方）に統合（301）
      { source: "/q/shoshinsha", destination: "/q/jimusho-erabi", permanent: true },
      // 運営方針・評価基準・口コミガイドラインを /profile に統合（301）
      { source: "/houshin", destination: "/profile", permanent: true },
      { source: "/hyoka-kijun", destination: "/profile", permanent: true },
      { source: "/guideline", destination: "/profile", permanent: true },
    ];
  },
};

export default nextConfig;
