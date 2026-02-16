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
    "/contact",
    "/portfolio",
    "/services",
    "/politica-privacidad",
  ];

  // Rutas de services
  const serviceRoutes = [
    "/services/redes-sociales",
    "/services/branding",
    "/services/desarrollo-web",
    "/services/marketing-digital",
    "/services/seo",
    "/services/analytics",
    "/services/campanas-ads",
    "/services/chatgpt-ads",
    "/services/creacion-contenido",
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

  // Crear entradas del sitemap para rutas estáticas y de services en cada idioma (o sin prefijo)
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

  // Location-specific service pages we want indexed (pretty URLs via rewrites)
  // Add or load these from a CMS as needed
  const locationSlugs = [
    // CIUDAD AUTÓNOMA DE BUENOS AIRES (CABA) - 48 barrios principales
    "Argentina",
    "CABA",
    "Buenos-Aires",
    "Cordoba",
  ];
  const serviceSlugs = [
    "redes-sociales",
    "branding",
    "desarrollo-web",
    "marketing-digital",
    "seo",
    "analytics",
    "campanas-ads",
    "chatgpt-ads",
    "creacion-contenido",
  ];

  const locationEntries: MetadataRoute.Sitemap = serviceSlugs.flatMap(
    (service) => {
      const cfg = getPageConfig(`/services/${service}`);
      return locationSlugs.flatMap((slug) => [
        {
          url: `${baseUrl}/services/${service}-${slug}`,
          lastModified: new Date(),
          changeFrequency: cfg.changeFrequency as any,
          priority: cfg.priority,
        },
        {
          url: `${baseUrl}/services/${service}-${slug}`,
          lastModified: new Date(),
          changeFrequency: cfg.changeFrequency as any,
          priority: cfg.priority,
        },
      ]);
    }
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
    ...locationEntries,
  ];
}
