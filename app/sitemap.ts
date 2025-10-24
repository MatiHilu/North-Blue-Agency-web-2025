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

  // Location-specific service pages we want indexed (pretty URLs via rewrites)
  // Add or load these from a CMS as needed
  const locationSlugs = [
    // CIUDAD AUTÓNOMA DE BUENOS AIRES (CABA) - 48 barrios principales
    "agronomia",
    "almagro",
    "balvanera",
    "barracas",
    "barrio-norte", // Zona popular, aunque formalmente es parte de Recoleta y Retiro
    "belgrano",
    "boedo",
    "caballito",
    "chacarita",
    "coghlan",
    "colegiales",
    "constitucion",
    "floresta",
    "flores",
    "la-boca",
    "la-paternal",
    "liniers",
    "mataderos",
    "monte-castro",
    "monserrat",
    "nueva-pompeya",
    "nunez",
    "palermo",
    "parque-avellaneda",
    "parque-chacabuco",
    "parque-chas",
    "parque-de-los-patricios",
    "puerto-madero",
    "recoleta",
    "retiro",
    "saavedra",
    "san-cristobal",
    "san-nicolas",
    "san-telmo",
    "velez-sarsfield",
    "versalles",
    "villa-crespo",
    "villa-del-parque",
    "villa-devoto",
    "villa-general-mitre",
    "villa-lugano",
    "villa-luro",
    "villa-ortuzar",
    "villa-pueyrredon",
    "villa-real",
    "villa-riachuelo",
    "villa-santa-rita",
    "villa-soldati",
    "villa-urquiza",

    // CÓRDOBA CAPITAL - Barrios Principales
    "cordoba-alta-cordoba",
    "cordoba-alto-alberdi",
    "cordoba-alberdi",
    "cordoba-arguello",
    "cordoba-alto-verde",
    "cordoba-altamira",
    "cordoba-bella-vista",
    "cordoba-centro",
    "cordoba-cerro-de-las-rosas",
    "cordoba-cofico",
    "cordoba-general-paz",
    "cordoba-guemes",
    "cordoba-jardin",
    "cordoba-jardin-espinosa",
    "cordoba-juniors",
    "cordoba-nueva-cordoba",
    "cordoba-san-vicente",
    "cordoba-villa-belgrano",
    "cordoba-villa-el-libertador",
    "cordoba-villa-cabrera",
    "cordoba-alto-palermo",

    // ROSARIO - Barrios Principales
    "rosario-abasto",
    "rosario-alberdi",
    "rosario-azcuenaga",
    "rosario-belgrano",
    "rosario-centro",
    "rosario-echesortu",
    "rosario-empalme-graneros",
    "rosario-fisherton",
    "rosario-godoy",
    "rosario-la-ceramica",
    "rosario-las-flores",
    "rosario-lisandro-de-la-torre",
    "rosario-lourdes",
    "rosario-pichincha",
    "rosario-puerto-norte",
    "rosario-republica-de-la-sexta",
    "rosario-saladillo",
    "rosario-tiro-suizo",

    // MAR DEL PLATA - Barrios Principales
    "mar-del-plata-alfar",
    "mar-del-plata-ameghino",
    "mar-del-plata-centro",
    "mar-del-plata-colinas-de-peralta-ramos",
    "mar-del-plata-constitución",
    "mar-del-plata-la-perla",
    "mar-del-plata-las-americas",
    "mar-del-plata-las-avenidas",
    "mar-del-plata-los-troncos",
    "mar-del-plata-nueva-pompeya",
    "mar-del-plata-nunez",
    "mar-del-plata-parque-camet",
    "mar-del-plata-parque-luro",
    "mar-del-plata-punta-mogotes",
    "mar-del-plata-sierra-de-los-padres",
    "mar-del-plata-stella-maris",

    // LA PLATA - Localidades y Zonas
    "la-plata-abasto",
    "la-plata-altos-de-san-lorenzo",
    "la-plata-city-bell",
    "la-plata-joaquin-gorina",
    "la-plata-lisandro-olmos",
    "la-plata-los-hornos",
    "la-plata-manuel-b-gonnet",
    "la-plata-melchor-romero",
    "la-plata-ringuelet",
    "la-plata-san-carlos",
    "la-plata-tolosa",
    "la-plata-villa-elisa",
    "la-plata-villa-elvira",

    // BAHÍA BLANCA - Barrios Principales
    "bahia-blanca-aldea-romana",
    "bahia-blanca-avellaneda",
    "bahia-blanca-centro",
    "bahia-blanca-don-bosco",
    "bahia-blanca-latino",
    "bahia-blanca-loma-paraguaya",
    "bahia-blanca-noroeste",
    "bahia-blanca-palihue",
    "bahia-blanca-pedro-pico",
    "bahia-blanca-rosendo-lopez",
    "bahia-blanca-universitario",
    "bahia-blanca-villa-mitre",
    "bahia-blanca-villa-rosas",

    // ADICIONAL RECOMENDADO: Gran Mendoza (Capital y Alrededores)
    "mendoza-centro", // Ciudad de Mendoza
    "mendoza-area-fundacional",
    "godoy-cruz-barrio-bombal",
    "las-heras-el-challao",
    "lujan-de-cuyo-chacras-de-coria",
    "guaymallen-san-jose",
  ];
  const serviceSlugs = [
    "redes-sociales",
    "branding",
    "desarrollo-web",
    "marketing-digital",
    "seo",
    "analytics",
    "campanas-ads",
    "creacion-contenido",
  ];

  const locationEntries: MetadataRoute.Sitemap = serviceSlugs.flatMap(
    (service) => {
      const cfg = getPageConfig(`/servicios/${service}`);
      return locationSlugs.flatMap((slug) => [
        {
          url: `${baseUrl}/servicios/${service}-${slug}`,
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
