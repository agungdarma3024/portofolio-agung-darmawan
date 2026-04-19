import { Check, Crown, ArrowUpRight, Sparkles } from "lucide-react";

const packages = [
  {
    name: "UMKM Starter",
    tag: "Landing Page",
    originalPrice: "1.500.000", // Harga coret
    price: "800.000",           // Harga baru
    priceSuffix: "/ project",
    tagline: "Pas buat UMKM baru yang mau eksis di Google.",
    features: [
      "Landing page 1 halaman Next.js",
      "Desain custom sesuai brand UMKM",
      "SEO technical on-page + meta tags",
      "Integrasi WhatsApp & Google Maps",
      "Form kontak (via email/WA)",
      "Hosting 1 tahun gratis + SSL",
      "Mobile responsive premium",
      "Garansi bug fix 30 hari",
    ],
    cta: "Booking Starter",
    highlight: false,
  },
  {
    name: "UMKM Bisnis",
    tag: "Company Profile",
    originalPrice: "2.900.000", // Harga coret
    price: "1.500.000",         // Harga baru
    priceSuffix: "/ project",
    tagline: "Buat bisnis yang siap go profesional & terlihat seperti korporat.",
    features: [
      "Website 5–7 halaman Next.js",
      "CMS sederhana (edit konten sendiri)",
      "Blog SEO siap pakai",
      "3 artikel SEO gratis (bonus)",
      "Logo & banner custom (bonus)",
      "Integrasi WA, Maps, Instagram",
      "Schema.org LocalBusiness",
      "Hosting 1 tahun + SSL gratis",
      "Maintenance 3 bulan gratis",
    ],
    cta: "Booking Bisnis",
    highlight: true,
  },
  
  /* === DI-COMMENT SEMENTARA ===
  {
    name: "UMKM Toko Online",
    tag: "E-Commerce",
    price: "4.900.000",
    priceSuffix: "/ project",
    tagline: "Jualan 24/7 — pelanggan bisa checkout langsung dari website.",
    features: [
      "Toko online Next.js full coding",
      "Dashboard admin UMKM",
      "Produk & kategori unlimited",
      "Checkout + invoice otomatis",
      "Integrasi payment (Midtrans/QRIS)",
      "Integrasi ongkir (RajaOngkir/Biteship)",
      "Notifikasi pesanan via WA",
      "SEO e-commerce (product schema)",
      "Hosting + SSL 1 tahun gratis",
      "Maintenance 3 bulan gratis",
    ],
    cta: "Booking Toko Online",
    highlight: false,
  },
  {
    name: "Custom Premium",
    tag: "Web App Custom",
    price: "mulai 7.900.000",
    priceSuffix: "/ project",
    tagline: "Butuh fitur unik? Dibuat sesuai blueprint bisnis Anda.",
    features: [
      "Web app Next.js + backend custom",
      "Login user & role management",
      "Database terstruktur (MongoDB / Postgres)",
      "Integrasi pihak ke-3 (API, gateway, dsb.)",
      "Admin panel lengkap",
      "SEO + analytics advanced",
      "Hosting + SSL 1 tahun gratis",
      "Maintenance 6 bulan gratis",
      "Dokumentasi teknis + handover",
    ],
    cta: "Konsultasikan Kebutuhan",
    highlight: false,
  },
  ================================ */
];

const addons = [
  { label: "SEO Lokal (Google Maps) booster", price: "Rp 500rb / bulan" },
  { label: "Copywriting konten website (per halaman)", price: "Rp 150rb" },
  { label: "Pembuatan logo + brand kit UMKM", price: "Rp 350rb" },
  { label: "Iklan Google Ads setup + kelola", price: "Rp 750rb / bulan" },
];

export default function Pricing() {
  return (
    <section
      data-testid="pricing-section"
      id="pricing"
      className="relative py-20 lg:py-28 bg-[var(--brand-cream)]"
    >
      <div className="mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[var(--brand-azure)] font-bold">
            <Sparkles className="w-3.5 h-3.5" /> Paket Harga UMKM
          </div>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-semibold leading-[1.05] text-[var(--brand-ink)]">
            Harga jujur,{" "}
            <em className="not-italic text-[var(--brand-azure)]">pas buat UMKM</em>.
          </h2>
          <p className="mt-4 text-[var(--brand-gray-700)] leading-relaxed max-w-2xl mx-auto">
            Semua paket di bawah ini <strong>full coding Next.js</strong> — bukan
            template siap pakai. Perbandingan cepat: agensi besar biasanya mematok
            Rp 10–25 juta untuk coding custom. Kami kasih harga khusus untuk
            memberdayakan UMKM Indonesia.
          </p>
        </div>

        {/* Price grid - Diubah menjadi 2 kolom dan di-center (max-w-4xl mx-auto) */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {packages.map((pkg, i) => (
            <article
              key={i}
              data-testid={`pricing-card-${pkg.name.toLowerCase().replace(/\s+/g, "-")}`}
              className={`relative flex flex-col rounded-3xl p-7 transition-all duration-300 overflow-hidden ${
                pkg.highlight
                  ? "bg-[var(--brand-ink)] text-white shadow-[0_20px_60px_rgba(10,37,64,0.25)] scale-[1.02] md:-translate-y-2"
                  : "bg-white border border-[var(--brand-border)] hover:-translate-y-1 hover:shadow-xl"
              }`}
            >
              {pkg.highlight && (
                <div className="ribbon" data-testid="best-seller-ribbon">
                  TERLARIS
                </div>
              )}
              {pkg.highlight && (
                <div className="pointer-events-none absolute -top-20 -right-20 halo-gold w-64 h-64 blur-3xl opacity-60" />
              )}

              <div className="relative">
                <div
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${
                    pkg.highlight
                      ? "bg-[var(--brand-gold)] text-[var(--brand-ink)]"
                      : "bg-[var(--brand-azure-soft)] text-[var(--brand-azure)]"
                  }`}
                >
                  {pkg.highlight && <Crown className="w-3 h-3" />}
                  {pkg.tag}
                </div>
                <h3
                  className={`mt-4 font-display text-2xl font-semibold ${
                    pkg.highlight ? "text-white" : "text-[var(--brand-ink)]"
                  }`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`mt-1.5 text-sm leading-relaxed ${
                    pkg.highlight ? "text-white/70" : "text-[var(--brand-gray-500)]"
                  }`}
                >
                  {pkg.tagline}
                </p>

                {/* Section Harga */}
                <div className="mt-5 flex flex-col">
                  {/* Harga Coret */}
                  {pkg.originalPrice && (
                    <span className={`text-sm font-medium line-through ${pkg.highlight ? "text-white/50" : "text-[var(--brand-gray-400)]"}`}>
                      Rp {pkg.originalPrice}
                    </span>
                  )}
                  {/* Harga Diskon */}
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className={`text-sm ${pkg.highlight ? "text-white/80" : "text-[var(--brand-gray-600)]"}`}>
                      Rp
                    </span>
                    <span
                      className={`font-display text-4xl font-bold tracking-tight ${
                        pkg.highlight ? "text-[var(--brand-gold)]" : "text-[var(--brand-ink)]"
                      }`}
                    >
                      {pkg.price}
                    </span>
                    <span className={`text-xs ${pkg.highlight ? "text-white/50" : "text-[var(--brand-gray-500)]"}`}>
                      {pkg.priceSuffix}
                    </span>
                  </div>
                </div>

                <ul
                  className={`mt-6 space-y-2.5 text-sm ${
                    pkg.highlight ? "text-white/85" : "text-[var(--brand-gray-700)]"
                  }`}
                >
                  {pkg.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          pkg.highlight ? "text-[var(--brand-gold)]" : "text-[var(--brand-azure)]"
                        }`}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/628211001473?text=Halo%20kak%20Agung%2C%20saya%20mau%20booking%20paket%20${encodeURIComponent(
                    pkg.name
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`pricing-cta-${pkg.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`mt-7 cta-shine inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${
                    pkg.highlight
                      ? "bg-[var(--brand-gold)] text-[var(--brand-ink)] hover:bg-[#ffcc3b]"
                      : "bg-[var(--brand-ink)] text-white hover:bg-[var(--brand-ink-2)]"
                  }`}
                >
                  {pkg.cta}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-12 max-w-4xl mx-auto rounded-3xl border border-[var(--brand-border)] bg-white p-7 lg:p-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-6">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[var(--brand-azure)] font-bold">
                Add-On Pilihan
              </div>
              <h3 className="mt-2 font-display text-2xl lg:text-3xl font-semibold text-[var(--brand-ink)]">
                Tambahan opsional untuk <em className="not-italic">dorong omset</em> UMKM.
              </h3>
            </div>
            <a
              href="https://wa.me/628211001473?text=Halo%20kak%2C%20saya%20tertarik%20dengan%20layanan%20add-on"
              target="_blank"
              rel="noreferrer"
              data-testid="addon-cta"
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--brand-ink)] link-sweep"
            >
              Tanya add-on <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {addons.map((a, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-4 rounded-xl border border-[var(--brand-border)] bg-[var(--brand-cream)] px-5 py-4"
              >
                <span className="text-sm text-[var(--brand-ink)] font-semibold">{a.label}</span>
                <span className="text-sm font-bold text-[var(--brand-azure)] whitespace-nowrap">{a.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}