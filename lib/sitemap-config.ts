/**
 * Configuración del sitemap para North Blue Agency
 *
 * Actualiza estos valores según tu configuración de producción
 */

export const sitemapConfig = {
  // URL base de tu sitio web - CAMBIAR POR TU DOMINIO REAL
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://northblueagency.com",

  // Locales soportados con prefijos de URL. Si NO usas prefijos (/es, /en, etc.),
  // déjalo vacío y el sitemap generará URLs sin prefijo.
  // Puedes configurarlo por ENV: NEXT_PUBLIC_SITE_LOCALES="es,en" -> ["es","en"]
  locales: (process.env.NEXT_PUBLIC_SITE_LOCALES || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean),

  // Configuración por defecto para diferentes tipos de páginas
  defaults: {
    // Páginas principales (home, about, contact, etc.)
    mainPages: {
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Página principal específica
    homepage: {
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // Páginas de services
    servicePages: {
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Posts de blog
    blogPosts: {
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Proyectos de portfolio
    portfolioProjects: {
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Páginas de categorías
    categoryPages: {
      changeFrequency: "weekly",
      priority: 0.8,
    },
  },

  // Páginas a excluir del sitemap
  excludedPaths: [
    "/api",
    "/admin",
    "/_next",
    "/private",
    "/thank-you", // páginas temporales o de confirmación
  ],

  // Configuración de robots.txt
  robots: {
    disallow: ["/api/", "/admin/", "/_next/", "/private/"],
  },
};

// Función helper para obtener la configuración de una página específica
export function getPageConfig(path: string) {
  const { defaults } = sitemapConfig;

  // Página principal
  if (path === "" || path === "/") {
    return defaults.homepage;
  }

  // Páginas principales
  if (
    [
      "nosotros",
      "contacto",
      "services",
      "blog",
      "portfolio",
      "politica-privacidad",
    ].some((page) => path === `/${page}`)
  ) {
    return defaults.mainPages;
  }

  // Páginas de services individuales
  if (path.startsWith("/services/")) {
    return defaults.servicePages;
  }

  // Posts de blog
  if (path.startsWith("/blog/") && path !== "/blog") {
    return defaults.blogPosts;
  }

  // Proyectos de portfolio
  if (path.startsWith("/portfolio/") && path !== "/portfolio") {
    return defaults.portfolioProjects;
  }

  // Default para otras páginas
  return {
    changeFrequency: "yearly",
    priority: 0.5,
  };
}
