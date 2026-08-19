"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminLogin() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()
  
  // Ganti password ini di file .env -> NEXT_PUBLIC_ADMIN_PASSWORD
  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "kurasibali2026"

  function handleLogin() {
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem('kurasibali_admin_auth', 'true')
      router.push('/admin')
    } else {
      setError("Password salah! Coba lagi.")
    }
  }

  return (
    <div className="min-h-screen bg-[#FFFEFB] flex items-center justify-center p-6">
      <div className="bg-white border border-zinc-100 rounded-[2rem] p-10 max-w-sm w-full shadow-xl">
        <div className="font-serif text-3xl text-center">kurasi<span className="text-[#C86B4A]">bali</span>.com</div>
        <div className="text-[11px] tracking-widest text-center text-zinc-400 mt-2">ADMIN LOGIN • PRIVATE</div>
        
        <div className="mt-8 space-y-4">
          <div>
            <div className="text-xs text-zinc-500 mb-2">Password Admin</div>
            <input 
              type="password" 
              value={password} 
              onChange={e=>setPassword(e.target.value)}
              onKeyDown={e=>e.key==='Enter' && handleLogin()}
              placeholder="Masukkan password"
              className="w-full border border-zinc-200 rounded-full px-5 py-3 text-sm focus:border-[#C86B4A] outline-none"
            />
            {error && <div className="text-xs text-red-500 mt-2">{error}</div>}
          </div>
          
          <button onClick={handleLogin} className="w-full py-3 rounded-full bg-zinc-900 text-white text-sm tracking-wide hover:bg-black transition">
            Masuk ke Admin →
          </button>
          
          <div className="text-[11px] text-zinc-400 text-center leading-relaxed pt-4 border-t border-zinc-100">
            Default password: <span className="font-mono text-zinc-800">kurasibali2026</span><br/>
            Ganti di Vercel ENV: NEXT_PUBLIC_ADMIN_PASSWORD
          </div>
        </div>
      </div>
    </div>
  )
}