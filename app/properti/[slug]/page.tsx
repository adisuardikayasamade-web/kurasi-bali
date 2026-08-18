
import { properties, brand } from "@/lib/data";
import Link from "next/link";
import KPRCalculator from "@/components/KPRCalculator";
import WAButton from "@/components/WAButton";
export function generateStaticParams(){ return properties.map(p=>({slug:p.slug})) }
export default function Detail({ params }: { params: { slug: string } }){
  const p = properties.find(x=>x.slug===params.slug);
  if(!p) return <div>Not found</div>;
  return (<main className="max-w-7xl mx-auto px-6 py-10 bg-[#0F0F0E] text-[#F5F1EB] min-h-screen"><div className="text-xs opacity-40">KURASI BALI / Properti / {p.slug}</div><div className="grid md:grid-cols-2 gap-10 mt-6"><div className="bg-[#1F1F1E] rounded-[24px] h-[400px] flex items-center justify-center text-8xl">{p.image}</div><div><div className="bg-white text-black text-[10px] inline-block px-2 py-1 rounded-full">LOLOS KURASI ✓</div><h1 className="text-4xl font-black uppercase mt-3">{p.title}</h1><div className="opacity-50 mt-2">{p.location}</div><div className="text-3xl font-black text-[#FF4E11] mt-4">Rp {p.priceText}</div><p className="mt-6 opacity-70">{p.desc}</p><WAButton message={`Halo Kurasi Bali, minat ${p.title} di ${p.location} - ${brand.domain}/properti/${p.slug}`} className="mt-8 w-full bg-[#FF4E11] text-black py-4 rounded-xl font-bold uppercase text-center block">Chat WA Kurator →</WAButton><Link href="/" className="mt-3 block text-center text-xs uppercase opacity-40">← Kembali</Link></div></div><div className="mt-16"><KPRCalculator defaultPrice={p.price} /></div></main>)
}
