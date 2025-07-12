/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
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
