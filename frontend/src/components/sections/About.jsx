import { ArrowUpRight, Code2, Palette, Search, Smartphone, ShieldCheck } from "lucide-react";

const points = [
  { icon: Code2, title: "Full Coding Next.js", desc: "Bukan template WP — ditulis dari nol, ringan, aman, dan scalable." },
  { icon: Palette, title: "Desain Custom per UMKM", desc: "Warna, tone, dan konten mengikuti identitas bisnis Anda." },
  { icon: Search, title: "SEO Technical On-page", desc: "Schema.org, sitemap, Open Graph, Core Web Vitals lolos." },
  { icon: Smartphone, title: "Mobile-First", desc: "80% pelanggan UMKM buka dari HP — kami optimasi duluan dari situ." },
  { icon: ShieldCheck, title: "Garansi + Maintenance", desc: "Bug fix 30 hari gratis, update konten 2x gratis." },
];

export default function About() {
  return (
    <section
      data-testid="about-section"
      id="about"
      className="relative py-20 lg:py-28 bg-white border-y border-[var(--brand-border)]"
    >
      <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-12 gap-12">
        {/* Left: profile */}
        <div className="lg:col-span-5">
          <div className="sticky top-28">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[var(--brand-azure)] font-bold">
              <span className="h-px w-8 bg-[var(--brand-azure)]" /> Profil Singkat
            </div>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl font-semibold leading-[1.05] text-[var(--brand-ink)]">
              Saya Agung,
              <br />
              <em className="not-italic text-[var(--brand-azure)]">partner digital</em>
              <br />
              untuk UMKM Anda.
            </h2>
            <p className="mt-5 text-[var(--brand-gray-700)] leading-relaxed">
              Full-stack web developer dari Bekasi yang fokus membantu UMKM &
              bisnis kecil Indonesia punya <strong>website setara korporat</strong> —
              dengan harga yang masuk untuk kantong pemilik warung, toko kelontong,
              sampai jasa profesional lokal.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Next.js", "React", "TypeScript", "Tailwind", "Node.js", "MongoDB", "SEO", "UI/UX"].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-[var(--brand-border)] bg-[var(--brand-cream)] px-3 py-1 text-xs font-semibold text-[var(--brand-ink)]"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href="#pricing"
              data-testid="about-cta"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[var(--brand-ink)] link-sweep"
            >
              Lihat paket lengkap <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right: value props */}
        <div className="lg:col-span-7">
          <ul className="grid sm:grid-cols-2 gap-4">
            {points.map((p, i) => (
              <li
                key={i}
                data-testid={`about-point-${i}`}
                className="group rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-cream)] p-6 hover:bg-white hover:shadow-[0_12px_30px_rgba(10,37,64,0.08)] transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--brand-ink)] text-[var(--brand-gold)] group-hover:rotate-6 transition-transform">
                  <p.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-[var(--brand-ink)]">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm text-[var(--brand-gray-700)] leading-relaxed">
                  {p.desc}
                </p>
              </li>
            ))}
            {/* special quote card */}
            <li className="sm:col-span-2 rounded-2xl bg-[var(--brand-ink)] text-white p-7 relative overflow-hidden grain-overlay">
              <div className="absolute -right-8 -bottom-8 halo-gold w-64 h-64 blur-2xl opacity-60" />
              <div className="relative">
                <div className="text-[var(--brand-gold)] font-display text-5xl leading-none">&ldquo;</div>
                <p className="mt-2 text-lg lg:text-xl leading-relaxed max-w-2xl">
                  UMKM nggak boleh kalah keren dari brand besar hanya karena
                  budget. Website yang tepat bisa jadi <em>toko digital 24/7</em>{" "}
                  yang kerja diam-diam naikin omset.
                </p>
                <div className="mt-4 text-sm text-white/60">— Agung Darmawan</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
