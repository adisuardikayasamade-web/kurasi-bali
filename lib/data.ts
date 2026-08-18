
export type Property = { slug: string; title: string; location: string; price: number; priceText: string; type: string; lt: string; lb: string; kt: number; km: number; cert: string; desc: string; image: string; }
export const properties: Property[] = [
  { slug: "villa-Bomba-150m2-Denpasar-Bali", title: "Villa Bomba Denpasar",   image: "/kurasi_bali_tanpafoto.jpg", location: "Denpasar, Bali", price: 1000000000, priceText: "1M", type: "Leasehold 20th", lt: "150m2", lb: "100m2", kt: 2, km: 2, cert: "Leasehold", desc: "Lolos Kurasi: Jalan 6m, 5 menit ke Living World, ROI tinggi, legal clear, akses mobil.", image: "🏝️" },
  { slug: "tanah-500m2-uluwatu-bingin", title: "Tanah 500m2 View Laut Bingin", location: "Bingin, Uluwatu", price: 1200000000, priceText: "1.2M", type: "Freehold", lt: "500m2", lb: "-", kt: 0, km: 0, cert: "SHM", desc: "Lolos Kurasi: View laut abadi, jalan 5m, ITR kuning, siap bangun.", image: "🌊" },
  { slug: "villa-3br-ubud-jungle", title: "Villa 3BR Jungle Ubud", location: "Ubud", price: 5500000000, priceText: "5.5M", type: "Leasehold 30th", lt: "600m2", lb: "250m2", kt: 3, km: 3, cert: "Leasehold", desc: "Lolos Kurasi: Private jungle, sungai di belakang, super private.", image: "🌿" },
];
export const brand = { name: "KURASI BALI", domain: "kurasibali.com", tagline: "Bali Property, Curated.", wa: "085156282660", waNumber: "6285156282660", ig: "@kurasibali", manifesto: "Kami tidak jual semua. Kami hanya kurasi yang layak. 70% listing kami tolak." };
