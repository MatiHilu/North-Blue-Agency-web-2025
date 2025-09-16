import { MetadataRoute } from "next";
import { getAllBlogPosts, getAllPortfolioProjects } from "@/lib/data";
import { sitemapConfig, getPageConfig } from "@/lib/sitemap-config";
import fs from "fs";
import path from "path";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { baseUrl, locales } = sitemapConfig;

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

  // Helper: verifica si existe un page.tsx real para la ruta
  const appDir = path.join(process.cwd(), "app");
  const routeExists = (route: string) => {
    // '' -> app/page.tsx
    if (route === "" || route === "/") {
      return fs.existsSync(path.join(appDir, "page.tsx"));
    }
    const segments = route.split("/").filter(Boolean); // quita vacíos
    const pagePath = path.join(appDir, ...segments, "page.tsx");
    return fs.existsSync(pagePath);
  };

  // Determinar si usamos prefijos de locales o no
  const activeLocales =
    Array.isArray(locales) && locales.length > 0 ? locales : [""];

  // Crear entradas del sitemap para rutas estáticas y de servicios en cada idioma (o sin prefijo)
  const staticRoutesAll = [...staticRoutes, ...serviceRoutes];
  const existingRoutes = staticRoutesAll.filter(routeExists);
  const localizedStaticEntries = activeLocales.flatMap((locale) =>
    existingRoutes.map((route) => {
      const config = getPageConfig(route);
      const prefix = locale ? `/${locale}` : "";
      return {
        url: `${baseUrl}${prefix}${route}`,
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
  const localizedBlogEntries = activeLocales.flatMap((locale) =>
    blogPosts.map((post) => {
      const prefix = locale ? `/${locale}` : "";
      return {
        url: `${baseUrl}${prefix}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt || post.publishedAt),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      };
    })
  );

  // Crear entradas del sitemap para proyectos de portfolio en cada idioma
  const localizedPortfolioEntries = activeLocales.flatMap((locale) =>
    portfolioProjects.map((project) => {
      const prefix = locale ? `/${locale}` : "";
      return {
        url: `${baseUrl}${prefix}/portfolio/${project.slug}`,
        lastModified: new Date(project.updatedAt || project.publishedAt),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      };
    })
  );

  // Combinar todas las entradas localizadas
  return [
    ...localizedStaticEntries,
    ...localizedBlogEntries,
    ...localizedPortfolioEntries,
  ];
}
