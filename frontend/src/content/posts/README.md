# Cara Menambah Blog Baru

Untuk menambah artikel baru, Anda cukup **buat 1 file baru** di folder ini dengan format nama:

```
NN-slug-artikel.post.js
```

Contoh: `04-cara-riset-kata-kunci-umkm.post.js`

> ⚠️ **Wajib** akhiri nama file dengan `.post.js` supaya otomatis terdeteksi oleh blog loader.

## Template File Artikel

Copy template di bawah ini, ganti isinya, lalu simpan sebagai file baru:

```js
export default {
  slug: "slug-url-artikel-anda",              // URL: /blog/slug-url-artikel-anda
  title: "Judul Artikel Anda di Sini",
  excerpt: "Ringkasan 1-2 kalimat yang muncul di daftar blog dan meta description SEO.",
  coverImage: "https://link-gambar-cover.jpg", // opsional
  author: {
    name: "Agung Darmawan",
    role: "Web Developer & Founder"
  },
  date: "2026-02-15",                          // format YYYY-MM-DD (untuk urutan)
  readTime: "5 menit",                         // estimasi baca
  tags: ["UMKM", "Tips"],                       // opsional, muncul di card
  content: `
# Heading Artikel

Paragraf pembuka artikel Anda…

## Sub Heading

Anda bisa pakai **bold**, *italic*, atau [link](https://example.com).

- Poin daftar 1
- Poin daftar 2

> Blockquote untuk highlight kutipan penting.
`
};
```

## Aturan Format

- **slug** — hanya huruf kecil, angka, dan tanda `-`. Jangan pakai spasi atau karakter khusus.
- **date** — format `YYYY-MM-DD`. Artikel diurutkan otomatis dari yang paling baru.
- **content** — pakai template string backtick. Format tulisan pakai **Markdown**:
  - `# H1`, `## H2`, `### H3` untuk heading
  - `**bold**` dan `*italic*`
  - `- item` untuk bullet list
  - `[teks](url)` untuk link
  - `> teks` untuk blockquote

## Setelah Menambah Artikel Baru

1. Simpan file `.post.js` di folder ini.
2. Hot-reload akan langsung menampilkan artikel di halaman `/blog`.
3. Update `frontend/public/sitemap.xml` supaya artikel terindex Google.

## Cara Menghapus / Edit Artikel

- **Hapus**: hapus file `.post.js` yang bersangkutan.
- **Edit**: buka file `.post.js`, ubah isinya, simpan.
