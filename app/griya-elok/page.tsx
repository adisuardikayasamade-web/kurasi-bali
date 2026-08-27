"use client";

import { useState, useMemo } from "react";
import { ShieldCheck, MapPin, MessageCircle, Check, ArrowRight, BadgeCheck, Calculator, Info } from "lucide-react";

const WA_NUMBER = "6285156282660";
const HARGA = 985000000;

const formatRp = (n:number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);
const formatJt = (n:number) => `Rp ${(n/1000000).toFixed(0)} Jt`;

export default function GriyaElokPage() {
  const [dpPercent, setDpPercent] = useState(20);
  const [tenor, setTenor] = useState(20);
  const [bunga, setBunga] = useState(9);

  const { dp, pokok, cicilan, totalBayar, totalBunga } = useMemo(() => {
    const dpVal = Math.round(HARGA * (dpPercent/100));
    const pokokVal = HARGA - dpVal;
    const r = (bunga/100)/12;
    const n = tenor*12;
    const cicil = r === 0 ? pokokVal/n : (pokokVal * r * Math.pow(1+r,n)) / (Math.pow(1+r,n)-1);
    const total = cicil * n + dpVal;
    return { dp: dpVal, pokok: pokokVal, cicilan: Math.round(cicil), totalBayar: Math.round(total), totalBunga: Math.round(total - HARGA) };
  }, [dpPercent, tenor, bunga]);

  const waSimulasi = `Halo Kurasi Bali 👋 Saya sudah simulasi KPR Rumah A.Yani Utara:

Harga: ${formatRp(HARGA)}
DP ${dpPercent}%: ${formatRp(dp)}
Pokok Kredit: ${formatRp(pokok)}
Tenor: ${tenor} tahun
Bunga: ${bunga}%/tahun
Estimasi Cicilan: ${formatRp(cicilan)}/bln

Masih available? Saya mau cek BI Checking & proses KPR.`;

  const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waSimulasi)}`;
  const WA_SIMPLE = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Halo Kurasi Bali 👋 Saya mau survei Rumah A.Yani Utara Jl Suradipa II LT100 LB65 3KT 1KM Harga 985jt. Kapan bisa cek lokasi?`)}`;

  return (
    <div className="min-h-screen bg-[#FFFBF5] text-[#121212] antialiased overflow-x-hidden">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap');
        .font-serif{font-family:"Instrument Serif",serif} *{font-family:"Inter",sans-serif} h1,h2,h3,.font-serif{font-family:"Instrument Serif",serif; letter-spacing:-0.02em}`}</style>

      <div className="w-full bg-[#121212] text-white text-[11px] tracking-widest uppercase font-bold text-center h-9 flex items-center justify-center gap-2">
        <span className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse" /> DIJUAL – HANYA 1 UNIT ‼ A.YANI UTARA • DENPASAR • SIAP HUNI
      </div>

      <header className="sticky top-0 z-40 bg-[#FFFBF5]/80 backdrop-blur-xl border-b border-[#EDE8E0]">
        <div className="max-w-[1120px] mx-auto px-5 md:px-8 h-[64px] flex items-center justify-between">
          <div className="font-serif text-[20px]">kurasi bali<span className="text-[8px] tracking-[0.2em] ml-1 align-super opacity-60">.COM</span></div>
          <a href={WA_SIMPLE} target="_blank" className="bg-[#121212] text-white rounded-full px-5 h-9 text-[13px] font-semibold flex items-center gap-2 hover:bg-black transition"><MessageCircle className="w-4 h-4" /> WA 0851-5628-2660</a>
        </div>
      </header>

      <section className="max-w-[1120px] mx-auto px-5 md:px-8 pt-8 md:pt-12 pb-8 grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-start">
        <div>
          <div className="inline-flex items-center gap-2 bg-white border border-[#EDE8E0] rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest"><span className="w-5 h-5 rounded-full bg-[#2A9D8F] text-white grid place-items-center">✓</span> SIAP HUNI • HANYA 1 UNIT</div>
          <h1 className="font-serif text-[38px] md:text-[52px] leading-[0.9] mt-5">Rumah Siap Huni<br/>di Pusat <span className="italic font-normal">Denpasar,</span><br/>Tanpa Renov.</h1>
          <p className="mt-4 text-[15px] leading-[1.6] opacity-70 max-w-[480px]">Jl. Suradipa II, Gg. Uma Dewi – A.Yani Utara. LT 100m² / LB 65m², 3KT 1KM, hadap utara, akses 4,5m. Harga di bawah pasaran Denpasar Utara.</p>

          <div className="mt-6 rounded-[20px] overflow-hidden border border-[#EDE8E0] bg-white">
            <div className="relative aspect-[4/3] bg-[#F5F1E8]"><img src="/griyaelok-1.webp" alt="Rumah" className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 flex gap-2"><span className="bg-[#121212] text-white text-[11px] font-bold px-3 py-1 rounded-full">SHM • Siap Huni</span><span className="bg-white/90 text-[11px] font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1"><BadgeCheck className="w-3.5 h-3.5 text-[#2A9D8F]" /> Verified</span></div>
              <div className="absolute bottom-3 left-3 bg-[#FF6B35] text-white text-[11px] font-bold px-3 py-1 rounded-full">HANYA 1 UNIT !!</div>
            </div>
            <div className="grid grid-cols-2 gap-2 p-2 bg-[#FFFBF5]"><div className="rounded-[14px] overflow-hidden aspect-[16/10]"><img src="/griyaelok-2.webp" alt="Akses" className="w-full h-full object-cover" /></div><div className="rounded-[14px] bg-[#121212] text-white p-4 flex flex-col justify-between"><div className="font-serif text-[18px] leading-[1.1]">Jl. Suradipa II<br/>Gg. Uma Dewi</div><div className="text-[11px] opacity-70 leading-[1.4] mt-3">5 menit RS Sanglah<br/>7 menit Renon<br/>Akses 4,5m mobil</div></div></div>
          </div>
        </div>

        {/* SIMULASI KREDIT CARD */}
        <div className="md:sticky md:top-[88px]">
          <div className="bg-white border border-[#EDE8E0] rounded-[24px] p-5 md:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2"><div className="w-9 h-9 rounded-full bg-[#121212] text-white grid place-items-center"><Calculator className="w-4 h-4" /></div><div><div className="font-semibold text-[14px]">Simulasi KPR</div><div className="text-[11px] opacity-60">Hitung cicilan A.Yani Utara</div></div></div>
              <div className="text-right"><div className="text-[10px] uppercase tracking-widest opacity-50 font-bold">Harga</div><div className="font-serif text-[22px]">Rp 985 Jt</div></div>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <div className="flex justify-between text-[12px] font-medium mb-2"><span>DP {dpPercent}%</span><span className="font-semibold">{formatRp(dp)}</span></div>
                <input type="range" min={10} max={50} step={5} value={dpPercent} onChange={e=>setDpPercent(Number(e.target.value))} className="w-full accent-[#121212] h-1" />
                <div className="flex justify-between text-[10px] opacity-40 mt-1"><span>10%</span><span>50%</span></div>
              </div>
              <div>
                <div className="flex justify-between text-[12px] font-medium mb-2"><span>Tenor {tenor} tahun</span><span className="font-semibold">{tenor*12} bulan</span></div>
                <input type="range" min={5} max={25} step={5} value={tenor} onChange={e=>setTenor(Number(e.target.value))} className="w-full accent-[#121212] h-1" />
                <div className="flex justify-between text-[10px] opacity-40 mt-1"><span>5th</span><span>25th</span></div>
              </div>
              <div>
                <div className="flex justify-between text-[12px] font-medium mb-2"><span>Bunga {bunga}% / tahun</span><span className="font-semibold">Fixed</span></div>
                <input type="range" min={6} max={13} step={1} value={bunga} onChange={e=>setBunga(Number(e.target.value))} className="w-full accent-[#121212] h-1" />
                <div className="flex justify-between text-[10px] opacity-40 mt-1"><span>6%</span><span>13%</span></div>
              </div>
            </div>

            <div className="mt-6 bg-[#FFFBF5] border border-[#EDE8E0] rounded-[16px] p-4">
              <div className="text-[10px] uppercase tracking-widest opacity-50 font-bold">Estimasi Cicilan / Bulan</div>
              <div className="font-serif text-[32px] mt-1">{formatRp(cicilan)}</div>
              <div className="mt-3 grid grid-cols-2 gap-3 text-[11px]">
                <div className="bg-white border border-[#EDE8E0] rounded-[10px] p-2.5"><div className="opacity-50">Pokok Kredit</div><div className="font-semibold mt-1">{formatJt(pokok)}</div></div>
                <div className="bg-white border border-[#EDE8E0] rounded-[10px] p-2.5"><div className="opacity-50">Total Bunga</div><div className="font-semibold mt-1">{formatJt(totalBunga)}</div></div>
              </div>
              <div className="mt-3 flex items-start gap-2 text-[10px] opacity-60 leading-[1.4]"><Info className="w-3 h-3 mt-0.5 shrink-0" /> Simulasi hanya estimasi. Cicilan final tergantung BI Checking & kebijakan bank. Belum termasuk BPHTB, BBN, notaris, KPR fee.</div>
            </div>

            <a href={WA_LINK} target="_blank" className="mt-5 w-full bg-[#121212] hover:bg-black text-white h-[52px] rounded-full flex items-center justify-center gap-2 text-[14px] font-semibold transition">
              <MessageCircle className="w-4 h-4" /> Tanya KPR – Cicilan {formatJt(cicilan)}/bln
            </a>
            <a href={WA_SIMPLE} target="_blank" className="mt-3 w-full bg-white border border-[#EDE8E0] text-[#121212] h-[48px] rounded-full flex items-center justify-center gap-2 text-[13px] font-medium">
              Chat WA – Jadwal Survei <ArrowRight className="w-4 h-4" />
            </a>
            <div className="mt-3 text-center text-[10px] opacity-40">Respon &lt;5 menit • Bantu proses KPR & AJB • Notaris rekanan</div>
          </div>

          <div className="mt-4 bg-[#121212] text-white rounded-[16px] p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 grid place-items-center"><ShieldCheck className="w-5 h-5" /></div>
            <div className="text-[12px]"><div className="font-semibold">Legal Clear • SHM • Siap AJB</div><div className="opacity-60 text-[11px]">Sudah cek BPN • Bisa bantu KPR bank mana saja</div></div>
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-[#EDE8E0]">
        <div className="max-w-[1120px] mx-auto px-5 md:px-8 py-10 grid md:grid-cols-3 gap-8 text-[14px] leading-[1.6]">
          <div><div className="text-[11px] uppercase tracking-widest font-bold opacity-40">Kenapa A.Yani Utara?</div><h2 className="font-serif text-[28px] leading-[0.9] mt-3">Pusat Denpasar,<br/>Tapi Tetap Asri.</h2></div>
          <div className="md:col-span-2 grid md:grid-cols-2 gap-5">
            {["Akses 4,5m mobil masuk, bukan gang sempit","Hadap utara adem, tidak panas sore","Lingkungan asli Bali, tetangga ramah","Siap huni tanpa renov, listrik 1300W air sumur ready","5 menit RS Sanglah, 7 menit Renon","LT 100m² di bawah 1M langka di Denpasar"].map((t,i)=><div key={i} className="flex gap-3"><span className="w-6 h-6 rounded-full bg-[#2A9D8F]/10 grid place-items-center shrink-0"><Check className="w-3.5 h-3.5 text-[#2A9D8F]" /></span><span className="opacity-80">{t}</span></div>)}
          </div>
        </div>
      </section>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-t border-[#EDE8E0] p-3"><a href={WA_LINK} target="_blank" className="w-full bg-[#121212] text-white h-12 rounded-full flex items-center justify-center gap-2 font-semibold text-[13px]"><Calculator className="w-4 h-4" /> Simulasi: {formatRp(cicilan)}/bln – WA Sekarang</a></div>
      <div className="h-20 md:h-0" />
    </div>
  );
}
