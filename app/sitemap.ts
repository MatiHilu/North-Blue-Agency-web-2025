import { MetadataRoute } from "next";
import { getAllBlogPosts, getAllPortfolioProjects } from "@/lib/data";
import { sitemapConfig, getPageConfig } from "@/lib/sitemap-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { baseUrl } = sitemapConfig;

  // Rutas estáticas principales
  const staticRoutes = [
    "",
    "/about",
    "/blog",
    "/contact",
    "/portfolio",
    "/services",
  ];

  // Rutas de servicios
  const serviceRoutes = [
    "/services/redes-sociales",
    "/services/branding",
    "/services/desarrollo-web",
    "/services/marketing-digital",
    "/services/seo",
    "/services/analytics",
    "/services/campanas-ads",
    "/services/diseno-grafico",
  ];

  // Obtener datos dinámicos
  const blogPosts = await getAllBlogPosts();
  const portfolioProjects = await getAllPortfolioProjects();

  // Crear entradas del sitemap para rutas estáticas
  const staticSitemapEntries = [...staticRoutes, ...serviceRoutes].map(
    (route) => {
      const config = getPageConfig(route);
      return {
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: config.changeFrequency as
          | "always"
          | "hourly"
          | "daily"
          | "weekly"
          | "monthly"
          | "yearly"
          | "never",
        priority: config.priority,
      };
    }
  );

  // Crear entradas del sitemap para blog posts
  const blogSitemapEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Crear entradas del sitemap para proyectos de portfolio
  const portfolioSitemapEntries = portfolioProjects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(project.updatedAt || project.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticSitemapEntries,
    ...blogSitemapEntries,
    ...portfolioSitemapEntries,
  ];
}
