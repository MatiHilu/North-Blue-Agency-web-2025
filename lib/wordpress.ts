// Adaptador para consumir la REST API de WordPress
// Punto de entrada del WP: https://northblueagency.matiashilu.com/wp-json/wp/v2
// Exporta utilidades para obtener todos los posts y un post por slug

const WP_BASE =
  process.env.WP_API_BASE ||
  "https://northblueagency.matiashilu.com/wp-json/wp/v2";

type WPRawPost = {
  id: number;
  slug: string;
  date: string;
  modified: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  featured_media?: number;
  _embedded?: any;
};

export type PostSummary = {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  author?: string;
  date: string;
  modified?: string;
  featuredImage?: string | null;
  tags?: string[];
  categories?: string[];
};

async function fetchWP(path: string, revalidateSeconds = 60) {
  const url = `${WP_BASE}${path}`;
  // Usamos fetch nativo de Next/Node; si se ejecuta en el cliente la opción `next` será ignorada
  const res = await fetch(url, {
    headers: { Accept: "application/json" },
    // Revalidation controlable para App Router server components
    // @ts-ignore-next-line
    next: { revalidate: revalidateSeconds },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`WP fetch failed ${res.status} ${res.statusText}: ${text}`);
  }

  return res.json();
}

function safeText(html?: string) {
  if (!html) return "";
  // Remover etiquetas simples (excerpt viene con HTML). Mantenerlo mínimo.
  return html.replace(/<[^>]*>/g, "").trim();
}

function mapPost(raw: WPRawPost): PostSummary {
  const embedded = raw._embedded || {};
  const media = embedded["wp:featuredmedia"]?.[0];
  const author = embedded.author?.[0]?.name || undefined;
  // mapear taxonomías si están embebidas
  const tags = (embedded["wp:term"] || [])
    .flat()
    .filter((t: any) => t && t.taxonomy === "post_tag")
    .map((t: any) => t.name);
  const categories = (embedded["wp:term"] || [])
    .flat()
    .filter((t: any) => t && t.taxonomy === "category")
    .map((t: any) => t.name);

  return {
    slug: raw.slug,
    title: raw.title?.rendered || "",
    excerpt: safeText(raw.excerpt?.rendered),
    content: raw.content?.rendered || "",
    author,
    date: raw.date,
    modified: raw.modified,
    featuredImage: media?.source_url || null,
    tags: tags.length ? tags : undefined,
    categories: categories.length ? categories : undefined,
  };
}

export async function getAllPosts(
  perPage = 100,
  revalidateSeconds = 60
): Promise<PostSummary[]> {
  // solicitamos con _embed para obtener autor, featured media y terminos
  const path = `/posts?per_page=${perPage}&_embed=true`;
  const data: WPRawPost[] = await fetchWP(path, revalidateSeconds);
  return data.map(mapPost);
}

export async function getPostBySlug(
  slug: string,
  revalidateSeconds = 60
): Promise<PostSummary | null> {
  const path = `/posts?slug=${encodeURIComponent(slug)}&_embed=true`;
  const data: WPRawPost[] = await fetchWP(path, revalidateSeconds);
  if (!Array.isArray(data) || data.length === 0) return null;
  return mapPost(data[0]);
}

export async function getAllSlugs(
  perPage = 100,
  revalidateSeconds = 60
): Promise<string[]> {
  const path = `/posts?per_page=${perPage}&_fields=slug`;
  const data: { slug: string }[] = await fetchWP(path, revalidateSeconds);
  return data.map((d) => d.slug);
}

export default {
  getAllPosts,
  getPostBySlug,
  getAllSlugs,
};
