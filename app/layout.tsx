
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KURASI BALI - Takeover Kredit Villa & Tanah Legal di Bali",
  description: "Platform kurasi takeover kredit villa & tanah di Bali. 47+ properti terverifikasi legal BPN, Bank, Notaris. Aman, transparan, harga di bawah pasar.",
  keywords: ["takeover kredit bali", "villa bali", "kurasi bali", "takeover kredit villa"],
  openGraph: {
    title: "KURASI BALI - Takeover Kredit Aman & Transparan",
    description: "Kurasi properti takeover kredit di Bali - cek legal 7 lapis",
    url: "https://kurasibali.com",
    siteName: "KURASI BALI",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
