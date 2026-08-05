// Auto-loader untuk semua artikel blog.
// JANGAN diedit manual — file ini otomatis mengambil semua *.post.js di folder ini.
// Untuk menambah artikel: buat file baru dengan format `NN-slug.post.js` (lihat README.md).

const context = require.context("./", false, /\.post\.js$/);

const posts = context.keys().map((key) => {
  const mod = context(key);
  return mod.default || mod;
});

// Urut dari yang paling baru
export const allPosts = posts.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export const getPostBySlug = (slug) =>
  allPosts.find((p) => p.slug === slug);

export const getRelatedPosts = (currentSlug, limit = 2) =>
  allPosts.filter((p) => p.slug !== currentSlug).slice(0, limit);

export default allPosts;
