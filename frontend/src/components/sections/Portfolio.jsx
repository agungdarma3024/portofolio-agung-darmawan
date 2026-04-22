import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Toko Sepatu Online — UMKM Sneakers",
    category: "E-Commerce / Toko Online",
    description:
      "E-commerce Next.js untuk UMKM sneakers lokal. Integrasi keranjang, produk, dan checkout dengan UX mobile-first.",
    image: "https://agungwebdev.com/project/ecomers.png",
    stack: ["Next.js", "Node.js", "Tailwind", "CMS"],
    live: "https://toko-sepatu-wolak-walik.vercel.app/",
    source: "https://github.com/agungdarma3024/toko-sepatu-new.git",
    stat: "↑ 3.2x traffic organik",
  },
  {
    title: "Catering Rasa Sejati",
    category: "Website Katalog",
    description:
      "Website katalog untuk layanan catering yang terhubing dengan whatapp.",
    image: "https://agungwebdev.com/project/Rasa Sejati Catering.png",
    stack: ["NEXT.JS","Tailwind CSS","Framer Motion","API"],
    live: "https://rasasejati.vercel.app//",
    source: "https://github.com/agungdarma3024/jasa_catering.git",
    stat: "meningkatkan order sebesar 10% dalam 3 bulan",
  },
  {
    title: "Aplikasi Keuangan UMKM",
    category: "Web App / Dashboard",
    description:
      "Dashboard manajemen arus kas & laporan keuangan realtime untuk UMKM & bisnis kecil.",
    image: "https://agungwebdev.com/project/dompet.png",
    stack: ["Next.js", "FastAPI", "MongoDB", "Axios"],
    live: "https://financial-web-l2ny.vercel.app/",
    source: "https://github.com/agungdarma3024/financial-web.git",
    stat: "🗂 12 fitur manajemen keuangan",
  },
];

export default function Portfolio() {
  return (
    <section
      data-testid="portfolio-section"
      id="portfolio"
      className="relative py-20 lg:py-28 bg-[var(--brand-cream)]"
    >
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[var(--brand-azure)] font-bold">
              Studi Kasus
            </div>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl font-semibold leading-[1.05] text-[var(--brand-ink)]">
              Portfolio:
              <br />
              <em className="not-italic">bukti</em> bukan sekadar janji.
            </h2>
          </div>
          <p className="max-w-sm text-[var(--brand-gray-700)]">
            Dari toko online, web katalog, hingga web app — semuanya siap dipakai
            dan masih online. Silakan klik & coba langsung.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article
              key={i}
              data-testid={`portfolio-card-${i}`}
              className="group flex flex-col rounded-3xl bg-white border border-[var(--brand-border)] overflow-hidden hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(10,37,64,0.1)] transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--brand-ink)]">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[11px] font-bold text-[var(--brand-ink)]">
                  {p.category}
                </div>
                <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-[var(--brand-gold)] px-3 py-1 text-[11px] font-bold text-[var(--brand-ink)]">
                  {p.stat}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-xl font-semibold text-[var(--brand-ink)] leading-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--brand-gray-700)] leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-[var(--brand-cream)] border border-[var(--brand-border)] px-2 py-0.5 text-[11px] font-semibold text-[var(--brand-ink)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-5 flex items-center gap-3">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    data-testid={`portfolio-live-${i}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[var(--brand-ink)] text-white px-4 py-2 text-xs font-bold hover:bg-[var(--brand-ink-2)] transition"
                  >
                    Lihat Live <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={p.source}
                    target="_blank"
                    rel="noreferrer"
                    data-testid={`portfolio-source-${i}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--brand-ink)] link-sweep"
                  >
                    <Github className="w-3.5 h-3.5" /> Source
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
