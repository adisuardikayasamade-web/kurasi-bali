"use client"
import { useState, useMemo, useEffect } from "react"
import { listings as fallbackListings } from "@/lib/data"
import { supabase, DbListing } from "@/lib/supabase"

type Category = "all" | "villa" | "perumahan" | "tanah" | "sewa"
const categories = [
  { id: "all", label: "Semua" },
  { id: "villa", label: "Villa" },
  { id: "perumahan", label: "Perumahan" },
  { id: "tanah", label: "Tanah Kosong" },
  { id: "sewa", label: "Sewa Rumah/Tanah" },
]

export default function Page() {
  const [activeCat, setActiveCat] = useState<Category>("all")
  const [dbListings, setDbListings] = useState<DbListing[]>([])
  const [loading, setLoading] = useState(true)
  
  // Kalkulator state
  const [harga, setHarga] = useState(1500000000)
  const [dpPersen, setDpPersen] = useState(20)
  const [tenor, setTenor] = useState(15)
  const [bunga, setBunga] = useState(7.5)

  useEffect(() => {
    async function fetchListings() {
      try {
        // Coba fetch dari Supabase, kalau gagal pakai fallback
        if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
          setDbListings(fallbackListings as any)
          setLoading(false)
          return
        }
        const { data, error } = await supabase.from('listings').select('*').eq('is_active', true).order('created_at', { ascending: false })
        if (error) throw error
        if (data && data.length > 0) setDbListings(data)
        else setDbListings(fallbackListings as any)
      } catch (e) {
        setDbListings(fallbackListings as any)
      } finally {
        setLoading(false)
      }
    }
    fetchListings()
  }, [])

  const filtered = useMemo(() => {
    if (activeCat === "all") return dbListings
    return dbListings.filter((l: any) => l.type === activeCat)
  }, [activeCat, dbListings])

  const calc = useMemo(() => {
    const dp = harga * (dpPersen / 100)
    const pinjaman = harga - dp
    const r = bunga / 100 / 12
    const n = tenor * 12
    const cicilan = r === 0 ? pinjaman / n : pinjaman * (r * Math.pow(1+r, n)) / (Math.pow(1+r, n) -1)
    return { dp, pinjaman, cicilan, totalBayar: cicilan*n, totalBunga: cicilan*n - pinjaman }
  }, [harga, dpPersen, tenor, bunga])

  const formatRp = (n: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n)

  return (
    <main>
      <header className="sticky top-0 z-50 bg-[#FFFEFB]/90 backdrop-blur-xl border-b border-zinc-100">
        <div className="mx-auto max-w-[1280px] px-6 h-[68px] flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-baseline"><span className="font-serif text-[24px] font-semibold">kurasi</span><span className="font-serif text-[24px] text-[#C86B4A]">bali</span><span className="ml-1 text-[9px] tracking-[0.3em] text-zinc-400 translate-y-[-6px]">.COM</span></div>
            <nav className="hidden lg:flex gap-7 text-[12px] tracking-widest text-zinc-500">
              <button onClick={()=>setActiveCat("villa")} className={activeCat==='villa'?'text-zinc-900 font-medium':''}>VILLA</button>
              <button onClick={()=>setActiveCat("perumahan")} className={activeCat==='perumahan'?'text-zinc-900 font-medium':''}>PERUMAHAN</button>
              <button onClick={()=>setActiveCat("tanah")} className={activeCat==='tanah'?'text-zinc-900 font-medium':''}>TANAH</button>
              <button onClick={()=>setActiveCat("sewa")} className={activeCat==='sewa'?'text-zinc-900 font-medium':''}>SEWA</button>
              <a href="#kalkulator">SIMULASI KREDIT</a>
              <a href="/admin" className="text-[#C86B4A]">ADMIN</a>
            </nav>
          </div>
          <a href="https://wa.me/6281234567890" className="h-9 px-5 rounded-full bg-zinc-900 text-white text-[12px] flex items-center">KONSULTASI</a>
        </div>
      </header>

      <section className="mx-auto max-w-[1280px] px-6 pt-16 pb-12 grid lg:grid-cols-[1.15fr_0.85fr] gap-12">
        <div>
          <div className="inline-flex px-3 py-1 rounded-full bg-zinc-900 text-white text-[10px] tracking-[0.2em] mb-6">KURASIBALI.COM + SUPABASE • LIVE EDIT DARI HP</div>
          <h1 className="font-serif text-[52px] md:text-[72px] leading-[0.88]">Jual Beli <br/><span className="text-[#C86B4A] italic">Properti Bali</span><br/>Tanpa Drama</h1>
          <p className="mt-6 text-[15px] text-zinc-600 max-w-[480px]">Sekarang semua listing diambil dari database Supabase. Kamu bisa tambah/edit/hapus villa, tanah, perumahan, sewa langsung dari HP lewat /admin.</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map(c=>(
              <button key={c.id} onClick={()=>setActiveCat(c.id as any)} className={`px-5 py-2.5 rounded-full text-[12px] border ${activeCat===c.id?"bg-[#C86B4A] text-white border-[#C86B4A]":"bg-white border-zinc-200"}`}>{c.label}</button>
            ))}
          </div>
          {loading && <div className="mt-6 text-xs text-zinc-400">Loading dari Supabase...</div>}
        </div>
        <div className="rounded-[2.5rem] overflow-hidden bg-zinc-100 aspect-[4/4.2] border shadow-2xl">
          <img src={filtered[0]?.image || "/villa-bomba.webp"} alt="Featured" className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-16">
        <h2 className="font-serif text-[36px]">Properti Pilihan • {filtered.length} listing dari Supabase</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item:any)=>(
            <div key={item.id} className="bg-white rounded-[1.6rem] overflow-hidden border border-zinc-100">
              <div className="relative aspect-[4/3] bg-zinc-100"><img src={item.image} alt={item.title} className="w-full h-full object-cover"/><div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-[10px]">{item.badge}</div></div>
              <div className="p-5"><div className="text-[11px] text-[#C86B4A]">{item.location}</div><h3 className="font-serif text-[18px] mt-1">{item.title}</h3><div className="font-semibold mt-3">{item.price_label || item.priceLabel}</div><a href={`https://wa.me/6281234567890?text=${item.id}`} className="mt-4 block py-2.5 rounded-full bg-zinc-900 text-white text-[11px] text-center">TANYA WA</a></div>
            </div>
          ))}
        </div>
      </section>

      <section id="kalkulator" className="bg-zinc-900 text-[#FFFEFB] rounded-[2.5rem] mx-6 lg:mx-auto max-w-[1280px] my-20 overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="p-12"><h2 className="font-serif text-[40px]">Kalkulator KPR<br/><span className="text-[#C86B4A] italic">kurasibali.com</span></h2>
            <div className="mt-8 space-y-6">
              <div><div className="flex justify-between text-xs mb-2"><span>Harga</span><span>{formatRp(harga)}</span></div><input type="range" min={300000000} max={5000000000} step={50000000} value={harga} onChange={e=>setHarga(Number(e.target.value))} className="w-full accent-[#C86B4A]"/></div>
              <div className="grid grid-cols-3 gap-4"><div><div className="text-[11px]">DP {dpPersen}%</div><input type="range" min={0} max={80} value={dpPersen} onChange={e=>setDpPersen(Number(e.target.value))} className="w-full accent-[#C86B4A]"/></div><div><div className="text-[11px]">Tenor {tenor}th</div><input type="range" min={1} max={30} value={tenor} onChange={e=>setTenor(Number(e.target.value))} className="w-full accent-[#C86B4A]"/></div><div><div className="text-[11px]">Bunga {bunga}%</div><input type="range" min={1} max={15} step={0.1} value={bunga} onChange={e=>setBunga(Number(e.target.value))} className="w-full accent-[#C86B4A]"/></div></div>
            </div>
          </div>
          <div className="bg-[#FFFEFB] text-zinc-900 p-12"><div className="text-[11px]">CICILAN / BULAN</div><div className="font-serif text-[42px] mt-2">{formatRp(calc.cicilan)}</div><div className="mt-6 grid grid-cols-2 gap-3 text-sm"><div className="border rounded-xl p-4">DP: {formatRp(calc.dp)}</div><div className="border rounded-xl p-4">Pinjaman: {formatRp(calc.pinjaman)}</div></div></div>
        </div>
      </section>
    </main>
  )
}