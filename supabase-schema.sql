-- KURASIBALI.COM - Supabase Schema
-- Jalankan di Supabase SQL Editor

create table if not exists listings (
  id text primary key,
  created_at timestamp with time zone default now(),
  type text check (type in ('villa','perumahan','tanah','sewa')) not null,
  title text not null,
  location text not null,
  price bigint not null,
  price_label text not null,
  installment text,
  luas text not null,
  kamar text not null,
  sertifikat text not null,
  image text not null,
  badge text not null,
  is_takeover boolean default false,
  is_active boolean default true
);

-- Enable RLS
alter table listings enable row level security;

-- Policy: public bisa baca yang aktif
create policy "Public read active listings"
on listings for select
using (is_active = true);

-- Policy: anon bisa insert/update/delete untuk admin sederhana (ganti nanti pakai auth kalau mau private)
-- Untuk v1 biar gampang dari HP, kita allow all untuk authenticated & anon tapi kamu bisa ganti ke private nanti
create policy "Allow all for anon"
on listings for all
using (true)
with check (true);

-- Storage bucket untuk foto
insert into storage.buckets (id, name, public) values ('property-images', 'property-images', true)
on conflict (id) do nothing;

create policy "Public read images"
on storage.objects for select
using (bucket_id = 'property-images');

create policy "Allow upload images"
on storage.objects for insert
with check (bucket_id = 'property-images');

-- Contoh data awal (optional)
insert into listings (id, type, title, location, price, price_label, installment, luas, kamar, sertifikat, image, badge, is_takeover) values
('villa-bomba','villa','Villa Modern 2BR - Buduk','Buduk, Badung - 10 menit ke Canggu',1800000000,'Rp 1.8 Miliar','Cicilan mulai 6.6jt/bln','120 m²','2 Kamar','SHM','/villa-bomba.webp','TAKEOVER',true),
('tanah-bingin','tanah','Tanah Kavling - Bingin Cliff','Bingin, Uluwatu - 200m ke Pantai',1200000000,'Rp 1.2 Miliar / Are',null,'200 m²','Tanah Kosong','SHM','/tanah-bingin.webp','LANGKA',false)
on conflict (id) do nothing;