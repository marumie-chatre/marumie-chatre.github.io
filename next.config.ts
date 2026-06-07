import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /column ハブを /q に統合した（既存URLは記事側のみ維持）
      { source: "/column", destination: "/q", permanent: true },
    ];
  },
};

export default nextConfig;
