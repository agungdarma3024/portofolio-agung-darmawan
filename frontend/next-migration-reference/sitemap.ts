import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://agungwebdev.com'

  // 1. Ambil daftar file dari folder content secara otomatis
  const blogDir = path.join(process.cwd(), 'content')
  let blogEntries: MetadataRoute.Sitemap = []

  // Pastikan foldernya ada supaya tidak error saat build
  if (fs.existsSync(blogDir)) {
    const files = fs.readdirSync(blogDir)
    blogEntries = files.map((filename) => ({
      url: `${baseUrl}/blog/${filename.replace('.md', '')}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  }

  // 2. Gabungkan halaman statis dengan daftar blog dinamis
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogEntries, // Semua artikel blog otomatis masuk ke sini
  ]
}