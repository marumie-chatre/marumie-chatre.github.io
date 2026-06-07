import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /column 系を /q 配下に統合（SEO equity 引継ぎ用 301）
      { source: "/column", destination: "/q", permanent: true },
      { source: "/column/jimusho-erabi", destination: "/q/jimusho-erabi", permanent: true },
      { source: "/column/mibare-taisaku", destination: "/q/mibare-taisaku", permanent: true },
      { source: "/column/hoikushi-baito", destination: "/q/hoikushi-baito", permanent: true },
    ];
  },
};

export default nextConfig;
