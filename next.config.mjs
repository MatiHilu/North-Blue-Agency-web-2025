/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Spanish pretty URLs like /servicios/redes-sociales-buenos-aires
      {
        source: "/servicios/redes-sociales-:location",
        destination: "/servicios/redes-sociales?Location=:location",
      },
      // English mirror: /services/redes-sociales-buenos-aires
      {
        source: "/services/redes-sociales-:location",
        destination: "/services/redes-sociales?Location=:location",
      },
      // Other services (ES)
      {
        source: "/servicios/branding-:location",
        destination: "/servicios/branding?Location=:location",
      },
      {
        source: "/servicios/desarrollo-web-:location",
        destination: "/servicios/desarrollo-web?Location=:location",
      },
      {
        source: "/servicios/marketing-digital-:location",
        destination: "/servicios/marketing-digital?Location=:location",
      },
      {
        source: "/servicios/seo-:location",
        destination: "/servicios/seo?Location=:location",
      },
      {
        source: "/servicios/analytics-:location",
        destination: "/servicios/analytics?Location=:location",
      },
      {
        source: "/servicios/campanas-ads-:location",
        destination: "/servicios/campanas-ads?Location=:location",
      },
      {
        source: "/servicios/creacion-contenido-:location",
        destination: "/servicios/creacion-contenido?Location=:location",
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
