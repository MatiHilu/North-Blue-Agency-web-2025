import { MetadataRoute } from "next";
import { getAllBlogPosts, getAllPortfolioProjects } from "@/lib/data";
import { sitemapConfig, getPageConfig } from "@/lib/sitemap-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { baseUrl } = sitemapConfig;

  // Rutas estáticas principales
  const staticRoutes = [
    "",
    "/nosotros",
    "/blog",
    "/contacto",
    "/portfolio",
    "/servicios",
    "/politica-privacidad",
  ];

  // Rutas de servicios
  const serviceRoutes = [
    "/servicios/redes-sociales",
    "/servicios/branding",
    "/servicios/desarrollo-web",
    "/servicios/marketing-digital",
    "/servicios/seo",
    "/servicios/analytics",
    "/servicios/campanas-ads",
    "/servicios/creacion-contenido",
  ];

  // Obtener datos dinámicos
  const blogPosts = await getAllBlogPosts();
  const portfolioProjects = await getAllPortfolioProjects();

  // Locales soportados con prefijos de URL
  const locales = ["arg", "es", "us", "uk"];
  // Crear entradas del sitemap para rutas estáticas y de servicios en cada idioma
  const staticRoutesAll = [...staticRoutes, ...serviceRoutes];
  const localizedStaticEntries = locales.flatMap((locale) =>
    staticRoutesAll.map((route) => {
      const config = getPageConfig(route);
      return {
        url: `${baseUrl}/${locale}${route}`,
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
    })
  );

  // Crear entradas del sitemap para blog posts en cada idioma
  const localizedBlogEntries = locales.flatMap((locale) =>
    blogPosts.map((post) => ({
      url: `${baseUrl}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  // Crear entradas del sitemap para proyectos de portfolio en cada idioma
  const localizedPortfolioEntries = locales.flatMap((locale) =>
    portfolioProjects.map((project) => ({
      url: `${baseUrl}/${locale}/portfolio/${project.slug}`,
      lastModified: new Date(project.updatedAt || project.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  // Combinar todas las entradas localizadas
  return [
    ...localizedStaticEntries,
    ...localizedBlogEntries,
    ...localizedPortfolioEntries,
  ];
}
