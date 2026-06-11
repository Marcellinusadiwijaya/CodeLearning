export const jsBasicCourse = [

  // SECTION 1 - INTRO
  {
    sectionTitle: "Getting Started with JavaScript",
    items: [
      {
        type: "lesson",
        title: "Apa itu JavaScript?",
        content: "JavaScript adalah bahasa pemrograman yang digunakan untuk membuat website menjadi interaktif.\n\nHTML untuk struktur.\nCSS untuk tampilan.\nJavaScript untuk aksi seperti klik tombol, popup, dan animasi."
      },
      {
        type: "quiz",
        question: "JavaScript digunakan untuk?",
        options: [
          "Struktur website",
          "Tampilan website",
          "Membuat website interaktif",
          "Menyimpan database"
        ],
        answer: 2
      },
      {
        type: "code",
        instruction: "Tulis tag HTML untuk menyisipkan file JavaScript eksternal bernama 'script.js' di bagian bawah body",
        answer: "<script src=\"script.js\"></script>"
      },
    ]
  },

  // SECTION 2 - BASIC SYNTAX
  {
    sectionTitle: "Basic Syntax",
    items: [
      {
        type: "lesson",
        title: "console.log",
        content: "console.log digunakan untuk menampilkan teks ke console.\n\nContoh:\nconsole.log(\"Hello\")"
      },
      {
        type: "quiz",
        question: "Fungsi console.log adalah?",
        options: [
          "Menghapus data",
          "Menampilkan teks",
          "Membuat tombol",
          "Menampilkan gambar"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tampilkan teks 'Belajar JavaScript' ke console",
        answer: "console.log(\"Belajar JavaScript\");"
      },

      {
        type: "lesson",
        title: "Variable",
        content: "Variable digunakan untuk menyimpan data.\n\nContoh:\nlet nama = \"Budi\""
      },
      {
        type: "quiz",
        question: "Variable digunakan untuk?",
        options: [
          "Menghapus program",
          "Menyimpan data",
          "Menutup website",
          "Menggambar"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat variabel bernama 'nama' yang menyimpan teks 'Andi', lalu cetak ke console",
        answer: "let nama = \"Andi\";\nconsole.log(nama);"
      },

      {
        type: "lesson",
        title: "let",
        content: "let digunakan untuk membuat variable yang nilainya bisa diubah.\n\nContoh:\nlet umur = 15"
      },
      {
        type: "quiz",
        question: "Keyword untuk membuat variable?",
        options: [
          "log",
          "let",
          "print",
          "show"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat variabel 'umur' dengan nilai 15, lalu ubah nilainya menjadi 16",
        answer: "let umur = 15;\numur = 16;"
      },

      {
        type: "lesson",
        title: "Operator",
        content: "Operator digunakan untuk perhitungan.\n\nContoh:\n+\n-\n*\n/\n\nContoh:\n5 + 5 = 10"
      },
      {
        type: "quiz",
        question: "Operator untuk tambah adalah?",
        options: [
          "+",
          "-",
          "*",
          "/"
        ],
        answer: 0
      },
      {
        type: "code",
        instruction: "Buat variabel 'hasil' yang menyimpan hasil perkalian 8 dan 7, lalu cetak ke console",
        answer: "let hasil = 8 * 7;\nconsole.log(hasil);"
      },
    ]
  },

  // SECTION 3 - LOGIC
  {
    sectionTitle: "Logic",
    items: [
      {
        type: "lesson",
        title: "If Statement",
        content: "if digunakan untuk kondisi.\n\nContoh:\nif (umur > 10) {\n // aksi\n}"
      },
      {
        type: "quiz",
        question: "if digunakan untuk?",
        options: [
          "Loop",
          "Kondisi",
          "Variable",
          "Function"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis if statement yang mengecek apakah variabel 'umur' lebih dari atau sama dengan 17, jika iya cetak 'Boleh membuat SIM'",
        answer: "if (umur >= 17) {\n  console.log(\"Boleh membuat SIM\");\n}"
      },

      {
        type: "lesson",
        title: "Function",
        content: "Function adalah kumpulan perintah.\n\nContoh:\nfunction halo() {\n}\n\nFunction membuat kode lebih rapi."
      },
      {
        type: "quiz",
        question: "Function adalah?",
        options: [
          "Variable",
          "Kumpulan perintah",
          "Operator",
          "Text"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat function bernama 'perkenalan' yang mencetak 'Nama saya Budi' ke console, lalu panggil function tersebut",
        answer: "function perkenalan() {\n  console.log(\"Nama saya Budi\");\n}\nperkenalan();"
      },
    ]
  },

  // SECTION 4 - INTERACTION
  {
    sectionTitle: "Interaction",
    items: [
      {
        type: "lesson",
        title: "Event",
        content: "Event adalah aksi dari user seperti klik tombol.\n\nJavaScript dapat merespon event tersebut."
      },
      {
        type: "quiz",
        question: "Contoh event?",
        options: [
          "Klik",
          "Variable",
          "Number",
          "Text"
        ],
        answer: 0
      },
      {
        type: "code",
        instruction: "Tulis kode untuk menjalankan function 'halo' ketika elemen dengan id 'btn' diklik",
        answer: "document.getElementById(\"btn\").addEventListener(\"click\", halo);"
      },

      {
        type: "lesson",
        title: "Alert",
        content: "alert digunakan untuk menampilkan popup.\n\nContoh:\nalert(\"Hello\")"
      },
      {
        type: "quiz",
        question: "alert digunakan untuk?",
        options: [
          "Popup",
          "Loop",
          "Variable",
          "Math"
        ],
        answer: 0
      },
      {
        type: "code",
        instruction: "Tampilkan popup dengan pesan 'Selamat datang di website kami!'",
        answer: "alert(\"Selamat datang di website kami!\");"
      },
    ]
  },

  // SECTION 5 - FINAL
  {
    sectionTitle: "Final",
    items: [
      {
        type: "lesson",
        title: "Selamat!",
        content: "Kamu sudah belajar JavaScript dasar! Sekarang kamu siap lanjut ke level berikutnya yaitu JavaScript Advanced 🚀"
      },
      {
        type: "quiz",
        question: "Manakah kode JavaScript yang benar untuk mencetak 'Halo' ke console?",
        options: [
          "print(\"Halo\")",
          "console.log(\"Halo\")",
          "log(\"Halo\")",
          "show(\"Halo\")"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis program JavaScript lengkap: buat variabel 'nama' berisi 'Budi', lalu tampilkan alert dengan teks 'Halo, ' + nama",
        answer: "let nama = \"Budi\";\nalert(\"Halo, \" + nama);"
      },
    ]
  }

];