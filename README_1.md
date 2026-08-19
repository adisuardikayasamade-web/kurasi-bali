
# KURASIBALI.COM - Supabase Edition (Edit dari HP)

Sekarang kamu bisa tambah villa/tanah/perumahan/sewa langsung dari HP tanpa buka GitHub.

## Setup 10 Menit

1. **Buat Supabase Project**
   - supabase.com -> New Project -> nama kurasibali
   - Copy URL & anon key di Settings -> API

2. **Jalankan SQL**
   - Buka SQL Editor di Supabase
   - Copy paste isi file supabase-schema.sql -> Run
   - Ini bikin tabel listings + storage bucket property-images

3. **Set ENV di Vercel**
   - Vercel -> Project -> Settings -> Environment Variables
   - Tambah:
     NEXT_PUBLIC_SUPABASE_URL = https://xxxx.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJ...
     NEXT_PUBLIC_WA_NUMBER = 6281234567890

4. **Deploy ulang**
   - Push code ini ke GitHub, Vercel auto deploy

5. **Buka /admin dari HP**
   - kurasibali.com/admin
   - Form: isi ID (villa-canggu-1), type, title, harga, luas, dll
   - Upload foto langsung dari galeri HP -> otomatis upload ke Supabase Storage
   - Klik Simpan -> langsung live di homepage

## Alur dari HP

Kamu di lapangan foto villa -> buka kurasibali.com/admin -> Upload foto -> Isi data -> Simpan -> 2 detik kemudian muncul di kurasibali.com kategori Villa

Tidak perlu edit code lagi!

## Keamanan

Untuk v1 kita allow public. Kalau mau private admin, nanti tambahkan login Supabase Auth. Bilang aja "bikinin login admin" aku tambahin.

## Kalkulator KPR

Tetap jalan, data harga diambil dari Supabase juga bisa auto masuk ke kalkulator.
