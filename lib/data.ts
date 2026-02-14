// Sample data for blog posts
// In a real application, this data would come from an API, CMS, or database

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

// Sample data - replace with your real data source
export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-improve-digital-presence-2025",
    title: "How to Improve Your Digital Presence in 2025",
    publishedAt: "2025-01-15",
    updatedAt: "2025-01-20",
  },
  {
    slug: "digital-marketing-trends-2025",
    title: "Digital Marketing Trends for 2025",
    publishedAt: "2025-01-10",
  },
  {
    slug: "local-seo-guide-smbs",
    title: "Local SEO: Complete Guide for SMBs",
    publishedAt: "2025-01-05",
  },
  {
    slug: "importance-responsive-web-design",
    title: "The Importance of Responsive Web Design",
    publishedAt: "2024-12-20",
  },
  {
    slug: "social-media-strategies-that-work",
    title: "Social Media Strategies That Work",
    publishedAt: "2024-12-15",
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "ecommerce-fashion-store",
    title: "E-commerce for Fashion Store",
    category: "desarrollo-web",
    publishedAt: "2024-12-01",
  },
  {
    slug: "restaurant-delivery-app",
    title: "Delivery App for Restaurant",
    category: "desarrollo-web",
    publishedAt: "2024-11-15",
  },
  {
    slug: "tech-startup-digital-campaign",
    title: "Digital Campaign for Tech Startup",
    category: "marketing-digital",
    publishedAt: "2024-11-01",
  },
  {
    slug: "consultancy-branding",
    title: "Complete Branding for Consultancy",
    category: "branding",
    publishedAt: "2024-10-20",
  },
  {
    slug: "dental-clinic-web-redesign",
    title: "Web Redesign for Dental Clinic",
    category: "desarrollo-web",
    publishedAt: "2024-10-10",
  },
];

// Function to get all blog posts
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // In a real application, you would fetch from your API or CMS
  return blogPosts;
}

// Function to get all portfolio projects
export async function getAllPortfolioProjects(): Promise<PortfolioProject[]> {
  // In a real application, you would fetch from your API or CMS
  return portfolioProjects;
}
