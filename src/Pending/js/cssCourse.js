export const cssCourse = [

  
  // SECTION 1 - PENGENALAN CSS
  {
    sectionTitle: "Pengenalan CSS",
    items: [
      {
        type: "lesson",
        title: "Apa itu CSS?",
        content: "CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk mengatur tampilan dan gaya visual dari halaman web. Jika HTML adalah kerangka bangunan, maka CSS adalah cat, dekorasi, dan desain interiornya. Dengan CSS, kamu bisa mengubah warna teks, ukuran font, tata letak, animasi, dan banyak lagi — semuanya tanpa menyentuh struktur HTML. Kata 'Cascading' merujuk pada cara CSS menerapkan aturan — jika ada beberapa aturan yang berlaku pada elemen yang sama, CSS memiliki urutan prioritas (cascade) untuk menentukan mana yang digunakan."
      },
      {
        type: "quiz",
        question: "Apa kepanjangan dari CSS?",
        options: ["Creative Style System", "Cascading Style Sheets", "Computer Style Syntax", "Colorful Styling Script"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis komentar CSS satu baris yang bertuliskan 'Ini file CSS saya'",
        answer: "/* Ini file CSS saya */"
      },

      {
        type: "lesson",
        title: "Hubungan HTML dan CSS",
        content: "HTML dan CSS bekerja berdampingan: HTML mendefinisikan struktur dan konten, sementara CSS mengatur bagaimana konten tersebut ditampilkan secara visual. Keduanya adalah teknologi yang berbeda dan terpisah — HTML menggunakan tag, sedangkan CSS menggunakan selector dan property. Analogi yang tepat: jika website adalah manusia, HTML adalah tulang dan organ (struktur), CSS adalah pakaian dan penampilan (gaya), dan JavaScript adalah gerakan dan perilaku (interaktivitas). Memisahkan struktur (HTML) dari tampilan (CSS) adalah prinsip desain web modern yang baik."
      },
      {
        type: "quiz",
        question: "Mengapa penting untuk memisahkan HTML dan CSS dalam pengembangan web?",
        options: ["Karena browser hanya bisa membaca satu file sekaligus", "Agar struktur konten dan tampilan visual bisa dikelola secara terpisah dan lebih mudah dirawat", "Karena CSS tidak bisa ditulis di dalam file HTML", "Karena HTML tidak bisa memahami warna dan ukuran"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis tag HTML untuk menghubungkan file CSS eksternal bernama 'style.css'",
        answer: "<link rel=\"stylesheet\" href=\"style.css\">"
      },

      {
        type: "lesson",
        title: "Tiga Cara Menambahkan CSS",
        content: "Ada tiga cara untuk menambahkan CSS ke halaman HTML:\n\n1. Inline CSS — ditulis langsung di dalam tag HTML menggunakan atribut style. Contoh: <p style='color:red'>Teks</p>. Tidak disarankan untuk digunakan secara luas karena sulit dirawat.\n\n2. Internal CSS — ditulis di dalam tag <style> yang berada di dalam <head>. Cocok untuk halaman tunggal.\n\n3. External CSS — ditulis di file .css terpisah dan dihubungkan dengan tag <link>. Ini adalah cara yang paling direkomendasikan karena satu file CSS bisa mengatur tampilan banyak halaman sekaligus."
      },
      {
        type: "quiz",
        question: "Cara penulisan CSS manakah yang paling direkomendasikan untuk proyek web berskala besar?",
        options: ["Inline CSS karena langsung di dalam elemen", "Internal CSS karena berada di dalam file HTML", "External CSS karena satu file bisa mengatur banyak halaman", "Tidak ada perbedaan, ketiganya sama baiknya"],
        answer: 2
      },
      {
        type: "code",
        instruction: "Buat inline CSS pada sebuah paragraf bertuliskan 'Halo' agar warnanya merah",
        answer: "<p style=\"color: red;\">Halo</p>"
      },

      {
        type: "lesson",
        title: "Struktur Penulisan CSS",
        content: "CSS ditulis dengan struktur yang terdiri dari tiga bagian: Selector, Property, dan Value. Selector menentukan elemen HTML mana yang akan diberi gaya. Property adalah aspek tampilan yang ingin diubah. Value adalah nilai yang diberikan pada property tersebut.\n\nStruktur dasarnya:\nselector {\n  property: value;\n}\n\nContoh:\np {\n  color: blue;\n  font-size: 16px;\n}\n\nArtinya: semua elemen <p> akan berwarna biru dengan ukuran font 16 piksel. Tanda titik koma (;) wajib ada di akhir setiap deklarasi, dan seluruh deklarasi dibungkus dalam tanda kurung kurawal ({ })."
      },
      {
        type: "quiz",
        question: "Dalam struktur CSS 'p { color: blue; }', bagian manakah yang disebut 'selector'?",
        options: ["color", "blue", "p", "{ color: blue; }"],
        answer: 2
      },
      {
        type: "code",
        instruction: "Tulis aturan CSS untuk membuat semua elemen <h1> berwarna biru",
        answer: "h1 { color: blue; }"
      },

      {
        type: "lesson",
        title: "Komentar dalam CSS",
        content: "Komentar dalam CSS digunakan untuk memberikan catatan atau penjelasan di dalam kode yang tidak akan diproses oleh browser. Komentar CSS ditulis dengan format: /* isi komentar */. Komentar bisa mencakup satu baris atau beberapa baris sekaligus. Contoh:\n\n/* Ini adalah komentar satu baris */\n\n/*\n  Ini komentar\n  beberapa baris\n*/\n\nKomentar sangat berguna untuk mendokumentasikan kode, menjelaskan fungsi sebuah style, atau sementara menonaktifkan bagian kode tanpa menghapusnya. Kebiasaan menulis komentar adalah tanda programmer yang profesional."
      },
      {
        type: "quiz",
        question: "Bagaimana cara menulis komentar yang benar dalam CSS?",
        options: ["// ini komentar", "<!-- ini komentar -->", "/* ini komentar */", "# ini komentar"],
        answer: 2
      },
      {
        type: "code",
        instruction: "Tulis aturan CSS untuk mengubah ukuran font semua paragraf menjadi 14px, dengan komentar di atasnya bertuliskan 'Styling paragraf'",
        answer: "/* Styling paragraf */\np { font-size: 14px; }"
      },
    ]
  },

  
  // SECTION 2 - SELECTOR
  {
    sectionTitle: "Selector CSS",
    items: [
      {
        type: "lesson",
        title: "Selector Elemen",
        content: "Selector elemen menarget semua elemen HTML dengan nama tag tertentu. Jika kamu menulis 'p { color: red; }', maka SEMUA paragraf di halaman tersebut akan berwarna merah. Ini adalah selector paling sederhana dan paling umum digunakan untuk mengatur gaya dasar yang berlaku di seluruh halaman. Contoh lain: 'h1 { font-size: 32px; }' akan mengubah ukuran semua heading h1, dan 'a { text-decoration: none; }' akan menghilangkan garis bawah dari semua link di halaman."
      },
      {
        type: "quiz",
        question: "Jika kamu menulis CSS 'h2 { color: green; }', elemen mana yang akan berubah warna menjadi hijau?",
        options: ["Hanya h2 pertama di halaman", "Semua elemen h2 di seluruh halaman", "Hanya h2 yang berada di dalam div", "Semua heading dari h1 sampai h6"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis CSS untuk menghilangkan garis bawah dari semua elemen link (<a>)",
        answer: "a { text-decoration: none; }"
      },

      {
        type: "lesson",
        title: "Selector Class",
        content: "Selector class digunakan untuk menarget elemen yang memiliki atribut class tertentu. Class selector diawali dengan tanda titik (.) diikuti nama class-nya. Di HTML, elemen diberi class dengan atribut class='nama-class'. Kelebihan class: satu class bisa diterapkan ke banyak elemen berbeda, dan satu elemen bisa memiliki banyak class sekaligus.\n\nContoh HTML: <p class='penting'>Teks ini penting</p>\nContoh CSS: .penting { color: red; font-weight: bold; }\n\nNamakan class dengan deskriptif sesuai fungsinya, bukan berdasarkan tampilannya. Gunakan .tombol-utama bukan .tombol-merah, karena nama fungsional lebih mudah dirawat jika desain berubah."
      },
      {
        type: "quiz",
        question: "Manakah penulisan selector CSS yang benar untuk menarget elemen dengan class='judul-artikel'?",
        options: ["#judul-artikel { }", ".judul-artikel { }", "judul-artikel { }", "*judul-artikel { }"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis CSS untuk membuat semua elemen dengan class 'kartu' memiliki background-color putih dan padding 16px",
        answer: ".kartu { background-color: white; padding: 16px; }"
      },

      {
        type: "lesson",
        title: "Selector ID",
        content: "Selector ID digunakan untuk menarget satu elemen spesifik yang memiliki atribut id tertentu. ID selector diawali dengan tanda pagar (#). Perbedaan krusial antara class dan ID: ID harus unik — artinya dalam satu halaman, nilai ID yang sama hanya boleh digunakan oleh satu elemen saja. Ini berbeda dengan class yang bisa digunakan oleh banyak elemen.\n\nContoh HTML: <header id='header-utama'>...</header>\nContoh CSS: #header-utama { background-color: navy; }\n\nKarena ID memiliki spesifisitas (specificity) yang lebih tinggi dari class, ia akan mengalahkan aturan class jika ada konflik. Dalam praktik modern, ID lebih sering digunakan untuk JavaScript daripada untuk CSS."
      },
      {
        type: "quiz",
        question: "Apa perbedaan mendasar antara selector class (.) dan selector ID (#) dalam CSS?",
        options: ["Class menggunakan titik, ID menggunakan pagar, tapi keduanya bisa digunakan berkali-kali", "Class bisa dipakai banyak elemen, ID harus unik dan hanya untuk satu elemen per halaman", "ID lebih lambat diproses browser dibanding class", "Class hanya untuk teks, ID hanya untuk gambar"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis CSS untuk membuat elemen dengan id 'navbar' memiliki background-color hitam",
        answer: "#navbar { background-color: black; }"
      },

      {
        type: "lesson",
        title: "Selector Universal dan Kombinasi",
        content: "Selector universal (*) menarget semua elemen di halaman. Sering digunakan untuk reset styling default browser: * { margin: 0; padding: 0; box-sizing: border-box; }\n\nAda juga berbagai cara mengkombinasikan selector:\n\n• Selector turunan: 'div p' menarget semua <p> yang berada di dalam <div>\n• Selector anak langsung: 'div > p' hanya menarget <p> yang langsung berada di dalam <div>\n• Selector berganda: 'h1, h2, h3' menarget h1, h2, dan h3 sekaligus\n• Selector pseudo-class: 'a:hover' menarget link saat kursor berada di atasnya\n\nMemahami kombinasi selector memungkinkan kamu menulis CSS yang lebih tepat sasaran dan efisien."
      },
      {
        type: "quiz",
        question: "Apa yang dilakukan CSS berikut: 'nav > a { color: white; }'?",
        options: ["Menarget semua <a> di seluruh halaman", "Menarget semua <a> yang berada di dalam <nav>, termasuk yang bersarang jauh", "Menarget hanya <a> yang langsung berada di dalam <nav> (anak langsung)", "Menarget <nav> yang berada di dalam <a>"],
        answer: 2
      },
      {
        type: "code",
        instruction: "Tulis CSS reset universal untuk mengatur margin dan padding semua elemen menjadi 0, serta box-sizing menjadi border-box",
        answer: "* { margin: 0; padding: 0; box-sizing: border-box; }"
      },
    ]
  },

  // SECTION 3 - WARNA & TEKS
  
  {
    sectionTitle: "Warna & Styling Teks",
    items: [
      {
        type: "lesson",
        title: "Warna Teks dengan color",
        content: "Property color digunakan untuk mengubah warna teks pada elemen HTML. CSS mendukung berbagai format penulisan warna:\n\n• Nama warna: color: red; — ada 140+ nama warna yang dikenali browser\n• HEX: color: #FF0000; — format heksadesimal, paling umum digunakan desainer\n• RGB: color: rgb(255, 0, 0); — nilai merah, hijau, biru (0-255)\n• RGBA: color: rgba(255, 0, 0, 0.5); — sama seperti RGB + alpha (transparansi 0-1)\n• HSL: color: hsl(0, 100%, 50%); — hue, saturation, lightness\n\nFormat HEX dan RGB adalah yang paling sering digunakan dalam praktik nyata. Nilai warna yang tepat biasanya diambil dari design tool seperti Figma atau Adobe XD."
      },
      {
        type: "quiz",
        question: "Format warna CSS mana yang mendukung pengaturan transparansi (opacity) secara langsung?",
        options: ["HEX (#RRGGBB)", "Nama warna (red, blue)", "RGB (rgb(r,g,b))", "RGBA (rgba(r,g,b,a))"],
        answer: 3
      },
      {
        type: "code",
        instruction: "Tulis CSS untuk membuat semua paragraf berwarna abu-abu menggunakan format HEX #666666",
        answer: "p { color: #666666; }"
      },

      {
        type: "lesson",
        title: "Warna Background dengan background-color",
        content: "Property background-color digunakan untuk mengatur warna latar belakang sebuah elemen. Format nilainya sama dengan property color — bisa menggunakan nama warna, HEX, RGB, RGBA, atau HSL. Contoh: background-color: #f0f0f0; akan memberi latar belakang abu-abu muda.\n\nSelain warna solid, CSS juga menyediakan property background-image untuk gambar latar, background-gradient untuk gradasi warna, background-size untuk ukuran gambar latar, dan background-position untuk posisi gambar latar. Properti shorthand 'background' bisa menggabungkan semuanya dalam satu baris: background: #fff url('bg.jpg') no-repeat center center;"
      },
      {
        type: "quiz",
        question: "Manakah CSS yang benar untuk membuat latar belakang sebuah div berwarna biru semi-transparan?",
        options: ["background-color: blue-transparent;", "background-color: rgba(0, 0, 255, 0.5);", "background: blue 50%;", "color-background: rgb(0,0,255);"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis CSS untuk membuat elemen dengan class 'hero' memiliki background-color kuning menggunakan format RGBA dengan opacity penuh (alpha 1)",
        answer: ".hero { background-color: rgba(255, 255, 0, 1); }"
      },

      {
        type: "lesson",
        title: "Font Family dan Font Size",
        content: "Property font-family menentukan jenis huruf (typeface) yang digunakan. Karena tidak semua font tersedia di semua komputer, sebaiknya sediakan font fallback — daftar alternatif yang dipisahkan koma. Font yang mengandung spasi ditulis dalam tanda kutip.\n\nContoh: font-family: 'Roboto', Arial, sans-serif;\nBrowser akan mencoba Roboto dulu, jika tidak ada pakai Arial, jika tidak ada pakai font sans-serif default.\n\nProperty font-size mengatur ukuran teks. Satuan yang umum digunakan:\n• px (pixel) — ukuran tetap: font-size: 16px\n• em — relatif terhadap ukuran font parent: font-size: 1.5em\n• rem — relatif terhadap ukuran font root (html): font-size: 1rem\n• % — persentase dari ukuran font parent\n\nUkuran font default browser biasanya 16px."
      },
      {
        type: "quiz",
        question: "Apa fungsi font fallback dalam property font-family?",
        options: ["Untuk membuat font menjadi bold secara otomatis", "Sebagai alternatif font yang akan digunakan jika font utama tidak tersedia di perangkat pengguna", "Untuk mengatur ukuran font secara otomatis", "Untuk mendownload font dari internet"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis CSS untuk elemen <body> dengan font-family 'Poppins' (fallback: Arial, sans-serif) dan font-size 16px",
        answer: "body { font-family: 'Poppins', Arial, sans-serif; font-size: 16px; }"
      },

      {
        type: "lesson",
        title: "Font Weight, Style, dan Text Decoration",
        content: "Beberapa property penting untuk styling teks:\n\n• font-weight: mengatur ketebalan teks. Nilai: normal, bold, atau angka (100-900). Contoh: font-weight: 700; (sama dengan bold)\n\n• font-style: mengatur kemiringan teks. Nilai: normal, italic, oblique. Contoh: font-style: italic;\n\n• text-decoration: mengatur dekorasi teks seperti garis bawah, garis tengah, atau garis atas. Nilai: none, underline, line-through, overline. Contoh: text-decoration: none; sering digunakan untuk menghilangkan garis bawah default pada link.\n\n• text-transform: mengubah kapitalisasi teks. Nilai: uppercase (SEMUA KAPITAL), lowercase (semua kecil), capitalize (Huruf Pertama Kapital)."
      },
      {
        type: "quiz",
        question: "CSS apa yang biasanya digunakan untuk menghilangkan garis bawah default pada tag <a> (link)?",
        options: ["font-style: normal;", "text-decoration: none;", "underline: false;", "link-decoration: remove;"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis CSS untuk class 'label' agar teksnya tampil kapital semua, tebal (700), dan berwarna hitam",
        answer: ".label { text-transform: uppercase; font-weight: 700; color: black; }"
      },

      {
        type: "lesson",
        title: "Text Align dan Line Height",
        content: "Property text-align mengatur perataan teks secara horizontal di dalam elemennya. Nilai yang tersedia: left (rata kiri — default), right (rata kanan), center (rata tengah), justify (rata kiri dan kanan seperti di koran/buku).\n\nProperty line-height mengatur jarak antar baris teks. Nilai bisa berupa angka (multiplier), pixel, atau persentase. Contoh: line-height: 1.6; artinya jarak antar baris adalah 1.6x ukuran font. Nilai line-height yang baik untuk keterbacaan teks paragraf biasanya antara 1.4 hingga 1.8.\n\nProperty letter-spacing mengatur jarak antar huruf, dan word-spacing mengatur jarak antar kata. Keduanya menggunakan satuan px atau em."
      },
      {
        type: "quiz",
        question: "Nilai text-align manakah yang membuat teks rata di kedua sisi kiri dan kanan seperti dalam buku atau koran?",
        options: ["center", "balanced", "justify", "both"],
        answer: 2
      },
      {
        type: "code",
        instruction: "Tulis CSS untuk paragraf agar teks rata tengah dan jarak antar baris 1.8",
        answer: "p { text-align: center; line-height: 1.8; }"
      },
    ]
  },

  // SECTION 4 - BOX MODEL 
  {
    sectionTitle: "Box Model & Spacing",
    items: [
      {
        type: "lesson",
        title: "Konsep Box Model",
        content: "Salah satu konsep terpenting dalam CSS adalah Box Model. Setiap elemen HTML diperlakukan sebagai sebuah 'kotak' yang terdiri dari empat lapisan dari dalam ke luar:\n\n1. Content — area tempat konten (teks, gambar) berada\n2. Padding — jarak antara konten dan border (di dalam border)\n3. Border — garis tepi di sekeliling padding dan konten\n4. Margin — jarak antara border dengan elemen lain di sekitarnya (di luar border)\n\nMemahami Box Model adalah kunci untuk mengatur tata letak (layout) dan jarak antar elemen dengan presisi. Kamu bisa melihat Box Model setiap elemen melalui DevTools browser dengan menekan F12."
      },
      {
        type: "quiz",
        question: "Dalam Box Model CSS, urutan lapisan dari dalam ke luar yang benar adalah...?",
        options: ["Margin → Border → Padding → Content", "Content → Padding → Border → Margin", "Border → Content → Padding → Margin", "Padding → Content → Margin → Border"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis CSS reset Box Model universal: semua elemen menggunakan box-sizing border-box, margin 0, dan padding 0",
        answer: "* { box-sizing: border-box; margin: 0; padding: 0; }"
      },

      {
        type: "lesson",
        title: "Padding",
        content: "Padding adalah jarak antara konten elemen dan batas (border) elemen tersebut — berada di DALAM elemen. Padding membuat konten tidak terasa 'sesak' dan meningkatkan keterbacaan.\n\nCara penulisan:\n• padding: 20px; — semua sisi sama\n• padding: 10px 20px; — atas-bawah 10px, kiri-kanan 20px\n• padding: 10px 20px 15px 25px; — atas, kanan, bawah, kiri (searah jarum jam)\n• Atau spesifik: padding-top, padding-right, padding-bottom, padding-left\n\nPenting: padding mempengaruhi ukuran total elemen. Elemen dengan width: 200px dan padding: 20px secara default akan memiliki total lebar 240px. Untuk menghindari ini, gunakan box-sizing: border-box."
      },
      {
        type: "quiz",
        question: "Sebuah div memiliki width: 300px dan padding: 20px. Jika menggunakan box-sizing default (content-box), berapa total lebar elemen tersebut?",
        options: ["300px, padding tidak mempengaruhi lebar", "280px, karena padding mengurangi lebar konten", "340px, karena padding ditambahkan di kiri dan kanan", "320px, karena hanya padding kiri yang dihitung"],
        answer: 2
      },
      {
        type: "code",
        instruction: "Tulis CSS untuk class 'tombol' dengan padding atas-bawah 12px dan kiri-kanan 24px",
        answer: ".tombol { padding: 12px 24px; }"
      },

      {
        type: "lesson",
        title: "Margin",
        content: "Margin adalah jarak antara border elemen dengan elemen lain di sekitarnya — berada di LUAR elemen. Margin digunakan untuk memberi 'napas' antar elemen agar tidak terlalu berdekatan.\n\nCara penulisan sama dengan padding:\n• margin: 20px; — semua sisi sama\n• margin: 0 auto; — trik klasik untuk memusatkan elemen block secara horizontal (atas-bawah 0, kiri-kanan auto)\n• margin: 10px 20px 15px 25px; — atas, kanan, bawah, kiri\n\nPhenomena menarik: Margin Collapsing — ketika dua elemen block vertikal bersentuhan, margin mereka 'digabung' menjadi satu (diambil yang lebih besar), bukan dijumlahkan. Ini sering menjadi sumber kebingungan bagi pemula."
      },
      {
        type: "quiz",
        question: "CSS 'margin: 0 auto;' pada sebuah div sering digunakan untuk apa?",
        options: ["Menghapus semua margin dari elemen", "Memusatkan elemen block secara horizontal di dalam containernya", "Membuat margin atas dan bawah otomatis menyesuaikan konten", "Membuat elemen mengambang ke kanan"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis CSS untuk class 'container' agar lebarnya 1000px dan posisinya berada di tengah halaman secara horizontal",
        answer: ".container { width: 1000px; margin: 0 auto; }"
      },

      {
        type: "lesson",
        title: "Border",
        content: "Property border menambahkan garis di sekeliling elemen. Border memerlukan tiga nilai: ketebalan, gaya, dan warna.\n\nContoh: border: 2px solid black;\n\nGaya border yang tersedia: solid (garis padat), dashed (garis putus-putus), dotted (garis titik-titik), double (garis ganda), none (tidak ada border).\n\nKamu juga bisa mengatur border per sisi:\nborder-top: 3px solid red;\nborder-bottom: 1px dashed gray;\n\nProperty border-radius mengubah sudut elemen menjadi melengkung. border-radius: 8px membuat sudut sedikit melengkung, border-radius: 50% membuat elemen menjadi lingkaran (jika lebar dan tinggi sama)."
      },
      {
        type: "quiz",
        question: "CSS apa yang digunakan untuk membuat sebuah div berbentuk lingkaran sempurna?",
        options: ["border: circle;", "border-shape: round;", "border-radius: 50%;", "border-style: circular;"],
        answer: 2
      },
      {
        type: "code",
        instruction: "Tulis CSS untuk class 'avatar' agar berbentuk lingkaran sempurna dengan ukuran 80x80px dan border solid hitam 2px",
        answer: ".avatar { width: 80px; height: 80px; border-radius: 50%; border: 2px solid black; }"
      },

      {
        type: "lesson",
        title: "Box Sizing",
        content: "Property box-sizing menentukan bagaimana ukuran total elemen dihitung. Ada dua nilai:\n\n• content-box (default) — width dan height hanya mengukur area konten. Padding dan border ditambahkan DI LUAR, sehingga ukuran total elemen menjadi lebih besar dari yang ditentukan.\n\n• border-box — width dan height mengukur sampai batas border. Padding dan border dihitung DI DALAM, sehingga ukuran total elemen tetap sesuai yang ditentukan.\n\nPraktik terbaik modern: tambahkan ini di awal file CSS:\n* { box-sizing: border-box; }\n\nIni membuat semua elemen menggunakan border-box, sehingga kamu tidak perlu menghitung manual efek padding dan border terhadap ukuran elemen."
      },
      {
        type: "quiz",
        question: "Dengan box-sizing: border-box, sebuah div memiliki width: 200px dan padding: 20px. Berapa lebar total elemen tersebut?",
        options: ["240px, karena padding masih ditambahkan", "160px, karena padding dikurangi dari width", "200px, karena padding sudah termasuk di dalam width", "220px, karena hanya satu sisi padding dihitung"],
        answer: 2
      },
      {
        type: "code",
        instruction: "Tulis CSS untuk class 'kotak' dengan lebar 250px, padding 20px, dan box-sizing border-box agar total lebar tetap 250px",
        answer: ".kotak { width: 250px; padding: 20px; box-sizing: border-box; }"
      },
    ]
  },

  // SECTION 5 - LAYOUT
  {
    sectionTitle: "Layout & Positioning",
    items: [
      {
        type: "lesson",
        title: "Display: Block, Inline, dan Inline-Block",
        content: "Property display menentukan bagaimana elemen ditampilkan dalam alur dokumen.\n\n• display: block — elemen mengambil lebar penuh, selalu mulai dari baris baru. Contoh elemen block: <div>, <p>, <h1>-<h6>, <ul>.\n\n• display: inline — elemen hanya mengambil lebar sesuai kontennya, tidak memulai baris baru, dan tidak bisa diatur width/height-nya. Contoh: <span>, <a>, <strong>.\n\n• display: inline-block — gabungan keduanya: tidak memulai baris baru (seperti inline), tetapi bisa diatur width dan height-nya (seperti block).\n\n• display: none — menyembunyikan elemen sepenuhnya, seolah elemen tidak ada (tidak memakan ruang di halaman)."
      },
      {
        type: "quiz",
        question: "Apa yang terjadi jika kamu menggunakan display: none pada sebuah elemen?",
        options: ["Elemen menjadi transparan tapi masih memakan ruang", "Elemen disembunyikan dan tidak memakan ruang di halaman sama sekali", "Elemen pindah ke bawah halaman", "Elemen hanya tidak terlihat tapi tetap memakan ruang"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis CSS untuk class 'chip' agar tampil sebagai inline-block dengan lebar 100px dan tinggi 32px",
        answer: ".chip { display: inline-block; width: 100px; height: 32px; }"
      },

      {
        type: "lesson",
        title: "Position: Static, Relative, Absolute, Fixed",
        content: "Property position mengatur bagaimana elemen diposisikan di halaman.\n\n• static (default) — elemen mengikuti alur normal dokumen. Nilai top/left/bottom/right tidak berpengaruh.\n\n• relative — elemen tetap di alur normal, tapi bisa digeser dari posisi aslinya menggunakan top, left, bottom, right. Elemen lain tidak terpengaruh.\n\n• absolute — elemen keluar dari alur normal dan diposisikan relatif terhadap ancestor-nya yang memiliki position bukan static. Elemen lain tidak menyisakan ruang untuknya.\n\n• fixed — elemen keluar dari alur normal dan diposisikan relatif terhadap viewport (layar). Tetap di posisi yang sama meski halaman di-scroll — cocok untuk header atau tombol 'back to top'.\n\n• sticky — gabungan relative dan fixed. Ikut scroll hingga titik tertentu, lalu 'menempel'."
      },
      {
        type: "quiz",
        question: "Property position manakah yang tepat untuk membuat navigation bar yang tetap terlihat di bagian atas layar meski halaman di-scroll?",
        options: ["position: static", "position: relative", "position: absolute", "position: fixed"],
        answer: 3
      },
      {
        type: "code",
        instruction: "Tulis CSS untuk id 'navbar' agar menempel di bagian atas layar saat halaman di-scroll, dengan lebar penuh (100%) dan z-index 100",
        answer: "#navbar { position: fixed; top: 0; width: 100%; z-index: 100; }"
      },

      {
        type: "lesson",
        title: "Flexbox: Dasar Layout Modern",
        content: "Flexbox (Flexible Box Layout) adalah sistem layout CSS yang memudahkan pengaturan tata letak elemen secara satu dimensi (baris atau kolom). Untuk mengaktifkan Flexbox, tambahkan display: flex pada elemen parent (disebut flex container).\n\nProperty penting pada flex container:\n• flex-direction: row (default, horizontal) atau column (vertikal)\n• justify-content: mengatur distribusi item secara horizontal — center, space-between, space-around, flex-start, flex-end\n• align-items: mengatur perataan item secara vertikal — center, flex-start, flex-end, stretch\n• gap: jarak antar item\n\nFlexbox menggantikan teknik lama yang rumit seperti float dan inline-block untuk layout. Ini adalah skill wajib setiap web developer modern."
      },
      {
        type: "quiz",
        question: "Untuk memusatkan sebuah elemen secara horizontal DAN vertikal menggunakan Flexbox, kombinasi CSS apa yang dibutuhkan pada parent element?",
        options: ["text-align: center; vertical-align: middle;", "display: flex; justify-content: center; align-items: center;", "display: flex; align: center center;", "position: center; flex: true;"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis CSS untuk class 'nav-bar' agar menggunakan Flexbox dengan item tersebar merata (space-between) dan rata tengah secara vertikal",
        answer: ".nav-bar { display: flex; justify-content: space-between; align-items: center; }"
      },

      {
        type: "lesson",
        title: "Width, Height, dan Overflow",
        content: "Property width dan height mengatur ukuran elemen. Nilainya bisa berupa:\n• Nilai tetap: width: 300px;\n• Persentase (relatif terhadap parent): width: 50%;\n• min-width / max-width: membatasi lebar minimum dan maksimum — sangat berguna untuk responsive design\n• auto: browser menghitung otomatis\n\nProperty overflow menentukan apa yang terjadi jika konten melebihi ukuran elemen:\n• visible (default) — konten yang melebihi tetap terlihat\n• hidden — konten yang melebihi disembunyikan\n• scroll — selalu tampilkan scrollbar\n• auto — tampilkan scrollbar hanya jika diperlukan\n\nContoh praktis: overflow: hidden pada container gambar agar gambar tidak keluar dari batas container."
      },
      {
        type: "quiz",
        question: "Property CSS apa yang digunakan agar sebuah elemen tidak pernah lebih lebar dari 600px, apapun ukuran layarnya?",
        options: ["width: 600px;", "max-width: 600px;", "fixed-width: 600px;", "limit-width: 600px;"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis CSS untuk class 'konten' dengan max-width 800px, lebar 100%, dan overflow hidden",
        answer: ".konten { max-width: 800px; width: 100%; overflow: hidden; }"
      },

      {
        type: "lesson",
        title: "Selamat Menyelesaikan Kursus CSS!",
        content: "Luar biasa! Kamu telah menyelesaikan seluruh materi kursus CSS dasar ini! Kamu sekarang memahami:\n\n✓ Apa itu CSS dan cara menghubungkannya ke HTML\n✓ Berbagai jenis selector (elemen, class, ID)\n✓ Cara mengatur warna, font, dan teks\n✓ Box Model (content, padding, border, margin)\n✓ Sistem layout modern dengan Flexbox\n✓ Property positioning\n\nCSS adalah ilmu yang sangat luas — masih banyak yang bisa dipelajari seperti CSS Grid, animasi, transisi, media query untuk responsive design, dan CSS custom properties (variables). Dengan fondasi yang sudah kamu miliki, kamu siap untuk mempelajari JavaScript dan membuat website yang interaktif. Terus semangat! 🎨🚀"
      },
      {
        type: "quiz",
        question: "Manakah urutan pembelajaran yang paling tepat setelah menguasai CSS dasar?",
        options: ["Langsung belajar database MySQL", "Belajar JavaScript untuk menambahkan interaktivitas ke website", "Belajar Python untuk membuat tampilan web", "Belajar CSS Grid sebelum bisa menggunakan Flexbox"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis CSS lengkap untuk class 'kartu-profil': lebar 320px, padding 24px, border-radius 12px, background putih, dan tampilkan konten dengan Flexbox kolom rata tengah",
        answer: ".kartu-profil { width: 320px; padding: 24px; border-radius: 12px; background-color: white; display: flex; flex-direction: column; align-items: center; }"
      },
    ]
  }

];