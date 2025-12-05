// Mock data for development purposes
import type { Article, Category, Tag, Author, PaginatedResponse } from './types';

const mockAuthors: Author[] = [
  {
    id: '1',
    name: 'Budi Santoso',
    bio: 'Koresponden Politik Senior',
    email: 'budi.santoso@news1.com',
  },
  {
    id: '2',
    name: 'Siti Nurhaliza',
    bio: 'Reporter Teknologi',
    email: 'siti.nurhaliza@news1.com',
  },
  {
    id: '3',
    name: 'Ahmad Wijaya',
    bio: 'Editor Bisnis',
    email: 'ahmad.wijaya@news1.com',
  },
  {
    id: '4',
    name: 'Dewi Kartika',
    bio: 'Jurnalis Olahraga',
    email: 'dewi.kartika@news1.com',
  },
  {
    id: '5',
    name: 'Rudi Hartono',
    bio: 'Koresponden Internasional',
    email: 'rudi.hartono@news1.com',
  },
];

const mockCategories: Category[] = [
  { id: '1', name: 'Politik', slug: 'politik', description: 'Berita dan analisis politik terkini' },
  { id: '2', name: 'Bisnis', slug: 'bisnis', description: 'Berita bisnis dan ekonomi' },
  { id: '3', name: 'Teknologi', slug: 'teknologi', description: 'Berita teknologi dan inovasi' },
  { id: '4', name: 'Olahraga', slug: 'olahraga', description: 'Berita dan update olahraga' },
  { id: '5', name: 'Internasional', slug: 'internasional', description: 'Berita internasional' },
  { id: '6', name: 'Kesehatan', slug: 'kesehatan', description: 'Berita kesehatan dan gaya hidup' },
  {
    id: '7',
    name: 'Pendidikan',
    slug: 'pendidikan',
    description: 'Berita pendidikan dan pembelajaran',
  },
];

const mockTags: Tag[] = [
  { id: '1', name: 'Berita Utama', slug: 'berita-utama' },
  { id: '2', name: 'Analisis', slug: 'analisis' },
  { id: '3', name: 'Opini', slug: 'opini' },
  { id: '4', name: 'Investigasi', slug: 'investigasi' },
  { id: '5', name: 'Trending', slug: 'trending' },
  { id: '6', name: 'Eksklusif', slug: 'eksklusif' },
];

const mockArticles: Article[] = [
  {
    id: '1',
    title: 'Presiden Umumkan Kebijakan Baru untuk Ekonomi Digital',
    slug: 'presiden-umumkan-kebijakan-ekonomi-digital',
    excerpt:
      'Pemerintah meluncurkan paket kebijakan komprehensif untuk mendorong pertumbuhan ekonomi digital Indonesia.',
    content:
      '<p>Presiden hari ini mengumumkan serangkaian kebijakan baru yang dirancang untuk mempercepat transformasi ekonomi digital Indonesia. Kebijakan ini mencakup insentif pajak untuk startup teknologi, pengembangan infrastruktur digital di daerah terpencil, dan program pelatihan digital untuk UMKM.</p><p>Menteri Komunikasi dan Informatika menyatakan bahwa target pemerintah adalah meningkatkan kontribusi ekonomi digital hingga 25% dari PDB nasional dalam lima tahun ke depan. Program ini juga akan menciptakan jutaan lapangan kerja baru di sektor digital.</p>',
    featuredImage:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=675&fit=crop',
    publishedAt: '2024-12-05T10:00:00Z',
    author: mockAuthors[0],
    categories: [mockCategories[0]],
    tags: [mockTags[0], mockTags[5]],
    views: 25430,
  },
  {
    id: '2',
    title: 'Startup Indonesia Raih Pendanaan 500 Miliar Rupiah',
    slug: 'startup-indonesia-raih-pendanaan-500-miliar',
    excerpt:
      'Perusahaan teknologi lokal berhasil menarik investasi besar dari investor internasional.',
    content:
      '<p>Sebuah startup teknologi asal Jakarta berhasil mengamankan pendanaan Seri C senilai 500 miliar rupiah dari konsorsium investor global. Dana tersebut akan digunakan untuk ekspansi ke pasar Asia Tenggara dan pengembangan produk berbasis AI.</p><p>CEO perusahaan menyatakan bahwa pencapaian ini membuktikan bahwa ekosistem startup Indonesia semakin matang dan menarik perhatian investor internasional. Perusahaan menargetkan untuk menjadi unicorn dalam 18 bulan ke depan.</p>',
    featuredImage:
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=675&fit=crop',
    publishedAt: '2024-12-05T08:30:00Z',
    author: mockAuthors[2],
    categories: [mockCategories[1]],
    tags: [mockTags[0], mockTags[4]],
    views: 18920,
  },
  {
    id: '3',
    title: 'Peluncuran Satelit Komunikasi Generasi Terbaru',
    slug: 'peluncuran-satelit-komunikasi-generasi-terbaru',
    excerpt:
      'Indonesia berhasil meluncurkan satelit komunikasi canggih untuk meningkatkan konektivitas nasional.',
    content:
      '<p>Badan Penerbangan dan Antariksa Nasional (LAPAN) berhasil meluncurkan satelit komunikasi generasi terbaru yang akan meningkatkan kualitas internet dan komunikasi di seluruh nusantara. Satelit ini diluncurkan dari pusat peluncuran di Kourou, Guyana Prancis.</p><p>Satelit baru ini memiliki kapasitas bandwidth 10 kali lebih besar dari satelit sebelumnya dan akan memberikan akses internet berkecepatan tinggi ke daerah-daerah terpencil di Indonesia, termasuk wilayah 3T (Terdepan, Terluar, dan Tertinggal).</p>',
    featuredImage:
      'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200&h=675&fit=crop',
    publishedAt: '2024-12-04T15:45:00Z',
    author: mockAuthors[1],
    categories: [mockCategories[2]],
    tags: [mockTags[0], mockTags[1]],
    views: 22100,
  },
  {
    id: '4',
    title: 'Tim Nasional Lolos ke Piala Dunia 2026',
    slug: 'tim-nasional-lolos-piala-dunia-2026',
    excerpt:
      'Kemenangan dramatis membawa Indonesia ke putaran final Piala Dunia untuk pertama kalinya.',
    content:
      '<p>Tim nasional Indonesia berhasil meraih tiket ke Piala Dunia 2026 setelah mengalahkan Thailand 3-2 dalam pertandingan penentuan yang berlangsung dramatis. Gol kemenangan dicetak pada menit injury time yang membuat seluruh stadion meledak dalam kegembiraan.</p><p>Ini adalah pencapaian bersejarah bagi sepak bola Indonesia, mengakhiri penantian puluhan tahun untuk tampil di panggung tertinggi sepak bola dunia. Pelatih kepala menyatakan bahwa keberhasilan ini adalah hasil dari program pembinaan jangka panjang dan dedikasi seluruh pemain.</p>',
    featuredImage:
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200&h=675&fit=crop',
    publishedAt: '2024-12-04T22:30:00Z',
    author: mockAuthors[3],
    categories: [mockCategories[3]],
    tags: [mockTags[0], mockTags[4]],
    views: 45670,
  },
  {
    id: '5',
    title: 'Bursa Saham Jakarta Cetak Rekor Tertinggi',
    slug: 'bursa-saham-jakarta-cetak-rekor-tertinggi',
    excerpt: 'IHSG menembus level 8000 didorong oleh sentimen positif dari investor asing.',
    content:
      '<p>Indeks Harga Saham Gabungan (IHSG) hari ini menembus level psikologis 8000 untuk pertama kalinya dalam sejarah. Penguatan ini didorong oleh masuknya dana asing dan optimisme terhadap prospek ekonomi Indonesia.</p><p>Analis pasar modal memprediksi tren positif ini akan berlanjut hingga akhir tahun, didukung oleh fundamental ekonomi yang kuat, inflasi yang terkendali, dan kebijakan pemerintah yang pro-investasi. Sektor teknologi dan konsumer menjadi pendorong utama kenaikan indeks.</p>',
    featuredImage:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=675&fit=crop',
    publishedAt: '2024-12-04T14:20:00Z',
    author: mockAuthors[2],
    categories: [mockCategories[1]],
    tags: [mockTags[1], mockTags[4]],
    views: 16540,
  },
  {
    id: '6',
    title: 'Terobosan Baru dalam Penelitian Vaksin Demam Berdarah',
    slug: 'terobosan-penelitian-vaksin-demam-berdarah',
    excerpt: 'Peneliti Indonesia mengembangkan vaksin demam berdarah dengan efektivitas 95 persen.',
    content:
      '<p>Tim peneliti dari Universitas Indonesia berhasil mengembangkan vaksin demam berdarah dengan tingkat efektivitas mencapai 95 persen dalam uji klinis fase ketiga. Vaksin ini menggunakan teknologi mRNA yang terbukti aman dan efektif.</p><p>Menteri Kesehatan menyambut baik penemuan ini dan berencana untuk memulai produksi massal dalam waktu dekat. Vaksin ini diharapkan dapat mengurangi angka kematian akibat demam berdarah yang masih tinggi di Indonesia, terutama pada anak-anak.</p>',
    featuredImage:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=675&fit=crop',
    publishedAt: '2024-12-04T11:00:00Z',
    author: mockAuthors[4],
    categories: [mockCategories[5]],
    tags: [mockTags[0], mockTags[3]],
    views: 19800,
  },
  {
    id: '7',
    title: 'Peluncuran Program Beasiswa Pendidikan Gratis',
    slug: 'peluncuran-program-beasiswa-pendidikan-gratis',
    excerpt:
      'Pemerintah mengalokasikan 10 triliun rupiah untuk program beasiswa pendidikan berkualitas.',
    content:
      '<p>Presiden meresmikan program beasiswa pendidikan gratis yang akan memberikan kesempatan kepada 1 juta siswa berprestasi dari keluarga kurang mampu untuk melanjutkan pendidikan hingga perguruan tinggi. Program ini mencakup biaya kuliah, uang saku, dan buku.</p><p>Menteri Pendidikan menekankan bahwa program ini bertujuan untuk menciptakan generasi yang lebih terdidik dan kompetitif di era global. Pendaftaran beasiswa akan dibuka mulai awal tahun depan dengan proses seleksi yang transparan dan akuntabel.</p>',
    featuredImage:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=675&fit=crop',
    publishedAt: '2024-12-03T16:00:00Z',
    author: mockAuthors[0],
    categories: [mockCategories[6]],
    tags: [mockTags[0], mockTags[2]],
    views: 14230,
  },
  {
    id: '8',
    title: 'Kerjasama Internasional Bidang Energi Terbarukan',
    slug: 'kerjasama-internasional-energi-terbarukan',
    excerpt: 'Indonesia dan negara-negara Eropa sepakat untuk pengembangan energi bersih bersama.',
    content:
      '<p>Pemerintah Indonesia menandatangani perjanjian kerjasama strategis dengan Uni Eropa untuk pengembangan energi terbarukan. Kerjasama ini mencakup transfer teknologi, investasi infrastruktur, dan pelatihan tenaga ahli.</p><p>Target Indonesia adalah mencapai 40% bauran energi terbarukan pada tahun 2030. Proyek-proyek prioritas meliputi pembangunan pembangkit listrik tenaga surya, angin, dan pengembangan teknologi baterai untuk penyimpanan energi.</p>',
    featuredImage:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=675&fit=crop',
    publishedAt: '2024-12-03T13:15:00Z',
    author: mockAuthors[4],
    categories: [mockCategories[4]],
    tags: [mockTags[1], mockTags[5]],
    views: 12890,
  },
  {
    id: '9',
    title: 'Inovasi Aplikasi Kesehatan Mental untuk Generasi Muda',
    slug: 'inovasi-aplikasi-kesehatan-mental-generasi-muda',
    excerpt:
      'Startup lokal luncurkan aplikasi konseling kesehatan mental berbasis AI yang terjangkau.',
    content:
      '<p>Sebuah startup kesehatan digital Indonesia meluncurkan aplikasi inovatif yang menyediakan layanan konseling kesehatan mental dengan harga terjangkau. Aplikasi ini menggunakan teknologi AI untuk memberikan dukungan awal dan menghubungkan pengguna dengan psikolog profesional.</p><p>Dalam tiga bulan pertama peluncuran, aplikasi ini telah memiliki lebih dari 500.000 pengguna aktif. Para ahli kesehatan mental menyambut positif inisiatif ini sebagai solusi untuk mengatasi stigma dan meningkatkan akses layanan kesehatan mental di Indonesia.</p>',
    featuredImage:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=675&fit=crop',
    publishedAt: '2024-12-03T10:30:00Z',
    author: mockAuthors[1],
    categories: [mockCategories[2], mockCategories[5]],
    tags: [mockTags[4], mockTags[5]],
    views: 17650,
  },
  {
    id: '10',
    title: 'Festival Film Indonesia Raih Penghargaan Internasional',
    slug: 'festival-film-indonesia-raih-penghargaan-internasional',
    excerpt: 'Film Indonesia memenangkan penghargaan bergengsi di festival film Cannes.',
    content:
      '<p>Film Indonesia "Sang Pencerah" berhasil memenangkan Palme d\'Or di Festival Film Cannes, penghargaan tertinggi dalam festival film tersebut. Ini adalah kali pertama film Indonesia meraih penghargaan prestisius ini.</p><p>Sutradara film menyatakan bahwa pencapaian ini adalah bukti bahwa sinema Indonesia telah mencapai standar kelas dunia. Film ini mengangkat tema sosial yang universal dengan sudut pandang Indonesia yang unik, berhasil menarik perhatian juri internasional.</p>',
    featuredImage:
      'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&h=675&fit=crop',
    publishedAt: '2024-12-02T19:45:00Z',
    author: mockAuthors[4],
    categories: [mockCategories[4]],
    tags: [mockTags[0], mockTags[5]],
    views: 21340,
  },
  {
    id: '11',
    title: 'Implementasi 5G di 100 Kota Indonesia',
    slug: 'implementasi-5g-di-100-kota-indonesia',
    excerpt: 'Operator telekomunikasi berkomitmen meluncurkan jaringan 5G di seluruh Indonesia.',
    content:
      '<p>Tiga operator telekomunikasi besar Indonesia mengumumkan peluncuran jaringan 5G secara serentak di 100 kota besar di seluruh Indonesia. Teknologi ini akan memberikan kecepatan internet hingga 100 kali lebih cepat dari 4G.</p><p>Implementasi 5G diharapkan akan mendorong berbagai inovasi seperti smart city, kendaraan otonom, dan telemedicine. Investasi infrastruktur 5G diperkirakan mencapai 50 triliun rupiah dalam tiga tahun ke depan.</p>',
    featuredImage:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=675&fit=crop',
    publishedAt: '2024-12-02T14:00:00Z',
    author: mockAuthors[1],
    categories: [mockCategories[2]],
    tags: [mockTags[0], mockTags[1]],
    views: 15780,
  },
  {
    id: '12',
    title: 'Pemilihan Umum 2025: Partisipasi Pemilih Meningkat',
    slug: 'pemilihan-umum-2025-partisipasi-pemilih-meningkat',
    excerpt:
      'KPU mencatat tingkat partisipasi pemilih muda mencapai rekor tertinggi dalam sejarah.',
    content:
      '<p>Komisi Pemilihan Umum (KPU) melaporkan bahwa tingkat partisipasi pemilih dalam Pemilu 2025 mencapai 87%, tertinggi dalam sejarah demokrasi Indonesia. Peningkatan signifikan terjadi pada kelompok pemilih muda berusia 17-25 tahun.</p><p>Ketua KPU mengapresiasi tingginya kesadaran politik masyarakat dan efektivitas kampanye pendidikan pemilih melalui media sosial. Proses pemungutan suara berjalan lancar dan aman di seluruh TPS, dengan penerapan teknologi e-voting di beberapa wilayah.</p>',
    featuredImage:
      'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&h=675&fit=crop',
    publishedAt: '2024-12-02T09:20:00Z',
    author: mockAuthors[0],
    categories: [mockCategories[0]],
    tags: [mockTags[0], mockTags[2]],
    views: 28900,
  },
  {
    id: '13',
    title: 'Ekspor Produk Digital Indonesia Tembus 5 Miliar Dollar',
    slug: 'ekspor-produk-digital-indonesia-tembus-5-miliar-dollar',
    excerpt: 'Produk digital dan jasa IT Indonesia semakin diminati pasar global.',
    content:
      '<p>Badan Pusat Statistik (BPS) mencatat nilai ekspor produk digital dan jasa teknologi informasi Indonesia mencapai 5 miliar dollar AS pada tahun ini, meningkat 45% dari tahun sebelumnya. Game, aplikasi mobile, dan layanan pengembangan software menjadi kontributor utama.</p><p>Kementerian Perdagangan menyatakan bahwa pemerintah akan terus mendukung pelaku industri digital melalui berbagai program seperti sertifikasi internasional, pendampingan ekspor, dan partisipasi dalam pameran teknologi global.</p>',
    featuredImage:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop',
    publishedAt: '2024-12-01T16:30:00Z',
    author: mockAuthors[2],
    categories: [mockCategories[1], mockCategories[2]],
    tags: [mockTags[1], mockTags[4]],
    views: 13560,
  },
  {
    id: '14',
    title: 'Juara Dunia Bulu Tangkis Kembali ke Indonesia',
    slug: 'juara-dunia-bulu-tangkis-kembali-ke-indonesia',
    excerpt: 'Atlet Indonesia meraih gelar juara dunia bulu tangkis setelah 5 tahun penantian.',
    content:
      '<p>Pasangan ganda putra Indonesia berhasil merebut gelar juara dunia BWF setelah mengalahkan pasangan China di pertandingan final yang berlangsung sengit. Kemenangan ini mengakhiri paceklik gelar dunia Indonesia selama lima tahun terakhir.</p><p>Menteri Pemuda dan Olahraga memberikan apresiasi tinggi kepada para atlet dan menjanjikan bonus serta peningkatan program pembinaan atlet. Prestasi ini diharapkan dapat memotivasi generasi muda untuk berprestasi di bidang olahraga.</p>',
    featuredImage:
      'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=1200&h=675&fit=crop',
    publishedAt: '2024-12-01T21:00:00Z',
    author: mockAuthors[3],
    categories: [mockCategories[3]],
    tags: [mockTags[0], mockTags[5]],
    views: 32100,
  },
  {
    id: '15',
    title: 'Pengembangan Smart City di Jakarta Masuki Fase Baru',
    slug: 'pengembangan-smart-city-jakarta-fase-baru',
    excerpt: 'Pemerintah DKI Jakarta implementasikan sistem manajemen kota berbasis IoT dan AI.',
    content:
      '<p>Gubernur DKI Jakarta meresmikan fase baru pengembangan smart city dengan implementasi sistem manajemen transportasi, sampah, dan keamanan berbasis Internet of Things (IoT) dan kecerdasan buatan. Ribuan sensor telah dipasang di seluruh kota.</p><p>Sistem ini mampu memprediksi kemacetan, mengoptimalkan pengumpulan sampah, dan meningkatkan respons keamanan publik. Target Jakarta adalah menjadi salah satu dari 10 kota paling cerdas di Asia pada tahun 2030.</p>',
    featuredImage:
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&h=675&fit=crop',
    publishedAt: '2024-12-01T12:45:00Z',
    author: mockAuthors[1],
    categories: [mockCategories[2], mockCategories[0]],
    tags: [mockTags[1], mockTags[5]],
    views: 18420,
  },
  {
    id: '16',
    title: 'Program Sertifikasi Guru Digital Nasional',
    slug: 'program-sertifikasi-guru-digital-nasional',
    excerpt: 'Kemendikbud luncurkan program pelatihan dan sertifikasi guru di era digital.',
    content:
      '<p>Kementerian Pendidikan dan Kebudayaan meluncurkan program sertifikasi guru digital yang melatih 500.000 guru di seluruh Indonesia dalam penggunaan teknologi pembelajaran modern. Program ini mencakup pelatihan platform e-learning, multimedia, dan assessment digital.</p><p>Menteri Pendidikan menyatakan bahwa transformasi digital pendidikan adalah kunci untuk meningkatkan kualitas pembelajaran dan mempersiapkan siswa menghadapi tantangan masa depan. Program ini didukung oleh berbagai mitra teknologi dan universitas terkemuka.</p>',
    featuredImage:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=675&fit=crop',
    publishedAt: '2024-11-30T15:30:00Z',
    author: mockAuthors[0],
    categories: [mockCategories[6]],
    tags: [mockTags[1], mockTags[2]],
    views: 11890,
  },
  {
    id: '17',
    title: 'Kenaikan Harga Minyak Dunia Pengaruhi Ekonomi Indonesia',
    slug: 'kenaikan-harga-minyak-dunia-pengaruhi-ekonomi',
    excerpt: 'Pemerintah siapkan langkah antisipatif menghadapi kenaikan harga energi global.',
    content:
      '<p>Harga minyak mentah dunia yang melonjak hingga 90 dollar AS per barel memberikan dampak pada perekonomian Indonesia. Pemerintah menggelar rapat koordinasi untuk membahas langkah-langkah antisipatif menghadapi tekanan inflasi.</p><p>Bank Indonesia menyatakan akan menjaga stabilitas nilai tukar rupiah melalui intervensi pasar dan koordinasi kebijakan fiskal-moneter. Pemerintah juga berencana mempercepat transisi energi terbarukan untuk mengurangi ketergantungan pada energi fosil.</p>',
    featuredImage:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=675&fit=crop',
    publishedAt: '2024-11-30T10:15:00Z',
    author: mockAuthors[2],
    categories: [mockCategories[1]],
    tags: [mockTags[1], mockTags[3]],
    views: 16720,
  },
  {
    id: '18',
    title: 'Penemuan Situs Arkeologi Berusia 2000 Tahun',
    slug: 'penemuan-situs-arkeologi-berusia-2000-tahun',
    excerpt: 'Arkeolog temukan kompleks candi kuno yang mengubah sejarah peradaban Nusantara.',
    content:
      '<p>Tim arkeolog Indonesia menemukan kompleks candi kuno berusia lebih dari 2000 tahun di Jawa Tengah. Penemuan ini mengungkapkan bukti baru tentang peradaban maju yang ada di Nusantara jauh sebelum era kerajaan yang telah diketahui.</p><p>Kepala Balai Arkeologi menyatakan bahwa penemuan ini akan mengubah pemahaman tentang sejarah peradaban Indonesia. Struktur arsitektur, artefak, dan prasasti yang ditemukan menunjukkan tingkat teknologi dan organisasi sosial yang sangat maju untuk zamannya.</p>',
    featuredImage:
      'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1200&h=675&fit=crop',
    publishedAt: '2024-11-29T14:00:00Z',
    author: mockAuthors[4],
    categories: [mockCategories[4]],
    tags: [mockTags[3], mockTags[5]],
    views: 24560,
  },
  {
    id: '19',
    title: 'Terobosan Pengobatan Kanker dari Tanaman Herbal Indonesia',
    slug: 'terobosan-pengobatan-kanker-tanaman-herbal',
    excerpt: 'Peneliti berhasil ekstrak senyawa anti-kanker dari tanaman endemik Indonesia.',
    content:
      '<p>Peneliti dari Institut Teknologi Bandung berhasil mengekstrak senyawa aktif dari tanaman herbal endemik Indonesia yang terbukti efektif melawan sel kanker. Uji laboratorium menunjukkan senyawa ini dapat menghambat pertumbuhan sel kanker hingga 80%.</p><p>Hasil penelitian ini telah dipublikasikan di jurnal ilmiah internasional bergengsi. Saat ini, penelitian memasuki tahap uji klinis pada manusia. Jika berhasil, ini akan menjadi terobosan besar dalam pengobatan kanker dengan bahan alami Indonesia.</p>',
    featuredImage:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&h=675&fit=crop',
    publishedAt: '2024-11-29T11:30:00Z',
    author: mockAuthors[1],
    categories: [mockCategories[5]],
    tags: [mockTags[3], mockTags[5]],
    views: 20340,
  },
  {
    id: '20',
    title: 'Reformasi Birokrasi: Layanan Publik Serba Digital',
    slug: 'reformasi-birokrasi-layanan-publik-digital',
    excerpt: 'Pemerintah transformasi 500 layanan publik menjadi sistem digital terintegrasi.',
    content:
      '<p>Kementerian Pendayagunaan Aparatur Negara meluncurkan sistem layanan publik digital terintegrasi yang mencakup 500 jenis layanan dari berbagai instansi. Masyarakat kini dapat mengakses layanan administrasi kependudukan, perizinan, hingga kesehatan melalui satu portal.</p><p>Sistem ini menggunakan teknologi blockchain untuk keamanan data dan AI untuk mempercepat proses. Hasil survei menunjukkan tingkat kepuasan masyarakat terhadap layanan publik meningkat drastis dari 65% menjadi 92% setelah digitalisasi.</p>',
    featuredImage:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=675&fit=crop',
    publishedAt: '2024-11-28T13:00:00Z',
    author: mockAuthors[0],
    categories: [mockCategories[0], mockCategories[2]],
    tags: [mockTags[1], mockTags[4]],
    views: 19670,
  },
];

/**
 * Mock implementation of getLatestArticles
 */
export function getMockLatestArticles(
  page: number = 1,
  perPage: number = 10
): PaginatedResponse<Article> {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const paginatedArticles = mockArticles.slice(start, end);

  return {
    data: paginatedArticles,
    total: mockArticles.length,
    page,
    perPage,
    totalPages: Math.ceil(mockArticles.length / perPage),
  };
}

/**
 * Mock implementation of getArticleBySlug
 */
export function getMockArticleBySlug(slug: string): Article | null {
  return mockArticles.find((article) => article.slug === slug) || null;
}

/**
 * Mock implementation of getArticlesByCategory
 */
export function getMockArticlesByCategory(
  category: string,
  page: number = 1,
  perPage: number = 10
): PaginatedResponse<Article> {
  const filtered = mockArticles.filter((article) =>
    article.categories.some((cat) => cat.slug === category)
  );

  const start = (page - 1) * perPage;
  const end = start + perPage;
  const paginatedArticles = filtered.slice(start, end);

  return {
    data: paginatedArticles,
    total: filtered.length,
    page,
    perPage,
    totalPages: Math.ceil(filtered.length / perPage),
  };
}

/**
 * Mock implementation of getArticlesByTag
 */
export function getMockArticlesByTag(
  tag: string,
  page: number = 1,
  perPage: number = 10
): PaginatedResponse<Article> {
  const filtered = mockArticles.filter((article) => article.tags.some((t) => t.slug === tag));

  const start = (page - 1) * perPage;
  const end = start + perPage;
  const paginatedArticles = filtered.slice(start, end);

  return {
    data: paginatedArticles,
    total: filtered.length,
    page,
    perPage,
    totalPages: Math.ceil(filtered.length / perPage),
  };
}

/**
 * Mock implementation of getCategories
 */
export function getMockCategories(): Category[] {
  return mockCategories;
}

/**
 * Mock implementation of getTags
 */
export function getMockTags(): Tag[] {
  return mockTags;
}

/**
 * Mock implementation of getPopularArticles
 * Returns articles sorted by views in descending order
 */
export function getMockPopularArticles(limit: number = 5): Article[] {
  return [...mockArticles].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, limit);
}
