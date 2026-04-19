import { ArrowUpRight, MessageCircle, Sparkles, ShieldCheck, Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section
      data-testid="hero-section"
      className="relative overflow-hidden bg-[var(--brand-ink)] text-white pt-36 pb-24 lg:pt-44 lg:pb-32 grain-overlay"
    >
      {/* Halos */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-[520px] h-[520px] halo-blue blur-2xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 w-[420px] h-[420px] halo-gold blur-3xl opacity-70" />
      {/* dotted */}
      <div className="pointer-events-none absolute inset-0 dotted-grid-dark opacity-60" />

      <div className="relative mx-auto max-w-7xl px-5 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left content */}
        <div className="lg:col-span-7">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur mb-6">
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--brand-gold)] animate-pulse" />
            Melayani UMKM di seluruh Indonesia — berbasis Bekasi
          </div>

          {/* Headline */}
          <h1
            data-testid="hero-headline"
            className="font-display text-[40px] sm:text-5xl lg:text-[68px] leading-[1.02] tracking-tight font-semibold"
          >
            Website{" "}
            <span className="relative inline-block">
              <span className="text-[var(--brand-gold)]">full coding</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 Q 80 0, 160 6 T 298 4"
                  fill="none"
                  stroke="#F5B301"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            yang bantu{" "}
            <em className="not-italic underline decoration-wavy decoration-[var(--brand-gold)] decoration-2 underline-offset-8">
              UMKM lokal
            </em>{" "}
            bersaing dengan perusahaan besar.
          </h1>

          <p className="mt-6 text-white/75 text-lg max-w-xl leading-relaxed">
            Solusi digital untuk UMKM Indonesia — landing page, company profile,
            toko online, hingga web app custom berbasis{" "}
            <strong className="text-white">Next.js</strong>. Lebih cepat, lebih
            aman, dan SEO-nya menembus halaman 1 Google.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              data-testid="hero-cta-primary"
              href="https://wa.me/628211001473?text=Halo%20kak%2C%20saya%20mau%20konsultasi%20paket%20website%20UMKM"
              target="_blank"
              rel="noreferrer"
              className="cta-shine inline-flex items-center gap-2 rounded-full bg-[var(--brand-gold)] text-[var(--brand-ink)] px-6 py-3.5 text-[15px] font-bold hover:bg-[#ffcc3b] transition"
            >
              <MessageCircle className="w-5 h-5" />
              Konsultasi Gratis
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              data-testid="hero-cta-secondary"
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-white/10 transition"
            >
              Lihat Paket Harga
            </a>
          </div>

          {/* trust bullets */}
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
            {[
              { icon: ShieldCheck, label: "Garansi Bug 30 Hari" },
              { icon: Rocket, label: "Selesai 3-5 Hari" },
              { icon: Sparkles, label: "SEO + Schema.org" },
            ].map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-[12px] text-white/75"
              >
                <t.icon className="w-4 h-4 text-[var(--brand-gold)]" />
                <span>{t.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual card stack */}
        <div className="lg:col-span-5 relative">
          {/* Big browser mock card */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl glass-dark animate-floaty">
            <div className="flex items-center gap-1.5 px-4 py-3 bg-black/40 border-b border-white/10">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <span className="ml-3 text-[11px] text-white/50">
                tokoumkm-anda.id
              </span>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#0e2b52] to-[#0a2540]">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--brand-gold)] mb-2">
                UMKM Dashboard
              </div>
              <div className="font-display text-2xl font-semibold leading-tight">
                Halo, Bu Siti 👋
              </div>
              <div className="text-white/60 text-sm mt-1">
                Penjualan bulan ini naik 184% dari websitemu.
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="text-[10px] text-white/50 uppercase">
                    Pesanan
                  </div>
                  <div className="text-xl font-bold">+412</div>
                  <div className="text-[11px] text-green-400">↑ 38%</div>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="text-[10px] text-white/50 uppercase">
                    Pengunjung
                  </div>
                  <div className="text-xl font-bold">12.4k</div>
                  <div className="text-[11px] text-green-400">↑ 91%</div>
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-white/5 border border-white/10 p-3">
                <div className="text-[10px] text-white/50 uppercase mb-2">
                  Performa Google
                </div>
                <div className="flex items-end gap-1.5 h-14">
                  {[30, 45, 28, 62, 55, 78, 90].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className="flex-1 rounded-t bg-gradient-to-t from-[var(--brand-azure)] to-[var(--brand-gold)]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* floating accent card */}
          <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-2xl bg-white text-[var(--brand-ink)] p-4 shadow-xl w-56 animate-fade-up">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--brand-azure)]">
              <Sparkles className="w-4 h-4" />
              AI-ready SEO
            </div>
            <div className="mt-1 text-sm font-semibold">
              Schema.org + JSON-LD aktif di semua paket
            </div>
          </div>
          <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 rounded-full bg-[var(--brand-gold)] text-[var(--brand-ink)] px-4 py-2 text-xs font-extrabold shadow-xl">
            Mulai Rp 1,5jt
          </div>
        </div>
      </div>
    </section>
  );
}
