export const mySqlCourse = [

  // SECTION 1 - INTRO
  {
    sectionTitle: "Getting Started with MySQL",
    items: [
      {
        type: "lesson",
        title: "Apa itu MySQL?",
        content: "MySQL adalah database yang digunakan untuk menyimpan data pada website atau aplikasi.\n\nContohnya: data user, produk, transaksi."
      },
      {
        type: "quiz",
        question: "MySQL adalah?",
        options: [
          "Framework",
          "Database",
          "Bahasa Design",
          "Game"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis perintah untuk membuat database baru bernama 'toko_online'",
        answer: "CREATE DATABASE toko_online;"
      },
    ]
  },

  // SECTION 2 - DATABASE STRUCTURE
  {
    sectionTitle: "Database Structure",
    items: [
      {
        type: "lesson",
        title: "Table",
        content: "Data dalam MySQL disimpan dalam bentuk table.\n\nContoh table:\nUser\nProduk\nPesanan"
      },
      {
        type: "quiz",
        question: "Data MySQL disimpan dalam?",
        options: [
          "Folder",
          "Table",
          "Image",
          "Video"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis perintah untuk membuat table 'produk' dengan kolom id (INT) dan nama (VARCHAR 100)",
        answer: "CREATE TABLE produk (\n  id INT,\n  nama VARCHAR(100)\n);"
      },
    ]
  },

  // SECTION 3 - QUERY
  {
    sectionTitle: "Basic Query",
    items: [
      {
        type: "lesson",
        title: "SELECT",
        content: "SELECT digunakan untuk mengambil data dari database.\n\nContoh:\nSELECT * FROM user;"
      },
      {
        type: "quiz",
        question: "SELECT digunakan untuk?",
        options: [
          "Menghapus",
          "Mengambil data",
          "Menutup",
          "Login"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis query untuk mengambil semua data dari table 'produk'",
        answer: "SELECT * FROM produk;"
      },
    ]
  },

  // SECTION 4 - FINAL
  {
    sectionTitle: "Final",
    items: [
      {
        type: "lesson",
        title: "Selamat!",
        content: "Kamu sudah memahami dasar MySQL dan database. Selanjutnya kamu bisa belajar query lanjutan seperti INSERT, UPDATE, dan DELETE 🚀"
      },
      {
        type: "quiz",
        question: "Manakah query MySQL yang benar untuk mengambil semua data dari table 'user'?",
        options: [
          "GET * FROM user;",
          "SELECT * FROM user;",
          "FETCH ALL user;",
          "READ * user;"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis query untuk mengambil hanya kolom 'nama' dan 'harga' dari table 'produk'",
        answer: "SELECT nama, harga FROM produk;"
      },
    ]
  }

];