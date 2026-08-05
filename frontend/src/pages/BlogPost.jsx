import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Calendar, Clock, ArrowLeft, ArrowRight, MessageCircle, Share2 } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FloatingWA from "@/components/sections/FloatingWA";
import { getPostBySlug, getRelatedPosts } from "@/content/posts";

function formatDate(dateStr) {
  try {
    return new Date(dateStr).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Blog Agung Darmawan`;
      // Update meta description
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", post.excerpt);
    }
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const related = getRelatedPosts(post.slug, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author?.name || "Agung Darmawan",
    },
    publisher: {
      "@type": "Organization",
      name: "Agung Darmawan — Jasa Website UMKM",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://agungwebdev.com/blog/${post.slug}`,
    },
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = encodeURIComponent(`${post.title} — via Agung Darmawan`);

  return (
    <div className="min-h-screen bg-[var(--brand-cream)]">
      <Navbar />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="pt-32 pb-20">
        {/* Header */}
        <header className="mx-auto max-w-3xl px-5 mb-10">
          <Link
            to="/blog"
            data-testid="back-to-blog"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--brand-gray-500)] hover:text-[var(--brand-ink)] transition mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Blog
          </Link>

          {post.tags && (
            <div className="flex flex-wrap gap-2 mb-5">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-[var(--brand-azure-soft)] text-[var(--brand-azure)] px-3 py-1 text-xs font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          <h1 className="font-display text-3xl md:text-5xl font-semibold leading-[1.1] text-[var(--brand-ink)]">
            {post.title}
          </h1>

          <p className="mt-5 text-lg text-[var(--brand-gray-500)] leading-relaxed">
            {post.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-5 pb-6 border-b border-[var(--brand-border)]">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-ink)] text-white font-bold text-sm">
                {post.author?.name?.[0] || "A"}
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-[var(--brand-ink)]">
                  {post.author?.name || "Agung Darmawan"}
                </div>
                {post.author?.role && (
                  <div className="text-xs text-[var(--brand-gray-500)]">{post.author.role}</div>
                )}
              </div>
            </div>
            <span className="text-[var(--brand-border)]">•</span>
            <span className="flex items-center gap-1.5 text-sm text-[var(--brand-gray-500)]">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            {post.readTime && (
              <>
                <span className="text-[var(--brand-border)]">•</span>
                <span className="flex items-center gap-1.5 text-sm text-[var(--brand-gray-500)]">
                  <Clock className="w-4 h-4" />
                  {post.readTime} baca
                </span>
              </>
            )}
          </div>
        </header>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="mx-auto max-w-4xl px-5 mb-12">
            <div className="aspect-[16/9] overflow-hidden rounded-3xl bg-[var(--brand-cream-2)]">
              <img
                src={post.coverImage}
                alt={post.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="mx-auto max-w-3xl px-5">
          <div className="blog-content" data-testid="post-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>

          {/* Share */}
          <div className="mt-16 pt-8 border-t border-[var(--brand-border)]">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-[var(--brand-ink)] flex items-center gap-2">
                <Share2 className="w-4 h-4" /> Bagikan artikel:
              </span>
              <a
                href={`https://wa.me/?text=${shareText}%20${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--brand-border)] bg-white px-4 py-2 text-xs font-semibold hover:bg-[var(--brand-ink)] hover:text-white hover:border-[var(--brand-ink)] transition"
              >
                WhatsApp
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--brand-border)] bg-white px-4 py-2 text-xs font-semibold hover:bg-[var(--brand-ink)] hover:text-white hover:border-[var(--brand-ink)] transition"
              >
                Twitter/X
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--brand-border)] bg-white px-4 py-2 text-xs font-semibold hover:bg-[var(--brand-ink)] hover:text-white hover:border-[var(--brand-ink)] transition"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-3xl bg-[var(--brand-ink)] text-white p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute inset-0 dotted-grid opacity-10" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.25em] text-[var(--brand-gold)] font-bold">
                Siap Aksi?
              </div>
              <h3 className="mt-3 font-display text-2xl md:text-3xl font-semibold leading-tight">
                Diskusi kebutuhan website UMKM Anda hari ini.
              </h3>
              <p className="mt-3 text-white/70 text-sm">
                Konsultasi gratis via WhatsApp — saya bantu dari review, kebutuhan, sampai
                rekomendasi paket yang paling cocok.
              </p>
              <a
                href="https://wa.me/628211001473?text=Halo%20kak%2C%20saya%20mau%20konsultasi%20setelah%20baca%20blog"
                target="_blank"
                rel="noreferrer"
                data-testid="post-cta-whatsapp"
                className="cta-shine mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--brand-gold)] text-[var(--brand-ink)] px-5 py-3 text-sm font-bold hover:bg-[#ffcc3b] transition"
              >
                <MessageCircle className="w-4 h-4" />
                Konsultasi Gratis via WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mx-auto max-w-6xl px-5 mt-20">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-[var(--brand-ink)] mb-8">
              Artikel Lainnya
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group flex gap-4 rounded-2xl bg-white border border-[var(--brand-border)] p-4 hover:shadow-lg transition-all"
                >
                  {p.coverImage && (
                    <div className="shrink-0 w-28 h-28 overflow-hidden rounded-xl bg-[var(--brand-cream-2)]">
                      <img
                        src={p.coverImage}
                        alt={p.title}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                  )}
                  <div className="flex-1 flex flex-col justify-between">
                    <h4 className="font-display text-base font-semibold text-[var(--brand-ink)] leading-snug group-hover:text-[var(--brand-azure)] transition-colors line-clamp-2">
                      {p.title}
                    </h4>
                    <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--brand-ink)]">
                      Baca artikel <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      <Footer />
      <FloatingWA />
    </div>
  );
}
