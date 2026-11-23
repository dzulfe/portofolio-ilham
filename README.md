# Portofolio Ilham (desain grafis)

Static site: HTML + CSS + JS biasa, tanpa build dan tanpa server khusus.
Semua teks ada langsung di HTML (bagus untuk SEO). Cukup buka `index.html` atau pakai Live Server.

## Struktur
index.html (beranda + tentang + kontak) | karya.html (daftar karya, tab kategori)
assets/css | assets/js (main.js, karya.js) | assets/images | robots.txt | sitemap.xml

## Menambah karya
Di `karya.html`, salin satu blok `<article class="work" ...>` dan ubah:
- `data-cat`: kategori. Kalau kategorinya baru, tab baru muncul otomatis.
- judul, tahun/peran, deskripsi, tools.
- gambar: lihat komentar di atas blok contoh (taruh file di assets/images/projects/).
Lalu tambahkan nama karya di JSON-LD (`ItemList`) bagian atas halaman agar mesin pencari ikut membaca.

## Mengubah isi beranda
Edit teks langsung di `index.html` (bio, perjalanan, software, kontak).
Foto: PNG transparan di `assets/images/foto-cutout.png`.

## Warna dan font
`assets/css/variables.css`

## Checklist SEO sebelum publish
1. Ganti SEMUA `GANTI-DOMAIN` (index.html, karya.html, robots.txt, sitemap.xml) dengan alamat situsmu.
2. Pastikan tautan Behance, Instagram, email, dan nomor telepon di `index.html` sudah benar.
3. Buat gambar 1200x630 px: `assets/images/og-image.jpg` (tampil saat link dibagikan).
4. Beri `alt` yang menjelaskan isi di setiap gambar karya.
5. Daftarkan situs di Google Search Console, kirim sitemap.xml.
6. Tes: PageSpeed Insights dan Rich Results Test (untuk data terstruktur).
