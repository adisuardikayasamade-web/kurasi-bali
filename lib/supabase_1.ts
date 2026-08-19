import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type DbListing = {
  id: string
  created_at?: string
  type: 'villa' | 'perumahan' | 'tanah' | 'sewa'
  title: string
  location: string
  price: number
  price_label: string
  installment?: string
  luas: string
  kamar: string
  sertifikat: string
  image: string
  badge: string
  is_takeover?: boolean
  is_active?: boolean
}