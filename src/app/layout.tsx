// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website UMKM Profesional | Portfolio Agung",
  description: "Jasa pembuatan website untuk UMKM, toko online, dan bisnis kecil. Website profesional, responsif, dan terjangkau. Berbasis di Jakarta, melayani seluruh Indonesia.",
  keywords: [
    "jasa pembuatan website",
    "jasa website UMKM",
    "pembuatan website murah",
    "jasa web design",
    "website toko online",
    "jasa website Jakarta",
    "web developer Jakarta",
    "website bisnis UMKM",
    "jasa website profesional",
    "pembuatan website terjangkau"
  ],
  authors: [{ name: "Agung" }],
  creator: "Agung Web Developer",
  publisher: "Agung Web Developer",
  verification: {
    google: "o8ZHfbG_CpCKPJZ38wgKY-JtNtitHIyJIt4tOK7mLX8"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://yourwebsite.com", // Ganti dengan domain Anda
    title: "Jasa Pembuatan Website UMKM Profesional | Portfolio Agung",
    description: "Jasa pembuatan website untuk UMKM, toko online, dan bisnis kecil. Website profesional, responsif, dan terjangkau.",
    siteName: "Portfolio Agung",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg", // Buat gambar untuk preview
        width: 1200,
        height: 630,
        alt: "Jasa Pembuatan Website UMKM"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website UMKM Profesional",
    description: "Website profesional untuk UMKM dan bisnis kecil",
    images: ["https://yourwebsite.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id"> 
      <head>
        {/* Google Analytics - tambahkan jika punya */}
        {/* Schema.org untuk Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Agung Web Developer",
              "description": "Jasa pembuatan website untuk UMKM dan bisnis kecil",
              "url": "https://portofolio-agung-darmawan.vercel.app/",
              "telephone": "+62-8211001473", // Tambahkan nomor Anda
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jakarta",
                "addressCountry": "ID"
              },
              "priceRange": "$$",
              "serviceType": ["Website Development", "Web Design", "E-commerce"],
              "areaServed": "Indonesia"
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-gray-900`}>{children}</body>
    </html>
  );
}