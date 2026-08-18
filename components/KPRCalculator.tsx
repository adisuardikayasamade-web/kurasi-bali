"use client";
import { useState, useMemo } from "react";
import WAButton from "./WAButton";
export default function KPRCalculator({ defaultPrice = 2500000000 }: { defaultPrice?: number }) {
  const [price, setPrice] = useState(defaultPrice);
  const [dpPercent, setDpPercent] = useState(20);
  const [tenor, setTenor] = useState(20);
  const [rate, setRate] = useState(8.5);
  const result = useMemo(() => {
    const dpAmount = price * (dpPercent/100);
    const plafon = price - dpAmount;
    const r = rate/12/100;
    const n = tenor*12;
    const cicilan = r === 0 ? plafon/n : plafon * (r * Math.pow(1+r,n)) / (Math.pow(1+r,n)-1);
    return { dpAmount, plafon, cicilan };
  }, [price, dpPercent, tenor, rate]);
  const fmt = (n:number) => new Intl.NumberFormat("id-ID",{style:"currency", currency:"IDR", maximumFractionDigits:0}).format(n);
  const waMsg = `Halo Kurasi Bali, simulasi KPR:%0AHarga: ${fmt(price)}%0ADP: ${dpPercent}% (${fmt(result.dpAmount)})%0ATenor: ${tenor} thn%0ACicilan: ${fmt(result.cicilan)}/bln%0ADari: kurasibali.com`;
  return (
    <div className="bg-[#1A1A19] border border-white/10 rounded-[24px] p-6 md:p-8">
      <h3 className="text-2xl font-black uppercase tracking-tighter">Simulasi Kredit <span className="text-[#FF4E11]">Kurasi</span></h3>
      <p className="text-white/60 text-sm mt-1">Hitung cicilan real, bukan gimmick makelar.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="space-y-4">
          <label className="block"><span className="text-xs uppercase tracking-widest text-white/50">Harga Properti</span><input type="number" value={price} onChange={e=>setPrice(Number(e.target.value))} className="w-full mt-2 bg-[#1F1F1E] border border-white/10 rounded-xl px-4 py-3" /></label>
          <label className="block"><span className="text-xs uppercase tracking-widest text-white/50">DP {dpPercent}% - {fmt(result.dpAmount)}</span><input type="range" min={10} max={50} value={dpPercent} onChange={e=>setDpPercent(Number(e.target.value))} className="w-full accent-[#FF4E11]" /></label>
          <div className="grid grid-cols-2 gap-4"><label><span className="text-xs text-white/50">Tenor</span><select value={tenor} onChange={e=>setTenor(Number(e.target.value))} className="w-full mt-2 bg-[#1F1F1E] border border-white/10 rounded-xl px-4 py-3">{[5,10,15,20,25,30].map(t=><option key={t} value={t}>{t} thn</option>)}</select></label><label><span className="text-xs text-white/50">Bunga %</span><input type="number" step={0.1} value={rate} onChange={e=>setRate(Number(e.target.value))} className="w-full mt-2 bg-[#1F1F1E] border border-white/10 rounded-xl px-4 py-3"/></label></div>
        </div>
        <div className="bg-[#0F0F0E] rounded-[20px] p-6 border border-white/5">
          <div className="text-white/50 text-xs uppercase">Cicilan / Bulan</div><div className="text-3xl font-black text-[#FF4E11] mt-1">{fmt(result.cicilan)}</div>
          <WAButton message={waMsg} className="mt-6 w-full bg-[#FF4E11] text-black font-bold uppercase tracking-widest text-sm py-4 rounded-xl text-center block">Konsultasi Skema Ini via WA →</WAButton>
        </div>
      </div>
    </div>
  )
}
