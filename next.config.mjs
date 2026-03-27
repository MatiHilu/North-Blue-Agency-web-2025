/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // www → non-www (301 permanent)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.northblueagency.com" }],
        destination: "https://northblueagency.com/:path*",
        permanent: true,
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Configuración para mejorar SEO y generación de sitemap
  trailingSlash: false,
  generateEtags: false,
  // Configuración para optimizar el build
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
