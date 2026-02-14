import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";
import wordpress from "@/lib/wordpress";
import { BASE_URL } from "@/lib/jsonld";
import type { Metadata } from "next";

// Dynamic metadata for blog post pages
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const post = await wordpress.getPostBySlug(params.slug);
  if (!post) {
    return { title: "Article not found", description: "" };
  }
  const title = post.title;
  const description = post.excerpt;
  const url = `${BASE_URL}/blog/${params.slug}`;
  const imageUrl = post.featuredImage?.startsWith("http")
    ? post.featuredImage
    : `${BASE_URL}${post.featuredImage || "/NorthBlue-Agency.png"}`;
  const keywords = Array.from(
    new Set(
      [
        ...(post.tags || []),
        ...(post.categories || []),
        "North Blue Agency",
      ].filter(Boolean)
    )
  );

  return {
    // Title with per-page template; root layout also applies its template
    title: {
      default: title,
      template: "%s | North Blue Agency",
    },
    description,
    alternates: { canonical: url },
    keywords,
    openGraph: {
      title: `${title} - North Blue Agency`,
      description,
      url,
      type: "article",
      siteName: "North Blue Agency",
      images: [
        {
          url: imageUrl,
          alt: `${title} - North Blue Agency`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} - North Blue Agency`,
      description,
      images: [imageUrl],
    },
    authors: post.author ? [{ name: post.author }] : undefined,
    publisher: post.author,
  };
}

type Post = {
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

// Ensure paragraphs and basic structure when CMS returns plain text without HTML.
// Supports simple Markdown-like syntax for headings, lists, images, links, and videos.
function ensureParagraphs(html: string): string {
  if (!html) return "";

  // If content already contains structured block-level HTML, respect it as-is
  const hasStructuredTags =
    /<(p|h[1-6]|ul|ol|li|img|figure|figcaption|video|source|iframe|blockquote|pre|table|thead|tbody|tr|td|th)\b/i.test(
      html
    );
  if (hasStructuredTags) return html;

  // Normalize newlines and split into lines for lightweight parsing
  const lines = html.replace(/\r\n/g, "\n").split("\n");

  const out: string[] = [];
  let inUL = false;
  let inOL = false;
  let paraLines: string[] = [];

  const imageMd = /^!\[([^\]]*)\]\(([^)]+)\)$/; // ![alt](src)
  const linkMd = /\[([^\]]+)\]\(([^)]+)\)/g; // [text](href)
  const orderedMd = /^\s*\d+[.)]\s+/; // 1. item or 1) item
  const unorderedMd = /^\s*[-*+]\s+/; // - item or * item or + item
  const headingMd = /^(#{1,6})\s+(.*)$/; // # H1 .. ###### H6

  function flushParagraph() {
    if (paraLines.length) {
      const p = paraLines.join("<br />").trim();
      if (p) out.push(`<p>${p}</p>`);
      paraLines = [];
    }
  }

  function closeLists() {
    if (inUL) {
      out.push("</ul>");
      inUL = false;
    }
    if (inOL) {
      out.push("</ol>");
      inOL = false;
    }
  }

  const isVideoUrl = (url: string) =>
    /\.(mp4|webm|ogg)(\?.*)?$/i.test(url) ||
    /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//i.test(url);

  for (const raw of lines) {
    const line = raw.trim();

    // Blank line: end current paragraph or list block
    if (line === "") {
      flushParagraph();
      closeLists();
      continue;
    }

    // Headings via markdown (# ...)
    const h = line.match(headingMd);
    if (h) {
      flushParagraph();
      closeLists();
      const level = Math.min(h[1].length, 6);
      const text = h[2].replace(linkMd, '<a href="$2">$1</a>');
      out.push(`<h${level}>${text}</h${level}>`);
      continue;
    }

    // Image via markdown ![alt](src)
    const im = line.match(imageMd);
    if (im) {
      flushParagraph();
      closeLists();
      const alt = im[1];
      const src = im[2];
      out.push(`<img src="${src}" alt="${alt}" loading="lazy" />`);
      continue;
    }

    // Standalone media link for videos (mp4/webm/ogg) or YouTube
    if (/^https?:\/\/\S+$/i.test(line) && isVideoUrl(line)) {
      flushParagraph();
      closeLists();
      if (/\.(mp4|webm|ogg)/i.test(line)) {
        out.push(
          `<video controls class="w-full"><source src="${line}" /></video>`
        );
      } else {
        const ytId = line.match(/(?:v=|\.be\/)([A-Za-z0-9_-]{6,})/);
        if (ytId?.[1]) {
          out.push(
            `<iframe width="560" height="315" src="https://www.youtube.com/embed/${ytId[1]}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
          );
        } else {
          out.push(`<a href="${line}">${line}</a>`);
        }
      }
      continue;
    }

    // Unordered list items
    if (unorderedMd.test(line)) {
      flushParagraph();
      if (!inUL) {
        closeLists();
        out.push("<ul>");
        inUL = true;
      }
      const text = line
        .replace(unorderedMd, "")
        .replace(linkMd, '<a href="$2">$1</a>');
      out.push(`<li>${text}</li>`);
      continue;
    }

    // Ordered list items
    if (orderedMd.test(line)) {
      flushParagraph();
      if (!inOL) {
        closeLists();
        out.push("<ol>");
        inOL = true;
      }
      const text = line
        .replace(orderedMd, "")
        .replace(linkMd, '<a href="$2">$1</a>');
      out.push(`<li>${text}</li>`);
      continue;
    }

    // Default: accumulate as paragraph; support inline links
    const withLinks = raw.replace(linkMd, '<a href="$2">$1</a>');
    paraLines.push(withLinks.trim());
  }

  // Flush any remaining open structures
  flushParagraph();
  closeLists();

  return out.join("");
}

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const slug = params.slug;
  const post = await wordpress.getPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-[95vh] pt-20 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-white">
            Article not found
          </h1>
          <Link href="/blog">
            <Button variant="secondary">Back to blog</Button>
          </Link>
        </div>
      </div>
    );
  }
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    keywords: (post.tags || []).join(", "),
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.date,
    dateModified: post.date,
    publisher: {
      "@type": "Organization",
      name: "North Blue Agency",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/North-Blue-Agency.svg`,
      },
    },
    alternates: { canonical: `${BASE_URL}/blog/${slug}` },
    image: post.featuredImage?.startsWith("http")
      ? post.featuredImage
      : `${BASE_URL}${post.featuredImage || "/placeholder.svg"}`,
    url: `${BASE_URL}/blog/${slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${slug}`,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${BASE_URL}/blog`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: `${BASE_URL}/blog/${slug}`,
        },
      ],
    },
  };

  // Calcular readTime a partir del contenido (palabras por minuto ~200)
  const plain = (post.content || "").replace(/<[^>]*>/g, "");
  const words = plain.split(/\s+/).filter(Boolean).length;
  const readTime = `${Math.max(1, Math.round(words / 200))} min`;

  // Share URLs (server-rendered, no client JS needed)
  const shareUrl = `${BASE_URL}/blog/${slug}`;
  const shareText = `${post.title} - North Blue Agency`;
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    shareUrl
  )}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    shareUrl
  )}&text=${encodeURIComponent(shareText)}`;
  const linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    shareUrl
  )}`;

  // Helper: determine if the author is Abril Lespade (diacritics/case-insensitive)
  const isAbrilLespade = (() => {
    const n = (post.author || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
    return n === "abril lespade";
  })();

  return (
    <>
      {/* Metadata via generateMetadata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff4081]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00b2ff]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection>
              <Link
                href="/blog"
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to blog
              </Link>

              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <span className="bg-gradient-to-r from-[#ff4081] to-[#00b2ff] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.categories?.[0] || "General"}
                  </span>
                  <div className="flex items-center text-white/80 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {new Date(post.date).toLocaleDateString("en-US")}
                  </div>
                  <div className="flex items-center text-white/80 text-sm">
                    <Clock size={16} className="mr-1" />
                    {readTime}
                  </div>
                </div>

                <h1
                  className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                  style={{ lineHeight: 1.2 }}
                >
                  {post.title}
                </h1>
                <p className="text-xl text-white/90 mb-8">{post.excerpt}</p>

                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center text-white/80">
                    <User size={16} className="mr-2" />
                    Writer {post.author}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Share2 size={16} className="text-white/80" />
                    <span className="text-white/80 text-sm">Share:</span>
                    <a
                      href={facebookShare}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Facebook"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      <Facebook size={16} />
                    </a>
                    <a
                      href={twitterShare}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on X (Twitter)"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-twitter-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>
                    </a>
                    <a
                      href={linkedinShare}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on LinkedIn"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      <Linkedin size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection>
                <img
                  src={post.featuredImage || "/placeholder.svg"}
                  alt={post.title}
                  title={post.title}
                  className="w-full rounded-lg shadow-lg mb-12"
                />
              </AnimatedSection>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                <div className="lg:col-span-3">
                  <div
                    className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-[#ff4081] prose-a:no-underline hover:prose-a:underline"
                    dangerouslySetInnerHTML={{
                      __html: ensureParagraphs(post.content || ""),
                    }}
                  />

                  <AnimatedSection delay={200}>
                    <div className="mt-12 pt-8 border-t border-gray-200">
                      <h3 className="text-xl font-bold mb-4">Tags:</h3>
                      <div className="flex flex-wrap gap-2">
                        {(post.tags || []).map((tag: string, index: number) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-[#ff4081] hover:text-white transition-colors cursor-pointer"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                </div>

                <div className="lg:col-span-1">
                  <AnimatedSection delay={300}>
                    <Card className="border-0 shadow-lg sticky top-24">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold mb-4">
                          About the Author
                        </h3>
                        {isAbrilLespade ? (
                          <>
                            <div className="mb-4">
                              <p className="font-semibold">Abril Lespade</p>
                              <p className="text-sm text-gray-600">
                                Marketing Manager
                              </p>
                            </div>
                            <p className="text-[10px] text-gray-600 mb-4">
                              Leading the social media strategy: content, tone, community, and growth. 
                              Her focus is on building authentic and lasting relationships with the audience. 
                              By understanding the needs and dynamics of social networks, she achieves significant results.
                            </p>
                          </>
                        ) : (
                          <>
                            <div className="mb-4">
                              <p className="font-semibold">Matías Hilú</p>
                              <p className="text-sm text-gray-600">
                                CEO &amp; Web Development Manager
                              </p>
                            </div>
                            <p className="text-[10px] text-gray-600 mb-4">
                              In charge of web development: performance, technical SEO, and conversion optimization. 
                              His focus is on creating fast, secure, and optimized websites that not only attract traffic 
                              but also convert visitors into customers. With his technical expertise, he ensures that every 
                              project not only meets industry standards but also offers an exceptional user experience.
                            </p>
                          </>
                        )}
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {/* Related posts: requires WP-side relation or manual mapping; omitted for now */}

        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
}
