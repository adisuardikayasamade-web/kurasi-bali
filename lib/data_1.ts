export type PropertyType = 'villa' | 'perumahan' | 'tanah' | 'sewa'

export type Listing = {
  id: string
  type: PropertyType
  title: string
  location: string
  price: number
  priceLabel: string
  installment?: string
  luas: string
  kamar: string
  sertifikat: string
  image: string
  badge: string
  isTakeover?: boolean
}

export const listings: Listing[] = [
  {
    id: "villa-bomba",
    type: "villa",
    title: "Villa Modern 2BR - Buduk",
    location: "Buduk, Badung - 10 menit ke Canggu",
    price: 1800000000,
    priceLabel: "Rp 1.8 Miliar",
    installment: "Cicilan mulai 6.6jt/bln",
    luas: "120 m²",
    kamar: "2 Kamar",
    sertifikat: "SHM",
    image: "/villa-bomba.webp",
    badge: "TAKEOVER",
    isTakeover: true
  },
  {
    id: "villa-ubud",
    type: "villa",
    title: "Villa Joglo 3BR View Sawah - Ubud",
    location: "Ubud, Gianyar - View Sawah Abadi",
    price: 3200000000,
    priceLabel: "Rp 3.2 Miliar",
    luas: "250 m²",
    kamar: "3 Kamar",
    sertifikat: "SHM",
    image: "/villa-ubud.webp",
    badge: "BEST VIEW"
  },
  {
    id: "perumahan-munggu",
    type: "perumahan",
    title: "Cluster Scandinavian - Munggu",
    location: "Munggu, Mengwi - Badung",
    price: 950000000,
    priceLabel: "Rp 950 Jt",
    installment: "KPR 5.2jt/bln",
    luas: "90 m²",
    kamar: "2 Kamar",
    sertifikat: "SHM Split",
    image: "/perumahan-munggu.webp",
    badge: "CLUSTER BARU"
  },
  {
    id: "tanah-bingin",
    type: "tanah",
    title: "Tanah Kavling - Bingin Cliff",
    location: "Bingin, Uluwatu - 200m ke Pantai",
    price: 1200000000,
    priceLabel: "Rp 1.2 Miliar / Are",
    luas: "200 m²",
    kamar: "Tanah Kosong",
    sertifikat: "SHM",
    image: "/tanah-bingin.webp",
    badge: "LANGKA"
  },
  {
    id: "tanah-cemagi",
    type: "tanah",
    title: "Tanah Sawah - Cemagi",
    location: "Cemagi, Mengwi - Pinggir Jalan",
    price: 650000000,
    priceLabel: "Rp 650 Jt / Are",
    luas: "500 m²",
    kamar: "Tanah Kosong",
    sertifikat: "SHM",
    image: "/tanah-cemagi.webp",
    badge: "INVESTASI"
  },
  {
    id: "sewa-canggu",
    type: "sewa",
    title: "Sewa Tahunan Villa 2BR - Canggu",
    location: "Berawa, Canggu - 5 menit ke Pantai",
    price: 180000000,
    priceLabel: "Rp 180 Jt / Tahun",
    luas: "150 m²",
    kamar: "2 Kamar",
    sertifikat: "Sewa Tahunan",
    image: "/sewa-canggu.webp",
    badge: "SEWA"
  },
  {
    id: "sewa-tanah-pererenan",
    type: "sewa",
    title: "Sewa Tanah 25 Tahun - Pererenan",
    location: "Pererenan, Mengwi - Area Villa",
    price: 35000000,
    priceLabel: "Rp 35 Jt / Are / Tahun",
    luas: "300 m²",
    kamar: "Sewa Lahan",
    sertifikat: "Leasehold",
    image: "/sewa-tanah.webp",
    badge: "LEASEHOLD"
  },
  {
    id: "perumahan-babadan",
    type: "perumahan",
    title: "Rumah Minimalis - Babadan",
    location: "Babadan, Pererenan",
    price: 1250000000,
    priceLabel: "Rp 1.25 Miliar",
    installment: "KPR 7.1jt/bln",
    luas: "110 m²",
    kamar: "3 Kamar",
    sertifikat: "SHM",
    image: "/perumahan-babadan.webp",
    badge: "SIAP HUNI"
  }
]
