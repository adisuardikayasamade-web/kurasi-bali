"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  ShieldCheck,
  Scale,
  Banknote,
  FileCheck2,
  MessageCircle,
  Star,
  MapPin,
  ArrowRight,
  Menu,
  X,
  Check,
  Quote,
} from "lucide-react";

const WA_LINK =
  "https://wa.me/6285156282660?text=Halo%20Kurasi%20Bali%20%F0%9F%91%8B%20Saya%20mau%20konsultasi%20takeover%20kredit%20properti%20di%20Bali";

const koleksi = [
  {
    id: 0,
    lokasi: "Jimbaran • Badung",
    title: "Griya Elok Jimbaran",
    luas: "90m² / 2BR",
    sisaKredit: "Sisa 10 tahun",
    cicilan: "Rp 12jt/bln",
    takeover: "Rp 850 Jt",
    tags: ["SHM", "IMB", "Ready"],
    discount: "-25% bawah pasar",
    grad: "from-[#FFFBEB] to-[#FEF3C7]",
    image: "/griyaelok-1.webp",
  },
  {
    id: 1,
    lokasi: "Umalas • Badung",
    title: "Villa Bomba Umalas",
    luas: "250m² / 2BR",
    sisaKredit: "Sisa 12 tahun",
    cicilan: "Rp 28jt/bln",
    takeover: "Rp 2.8 M",
    tags: ["SHM", "PBG", "SLO"],
    discount: "-32% bawah pasar",
    grad: "from-[#FFEDD5] to-[#FED7AA]",
  },
  {
    id: 2,
    lokasi: "Tegallalang • Ubud",
    title: "Villa Ubud Jungle View",
    luas: "480m² / 3BR",
    sisaKredit: "Sisa 9 tahun",
    cicilan: "Rp 18jt/bln",
    takeover: "Rp 1.9 M",
    tags: ["SHM", "PBG"],
    discount: "-28% bawah pasar",
    grad: "from-[#DCFCE7] to-[#BBF7D0]",
  },
  {
    id: 3,
    lokasi: "Bingin • Uluwatu",
    title: "Tanah Bingin Cliff Front",
    luas: "600m²",
    sisaKredit: "Sisa 15 tahun",
    cicilan: "Rp 22jt/bln",
    takeover: "Rp 3.2 M",
    tags: ["SHM", "Pondok Wisata"],
    discount: "-41% bawah pasar",
    grad: "from-[#DBEAFE] to-[#BFDBFE]",
  },
];

const faqs = [
  {
    q: "Apakah takeover kredit itu aman secara legal?",
    a: "Aman jika dilakukan dengan prosedur yang benar. Kami cek 7 lapis: BPN (keaslian SHM), Bank (sisa hutang & riwayat), Notaris rekanan (Akta Pengikatan), Pajak & PBB, PBG/SLF, dan histori sengketa. Semua deal via notaris & bank, bukan bawah tangan.",
  },
  {
    q: "Berapa DP / harga takeover yang harus disiapkan?",
    a: "Harga takeover adalah kompensasi ke pemilik lama atas yang sudah dibayar. Di koleksi kami mulai Rp 1.2M - 4M tergantung lokasi. Cicilan lanjut ke bank sesuai sisa tenor, biasanya 30-60% lebih ringan dari KPR baru.",
  },
  {
    q: "Apakah bisa untuk WNA / KITAS?",
    a: "Bisa dengan skema PT PMA atau nominee legal yang kami siapkan bersama notaris. Kami sudah bantu 14 klien expat di Canggu & Uluwatu dengan struktur yang compliant BPN.",
  },
  {
    q: "Berapa lama proses balik nama & akad?",
    a: "Rata-rata 14-21 hari kerja setelah cek legal clear. Timeline: Konsultasi (1 hari) → Due Diligence (5-7 hari) → Deal Bank & Notaris (3-5 hari) → Balik Nama & Serah Terima.",
  },
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const scrollTo = (id: string, label?: string) => {
    setMobileOpen(false);
    if (label) showToast(`Menuju: ${label}`);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    // also update hash for feedback
    if (label) window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <div className="min-h-screen bg-[#FFFBF5] text-[#121212] antialiased selection:bg-[#FF6B35]/20 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap');
        .font-serif { font-family: "Instrument Serif", "Playfair Display", serif; }
        .font-sans { font-family: "Inter", sans-serif; }
        * { font-family: "Inter", sans-serif; }
        h1,h2,h3,.font-serif { font-family: "Instrument Serif", serif; letter-spacing: -0.02em; }
        .fade-in { animation: fadeIn 0.8s ease-out both; }
        .fade-in-2 { animation: fadeIn 0.8s 0.15s ease-out both; }
        .fade-in-3 { animation: fadeIn 0.8s 0.3s ease-out both; }
        @keyframes fadeIn { from{opacity:0; transform: translateY(16px)} to{opacity:1; transform: translateY(0)} }
        .scrollbar-none::-webkit-scrollbar{display:none}
        .scrollbar-none{ -ms-overflow-style:none; scrollbar-width:none}
      `}</style>

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-[#121212] text-white text-[13px] font-medium px-4 py-2 rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.2)] fade-in">
          {toast}
        </div>
      )}

      {/* TOP BAR */}
      <div className="w-full bg-[#121212] text-white text-[11px] tracking-widest uppercase font-medium overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 h-9 flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#2A9D8F] rounded-full animate-pulse" />
              Verified Legal
            </span>
            <span className="hidden md:inline opacity-30">•</span>
            <span className="hidden md:inline">47+ Properti Terkurasi</span>
            <span className="hidden md:inline opacity-30">•</span>
            <span>Badung, Ubud, Canggu</span>
          </div>
          <a href={WA_LINK} target="_blank" className="flex items-center gap-2 hover:text-[#FF6B35] transition">
            <MessageCircle className="w-3.5 h-3.5" />
            WA 0851-5628-2660
          </a>
        </div>
      </div>

      {/* NAVBAR */}
      <header
        className={`sticky top-0 z-50 border-b transition-all ${
          scrolled ? "bg-white/80 backdrop-blur-xl border-[#EDE8E0] shadow-[0_8px_32px_rgba(0,0,0,0.04)]" : "bg-[#FFFBF5] border-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 h-[68px] md:h-[72px] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="font-serif text-[22px] tracking-tight leading-none">
              kurasi bali<span className="font-sans text-[9px] font-semibold tracking-[0.2em] ml-1 align-super opacity-60">.COM</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wide">
            <button onClick={() => scrollTo("koleksi", "Koleksi")} className="hover:opacity-60 transition">Koleksi</button>
            <button onClick={() => scrollTo("cara", "Cara Kerja")} className="hover:opacity-60 transition">Cara Kerja</button>
            <button onClick={() => scrollTo("legal", "Legalitas")} className="hover:opacity-60 transition">Legalitas</button>
            <button onClick={() => scrollTo("faq", "FAQ")} className="hover:opacity-60 transition">FAQ</button>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e85f2f] text-white rounded-full px-5 h-10 text-[13px] font-semibold transition-all hover:shadow-[0_8px_20px_rgba(255,107,53,0.3)]"
            >
              Konsultasi WA <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <button className="md:hidden w-10 h-10 grid place-items-center rounded-full bg-white border border-[#EDE8E0]" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-[#EDE8E0] px-5 py-6 space-y-5">
            <div className="flex flex-col gap-4 text-[15px] font-medium">
              <button onClick={() => scrollTo("koleksi", "Koleksi")} className="text-left">Koleksi</button>
              <button onClick={() => scrollTo("cara", "Cara Kerja")} className="text-left">Cara Kerja</button>
              <button onClick={() => scrollTo("legal", "Legalitas")} className="text-left">Legalitas</button>
              <button onClick={() => scrollTo("faq", "FAQ")} className="text-left">FAQ</button>
            </div>
            <a href={WA_LINK} target="_blank" className="flex items-center justify-center gap-2 bg-[#121212] text-white rounded-full h-12 font-semibold">
              Konsultasi via WhatsApp <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-8 pt-8 md:pt-16 pb-12 md:pb-20 grid md:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-10 items-start overflow-hidden">
        <div className="fade-in min-w-0">
          <div className="inline-flex items-center gap-2 bg-white border border-[#EDE8E0] rounded-full px-3 py-1 text-[11px] tracking-[0.15em] font-semibold">
            <span className="w-5 h-5 rounded-full bg-[#2A9D8F] text-white grid place-items-center text-[10px]">✓</span>
            TAKEOVER KREDIT #1 DI BALI
          </div>

          <h1 className="font-serif text-[40px] md:text-[72px] leading-[0.92] mt-6 md:mt-8 break-words">
            Properti Bali
            <br />
            <span className="italic font-normal">Pilihan, Tanpa</span>
            <br />
            Drama Legal.
          </h1>

          <p className="mt-6 text-[15px] md:text-[18px] leading-[1.6] text-[#121212]/70 max-w-[520px]">
            Kami kurasi villa & tanah dengan kredit bermasalah — cek legalitas 7 lapis, notaris rekanan, dan bank. Kamu tinggal takeover, langsung produktif.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 max-w-full">
            <a
              href="#koleksi"
              onClick={(e) => { e.preventDefault(); scrollTo("koleksi", "Koleksi"); }}
              className="inline-flex items-center gap-2 bg-[#121212] text-white rounded-full px-7 h-[52px] text-[14px] font-semibold hover:bg-black transition"
            >
              Lihat Koleksi <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => scrollTo("cara", "Cara Kerja")}
              className="inline-flex items-center gap-2 bg-white border border-[#EDE8E0] rounded-full px-7 h-[52px] text-[14px] font-semibold hover:border-[#121212]/20 transition"
            >
              Cara Kerjanya
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 divide-x divide-[#EDE8E0] border border-[#EDE8E0] rounded-[20px] bg-white overflow-hidden max-w-[520px] w-full">
            <div className="px-4 md:px-5 py-4">
              <div className="font-serif text-[24px] md:text-[28px] leading-none">47+</div>
              <div className="text-[10px] md:text-[11px] tracking-wide uppercase opacity-60 mt-1 font-medium">Terkurasi</div>
            </div>
            <div className="px-4 md:px-5 py-4">
              <div className="font-serif text-[24px] md:text-[28px] leading-none flex items-center gap-1">
                100% <BadgeCheck className="w-4 h-4 md:w-5 md:h-5 text-[#2A9D8F]" />
              </div>
              <div className="text-[10px] md:text-[11px] tracking-wide uppercase opacity-60 mt-1 font-medium">Cek Notaris</div>
            </div>
            <div className="px-4 md:px-5 py-4">
              <div className="font-serif text-[24px] md:text-[28px] leading-none flex items-center gap-1">
                4.9/5 <Star className="w-4 h-4 fill-[#121212]" />
              </div>
              <div className="text-[10px] md:text-[11px] tracking-wide uppercase opacity-60 mt-1 font-medium">Review Klien</div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative fade-in-2 md:sticky md:top-[100px] min-w-0 w-full">
          <div className="relative rounded-[28px] md:rounded-[32px] overflow-hidden bg-gradient-to-br from-[#FFF7ED] via-[#FFEDD5] to-[#FDBA74] aspect-[4/3.2] md:aspect-[4/3.4] shadow-[0_24px_80px_rgba(0,0,0,0.12)] border border-[#EDE8E0]">
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-full bg-white/70 backdrop-blur grid place-items-center border border-white"><ShieldCheck className="w-6 h-6" /></div>
                <div className="text-[10px] tracking-widest uppercase font-bold opacity-40">Umalas • Canggu • Bali</div>
              </div>
              <div className="space-y-3">
                <div className="inline-flex bg-white/80 backdrop-blur rounded-full px-3 py-1 text-[11px] font-medium border border-white">Villa Tropical Modern • Drone View</div>
                <div className="h-[1px] bg-black/5 w-full" />
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-white/60 backdrop-blur rounded-[12px] p-2.5 border border-white"><div className="text-[10px] opacity-50 uppercase">Luas</div><div className="text-[13px] font-semibold mt-1">250m²</div></div>
                  <div className="bg-white/60 backdrop-blur rounded-[12px] p-2.5 border border-white"><div className="text-[10px] opacity-50 uppercase">Kamar</div><div className="text-[13px] font-semibold mt-1">2BR • Pool</div></div>
                  <div className="bg-white/60 backdrop-blur rounded-[12px] p-2.5 border border-white"><div className="text-[10px] opacity-50 uppercase">SHM</div><div className="text-[13px] font-semibold mt-1">Ready</div></div>
                </div>
              </div>
            </div>
            {/* abstract villa shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[40%] bg-white/40 backdrop-blur-[2px] rounded-[24px] border border-white/50 shadow-[0_12px_40px_rgba(0,0,0,0.08)] -rotate-2" />
            <div className="absolute top-[48%] left-[52%] -translate-x-1/2 -translate-y-1/2 w-[60%] h-[36%] bg-[#121212]/5 rounded-[20px] rotate-1" />
          </div>

          {/* Floating Badge Top */}
          <div className="absolute top-4 left-4 md:-left-6 bg-white rounded-[16px] shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-[#EDE8E0] px-4 py-3 flex items-center gap-3 max-w-[85%] md:max-w-none">
            <div className="w-10 h-10 rounded-full bg-[#2A9D8F]/10 grid place-items-center">
              <ShieldCheck className="w-5 h-5 text-[#2A9D8F]" />
            </div>
            <div>
              <div className="text-[12px] font-semibold leading-none">Verified • SHM • Notaris</div>
              <div className="text-[11px] opacity-60 mt-1">BPN Checked 12 Jan 2026</div>
            </div>
          </div>

          {/* Floating Badge Bottom */}
          <div className="absolute bottom-4 right-4 md:bottom-8 md:-right-4 bg-[#121212] text-white rounded-[18px] shadow-[0_16px_48px_rgba(0,0,0,0.24)] px-5 py-4 min-w-[180px] md:min-w-[200px]">
            <div className="text-[11px] uppercase tracking-[0.15em] opacity-60 font-semibold">Cicilan Mulai</div>
            <div className="font-serif text-[26px] leading-none mt-1">Rp 18jt / bln</div>
            <div className="mt-2 flex items-center gap-1.5 text-[11px]">
              <span className="bg-[#FF6B35] text-white rounded-full px-2 py-0.5 text-[10px] font-bold">-32% PASAR</span>
              <span className="opacity-70">Sisa 12 tahun</span>
            </div>
          </div>

          {/* small second image */}
          <div className="hidden md:block absolute -bottom-10 left-[18%] w-[160px] h-[110px] rounded-[20px] overflow-hidden border-[6px] border-[#FFFBF5] shadow-[0_12px_32px_rgba(0,0,0,0.14)] bg-gradient-to-br from-[#ECFDF5] to-[#A7F3D0]">
            <div className="w-full h-full grid place-items-center text-[10px] font-bold tracking-widest uppercase opacity-40">Ubud • Jungle View</div>
          </div>
        </div>
      </section>

      {/* TRUST LOGOS */}
      <section className="border-y border-[#EDE8E0] bg-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 h-auto md:h-[64px] py-4 md:py-0 flex flex-col md:flex-row items-start md:items-center justify-between md:justify-center gap-3 md:gap-12">
          <span className="text-[11px] tracking-[0.18em] uppercase font-semibold opacity-40 shrink-0">Dipercaya & diverifikasi oleh:</span>
          <div className="flex items-center gap-6 md:gap-12 text-[13px] font-bold tracking-wide opacity-40 overflow-x-auto scrollbar-none w-full md:w-auto">
            <span className="font-serif italic text-[16px] shrink-0">BCA</span>
            <span className="shrink-0">BRI</span>
            <span className="font-serif shrink-0">BNI</span>
            <span className="tracking-[0.2em] shrink-0">mandiri</span>
            <span className="hidden md:inline-flex items-center gap-1 shrink-0"><Scale className="w-4 h-4" /> NOTARIS REKANAN</span>
            <span className="hidden md:inline shrink-0">BPN • ATR</span>
          </div>
        </div>
      </section>

      {/* KOLEKSI */}
      <section id="koleksi" className="max-w-[1280px] mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex bg-[#2A9D8F]/10 text-[#2A9D8F] border border-[#2A9D8F]/20 rounded-full px-3 py-1 text-[11px] font-bold tracking-widest uppercase">
              Koleksi Terbaru • 3 Listing Aktif
            </div>
            <h2 className="font-serif text-[36px] md:text-[54px] leading-[0.95] mt-4">Kurasi Minggu Ini.<br />Siap Takeover.</h2>
          </div>
          <p className="max-w-[360px] text-[14px] leading-[1.6] opacity-60">
            Semua properti sudah lewat screening gagal bayar, cek legal, dan appraisal. Tidak ada drama makelar.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6 md:gap-7 min-w-0">
          {koleksi.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-[28px] border border-[#EDE8E0] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300 min-w-0"
            >
              <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${item.grad} flex items-center justify-center`}>
                <div className="w-[64%] h-[56%] bg-white/70 backdrop-blur rounded-[20px] border border-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] grid place-items-center">
                  <div className="text-center"><div className="font-serif text-[18px] leading-none">{item.title.split(" ").slice(0,2).join(" ")}</div><div className="text-[10px] opacity-50 mt-1 tracking-widest uppercase">{item.lokasi}</div></div>
                </div>
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-[#121212] text-white text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full">Takeover Kredit</span>
                  <span className="bg-white/90 backdrop-blur text-[#121212] text-[11px] font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1 border border-white">
                    <BadgeCheck className="w-3.5 h-3.5 text-[#2A9D8F]" /> Verified
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 bg-[#FF6B35] text-white text-[11px] font-bold px-3 py-1 rounded-full">{item.discount}</div>
              </div>

              <div className="p-5 md:p-6">
                <div className="flex items-center gap-1.5 text-[12px] opacity-60">
                  <MapPin className="w-3.5 h-3.5" /> {item.lokasi}
                </div>
                <h3 className="font-serif text-[22px] mt-2 leading-[1.1]">{item.title}</h3>
                <div className="mt-3 flex items-center gap-2 text-[12px]">
                  <span className="bg-[#FFFBF5] border border-[#EDE8E0] rounded-full px-2.5 py-1">{item.luas}</span>
                  <span className="bg-[#FFFBF5] border border-[#EDE8E0] rounded-full px-2.5 py-1">{item.sisaKredit}</span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="bg-[#FFFBF5] rounded-[14px] border border-[#EDE8E0] p-3">
                    <div className="text-[10px] tracking-widest uppercase opacity-50 font-semibold">Harga Takeover</div>
                    <div className="font-serif text-[18px] mt-1">{item.takeover}</div>
                  </div>
                  <div className="bg-[#FFFBF5] rounded-[14px] border border-[#EDE8E0] p-3">
                    <div className="text-[10px] tracking-widest uppercase opacity-50 font-semibold">Cicilan</div>
                    <div className="font-serif text-[18px] mt-1">{item.cicilan}</div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  {item.tags.map((t) => (
                    <span key={t} className="text-[11px] font-medium border border-[#EDE8E0] rounded-full px-2.5 py-1">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={WA_LINK}
                  target="_blank"
                  className="mt-5 flex items-center justify-center gap-2 w-full h-11 rounded-full bg-[#121212] text-white text-[13px] font-semibold hover:bg-black transition"
                >
                  Cek Detail via WA <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a href={WA_LINK} target="_blank" className="inline-flex items-center gap-2 text-[13px] font-semibold border-b border-[#121212] pb-0.5 hover:opacity-70">
            Minta akses 47+ koleksi private <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* KENAPA */}
      <section id="legal" className="bg-white border-y border-[#EDE8E0]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div className="md:sticky md:top-[110px]">
              <div className="inline-flex bg-[#121212] text-white rounded-full px-3 py-1 text-[11px] tracking-widest uppercase font-bold">Kenapa Kurasi Bali</div>
              <h2 className="font-serif text-[36px] md:text-[48px] leading-[0.95] mt-5">
                Bukan Makelar.<br />
                <span className="italic font-normal">Kami kurator legal.</span>
              </h2>
              <p className="mt-4 text-[15px] leading-[1.7] opacity-60 max-w-[400px]">
                Investor Jakarta & expat Canggu pakai kami karena 1 hal: tidak mau drama sertifikat ganda & bank nakal.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                {
                  icon: ShieldCheck,
                  title: "Cek Legal 7 Lapis",
                  desc: "BPN, Bank, Notaris, Pajak, PBG/SLF, Histori Kredit, Sengketa. Laporan PDF 24 halaman kami kirim sebelum deal.",
                  color: "#2A9D8F",
                },
                {
                  icon: Banknote,
                  title: "Harga di Bawah Pasar 20-40%",
                  desc: "Karena kami ambil dari nasabah gagal bayar yang butuh exit cepat. Bukan harga goreng. Ada appraisal KJPP.",
                  color: "#FF6B35",
                },
                {
                  icon: FileCheck2,
                  title: "Balik Nama Aman via Notaris Rekanan",
                  desc: "Akad di kantor notaris rekanan kami, dana via escrow bank. Tidak ada transfer ke pemilik langsung.",
                  color: "#121212",
                },
              ].map((f, i) => (
                <div key={i} className="bg-[#FFFBF5] border border-[#EDE8E0] rounded-[24px] p-6 md:p-8 flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-white border border-[#EDE8E0] grid place-items-center shrink-0" style={{ color: f.color }}>
                    <f.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-[20px]">{f.title}</h3>
                    <p className="mt-2 text-[14px] leading-[1.6] opacity-70">{f.desc}</p>
                    <div className="mt-3 inline-flex items-center gap-1 text-[12px] font-semibold">
                      <Check className="w-4 h-4 text-[#2A9D8F]" /> Termasuk dalam layanan standar
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROSES */}
      <section id="cara" className="max-w-[1280px] mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="text-center max-w-[720px] mx-auto">
          <div className="inline-flex bg-white border border-[#EDE8E0] rounded-full px-3 py-1 text-[11px] font-bold tracking-widest uppercase">Proses 4 Langkah</div>
          <h2 className="font-serif text-[36px] md:text-[52px] leading-[0.95] mt-4">Dari Chat ke Sertifikat.<br />14-21 Hari.</h2>
        </div>

        <div className="mt-12 md:mt-16 relative">
          <div className="hidden md:block absolute top-[40px] left-[8%] right-[8%] h-[1px] bg-[#EDE8E0] border-dashed" style={{ backgroundImage: "linear-gradient(to right, #EDE8E0 50%, transparent 50%)", backgroundSize: "16px 1px" }} />
          <div className="grid md:grid-cols-4 gap-6 md:gap-4">
            {[
              { n: "01", t: "Konsultasi", d: "Ceritakan budget, area, tujuan (invest / tinggal). Kami match 3 opsi terbaik.", time: "Hari 1" },
              { n: "02", t: "Cek Legal", d: "Tim cek BPN & Bank. Kamu dapat laporan PDF + video drone properti.", time: "Hari 2-7" },
              { n: "03", t: "Deal Bank", d: "Nego pelunasan / takeover di bank. Dana masuk escrow, aman.", time: "Hari 8-12" },
              { n: "04", t: "Balik Nama", d: "Akad notaris, AJB, balik nama SHM. Kunci & IMB serah terima.", time: "Hari 14-21" },
            ].map((s) => (
              <div key={s.n} className="relative bg-white border border-[#EDE8E0] rounded-[24px] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
                <div className="w-10 h-10 rounded-full bg-[#121212] text-white grid place-items-center font-serif text-[16px]">{s.n}</div>
                <div className="mt-4 font-serif text-[20px]">{s.t}</div>
                <div className="mt-2 text-[13px] leading-[1.6] opacity-60">{s.d}</div>
                <div className="mt-4 inline-flex bg-[#FFFBF5] border border-[#EDE8E0] rounded-full px-2.5 py-1 text-[11px] font-semibold">{s.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-[#121212] text-white rounded-t-[32px] md:rounded-t-[48px] overflow-hidden min-w-0">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-3 py-1 text-[11px] tracking-widest uppercase font-semibold">
              <Quote className="w-3 h-3" /> Testimonial Investor
            </div>
            <blockquote className="font-serif text-[26px] md:text-[42px] leading-[1.05] mt-6 break-words">
              “Awalnya takut takeover itu ruwet. Tapi Kurasi Bali yang urus bank BCA & notaris. <span className="text-[#FF6B35]">2 minggu jadi SHM atas nama PT saya.</span> Cicilan 22jt, villa di Bingin sudah jadi Airbnb.”
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 border border-white/20 grid place-items-center font-serif text-[18px]">A</div>
              <div>
                <div className="font-semibold text-[14px]">Andra P. • Investor Jakarta</div>
                <div className="text-[12px] opacity-60">Takeover Villa Bingin, Jan 2026 • PT PMA Setup</div>
              </div>
            </div>
          </div>

          <div className="bg-white text-[#121212] rounded-[28px] p-6 md:p-8 min-w-0">
            <div className="flex items-center justify-between">
              <div className="text-[12px] font-bold tracking-widest uppercase opacity-50">Ringkasan Deal</div>
              <span className="bg-[#2A9D8F] text-white text-[11px] font-bold px-3 py-1 rounded-full">CLOSED</span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-[13px]">
              <div><div className="opacity-50 text-[11px] uppercase">Takeover</div><div className="font-serif text-[18px] mt-1">Rp 3.2 M</div></div>
              <div><div className="opacity-50 text-[11px] uppercase">Cicilan</div><div className="font-serif text-[18px] mt-1">Rp 22jt/bln</div></div>
              <div><div className="opacity-50 text-[11px] uppercase">Sisa Tenor</div><div className="mt-1 font-medium">15 tahun • BCA</div></div>
              <div><div className="opacity-50 text-[11px] uppercase">Yield Airbnb</div><div className="mt-1 font-medium">18% / tahun</div></div>
            </div>
            <div className="mt-6 pt-6 border-t border-[#EDE8E0] flex items-center gap-2 text-[12px]">
              <BadgeCheck className="w-4 h-4 text-[#2A9D8F]" /> Legalitas clear • SHM balik nama 12 hari
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white border-b border-[#EDE8E0]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[0.8fr_1.2fr] gap-10 min-w-0">
          <div>
            <h2 className="font-serif text-[36px] md:text-[46px] leading-[0.95]">Yang sering ditanya.</h2>
            <p className="mt-4 text-[14px] leading-[1.6] opacity-60 max-w-[320px]">Kalau masih ragu, chat WA aja. Kami jawab dengan laporan BPN asli, bukan janji.</p>
            <a href={WA_LINK} target="_blank" className="mt-6 inline-flex items-center gap-2 bg-[#FFFBF5] border border-[#EDE8E0] rounded-full px-4 h-10 text-[13px] font-semibold">
              <MessageCircle className="w-4 h-4" /> Tanya via WhatsApp
            </a>
          </div>

          <div className="divide-y divide-[#EDE8E0] border border-[#EDE8E0] rounded-[24px] overflow-hidden min-w-0">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full text-left px-6 md:px-8 py-5 md:py-6 flex items-start justify-between gap-4 hover:bg-[#FFFBF5]/50 transition"
                >
                  <span className="font-medium text-[15px] md:text-[16px] leading-[1.4] min-w-0">{f.q}</span>
                  <span className={`w-8 h-8 rounded-full border grid place-items-center shrink-0 transition ${activeFaq === i ? "bg-[#121212] text-white border-[#121212]" : "border-[#EDE8E0]"}`}>
                    {activeFaq === i ? <X className="w-4 h-4" /> : <span className="text-[18px] leading-none">+</span>}
                  </span>
                </button>
                {activeFaq === i && (
                  <div className="px-6 md:px-8 pb-6 text-[14px] leading-[1.7] opacity-70 max-w-[620px] -mt-1">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#121212] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-16 md:py-24 relative text-center">
          <div className="inline-flex bg-white/10 border border-white/10 rounded-full px-3 py-1 text-[11px] tracking-widest uppercase font-bold">Siap Takeover?</div>
          <h2 className="font-serif text-[34px] md:text-[64px] leading-[0.95] mt-6 max-w-[760px] mx-auto break-words">
            Siap Takeover<br />Properti Impianmu<br />di Bali?
          </h2>
          <p className="mt-5 text-[15px] md:text-[16px] opacity-60 max-w-[520px] mx-auto leading-[1.6]">
            Konsultasi gratis 15 menit. Kami kasih 3 opsi terbaik sesuai budget & cek legalitasnya dulu.
          </p>
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-3 px-2">
            <a href={WA_LINK} target="_blank" className="inline-flex items-center gap-3 bg-[#FF6B35] hover:bg-[#ff7a4a] text-white rounded-full px-8 h-[56px] text-[15px] font-semibold shadow-[0_12px_32px_rgba(255,107,53,0.35)] transition">
              <MessageCircle className="w-5 h-5" /> Chat WhatsApp Sekarang
            </a>
            <span className="text-[12px] opacity-50">Respon &lt; 5 menit • 08.00-21.00 WITA</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#FFFBF5] border-t border-[#EDE8E0]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-12 md:py-16 grid md:grid-cols-[1.4fr_0.6fr_0.6fr_1fr] gap-10">
          <div>
            <div className="font-serif text-[20px]">kurasi bali<span className="font-sans text-[9px] tracking-[0.2em] ml-1 align-super opacity-60">.COM</span></div>
            <p className="mt-3 text-[13px] leading-[1.6] opacity-60 max-w-[320px]">
              Platform kurasi takeover kredit villa & tanah di Bali. Fokus legal, transparan, no makelar drama. Verified by BPN, Bank, Notaris.
            </p>
            <div className="mt-5 flex gap-2">
              <span className="bg-white border border-[#EDE8E0] rounded-full px-3 py-1 text-[11px] font-medium inline-flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#2A9D8F]" /> Legal Checked</span>
              <span className="bg-white border border-[#EDE8E0] rounded-full px-3 py-1 text-[11px] font-medium">47+ Properti</span>
            </div>
          </div>

          <div>
            <div className="text-[11px] tracking-widest uppercase font-bold opacity-40">Menu</div>
            <div className="mt-4 flex flex-col gap-2.5 text-[13px] font-medium">
              <button onClick={() => scrollTo("koleksi", "Koleksi")} className="text-left hover:opacity-60">Koleksi</button>
              <button onClick={() => scrollTo("cara", "Cara Kerja")} className="text-left hover:opacity-60">Cara Kerja</button>
              <button onClick={() => scrollTo("legal", "Legalitas")} className="text-left hover:opacity-60">Legalitas</button>
              <button onClick={() => scrollTo("faq", "FAQ")} className="text-left hover:opacity-60">FAQ</button>
            </div>
          </div>

          <div>
            <div className="text-[11px] tracking-widest uppercase font-bold opacity-40">Area</div>
            <div className="mt-4 flex flex-col gap-2.5 text-[13px] opacity-70">
              <span>Badung & Canggu</span>
              <span>Ubud & Tegallalang</span>
              <span>Uluwatu & Bingin</span>
              <span>Tabanan & Cemagi</span>
            </div>
          </div>

          <div>
            <div className="text-[11px] tracking-widest uppercase font-bold opacity-40">Kontak</div>
            <div className="mt-4 space-y-3 text-[13px]">
              <a href={WA_LINK} target="_blank" className="flex items-center gap-2 font-semibold hover:text-[#FF6B35]">
                <MessageCircle className="w-4 h-4" /> WA 0851-5628-2660
              </a>
              <div className="opacity-70">IG @adimoyo_</div>
              <div className="opacity-70">halo@kurasibali.com</div>
            </div>
            <div className="mt-6 bg-white border border-[#EDE8E0] rounded-[16px] p-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#121212] text-white grid place-items-center text-[12px] font-serif">A</div>
              <div className="text-[12px] leading-[1.3]">
                <div className="font-semibold">Adi Moyo • Founder</div>
                <div className="opacity-60 text-[11px]">Kurator Properti Bali</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-6 border-t border-[#EDE8E0] flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] opacity-50">
          <span>© 2026 KURASI BALI • kurasibali.com • PT Kurasi Properti Bali</span>
          <span className="flex items-center gap-3">
            <span>Privacy • Legal Disclaimer</span>
            <span className="hidden md:inline">•</span>
            <span>Built for investor Jakarta, Canggu, Ubud</span>
          </span>
        </div>
      </footer>
    </div>
  );
}
