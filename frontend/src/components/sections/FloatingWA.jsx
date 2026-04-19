export default function FloatingWA() {
  return (
    <a
      data-testid="floating-whatsapp"
      href="https://wa.me/628211001473?text=Halo%20kak%20Agung%2C%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20UMKM"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat WhatsApp"
      className="fixed bottom-5 right-5 z-40 group"
    >
      <span className="absolute -top-10 right-0 whitespace-nowrap rounded-full bg-[var(--brand-ink)] text-white text-[11px] font-bold px-3 py-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
        Chat gratis di WhatsApp
      </span>
      <span className="relative flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] shadow-[0_10px_30px_rgba(37,211,102,0.45)] hover:scale-105 transition-transform">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60 animate-ping" />
        <i className="relative fa-brands fa-whatsapp text-white text-2xl"></i>
      </span>
    </a>
  );
}
