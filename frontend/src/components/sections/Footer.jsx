import { Mail, Phone, MapPin, ArrowUpRight, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="relative bg-[var(--brand-ink)] text-white/80 pt-20 pb-10 overflow-hidden grain-overlay"
    >
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 halo-blue w-[720px] h-[320px] blur-3xl opacity-50" />

      <div className="relative mx-auto max-w-7xl px-5">
        {/* CTA banner */}
        <div className="rounded-3xl bg-[var(--brand-gold)] text-[var(--brand-ink)] p-8 lg:p-12 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 dotted-grid opacity-40" />
          <div className="relative grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <div className="text-xs uppercase tracking-[0.25em] font-bold">Siap Naik Kelas?</div>
              <h3 className="mt-2 font-display text-3xl lg:text-4xl font-semibold leading-[1.05]">
                Diskusikan kebutuhan UMKM Anda hari ini.
                <br />
                <em className="not-italic">Konsultasi gratis, tanpa komitmen.</em>
              </h3>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href="https://wa.me/628211001473?text=Halo%20kak%20Agung%2C%20saya%20mau%20konsultasi"
                target="_blank"
                rel="noreferrer"
                data-testid="footer-cta"
                className="cta-shine inline-flex items-center gap-2 rounded-full bg-[var(--brand-ink)] text-white px-6 py-4 text-sm font-bold hover:bg-[var(--brand-ink-2)] transition"
              >
                Konsultasi Sekarang <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* main footer */}
        <div className="grid lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[var(--brand-ink)] font-bold text-lg shadow-md">
                AD
                <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-[var(--brand-gold)] border-2 border-[var(--brand-ink)]"></span>
              </span>
              <div className="leading-tight">
                <div className="text-sm font-extrabold text-white">Agung Darmawan</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">Jasa Website UMKM Indonesia</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-sm">
              Partner digital untuk UMKM & bisnis lokal Indonesia. Bangun website
              Next.js full coding dengan harga bersaing dan kualitas level
              agensi besar.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/agungdarma3024"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/15 hover:bg-white hover:text-[var(--brand-ink)] transition"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/628211001473"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/15 hover:bg-[var(--brand-gold)] hover:text-[var(--brand-ink)] hover:border-[var(--brand-gold)] transition"
              >
                <i className="fa-brands fa-whatsapp text-[15px]"></i>
              </a>
              <a
                href="mailto:wand21931@gmail.com"
                aria-label="Email"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/15 hover:bg-white hover:text-[var(--brand-ink)] transition"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* nav columns */}
          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-[0.25em] font-bold text-[var(--brand-gold)]">Layanan</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {["UMKM Starter","UMKM Bisnis","UMKM Toko Online","Custom Premium","SEO Lokal","Iklan Google Ads"].map((x) => (
                <li key={x}><a href="#pricing" className="hover:text-white transition">{x}</a></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-[0.25em] font-bold text-[var(--brand-gold)]">Navigasi</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { l: "Portfolio", h: "#portfolio" },
                { l: "Proses Kerja", h: "#process" },
                { l: "Testimoni", h: "#testimonials" },
                { l: "FAQ", h: "#faq" },
                { l: "Kontak", h: "#contact" },
              ].map((x) => (
                <li key={x.h}><a href={x.h} className="hover:text-white transition">{x.l}</a></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.25em] font-bold text-[var(--brand-gold)]">Kontak</div>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 text-[var(--brand-gold)] shrink-0" />
                <a href="mailto:wand21931@gmail.com" className="hover:text-white transition">wand21931@gmail.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 text-[var(--brand-gold)] shrink-0" />
                <a href="https://wa.me/628211001473" target="_blank" rel="noreferrer" className="hover:text-white transition">+62 821 1001 473</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-[var(--brand-gold)] shrink-0" />
                <span>Bekasi, Jawa Barat — melayani seluruh Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} Agung Darmawan. All rights reserved.
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white transition">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition">Syarat Layanan</a>
            <span>Made with ❤ di Bekasi, Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
