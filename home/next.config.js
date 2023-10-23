/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/index.html",
      },
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/blog",
        destination: `https://blog-psi-pied-75.vercel.app/blog`,
      },
      {
        source: "/blog/:path*",
        destination: `https://blog-psi-pied-75.vercel.app/blog/:path*`,
      },
      {
        source: "/blog",
        destination: `https://doc-ten-lilac.vercel.app/blog`,
      },
      {
        source: "/blog/:path*",
        destination: `https://doc-ten-lilac.vercel.app/blog/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
