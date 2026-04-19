import { Users, Briefcase, Star, Clock } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "50+", label: "Website Selesai", accent: "text-[var(--brand-azure)]" },
  { icon: Users, value: "40+", label: "UMKM Terbantu", accent: "text-[var(--brand-gold)]" },
  { icon: Star, value: "4.9/5", label: "Rating Klien", accent: "text-[var(--brand-red)]" },
  { icon: Clock, value: "3-5 hari", label: "Rata-rata Delivery", accent: "text-[var(--brand-azure)]" },
];

export default function Stats() {
  return (
    <section data-testid="stats-section" className="relative py-16 lg:py-20 bg-[var(--brand-cream)]">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              data-testid={`stat-card-${i}`}
              className="relative rounded-2xl bg-white border border-[var(--brand-border)] p-6 shadow-[0_6px_24px_rgba(10,37,64,0.05)] hover:shadow-[0_14px_40px_rgba(10,37,64,0.1)] hover:-translate-y-1 transition-all duration-300"
            >
              <s.icon className={`w-7 h-7 ${s.accent}`} />
              <div className="mt-4 font-display text-4xl lg:text-5xl font-semibold text-[var(--brand-ink)]">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-[var(--brand-gray-500)] font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
