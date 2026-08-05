import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FloatingWA from "@/components/sections/FloatingWA";
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

export default function BlogList() {
  useEffect(() => {
    document.title = "Blog UMKM & Website | Tips SEO, E-Commerce, & Panduan — Agung Darmawan";
    window.scrollTo(0, 0);
  }, []);

  const [featured, ...rest] = allPosts;

  return (
    <div className="min-h-screen bg-[var(--brand-cream)]">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Header */}
        <section className="mx-auto max-w-7xl px-5 mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-azure-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-azure)]">
            <BookOpen className="w-3.5 h-3.5" />
            Blog & Insight
          </div>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold leading-[1.05] text-[var(--brand-ink)]">
            Panduan & Tips Website<br className="hidden md:block" /> untuk UMKM Indonesia
          </h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-[var(--brand-gray-500)] leading-relaxed">
            Kumpulan artikel praktis seputar pembuatan website, SEO lokal, toko online,
            dan strategi digital untuk UMKM naik kelas. Update rutin, tanpa jargon.
          </p>
        </section>

        {/* Featured Post */}
        {featured && (
          <section className="mx-auto max-w-7xl px-5 mb-16">
            <Link
              to={`/blog/${featured.slug}`}
              data-testid="featured-post-link"
              className="group grid lg:grid-cols-2 gap-8 rounded-3xl bg-white border border-[var(--brand-border)] p-4 lg:p-6 hover:shadow-[0_20px_60px_rgba(10,37,64,0.10)] transition-all"
            >
              <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden rounded-2xl bg-[var(--brand-cream-2)]">
                {featured.coverImage && (
                  <img
                    src={featured.coverImage}
                    alt={featured.title}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                )}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--brand-gold)] text-[var(--brand-ink)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em]">
                    ⭐ Artikel Terbaru
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center p-4 lg:p-6">
                {featured.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featured.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-[var(--brand-azure-soft)] text-[var(--brand-azure)] px-2.5 py-0.5 text-[11px] font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <h2 className="font-display text-2xl md:text-4xl font-semibold leading-[1.1] text-[var(--brand-ink)] group-hover:text-[var(--brand-azure)] transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-4 text-[15px] text-[var(--brand-gray-500)] leading-relaxed line-clamp-3">
                  {featured.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-5 text-xs text-[var(--brand-gray-500)]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(featured.date)}
                  </span>
                  {featured.readTime && (
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {featured.readTime}
                    </span>
                  )}
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-ink)] group-hover:gap-3 transition-all">
                  Baca artikel <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Rest */}
        <section className="mx-auto max-w-7xl px-5">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-[var(--brand-ink)] mb-8">
            Artikel Lainnya
          </h3>
          {rest.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-[var(--brand-border)] bg-white p-10 text-center">
              <p className="text-[var(--brand-gray-500)]">Artikel lainnya akan segera tayang…</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  data-testid={`post-card-${p.slug}`}
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
                    <h4 className="font-display text-lg font-semibold text-[var(--brand-ink)] leading-snug group-hover:text-[var(--brand-azure)] transition-colors line-clamp-2">
                      {p.title}
                    </h4>
                    <p className="mt-2 text-sm text-[var(--brand-gray-500)] leading-relaxed line-clamp-3 flex-1">
                      {p.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-[var(--brand-gray-500)] pt-4 border-t border-[var(--brand-border)]">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        {formatDate(p.date)}
                      </span>
                      {p.readTime && (
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3 h-3" />
                          {p.readTime}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-5 mt-20">
          <div className="rounded-3xl bg-[var(--brand-ink)] text-white p-8 lg:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 dotted-grid opacity-10" />
            <div className="relative">
              <h3 className="font-display text-2xl md:text-4xl font-semibold leading-tight">
                Butuh bantuan langsung untuk UMKM Anda?
              </h3>
              <p className="mt-3 text-white/70 max-w-xl mx-auto">
                Konsultasi gratis via WhatsApp, tanpa komitmen. Saya bantu review website
                lama Anda atau diskusi kebutuhan bisnis.
              </p>
              <a
                href="https://wa.me/628211001473?text=Halo%20kak%2C%20saya%20mau%20konsultasi%20setelah%20baca%20blog"
                target="_blank"
                rel="noreferrer"
                className="cta-shine mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--brand-gold)] text-[var(--brand-ink)] px-6 py-3 text-sm font-bold hover:bg-[#ffcc3b] transition"
              >
                Konsultasi Gratis Sekarang
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWA />
    </div>
  );
}
