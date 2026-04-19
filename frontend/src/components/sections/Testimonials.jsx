import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Bu Siti Rahma",
    role: "Pemilik Toko Hijab Rahma, Bekasi",
    rating: 5,
    quote:
      "Sebelum punya website, saya cuma jualan di WA. Sekarang orderan dari Google masuk tiap hari. Website-nya cepat banget di HP — pelanggan saya gak pernah ngeluh lambat lagi.",
    avatar: "https://i.pravatar.cc/120?img=47",
  },
  {
    name: "Pak Budi Santoso",
    role: "Owner Laundry Kilat 24 Jam",
    rating: 5,
    quote:
      "Mas Agung sabar banget jelasin ke saya yang gaptek. Harga juga ramah kantong UMKM. Website-nya keluar di Google Maps dan sekarang pelanggan baru banyak datang dari sana.",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    name: "Mba Ayu Lestari",
    role: "Founder Kopi Kenalan (F&B)",
    rating: 5,
    quote:
      "Desainnya jauh di atas ekspektasi saya untuk harga segitu. Look-nya kayak kafe kekinian di Jakarta padahal saya baru buka 6 bulan. Recommended banget untuk UMKM!",
    avatar: "https://i.pravatar.cc/120?img=32",
  },
];

export default function Testimonials() {
  return (
    <section
      data-testid="testimonials-section"
      id="testimonials"
      className="relative py-20 lg:py-28 bg-white"
    >
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[var(--brand-azure)] font-bold">
            Suara Klien
          </div>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-semibold leading-[1.05] text-[var(--brand-ink)]">
            UMKM bilang apa tentang{" "}
            <em className="not-italic text-[var(--brand-azure)]">kerja kami?</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              data-testid={`testimonial-${i}`}
              className="relative rounded-3xl bg-[var(--brand-cream)] border border-[var(--brand-border)] p-7 hover:bg-white hover:shadow-[0_20px_40px_rgba(10,37,64,0.08)] transition-all duration-500"
            >
              <div className="flex items-center gap-1 text-[var(--brand-gold)]">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-[var(--brand-ink)] leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-[var(--brand-border)] pt-5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover border border-[var(--brand-border)]"
                />
                <div>
                  <div className="font-bold text-sm text-[var(--brand-ink)]">{t.name}</div>
                  <div className="text-xs text-[var(--brand-gray-500)]">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
