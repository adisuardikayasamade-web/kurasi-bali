"use client";

import { BadgeCheck, ShieldCheck, MapPin, ArrowUpRight } from "lucide-react";

const WA_NUMBER = "6285156282660";
const getWaLink = (item: any) => {
  const text = `Halo Kurasi Bali 👋 Saya mau info detail unit ini:

*${item.title}*
📍 ${item.lokasi}
${item.subtitle || ""}
📐 ${item.luas} • ${item.sisaKredit}
💰 ${item.takeover} ${item.priceNote || ""}
🏷️ ${item.tags.join(", ")}

Masih available? Saya mau jadwal survei.`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
};

const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo Kurasi Bali 👋 Saya mau konsultasi properti di Bali")}`;

const koleksi = [
  {
    id: 0,
    lokasi: "A.Yani Utara • Denpasar",
    title: "Rumah Siap Huni A.Yani Utara",
    subtitle: "Jl. Suradipa II, Gg. Uma Dewi - DIJUAL HANYA 1 UNIT",
    luas: "LT 100m² / LB 65m²",
    sisaKredit: "3KT • 1KM • Hadap Utara",
    cicilan: "Siap Huni",
    takeover: "Rp 985 Jt",
    priceNote: "Belum termasuk BPHTB & BBN",
    tags: ["SHM", "Siap Huni", "3 Kamar"],
    discount: "HANYA 1 UNIT !!",
    image: "/griyaelok-1.webp",
    image2: "/griyaelok-2.webp",
    grad: "from-[#FFFBEB] to-[#FEF3C7]",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FFFBF5] text-[#121212] antialiased selection:bg-[#FF6B35]/20 overflow-x-hidden">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap');
      .font-serif{font-family:"Instrument Serif",serif} .font-sans{font-family:"Inter",sans-serif} *{font-family:"Inter",sans-serif} h1,h2,h3,.font-serif{font-family:"Instrument Serif",serif; letter-spacing:-0.02em}`}</style>

      <header className="sticky top-0 z-40 bg-[#FFFBF5]/80 backdrop-blur-xl border-b border-[#EDE8E0]">
        <div className="mx-auto max-w-[1120px] px-5 md:px-8 h-[64px] flex items-center justify-between">
          <div className="font-serif text-[20px]">kurasi bali<span className="font-sans text-[8px] tracking-[0.2em] ml-1 align-super opacity-60">.COM</span></div>
          <div className="hidden md:flex items-center gap-2 text-[12px]">
            <span className="inline-flex items-center gap-1.5 bg-white border border-[#EDE8E0] rounded-full px-3 py-1"><ShieldCheck className="w-4 h-4 text-[#2A9D8F]" /> BPN Checked • Notaris Rekanan</span>
            <a href={WA_LINK} target="_blank" className="bg-[#121212] text-white rounded-full px-4 h-8 flex items-center">WA 0851-5628-2660</a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1120px] px-5 md:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <div className="inline-flex bg-white border border-[#EDE8E0] rounded-full px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-[#2A9D8F]">KOLEKSI TERBARU • 1 UNIT READY • A.YANI UTARA</div>
            <h1 className="font-serif text-[34px] md:text-[48px] leading-[0.9] mt-4">Kurasi Minggu Ini.<br/>Siap Huni.</h1>
          </div>
          <p className="text-[13px] md:text-[14px] opacity-60 max-w-[360px] leading-[1.6]">Rumah pilihan sudah screening legal, cek SHM, dan siap AJB. Tidak ada drama makelar. Fokus 1 unit di A.Yani Utara Denpasar.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-1 gap-6 md:gap-7 min-w-0 max-w-[420px] md:max-w-none">
          {koleksi.map((item) => (
            <div key={item.id} className="group rounded-[28px] border border-[#EDE8E0] bg-white overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F5F1E8]">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-700" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-[#121212] text-white text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full">Takeover Kredit</span>
                  <span className="bg-white/90 backdrop-blur text-[#121212] text-[11px] font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1 border border-white"><BadgeCheck className="w-3.5 h-3.5 text-[#2A9D8F]" /> Verified</span>
                </div>
                <div className="absolute bottom-3 left-3 bg-[#FF6B35] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow">{item.discount}</div>
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-1.5 text-[12px] opacity-60"><MapPin className="w-3.5 h-3.5" /> {item.lokasi}</div>
                <div className="font-serif text-[20px] mt-2 leading-tight">{item.title}</div>
                <div className="text-[11px] opacity-60 mt-1">{item.subtitle}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="bg-[#FFFBF5] border border-[#EDE8E0] rounded-full px-3 py-1 text-[11px]">{item.luas}</span>
                  <span className="bg-[#FFFBF5] border border-[#EDE8E0] rounded-full px-3 py-1 text-[11px]">{item.sisaKredit}</span>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="bg-[#FFFBF5] rounded-[14px] border border-[#EDE8E0] p-3">
                    <div className="text-[10px] tracking-widest uppercase opacity-50 font-semibold">Harga Jual</div>
                    <div className="font-serif text-[18px] mt-1">{item.takeover}</div>
                    <div className="text-[9px] opacity-50 mt-1 leading-tight">{item.priceNote}</div>
                  </div>
                  <div className="bg-[#FFFBF5] rounded-[14px] border border-[#EDE8E0] p-3">
                    <div className="text-[10px] tracking-widest uppercase opacity-50 font-semibold">Status</div>
                    <div className="font-serif text-[18px] mt-1">{item.cicilan}</div>
                  </div>
                </div>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {item.tags.map((t:string)=>(<span key={t} className="text-[11px] border border-[#EDE8E0] rounded-full px-2.5 py-1 bg-white">{t}</span>))}
                </div>
                <a href={getWaLink(item)} target="_blank" className="mt-5 flex items-center justify-center gap-2 w-full h-11 rounded-full bg-[#121212] text-white text-[13px] font-semibold hover:bg-black transition">Cek Detail via WA <ArrowUpRight className="w-4 h-4" /></a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-[#121212] text-white rounded-[20px] p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[13px]">Mau detail lengkap A.Yani Utara? Landing page khusus sudah ready untuk iklan FB Ads</div>
          <a href="/griya-elok" className="bg-white text-[#121212] rounded-full px-5 h-10 flex items-center text-[13px] font-semibold">Buka /griya-elok →</a>
        </div>
      </main>
    </div>
  );
}
