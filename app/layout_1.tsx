import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "KURASIBALI.COM - Jual Beli Villa, Perumahan, Tanah & Sewa di Bali | Kalkulator KPR",
  description: "Kurasibali.com - Platform kurasi properti Bali terpercaya. Jual beli villa, perumahan, tanah kosong, sewa rumah & tanah di Badung, Canggu, Ubud, Uluwatu. Dilengkapi simulasi kalkulator KPR & takeover kredit. Cek BPN & notaris rekanan.",
  keywords: ["jual villa bali", "tanah bali", "perumahan bali", "sewa villa bali", "takeover kredit bali", "kpr bali", "kalkulator kpr", "kurasibali"],
  openGraph: {
    title: "KURASIBALI.COM - Kurasi Properti Bali Terbaik",
    description: "Villa, Perumahan, Tanah & Sewa di Bali. Cek legalitas BPN + Simulasi KPR instan.",
    url: "https://kurasibali.com",
    siteName: "KURASIBALI.COM",
    locale: "id_ID",
    type: "website"
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#FFFEFB] text-zinc-800 antialiased">{children}</body>
    </html>
  )
}
