import { MessageSquare, PencilRuler, Code2, Rocket, LifeBuoy } from "lucide-react";

const steps = [
  { icon: MessageSquare, n: "01", t: "Konsultasi Gratis", d: "Diskusi kebutuhan UMKM lewat WA — kami bantu petakan solusi tanpa biaya." },
  { icon: PencilRuler, n: "02", t: "Desain & Copy", d: "Mockup desain + copywriting disesuaikan dengan target pasar lokal Anda." },
  { icon: Code2, n: "03", t: "Full Coding Next.js", d: "Dibangun dari nol dengan standar performa Google (Core Web Vitals)." },
  { icon: Rocket, n: "04", t: "Launch + SEO", d: "Submit ke Google Search Console, Google Maps, dan Analytics 4." },
  { icon: LifeBuoy, n: "05", t: "Support & Maintain", d: "Garansi bug + maintenance berkala supaya selalu ngebut dan aman." },
];

export default function Process() {
  return (
    <section
      data-testid="process-section"
      id="process"
      className="relative py-20 lg:py-28 bg-white"
    >
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[var(--brand-azure)] font-bold">
              Alur Kerja
            </div>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl font-semibold leading-[1.05] text-[var(--brand-ink)]">
              5 langkah sederhana.
              <br />
              <em className="not-italic">Tanpa drama teknis</em> untuk UMKM.
            </h2>
          </div>
          <p className="max-w-sm text-[var(--brand-gray-700)]">
            Kami pakai alur yang sama untuk warung kopi lokal maupun bisnis skala
            provinsi — transparan, cepat, dan terukur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <div
              key={i}
              data-testid={`process-step-${i}`}
              className="relative group rounded-2xl bg-[var(--brand-cream)] border border-[var(--brand-border)] p-6 hover:bg-[var(--brand-ink)] hover:text-white transition-all duration-500"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-semibold text-[var(--brand-gray-300)] group-hover:text-[var(--brand-gold)] transition-colors">
                  {s.n}
                </span>
                <span className="flex items-center justify-center h-10 w-10 rounded-xl bg-white group-hover:bg-white/10 border border-[var(--brand-border)] group-hover:border-white/20 transition-colors">
                  <s.icon className="w-4 h-4 text-[var(--brand-ink)] group-hover:text-[var(--brand-gold)] transition-colors" />
                </span>
              </div>
              <h3 className="mt-5 font-bold text-base">{s.t}</h3>
              <p className="mt-1.5 text-sm text-[var(--brand-gray-700)] group-hover:text-white/70 transition-colors leading-relaxed">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
