# 🚀 Panduan Deployment — agungwebdev.com

Dokumen ini berisi langkah lengkap untuk deploy website ke **Vercel** dan mendaftarkannya ke **Google Search Console**, **Google Business Profile**, & **Google Analytics 4** agar bisa cepat tampil di halaman 1 Google.

---

## 📦 1. Persiapan File Build

Project sudah siap dengan:

- `frontend/vercel.json` → konfigurasi routing SPA + security header
- `frontend/.env.production` → environment variable produksi
- `frontend/.vercelignore` → file yang di-skip saat upload
- `frontend/public/robots.txt` → izin Google + AI crawlers
- `frontend/public/sitemap.xml` → peta situs untuk Google
- `frontend/public/google825e7538bee18ed9.html` → **file verifikasi Google Search Console (sudah dipasang)**
- `frontend/next-migration-reference/` → referensi untuk migrasi ke Next.js di masa depan (tidak ikut build)

Struktur folder yang akan di-deploy hanyalah **`/frontend`** (backend tidak dipakai untuk website static ini).

---

## 🌐 2. Deploy ke Vercel

### Cara A — Via GitHub (recommended)

1. Push seluruh project ke repository GitHub (pakai tombol **Save to GitHub** di chat Emergent).
2. Masuk ke https://vercel.com → **Add New Project** → import repo Anda.
3. **Root Directory**: `frontend`
4. **Framework Preset**: `Create React App` (auto-detect).
5. **Build Command**: `yarn build` *(sudah tertulis di vercel.json)*
6. **Output Directory**: `build` *(sudah tertulis di vercel.json)*
7. Klik **Deploy**.

### Cara B — Via Vercel CLI

```bash
# Install CLI (sekali saja)
npm i -g vercel

# Masuk ke folder frontend
cd /app/frontend

# Login & deploy
vercel login
vercel --prod
```

Setelah deploy, Vercel kasih URL: `https://nama-project.vercel.app`. Langkah selanjutnya: hubungkan domain Anda (`agungwebdev.com`).

### Pasang Custom Domain `agungwebdev.com`

1. Di dashboard project Vercel → tab **Settings → Domains**.
2. Tambahkan `agungwebdev.com` dan `www.agungwebdev.com`.
3. Vercel kasih DNS record — masuk ke provider domain Anda (misal Niagahoster / Rumahweb), lalu set:
   - **Tipe A** → `76.76.21.21`
   - **Tipe CNAME** untuk `www` → `cname.vercel-dns.com`
4. Tunggu 5-30 menit, domain akan aktif dengan SSL HTTPS otomatis.

---

## 🔍 3. Daftar ke Google Search Console (WAJIB untuk SEO)

File verifikasi sudah ada di project: **`/app/frontend/public/google825e7538bee18ed9.html`**

Langkah:
1. Buka https://search.google.com/search-console
2. Tambahkan **Properti baru → URL prefix** → `https://agungwebdev.com`
3. Pilih metode verifikasi **HTML file**.
4. Google akan minta file bernama `google825e7538bee18ed9.html` — file tersebut **sudah ada di project** dan akan otomatis accessible di `https://agungwebdev.com/google825e7538bee18ed9.html` setelah deploy ke Vercel.
5. Klik **Verify** di Search Console → seharusnya langsung tervalidasi.
6. Setelah terverifikasi:
   - Menu **Sitemaps** → submit: `https://agungwebdev.com/sitemap.xml`
   - Menu **URL Inspection** → minta Google crawl halaman utama.

---

## 📍 4. Daftar ke Google Business Profile (SEO Lokal)

Agar muncul di **Google Maps** saat UMKM cari "jasa website Bekasi":

1. Buka https://business.google.com → **Manage now**.
2. Nama bisnis: `Agung Darmawan — Jasa Pembuatan Website UMKM`
3. Kategori: `Web designer`
4. Lokasi: Bekasi, Jawa Barat (boleh tanpa alamat fisik persis, pilih "I deliver goods and services to my customers").
5. Jam operasional: Senin-Sabtu 08:00–21:00
6. Nomor telp: +62 821 1001 473
7. Website: https://agungwebdev.com
8. Verifikasi (biasanya via SMS atau video).
9. Upload foto logo + foto kerja → jadikan profil menarik.

---

## 📊 5. Setup Google Analytics 4 (opsional tapi penting)

1. Buka https://analytics.google.com → **Create Property**.
2. Buat Web stream → masukkan `https://agungwebdev.com`.
3. Copy **Measurement ID** (format: `G-XXXXXXXXXX`).
4. Tambahkan script di `/app/frontend/public/index.html` sebelum `</head>`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Ganti `G-XXXXXXXXXX` dengan ID Anda.

---

## 🤖 6. Submit ke Bing & AI Search (bonus visibilitas)

- **Bing Webmaster Tools**: https://www.bing.com/webmasters (auto import dari Search Console).
- **IndexNow** (instan kasih tau Bing & Yandex): gratis via Bing Webmaster.
- Pastikan JSON-LD schema.org aktif (sudah ada di `<head>`) → ChatGPT Search, Perplexity, dan Gemini akan baca struktur ini.

---

## ✅ 7. Checklist Post-Deployment

| Item | Status |
|---|---|
| [ ] Website live di `agungwebdev.com` (HTTPS) |
| [ ] `robots.txt` accessible: `agungwebdev.com/robots.txt` |
| [ ] `sitemap.xml` accessible dan sudah di-submit ke Search Console |
| [ ] `google825e7538bee18ed9.html` accessible dan Search Console ter-verify |
| [ ] Google Business Profile live di Maps |
| [ ] Google Analytics 4 tracking aktif |
| [ ] Logo + Favicon + OG Image (1200×630) sudah diganti dengan branding Anda |
| [ ] Tes kecepatan di https://pagespeed.web.dev → target nilai **≥ 90** |
| [ ] Tes schema di https://validator.schema.org → semua JSON-LD valid |

---

## 💡 Tips Agar Cepat Ranking

1. **Konten halaman dedicated** — tambah halaman `/jasa-pembuatan-website-umkm-bekasi`, `/jasa-toko-online-jakarta`, dll. (long-tail keyword).
2. **Blog rutin** — 2 artikel/bulan dengan keyword seperti "cara UMKM go online", "website vs marketplace untuk UMKM".
3. **Backlink lokal** — daftar di direktori UMKM Indonesia, komunitas web developer, testimoni klien dengan link.
4. **Update `sitemap.xml` + lastmod** setiap kali ada konten baru.

---

**Butuh bantuan?** Hubungi Emergent Support untuk deploy otomatis langsung dari chat.
