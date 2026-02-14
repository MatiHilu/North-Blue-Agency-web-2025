/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Spanish pretty URLs like /services/redes-sociales-buenos-aires
      {
        source: "/services/redes-sociales-:location",
        destination: "/services/redes-sociales?Location=:location",
      },
      // English mirror: /services/redes-sociales-buenos-aires
      {
        source: "/services/redes-sociales-:location",
        destination: "/services/redes-sociales?Location=:location",
      },
      // Other services (ES)
      {
        source: "/services/branding-:location",
        destination: "/services/branding?Location=:location",
      },
      {
        source: "/services/desarrollo-web-:location",
        destination: "/services/desarrollo-web?Location=:location",
      },
      {
        source: "/services/marketing-digital-:location",
        destination: "/services/marketing-digital?Location=:location",
      },
      {
        source: "/services/seo-:location",
        destination: "/services/seo?Location=:location",
      },
      {
        source: "/services/analytics-:location",
        destination: "/services/analytics?Location=:location",
      },
      {
        source: "/services/campanas-ads-:location",
        destination: "/services/campanas-ads?Location=:location",
      },
      {
        source: "/services/creacion-contenido-:location",
        destination: "/services/creacion-contenido?Location=:location",
      },
      // Other services (EN mirror)
      {
        source: "/services/branding-:location",
        destination: "/services/branding?Location=:location",
      },
      {
        source: "/services/desarrollo-web-:location",
        destination: "/services/desarrollo-web?Location=:location",
      },
      {
        source: "/services/marketing-digital-:location",
        destination: "/services/marketing-digital?Location=:location",
      },
      {
        source: "/services/seo-:location",
        destination: "/services/seo?Location=:location",
      },
      {
        source: "/services/analytics-:location",
        destination: "/services/analytics?Location=:location",
      },
      {
        source: "/services/campanas-ads-:location",
        destination: "/services/campanas-ads?Location=:location",
      },
      {
        source: "/services/creacion-contenido-:location",
        destination: "/services/creacion-contenido?Location=:location",
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
