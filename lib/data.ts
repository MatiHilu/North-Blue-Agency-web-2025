// Datos de ejemplo para blog posts
// En una aplicación real, estos datos vendrían de una API, CMS o base de datos

export interface BlogPost {
  slug: string;
  title: string;
  publishedAt: string;
  updatedAt?: string;
}

export interface PortfolioProject {
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
  updatedAt?: string;
}

// Datos de ejemplo - reemplaza con tu fuente de datos real
export const blogPosts: BlogPost[] = [
  {
    slug: "como-mejorar-presencia-digital-2025",
    title: "Cómo Mejorar tu Presencia Digital en 2025",
    publishedAt: "2025-01-15",
    updatedAt: "2025-01-20",
  },
  {
    slug: "tendencias-marketing-digital-2025",
    title: "Tendencias de Marketing Digital para 2025",
    publishedAt: "2025-01-10",
  },
  {
    slug: "seo-local-para-pymes",
    title: "SEO Local: Guía Completa para PYMEs",
    publishedAt: "2025-01-05",
  },
  {
    slug: "diseno-web-responsive-importancia",
    title: "La Importancia del Diseño Web Responsive",
    publishedAt: "2024-12-20",
  },
  {
    slug: "estrategias-redes-sociales-2025",
    title: "Estrategias de Redes Sociales que Funcionan",
    publishedAt: "2024-12-15",
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "ecommerce-fashion-store",
    title: "E-commerce para Tienda de Moda",
    category: "desarrollo-web",
    publishedAt: "2024-12-01",
  },
  {
    slug: "app-delivery-restaurante",
    title: "App de Delivery para Restaurante",
    category: "desarrollo-web",
    publishedAt: "2024-11-15",
  },
  {
    slug: "campana-digital-tech-startup",
    title: "Campaña Digital para Tech Startup",
    category: "marketing-digital",
    publishedAt: "2024-11-01",
  },
  {
    slug: "branding-empresa-consultoria",
    title: "Branding Completo para Consultoría",
    category: "branding",
    publishedAt: "2024-10-20",
  },
  {
    slug: "rediseno-web-clinica-dental",
    title: "Rediseño Web para Clínica Dental",
    category: "desarrollo-web",
    publishedAt: "2024-10-10",
  },
];

// Función para obtener todos los posts de blog
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // En una aplicación real, harías fetch a tu API o CMS
  // Ejemplo:
  // const response = await fetch('https://tu-api.com/blog-posts')
  // return response.json()

  return blogPosts;
}

// Función para obtener todos los proyectos de portfolio
export async function getAllPortfolioProjects(): Promise<PortfolioProject[]> {
  // En una aplicación real, harías fetch a tu API o CMS
  // Ejemplo:
  // const response = await fetch('https://tu-api.com/portfolio-projects')
  // return response.json()

  return portfolioProjects;
}
