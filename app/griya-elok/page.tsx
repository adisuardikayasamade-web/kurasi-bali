"use client";

import { ShieldCheck, MapPin, MessageCircle, Check, ArrowRight, BadgeCheck } from "lucide-react";

const WA_NUMBER = "6285156282660";
const WA_MESSAGE = `Halo Kurasi Bali 👋 Saya mau survei Rumah A.Yani Utara

*Rumah Siap Huni A.Yani Utara*
📍 Jl. Suradipa II, Gg. Uma Dewi - A.Yani Utara, Denpasar
📐 LT 100m² / LB 65m² • 3KT • 1KM • Hadap Utara
💰 Rp 985 Jt (Belum termasuk BPHTB & BBN)
🏷️ SHM, Siap Huni, 3 Kamar

Masih available? Kapan bisa cek lokasi? Saya mau jadwal survei minggu ini.`;

const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

export default function GriyaElokPage() {
  return (
    <div className="min-h-screen bg-[#FFFBF5] text-[#121212] antialiased selection:bg-[#FF6B35]/20 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap');
        .font-serif { font-family: "Instrument Serif", serif; }
        .font-sans { font-family: "Inter", sans-serif; }
        * { font-family: "Inter", sans-serif; }
        h1,h2,h3,.font-serif { font-family: "Instrument Serif", serif; letter-spacing: -0.02em; }
      `}</style>

      {/* TOP URGENCY BAR */}
      <div className="w-full bg-[#121212] text-white text-[11px] tracking-widest uppercase font-bold text-center h-9 flex items-center justify-center gap-2 px-4">
        <span className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse" />
        DIJUAL – HANYA 1 UNIT ‼ A.YANI UTARA • DENPASAR • SIAP HUNI
        <span className="hidden md:inline-flex ml-2 opacity-60">•</span>
        <span className="hidden md:inline-flex">LT 100m² / LB 65m² • 3KT • 1KM</span>
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-40 bg-[#FFFBF5]/80 backdrop-blur-xl border-b border-[#EDE8E0]">
        <div className="max-w-[1120px] mx-auto px-5 md:px-8 h-[64px] flex items-center justify-between">
          <div className="font-serif text-[20px]">kurasi bali<span className="font-sans text-[8px] tracking-[0.2em] ml-1 align-super opacity-60">.COM</span></div>
          <div className="flex items-center gap-2">
            <span className="hidden md:inline-flex bg-white border border-[#EDE8E0] rounded-full px-3 py-1 text-[11px] font-medium items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#2A9D8F]" /> SHM • Verified</span>
            <a href={WA_LINK} target="_blank" className="bg-[#121212] text-white rounded-full px-5 h-9 text-[13px] font-semibold flex items-center gap-2 hover:bg-black transition">
              <MessageCircle className="w-4 h-4" /> WA 0851-5628-2660
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-[1120px] mx-auto px-5 md:px-8 pt-8 md:pt-14 pb-10 grid md:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-10 items-start">
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 bg-white border border-[#EDE8E0] rounded-full px-3 py-1 text-[11px] font-bold tracking-widest uppercase">
            <span className="w-5 h-5 rounded-full bg-[#2A9D8F] text-white grid place-items-center">✓</span>
            SIAP HUNI • HANYA 1 UNIT DI A.YANI UTARA
          </div>
          <h1 className="font-serif text-[38px] md:text-[56px] leading-[0.9] mt-5">
            Rumah Siap Huni<br />
            di Pusat <span className="italic font-normal">Denpasar,</span><br />
            Tanpa Renov.
          </h1>
          <p className="mt-4 text-[15px] leading-[1.6] opacity-70 max-w-[480px]">
            Jl. Suradipa II, Gg. Uma Dewi – A.Yani Utara. Lingkungan asri, akses 4,5m mobil masuk, hadap utara, air sumur lancar. Cocok untuk keluarga kecil maupun investasi kost.
          </p>

          <div className="mt-6 bg-white border border-[#EDE8E0] rounded-[20px] p-4 md:p-5 flex items-center justify-between">
            <div>
              <div className="text-[11px] tracking-widest uppercase opacity-50 font-bold">Harga Jual</div>
              <div className="font-serif text-[32px] leading-none mt-1">Rp 985 Jt</div>
              <div className="text-[11px] opacity-50 mt-1">Belum termasuk BPHTB & BBN • Nego tipis</div>
            </div>
            <div className="text-right">
              <div className="inline-flex bg-[#FF6B35] text-white text-[11px] font-bold px-3 py-1 rounded-full">HANYA 1 UNIT !!</div>
              <div className="mt-2 text-[12px] font-medium flex items-center gap-1 justify-end"><MapPin className="w-3.5 h-3.5" /> A.Yani Utara • Denpasar</div>
              <div className="text-[11px] opacity-60">LT 100m² / LB 65m²</div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-4 gap-2">
            {[
              {k:"LT", v:"100m²"},
              {k:"LB", v:"65m²"},
              {k:"Kamar", v:"3 KT"},
              {k:"Mandi", v:"1 KM"},
              {k:"Listrik", v:"1300W"},
              {k:"Air", v:"Sumur"},
              {k:"Hadap", v:"Utara"},
              {k:"Akses", v:"4,5m"},
            ].map((s)=>(
              <div key={s.k} className="bg-white border border-[#EDE8E0] rounded-[14px] p-2.5 text-center">
                <div className="text-[10px] uppercase opacity-50 font-bold tracking-wide">{s.k}</div>
                <div className="text-[13px] font-semibold mt-1">{s.v}</div>
              </div>
            ))}
          </div>

          <a href={WA_LINK} target="_blank" className="mt-6 w-full bg-[#121212] hover:bg-black text-white h-[56px] rounded-full flex items-center justify-center gap-3 text-[15px] font-semibold shadow-[0_12px_32px_rgba(0,0,0,0.15)] transition">
            <MessageCircle className="w-5 h-5" /> Chat WA – Jadwal Survei Sekarang <ArrowRight className="w-4 h-4" />
          </a>
          <div className="mt-3 text-center text-[11px] opacity-50">Respon &lt; 5 menit • 08.00-21.00 WITA • Adi – Kurasi Bali</div>
        </div>

        <div className="order-1 md:order-2 relative">
          <div className="rounded-[28px] overflow-hidden border border-[#EDE8E0] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
            <div className="relative aspect-[4/3] bg-[#F5F1E8]">
              <img src="/griyaelok-1.webp" alt="Rumah A.Yani Utara" className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="bg-[#121212] text-white text-[11px] font-bold px-3 py-1 rounded-full">SHM • Siap Huni</span>
                <span className="bg-white/90 backdrop-blur text-[#121212] text-[11px] font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1"><BadgeCheck className="w-3.5 h-3.5 text-[#2A9D8F]" /> Verified</span>
              </div>
              <div className="absolute bottom-3 left-3 bg-[#FF6B35] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow">HANYA 1 UNIT !! • DENPASAR UTARA</div>
            </div>
            <div className="grid grid-cols-[1.2fr_0.8fr] gap-2 p-2 bg-[#FFFBF5]">
              <div className="rounded-[16px] overflow-hidden aspect-[16/10] bg-[#F5F1E8]">
                <img src="/griyaelok-2.webp" alt="Akses Jalan" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-[16px] bg-[#121212] text-white p-4 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-widest opacity-60 font-bold">Lokasi Strategis</div>
                  <div className="font-serif text-[18px] leading-[1.1] mt-2">Jl. Suradipa II<br/>Gg. Uma Dewi</div>
                </div>
                <div className="text-[11px] opacity-70 leading-[1.4]">5 menit ke RS Sanglah<br/>7 menit ke Renon<br/>Akses 4,5m mobil masuk</div>
              </div>
            </div>
          </div>
          <div className="mt-3 bg-white border border-[#EDE8E0] rounded-[16px] p-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#2A9D8F]/10 grid place-items-center"><ShieldCheck className="w-5 h-5 text-[#2A9D8F]" /></div>
            <div className="text-[12px] leading-[1.3]">
              <div className="font-semibold">Legalitas Clear • SHM atas nama pribadi</div>
              <div className="opacity-60 text-[11px]">Siap AJB & balik nama via notaris rekanan</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-white border-y border-[#EDE8E0]">
        <div className="max-w-[1120px] mx-auto px-5 md:px-8 py-12 md:py-16 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="text-[11px] tracking-widest uppercase font-bold opacity-40">Kenapa A.Yani Utara?</div>
            <h2 className="font-serif text-[28px] md:text-[32px] leading-[0.95] mt-3">Pusat Denpasar,<br/>Tapi Tetap Asri.</h2>
          </div>
          <div className="md:col-span-2 grid md:grid-cols-2 gap-6 text-[14px] leading-[1.6]">
            {[
              "Akses jalan paving 4,5m – mobil & truk material masuk, bukan gang sempit",
              "Hadap utara – adem, tidak panas sore, sirkulasi udara bagus",
              "Lingkungan asli Bali – tetangga ramah, bukan kawasan kontrakan liar",
              "Siap huni total – tidak perlu renov, tinggal bawa koper. Listrik 1300W & air sumur sudah ready",
              "Dekat fasilitas: 5 menit RS Sanglah, 7 menit Lapangan Renon, 10 menit Tiara Dewata",
              "Investasi aman – LT 100m² di Denpasar Utara di bawah 1M sudah langka, cocok untuk kost atau rumah tinggal",
            ].map((t,i)=>(
              <div key={i} className="flex gap-3"><span className="w-6 h-6 rounded-full bg-[#2A9D8F]/10 grid place-items-center shrink-0 mt-0.5"><Check className="w-3.5 h-3.5 text-[#2A9D8F]" /></span><span className="opacity-80">{t}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#121212] text-white relative overflow-hidden">
        <div className="max-w-[1120px] mx-auto px-5 md:px-8 py-12 md:py-16 text-center relative">
          <div className="inline-flex bg-white/10 border border-white/10 rounded-full px-3 py-1 text-[11px] tracking-widest uppercase font-bold">Hanya 1 Unit • First Come First Serve</div>
          <h2 className="font-serif text-[32px] md:text-[52px] leading-[0.9] mt-5">Mau Survei Rumah<br/>A.Yani Utara Hari Ini?</h2>
          <p className="mt-4 opacity-60 text-[14px] max-w-[520px] mx-auto">Klik WA di bawah, saya kirim shareloc + video detail + jadwal survei. Respon cepat, tanpa basa-basi makelar.</p>
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-3">
            <a href={WA_LINK} target="_blank" className="inline-flex items-center gap-3 bg-[#FF6B35] hover:bg-[#ff7a4a] text-white rounded-full px-8 h-[56px] text-[15px] font-semibold shadow-[0_12px_32px_rgba(255,107,53,0.35)] transition">
              <MessageCircle className="w-5 h-5" /> Chat WA – Jadwal Survei
            </a>
            <span className="text-[12px] opacity-50">Siap AJB • Notaris rekanan • Bisa bantu KPR</span>
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-t border-[#EDE8E0] p-3">
        <a href={WA_LINK} target="_blank" className="w-full bg-[#121212] text-white h-12 rounded-full flex items-center justify-center gap-2 font-semibold text-[14px]">
          <MessageCircle className="w-4 h-4" /> WA – Jadwal Survei A.Yani Utara (Rp 985 Jt)
        </a>
      </div>

      <div className="h-20 md:h-0" />
    </div>
  );
}
