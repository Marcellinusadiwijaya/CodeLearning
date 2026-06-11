export const phpCourse = [

  // SECTION 1 - INTRO
  {
    sectionTitle: "Getting Started with PHP",
    items: [
      {
        type: "lesson",
        title: "Apa itu PHP?",
        content: "PHP adalah bahasa pemrograman untuk membuat website dinamis dan berjalan di server.\n\nDigunakan untuk login system, database, form, dan backend website."
      },
      {
        type: "quiz",
        question: "PHP berjalan di?",
        options: [
          "Browser",
          "Server",
          "Monitor",
          "Keyboard"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis struktur dasar file PHP: tag pembuka dan penutup PHP dengan perintah echo 'Halo PHP!' di dalamnya",
        answer: "<?php\necho \"Halo PHP!\";\n?>"
      },
    ]
  },

  // SECTION 2 - BASIC SYNTAX
  {
    sectionTitle: "Basic Syntax",
    items: [
      {
        type: "lesson",
        title: "Tag PHP",
        content: "Kode PHP ditulis menggunakan tag khusus.\n\nContoh:\n<?php\necho \"Hello\";\n?>"
      },
      {
        type: "quiz",
        question: "Tag pembuka PHP adalah?",
        options: [
          "<php>",
          "<?php",
          "<script>",
          "<code>"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis tag pembuka dan penutup PHP yang benar (tanpa isi di dalamnya)",
        answer: "<?php\n?>"
      },

      {
        type: "lesson",
        title: "Menampilkan Output",
        content: "PHP menggunakan echo untuk menampilkan teks.\n\nContoh:\necho \"Hello World\";"
      },
      {
        type: "quiz",
        question: "Perintah menampilkan teks di PHP?",
        options: [
          "printText",
          "show",
          "echo",
          "write"
        ],
        answer: 2
      },
      {
        type: "code",
        instruction: "Tulis kode PHP untuk menampilkan teks 'Selamat Datang!'",
        answer: "<?php\necho \"Selamat Datang!\";\n?>"
      },
    ]
  },

  // SECTION 3 - DATA
  {
    sectionTitle: "Variable & Data Type",
    items: [
      {
        type: "lesson",
        title: "Variable",
        content: "Variable di PHP diawali dengan tanda $.\n\nContoh:\n$nama = \"Budi\";"
      },
      {
        type: "quiz",
        question: "Variable PHP diawali dengan?",
        options: [
          "#",
          "$",
          "@",
          "&"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat variabel PHP bernama 'nama' berisi 'Andi', lalu tampilkan nilainya menggunakan echo",
        answer: "<?php\n$nama = \"Andi\";\necho $nama;\n?>"
      },

      {
        type: "lesson",
        title: "Tipe Data",
        content: "Beberapa tipe data PHP:\n\n• String → teks\n• Integer → angka\n• Boolean → true/false\n• Array → banyak data"
      },
      {
        type: "quiz",
        question: "Tipe data untuk teks?",
        options: [
          "Text",
          "String",
          "Char",
          "Word"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat tiga variabel PHP: $nama berisi 'Budi' (String), $umur berisi 17 (Integer), dan $lulus berisi true (Boolean)",
        answer: "<?php\n$nama = \"Budi\";\n$umur = 17;\n$lulus = true;\n?>"
      },
    ]
  },

  // SECTION 4 - LOGIC
  {
    sectionTitle: "Logic & Loop",
    items: [
      {
        type: "lesson",
        title: "If Statement",
        content: "If digunakan untuk kondisi.\n\nContoh:\nif($umur > 18){\n echo \"Dewasa\";\n}"
      },
      {
        type: "quiz",
        question: "if digunakan untuk?",
        options: [
          "Perulangan",
          "Kondisi",
          "Database",
          "Variable"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis if-else PHP yang mengecek variabel $nilai: jika lebih dari 70 tampilkan 'Lulus', jika tidak tampilkan 'Tidak Lulus'",
        answer: "<?php\nif ($nilai > 70) {\n  echo \"Lulus\";\n} else {\n  echo \"Tidak Lulus\";\n}\n?>"
      },

      {
        type: "lesson",
        title: "Loop",
        content: "Loop digunakan untuk pengulangan.\n\nContoh:\nfor($i=0; $i<5; $i++){\n echo $i;\n}"
      },
      {
        type: "quiz",
        question: "Perulangan di PHP?",
        options: [
          "repeat",
          "loop",
          "for",
          "check"
        ],
        answer: 2
      },
      {
        type: "code",
        instruction: "Tulis for loop PHP yang menampilkan angka 1 sampai 5 menggunakan echo",
        answer: "<?php\nfor ($i = 1; $i <= 5; $i++) {\n  echo $i;\n}\n?>"
      },
    ]
  },

  // SECTION 5 - BACKEND
  {
    sectionTitle: "Backend & Database",
    items: [
      {
        type: "lesson",
        title: "Form & POST",
        content: "PHP sering digunakan untuk mengambil data dari form.\n\nContoh:\n$_POST[\"nama\"];"
      },
      {
        type: "quiz",
        question: "Mengambil data form menggunakan?",
        options: [
          "$FORM",
          "$POST",
          "$_POST",
          "$DATA"
        ],
        answer: 2
      },
      {
        type: "code",
        instruction: "Tulis kode PHP untuk mengambil data 'email' dari form POST dan menyimpannya ke variabel $email",
        answer: "<?php\n$email = $_POST[\"email\"];\n?>"
      },

      {
        type: "lesson",
        title: "Database MySQL",
        content: "PHP sering terhubung dengan MySQL untuk menyimpan data seperti login, register, dan data user."
      },
      {
        type: "quiz",
        question: "PHP biasanya terhubung dengan?",
        options: [
          "Photoshop",
          "MySQL",
          "Excel",
          "Video Editor"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis kode PHP untuk membuat koneksi ke database MySQL dengan host 'localhost', user 'root', password '', dan database 'toko'",
        answer: "<?php\n$conn = mysqli_connect(\"localhost\", \"root\", \"\", \"toko\");\n?>"
      },
    ]
  },

  // SECTION 6 - FINAL
  {
    sectionTitle: "Final",
    items: [
      {
        type: "lesson",
        title: "Selamat!",
        content: "Kamu sudah belajar dasar PHP dan backend development. Sekarang kamu siap membuat website dinamis dengan database 🚀"
      },
      {
        type: "quiz",
        question: "Manakah kode PHP yang benar untuk menampilkan nilai variabel $nama?",
        options: [
          "print($nama)",
          "echo $nama;",
          "show $nama;",
          "display($nama);"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis program PHP lengkap: ambil data 'nama' dari form POST, simpan ke variabel $nama, lalu tampilkan 'Halo, ' diikuti nilai $nama",
        answer: "<?php\n$nama = $_POST[\"nama\"];\necho \"Halo, \" . $nama;\n?>"
      },
    ]
  }

];