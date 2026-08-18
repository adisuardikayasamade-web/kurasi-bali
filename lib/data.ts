export type Property = {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
  lb: string;
  lt: string;
  kt: string;
  km: string;
  cert: string;
  desc: string;
  badge?: string;
};

export const properties: Property[] = [
  {
    id: "villa-bomba-denpasar",
    title: "Villa Bomba — Modern Tropical di Denpasar",
    location: "DENPASAR TIMUR • BALI",
    price: "IDR 4.5 Miliar",
    image: "/bali_villa_sunset.webp",
    lb: "150m²",
    lt: "200m²",
    kt: "3 KT",
    km: "3 KM",
    cert: "SHM",
    desc: "Villa siap huni dengan taman tropis, kolam privat, dan akses 5 menit ke Sanur. Legal clear, ROI tinggi untuk sewa harian.",
    badge: "TERKURASI",
  },
  {
    id: "villa-ubud-rice-terrace",
    title: "Villa Ubud — Infinity Pool di Atas Sawah",
    location: "UBUD • BALI",
    price: "IDR 1.2 Miliar / tahun",
    image: "/modern_villa_infinity_pool.webp",
    lb: "100m²",
    lt: "300m²",
    kt: "2 KT",
    km: "2 KM",
    cert: "Leasehold",
    desc: "View sawah terasering abadi, desain minimalis putih, cocok untuk retreat atau investasi villa harian.",
    badge: "VILLA",
  },
  {
    id: "tanah-bingin-ocean-view",
    title: "Tanah Bingin — Cliff Front View Laut",
    location: "BINGIN • ULUWATU",
    price: "IDR 3.8 Miliar",
    image: "/cliffside_villa_bingin.webp",
    lb: "-",
    lt: "500m²",
    kt: "-",
    km: "-",
    cert: "SHM",
    desc: "Tanah tebing langsung menghadap Samudra Hindia, akses jalan aspal, ideal untuk villa mewah ocean front.",
    badge: "TANAH",
  },
  {
    id: "villa-canggu-2",
    title: "Villa Canggu — 3BR Dekat Pantai",
    location: "CANGGU • BALI",
    price: "IDR 6.2 Miliar",
    image: "/bali_villa_sunset.webp",
    lb: "180m²",
    lt: "250m²",
    kt: "3 KT",
    km: "3 KM",
    cert: "SHM",
    desc: "3 menit ke Batu Bolong, full furnished, kolam 10m, sudah ada izin pondok wisata.",
    badge: "TERKURASI",
  },
  {
    id: "tanah-ubud-lease",
    title: "Tanah Ubud — Pinggir Sungai Ayung",
    location: "UBUD • BALI",
    price: "IDR 850 Juta / 25th",
    image: "/modern_villa_infinity_pool.webp",
    lb: "-",
    lt: "800m²",
    kt: "-",
    km: "-",
    cert: "Leasehold",
    desc: "Kontur landai, view sungai dan hutan, listrik dan air sudah masuk. Cocok eco villa.",
    badge: "TANAH",
  },
  {
    id: "villa-uluwatu-cliff",
    title: "Villa Uluwatu — White Cliff Estate",
    location: "ULUWATU • BALI",
    price: "IDR 12.5 Miliar",
    image: "/cliffside_villa_bingin.webp",
    lb: "350m²",
    lt: "1000m²",
    kt: "4 KT",
    km: "5 KM",
    cert: "SHM",
    desc: "Estate mewah di atas tebing, 4 bedroom, infinity pool 20m, pemandangan laut 270 derajat.",
    badge: "LUXURY",
  },
];
