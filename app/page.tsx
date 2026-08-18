"use client";
import { properties } from "../lib/data";
import { useState } from "react";

function PropertyCard({ p }: { p: any }) {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="group bg-white rounded-[24px] overflow-hidden border border-[#EDE8E1] shadow-[0_16px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.10)] transition-all duration-500">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F7F3EF]">
        {!imgError ? (
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#F7F3EF] p-6 text-center">
            <div className="text-[22px] font-bold tracking-tight">KURASI BALIÂ°</div>
            <div className="serif italic text-[13px] text-[#6B6B6B] mt-1">Bali Property, Curated.</div>
            <div className="mt-6 text-[10px] tracking-[0.2em] text-[#9A9A9A] uppercase">Foto Kurasi Menyusul</div>
          </div>
        )}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] tracking-[0.15em] font-semibold">
          {p.badge}
        </div>
        <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center">â™¡</div>
      </div>
      <div className="p-6">
        <div className="text-[10px] tracking-[0.18em] text-[#9A9A9A] uppercase">{p.location}</div>
        <h3 className="serif text-[20px] leading-[1.2] font-[600] mt-2 line-clamp-2">{p.title}</h3>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-3 py-1 rounded-full bg-[#F7F3EF] border border-[#EDE8E1] text-[11px]">{p.lb} LB</span>
          <span className="px-3 py-1 rounded-full bg-[#F7F3EF] border border-[#EDE8E1] text-[11px]">{p.lt} LT</span>
          <span className="px-3 py-1 rounded-full bg-[#F7F3EF] border border-[#EDE8E1] text-[11px]">{p.kt}</span>
          <span className="px-3 py-1 rounded-full bg-[#F7F3EF] border border-[#EDE8E1] text-[11px]">{p.km}</span>
          <span className="px-3 py-1 rounded-full bg-[#141414] text-white text-[11px]">{p.cert}</span>
        </div>
        <p className="text-[13px] text-[#6B6B6B] leading-[1.6] mt-4 line-clamp-2">{p.desc}</p>
        <div className="flex items-center justify-between mt-6 pt-5 border-t border-[#F0EAE2]">
          <div className="font-semibold text-[15px]">{p.price}</div>
          <a href={`https://wa.me/6281234567890?text=Halo%20Kurasi%20Bali%20saya%20mau%20tanya%20${encodeURIComponent(p.title)}`} className="text-[12px] tracking-wide font-medium underline decoration-[#D87C5A] underline-offset-4 hover:text-[#D87C5A]">Lihat Kurasi â†’</a>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [filter, setFilter] = useState("Semua");
  const tabs = ["Semua", "Villa", "Tanah", "SHM", "Leasehold"];
  const filtered = properties.filter(p => filter === "Semua" || p.badge === filter || p.cert === filter || p.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <main className="min-h-screen">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#FFFEFB]/80 backdrop-blur-xl border-b border-[#EDE8E1]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="font-black text-[22px] tracking-[-0.02em]">KURASI BALIÂ°</div>
            <div className="hidden md:block serif italic text-[12px] text-[#6B6B6B] ml-2">Bali Property, Curated.</div>
          </div>
          <nav className="hidden md:flex gap-8 text-[11px] tracking-[0.18em] uppercase">
            <a href="#koleksi" className="hover:text-[#D87C5A]">Koleksi</a>
            <a href="#area" className="hover:text-[#D87C5A]">Area</a>
            <a href="#manifesto" className="hover:text-[#D87C5A]">Manifesto</a>
          </nav>
          <a href="https://wa.me/6281234567890" className="bg-[#141414] text-white px-5 py-2.5 rounded-full text-[12px] font-medium hover:bg-black transition">Konsultasi Kurasi Gratis</a>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-12 grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F3EF] border border-[#EDE8E1] text-[10px] tracking-[0.16em] uppercase">EST. 2024 â€¢ HANYA 12 LISTING AKTIF</div>
          <h1 className="serif text-[42px] md:text-[64px] leading-[0.95] tracking-[-0.03em] mt-6 font-[600]">Properti tidak<br /><span className="italic font-[400]">semua layak</span><br />dijual.</h1>
          <p className="text-[15px] leading-[1.7] text-[#6B6B6B] mt-6 max-w-[44ch]">Kami tidak jual semua. Kami hanya kurasi yang layak. 70% listing yang masuk kami tolak. Karena reputasi lebih mahal dari komisi.</p>
          
          <div className="flex gap-8 mt-10">
            <div><div className="text-[28px] font-bold">70%</div><div className="text-[11px] tracking-wide text-[#6B6B6B] uppercase">Ditolak</div></div>
            <div><div className="text-[28px] font-bold">100%</div><div className="text-[11px] tracking-wide text-[#6B6B6B] uppercase">Legal Clear</div></div>
            <div><div className="text-[28px] font-bold">12</div><div className="text-[11px] tracking-wide text-[#6B6B6B] uppercase">Aktif Kurasi</div></div>
          </div>

          <div className="mt-10 p-2 bg-white border border-[#EDE8E1] rounded-full flex gap-2 max-w-[520px] shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
            <select className="flex-1 bg-[#F7F3EF] rounded-full px-4 py-3 text-[13px] outline-none">
              <option>Semua Area</option>
              <option>Canggu</option>
              <option>Ubud</option>
              <option>Uluwatu</option>
              <option>Denpasar</option>
            </select>
            <select className="flex-1 bg-[#F7F3EF] rounded-full px-4 py-3 text-[13px] outline-none">
              <option>Semua Tipe</option>
              <option>Villa</option>
              <option>Tanah</option>
            </select>
            <button className="bg-[#141414] text-white px-6 rounded-full text-[13px] font-medium">Cari Kurasi</button>
          </div>
        </div>
        <div className="relative">
          <img src="/bali_villa_sunset.webp" alt="Hero Villa" className="w-full aspect-[4/5] object-cover rounded-[32px]" onError={(e)=>{(e.target as any).src="/kurasi_bali_placeholder_1.webp"}} />
          <div className="absolute -bottom-6 -left-6 bg-white rounded-[20px] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-[#EDE8E1] w-[260px]">
            <div className="text-[10px] tracking-[0.15em] uppercase text-[#9A9A9A]">Baru Terkurasi</div>
            <div className="serif font-semibold mt-1">Villa Bomba Denpasar</div>
            <div className="text-[12px] text-[#6B6B6B] mt-1">SHM â€¢ 150mÂ² â€¢ 3KT</div>
            <div className="mt-3 font-bold">IDR 4.5 Miliar</div>
          </div>
        </div>
      </section>

      {/* KOLEKSI */}
      <section id="koleksi" className="max-w-[1280px] mx-auto px-6 md:px-10 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#9A9A9A]">Koleksi Terkurasi</div>
            <h2 className="serif text-[36px] md:text-[44px] leading-[0.95] mt-3">Hanya yang layak<br /><span className="italic font-[400]">kami tampilkan.</span></h2>
          </div>
          <div className="flex gap-2 flex-wrap">
            {tabs.map(t=>(
              <button key={t} onClick={()=>setFilter(t)} className={`px-4 py-2 rounded-full text-[12px] border transition ${filter===t ? 'bg-[#141414] text-white border-[#141414]' : 'bg-white border-[#EDE8E1] hover:border-[#141414]'}`}>{t}</button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {filtered.map(p=> <PropertyCard key={p.id} p={p} />)}
        </div>

        <div className="mt-12 p-4 rounded-[16px] bg-[#FFF8E6] border border-[#F5E6C8] text-[12px] text-[#8A6D3B]">ðŸ’¡ <b>Cara ganti foto anti gagal:</b> Upload foto ke folder <code>public/</code> di GitHub dengan nama misal <code>villa-baru.webp</code>, lalu di file <code>lib/data.ts</code> ganti <code>image: "/villa-baru.webp"</code>. Kalau salah nama, otomatis muncul placeholder beige, bukan tulisan error.</div>
      </section>

      {/* MANIFESTO */}
      <section id="manifesto" className="bg-[#F7F3EF] border-y border-[#EDE8E1] py-20">
        <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
          <div className="serif text-[32px] md:text-[48px] leading-[1.1]">"Kami tolak 70% properti yang masuk.<br />Karena reputasi lebih mahal dari komisi."</div>
          <div className="grid md:grid-cols-3 gap-10 mt-16 text-left">
            <div><div className="w-10 h-10 rounded-full bg-white border border-[#EDE8E1] flex items-center justify-center">âœ“</div><h4 className="font-semibold mt-4">Kurasi Ketat</h4><p className="text-[13px] text-[#6B6B6B] leading-[1.6] mt-2">Cek lapangan, bukan cuma foto. Kami datang, ukur, dan wawancara tetangga.</p></div>
            <div><div className="w-10 h-10 rounded-full bg-white border border-[#EDE8E1] flex items-center justify-center">â—</div><h4 className="font-semibold mt-4">Legal Clear</h4><p className="text-[13px] text-[#6B6B6B] leading-[1.6] mt-2">SHM, IMB, PBB, dan sengketa kami audit sebelum tayang. 100% aman.</p></div>
            <div><div className="w-10 h-10 rounded-full bg-white border border-[#EDE8E1] flex items-center justify-center">â†—</div><h4 className="font-semibold mt-4">ROI Nyata</h4><p className="text-[13px] text-[#6B6B6B] leading-[1.6] mt-2">Bukan janji manis. Kami hitung occupancy, ADR, dan payback jujur.</p></div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#141414] text-[#EDE8E1] py-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between gap-10">
          <div>
            <div className="font-black text-[24px] tracking-tight text-white">KURASI BALIÂ°</div>
            <div className="serif italic text-[13px] text-[#9A9A9A] mt-1">Bali Property, Curated.</div>
            <p className="text-[13px] text-[#9A9A9A] mt-6 max-w-[36ch]">Bukan agen yang jual semua. Kami kurator yang hanya pilih yang layak untuk tinggal dan investasi.</p>
          </div>
          <div className="text-[13px] space-y-3">
            <div className="text-white font-medium">Hubungi Kurator</div>
            <div>WA: +62 812-3456-7890</div>
            <div>IG: @kurasibali</div>
            <div>Email: halo@kurasibali.com</div>
            <div className="pt-4 text-[#6B6B6B]">Saba, Bali â€¢ Buka dengan janji</div>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 mt-12 pt-8 border-t border-[#2A2A2A] text-[11px] text-[#6B6B6B]">Â© 2026 KURASI BALIÂ°. Dibuat dengan kurasi, bukan template.</div>
      </footer>
    </main>
  );
}
