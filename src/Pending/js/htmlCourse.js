export const htmlCourse = [

  // SECTION 1 - BASIC
  {
    sectionTitle: "Getting Started with HTML",
    items: [
      {
        type: "lesson",
        title: "Apa itu HTML?",
        content: "HTML (HyperText Markup Language) adalah bahasa standar yang digunakan untuk membuat dan menyusun struktur halaman website. HTML bukan bahasa pemrograman, melainkan bahasa markup yang menggunakan tag-tag khusus untuk mendefinisikan setiap bagian dari sebuah halaman web — mulai dari judul, paragraf, gambar, hingga tautan. Setiap halaman website yang kamu kunjungi dibangun di atas fondasi HTML."
      },
      {
        type: "quiz",
        question: "HTML adalah singkatan dari...?",
        options: ["HyperText Markup Language", "High Transfer Markup Logic", "Home Tool Markup Language", "HyperText Managing Links"],
        answer: 0
      },
      {
        type: "code",
        instruction: "Buat elemen button dengan tulisan 'Like'",
        answer: "<button>Like</button>"
      },
      {
        type: "lesson",
        title: "Fungsi HTML",
        content: "Fungsi utama HTML adalah menentukan struktur dan konten dari sebuah halaman web. HTML memberitahu browser bagaimana menampilkan teks, gambar, tabel, formulir, dan elemen lainnya. Analoginya, jika website adalah sebuah rumah, maka HTML adalah kerangka bangunannya — menentukan di mana letak dinding, pintu, dan jendela. Sementara CSS bertugas untuk 'mengecat' dan memperindah tampilannya, dan JavaScript menambahkan interaktivitas."
      },
      {
        type: "quiz",
        question: "Apa analogi yang tepat untuk menggambarkan peran HTML dalam sebuah website?",
        options: ["Cat dinding yang memperindah tampilan", "Kerangka bangunan yang menentukan struktur", "Listrik yang membuat rumah berfungsi", "Furnitur yang mengisi ruangan"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat sebuah paragraf dengan teks 'HTML adalah kerangka website'",
        answer: "<p>HTML adalah kerangka website</p>"
      },

      {
        type: "lesson",
        title: "File HTML",
        content: "File HTML disimpan dengan ekstensi .html atau .htm. Ketika kamu membuat file bernama index.html, browser langsung mengenalinya sebagai halaman web dan bisa membukanya secara langsung tanpa perlu server khusus. Nama file index.html secara konvensi digunakan sebagai halaman utama (homepage) sebuah website. Kamu bisa membuat file HTML menggunakan teks editor sederhana seperti Notepad, VS Code, atau Sublime Text."
      },
      {
        type: "quiz",
        question: "Manakah nama file yang paling tepat untuk halaman utama sebuah website?",
        options: ["home.js", "main.css", "index.html", "start.py"],
        answer: 2
      },
      {
        type: "code",
        instruction: "Buat sebuah elemen paragraf bertuliskan 'Selamat datang di index.html'",
        answer: "<p>Selamat datang di index.html</p>"
      },

      {
        type: "lesson",
        title: "Struktur Dasar HTML",
        content: "Setiap dokumen HTML yang valid memiliki struktur dasar yang wajib ada. Dimulai dengan deklarasi <!DOCTYPE html> yang memberi tahu browser bahwa ini adalah dokumen HTML5. Kemudian ada tag <html> sebagai pembungkus utama, tag <head> yang berisi informasi tentang halaman (seperti judul dan meta data), dan tag <body> yang berisi semua konten yang tampil di layar. Tanpa struktur ini, halaman web mungkin masih bisa tampil, namun tidak sesuai standar."
      },
      {
        type: "quiz",
        question: "Bagian manakah dari struktur HTML yang berisi konten yang tampil di layar browser?",
        options: ["<head>", "<html>", "<body>", "<!DOCTYPE html>"],
        answer: 2
      },
      {
        type: "code",
        instruction: "Tulis tag pembuka dan penutup <body> yang benar",
        answer: "<body></body>"
      },

      {
        type: "lesson",
        title: "Bagaimana Browser Bekerja",
        content: "Ketika kamu membuka sebuah website, browser (seperti Chrome, Firefox, atau Edge) mengunduh file HTML dari server, lalu membacanya dari atas ke bawah secara berurutan. Browser menginterpretasikan setiap tag HTML dan mengubahnya menjadi tampilan visual yang bisa kamu lihat. Proses ini disebut 'rendering'. Browser juga memiliki Developer Tools yang memungkinkan kamu melihat kode HTML dari halaman manapun dengan menekan F12."
      },
      {
        type: "quiz",
        question: "Proses browser mengubah kode HTML menjadi tampilan visual disebut...?",
        options: ["Compiling", "Rendering", "Debugging", "Deploying"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat sebuah paragraf bertuliskan 'Browser membaca HTML dari atas ke bawah'",
        answer: "<p>Browser membaca HTML dari atas ke bawah</p>"
      },

      {
        type: "lesson",
        title: "HTML Bukan Bahasa Pemrograman",
        content: "Ini adalah perbedaan penting yang sering disalahpahami! HTML disebut 'markup language' bukan 'programming language' karena HTML tidak memiliki logika seperti kondisi (if-else), perulangan (loop), atau fungsi (function). HTML hanya mendeskripsikan struktur dan konten — ia tidak bisa mengambil keputusan atau melakukan perhitungan. Untuk menambahkan logika ke website, kita membutuhkan JavaScript. Sedangkan untuk tampilan visual, kita menggunakan CSS."
      },
      {
        type: "quiz",
        question: "Mengapa HTML disebut 'markup language' bukan 'programming language'?",
        options: ["Karena HTML hanya bisa digunakan di browser", "Karena HTML tidak memiliki logika seperti kondisi dan perulangan", "Karena HTML membutuhkan compiler khusus", "Karena HTML dibuat oleh Microsoft"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat sebuah paragraf bertuliskan 'HTML adalah markup language'",
        answer: "<p>HTML adalah markup language</p>"
      },

      {
        type: "lesson",
        title: "Elemen HTML",
        content: "Elemen HTML adalah unit dasar pembentuk halaman web. Sebuah elemen biasanya terdiri dari tiga bagian: tag pembuka, konten, dan tag penutup. Contohnya: <p>Ini adalah paragraf</p>. Di sini, <p> adalah tag pembuka, 'Ini adalah paragraf' adalah konten, dan </p> adalah tag penutup. Ada juga elemen yang tidak memiliki konten dan tag penutup, disebut 'void element' atau 'self-closing element', seperti <br>, <img>, dan <hr>."
      },
      {
        type: "quiz",
        question: "Manakah contoh elemen HTML yang lengkap dan benar?",
        options: ["<p>Halo Dunia", "<p>Halo Dunia</p>", "Halo Dunia</p>", "[p]Halo Dunia[/p]"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat elemen paragraf lengkap (tag pembuka, konten, tag penutup) dengan teks 'Halo Dunia'",
        answer: "<p>Halo Dunia</p>"
      },

      {
        type: "lesson",
        title: "Tag HTML",
        content: "Tag adalah instruksi yang ditulis dalam tanda kurung sudut (< >) untuk memberitahu browser bagaimana menampilkan konten. Tag biasanya berpasangan: tag pembuka seperti <h1> dan tag penutup seperti </h1>. Nama tag bersifat case-insensitive, artinya <P> dan <p> dianggap sama, namun konvensi modern menggunakan huruf kecil (lowercase). Beberapa tag memiliki atribut tambahan yang ditulis di dalam tag pembuka, seperti <img src='gambar.jpg' alt='foto'>."
      },
      {
        type: "quiz",
        question: "Di manakah atribut sebuah tag HTML ditulis?",
        options: ["Di dalam tag penutup", "Di luar tag pembuka", "Di dalam tag pembuka", "Di antara tag pembuka dan penutup"],
        answer: 2
      },
      {
        type: "code",
        instruction: "Buat tag pembuka <h1> dengan atribut id bernilai 'judul'",
        answer: "<h1 id=\"judul\">"
      },

      {
        type: "lesson",
        title: "Tag Penutup",
        content: "Tag penutup berfungsi untuk menandai akhir dari sebuah elemen HTML. Tag penutup selalu menggunakan garis miring (/) sebelum nama tag, contohnya </p>, </h1>, </div>. Lupa menambahkan tag penutup adalah kesalahan umum yang bisa menyebabkan tampilan halaman web menjadi kacau, karena browser akan mencoba 'menebak' di mana elemen seharusnya berakhir. Tidak semua elemen membutuhkan tag penutup — elemen seperti <br>, <img>, <input>, dan <hr> adalah self-closing elements."
      },
      {
        type: "quiz",
        question: "Apa yang terjadi jika kita lupa menuliskan tag penutup pada sebuah elemen HTML?",
        options: ["Halaman tidak akan tampil sama sekali", "Browser akan error dan berhenti", "Browser mencoba menebak dan tampilan bisa menjadi kacau", "Tidak ada efek sama sekali"],
        answer: 2
      },
      {
        type: "code",
        instruction: "Tulis tag penutup yang benar untuk elemen <div>",
        answer: "</div>"
      },

      {
        type: "lesson",
        title: "Selamat Menyelesaikan Section Pertama!",
        content: "Luar biasa! Kamu telah memahami dasar-dasar HTML. Kamu sekarang tahu bahwa HTML adalah bahasa markup untuk membuat struktur web, file HTML berekstensi .html, dan setiap elemen terdiri dari tag pembuka, konten, dan tag penutup. Kamu juga memahami perbedaan HTML dengan CSS dan JavaScript. Di section berikutnya, kita akan mempelajari cara memformat teks menggunakan berbagai tag HTML. Terus semangat!"
      },
      {
        type: "quiz",
        question: "Mana dari pernyataan berikut yang BENAR tentang HTML?",
        options: ["HTML bisa membuat animasi tanpa CSS atau JS", "HTML adalah bahasa pemrograman seperti Python", "HTML mendefinisikan struktur halaman web dan bukan programming language", "HTML hanya bisa dibuka dengan software khusus"],
        answer: 2
      },
      {
        type: "code",
        instruction: "Buat struktur HTML paling dasar: tag <html> yang di dalamnya berisi tag <body> kosong",
        answer: "<html><body></body></html>"
      },
    ]
  },

  // SECTION 2 - TEXT
  {
    sectionTitle: "Text & Formatting",
    items: [
      {
        type: "lesson",
        title: "Paragraf dengan Tag <p>",
        content: "Tag <p> digunakan untuk membuat paragraf dalam HTML. Setiap paragraf yang dibungkus dengan <p>...</p> secara otomatis akan mendapatkan jarak (margin) di atas dan di bawahnya, sehingga terpisah secara visual dari paragraf lain. Browser akan menampilkan setiap elemen <p> sebagai blok tersendiri. Penting diingat: spasi dan baris baru di dalam kode HTML tidak berpengaruh pada tampilan — browser hanya membaca tag HTML untuk menentukan format. Jika ingin baris baru, kamu harus menggunakan tag <br>."
      },
      {
        type: "quiz",
        question: "Apa yang terjadi secara otomatis ketika kita menggunakan tag <p> untuk sebuah paragraf?",
        options: ["Teks menjadi tebal", "Teks mendapat jarak (margin) di atas dan bawahnya", "Teks menjadi berwarna merah", "Teks menjadi rata tengah"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat sebuah paragraf dengan teks 'Belajar HTML itu menyenangkan'",
        answer: "<p>Belajar HTML itu menyenangkan</p>"
      },

      {
        type: "lesson",
        title: "Heading: Judul dan Sub-judul",
        content: "HTML menyediakan enam level heading dari <h1> hingga <h6>. Tag <h1> adalah heading terbesar dan paling penting — biasanya digunakan untuk judul utama halaman. <h2> untuk sub-judul, <h3> untuk sub-sub-judul, dan seterusnya hingga <h6> yang merupakan heading terkecil. Heading tidak hanya soal ukuran teks, tapi juga penting untuk SEO (Search Engine Optimization) — mesin pencari seperti Google menggunakan heading untuk memahami struktur dan topik halaman webmu. Sebaiknya setiap halaman hanya memiliki satu tag <h1>."
      },
      {
        type: "quiz",
        question: "Selain ukuran visual, mengapa penggunaan heading (h1-h6) yang tepat itu penting?",
        options: ["Karena heading membuat halaman lebih cepat", "Karena heading berpengaruh pada SEO dan struktur dokumen", "Karena heading wajib digunakan di setiap paragraf", "Karena heading membuat warna teks berubah otomatis"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat judul utama halaman dengan teks 'Selamat Datang'",
        answer: "<h1>Selamat Datang</h1>"
      },

      {
        type: "lesson",
        title: "Teks Tebal dengan <b> dan <strong>",
        content: "Ada dua cara untuk membuat teks tebal di HTML: <b> dan <strong>. Secara visual, keduanya menghasilkan tampilan yang sama — teks tebal (bold). Namun maknanya berbeda. Tag <b> hanya memberikan format visual tebal tanpa makna semantik khusus. Sementara tag <strong> memiliki makna semantik — ia menandai bahwa teks tersebut memiliki kepentingan atau urgensi tinggi. Screen reader (alat bantu untuk penyandang tunanetra) akan membaca <strong> dengan penekanan berbeda. Untuk praktik terbaik, gunakan <strong> ketika teks memang penting secara makna."
      },
      {
        type: "quiz",
        question: "Apa perbedaan utama antara tag <b> dan tag <strong>?",
        options: ["<b> membuat teks lebih tebal dari <strong>", "<b> hanya visual, <strong> memiliki makna semantik (penekanan penting)", "<strong> hanya bisa digunakan di dalam heading", "<b> adalah versi baru dan <strong> sudah usang"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat teks 'Perhatian' menggunakan tag yang memiliki makna semantik penting",
        answer: "<strong>Perhatian</strong>"
      },

      {
        type: "lesson",
        title: "Teks Miring dengan <i> dan <em>",
        content: "Sama seperti bold, italic juga memiliki dua tag: <i> dan <em>. Tag <i> menghasilkan teks miring (italic) secara visual tanpa makna tambahan — cocok untuk istilah teknis, kata dalam bahasa asing, atau nama karya. Tag <em> (emphasis) juga menghasilkan teks miring, namun memiliki makna semantik berupa penekanan pada kata tersebut. Misalnya: 'Saya <em>sangat</em> suka HTML' — kata 'sangat' ditekankan. Screen reader akan membaca kata dalam <em> dengan intonasi berbeda untuk menyampaikan penekanan tersebut."
      },
      {
        type: "quiz",
        question: "Kapan sebaiknya kita menggunakan <em> dibandingkan <i>?",
        options: ["Ketika ingin teks terlihat lebih miring", "Ketika teks tersebut perlu ditekankan secara semantik (memiliki penekanan makna)", "Ketika teks berada di dalam paragraf", "Ketika teks berukuran besar"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat teks 'sangat penting' dengan penekanan semantik (italic bermakna)",
        answer: "<em>sangat penting</em>"
      },

      {
        type: "lesson",
        title: "Garis Bawah dengan <u>",
        content: "Tag <u> digunakan untuk memberikan garis bawah (underline) pada teks. Secara historis sering digunakan untuk penekanan, namun di web modern penggunaannya perlu hati-hati karena tampilan bergaris bawah sangat mirip dengan hyperlink (tautan). Hal ini bisa membingungkan pengguna yang mengira teks bergaris bawah adalah link yang bisa diklik. Tag <u> lebih tepat digunakan untuk kasus khusus seperti menandai kata yang salah eja (seperti yang dilakukan aplikasi word processor) atau istilah dalam bahasa China tanpa translasi. Untuk penekanan visual, CSS lebih disarankan."
      },
      {
        type: "quiz",
        question: "Mengapa penggunaan tag <u> untuk teks biasa di web modern perlu dilakukan dengan hati-hati?",
        options: ["Karena <u> tidak didukung di semua browser", "Karena tampilan garis bawah mirip dengan hyperlink sehingga membingungkan pengguna", "Karena <u> membuat teks menjadi tidak terbaca", "Karena <u> memperlambat loading halaman"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat teks 'kata salah eja' menggunakan tag garis bawah",
        answer: "<u>kata salah eja</u>"
      },

      {
        type: "lesson",
        title: "Baris Baru dengan <br>",
        content: "Tag <br> (break) digunakan untuk membuat baris baru di dalam konten tanpa memulai paragraf baru. Tidak seperti kebanyakan tag HTML, <br> adalah self-closing element — tidak membutuhkan tag penutup. Ini sangat berguna ketika kamu ingin membuat baris baru di dalam satu paragraf, misalnya untuk menulis alamat atau puisi. Ingat: menekan Enter di dalam kode HTML tidak akan membuat baris baru di tampilan browser. Kamu benar-benar harus menggunakan <br> untuk memaksa pergantian baris."
      },
      {
        type: "quiz",
        question: "Manakah penggunaan tag <br> yang paling tepat?",
        options: ["Untuk memisahkan dua paragraf berbeda", "Untuk membuat baris baru di dalam konten yang sama, seperti baris-baris alamat", "Untuk membuat garis horizontal di halaman", "Untuk memberikan jarak antar elemen"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat dua baris teks dalam satu paragraf: 'Jalan Merdeka No. 1' dan 'Jakarta Pusat', dipisahkan dengan baris baru",
        answer: "<p>Jalan Merdeka No. 1<br>Jakarta Pusat</p>"
      },

      {
        type: "lesson",
        title: "Garis Horizontal dengan <hr>",
        content: "Tag <hr> (horizontal rule) digunakan untuk menampilkan garis horizontal di halaman web. Seperti <br>, tag <hr> adalah self-closing element. Secara semantik, <hr> digunakan untuk menandai pergantian topik atau pemisahan konten yang berbeda dalam satu halaman — bukan sekadar dekorasi. Tampilannya bisa dikustomisasi menggunakan CSS, misalnya mengubah warna, ketebalan, atau gaya garisnya. Tag ini sering digunakan di akhir section atau artikel untuk memberikan pemisah visual yang jelas."
      },
      {
        type: "quiz",
        question: "Apa makna semantik dari tag <hr> dalam HTML?",
        options: ["Sebuah garis dekoratif tanpa makna", "Pemisah tematik yang menandai pergantian topik atau konten", "Garis yang membagi halaman menjadi dua kolom", "Batas bawah dari sebuah tabel"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat sebuah paragraf 'Bab 1 selesai', lalu tambahkan garis horizontal pemisah di bawahnya",
        answer: "<p>Bab 1 selesai</p><hr>"
      },

      {
        type: "lesson",
        title: "Teks Kecil dengan <small>",
        content: "Tag <small> digunakan untuk menampilkan teks yang berukuran lebih kecil dari teks normal di sekitarnya. Tag ini memiliki makna semantik untuk teks yang bersifat tambahan atau kurang penting, seperti: keterangan hak cipta (copyright), disclaimer, syarat dan ketentuan, atau catatan kaki. Contoh penggunaan yang tepat: <p>Produk kami terbaik! <small>*Syarat dan ketentuan berlaku.</small></p>. Hindari menggunakan <small> hanya untuk keperluan visual semata — gunakan CSS jika hanya ingin mengubah ukuran font."
      },
      {
        type: "quiz",
        question: "Manakah contoh penggunaan tag <small> yang paling tepat secara semantik?",
        options: ["Untuk judul halaman yang tidak terlalu penting", "Untuk keterangan copyright, disclaimer, atau catatan kecil di bawah konten utama", "Untuk semua teks di dalam sidebar", "Untuk membuat semua teks menjadi lebih kecil"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat teks keterangan copyright: '© 2024 MyWebsite' menggunakan tag yang tepat untuk teks tambahan kecil",
        answer: "<small>© 2024 MyWebsite</small>"
      },

      {
        type: "lesson",
        title: "Elemen Inline dengan <span>",
        content: "Tag <span> adalah elemen inline yang tidak memiliki makna semantik bawaan — ia hanya berfungsi sebagai wadah (container) generik untuk teks atau elemen inline lainnya. <span> sering digunakan bersama CSS atau JavaScript untuk memberikan style atau perilaku tertentu pada sebagian teks di dalam paragraf. Perbedaan kunci: <span> adalah inline element (tidak membuat baris baru), sedangkan <div> adalah block element (selalu mulai dari baris baru). Contoh: <p>Teks ini <span style='color:red'>berwarna merah</span> dan ini tidak.</p>"
      },
      {
        type: "quiz",
        question: "Apa perbedaan antara <span> dan <div>?",
        options: ["<span> untuk gambar, <div> untuk teks", "<span> adalah inline element, <div> adalah block element", "<span> lebih baru dari <div>", "<span> membutuhkan tag penutup, <div> tidak"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat paragraf bertuliskan 'Harga: ' lalu bungkus teks 'Rp 50.000' dengan span",
        answer: "<p>Harga: <span>Rp 50.000</span></p>"
      },
    ]
  },

  // SECTION 3 - MEDIA
  {
    sectionTitle: "Media & Links",
    items: [
      {
        type: "lesson",
        title: "Menampilkan Gambar dengan <img>",
        content: "Tag <img> digunakan untuk menampilkan gambar di halaman web. Tag ini adalah self-closing element dan membutuhkan setidaknya dua atribut penting: src (source/sumber) yang menunjukkan lokasi file gambar, dan alt (alternative text) yang mendeskripsikan gambar. Format gambar yang umum didukung browser adalah JPEG/JPG (foto), PNG (gambar dengan transparansi), GIF (animasi sederhana), WebP (format modern yang lebih efisien), dan SVG (grafik vektor). Contoh: <img src='foto.jpg' alt='Foto pemandangan gunung'>."
      },
      {
        type: "quiz",
        question: "Apa dua atribut yang wajib ada pada tag <img> untuk praktik terbaik?",
        options: ["width dan height", "src dan alt", "href dan title", "class dan id"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat tag gambar dengan src 'foto.jpg' dan alt 'Foto profil saya'",
        answer: "<img src=\"foto.jpg\" alt=\"Foto profil saya\">"
      },

      {
        type: "lesson",
        title: "Atribut src pada <img>",
        content: "Atribut src (source) menentukan lokasi file gambar yang akan ditampilkan. Nilainya bisa berupa path relatif (lokasi file gambar relatif terhadap file HTML), path absolut (path lengkap di dalam server), atau URL eksternal (link gambar dari internet). Contoh path relatif: src='images/foto.jpg' (gambar ada di folder 'images'). Contoh URL eksternal: src='https://example.com/gambar.jpg'. Jika path salah atau file tidak ditemukan, gambar tidak akan tampil dan sebagai gantinya browser akan menampilkan teks dari atribut alt."
      },
      {
        type: "quiz",
        question: "Jika file gambar berada di folder 'assets' dan file HTML di root, manakah nilai src yang benar?",
        options: ["src='gambar.jpg'", "src='assets/gambar.jpg'", "src='/gambar.jpg'", "src='../gambar.jpg'"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat tag gambar yang mengambil file 'logo.png' dari dalam folder 'images', dengan alt 'Logo Perusahaan'",
        answer: "<img src=\"images/logo.png\" alt=\"Logo Perusahaan\">"
      },

      {
        type: "lesson",
        title: "Atribut alt untuk Aksesibilitas",
        content: "Atribut alt (alternative text) berisi deskripsi teks dari sebuah gambar. Alt text sangat penting karena: (1) Ditampilkan jika gambar gagal dimuat, sehingga pengguna tetap tahu konten gambar tersebut. (2) Dibaca oleh screen reader untuk pengguna tunanetra — ini adalah kunci aksesibilitas web. (3) Digunakan oleh mesin pencari untuk memahami gambar, yang membantu SEO. Alt text yang baik mendeskripsikan isi gambar secara singkat dan jelas. Untuk gambar dekoratif yang tidak punya makna, gunakan alt='' (kosong) agar screen reader bisa melewatinya."
      },
      {
        type: "quiz",
        question: "Apa yang terjadi pada atribut alt jika gambar bersifat dekoratif dan tidak memiliki makna konten?",
        options: ["Isi dengan deskripsi gambar seperti biasa", "Hapus atribut alt sama sekali", "Isi dengan nilai kosong: alt=''", "Isi dengan kata 'dekoratif'"],
        answer: 2
      },
      {
        type: "code",
        instruction: "Buat tag gambar dekoratif 'divider.png' dengan alt yang tepat untuk gambar tanpa makna konten",
        answer: "<img src=\"divider.png\" alt=\"\">"
      },

      {
        type: "lesson",
        title: "Hyperlink dengan Tag <a>",
        content: "Tag <a> (anchor) digunakan untuk membuat hyperlink — tautan yang bisa diklik untuk berpindah ke halaman lain, bagian lain di halaman yang sama, file, email, atau nomor telepon. Atribut wajibnya adalah href (hypertext reference) yang menentukan tujuan link. Konten di antara tag <a> dan </a> adalah teks atau elemen yang bisa diklik. Contoh: <a href='https://google.com'>Kunjungi Google</a>. Link bisa berupa URL eksternal, path relatif ke halaman lain, atau anchor (#id) untuk navigasi dalam halaman."
      },
      {
        type: "quiz",
        question: "Manakah kode HTML yang benar untuk membuat link ke halaman 'tentang.html'?",
        options: ["<link href='tentang.html'>Tentang Kami</link>", "<a src='tentang.html'>Tentang Kami</a>", "<a href='tentang.html'>Tentang Kami</a>", "<url>tentang.html</url>"],
        answer: 2
      },
      {
        type: "code",
        instruction: "Buat link bertuliskan 'Kunjungi Google' yang mengarah ke 'https://google.com'",
        answer: "<a href=\"https://google.com\">Kunjungi Google</a>"
      },

      {
        type: "lesson",
        title: "Membuka Link di Tab Baru dengan target",
        content: "Atribut target pada tag <a> menentukan bagaimana link dibuka. Nilai yang paling sering digunakan: target='_blank' untuk membuka link di tab atau jendela baru — berguna untuk link ke website eksternal agar pengguna tidak meninggalkan website kamu. target='_self' (default) untuk membuka di tab yang sama. Saat menggunakan target='_blank', sebaiknya tambahkan juga rel='noopener noreferrer' untuk alasan keamanan — ini mencegah halaman yang dibuka mengakses halaman asalmu melalui JavaScript."
      },
      {
        type: "quiz",
        question: "Mengapa kita perlu menambahkan rel='noopener noreferrer' saat menggunakan target='_blank'?",
        options: ["Untuk membuat link terlihat lebih menarik", "Untuk alasan keamanan — mencegah halaman baru mengakses halaman asal", "Untuk memastikan link terbuka lebih cepat", "Karena itu adalah aturan wajib HTML5"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat link 'Buka Wikipedia' ke 'https://wikipedia.org' yang terbuka di tab baru dengan atribut keamanan yang tepat",
        answer: "<a href=\"https://wikipedia.org\" target=\"_blank\" rel=\"noopener noreferrer\">Buka Wikipedia</a>"
      },

      {
        type: "lesson",
        title: "Audio dengan <audio>",
        content: "Tag <audio> digunakan untuk menyematkan file audio di halaman web. Atribut penting yang sering digunakan: src untuk sumber file audio, controls untuk menampilkan kontrol pemutar (play, pause, volume), autoplay untuk memutar otomatis saat halaman dimuat, loop untuk mengulang audio, dan muted untuk memulai dalam keadaan bisu. Format audio yang didukung secara luas: MP3, OGG, dan WAV. Sebaiknya gunakan beberapa format dalam tag <source> di dalam <audio> untuk kompatibilitas lintas browser."
      },
      {
        type: "quiz",
        question: "Atribut manakah yang perlu ditambahkan pada tag <audio> agar pengguna bisa mengontrol pemutaran?",
        options: ["play", "controls", "src", "type"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat elemen audio untuk file 'musik.mp3' dengan kontrol pemutar yang tampil",
        answer: "<audio src=\"musik.mp3\" controls></audio>"
      },

      {
        type: "lesson",
        title: "Video dengan <video>",
        content: "Tag <video> memungkinkan kita menyematkan video langsung di halaman web tanpa plugin tambahan. Atributnya mirip dengan <audio>: src, controls, autoplay, loop, muted, poster (gambar thumbnail sebelum video diputar), width, dan height. Format video yang paling umum didukung: MP4 (H.264), WebM, dan OGG. Sama seperti audio, gunakan tag <source> di dalam <video> untuk menyediakan beberapa format. Autoplay tanpa muted biasanya diblokir browser modern karena dianggap mengganggu pengguna."
      },
      {
        type: "quiz",
        question: "Atribut apa yang digunakan untuk menampilkan gambar thumbnail pada video sebelum diputar?",
        options: ["src", "controls", "poster", "thumbnail"],
        answer: 2
      },
      {
        type: "code",
        instruction: "Buat elemen video untuk file 'intro.mp4' dengan thumbnail 'cover.jpg' dan kontrol pemutar",
        answer: "<video src=\"intro.mp4\" poster=\"cover.jpg\" controls></video>"
      },

      {
        type: "lesson",
        title: "Embed Konten Eksternal dengan <iframe>",
        content: "Tag <iframe> (inline frame) digunakan untuk menyematkan halaman web atau konten lain di dalam halaman HTML kamu. Penggunaan paling umum adalah menyematkan video YouTube, peta Google Maps, atau konten dari platform lain. Atribut penting: src (URL yang akan di-embed), width, height, dan title (untuk aksesibilitas). Namun perlu diingat bahwa tidak semua website mengizinkan dirinya di-embed di iframe karena alasan keamanan — website bisa melarangnya menggunakan header X-Frame-Options. Gunakan iframe secara bijak karena bisa mempengaruhi performa halaman."
      },
      {
        type: "quiz",
        question: "Apa batasan yang mungkin kamu temui saat mencoba menyematkan website lain menggunakan <iframe>?",
        options: ["Iframe hanya bisa menampilkan gambar", "Beberapa website melarang dirinya di-embed karena alasan keamanan", "Iframe tidak bisa menampilkan video", "Iframe membutuhkan JavaScript untuk bekerja"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat iframe dengan src 'https://example.com', lebar 600, tinggi 400, dan title 'Konten Eksternal'",
        answer: "<iframe src=\"https://example.com\" width=\"600\" height=\"400\" title=\"Konten Eksternal\"></iframe>"
      },

      {
        type: "lesson",
        title: "Selesai! Kamu Menguasai Media & Links",
        content: "Hebat! Kamu telah mempelajari cara menampilkan gambar dengan <img>, membuat hyperlink dengan <a>, menyematkan audio dengan <audio>, video dengan <video>, dan konten eksternal dengan <iframe>. Kamu juga memahami pentingnya alt text untuk aksesibilitas dan keamanan saat menggunakan target='_blank'. Kemampuan ini sangat fundamental dalam membangun website modern. Di section berikutnya, kita akan mempelajari cara membuat daftar dan tabel untuk mengorganisir data!"
      },
      {
        type: "quiz",
        question: "Manakah pernyataan yang SALAH tentang tag <iframe>?",
        options: ["Iframe bisa digunakan untuk menyematkan Google Maps", "Iframe bisa menyematkan video YouTube", "Semua website pasti bisa di-embed menggunakan iframe", "Iframe memiliki atribut width dan height"],
        answer: 2
      },
      {
        type: "code",
        instruction: "Buat link berisi gambar: gambar 'banner.jpg' dengan alt 'Banner Promo' yang jika diklik mengarah ke 'promo.html'",
        answer: "<a href=\"promo.html\"><img src=\"banner.jpg\" alt=\"Banner Promo\"></a>"
      },
    ]
  },

  // SECTION 4 - LIST & TABLE
  {
    sectionTitle: "List & Table",
    items: [
      {
        type: "lesson",
        title: "Daftar (List) dalam HTML",
        content: "HTML menyediakan tiga jenis list untuk mengorganisir informasi dalam bentuk daftar: Unordered List (<ul>) untuk daftar tanpa urutan tertentu yang ditandai dengan bullet point, Ordered List (<ol>) untuk daftar berurutan yang ditandai dengan angka atau huruf, dan Description List (<dl>) untuk daftar berisi pasangan istilah dan deskripsinya. Penggunaan list yang tepat membantu struktur konten menjadi lebih jelas dan mudah dibaca, serta penting untuk aksesibilitas karena screen reader mengenali list sebagai kelompok item yang berkaitan."
      },
      {
        type: "quiz",
        question: "Berapa jenis list yang disediakan oleh HTML?",
        options: ["1 jenis", "2 jenis", "3 jenis", "4 jenis"],
        answer: 2
      },
      {
        type: "code",
        instruction: "Buat struktur list paling dasar: tag <ul> kosong (tanpa item di dalamnya)",
        answer: "<ul></ul>"
      },

      {
        type: "lesson",
        title: "Unordered List dengan <ul>",
        content: "Tag <ul> (unordered list) membuat daftar dengan bullet point — tanpa penomoran. Digunakan ketika urutan item tidak penting, seperti daftar belanja, daftar fitur produk, atau menu navigasi. Setiap item di dalamnya menggunakan tag <li>. Tampilan bullet point defaultnya bisa diubah menggunakan CSS. Contoh penggunaan: daftar bahan makanan (tidak perlu urutan), daftar fitur aplikasi, atau daftar menu website. <ul> bisa di-nested (bersarang) di dalam <li> untuk membuat sub-list."
      },
      {
        type: "quiz",
        question: "Kapan sebaiknya kita menggunakan <ul> dibandingkan <ol>?",
        options: ["Ketika daftar berisi lebih dari 10 item", "Ketika urutan item tidak penting, seperti daftar belanja atau fitur produk", "Ketika daftar akan ditampilkan dalam dua kolom", "Ketika daftar berisi angka atau data numerik"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat unordered list dengan dua item: 'Apel' dan 'Mangga'",
        answer: "<ul><li>Apel</li><li>Mangga</li></ul>"
      },

      {
        type: "lesson",
        title: "Ordered List dengan <ol>",
        content: "Tag <ol> (ordered list) membuat daftar berurutan — secara default menggunakan angka (1, 2, 3...). Digunakan ketika urutan sangat penting, seperti langkah-langkah instruksi, resep masakan, atau ranking. Atribut type pada <ol> bisa mengubah jenis penomoran: type='1' (default angka), type='A' (huruf kapital), type='a' (huruf kecil), type='I' (romawi besar), type='i' (romawi kecil). Atribut start='5' bisa digunakan untuk memulai penomoran dari angka tertentu. Atribut reversed membalik urutan penomoran."
      },
      {
        type: "quiz",
        question: "Manakah contoh penggunaan <ol> yang paling tepat?",
        options: ["Daftar menu makanan di restoran", "Langkah-langkah cara menginstal software", "Daftar anggota tim tanpa hierarki", "Daftar tag HTML yang tersedia"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat ordered list dengan tiga langkah: 'Buka browser', 'Ketik URL', 'Tekan Enter'",
        answer: "<ol><li>Buka browser</li><li>Ketik URL</li><li>Tekan Enter</li></ol>"
      },

      {
        type: "lesson",
        title: "List Item dengan <li>",
        content: "Tag <li> (list item) digunakan untuk setiap item di dalam <ul> atau <ol>. Tag <li> harus selalu berada di dalam <ul> atau <ol> — tidak boleh berdiri sendiri. Di dalam <li>, kamu bisa memasukkan berbagai konten: teks, link, gambar, bahkan list lain (untuk membuat nested list/sub-list). Untuk nested list, cukup tambahkan <ul> atau <ol> baru di dalam <li>. Browser secara otomatis akan memberi indentasi pada nested list untuk menunjukkan hierarki."
      },
      {
        type: "quiz",
        question: "Bisakah tag <li> langsung digunakan tanpa berada di dalam <ul> atau <ol>?",
        options: ["Bisa, dan akan tampil normal", "Bisa, tapi hanya di browser modern", "Tidak, <li> harus selalu ada di dalam <ul> atau <ol>", "Bisa, jika ditambahkan atribut standalone"],
        answer: 2
      },
      {
        type: "code",
        instruction: "Buat unordered list dengan satu item berisi link: teks 'Beranda' yang mengarah ke 'index.html'",
        answer: "<ul><li><a href=\"index.html\">Beranda</a></li></ul>"
      },

      {
        type: "lesson",
        title: "Tabel dengan <table>",
        content: "Tag <table> digunakan untuk menampilkan data dalam format baris dan kolom. Tabel HTML sangat berguna untuk data tabular seperti jadwal, harga, perbandingan fitur, atau laporan. Penting: tabel HTML seharusnya HANYA digunakan untuk data tabular, bukan untuk tata letak (layout) halaman — untuk layout, gunakan CSS Flexbox atau Grid. Sebuah tabel minimal memiliki <table>, <tr> (baris), dan <td> (sel data). Untuk aksesibilitas yang baik, tambahkan <caption> sebagai judul tabel dan atribut scope pada header."
      },
      {
        type: "quiz",
        question: "Untuk tujuan apa SEBAIKNYA tabel HTML digunakan?",
        options: ["Untuk mengatur layout halaman web secara keseluruhan", "Untuk menampilkan data tabular seperti jadwal dan perbandingan harga", "Untuk membuat navigasi menu", "Untuk menampilkan galeri foto"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat struktur tabel paling dasar: tag <table> yang berisi satu baris (<tr>) dengan satu sel data (<td>) bertuliskan 'Data'",
        answer: "<table><tr><td>Data</td></tr></table>"
      },

      {
        type: "lesson",
        title: "Baris Tabel dengan <tr>",
        content: "Tag <tr> (table row) mendefinisikan satu baris dalam tabel. Semua sel dalam satu baris diletakkan di dalam satu tag <tr>. <tr> harus berada di dalam <table>, atau lebih baik di dalam <thead> (untuk baris header), <tbody> (untuk baris data), atau <tfoot> (untuk baris ringkasan). Penggunaan <thead>, <tbody>, dan <tfoot> adalah best practice — membantu browser mengoptimalkan rendering tabel panjang dan memungkinkan scroll yang lebih baik, serta memperjelas struktur semantik tabel."
      },
      {
        type: "quiz",
        question: "Apa fungsi dari tag <tbody> dalam struktur tabel HTML?",
        options: ["Mendefinisikan satu sel data dalam tabel", "Membungkus baris-baris data utama tabel dan merupakan best practice", "Membuat border pada tabel", "Mengatur lebar kolom tabel"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat tabel dengan <thead> berisi satu baris header dan <tbody> berisi satu baris data. Header: 'Nama'. Data: 'Budi'",
        answer: "<table><thead><tr><th>Nama</th></tr></thead><tbody><tr><td>Budi</td></tr></tbody></table>"
      },

      {
        type: "lesson",
        title: "Sel Data dengan <td>",
        content: "Tag <td> (table data) mendefinisikan satu sel data dalam tabel. Setiap <td> berada di dalam satu <tr>. Di dalam <td>, kamu bisa memasukkan teks, gambar, link, bahkan tabel lain. Dua atribut penting: colspan='2' membuat sel menempati 2 kolom sekaligus (menggabungkan sel secara horizontal), dan rowspan='3' membuat sel menempati 3 baris sekaligus (menggabungkan sel secara vertikal). Fitur colspan dan rowspan sangat berguna untuk membuat tabel dengan struktur yang kompleks seperti jadwal atau laporan keuangan."
      },
      {
        type: "quiz",
        question: "Atribut apa yang digunakan pada <td> untuk menggabungkan dua kolom menjadi satu?",
        options: ["rowspan", "colspan", "merge", "span"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat satu baris tabel (<tr>) dengan sebuah sel (<td>) yang menggabungkan 2 kolom dan bertuliskan 'Judul Gabungan'",
        answer: "<tr><td colspan=\"2\">Judul Gabungan</td></tr>"
      },

      {
        type: "lesson",
        title: "Header Tabel dengan <th>",
        content: "Tag <th> (table header) digunakan untuk sel yang berfungsi sebagai judul kolom atau baris. Secara default, browser menampilkan konten <th> dengan teks tebal (bold) dan rata tengah untuk membedakannya dari sel data biasa (<td>). <th> biasanya diletakkan di dalam <thead>. Atribut scope sangat penting untuk aksesibilitas: scope='col' untuk header kolom dan scope='row' untuk header baris — ini membantu screen reader menghubungkan header dengan sel data yang sesuai. Selalu gunakan <th> untuk header, bukan <td> yang dibuat tebal dengan CSS."
      },
      {
        type: "quiz",
        question: "Mengapa kita harus menggunakan <th> untuk header tabel, bukan <td> yang dibuat tebal dengan CSS?",
        options: ["Karena <th> menampilkan teks yang lebih besar", "Karena <th> memiliki makna semantik yang membantu aksesibilitas dan screen reader", "Karena <th> lebih mudah di-styling dengan CSS", "Karena <th> wajib digunakan menurut aturan HTML5"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat baris header tabel dengan dua kolom: 'Nama' dan 'Usia', menggunakan tag semantik yang tepat untuk header dengan scope kolom",
        answer: "<tr><th scope=\"col\">Nama</th><th scope=\"col\">Usia</th></tr>"
      },

      {
        type: "lesson",
        title: "Border dan Styling Tabel",
        content: "Secara default, tabel HTML ditampilkan tanpa border (garis). Untuk menambahkan border, kamu bisa menggunakan CSS: property 'border' pada selector table, th, dan td. Properti CSS penting untuk tabel: border-collapse: collapse (menggabungkan border yang bersentuhan menjadi satu garis), padding (jarak dalam sel), text-align (perataan teks), background-color (warna latar sel), dan width (lebar kolom). Di HTML5, atribut border langsung di tag <table> sudah deprecated — selalu gunakan CSS untuk styling tabel agar tampilan lebih mudah dikontrol."
      },
      {
        type: "quiz",
        question: "Properti CSS apa yang digunakan untuk menggabungkan border sel-sel tabel menjadi satu garis?",
        options: ["border-style: single", "border-collapse: collapse", "border-merge: true", "table-border: join"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat tag <style> dengan aturan CSS agar elemen 'table' memiliki border-collapse: collapse",
        answer: "<style>table { border-collapse: collapse; }</style>"
      },

      {
        type: "lesson",
        title: "Selesai! Kamu Memahami List & Table",
        content: "Bagus sekali! Kamu telah menguasai cara membuat berbagai jenis list (<ul>, <ol>, dan <li>) serta tabel HTML dengan komponen-komponennya (<table>, <tr>, <td>, <th>). Kamu juga memahami kapan menggunakan masing-masing jenis list, cara menggabungkan sel dengan colspan dan rowspan, serta pentingnya semantik untuk aksesibilitas. Di section terakhir, kita akan mempelajari formulir (forms) yang memungkinkan website menerima input dari pengguna. Let's go!"
      },
      {
        type: "quiz",
        question: "Manakah kombinasi tag yang membentuk struktur tabel HTML yang valid dan semantik?",
        options: ["<table> → <row> → <cell>", "<table> → <tr> → <td>/<th>", "<grid> → <tr> → <td>", "<table> → <col> → <data>"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat tabel lengkap 1 baris data: header 'Produk' dan 'Harga', dengan data 'Kopi' dan 'Rp 15.000'",
        answer: "<table><thead><tr><th>Produk</th><th>Harga</th></tr></thead><tbody><tr><td>Kopi</td><td>Rp 15.000</td></tr></tbody></table>"
      },
    ]
  },

  // SECTION 5 - FORM
  {
    sectionTitle: "Forms & Input",
    items: [
      {
        type: "lesson",
        title: "Formulir dengan <form>",
        content: "Tag <form> digunakan untuk membuat formulir yang memungkinkan pengguna memasukkan dan mengirimkan data. Dua atribut paling penting: action (URL tujuan pengiriman data — ke server mana data akan dikirim) dan method (cara pengiriman data: GET atau POST). Method GET mengirim data melalui URL (cocok untuk pencarian, tidak untuk data sensitif), sedangkan POST mengirim data tersembunyi di dalam body request (cocok untuk login, daftar, atau data sensitif). Semua elemen input harus berada di dalam <form> agar bisa dikirim bersama."
      },
      {
        type: "quiz",
        question: "Apa perbedaan antara method GET dan POST pada form HTML?",
        options: ["GET lebih cepat, POST lebih lambat", "GET mengirim data melalui URL (terlihat), POST mengirim tersembunyi di body request", "GET untuk file, POST untuk teks", "Tidak ada perbedaan, keduanya sama"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat tag pembuka form yang mengirim data ke 'login.php' menggunakan method POST",
        answer: "<form action=\"login.php\" method=\"POST\">"
      },

      {
        type: "lesson",
        title: "Input dengan <input>",
        content: "Tag <input> adalah elemen paling serbaguna dalam form HTML — satu tag ini bisa menjadi banyak jenis field berdasarkan atribut type-nya. <input> adalah self-closing element. Atribut penting: type (menentukan jenis input), name (identifier data saat dikirim ke server), id (untuk dihubungkan dengan label), value (nilai awal/default), placeholder (teks petunjuk saat field kosong), required (mewajibkan pengisian), dan disabled (menonaktifkan field). Atribut name sangat penting — tanpa name, data tidak akan terkirim ke server."
      },
      {
        type: "quiz",
        question: "Mengapa atribut 'name' pada <input> sangat penting?",
        options: ["Untuk menampilkan label di samping input", "Karena tanpa 'name', data input tidak akan terkirim ke server", "Untuk memberikan style khusus pada input", "Untuk membatasi jumlah karakter yang bisa diisi"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat input teks dengan name 'username', placeholder 'Masukkan username', dan wajib diisi",
        answer: "<input type=\"text\" name=\"username\" placeholder=\"Masukkan username\" required>"
      },

      {
        type: "lesson",
        title: "Berbagai Jenis Input (type)",
        content: "Atribut type pada <input> menentukan jenisnya: text (teks bebas), password (teks tersembunyi dengan •), email (validasi format email otomatis), number (hanya angka, bisa set min dan max), tel (nomor telepon), date (date picker kalender), checkbox (kotak centang, bisa pilih banyak), radio (tombol pilihan, hanya bisa pilih satu dalam grup), file (upload file), range (slider), color (color picker), dan hidden (field tersembunyi untuk menyimpan data). Browser modern memberikan validasi dan antarmuka input yang sesuai berdasarkan type-nya."
      },
      {
        type: "quiz",
        question: "Input type apa yang tepat untuk mengumpulkan tanggal lahir pengguna?",
        options: ["type='text'", "type='number'", "type='date'", "type='calendar'"],
        answer: 2
      },
      {
        type: "code",
        instruction: "Buat input untuk mengumpulkan tanggal lahir dengan name 'tanggal_lahir'",
        answer: "<input type=\"date\" name=\"tanggal_lahir\">"
      },

      {
        type: "lesson",
        title: "Area Teks Panjang dengan <textarea>",
        content: "Tag <textarea> digunakan untuk input teks multi-baris — cocok untuk komentar, pesan, atau deskripsi panjang. Berbeda dengan <input type='text'> yang hanya satu baris, <textarea> bisa diisi banyak baris teks. Atribut penting: rows (jumlah baris yang terlihat), cols (lebar dalam karakter), placeholder, name, required, dan maxlength (batas maksimum karakter). <textarea> bukan self-closing element — harus ada tag penutupnya. Teks default bisa diisi di antara tag pembuka dan penutup. Pengguna juga bisa memperbesar <textarea> dengan drag di sudut kanan bawah (bisa dinonaktifkan dengan CSS resize: none)."
      },
      {
        type: "quiz",
        question: "Apa yang membedakan <textarea> dari <input type='text'>?",
        options: ["<textarea> hanya bisa menerima angka", "<textarea> mendukung input teks multi-baris dan bisa diubah ukurannya", "<textarea> tidak bisa menggunakan placeholder", "<textarea> tidak membutuhkan atribut name"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat textarea untuk kolom komentar dengan name 'komentar', 4 baris terlihat, dan placeholder 'Tulis komentar kamu...'",
        answer: "<textarea name=\"komentar\" rows=\"4\" placeholder=\"Tulis komentar kamu...\"></textarea>"
      },

      {
        type: "lesson",
        title: "Tombol dengan <button>",
        content: "Tag <button> digunakan untuk membuat tombol yang bisa diklik. Berbeda dengan <input type='button'>, tag <button> lebih fleksibel karena bisa berisi HTML di dalamnya (gambar, ikon, dll). Atribut type penting: type='submit' (mengirim form — ini adalah default jika berada di dalam form), type='button' (tombol biasa tanpa aksi form default, biasanya dikontrol JavaScript), dan type='reset' (mereset semua field form ke nilai awal). Selalu tentukan atribut type secara eksplisit untuk menghindari perilaku yang tidak terduga, terutama di dalam form."
      },
      {
        type: "quiz",
        question: "Apa yang terjadi jika kita tidak menentukan atribut type pada <button> di dalam sebuah form?",
        options: ["Tombol tidak akan berfungsi", "Tombol akan berfungsi sebagai type='submit' (mengirim form) secara default", "Tombol akan berfungsi sebagai type='button'", "Browser akan menampilkan error"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat tombol submit dengan teks 'Kirim Formulir'",
        answer: "<button type=\"submit\">Kirim Formulir</button>"
      },

      {
        type: "lesson",
        title: "Label dengan <label>",
        content: "Tag <label> menyediakan label teks untuk elemen input dan sangat penting untuk aksesibilitas. Ada dua cara menghubungkan label dengan input: (1) Atribut for pada <label> yang nilainya sama dengan atribut id pada <input>. Contoh: <label for='nama'>Nama:</label> <input id='nama' type='text'>. (2) Membungkus input di dalam label: <label>Nama: <input type='text'></label>. Manfaat label: ketika pengguna mengklik teks label, fokus otomatis pindah ke field input — ini sangat membantu di perangkat mobile dan bagi pengguna screen reader."
      },
      {
        type: "quiz",
        question: "Bagaimana cara menghubungkan <label> dengan <input> menggunakan atribut?",
        options: ["Atribut name pada label harus sama dengan atribut name pada input", "Atribut for pada label harus sama dengan atribut id pada input", "Atribut class pada label harus sama dengan atribut class pada input", "Label otomatis terhubung dengan input terdekat"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat label bertuliskan 'Email:' yang terhubung dengan input email ber-id 'email'",
        answer: "<label for=\"email\">Email:</label><input type=\"email\" id=\"email\" name=\"email\">"
      },

      {
        type: "lesson",
        title: "Dropdown dengan <select> dan <option>",
        content: "Tag <select> membuat dropdown (menu pilihan). Di dalamnya, setiap pilihan didefinisikan dengan tag <option>. Atribut value pada <option> adalah data yang dikirim ke server (bisa berbeda dari teks yang tampil). Atribut selected membuat pilihan tersebut terpilih secara default. Untuk membuat multiple select (bisa pilih lebih dari satu), tambahkan atribut multiple pada <select>. Untuk mengelompokkan pilihan, gunakan <optgroup label='nama-grup'>. Contoh: <select name='kota'><option value='jkt'>Jakarta</option><option value='sby'>Surabaya</option></select>"
      },
      {
        type: "quiz",
        question: "Apa fungsi atribut 'value' pada tag <option> dalam dropdown?",
        options: ["Menentukan teks yang tampil kepada pengguna", "Menentukan data yang dikirim ke server saat pilihan tersebut dipilih", "Menentukan warna opsi tersebut", "Menentukan urutan opsi dalam dropdown"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat dropdown dengan name 'kota' berisi dua pilihan: value 'jkt' teks 'Jakarta' dan value 'sby' teks 'Surabaya'",
        answer: "<select name=\"kota\"><option value=\"jkt\">Jakarta</option><option value=\"sby\">Surabaya</option></select>"
      },

      {
        type: "lesson",
        title: "Pilihan Ganda dengan <option>",
        content: "Tag <option> mendefinisikan setiap pilihan di dalam <select>. Selain dalam <select>, <option> juga bisa digunakan di dalam <datalist> — elemen yang memberikan saran autocomplete pada <input>. Caranya: <input list='buah-list'><datalist id='buah-list'><option value='Apel'><option value='Mangga'></datalist>. Bedanya dari <select>: dengan <datalist>, pengguna masih bisa mengetik nilai bebas selain yang disarankan, sementara <select> membatasi pilihan hanya pada yang tersedia."
      },
      {
        type: "quiz",
        question: "Apa perbedaan antara <datalist> dan <select> dalam penggunaan <option>?",
        options: ["<datalist> hanya bisa menampilkan 5 opsi, <select> bisa lebih banyak", "Dengan <datalist> pengguna bisa mengetik bebas selain saran, <select> membatasi pilihan", "<datalist> untuk mobile, <select> untuk desktop", "Tidak ada perbedaan, keduanya sama"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat input teks dengan datalist saran buah: 'Apel', 'Mangga', 'Jeruk'. Hubungkan input dengan datalist menggunakan atribut list dan id 'buah-list'",
        answer: "<input list=\"buah-list\"><datalist id=\"buah-list\"><option value=\"Apel\"><option value=\"Mangga\"><option value=\"Jeruk\"></datalist>"
      },

      {
        type: "lesson",
        title: "Selamat! Kamu Telah Menyelesaikan Kursus HTML!",
        content: "Luar biasa! Kamu telah berhasil menyelesaikan seluruh materi kursus HTML dasar ini! Kamu kini memahami fondasi penting: struktur dasar HTML, format teks, media dan link, list dan tabel, serta formulir. Ini adalah landasan yang kuat untuk menjadi web developer. Langkah selanjutnya: pelajari CSS untuk membuat tampilan halaman webmu lebih indah dan menarik, lalu JavaScript untuk menambahkan interaktivitas. Terus berlatih dengan membuat project nyata — itu adalah cara terbaik untuk semakin mahir. Selamat dan terus semangat belajar! 🚀"
      },
      {
        type: "quiz",
        question: "Untuk membangun website modern yang lengkap, kombinasi teknologi apa yang dibutuhkan?",
        options: ["Hanya HTML saja sudah cukup", "HTML untuk struktur, CSS untuk tampilan, JavaScript untuk interaktivitas", "HTML untuk tampilan, CSS untuk struktur, Python untuk interaktivitas", "Hanya JavaScript karena bisa melakukan segalanya"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat form lengkap sederhana: input email dengan label 'Email:', dan tombol submit bertuliskan 'Daftar'. Form mengirim ke 'daftar.php' dengan method POST",
        answer: "<form action=\"daftar.php\" method=\"POST\"><label for=\"email\">Email:</label><input type=\"email\" id=\"email\" name=\"email\" required><button type=\"submit\">Daftar</button></form>"
      },
    ]
  }

];