import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/webmail',
        destination: 'https://cpanel1.hostingwinds.online:2096/',
        permanent: false, // 302 redirect (temporary)
      },
    ];
  },
};

export default nextConfig;
