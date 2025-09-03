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
import SEOHead from "@/components/seo-head";

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

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const post = await wordpress.getPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-[95vh] pt-20 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-white">
            Artículo no encontrado
          </h1>
          <Link href="/blog">
            <Button variant="secondary">Volver al blog</Button>
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
        { "@type": "ListItem", position: 1, name: "Inicio", item: BASE_URL },
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

  return (
    <>
      <SEOHead
        title={`${post.title} - Blog`}
        description={post.excerpt}
        canonical={`/blog/${slug}`}
        keywords={post.tags || []}
        ogType="article"
      />
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
                Volver al blog
              </Link>

              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <span className="bg-gradient-to-r from-[#ff4081] to-[#00b2ff] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.categories?.[0] || "General"}
                  </span>
                  <div className="flex items-center text-white/80 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {new Date(post.date).toLocaleDateString("es-ES")}
                  </div>
                  <div className="flex items-center text-white/80 text-sm">
                    <Clock size={16} className="mr-1" />
                    {readTime}
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  {post.title}
                </h1>
                <p className="text-xl text-white/90 mb-8">{post.excerpt}</p>

                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center text-white/80">
                    <User size={16} className="mr-2" />
                    Por {post.author}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Share2 size={16} className="text-white/80" />
                    <span className="text-white/80 text-sm">Compartir:</span>
                    <button className="text-white/80 hover:text-white transition-colors">
                      <Facebook size={16} />
                    </button>
                    <button className="text-white/80 hover:text-white transition-colors">
                      <Twitter size={16} />
                    </button>
                    <button className="text-white/80 hover:text-white transition-colors">
                      <Linkedin size={16} />
                    </button>
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
                  className="w-full rounded-lg shadow-lg mb-12"
                />
              </AnimatedSection>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                <div className="lg:col-span-3">
                  <AnimatedSection>
                    <div
                      className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-[#ff4081] prose-a:no-underline hover:prose-a:underline"
                      dangerouslySetInnerHTML={{ __html: post.content || "" }}
                    />
                  </AnimatedSection>

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
                          Sobre el Autor
                        </h3>
                        <div className="flex items-center space-x-3 mb-4">
                          <img
                            src="/placeholder.svg?height=60&width=60"
                            alt={post.author}
                            className="w-12 h-12 rounded-full"
                          />
                          <div>
                            <p className="font-semibold">{post.author}</p>
                            <p className="text-sm text-gray-600">
                              Marketing Specialist
                            </p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                          Especialista en marketing digital con más de 5 años de
                          experiencia ayudando a empresas a crecer online.
                        </p>
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full border-[#ff4081] text-[#ff4081] hover:bg-[#ff4081] hover:text-white"
                        >
                          Ver más artículos
                        </Button>
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
