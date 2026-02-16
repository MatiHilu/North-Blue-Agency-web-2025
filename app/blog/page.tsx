import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";
import wordpress from "@/lib/wordpress";
import { BASE_URL } from "@/lib/jsonld";
import type { Metadata } from "next";

// Evita que Next intente prerenderizar con datos remotos en build
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Insights, trends and practical guides",
  description:
    "Articles and guides on digital marketing, SEO, social media, and web development",
  alternates: { canonical: "/blog" },
  publisher: "North Blue Agency",
  keywords: [
    "blog",
    "digital marketing",
    "SEO",
    "social media",
    "web development",
  ],
  openGraph: {
    title: "Blog | North Blue Agency",
    description:
      "Articles and guides on digital marketing, SEO, social media, and web development",
    url: "https://northblueagency.com/blog",
    type: "website",
  },
};

// Load posts from WordPress on server and map to the shape used by the UI
type UIArticle = {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  featured: boolean;
};

async function getPostsForUI(): Promise<UIArticle[]> {
  const posts = await wordpress.getAllPosts();
  return posts.map((p) => {
    const text = (p.content || "").replace(/<[^>]*>/g, "");
    const words = text.split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.round(words / 200));

    return {
      id: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      content: p.content,
      author: p.author || "North Blue Agency",
      date: p.date,
      readTime: `${minutes} min`,
      category: p.categories?.[0] || "General",
      image: p.featuredImage || "/placeholder.svg?height=400&width=600",
      tags: p.tags || [],
      featured: false,
    };
  });
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: { q?: string | string[]; page?: string | string[] };
}) {
  const allPosts: UIArticle[] = await getPostsForUI();
  // read query params (server-side via searchParams) - await the proxy per Next.js runtime
  const sp = await searchParams;
  const rawQ = sp?.q;
  const q = Array.isArray(rawQ) ? rawQ[0] : rawQ ?? "";
  const rawPage = sp?.page;
  let pageNum = 1;
  if (rawPage) {
    const p = Array.isArray(rawPage) ? rawPage[0] : rawPage;
    const parsed = parseInt(p || "1", 10);
    pageNum = Number.isNaN(parsed) ? 1 : Math.max(1, parsed);
  }

  const PER_PAGE = 9;

  // filter posts by search query (title, excerpt, content, tags, category)
  const filteredPosts = q
    ? allPosts.filter((p) => {
        const hay = (
          p.title +
          " " +
          p.excerpt +
          " " +
          (p.content || "") +
          " " +
          p.tags.join(" ") +
          " " +
          p.category
        ).toLowerCase();
        return hay.includes(q.toLowerCase());
      })
    : allPosts;

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PER_PAGE));
  if (pageNum > totalPages) pageNum = totalPages;
  const start = (pageNum - 1) * PER_PAGE;
  const blogPosts = filteredPosts.slice(start, start + PER_PAGE);
  const querySuffix = q ? `&q=${encodeURIComponent(q)}` : "";

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog - North Blue Agency",
    description:
      "Articles and guides on digital marketing, SEO, social media, and web development",
    url: `${BASE_URL}/blog`,
    keywords:
      "blog, digital marketing, SEO, social media, web development, tips",
    publisher: {
      "@type": "Organization",
      name: "North Blue Agency",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/North-Blue-Agency.svg`,
      },
    },
    // expose all posts in schema (use full list)
    blogPost: allPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      author: {
        "@type": "Person",
        name: post.author,
      },
      datePublished: post.date,
      url: `${BASE_URL}/blog/${post.id}`,
      image: post.image?.startsWith("http")
        ? post.image
        : `${BASE_URL}${post.image}`,
      publisher: {
        "@type": "Organization",
        name: "North Blue Agency",
      },
    })),
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
      ],
    },
  };

  return (
    <>
      {/* Metadata via export metadata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff4081]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00b2ff]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-x">
                  Blog
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Insights, trends, and practical guides on digital marketing,
                Search Engine Optimization, web development, and social media.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Featured Posts */}
        {/* <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Featured{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-y">
                  Articles
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The most popular and current content from our blog
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {blogPosts
                .filter((post) => post.featured)
                .map((post, index) => (
                  <AnimatedSection key={post.id} delay={index * 100}>
                    <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden h-full">
                      <CardContent className="p-0 h-full flex flex-col">
                        <div className="relative overflow-hidden">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-gradient-to-r from-[#ff4081] to-[#00b2ff] text-white px-3 py-1 rounded-full text-sm font-semibold">
                              {post.category}
                            </span>
                          </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <User size={14} className="mr-1" />
                            {post.author}
                            <span className="mx-2">•</span>
                            <Calendar size={14} className="mr-1" />
                            {new Date(post.date).toLocaleDateString("en-US")}
                            <span className="mx-2">•</span>
                            <Clock size={14} className="mr-1" />
                            {post.readTime}
                          </div>

                          <h3 className="text-xl font-bold mb-3 group-hover:text-[#ff4081] transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 flex-1 leading-relaxed">
                            {post.excerpt}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 3).map((tag, idx) => (
                              <span
                                key={idx}
                                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>

                          <Link href={`/blog/${post.id}`} className="mt-auto">
                            <Button
                              variant="outline"
                              className="w-full group/btn border-gray-300 hover:border-[#ff4081] hover:text-[#ff4081] transition-all"
                            >
                              Read full article
                              <ArrowRight
                                size={16}
                                className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                              />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
            </div>
          </div>
        </section> */}

        {/* All Posts */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                All{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-y">
                  Articles
                </span>
              </h2>
            </AnimatedSection>

            {/* Search form */}
            <div className="max-w-3xl mx-auto mb-8">
              <form method="get" className="flex items-center gap-3">
                <input
                  name="q"
                  defaultValue={q}
                  placeholder="Search articles..."
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-200"
                />
                <input type="hidden" name="page" value="1" />
                <Button type="submit" className="whitespace-nowrap">
                  Search
                </Button>
              </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <AnimatedSection key={post.id} delay={index * 50}>
                  {/* <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-semibold">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="flex items-center text-xs text-gray-500 mb-2">
                          <Calendar size={12} className="mr-1" />
                          {new Date(post.date).toLocaleDateString("en-US")}
                          <span className="mx-2">•</span>
                          <Clock size={12} className="mr-1" />
                          {post.readTime}
                        </div>

                        <h3 className="font-bold mb-2 group-hover:text-[#ff4081] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {post.excerpt}
                        </p>

                        <Link href={`/blog/${post.id}`}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-[#ff4081] hover:text-[#ff4081] hover:bg-[#ff4081]/10 p-0"
                          >
                            Read more
                            <ArrowRight size={14} className="ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card> */}
                  <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden h-full">
                    <CardContent className="p-0 h-full flex flex-col">
                      <div className="relative overflow-hidden">
                        <Link href={`/blog/${post.id}`} className="mt-auto">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </Link>
                        <div className="absolute top-4 left-4">
                          <span className="bg-gradient-to-r from-[#ff4081] to-[#00b2ff] text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <User size={14} className="mr-1" />
                          {post.author}
                          <span className="mx-2">•</span>
                          <Calendar size={14} className="mr-1" />
                          {new Date(post.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
                          <span className="mx-2">•</span>
                          <Clock size={14} className="mr-1" />
                          {post.readTime}
                        </div>

                        <Link href={`/blog/${post.id}`} className="mt-auto">
                          <h3 className="text-xl font-bold mb-3 group-hover:text-[#ff4081] transition-colors">
                            {post.title}
                          </h3>
                        </Link>
                        <p className="text-gray-600 mb-4 flex-1 leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag, idx) => (
                            <span
                              key={idx}
                              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <Link href={`/blog/${post.id}`} className="mt-auto">
                          <Button
                            variant="outline"
                            className="w-full group/btn border-gray-300 hover:border-[#ff4081] hover:text-[#ff4081] transition-all"
                          >
                            Read full article
                            <ArrowRight
                              size={16}
                              className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                            />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex items-center justify-center space-x-2">
              {pageNum > 1 ? (
                <Link
                  href={`/blog?page=${pageNum - 1}${
                    q ? `&q=${encodeURIComponent(q)}` : ""
                  }`}
                  className="px-3 py-2 bg-white border rounded"
                >
                  Previous
                </Link>
              ) : (
                <span className="px-3 py-2 bg-gray-100 border rounded text-gray-400">
                  Previous
                </span>
              )}

              {Array.from({ length: totalPages }).map((_, i) => {
                const p = i + 1;
                const href = `/blog?page=${p}${
                  q ? `&q=${encodeURIComponent(q)}` : ""
                }`;
                return (
                  <Link
                    key={p}
                    href={href}
                    className={`px-3 py-2 border rounded ${
                      p === pageNum
                        ? "bg-gradient-to-r from-[#ff4081] to-[#00b2ff] text-white"
                        : "bg-white"
                    }`}
                  >
                    {p}
                  </Link>
                );
              })}

              {pageNum < totalPages ? (
                <Link
                  href={`/blog?page=${pageNum + 1}${
                    q ? `&q=${encodeURIComponent(q)}` : ""
                  }`}
                  className="px-3 py-2 bg-white border rounded"
                >
                  Next
                </Link>
              ) : (
                <span className="px-3 py-2 bg-gray-100 border rounded text-gray-400">
                  Next
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        {/*  <section className="py-20 bg-gradient-to-r from-[#ff4081] to-[#00b2ff]">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Don't want to miss anything?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and receive the best content on digital marketing
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button className="btn-white-hover bg-white text-[#ff4081] hover:bg-gray-100 px-6">
                  Subscribe
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section> */}

        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
}
