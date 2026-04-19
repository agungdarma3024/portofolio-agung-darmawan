export default function Marquee() {
  const items = [
    "Warung & Kuliner",
    "Fashion & Hijab",
    "Toko Kelontong",
    "Jasa Laundry",
    "Konveksi & UMKM",
    "Klinik & Bidan",
    "Sekolah & Bimbel",
    "Barbershop",
    "Event Organizer",
    "Tour & Travel",
    "Agribisnis",
    "Properti Lokal",
  ];
  return (
    <section
      data-testid="marquee-section"
      className="bg-[var(--brand-ink)] text-white/70 py-5 border-y border-white/10 overflow-hidden"
    >
      <div className="flex items-center gap-3 px-5 text-[11px] uppercase tracking-[0.3em]">
        <span className="text-[var(--brand-gold)] whitespace-nowrap font-bold">
          Dipercaya UMKM ✳
        </span>
        <div className="overflow-hidden flex-1">
          <div className="flex gap-10 animate-marquee whitespace-nowrap">
            {[...items, ...items].map((t, i) => (
              <span key={i} className="font-semibold text-white/80">
                {t}
                <span className="ml-10 text-[var(--brand-gold)]">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
