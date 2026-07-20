export const javaCourse = [

  // SECTION 1 - INTRO
  {
    sectionTitle: "Getting Started with Java",
    items: [
      {
        type: "lesson",
        title: "Apa itu Java?",
        content: "Java adalah bahasa pemrograman populer yang digunakan untuk berbagai kebutuhan seperti aplikasi Android, backend website, dan software perusahaan. Java bersifat cross-platform karena menggunakan JVM (Java Virtual Machine)."
      },
      {
        type: "quiz",
        question: "Java sering digunakan untuk?",
        options: [
          "Membuat gambar",
          "Aplikasi Android",
          "Edit video",
          "Desain logo"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis komentar satu baris di Java yang bertuliskan 'Program Java pertama saya'",
        answer: "// Program Java pertama saya"
      },

      {
        type: "lesson",
        title: "Struktur Program Java",
        content: "Program Java memiliki struktur utama dengan method main sebagai titik awal eksekusi.\n\nContoh:\n\npublic class Main {\n   public static void main(String[] args){\n   }\n}"
      },
      {
        type: "quiz",
        question: "Program Java dimulai dari?",
        options: [
          "start()",
          "main()",
          "run()",
          "init()"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis struktur dasar program Java dengan class bernama 'Main' yang berisi method main kosong",
        answer: "public class Main {\n   public static void main(String[] args) {\n   }\n}"
      },
    ]
  },

  // SECTION 2 - BASIC SYNTAX
  {
    sectionTitle: "Basic Syntax",
    items: [
      {
        type: "lesson",
        title: "Menampilkan Output",
        content: "Java menggunakan System.out.println() untuk menampilkan teks ke layar.\n\nContoh:\nSystem.out.println(\"Hello\");"
      },
      {
        type: "quiz",
        question: "Perintah menampilkan teks di Java?",
        options: [
          "print()",
          "echo()",
          "System.out.println()",
          "show()"
        ],
        answer: 2
      },
      {
        type: "code",
        instruction: "Tulis perintah untuk menampilkan teks 'Halo Dunia' ke layar",
        answer: "System.out.println(\"Halo Dunia\");"
      },

      {
        type: "lesson",
        title: "Variable",
        content: "Variable digunakan untuk menyimpan data.\n\nContoh:\nint umur = 15;\nString nama = \"Budi\";\n\nJava menggunakan tipe data yang harus ditentukan."
      },
      {
        type: "quiz",
        question: "Keyword angka bulat di Java?",
        options: [
          "number",
          "int",
          "num",
          "float"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat variabel bertipe int bernama 'umur' dengan nilai 17",
        answer: "int umur = 17;"
      },

      {
        type: "lesson",
        title: "Tipe Data",
        content: "Beberapa tipe data di Java:\n\n• int → angka\n• double → desimal\n• String → teks\n• boolean → true/false"
      },
      {
        type: "quiz",
        question: "Tipe data teks di Java?",
        options: [
          "text",
          "char",
          "String",
          "str"
        ],
        answer: 2
      },
      {
        type: "code",
        instruction: "Buat variabel String bernama 'nama' dengan nilai 'Budi', dan variabel double bernama 'nilaiUjian' dengan nilai 95.5",
        answer: "String nama = \"Budi\";\ndouble nilaiUjian = 95.5;"
      },
    ]
  },

  // SECTION 3 - LOGIC
  {
    sectionTitle: "Logic & Control Flow",
    items: [
      {
        type: "lesson",
        title: "If Statement",
        content: "If digunakan untuk membuat kondisi.\n\nContoh:\nif(umur > 10){\n   System.out.println(\"Besar\");\n}"
      },
      {
        type: "quiz",
        question: "if digunakan untuk?",
        options: [
          "Perulangan",
          "Kondisi",
          "Variable",
          "Class"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis if statement yang mengecek apakah variabel 'nilai' lebih besar dari 75, jika iya tampilkan 'Lulus'",
        answer: "if (nilai > 75) {\n   System.out.println(\"Lulus\");\n}"
      },

      {
        type: "lesson",
        title: "Loop",
        content: "Loop digunakan untuk pengulangan.\n\nContoh:\nfor(int i=0; i<5; i++){\n   System.out.println(i);\n}"
      },
      {
        type: "quiz",
        question: "Perulangan di Java?",
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
        instruction: "Tulis for loop yang mencetak angka 1 sampai 5 ke layar",
        answer: "for (int i = 1; i <= 5; i++) {\n   System.out.println(i);\n}"
      },
    ]
  },

  // SECTION 4 - STRUCTURE
  {
    sectionTitle: "Structure Programming",
    items: [
      {
        type: "lesson",
        title: "Method",
        content: "Method adalah kumpulan perintah yang bisa dipanggil kembali.\n\nContoh:\nstatic void halo(){\n   System.out.println(\"Hello\");\n}"
      },
      {
        type: "quiz",
        question: "Method berfungsi untuk?",
        options: [
          "Menyimpan gambar",
          "Kumpulan perintah",
          "Menghapus data",
          "Variabel"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat method bernama 'sapa' yang menampilkan teks 'Selamat Datang!'",
        answer: "static void sapa() {\n   System.out.println(\"Selamat Datang!\");\n}"
      },

      {
        type: "lesson",
        title: "Class",
        content: "Class adalah blueprint dari object. Semua program Java harus berada di dalam class."
      },
      {
        type: "quiz",
        question: "Program Java harus berada dalam?",
        options: [
          "Loop",
          "Class",
          "Variable",
          "Function"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Buat class bernama 'Kalkulator' yang berisi method main kosong di dalamnya",
        answer: "public class Kalkulator {\n   public static void main(String[] args) {\n   }\n}"
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
        content: "Kamu sudah mempelajari dasar-dasar Java mulai dari syntax, variable, hingga logic dan struktur program. Terus latihan untuk menjadi programmer yang handal!"
      },
      {
        type: "quiz",
        question: "Manakah program Java yang lengkap dan benar?",
        options: [
          "void main() { print(\"Hi\"); }",
          "public class Main { public static void main(String[] args) { System.out.println(\"Hi\"); } }",
          "class { main(); }",
          "System.out.println(\"Hi\");"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis program Java lengkap dalam class 'Main' yang mendeklarasikan variabel String 'nama' berisi 'Budi', lalu mencetaknya ke layar",
        answer: "public class Main {\n   public static void main(String[] args) {\n      String nama = \"Budi\";\n      System.out.println(nama);\n   }\n}"
      },
    ]
  }

];