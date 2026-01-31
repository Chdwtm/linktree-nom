# 🔗 Linktree Realtime - React

Aplikasi Linktree interaktif dengan tema realtime yang berubah otomatis berdasarkan waktu (siang/malam). Dibangun dengan React.js dan Vite.

## ✨ Fitur Utama

- 🌓 **Tema Realtime** - Otomatis berganti tema siang/malam setiap jam
- ⏰ **Jam Digital Realtime** - Menampilkan waktu saat ini yang terupdate setiap detik
- 👤 **Foto Profil** - Menampilkan foto profil pengguna dengan desain menarik
- 🎨 **Responsive Design** - Sempurna di semua ukuran layar (desktop, tablet, mobile)
- ✨ **Animasi Smooth** - Efek hover dan transisi yang halus
- 🔗 **Link Sosial** - Terintegrasi dengan Discord, TikTok, dan SocialBuzz
- 🎯 **Interactive Cards** - Kartu link yang responsif dan interaktif

## 📋 Link yang Tersedia

1. **Discord** - Bergabung dengan server Discord
2. **TikTok** - Follow akun TikTok
3. **SocialBuzz** - Kunjungi profil di SocialBuzz

## 🚀 Instalasi & Cara Menjalankan

### Prasyarat

- Node.js (v14 atau lebih tinggi)
- npm atau yarn

### Langkah-langkah

1. **Masuk ke folder proyek**

   ```bash
   cd Linktree-nom
   ```

2. **Instal dependencies**

   ```bash
   npm install
   ```

3. **Jalankan development server**

   ```bash
   npm run dev
   ```

4. **Buka browser ke URL yang ditampilkan** (biasanya `http://localhost:5173`)

## 🎨 Mengkustomisasi

### Mengubah Foto Profil

Edit file `src/components/Linktree.jsx` dan ganti URL gambar:

```jsx
<img
  src="https://via.placeholder.com/150?text=Profile"
  alt="Profile"
  className="profile-image"
/>
```

### Mengubah Nama dan Bio

Di file `src/components/Linktree.jsx`:

```jsx
<h1 className="profile-name">Nama Anda</h1>
<p className="profile-bio">Konten kreator dan pengusaha digital</p>
```

### Mengubah Link Sosial

Edit array `links` di `src/components/Linktree.jsx`:

```javascript
const links = [
  {
    id: 1,
    title: "Discord",
    description: "Bergabung dengan server Discord kami",
    icon: "💬",
    url: "https://discord.gg/your-invite-link",
    color: "#5865F2",
  },
  // ... tambah lebih banyak link
];
```

### Mengubah Waktu Tema Berubah

Di file `src/App.jsx`, ubah kondisi hour:

```javascript
const isNight = hour >= 18 || hour < 6; // Ubah 18 dan 6 sesuai kebutuhan
```

## 🌗 Cara Kerja Tema Realtime

- **Siang** (06:00 - 17:59): Gradient ungu cerah dengan background terang
- **Malam** (18:00 - 05:59): Gradient gelap dengan background gelap

Tema akan otomatis berubah sesuai jam sistem Anda.

## 📱 Responsif untuk Semua Perangkat

- ✅ Desktop (> 768px)
- ✅ Tablet (481px - 768px)
- ✅ Mobile (< 480px)

## 🛠️ Teknologi yang Digunakan

- **React 18** - UI Library
- **Vite** - Build tool & dev server
- **CSS3** - Styling dengan gradient, animasi, dan media queries

## 📦 Build untuk Production

```bash
npm run build
```

Output akan tersimpan di folder `dist/`.

## 🌐 Deploy

Proyek ini siap di-deploy di:

- Vercel
- Netlify
- GitHub Pages
- dsb.

## 📝 Lisensi

MIT - Bebas digunakan untuk proyek pribadi atau komersial.

## 💡 Tips

1. Ganti URL placeholder gambar dengan foto profil asli Anda
2. Sesuaikan warna dan deskripsi sesuai brand Anda
3. Tambah lebih banyak link sosial dengan menambah object ke array `links`
4. Customize animasi di CSS files sesuai preferensi

---

**Dibuat dengan ❤️ menggunakan React & Vite**
