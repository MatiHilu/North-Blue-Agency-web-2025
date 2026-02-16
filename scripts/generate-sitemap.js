#!/usr/bin/env node

/**
 * Script para generar y verificar el sitemap
 * Ejecutar con: node scripts/generate-sitemap.js
 */

const fs = require("fs");
const path = require("path");

async function generateSitemap() {
  console.log("🚀 Generando sitemap...");

  try {
    // Simular la generación del sitemap para validación
    const baseUrl = "https://northblueagency.com";

    // Rutas estáticas
    const staticRoutes = [
      "",
      "/nosotros",
      "/blog",
      "/contact",
      "/portfolio",
      "/services",
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

    // Datos de ejemplo para blog y portfolio
    const blogPosts = [
      "como-mejorar-presencia-digital-2025",
      "tendencias-marketing-digital-2025",
      "seo-local-para-pymes",
      "diseno-web-responsive-importancia",
      "estrategias-redes-sociales-2025",
    ];

    const portfolioProjects = [
      "ecommerce-fashion-store",
      "app-delivery-restaurante",
      "campana-digital-tech-startup",
      "branding-empresa-consultoria",
      "rediseno-web-clinica-dental",
    ];

    // Crear todas las rutas
    const allRoutes = [
      ...staticRoutes,
      ...serviceRoutes,
      ...blogPosts.map((slug) => `/blog/${slug}`),
      ...portfolioProjects.map((slug) => `/portfolio/${slug}`),
    ];

    // Generar entradas del sitemap
    const sitemapData = allRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: getChangeFrequency(route),
      priority: getPriority(route),
    }));

    console.log(`✅ Sitemap generado con ${sitemapData.length} URLs`);

    // Mostrar algunas estadísticas
    const stats = {
      total: sitemapData.length,
      static: sitemapData.filter(
        (entry) =>
          !entry.url.includes("/blog/") && !entry.url.includes("/portfolio/")
      ).length,
      blog: sitemapData.filter((entry) => entry.url.includes("/blog/")).length,
      portfolio: sitemapData.filter((entry) =>
        entry.url.includes("/portfolio/")
      ).length,
    };

    console.log("📊 Estadísticas del sitemap:");
    console.log(`   • Total de URLs: ${stats.total}`);
    console.log(`   • Páginas estáticas: ${stats.static}`);
    console.log(`   • Posts de blog: ${stats.blog}`);
    console.log(`   • Proyectos de portfolio: ${stats.portfolio}`);

    // Verificar URLs duplicadas
    const urls = sitemapData.map((entry) => entry.url);
    const duplicates = urls.filter((url, index) => urls.indexOf(url) !== index);

    if (duplicates.length > 0) {
      console.warn("⚠️  URLs duplicadas encontradas:");
      duplicates.forEach((url) => console.warn(`   • ${url}`));
    } else {
      console.log("✅ No se encontraron URLs duplicadas");
    }

    // Verificar prioridades
    const priorities = sitemapData
      .map((entry) => entry.priority)
      .filter(Boolean);
    const avgPriority =
      priorities.reduce((sum, p) => sum + p, 0) / priorities.length;

    console.log(`📈 Prioridad promedio: ${avgPriority.toFixed(2)}`);

    return sitemapData;
  } catch (error) {
    console.error("❌ Error al generar sitemap:", error);
    process.exit(1);
  }
}

function getChangeFrequency(route) {
  // Página principal y services cambian más frecuentemente
  if (route === "" || route === "/services") {
    return "weekly";
  }

  // Blog se actualiza frecuentemente
  if (route.startsWith("/blog")) {
    return "weekly";
  }

  // Portfolio se actualiza ocasionalmente
  if (route.startsWith("/portfolio")) {
    return "monthly";
  }

  // Páginas de services individuales
  if (route.startsWith("/services/")) {
    return "monthly";
  }

  // Páginas estáticas
  return "yearly";
}

function getPriority(route) {
  // Página principal tiene la prioridad más alta
  if (route === "") {
    return 1.0;
  }

  // Páginas principales
  if (
    ["services", "about", "contact", "portfolio"].some(
      (page) => route === `/${page}`
    )
  ) {
    return 0.9;
  }

  // Páginas de services individuales
  if (route.startsWith("/services/")) {
    return 0.8;
  }

  // Blog y portfolio individuales
  if (route.startsWith("/blog/") || route.startsWith("/portfolio/")) {
    return 0.7;
  }

  // Página de blog principal
  if (route === "/blog") {
    return 0.8;
  }

  // Otras páginas
  return 0.5;
}

async function validateSitemap() {
  console.log("🔍 Validando sitemap...");

  try {
    const sitemapData = await generateSitemap();

    // Validaciones básicas
    const validations = [
      {
        name: "URLs válidas",
        test: () =>
          sitemapData.every(
            (entry) => entry.url && entry.url.startsWith("http")
          ),
      },
      {
        name: "Fechas válidas",
        test: () =>
          sitemapData.every((entry) => entry.lastModified instanceof Date),
      },
      {
        name: "Prioridades válidas",
        test: () =>
          sitemapData.every(
            (entry) =>
              !entry.priority || (entry.priority >= 0 && entry.priority <= 1)
          ),
      },
      {
        name: "Change frequency válida",
        test: () =>
          sitemapData.every(
            (entry) =>
              !entry.changeFrequency ||
              [
                "always",
                "hourly",
                "daily",
                "weekly",
                "monthly",
                "yearly",
                "never",
              ].includes(entry.changeFrequency)
          ),
      },
    ];

    console.log("🧪 Ejecutando validaciones:");

    let allValid = true;
    validations.forEach((validation) => {
      const isValid = validation.test();
      console.log(`   ${isValid ? "✅" : "❌"} ${validation.name}`);
      if (!isValid) allValid = false;
    });

    if (allValid) {
      console.log("🎉 Todas las validaciones pasaron correctamente");
    } else {
      console.error("❌ Algunas validaciones fallaron");
      process.exit(1);
    }
  } catch (error) {
    console.error("❌ Error al validar sitemap:", error);
    process.exit(1);
  }
}

// Ejecutar el script
if (require.main === module) {
  const command = process.argv[2];

  switch (command) {
    case "validate":
      validateSitemap();
      break;
    case "generate":
    default:
      generateSitemap();
      break;
  }
}
