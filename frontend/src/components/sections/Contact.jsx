import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const sendViaWA = (e) => {
    e.preventDefault();
    const text = `Halo kak Agung, saya ${form.name || "-"} (${form.email || "email belum diisi"}).%0A%0ASubjek: ${form.subject || "-"}%0A%0APesan: ${form.message || "-"}`;
    window.open(`https://wa.me/628211001473?text=${text}`, "_blank");
  };

  return (
    <section
      data-testid="contact-section"
      id="contact"
      className="relative py-20 lg:py-28 bg-white"
    >
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left: info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[var(--brand-azure)] font-bold">
              Kontak & Konsultasi
            </div>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl font-semibold leading-[1.05] text-[var(--brand-ink)]">
              Siap bantu{" "}
              <em className="not-italic text-[var(--brand-azure)]">UMKM Anda</em>{" "}
              go online.
            </h2>
            <p className="mt-4 text-[var(--brand-gray-700)] leading-relaxed">
              Konsultasi gratis tanpa komitmen — ceritakan kondisi bisnis Anda,
              kami akan kirim rekomendasi paket & estimasi pengerjaan dalam 1x24
              jam.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-4" data-testid="contact-email">
                <span className="flex items-center justify-center h-11 w-11 rounded-xl bg-[var(--brand-ink)] text-[var(--brand-gold)]">
                  <Mail className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[var(--brand-gray-500)] font-bold">Email</div>
                  <a href="mailto:wand21931@gmail.com" className="font-bold text-[var(--brand-ink)] hover:text-[var(--brand-azure)] transition">
                    wand21931@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4" data-testid="contact-phone">
                <span className="flex items-center justify-center h-11 w-11 rounded-xl bg-[var(--brand-ink)] text-[var(--brand-gold)]">
                  <Phone className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[var(--brand-gray-500)] font-bold">Telepon / WhatsApp</div>
                  <a href="https://wa.me/628211001473" target="_blank" rel="noreferrer" className="font-bold text-[var(--brand-ink)] hover:text-[var(--brand-azure)] transition">
                    +62 821 1001 473
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4" data-testid="contact-location">
                <span className="flex items-center justify-center h-11 w-11 rounded-xl bg-[var(--brand-ink)] text-[var(--brand-gold)]">
                  <MapPin className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[var(--brand-gray-500)] font-bold">Lokasi Operasional</div>
                  <div className="font-bold text-[var(--brand-ink)]">Bekasi, Jawa Barat</div>
                  <div className="text-sm text-[var(--brand-gray-500)]">Melayani seluruh Indonesia (remote friendly)</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex items-center justify-center h-11 w-11 rounded-xl bg-[var(--brand-ink)] text-[var(--brand-gold)]">
                  <Clock className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[var(--brand-gray-500)] font-bold">Jam Respon</div>
                  <div className="font-bold text-[var(--brand-ink)]">Senin–Sabtu · 08.00 – 21.00 WIB</div>
                </div>
              </li>
            </ul>

            {/* Map */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-[var(--brand-border)] shadow-[0_10px_30px_rgba(10,37,64,0.1)]">
              <iframe
                title="Lokasi Agung Darmawan — Bekasi"
                src="https://www.google.com/maps?q=Bekasi,+Jawa+Barat,+Indonesia&output=embed"
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="google-maps-embed"
              />
              <a
                href="https://share.google/a4CdPOQhaXKnbEYRX"
                target="_blank"
                rel="noreferrer"
                data-testid="maps-open-link"
                className="flex items-center justify-center gap-2 bg-[var(--brand-ink)] text-white py-3 text-sm font-bold hover:bg-[var(--brand-ink-2)] transition"
              >
                <MapPin className="w-4 h-4 text-[var(--brand-gold)]" />
                Buka di Google Maps
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={sendViaWA}
              data-testid="contact-form"
              className="relative rounded-3xl p-8 lg:p-10 bg-[var(--brand-ink)] text-white overflow-hidden grain-overlay"
            >
              <div className="pointer-events-none absolute -top-20 -right-20 halo-gold w-64 h-64 blur-3xl opacity-60" />
              <div className="relative">
                <h3 className="font-display text-2xl lg:text-3xl font-semibold">
                  Kirim detail project Anda
                </h3>
                <p className="mt-1.5 text-white/60 text-sm">
                  Form akan diteruskan ke WhatsApp — respon cepat.
                </p>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-bold">Nama Lengkap</span>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      data-testid="contact-input-name"
                      placeholder="Nama Anda"
                      className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--brand-gold)] focus:bg-white/10 transition"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-bold">Email</span>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      data-testid="contact-input-email"
                      placeholder="nama@email.com"
                      className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--brand-gold)] focus:bg-white/10 transition"
                    />
                  </label>
                </div>

                <label className="block mt-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-bold">Subjek</span>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    data-testid="contact-input-subject"
                    className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[var(--brand-gold)] focus:bg-white/10 transition"
                  >
                    <option value="" className="bg-[var(--brand-ink)]">Pilih layanan yang diminati</option>
                    <option value="UMKM Starter (Rp 1,5jt)" className="bg-[var(--brand-ink)]">UMKM Starter</option>
                    <option value="UMKM Bisnis (Rp 2,9jt)" className="bg-[var(--brand-ink)]">UMKM Bisnis</option>
                    <option value="UMKM Toko Online (Rp 4,9jt)" className="bg-[var(--brand-ink)]">UMKM Toko Online</option>
                    <option value="Custom Premium" className="bg-[var(--brand-ink)]">Custom Premium</option>
                    <option value="Konsultasi saja" className="bg-[var(--brand-ink)]">Konsultasi saja</option>
                  </select>
                </label>

                <label className="block mt-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-bold">Detail Project</span>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    data-testid="contact-input-message"
                    rows={5}
                    placeholder="Ceritakan sedikit soal UMKM/bisnis Anda, target pelanggan, dan kebutuhan website…"
                    className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--brand-gold)] focus:bg-white/10 transition resize-none"
                  />
                </label>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="submit"
                    data-testid="contact-submit"
                    className="cta-shine inline-flex items-center gap-2 rounded-full bg-[var(--brand-gold)] text-[var(--brand-ink)] px-6 py-3 text-sm font-bold hover:bg-[#ffcc3b] transition"
                  >
                    <Send className="w-4 h-4" />
                    Kirim via WhatsApp
                  </button>
                  <a
                    href="https://wa.me/628211001473"
                    target="_blank"
                    rel="noreferrer"
                    data-testid="contact-direct-wa"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat Langsung
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
