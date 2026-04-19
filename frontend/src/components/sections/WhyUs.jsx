import { Gauge, MapPin, Bot, CreditCard, BarChart3, HeartHandshake } from "lucide-react";

const items = [
  {
    icon: Gauge,
    title: "Ngebut di HP & Desktop",
    desc: "Core Web Vitals hijau. Calon pembeli gak lari gara-gara loading lama.",
  },
  {
    icon: MapPin,
    title: "Muncul di Google Maps",
    desc: "Optimasi GBP & SEO lokal biar UMKM-mu ditemukan di kota sendiri.",
  },
  {
    icon: Bot,
    title: "AI-Readable & Schema",
    desc: "Dibekali JSON-LD schema.org: ChatGPT, Gemini, dan Google mudah merekomendasikan bisnismu.",
  },
  {
    icon: CreditCard,
    title: "Siap Jualan Online",
    desc: "Integrasi Midtrans, QRIS, WA Order, hingga e-wallet lokal Indonesia.",
  },
  {
    icon: BarChart3,
    title: "Analytics Transparan",
    desc: "Laporan pengunjung, sumber trafik, dan performa halaman — gratis.",
  },
  {
    icon: HeartHandshake,
    title: "Didampingi Developer Langsung",
    desc: "Ngobrol langsung sama yang ngoding — tanpa CS berlapis ala agensi besar.",
  },
];

export default function WhyUs() {
  return (
    <section
      data-testid="whyus-section"
      id="why"
      className="relative py-20 lg:py-28 bg-[var(--brand-ink)] text-white grain-overlay overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-40 -right-20 halo-blue w-[480px] h-[480px] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 halo-gold w-[420px] h-[420px] blur-3xl opacity-50" />
      <div className="pointer-events-none absolute inset-0 dotted-grid-dark opacity-30" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[var(--brand-gold)] font-bold">
              Kenapa Pilih Kami
            </div>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl font-semibold leading-[1.05]">
              Website yang bikin UMKM
              <br />
              <em className="not-italic text-[var(--brand-gold)]">
                dilihat seperti brand nasional.
              </em>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pl-6 flex items-end">
            <p className="text-white/70 leading-relaxed">
              Kami bukan pabrik template. Setiap website dirancang supaya UMKM
              lokal bisa bersaing di kolom pencarian Google yang sama dengan
              perusahaan besar — pakai senjata teknis yang sama: Next.js full
              coding, SEO schema.org, dan performa kelas 1.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <div
              key={i}
              data-testid={`why-card-${i}`}
              className="group relative rounded-2xl p-7 glass-dark hover:bg-white/10 transition-all duration-500"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[var(--brand-gold)]/10 border border-[var(--brand-gold)]/30 text-[var(--brand-gold)] group-hover:-rotate-6 transition-transform">
                <it.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{it.title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                {it.desc}
              </p>
              <div className="mt-5 text-[11px] uppercase tracking-[0.22em] text-white/40 font-bold">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
