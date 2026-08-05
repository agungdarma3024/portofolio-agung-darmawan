import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, BookOpen, ArrowUpRight } from "lucide-react";
import { allPosts } from "@/content/posts";

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

export default function BlogPreview() {
  const posts = allPosts.slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section
      id="blog"
      data-testid="blog-preview-section"
      className="py-20 lg:py-28 bg-[var(--brand-cream)]"
    >
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-azure-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-azure)]">
              <BookOpen className="w-3.5 h-3.5" />
              Blog & Insight
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold leading-[1.05] text-[var(--brand-ink)]">
              Panduan & Tips untuk<br className="hidden md:block" /> UMKM Naik Kelas
            </h2>
            <p className="mt-4 max-w-xl text-[var(--brand-gray-500)] leading-relaxed">
              Artikel praktis seputar pembuatan website, SEO lokal, dan strategi digital
              — tanpa jargon, langsung bisa dipraktikkan.
            </p>
          </div>
          <Link
            to="/blog"
            data-testid="view-all-blog"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-ink)] text-[var(--brand-ink)] px-5 py-2.5 text-sm font-semibold hover:bg-[var(--brand-ink)] hover:text-white transition self-start md:self-auto"
          >
            Lihat Semua Artikel
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              data-testid={`blog-preview-card-${p.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-[var(--brand-border)] hover:shadow-[0_16px_40px_rgba(10,37,64,0.08)] hover:-translate-y-1 transition-all"
            >
              {p.coverImage && (
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--brand-cream-2)]">
                  <img
                    src={p.coverImage}
                    alt={p.title}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-5 flex-1 flex flex-col">
                {p.tags && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-[var(--brand-azure-soft)] text-[var(--brand-azure)] px-2 py-0.5 text-[10px] font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <h3 className="font-display text-lg font-semibold text-[var(--brand-ink)] leading-snug group-hover:text-[var(--brand-azure)] transition-colors line-clamp-2">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--brand-gray-500)] leading-relaxed line-clamp-3 flex-1">
                  {p.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-[var(--brand-gray-500)] pt-4 border-t border-[var(--brand-border)]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {formatDate(p.date)}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-[var(--brand-ink)] group-hover:gap-2 transition-all">
                    Baca <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
