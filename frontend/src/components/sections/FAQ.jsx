import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Berapa biaya jasa pembuatan website UMKM?",
    a: "Harga jasa pembuatan website UMKM kami mulai Rp 1.500.000 untuk paket Starter (landing page Next.js), Rp 2.900.000 untuk Bisnis (company profile), Rp 4.900.000 untuk Toko Online, dan mulai Rp 7.900.000 untuk Custom Premium. Sangat bersaing dibanding agensi besar yang rata-rata mematok Rp 10–25 juta untuk coding custom Next.js.",
  },
  {
    q: "Apa bedanya website Next.js full coding dengan WordPress/template?",
    a: "Next.js full coding 5–10x lebih cepat dari WordPress, lebih aman dari malware, SEO-nya jauh lebih kuat karena mendukung server-side rendering, dan tidak bergantung plugin premium berbayar. Cocok untuk UMKM yang ingin terlihat profesional dan bersaing di Google.",
  },
  {
    q: "Apakah website benar-benar cocok untuk UMKM lokal Indonesia?",
    a: "Ya. Kami fokus melayani UMKM lokal — warung, kuliner, jasa laundry, fashion, konveksi, hingga jasa profesional daerah. Setiap website dioptimasi untuk pencarian lokal (Google Maps + kata kunci daerah) sehingga pelanggan di kota Anda mudah menemukan bisnis Anda.",
  },
  {
    q: "Berapa lama proses pembuatan website selesai?",
    a: "Landing page UMKM: 3–5 hari kerja. Company profile: 7–10 hari kerja. Toko online: 14–21 hari kerja. Custom premium: 3–6 minggu tergantung kompleksitas fitur. Semua progress dilaporkan secara transparan.",
  },
  {
    q: "Apakah sudah SEO-friendly dan mobile responsive?",
    a: "Semua paket sudah termasuk SEO technical on-page (meta tags, sitemap XML, robots.txt, schema.org JSON-LD, Open Graph), desain mobile-first di semua perangkat, Core Web Vitals passing, dan integrasi Google Search Console + Google Analytics 4.",
  },
  {
    q: "Apakah ada garansi & maintenance setelah website jadi?",
    a: "Ya. Semua paket termasuk garansi bug fix 30 hari gratis, update konten 2x gratis, dan maintenance berkala. Perpanjangan maintenance tahun berikutnya hanya Rp 500rb/tahun — jauh lebih hemat dibanding agensi besar.",
  },
  {
    q: "Apakah bisa custom design sesuai brand UMKM saya?",
    a: "Tentu. Setiap paket dikerjakan custom sesuai warna, logo, dan positioning brand UMKM Anda. Kami akan diskusi bareng soal target pelanggan, kompetitor, dan tone bisnis sebelum mulai desain.",
  },
  {
    q: "Pembayaran bisa DP atau harus lunas?",
    a: "Kami menerima sistem DP 50% di awal (setelah deal), dan pelunasan 50% saat website siap launching. Pembayaran via transfer bank, QRIS, atau e-wallet.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section
      data-testid="faq-section"
      id="faq"
      className="relative py-20 lg:py-28 bg-[var(--brand-cream)]"
    >
      <div className="mx-auto max-w-6xl px-5 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="sticky top-28">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[var(--brand-azure)] font-bold">
              FAQ
            </div>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl font-semibold leading-[1.05] text-[var(--brand-ink)]">
              Pertanyaan
              <br />
              yang <em className="not-italic text-[var(--brand-azure)]">sering</em>
              <br />
              ditanyakan.
            </h2>
            <p className="mt-5 text-[var(--brand-gray-700)] leading-relaxed">
              Tidak ketemu jawaban yang Anda cari? Tim kami siap jawab via
              WhatsApp — gratis, tanpa komitmen.
            </p>
            <a
              href="https://wa.me/628211001473?text=Halo%20kak%2C%20saya%20mau%20bertanya%20soal%20jasa%20website"
              target="_blank"
              rel="noreferrer"
              data-testid="faq-cta"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--brand-ink)] text-white px-5 py-3 text-sm font-bold hover:bg-[var(--brand-ink-2)] transition"
            >
              Tanya Langsung di WA
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                data-testid={`faq-item-${i}`}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-white border-[var(--brand-ink)] shadow-[0_10px_30px_rgba(10,37,64,0.08)]"
                    : "bg-white border-[var(--brand-border)] hover:border-[var(--brand-ink)]/40"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                  aria-expanded={isOpen}
                  data-testid={`faq-toggle-${i}`}
                >
                  <span className="font-bold text-[var(--brand-ink)] text-[15px] leading-snug">
                    {f.q}
                  </span>
                  <span
                    className={`shrink-0 flex items-center justify-center h-8 w-8 rounded-full ${
                      isOpen
                        ? "bg-[var(--brand-ink)] text-[var(--brand-gold)]"
                        : "bg-[var(--brand-cream)] text-[var(--brand-ink)]"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-[var(--brand-gray-700)] animate-fade-up">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
