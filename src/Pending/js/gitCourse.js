export const gitCourse = [

  // SECTION 1 - INTRO
  {
    sectionTitle: "Getting Started with Git",
    items: [
      {
        type: "lesson",
        title: "Apa itu Git?",
        content: "Git adalah Version Control System (VCS) yang digunakan untuk melacak perubahan pada kode. Dengan Git, developer bisa melihat riwayat perubahan, kembali ke versi sebelumnya, dan bekerja secara kolaboratif tanpa takut kehilangan data."
      },
      {
        type: "quiz",
        question: "Apa fungsi utama Git?",
        options: [
          "Mendesain UI",
          "Version Control",
          "Membuat game",
          "Database"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis perintah untuk mengecek versi Git yang terinstall di komputermu",
        answer: "git --version"
      },

      {
        type: "lesson",
        title: "Kenapa Git Penting?",
        content: "Git sangat penting karena memungkinkan developer bekerja dalam tim tanpa konflik. Setiap perubahan tercatat dengan rapi, sehingga jika terjadi error, kita bisa kembali ke versi sebelumnya dengan mudah."
      },
      {
        type: "quiz",
        question: "Apa keuntungan menggunakan Git?",
        options: [
          "Menghapus semua file",
          "Melacak perubahan kode",
          "Mempercepat internet",
          "Membuat desain UI"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis perintah untuk melihat status perubahan file di repository Git saat ini",
        answer: "git status"
      },
    ]
  },

  // SECTION 2 - GITHUB
  {
    sectionTitle: "GitHub & Repository",
    items: [
      {
        type: "lesson",
        title: "Apa itu GitHub?",
        content: "GitHub adalah platform berbasis cloud untuk menyimpan repository Git secara online. Dengan GitHub, kamu bisa menyimpan project, berkolaborasi dengan orang lain, dan mengakses kode dari mana saja."
      },
      {
        type: "quiz",
        question: "GitHub digunakan untuk?",
        options: [
          "Hosting kode",
          "Edit foto",
          "Game",
          "Video"
        ],
        answer: 0
      },
      {
        type: "code",
        instruction: "Tulis perintah untuk mengkloning repository dari GitHub dengan URL 'https://github.com/user/project.git'",
        answer: "git clone https://github.com/user/project.git"
      },

      {
        type: "lesson",
        title: "Repository",
        content: "Repository (repo) adalah tempat menyimpan project Git. Repo berisi semua file project dan riwayat perubahannya."
      },
      {
        type: "quiz",
        question: "Apa itu repository?",
        options: [
          "Tempat menyimpan kode",
          "Aplikasi desain",
          "Game engine",
          "Database server"
        ],
        answer: 0
      },
      {
        type: "code",
        instruction: "Tulis perintah untuk membuat repository Git baru di dalam folder project kamu",
        answer: "git init"
      },
    ]
  },

  // SECTION 3 - BASIC COMMAND
  {
    sectionTitle: "Basic Git Commands",
    items: [
      {
        type: "lesson",
        title: "Git Init",
        content: "Perintah git init digunakan untuk membuat repository Git baru di dalam project kamu."
      },
      {
        type: "quiz",
        question: "Perintah untuk membuat repo baru adalah?",
        options: [
          "git start",
          "git init",
          "git create",
          "git new"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis perintah untuk menginisialisasi Git di folder project bernama 'my-app' (asumsikan kamu sudah berada di dalam folder tersebut)",
        answer: "git init"
      },

      {
        type: "lesson",
        title: "Git Add",
        content: "git add digunakan untuk memasukkan perubahan file ke staging area sebelum disimpan (commit)."
      },
      {
        type: "quiz",
        question: "Apa fungsi git add?",
        options: [
          "Menghapus file",
          "Menambahkan ke staging area",
          "Upload ke GitHub",
          "Menjalankan program"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis perintah untuk menambahkan semua file yang berubah ke staging area sekaligus",
        answer: "git add ."
      },

      {
        type: "lesson",
        title: "Git Commit",
        content: "Commit adalah proses menyimpan perubahan project ke dalam repository Git dengan pesan tertentu."
      },
      {
        type: "quiz",
        question: "Commit berarti?",
        options: [
          "Menghapus",
          "Menyimpan perubahan",
          "Download",
          "Logout"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis perintah commit dengan pesan 'first commit'",
        answer: "git commit -m \"first commit\""
      },
    ]
  },

  // SECTION 4 - CLOSING
  {
    sectionTitle: "Final",
    items: [
      {
        type: "lesson",
        title: "Selamat!",
        content: "Sekarang kamu memahami dasar Git & GitHub! Kamu sudah siap untuk mulai mengelola project dan berkolaborasi dengan tim menggunakan Git."
      },
      {
        type: "quiz",
        question: "Apa yang sudah kamu pelajari?",
        options: [
          "Desain UI",
          "Dasar Git & GitHub",
          "Editing video",
          "Game development"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis 3 perintah Git secara berurutan: tambahkan semua file ke staging, commit dengan pesan 'selesai', lalu push ke remote branch 'main'",
        answer: "git add .\ngit commit -m \"selesai\"\ngit push origin main"
      },
    ]
  }

];