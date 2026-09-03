/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/company/about',
      },
      {
        source: '/reports',
        destination: '/resources/reports',
      },
      {
        source: '/reports/:path*',
        destination: '/resources/reports/:path*',
      },
      {
        source: '/documentation',
        destination: '/resources/documentation',
      },
      {
        source: '/product-updates',
        destination: '/resources/product-updates',
      },
      {
        source: '/trust-center',
        destination: '/solutions/trust-center',
      },
      {
        source: '/knowledge-base',
        destination: '/solutions/knowledge-base',
      },
    ];
  },
};

export default nextConfig;
