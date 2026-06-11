export const jsAdvancedCourse = [

  // SECTION 1 - FUNCTION
  {
    sectionTitle: "Function & Parameter",
    items: [
      {
        type: "lesson",
        title: "Function di JavaScript",
        content: "Function adalah blok kode yang dapat digunakan kembali. Bayangkan function seperti mesin: kita memberi input dan menghasilkan output. Function membantu kode lebih rapi dan reusable."
      },
      {
        type: "quiz",
        question: "Apa kegunaan Function?",
        options: [
          "Menyimpan gambar",
          "Mengulang kode secara otomatis",
          "Mengelompokkan kode agar bisa digunakan kembali",
          "Menghapus data"
        ],
        answer: 2
      },
      {
        type: "code",
        instruction: "Buat function bernama 'sapa' yang mencetak 'Halo!' ke console",
        answer: "function sapa() {\n  console.log(\"Halo!\");\n}"
      },

      {
        type: "lesson",
        title: "Parameter Function",
        content: "Parameter adalah nilai yang dikirim ke dalam function.\n\nContoh:\nfunction sayHello(name){\n  console.log(\"Hello \" + name);\n}"
      },
      {
        type: "quiz",
        question: "Parameter digunakan untuk?",
        options: [
          "Menghapus function",
          "Memberi nilai ke dalam function",
          "Menutup program",
          "Membuat variabel global"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat function bernama 'sapa' dengan parameter 'nama' yang mencetak 'Halo ' + nama ke console",
        answer: "function sapa(nama) {\n  console.log(\"Halo \" + nama);\n}"
      },

      {
        type: "lesson",
        title: "Return Value",
        content: "Return digunakan untuk mengembalikan nilai dari function.\n\nContoh:\nfunction tambah(a,b){\n return a + b;\n}"
      },
      {
        type: "quiz",
        question: "Keyword untuk mengembalikan nilai adalah?",
        options: [
          "send",
          "return",
          "back",
          "result"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat function bernama 'kali' dengan parameter 'a' dan 'b' yang mengembalikan hasil perkalian keduanya",
        answer: "function kali(a, b) {\n  return a * b;\n}"
      },
    ]
  },

  // SECTION 2 - DATA STRUCTURE
  {
    sectionTitle: "Array & Object",
    items: [
      {
        type: "lesson",
        title: "Array",
        content: "Array digunakan untuk menyimpan banyak data dalam satu variabel.\n\nContoh:\nlet buah = [\"Apel\",\"Mangga\",\"Jeruk\"];"
      },
      {
        type: "quiz",
        question: "Array digunakan untuk?",
        options: [
          "Satu data saja",
          "Banyak data dalam satu variabel",
          "Menghapus variabel",
          "Menjalankan loop"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat array bernama 'warna' yang berisi tiga warna: 'merah', 'hijau', 'biru'",
        answer: "let warna = [\"merah\", \"hijau\", \"biru\"];"
      },

      {
        type: "lesson",
        title: "Object",
        content: "Object menyimpan data dalam bentuk key dan value.\n\nContoh:\nlet siswa = {\n nama: \"Budi\",\n umur: 15\n}"
      },
      {
        type: "quiz",
        question: "Object menyimpan data dalam bentuk?",
        options: [
          "Index saja",
          "Key dan Value",
          "Angka saja",
          "Text saja"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat object bernama 'produk' dengan key 'nama' berisi 'Laptop' dan key 'harga' berisi 8000000",
        answer: "let produk = {\n  nama: \"Laptop\",\n  harga: 8000000\n};"
      },
    ]
  },

  // SECTION 3 - LOGIC
  {
    sectionTitle: "Loop & Conditional",
    items: [
      {
        type: "lesson",
        title: "Loop",
        content: "Loop digunakan untuk mengulang perintah.\n\nContoh:\nfor(let i=0;i<5;i++){\n console.log(i);\n}"
      },
      {
        type: "quiz",
        question: "Loop digunakan untuk?",
        options: [
          "Mengulang kode",
          "Menghapus data",
          "Menggambar",
          "Menutup aplikasi"
        ],
        answer: 0
      },
      {
        type: "code",
        instruction: "Tulis for loop yang mencetak angka 1 sampai 5 ke console",
        answer: "for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}"
      },

      {
        type: "lesson",
        title: "If Else",
        content: "If Else digunakan untuk pengambilan keputusan.\n\nContoh:\nif(nilai > 75){\n console.log(\"Lulus\");\n}"
      },
      {
        type: "quiz",
        question: "If digunakan untuk?",
        options: [
          "Perulangan",
          "Percabangan keputusan",
          "Menyimpan data",
          "Membuat array"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis if-else yang mengecek variabel 'stok': jika lebih dari 0 cetak 'Tersedia', jika tidak cetak 'Habis'",
        answer: "if (stok > 0) {\n  console.log(\"Tersedia\");\n} else {\n  console.log(\"Habis\");\n}"
      },
    ]
  },

  // SECTION 4 - DOM & EVENT
  {
    sectionTitle: "DOM & Event",
    items: [
      {
        type: "lesson",
        title: "Event",
        content: "Event terjadi ketika user melakukan aksi seperti klik tombol, mengetik, atau menggerakkan mouse. JavaScript bisa merespon event ini."
      },
      {
        type: "quiz",
        question: "Klik tombol termasuk?",
        options: [
          "Variable",
          "Event",
          "Loop",
          "Array"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis kode untuk menambahkan event listener 'click' pada elemen dengan id 'tombol' yang mencetak 'Diklik!' ke console",
        answer: "document.getElementById(\"tombol\").addEventListener(\"click\", function() {\n  console.log(\"Diklik!\");\n});"
      },

      {
        type: "lesson",
        title: "DOM Manipulation",
        content: "DOM memungkinkan JavaScript mengubah isi HTML.\n\nContoh:\ndocument.getElementById(\"title\");"
      },
      {
        type: "quiz",
        question: "DOM digunakan untuk?",
        options: [
          "Mengubah HTML menggunakan JavaScript",
          "Menghapus browser",
          "Menjalankan database",
          "Membuat server"
        ],
        answer: 0
      },
      {
        type: "code",
        instruction: "Tulis kode untuk mengubah teks dalam elemen dengan id 'judul' menjadi 'Selamat Datang'",
        answer: "document.getElementById(\"judul\").innerText = \"Selamat Datang\";"
      },
    ]
  },

  // SECTION 5 - ASYNC
  {
    sectionTitle: "Async JavaScript",
    items: [
      {
        type: "lesson",
        title: "Async & Await",
        content: "Async digunakan agar program tidak menunggu proses lama seperti mengambil data dari internet.\n\nKeyword yang digunakan: async dan await."
      },
      {
        type: "quiz",
        question: "Async digunakan agar?",
        options: [
          "Program berhenti",
          "Program menunggu selamanya",
          "Program tetap berjalan saat proses berlangsung",
          "Menghapus function"
        ],
        answer: 2
      },
      {
        type: "code",
        instruction: "Buat async function bernama 'ambilData' yang menggunakan await untuk fetch dari URL 'https://api.example.com/data' dan menyimpan hasilnya ke variabel 'data'",
        answer: "async function ambilData() {\n  const data = await fetch(\"https://api.example.com/data\");\n}"
      },
    ]
  }

];