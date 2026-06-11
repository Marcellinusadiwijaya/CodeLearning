export const reactCourse = [

  // SECTION 1 - BASIC
  {
    sectionTitle: "Getting Started with React",
    items: [
      {
        type: "lesson",
        title: "Apa itu React?",
        content: `React adalah library JavaScript yang digunakan untuk membuat User Interface (UI).

React memungkinkan developer membuat tampilan website yang interaktif dan dinamis.

Contoh penggunaan:
• Dashboard
• Website interaktif
• Web App modern`
      },
      {
        type: "quiz",
        question: "React digunakan untuk?",
        options: [
          "Database",
          "User Interface",
          "Server",
          "Game Engine",
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis perintah terminal untuk membuat project React baru bernama 'my-app' menggunakan Vite",
        answer: "npm create vite@latest my-app -- --template react"
      },

      {
        type: "lesson",
        title: "Kenapa React?",
        content: `React sangat populer karena:

• Component-based (mudah dibagi)
• Reusable (bisa dipakai ulang)
• Cepat (Virtual DOM)
• Banyak dipakai perusahaan besar

React membantu membuat aplikasi lebih terstruktur.`
      },
      {
        type: "quiz",
        question: "Apa keunggulan React?",
        options: [
          "Hanya untuk design",
          "Bisa membuat UI modular dan reusable",
          "Tidak bisa digunakan ulang",
          "Hanya untuk backend",
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis perintah terminal untuk menginstall dependencies dan menjalankan project React",
        answer: "npm install\nnpm run dev"
      },
    ]
  },

  // SECTION 2 - COMPONENT
  {
    sectionTitle: "Component",
    items: [
      {
        type: "lesson",
        title: "Apa itu Component?",
        content: `Component adalah bagian kecil dari UI.

React membagi tampilan menjadi bagian-bagian kecil agar mudah dikelola.

Contoh:
• Navbar
• Button
• Card`
      },
      {
        type: "quiz",
        question: "Component adalah?",
        options: [
          "Database",
          "Bagian UI",
          "Server",
          "File gambar",
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat functional component React bernama 'Navbar' yang menampilkan teks 'Ini Navbar' di dalam tag <nav>",
        answer: "function Navbar() {\n  return (\n    <nav>Ini Navbar</nav>\n  );\n}\n\nexport default Navbar;"
      },

      {
        type: "lesson",
        title: "Reusable Component",
        content: `Component bisa digunakan berulang kali.

Contoh:
Button bisa dipakai di banyak tempat tanpa menulis ulang kode.

Ini membuat coding lebih efisien.`
      },
      {
        type: "quiz",
        question: "Apa keuntungan reusable component?",
        options: [
          "Harus ditulis ulang",
          "Tidak bisa digunakan lagi",
          "Bisa digunakan berulang kali",
          "Hanya untuk satu halaman",
        ],
        answer: 2
      },
      {
        type: "code",
        instruction: "Buat component 'Button' yang menerima props 'label' dan menampilkan label tersebut di dalam tag <button>",
        answer: "function Button({ label }) {\n  return (\n    <button>{label}</button>\n  );\n}\n\nexport default Button;"
      },
    ]
  },

  // SECTION 3 - JSX
  {
    sectionTitle: "JSX",
    items: [
      {
        type: "lesson",
        title: "Apa itu JSX?",
        content: `JSX adalah gabungan JavaScript dan HTML.

Dengan JSX, kita bisa menulis tampilan seperti HTML di dalam JavaScript.

Contoh:

<h1>Hello</h1>`
      },
      {
        type: "quiz",
        question: "JSX adalah gabungan?",
        options: [
          "HTML & JavaScript",
          "CSS & HTML",
          "Python & Java",
          "Database & Server",
        ],
        answer: 0
      },
      {
        type: "code",
        instruction: "Buat component 'Profil' yang menampilkan JSX berisi <h1> dengan teks 'Nama Saya' dan <p> dengan teks 'Saya belajar React'",
        answer: "function Profil() {\n  return (\n    <div>\n      <h1>Nama Saya</h1>\n      <p>Saya belajar React</p>\n    </div>\n  );\n}\n\nexport default Profil;"
      },

      {
        type: "lesson",
        title: "Kenapa JSX digunakan?",
        content: `JSX membuat kode lebih mudah dibaca.

Developer bisa langsung melihat tampilan UI di dalam JavaScript.

Ini membuat development lebih cepat dan jelas.`
      },
      {
        type: "quiz",
        question: "Apa manfaat JSX?",
        options: [
          "Membuat kode sulit dibaca",
          "Mempermudah penulisan UI",
          "Hanya untuk backend",
          "Menggantikan database",
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis JSX yang menampilkan variabel 'nama' berisi 'Budi' di dalam tag <h2> menggunakan curly braces",
        answer: "const nama = \"Budi\";\n\nfunction App() {\n  return (\n    <h2>{nama}</h2>\n  );\n}"
      },
    ]
  },

  // SECTION 4 - STATE
  {
    sectionTitle: "State & useState",
    items: [
      {
        type: "lesson",
        title: "Apa itu State?",
        content: `State adalah data yang bisa berubah di dalam component.

State digunakan untuk menyimpan data seperti:
• Counter
• Input user
• Status tombol`
      },
      {
        type: "quiz",
        question: "State digunakan untuk?",
        options: [
          "Database",
          "Menyimpan data di component",
          "Styling",
          "Routing",
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis import useState dari React, lalu buat state bernama 'nama' dengan nilai awal string kosong",
        answer: "import { useState } from \"react\";\n\nconst [nama, setNama] = useState(\"\");"
      },

      {
        type: "lesson",
        title: "useState",
        content: `useState adalah hook untuk membuat state di React.

Contoh:

const [count, setCount] = useState(0);

count = data
setCount = update data`
      },
      {
        type: "quiz",
        question: "useState digunakan untuk?",
        options: [
          "Routing",
          "State data",
          "Database",
          "API",
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat component 'Counter' dengan useState, tampilkan nilai count, dan tombol '+' yang menambah count sebesar 1 setiap diklik",
        answer: "import { useState } from \"react\";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>{count}</p>\n      <button onClick={() => setCount(count + 1)}>+</button>\n    </div>\n  );\n}\n\nexport default Counter;"
      },
    ]
  },

  // SECTION 5 - FINISH
  {
    sectionTitle: "Final",
    items: [
      {
        type: "lesson",
        title: "Selamat!",
        content: `Kamu sudah memahami dasar React!

Sekarang kamu tahu:
• Apa itu React
• Component
• JSX
• State

Langkah selanjutnya:
Belajar membuat project React sederhana 🚀`
      },
      {
        type: "quiz",
        question: "Apa fungsi utama React?",
        options: [
          "Mengelola database",
          "Membuat UI interaktif",
          "Mengedit gambar",
          "Membuat game 3D",
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat component 'App' lengkap: import useState, buat state 'pesan' dengan nilai awal 'Halo!', tampilkan pesan di <p>, dan tombol yang mengubah pesan menjadi 'Selamat Belajar React!'",
        answer: "import { useState } from \"react\";\n\nfunction App() {\n  const [pesan, setPesan] = useState(\"Halo!\");\n\n  return (\n    <div>\n      <p>{pesan}</p>\n      <button onClick={() => setPesan(\"Selamat Belajar React!\")}>Klik</button>\n    </div>\n  );\n}\n\nexport default App;"
      },
    ]
  }

];