# 📁 Next.js Migration Reference

Folder ini berisi file **asli dari Anda** (format Next.js App Router) yang dipakai sebagai **cetak biru** bila nanti website dimigrasikan dari **Create React App** (sekarang) ke **Next.js** (planned).

## File di sini:

### `sitemap.ts`
File dynamic sitemap Next.js App Router. Fitur:
- Base URL `https://agungwebdev.com`
- Auto-scan folder `/content` untuk blog entries (`.md`)
- Static pages: `/`, `/projects`, `/blog`
- Keluar sebagai `MetadataRoute.Sitemap`

**Saat migrasi:** taruh file ini di `src/app/sitemap.ts`.

### `robots.ts` (asli Anda bernama `robots.txt`)
File dynamic robots Next.js App Router. Fitur:
- `User-agent: *` → `Allow: /`
- `Disallow: /private/`
- Sitemap `https://agungwebdev.com/sitemap.xml`

**Saat migrasi:** rename & taruh di `src/app/robots.ts`.

---

## ⚠️ Mengapa tidak langsung dipakai sekarang?

Project saat ini dibangun dengan **Create React App (CRA)** — tidak mengenal file `.ts` dengan `MetadataRoute`. Jadi logikanya saya konversi ke file static yang 100% kompatibel & langsung deploy-ready di Vercel:

| Versi Next.js (folder ini) | Versi CRA aktif (terpakai sekarang) |
|----------------------------|--------------------------------------|
| `src/app/sitemap.ts`       | `public/sitemap.xml`                 |
| `src/app/robots.ts`        | `public/robots.txt`                  |

Hasil akhirnya sama: Google, Bing, dan AI crawler tetap bisa baca `/sitemap.xml` & `/robots.txt`.

---

## 🔄 Roadmap Migrasi ke Next.js (opsional, P2)

Kalau nanti ingin benefit seperti:
- Blog dynamic dari folder `/content` (Markdown)
- Dedicated routes (`/projects`, `/blog`, `/jasa-website-bekasi`)
- Image optimization `<Image />` otomatis
- Metadata per-page untuk SEO yang lebih kuat

Langkah besar migrasinya:
1. `npx create-next-app@latest agungwebdev-next --typescript --app --tailwind`
2. Pindahkan semua section component dari `src/components/sections/*.jsx` → `.tsx` (mostly copy-paste).
3. Letakkan `sitemap.ts` & `robots.ts` dari folder ini ke `src/app/`.
4. Buat halaman `/app/page.tsx` yang merangkum section seperti di CRA.
5. Pindahkan `public/*` (favicon, OG image, google verification) ke root `public/`.
6. Deploy ulang ke Vercel — Vercel akan auto-detect Next.js.
