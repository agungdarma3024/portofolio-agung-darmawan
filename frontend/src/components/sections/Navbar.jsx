import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const links = [
  { label: "Layanan", href: "#services" },
  { label: "Paket Harga", href: "#pricing" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Proses", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5">
        <nav
          className={`flex items-center justify-between rounded-2xl transition-all duration-300 ${
            scrolled
              ? "bg-white/85 backdrop-blur-lg border border-[var(--brand-border)] shadow-[0_6px_24px_rgba(10,37,64,0.08)] px-4 py-2.5"
              : "bg-transparent px-2 py-2"
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            data-testid="navbar-logo"
            className="flex items-center gap-2.5"
          >
            <span className={`relative inline-flex h-10 w-10 items-center justify-center rounded-xl font-bold text-lg shadow-md transition-colors ${
              scrolled ? "bg-[var(--brand-ink)] text-white" : "bg-white text-[var(--brand-ink)]"
            }`}>
              AD
              <span className={`absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-[var(--brand-gold)] border-2 ${scrolled ? "border-white" : "border-[var(--brand-ink)]"}`}></span>
            </span>
            <div className="leading-tight">
              <div className={`text-[13px] font-extrabold tracking-tight transition-colors ${scrolled ? "text-[var(--brand-ink)]" : "text-white"}`}>
                Agung Darmawan
              </div>
              <div className={`text-[10px] uppercase tracking-[0.18em] transition-colors ${scrolled ? "text-[var(--brand-gray-500)]" : "text-white/60"}`}>
                Jasa Website UMKM
              </div>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                  href={l.href}
                  className={`link-sweep px-3 py-2 text-sm font-medium transition ${
                    scrolled
                      ? "text-[var(--brand-ink)]/80 hover:text-[var(--brand-ink)]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              data-testid="nav-cta-whatsapp"
              href="https://wa.me/628211001473?text=Halo%20kak%2C%20saya%20mau%20konsultasi%20jasa%20pembuatan%20website%20UMKM"
              target="_blank"
              rel="noreferrer"
              className={`cta-shine inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                scrolled
                  ? "bg-[var(--brand-ink)] text-white hover:bg-[var(--brand-ink-2)]"
                  : "bg-[var(--brand-gold)] text-[var(--brand-ink)] hover:bg-[#ffcc3b]"
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              Konsultasi Gratis
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen(!open)}
            className={`lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border transition ${
              scrolled
                ? "bg-white border-[var(--brand-border)] text-[var(--brand-ink)]"
                : "bg-white/10 border-white/20 text-white backdrop-blur"
            }`}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile dropdown */}
        {open && (
          <div
            data-testid="mobile-menu"
            className="lg:hidden mt-2 rounded-2xl bg-white border border-[var(--brand-border)] shadow-xl p-4 animate-fade-up"
          >
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 px-2 text-sm font-medium text-[var(--brand-ink)] border-b border-[var(--brand-border)] last:border-b-0"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/628211001473"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand-ink)] text-white px-5 py-3 text-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              Konsultasi Gratis via WhatsApp
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
