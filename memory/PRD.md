# PRD — Website Jasa Pembuatan Website UMKM (Agung Darmawan)

## Problem Statement (asli, tidak diparafrasa)
> buatkan saya web perbaikan untuk web ini: https://agungwebdev.com/, referensi perubahan nya seperti ini: https://www.asain.co.id/ ambil semua tampilan perubahan nya, buat code nya sesuai SEO pencarian google dan AI yang bisa membuat web nya bersaing dengan perusahaan besar, untuk harga berikan saya harga yang sesuai dengan saya yang seorang web developer baru intinya harga harus bersaing denga perusahaan besar, dan untuk informasi yang ada coba ubah menjadi solusi untuk para umkm local

## Arsitektur
- **Frontend**: React 19 + Tailwind CSS + lucide-react + custom fonts (Plus Jakarta Sans + Fraunces)
- **Backend**: tidak dipakai untuk v1 (pilihan user 3.a, static site). server.py default tetap berjalan untuk kebutuhan masa depan.
- **Routing**: single-page + anchor sections (Hero → Stats → About → Pricing → Process → Portfolio → WhyUs → Testimonials → FAQ → Contact → Footer)
- **Integrations**: 0 integrasi pihak ke-3. CTAs mengarah ke WhatsApp (`wa.me/628211001473`). Google Maps embed via iframe (tanpa API key).

## User Personas
1. **Pemilik UMKM pemula** — ingin go online tapi budget terbatas, cari harga kompetitif & kerja transparan.
2. **UMKM tumbuh** — sudah jalan offline, butuh upgrade ke toko online + SEO lokal.
3. **Pengusaha lokal (F&B, fashion, jasa)** — butuh website yang muncul di Google Maps & bersaing dengan brand besar.

## Core Requirements
- Desain modern profesional, identitas Indonesia (biru deep + emas).
- Struktur paket harga jelas + ribbon TERLARIS.
- Konten dan tone 100% fokus pada UMKM lokal Indonesia.
- SEO technical lengkap: meta tags, Open Graph, Twitter card, canonical, robots.txt, sitemap.xml, JSON-LD (ProfessionalService, Service, FAQPage, Person).
- AI-ready: schema.org terstruktur supaya ChatGPT/Gemini/Google dapat merekomendasikan bisnis.
- Mobile-first responsive.
- Semua CTA → WhatsApp dengan pesan prefilled.
- Google Maps embed + link share.

## Paket Harga Final (bersaing untuk Next.js full coding)
| Paket | Harga | Tag |
|---|---|---|
| UMKM Starter | Rp 1.500.000 | Landing Page |
| UMKM Bisnis ⭐ TERLARIS | Rp 2.900.000 | Company Profile |
| UMKM Toko Online | Rp 4.900.000 | E-Commerce |
| Custom Premium | mulai Rp 7.900.000 | Web App Custom |

Add-on: SEO Lokal Rp 500rb/bln, Copywriting Rp 150rb/hal, Logo+brand Rp 350rb, Google Ads kelola Rp 750rb/bln.

## Implementasi — 2026-01-19
- ✅ Hero dark premium + browser mockup UMKM Dashboard animasi floaty
- ✅ Marquee ticker kategori UMKM (warung, F&B, laundry, dll.)
- ✅ Stats 4 metrik
- ✅ About 5 value props + quote card founder
- ✅ Pricing 4 paket + add-on list
- ✅ Process 5 langkah kerja
- ✅ Portfolio 3 project nyata (toko sepatu, web film, web keuangan)
- ✅ WhyUs 6 alasan (dark section w/ glass cards)
- ✅ Testimonials 3 klien UMKM
- ✅ FAQ 8 pertanyaan (accordion + schema FAQPage)
- ✅ Contact form WA + Google Maps Bekasi + link `share.google/a4CdPOQhaXKnbEYRX`
- ✅ Footer CTA banner + navigasi + social + kontak
- ✅ Floating WhatsApp button sticky
- ✅ SEO lengkap (meta, OG, Twitter, JSON-LD ×4, robots.txt, sitemap.xml)
- ✅ Navbar transparent → solid saat scroll (teks putih/gelap adaptif)
- ✅ data-testid di semua elemen interaktif
- ✅ Testing agent: 100% success rate (frontend)

## Backlog — P1 (next iteration)
- Dedicated page per layanan (`/jasa-pembuatan-website-umkm`, `/jasa-toko-online`) untuk SEO long-tail.
- Blog CMS (pakai Markdown atau MDX) untuk 3 artikel SEO gratis yang dijanjikan.
- Studi kasus detail (before/after traffic, konversi).
- Google Analytics 4 + Google Search Console verification.

## Backlog — P2
- Bahasa Inggris toggle (id/en) untuk ekspansi.
- Live chat widget (Tawk.to / Crisp) selain WhatsApp.
- Dark mode toggle keseluruhan site.
- Dashboard klien untuk ticket maintenance.

## Enhancement Ide
- **Lead magnet** "Checklist 10 Hal yang Wajib Ada di Website UMKM" (PDF) — tukar email → newsletter → upsell paket.
