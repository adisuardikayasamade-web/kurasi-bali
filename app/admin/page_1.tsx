"use client"
import { useState, useEffect } from "react"
import { supabase, DbListing } from "@/lib/supabase"

export default function AdminPage() {
  const [listings, setListings] = useState<DbListing[]>([])
  const [form, setForm] = useState<Partial<DbListing>>({
    id: "", type: "villa", title: "", location: "Badung, Bali", price: 1500000000, price_label: "Rp 1.5 Miliar", luas: "120 m²", kamar: "2 Kamar", sertifikat: "SHM", image: "/villa-bomba.webp", badge: "BARU", is_takeover: false, is_active: true
  })
  const [uploading, setUploading] = useState(false)

  async function load() {
    const { data } = await supabase.from('listings').select('*').order('created_at', { ascending: false })
    if (data) setListings(data)
  }
  useEffect(()=>{ load() }, [])

  async function handleImageUpload(e: any) {
    const file = e.target.files[0]
    if (!file) return
    setUploading(true)
    const fileName = `${Date.now()}-${file.name}`
    const { error } = await supabase.storage.from('property-images').upload(fileName, file)
    if (!error) {
      const { data } = supabase.storage.from('property-images').getPublicUrl(fileName)
      setForm({ ...form, image: data.publicUrl })
    }
    setUploading(false)
  }

  async function save() {
    if (!form.id || !form.title) return alert("ID & Title wajib")
    const { error } = await supabase.from('listings').upsert(form as any)
    if (error) alert(error.message)
    else { alert("Berhasil save!"); load(); setForm({ ...form, id: "" }) }
  }

  async function del(id: string) {
    if (!confirm("Hapus?")) return
    await supabase.from('listings').delete().eq('id', id)
    load()
  }

  return (
    <div className="min-h-screen bg-[#FFFEFB] p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-serif text-4xl">kurasibali.com <span className="text-[#C86B4A]">ADMIN</span></h1>
        <p className="text-sm text-zinc-500 mt-2">Tambah/edit properti dari HP. Langsung live di website.</p>

        <div className="mt-8 grid lg:grid-cols-[380px_1fr] gap-8">
          <div className="bg-white border border-zinc-100 rounded-2xl p-6 h-fit sticky top-6">
            <h3 className="font-semibold">Form Properti</h3>
            <div className="mt-4 space-y-3 text-sm">
              <input placeholder="ID unik (villa-canggu-1)" value={form.id} onChange={e=>setForm({...form, id: e.target.value.toLowerCase().replace(/\s/g,'-')})} className="w-full border rounded-full px-4 py-2" />
              <select value={form.type} onChange={e=>setForm({...form, type: e.target.value as any})} className="w-full border rounded-full px-4 py-2"><option value="villa">Villa</option><option value="perumahan">Perumahan</option><option value="tanah">Tanah Kosong</option><option value="sewa">Sewa</option></select>
              <input placeholder="Title" value={form.title} onChange={e=>setForm({...form, title: e.target.value})} className="w-full border rounded-full px-4 py-2" />
              <input placeholder="Location" value={form.location} onChange={e=>setForm({...form, location: e.target.value})} className="w-full border rounded-full px-4 py-2" />
              <input placeholder="Price label (Rp 1.8 Miliar)" value={form.price_label} onChange={e=>setForm({...form, price_label: e.target.value})} className="w-full border rounded-full px-4 py-2" />
              <input type="number" placeholder="Price number" value={form.price} onChange={e=>setForm({...form, price: Number(e.target.value)})} className="w-full border rounded-full px-4 py-2" />
              <div className="grid grid-cols-3 gap-2"><input placeholder="Luas" value={form.luas} onChange={e=>setForm({...form, luas: e.target.value})} className="border rounded-full px-3 py-2"/><input placeholder="Kamar" value={form.kamar} onChange={e=>setForm({...form, kamar: e.target.value})} className="border rounded-full px-3 py-2"/><input placeholder="Sertifikat" value={form.sertifikat} onChange={e=>setForm({...form, sertifikat: e.target.value})} className="border rounded-full px-3 py-2"/></div>
              <input placeholder="Badge (TAKEOVER, BARU)" value={form.badge} onChange={e=>setForm({...form, badge: e.target.value})} className="w-full border rounded-full px-4 py-2" />
              <div className="flex gap-3"><label className="flex items-center gap-2 text-xs"><input type="checkbox" checked={form.is_takeover} onChange={e=>setForm({...form, is_takeover: e.target.checked})}/> Takeover?</label><label className="flex items-center gap-2 text-xs"><input type="checkbox" checked={form.is_active} onChange={e=>setForm({...form, is_active: e.target.checked})}/> Active?</label></div>
              <div>
                <div className="text-xs text-zinc-500 mb-2">Upload Foto (dari HP langsung)</div>
                <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full text-xs" />
                {uploading && <div className="text-xs text-[#C86B4A] mt-2">Uploading...</div>}
                {form.image && <img src={form.image} className="mt-3 rounded-xl w-full aspect-[4/3] object-cover" />}
                <input placeholder="Atau paste URL image" value={form.image} onChange={e=>setForm({...form, image: e.target.value})} className="w-full border rounded-full px-4 py-2 mt-2 text-xs" />
              </div>
              <button onClick={save} className="w-full py-3 rounded-full bg-zinc-900 text-white mt-4">Simpan ke Supabase → Live</button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">{listings.length} Listing di Database</h3>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              {listings.map(l=>(
                <div key={l.id} className="bg-white border border-zinc-100 rounded-2xl overflow-hidden flex gap-4 p-4">
                  <img src={l.image} className="w-24 h-24 rounded-xl object-cover" />
                  <div className="flex-1">
                    <div className="text-[10px] tracking-widest text-[#C86B4A]">{l.type.toUpperCase()} • {l.badge}</div>
                    <div className="font-medium text-sm mt-1 line-clamp-1">{l.title}</div>
                    <div className="text-xs text-zinc-500">{l.price_label}</div>
                    <div className="mt-3 flex gap-2"><button onClick={()=>setForm(l)} className="text-xs px-3 py-1 rounded-full border">Edit</button><button onClick={()=>del(l.id)} className="text-xs px-3 py-1 rounded-full bg-red-50 text-red-600">Hapus</button></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}