export const nodeJsCourse = [

  // SECTION 1 - INTRO
  {
    sectionTitle: "Getting Started with Node.js",
    items: [
      {
        type: "lesson",
        title: "Apa itu Node.js?",
        content: "Node.js memungkinkan JavaScript berjalan di server, bukan hanya di browser. Node.js sering digunakan untuk membuat backend website."
      },
      {
        type: "quiz",
        question: "Node.js berjalan di?",
        options: [
          "Browser",
          "Server",
          "Photoshop",
          "Game"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis perintah terminal untuk mengecek versi Node.js yang terinstall",
        answer: "node --version"
      },
    ]
  },

  // SECTION 2 - BACKEND
  {
    sectionTitle: "Backend Basics",
    items: [
      {
        type: "lesson",
        title: "Apa itu Backend?",
        content: "Backend adalah bagian server yang mengatur logika aplikasi seperti database, login, dan API."
      },
      {
        type: "quiz",
        question: "Backend mengatur?",
        options: [
          "UI",
          "Server Logic",
          "Gambar",
          "Font"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis kode Node.js untuk mencetak teks 'Server siap!' ke console",
        answer: "console.log(\"Server siap!\");"
      },
    ]
  },

  // SECTION 3 - FRAMEWORK
  {
    sectionTitle: "Express.js",
    items: [
      {
        type: "lesson",
        title: "Express.js",
        content: "Express.js adalah framework Node.js yang memudahkan pembuatan server dan API dengan lebih cepat dan sederhana."
      },
      {
        type: "quiz",
        question: "Express digunakan untuk?",
        options: [
          "Server",
          "Design",
          "Video",
          "Animation"
        ],
        answer: 0
      },
      {
        type: "code",
        instruction: "Tulis perintah terminal untuk menginstall Express.js menggunakan npm",
        answer: "npm install express"
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
        content: "Kamu sudah belajar dasar Node.js dan backend development. Selanjutnya kamu bisa belajar membuat API dan menghubungkannya dengan database 🚀"
      },
      {
        type: "quiz",
        question: "Manakah kode yang benar untuk membuat server Express.js sederhana yang berjalan di port 3000?",
        options: [
          "server.start(3000)",
          "app.listen(3000)",
          "node.run(3000)",
          "express.open(3000)"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis kode Express.js lengkap: import express, buat app, buat route GET '/' yang merespons 'Halo Dunia', lalu jalankan server di port 3000",
        answer: "const express = require(\"express\");\nconst app = express();\n\napp.get(\"/\", (req, res) => {\n  res.send(\"Halo Dunia\");\n});\n\napp.listen(3000);"
      },
    ]
  }

];