export interface ArticleSection {
  title: string;
  content?: string;
  items?: { subtitle: string; description: string }[];
}

export interface ProductItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tier: 'premium' | 'free';
  category: string;
  badge: string;
  features: string[];
  techStack: string[];
  demoUrl?: string;
  downloadUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  whatsappMessage: string;
  articleSections: ArticleSection[];
}

export const productsData: ProductItem[] = [
  // PREMIUM PRODUCTS & SERVICES
  {
    id: "ai-geo-digitizer",
    title: "AI Geo Digitizer",
    tagline: "Automated Deep Learning Building Extraction from Drone & Satellite Imagery",
    description:
      "Aplikasi berbasis AI untuk ekstraksi dan digitasi objek bangunan dari citra drone/satelit secara otomatis. Efisiensi luar biasa untuk 10.000 bangunan: dari waktu manual 4-7 hari menjadi otomatis hanya dalam 2-3 jam.",
    tier: "premium",
    category: "AI & Automation Tools",
    badge: "PREMIUM TOOL",
    features: [
      "Otomatisasi digitasi batas bangunan dari citra orthomosaic drone & satelit",
      "Kecepatan 10x Lipat: 10.000 bangunan selesai dalam 2-3 jam (manual 4-7 hari)",
      "Ekspor format standar GIS: GeoJSON, Shapefile (SHP), dan GeoPackage (GPKG)",
      "Integrasi langsung dengan QGIS maupun script Python Standalone",
    ],
    techStack: ["Python", "Deep Learning / PyTorch", "GDAL/OGR", "OpenCV", "QGIS API"],
    whatsappMessage:
      "Halo Bintang, saya tertarik berdiskusi mengenai aplikasi AI Geo Digitizer untuk otomatisasi digitasi bangunan.",
    articleSections: [
      {
        title: "Latar Belakang & Revolusi Efisiensi Digitasi",
        content:
          "Dalam survei pemetaan skala besar maupun pembuatan peta dasar Rencana Detail Tata Ruang (RDTR), proses digitasi batas bangunan secara manual adalah tahap yang memakan waktu paling lama dan rentan *human error*. AI Geo Digitizer hadir menggunakan model *Deep Convolutional Neural Networks* (Mask R-CNN & U-Net yang telah dilatih pada citra udara Indonesia beresolusi tinggi) untuk melakukan segmentasi otomatis hanya dalam hitungan jam.",
      },
      {
        title: "Perbandingan Performa Kerja",
        items: [
          {
            subtitle: "Metode Manual Konvensional",
            description:
              "Untuk mendigitasi 10.000 objek bangunan dari orthomosaic drone, operator GIS membutuhkan waktu 4 hingga 7 hari kerja penuh dengan konsistensi bentuk yang beragam.",
          },
          {
            subtitle: "Metode AI Geo Digitizer (Automated Vectorization)",
            description:
              "Proses ekstraksi 10.000 bangunan diselesaikan secara otomatis dalam waktu 2–3 jam dengan batas poligon yang presisi serta regularisasi sudut (orthogonalization) siap pakai.",
          },
        ],
      },
      {
        title: "Fitur & Kapabilitas Ekspor",
        items: [
          {
            subtitle: "Batch Processing Orthomosaic",
            description:
              "Mendukung pemrosesan citra berformat GeoTIFF berukuran puluhan Gigabyte melalui sistem tiling otomatis tanpa membebani RAM komputer.",
          },
          {
            subtitle: "Regularisasi Poligon Otomatis",
            description:
              "Hasil ekstraksi AI otomatis diluruskan sudut-sudut bangunannya (building simplification & orthogonal alignment) sehingga standar kartografinya terpenuhi.",
          },
          {
            subtitle: "Ekspor Multi-Format GIS",
            description:
              "Langsung menghasilkan file vektor berformat Shapefile (.shp), GeoJSON, maupun GeoPackage (.gpkg) lengkap dengan koordinat referensi geodetik proyek.",
          },
        ],
      },
    ],
  },
  {
    id: "pembuatan-webgis",
    title: "Pembuatan WebGIS",
    tagline: "Custom Full-Stack Geospatial Web Application & Spatial Dashboard Development",
    description:
      "Layanan profesional pembuatan dan pengembangan platform WebGIS interaktif kustom disesuaikan dengan kebutuhan instansi, perusahaan swasta, pertambangan, perkebunan, maupun pemerintah daerah.",
    tier: "premium",
    category: "WebGIS & Dashboards",
    badge: "PREMIUM SERVICE",
    features: [
      "Arsitektur database spasial berkinerja tinggi (PostgreSQL / PostGIS)",
      "Visualisasi peta 2D & 3D interaktif responsif (MapLibre / Leaflet / Cesium)",
      "Dasbor analitik spasial real-time & sistem manajemen data geospasial",
      "Desain UI/UX modern berkelas enterprise dengan kontrol hak akses (RBAC)",
    ],
    techStack: ["Next.js / React", "PostGIS / PostgreSQL", "Python / Flask", "MapLibre / Tailwind"],
    whatsappMessage:
      "Halo Bintang, saya berminat konsultasi mengenai jasa Pembuatan WebGIS kustom untuk kebutuhan instansi/proyek saya.",
    articleSections: [
      {
        title: "Solusi Peta Digital & Analitik Spasial Berbasis Web",
        content:
          "Kami membangun platform WebGIS dari tahap perancangan arsitektur database spasial hingga antarmuka dasbor visual interaktif. Cocok untuk instansi pemerintahan (portal data spasial, pemetaan kebencanaan, pemantauan tata ruang), perkebunan (monitoring blok lahan & produksi), hingga pertambangan.",
      },
      {
        title: "Layanan & Fitur Utama WebGIS",
        items: [
          {
            subtitle: "Database Spasial Enterprise (PostGIS)",
            description:
              "Penyimpanan jutaan fitur vektor dan query spasial berkecepatan tinggi dengan indeks R-Tree serta dukungan raster tile server.",
          },
          {
            subtitle: "Visualisasi 2D & 3D Terrain",
            description:
              "Peta interaktif bergaya modern menggunakan MapLibre GL JS, CesiumJS untuk pemodelan kontur 3D, serta integrasi citra satelit/UAV terkini.",
          },
          {
            subtitle: "Dasbor Analitik & Laporan Otomatis",
            description:
              "Menyajikan grafik statistik spasial, filter wilayah administratif, serta fitur unduh laporan rekapitulasi data area/luasan secara real-time.",
          },
        ],
      },
    ],
  },

  // FREE TOOLS
  {
    id: "pdf-editor-offline",
    title: "PDF Editor Pro Offline",
    tagline: "All-in-One Windows Offline Studio — 100% Local & Private Processing",
    description:
      "Aplikasi Desktop Windows berkinerja tinggi berbasis HTML/CSS/JS & Electron untuk menyunting, menggabungkan, memampatkan, dan mengonversi dokumen PDF dengan privasi 100% lokal di komputer Anda tanpa koneksi internet.",
    tier: "free",
    category: "Desktop Productivity",
    badge: "100% FREE / PORTABLE",
    features: [
      "Privasi 100% Lokal & Offline — seluruh pemrosesan di dalam komputer tanpa server pihak ketiga",
      "Interactive Editor: Tanda tangan digital 3 mode (Draw, Type 4 Font Kaligrafi, Upload Stempel)",
      "All-in-One Suite: Merge PDF, Remove Pages, Compress (3 Tingkat), PDF to PNG/JPG, dan Image to PDF",
      "Siap pakai via Silent Script Launcher (.vbs) atau Portable Executable (.exe tunggal)",
    ],
    techStack: ["Electron", "Vanilla JS / HTML5 Canvas", "PDF-Lib", "PDF.js", "JSZip"],
    downloadUrl: "https://drive.google.com/drive/folders/1teX__9oeK976Hl1Fq0ihmEBD2kRAs5YG?usp=sharing",
    githubUrl: "https://github.com/bintangmaull/pdf_editor",
    whatsappMessage:
      "Halo Bintang, saya ingin menanyakan tautan unduhan / file aplikasi PDF Editor Pro Offline yang gratis.",
    articleSections: [
      {
        title: "Mengapa PDF Editor Pro?",
        content:
          "Sebagian besar alat PDF saat ini mengharuskan Anda mengunggah dokumen penting ke server cloud eksternal atau membayar langganan bulanan. PDF Editor Pro dirancang untuk memberi Anda kendali penuh atas dokumen sensitif Anda dengan privasi 100% lokal & offline, pemrosesan super cepat tanpa batas ukuran file, serta portabilitas tinggi.",
      },
      {
        title: "6 Fitur Unggulan (All-in-One Studio Suite)",
        items: [
          {
            subtitle: "1. Edit PDF & Tanda Tangan (Interactive Editor)",
            description:
              "Tanda Tangan Digital Multi-Mode: Draw (lukis tangan dengan 4 warna tinta resmi), Type (4 font kaligrafi sambung elegan: Great Vibes, Pacifico, Caveat, Dancing Script), dan Upload (unggah gambar stempel PNG transparan). Dilengkapi anotasi teks bebas, stempel bisnis kilat (DISETUJUI, LUNAS, RAHASIA, SEMENTARA), cap tanggal 1-klik, serta rotasi/hapus halaman.",
          },
          {
            subtitle: "2. Gabungkan PDF (Merge PDF)",
            description:
              "Satukan beberapa file dokumen PDF terpisah menjadi 1 file utuh secara runtut dengan dukungan drag-and-drop dan kontrol geser urutan sebelum penggabungan.",
          },
          {
            subtitle: "3. Hapus & Atur Halaman (Remove Pages)",
            description:
              "Tampilkan grid thumbnail interaktif dari seluruh halaman dokumen PDF Anda. Pilih halaman yang ingin dibuang (halaman kosong, iklan, atau sampul) dan simpan PDF bersihnya seketika.",
          },
          {
            subtitle: "4. Kompres PDF (Compress PDF)",
            description:
              "Kurangi ukuran file dokumen PDF agar hemat ruang simpan dan mudah dikirim. 3 Tingkat Pilihan: Ringan (kualitas ketajaman maksimal), Optimal (disarankan), dan Ekstra (kompresi maksimal).",
          },
          {
            subtitle: "5. PDF ke Gambar (PDF to PNG / JPG)",
            description:
              "Ekstrak seluruh halaman dari dokumen PDF menjadi file gambar beresolusi tinggi yang otomatis dikemas dalam arsip ZIP jika dokumen memiliki banyak halaman.",
          },
          {
            subtitle: "6. Gambar ke PDF (Image to PDF)",
            description:
              "Ubah foto dokumen, KTP, atau gambar apapun (JPG, PNG, WebP) menjadi satu dokumen PDF standar profesional. Mendukung penggabungan banyak foto sekaligus dalam 1 album.",
          },
        ],
      },
      {
        title: "Struktur Arsitektur Kode Modular",
        content:
          "Dibangun dengan arsitektur Clean Code Modular yang memisahkan antarmuka (index.html), penataan gaya (modul css/ terpisah untuk layout, components, editor, tools, dan modals), logika pemrosesan (modul js/ terpisah untuk editor, merge, pages, compress, dan converter), serta konfigurasi Electron executable.",
      },
      {
        title: "Cara Menjalankan Aplikasi di Windows",
        items: [
          {
            subtitle: "Cara 1: Silent Launcher Desktop (Sangat Disarankan)",
            description:
              "Klik ganda pada file PDF_Editor_Silent.vbs. Aplikasi otomatis terbuka langsung dalam jendela desktop Windows modern tanpa memunculkan jendela hitam terminal/CMD sama sekali.",
          },
          {
            subtitle: "Cara 2: Membangun File Portable Mandiri (.EXE)",
            description:
              "Dapat dipaketkan menjadi 1 file .exe mandiri menggunakan perintah 'npm run build:portable' yang siap disimpan di Flashdisk atau didistribusikan ke komputer Windows mana pun.",
          },
          {
            subtitle: "Cara 3: Membuka Langsung Melalui Browser",
            description:
              "Klik ganda pada file index.html atau klik kanan ➔ Open with ➔ Pilih browser modern (Google Chrome, Microsoft Edge, atau Firefox).",
          },
        ],
      },
      {
        title: "Dialog Penyimpanan Modern (Save As)",
        content:
          "Seluruh fitur ekspor pada aplikasi ini terintegrasi dengan Modern File System Access API (showSaveFilePicker). Setiap kali menyimpan dokumen, jendela standar Windows Save As akan otomatis muncul sehingga Anda bebas memilih folder penyimpanan dan nama file baru.",
      },
      {
        title: "Teknologi & Library Internal",
        items: [
          {
            subtitle: "Engine & Core Processing",
            description:
              "HTML5 Canvas API, PDF.js (Mozilla) untuk render vektor lokal, PDF-Lib untuk manipulasi struktur PDF, JSZip untuk pengemasan arsip gambar, serta Electron untuk runtime pembungkus desktop Windows.",
          },
          {
            subtitle: "Desain Antarmuka",
            description:
              "Vanilla CSS3 & HSL Design System bergaya Glassmorphism dengan transisi halus dan dukungan Dark Theme profesional.",
          },
        ],
      },
    ],
  },
  {
    id: "geotag-photo-app",
    title: "Geotagging Photo App",
    tagline: "Menyisipkan atau Memperbaiki Data Lokasi (GPS) pada Foto",
    description:
      "Aplikasi desktop ringan berbasis Python (Tkinter) yang dirancang khusus untuk memudahkan Anda menyisipkan atau memperbaiki data lokasi (GPS) pada foto Anda secara offline.",
    tier: "free",
    category: "Desktop Utility",
    badge: "100% FREE / OPEN-SOURCE",
    features: [
      "Menambahkan koordinat lokasi baru ke metadata EXIF foto yang polos",
      "Memperbaiki EXIF data GPS bawaan perangkat yang tidak terbaca",
      "Dukungan fitur Drag & Drop file gambar untuk alur kerja yang cepat",
      "Mendukung dua format koordinat: Desimal dan DMS (Derajat-Menit-Detik)"
    ],
    techStack: ["Python", "Tkinter", "Pillow", "piexif", "tkinterdnd2"],
    downloadUrl: "https://drive.google.com/drive/folders/11gNNivjVzuEKbEP4LT0pEtCKjGuAL4w5?usp=sharing",
    githubUrl: "https://github.com/bintangmaull/geotagging_photo",
    imageUrl: "/Gambar/Tools/geotag photo app.png",
    whatsappMessage:
      "Halo Bintang, saya ingin menanyakan tentang aplikasi Geotagging Photo App.",
    articleSections: [
      {
        title: "Fitur Utama",
        items: [
          {
            subtitle: "Menambahkan Data GPS Baru",
            description:
              "Menambahkan titik koordinat lokasi (Latitude & Longitude) ke metadata EXIF pada foto yang masih polos atau belum memiliki geotag.",
          },
          {
            subtitle: "Memperbaiki Geotag yang Tidak Terbaca",
            description:
              "Seringkali, foto dengan data lokasi bawaan dari perangkat gagal terbaca atau tidak terdeteksi saat diunggah ke website, sistem absensi, atau pelaporan tertentu. Aplikasi ini membuat ulang EXIF data GPS yang bersih agar terbaca dengan sempurna.",
          },
          {
            subtitle: "Dukungan Drag & Drop",
            description:
              "Anda dapat langsung menarik file gambar (JPG/JPEG) dan menjatuhkannya (drag-and-drop) ke area pratinjau aplikasi untuk mempercepat alur kerja.",
          },
          {
            subtitle: "Dua Format Koordinat",
            description:
              "Mendukung input lokasi dalam dua format standar: Desimal (contoh: -6.2088, 106.8456) dan DMS / Derajat-Menit-Detik (contoh: 6° 12' 31.68\" S, 106° 50' 44.16\" E).",
          },
          {
            subtitle: "Opsi Kompresi Ringan",
            description:
              "Menyediakan fitur opsional untuk mengompres sedikit ukuran file foto setelah disimpan tanpa mengurangi kualitas secara drastis, sehingga lebih hemat ruang penyimpanan.",
          },
        ],
      },
      {
        title: "Cara Penggunaan",
        content:
          "1. Buka/jalankan aplikasi Geotagging Photo App.\n2. Tarik foto berekstensi .jpg atau .jpeg Anda ke area kotak pratinjau, atau klik tombol \"Pilih Foto\".\n3. Jika foto sebelumnya sudah memiliki data lokasi, kolom Latitude dan Longitude akan otomatis terisi.\n4. Pilih format koordinat yang ingin Anda gunakan di bagian pengaturan (Desimal atau DMS).\n5. Masukkan atau ubah koordinat latitude dan longitude sesuai kebutuhan.\n6. Centang opsi Gunakan Kompresi Ringan (opsional) jika ingin mengurangi file size.\n7. Klik Simpan Geotag.\n8. Aplikasi akan membuat salinan foto baru pada direktori yang sama dengan tambahan nama _geotagged (contoh: foto_geotagged.jpg). File asli Anda tetap aman dan tidak ditimpa!",
      },
      {
        title: "Persyaratan Instalasi (Bagi Developer)",
        content:
          "Jika Anda ingin menjalankan script secara langsung atau memodifikasi source code-nya, pastikan Anda telah memiliki Python 3.x dan menginstal dependensi (pip install -r requirements.txt). Modul utama yang digunakan antara lain: Pillow, piexif, dan tkinterdnd2.",
      },
      {
        title: "Kontribusi",
        content:
          "Proyek ini sepenuhnya Gratis dan Open-Source. Jika Anda ingin berkontribusi menambahkan fitur baru (seperti integrasi API Maps, bulk process, dsb.), memperbaiki bug, atau melakukan refactoring, silakan Fork repository ini dan kirimkan Pull Request.",
      },
    ],
  },
];
