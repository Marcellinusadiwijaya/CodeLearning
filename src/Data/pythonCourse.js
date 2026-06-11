export const pythonCourse = [

  // =============================================
  // SECTION 1 — LEARNING
  // =============================================
  {
    sectionTitle: "Python Fundamentals",
    items: [

      // --- LESSON 1 --- (Easy)
      {
        type: "lesson",
        difficulty: "Easy",
        title: "Apa itu Python?",
        content: `Python adalah bahasa pemrograman tingkat tinggi yang mudah dipelajari dan powerful.

Python digunakan untuk:
  • Web Development (Django, Flask)
  • Data Science & Machine Learning
  • Artificial Intelligence
  • Automation & Scripting

Contoh program Python pertama:

  print("Hello, World!")

Python terkenal karena syntaxnya yang bersih dan mudah dibaca.`
      },
      {
        type: "quiz",
        difficulty: "Easy",
        title: "Jenis Bahasa Python",
        question: "Python termasuk jenis bahasa pemrograman?",
        options: ["Low level", "High level", "Machine language", "Assembly"],
        answer: 1
      },

      

      // --- LESSON 2 --- (Easy)
      {
        type: "lesson",
        difficulty: "Easy",
        title: "Variabel & Tipe Data",
        content: `Variabel digunakan untuk menyimpan data. Python tidak perlu deklarasi tipe data secara eksplisit.

Tipe data dasar Python:
  • int    → bilangan bulat       → x = 10
  • float  → bilangan desimal     → y = 3.14
  • str    → teks / string        → nama = "Budi"
  • bool   → nilai benar/salah    → lulus = True

Contoh:

  usia = 17
  tinggi = 165.5
  nama = "Sari"
  lulus = True

  print(type(usia))    # <class 'int'>
  print(type(nama))    # <class 'str'>`
      },
      {
        type: "quiz",
        difficulty: "Easy",
        title: "Penulisan Variabel Python",
        question: "Manakah penulisan variabel yang benar di Python?",
        options: ["int x = 10", "x := 10", "x = 10", "var x = 10"],
        answer: 2
      },

      // [FIX #1] Test case redundan → karena output fixed tanpa input, cukup 1 test case
      {
        type: "code",
        difficulty: "Easy",
        title: "Deklarasi Variabel Python",
        instruction: "Buat empat variabel: 'usia' = 17, 'tinggi' = 165.5, 'nama' = 'Sari', 'lulus' = True, lalu print keempatnya",
        task: "Deklarasikan keempat variabel dengan tipe data yang sesuai, lalu cetak masing-masing.",
        constraints: [
          "Buat 4 variabel: usia, tinggi, nama, lulus",
          "Print keempat variabel setelah deklarasi",
          "Urutan print: usia, tinggi, nama, lulus"
        ],
        sampleInput: null,
        sampleInputLines: [],
        sampleOutput: "17\n165.5\nSari\nTrue",
        testCases: [
          {
            label: "Output keempat variabel secara berurutan",
            inputs: [],
            expected: "17\n165.5\nSari\nTrue"
          }
        ]
      },


      // --- LESSON 3 --- (Medium)
      {
        type: "lesson",
        difficulty: "Medium",
        title: "Input & Output",
        content: `Python menggunakan print() untuk output dan input() untuk menerima data dari user.

Output:
  print("Hello!")
  print(f"Nama saya {nama}")   ← f-string

Input:
  nama = input("Masukkan nama: ")
  umur = int(input("Umur: "))  ← konversi ke int

Contoh lengkap:

  nama = input("Nama kamu: ")
  print(f"Halo, {nama}! Selamat datang.")`
      },
      {
        type: "quiz",
        difficulty: "Medium",
        title: "Fungsi Input Python",
        question: "Fungsi Python untuk menerima input dari user adalah?",
        options: ["scan()", "input()", "get()", "read()"],
        answer: 1
      },
      
      {
        type: "code",
        difficulty: "Easy",
        title: "Operasi Aritmatika Python",
        instruction: "Buat program yang menerima dua angka dari input, lalu cetak hasil penjumlahannya dan pengurangannya masing-masing di baris berbeda",
        task: "Gunakan input() untuk membaca dua bilangan bulat, konversi dengan int(), lalu tampilkan hasil a + b dan a - b.",
        constraints: [
          "Gunakan input() untuk menerima dua angka",
          "Konversi ke int dengan int()",
          "Cetak a + b terlebih dahulu, lalu a - b",
          "Masing-masing hasil di baris berbeda"
        ],
        sampleInput: "10\n4",
        sampleInputLines: ["10", "4"],
        sampleOutput: "14\n6",
        testCases: [
          {
            label: "10 dan 4 → 14 dan 6",
            inputs: ["10", "4"],
            expected: "14\n6"
          },
          {
            label: "20 dan 8 → 28 dan 12",
            inputs: ["20", "8"],
            expected: "28\n12"
          },
          {
            label: "5 dan 5 → 10 dan 0",
            inputs: ["5", "5"],
            expected: "10\n0"
          },
          {
            label: "3 dan 7 → 10 dan -4",
            inputs: ["3", "7"],
            expected: "10\n-4"
          },
          {
            label: "100 dan 1 → 101 dan 99",
            inputs: ["100", "1"],
            expected: "101\n99"
          }
        ]
      },

      {
        type: "code",
        difficulty: "Medium",
        title: "f-string Python",
        instruction: "Buat variabel 'nama' berisi nama dari input(), lalu tampilkan 'Halo, {nama}' menggunakan f-string",
        task: "Gunakan f-string untuk menyisipkan variabel ke dalam print().",
        constraints: [
          "Gunakan f-string (bukan + concatenation)",
          "Output harus: Halo, {nama}"
        ],
        sampleInput: "Budi",
        sampleInputLines: ["Budi"],
        sampleOutput: "Halo, Budi",
        testCases: [
          {
            label: "nama = Budi → Halo, Budi",
            inputs: ["Budi"],
            expected: "Halo, Budi"
          },
          {
            label: "nama = Sari → Halo, Sari",
            inputs: ["Sari"],
            expected: "Halo, Sari"
          },
          {
            label: "nama = Andi → Halo, Andi",
            inputs: ["Andi"],
            expected: "Halo, Andi"
          },
          {
            label: "nama = Dewi → Halo, Dewi",
            inputs: ["Dewi"],
            expected: "Halo, Dewi"
          },
          {
            label: "nama = Riko → Halo, Riko",
            inputs: ["Riko"],
            expected: "Halo, Riko"
          }
        ]
      },

      // --- LESSON 4 --- (Medium)
      {
        type: "lesson",
        difficulty: "Medium",
        title: "Kondisi (If - Elif - Else)",
        content: `Kondisi digunakan untuk membuat keputusan dalam program.

Struktur:
  if kondisi:
      # jalankan jika benar
  elif kondisi_lain:
      # jalankan jika kondisi pertama salah
  else:
      # jalankan jika semua salah

Contoh:

  nilai = 85

  if nilai >= 80:
      print("A")
  elif nilai >= 60:
      print("B")
  else:
      print("C")

Operator perbandingan: ==  !=  >  <  >=  <=`
      },
      {
        type: "quiz",
        difficulty: "Medium",
        title: "Kondisi Alternatif di Python",
        question: "Keyword untuk kondisi alternatif kedua di Python adalah?",
        options: ["else if", "elsif", "elif", "elseif"],
        answer: 2
      },

      {
        type: "code",
        difficulty: "Medium",
        title: "Kondisi If-Elif-Else",
        instruction: "Buat program yang menerima input nilai, lalu cetak 'A' jika >= 80, 'B' jika >= 60, selain itu 'C'",
        task: "Gunakan input() untuk membaca nilai, int() untuk konversi, lalu if-elif-else.",
        constraints: [
          "Gunakan input() untuk menerima nilai",
          "Konversi ke int dengan int()",
          "Gunakan elif bukan else if",
          "Output: A / B / C sesuai nilai"
        ],
        sampleInput: "75",
        sampleInputLines: ["75"],
        sampleOutput: "B",
        testCases: [
          {
            label: "nilai = 90 → A",
            inputs: ["90"],
            expected: "A"
          },
          {
            label: "nilai = 75 → B",
            inputs: ["75"],
            expected: "B"
          },
          {
            label: "nilai = 50 → C",
            inputs: ["50"],
            expected: "C"
          },
          {
            label: "nilai = 80 → A (batas bawah A)",
            inputs: ["80"],
            expected: "A"
          },
          {
            label: "nilai = 60 → B (batas bawah B)",
            inputs: ["60"],
            expected: "B"
          }
        ]
      },

      // --- LESSON 5 --- (Medium)
      {
        type: "lesson",
        difficulty: "Medium",
        title: "Loop (Perulangan)",
        content: `Loop digunakan untuk mengulang eksekusi kode.

FOR loop — untuk iterasi sejumlah tertentu:
  for i in range(5):
      print(i)         # 0 1 2 3 4

  for i in range(1, 6):
      print(i)         # 1 2 3 4 5

WHILE loop — selama kondisi benar:
  x = 0
  while x < 5:
      print(x)
      x += 1

Loop pada list:
  buah = ["apel", "mangga", "jeruk"]
  for b in buah:
      print(b)`
      },
      {
        type: "quiz",
        difficulty: "Medium",
        title: "Fungsi Range di Python",
        question: "Untuk mencetak angka 1 sampai 5, fungsi range yang benar adalah?",
        options: ["range(5)", "range(1, 5)", "range(1, 6)", "range(0, 5)"],
        answer: 2
      },

      // [FIX #2] Soal for loop terlalu trivial → ganti ke total penjumlahan 1..n dari input
      {
        type: "code",
        difficulty: "Medium",
        title: "For Loop — Total Penjumlahan",
        instruction: "Baca integer n dari input, lalu hitung dan cetak total penjumlahan 1 + 2 + ... + n menggunakan for loop",
        task: "Gunakan input() untuk membaca n, konversi ke int(), lalu gunakan for loop dan akumulator untuk menjumlahkan 1 sampai n.",
        constraints: [
          "Gunakan input() untuk menerima n",
          "Konversi ke int dengan int()",
          "Gunakan for loop dengan range()",
          "Gunakan variabel akumulator untuk menyimpan total",
          "Cetak hasil total dengan print()"
        ],
        sampleInput: "5",
        sampleInputLines: ["5"],
        sampleOutput: "15",
        testCases: [
          {
            label: "n = 5 → 15 (1+2+3+4+5)",
            inputs: ["5"],
            expected: "15"
          },
          {
            label: "n = 10 → 55",
            inputs: ["10"],
            expected: "55"
          },
          {
            label: "n = 1 → 1",
            inputs: ["1"],
            expected: "1"
          },
          {
            label: "n = 100 → 5050",
            inputs: ["100"],
            expected: "5050"
          },
          {
            label: "n = 3 → 6 (1+2+3)",
            inputs: ["3"],
            expected: "6"
          }
        ]
      },

      // --- LESSON 6 --- (Hard)
      {
        type: "lesson",
        difficulty: "Hard",
        title: "Function",
        content: `Function adalah blok kode yang dapat dipanggil berulang kali.

Definisi function:
  def nama_function(parameter):
      # isi function
      return hasil

Contoh:

  def sapa(nama):
      return f"Halo, {nama}!"

  print(sapa("Budi"))    # Halo, Budi!

Function tanpa return:
  def cetak_garis():
      print("-" * 20)

  cetak_garis()    # --------------------`
      },

      // [FIX #4] Quiz function terlalu hafalan → ganti ke pertanyaan konseptual tentang return value
      {
        type: "quiz",
        difficulty: "Hard",
        title: "Return Value di Python",
        question: "Apa yang dikembalikan function berikut?\n\ndef coba():\n    x = 10",
        options: ["10", "x", "None", "Error"],
        answer: 2
      },

      {
        type: "code",
        difficulty: "Hard",
        title: "Function dan Return",
        instruction: "Buat function 'luas_persegi' dengan parameter 'sisi' yang mengembalikan sisi * sisi, lalu cetak hasilnya untuk beberapa nilai",
        task: "Definisikan function menggunakan def, terima satu parameter, dan gunakan return.",
        constraints: [
          "Nama function harus: luas_persegi",
          "Parameter harus: sisi",
          "Gunakan return untuk mengembalikan nilai",
          "Cetak print(luas_persegi(5)) dan print(luas_persegi(3))"
        ],
        sampleInput: null,
        sampleInputLines: [],
        sampleOutput: "25\n9",
        testCases: [
          {
            label: "luas_persegi(5) → 25",
            inputs: [],
            expected: "25\n9"
          },
          {
            label: "luas_persegi(3) → 9",
            inputs: [],
            expected: "25\n9"
          },
          {
            label: "Output lengkap: 25 lalu 9",
            inputs: [],
            expected: "25\n9"
          }
        ]
      },

      // --- LESSON 7a --- (Hard) [FIX #3] List dipisah dari Komentar
      {
        type: "lesson",
        difficulty: "Hard",
        title: "List",
        content: `LIST — struktur data untuk menyimpan banyak item:

  angka = [1, 2, 3, 4, 5]
  buah  = ["apel", "mangga", "jeruk"]

  print(buah[0])      # apel  (index mulai dari 0)
  print(len(buah))    # 3

  buah.append("anggur")    # tambah item
  buah.remove("apel")      # hapus item`
      },
      {
        type: "quiz",
        difficulty: "Hard",
        title: "Index List Python",
        question: "Dari list berikut: buah = ['apel', 'mangga', 'jeruk']\nApa hasil dari buah[1]?",
        options: ["apel", "mangga", "jeruk", "Error"],
        answer: 1
      },

      // [FIX #1] Test case redundan pada soal List → cukup 1 test case karena output fixed
      {
        type: "code",
        difficulty: "Hard",
        title: "List Buah di Python",
        instruction: "Buat list 'buah' berisi 'Apel', 'Mangga', 'Jeruk', lalu tampilkan item pertamanya dan panjang list-nya",
        task: "Buat list dengan 3 elemen string, lalu akses index ke-0 dan gunakan len() untuk menampilkan jumlah item.",
        constraints: [
          "Nama variabel harus: buah",
          "Berisi: 'Apel', 'Mangga', 'Jeruk'",
          "Tampilkan item index ke-0 terlebih dahulu",
          "Lalu tampilkan len(buah)"
        ],
        sampleInput: null,
        sampleInputLines: [],
        sampleOutput: "Apel\n3",
        testCases: [
          {
            label: "Output: Apel lalu 3",
            inputs: [],
            expected: "Apel\n3"
          }
        ]
      },

      // --- LESSON 7b --- (Easy) [FIX #3] Komentar dipisah jadi lesson sendiri
      {
        type: "lesson",
        difficulty: "Easy",
        title: "Komentar (Comment)",
        content: `Komentar adalah catatan dalam kode yang tidak dieksekusi Python.
Komentar penting untuk mendokumentasikan kode agar mudah dipahami.

Komentar satu baris — gunakan tanda #:

  # Ini adalah komentar
  x = 10  # komentar bisa di samping kode

Komentar multi baris — gunakan tanda petik tiga:

  """
  Ini komentar
  lebih dari satu baris
  """

Contoh penggunaan yang baik:

  # Hitung luas persegi panjang
  panjang = 10  # satuan cm
  lebar = 5     # satuan cm
  luas = panjang * lebar
  print(luas)   # output: 50`
      },
      {
        type: "quiz",
        difficulty: "Easy",
        title: "Simbol Komentar Python",
        question: "Simbol untuk komentar satu baris di Python?",
        options: ["//", "#", "<!-- -->", "**"],
        answer: 1
      },

    ]
  },

  // =============================================
  // SECTION 2 — PROJECTS
  // =============================================
  {
    sectionTitle: "Python Projects",
    items: [

      {
        type: "project",
        title: "Kalkulator Nilai Akhir",
        difficulty: "Easy",
        description: `Kamu diminta membuat program yang menghitung nilai akhir seorang siswa berdasarkan tiga komponen nilai.

**Task**
Program menerima input tiga nilai:
  1. tugas  (bobot 30%)
  2. uts    (bobot 30%)
  3. uas    (bobot 40%)

Hitung nilai akhir dengan rumus:
  nilai_akhir = (tugas * 0.3) + (uts * 0.3) + (uas * 0.4)

Lalu tampilkan hasilnya menggunakan print().`,
        inputFormat: "Tiga baris input: nilai tugas, nilai uts, nilai uas (masing-masing integer).",
        constraints: [
          "Gunakan input() untuk menerima ketiga nilai",
          "Konversi input ke float dengan float()",
          "Gunakan bobot: tugas 30%, uts 30%, uas 40%",
          "Tampilkan nilai_akhir dengan print()"
        ],
        sampleInput: "80\n75\n90",
        sampleInputLines: ["80", "75", "90"],
        sampleOutput: "82.5",
        hint: "Baca tiga baris input dengan input(), konversi ke float, lalu hitung (tugas*0.3) + (uts*0.3) + (uas*0.4).",
        testCases: [
          {
            label: "tugas=80, uts=75, uas=90 → 82.5",
            inputs: ["80", "75", "90"],
            expected: "82.5"
          },
          {
            label: "tugas=100, uts=100, uas=100 → 100.0",
            inputs: ["100", "100", "100"],
            expected: "100.0"
          },
          {
            label: "tugas=0, uts=0, uas=0 → 0.0",
            inputs: ["0", "0", "0"],
            expected: "0.0"
          },
          {
            label: "tugas=70, uts=80, uas=85 → 79.0",
            inputs: ["70", "80", "85"],
            expected: "79.0"
          },
          {
            label: "tugas=60, uts=60, uas=60 → 60.0",
            inputs: ["60", "60", "60"],
            expected: "60.0"
          }
        ]
      },

      {
        type: "project",
        title: "FizzBuzz",
        difficulty: "Easy",
        description: `FizzBuzz adalah tantangan klasik pemrograman.

**Task**
Cetak angka 1 sampai 20 dengan aturan:
  • Jika angka habis dibagi 3, cetak "Fizz"
  • Jika angka habis dibagi 5, cetak "Buzz"
  • Jika habis dibagi keduanya, cetak "FizzBuzz"
  • Selain itu, cetak angkanya`,
        inputFormat: "Tidak ada input. Loop dari 1 sampai 20.",
        constraints: [
          "Gunakan for loop dengan range(1, 21)",
          "Cek FizzBuzz sebelum Fizz dan Buzz",
          "Gunakan operator modulo %"
        ],
        sampleInput: "(tidak ada input)",
        sampleInputLines: [],
        sampleOutput: "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz",
        hint: "Gunakan % untuk mengecek sisa bagi. Urutan pengecekan: FizzBuzz → Fizz → Buzz → angka.",
        testCases: [
          {
            label: "FizzBuzz 1–20 (output lengkap)",
            inputs: [],
            expected: "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz"
          },
          {
            label: "Angka 3 harus 'Fizz'",
            inputs: [],
            expected: "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz"
          },
          {
            label: "Angka 5 harus 'Buzz'",
            inputs: [],
            expected: "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz"
          },
          {
            label: "Angka 15 harus 'FizzBuzz'",
            inputs: [],
            expected: "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz"
          },
          {
            label: "Angka 20 harus 'Buzz'",
            inputs: [],
            expected: "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz"
          }
        ]
      },

      {
        type: "project",
        title: "Cek Bilangan Prima",
        difficulty: "Medium",
        description: `Bilangan prima adalah bilangan yang hanya habis dibagi 1 dan dirinya sendiri.

**Task**
Buat function bernama is_prima(n) yang:
  • Menerima satu parameter integer n
  • Mengembalikan True jika n adalah bilangan prima
  • Mengembalikan False jika bukan

Program membaca n dari input(), lalu mencetak is_prima(n).`,
        inputFormat: "Satu baris integer n.",
        constraints: [
          "Nama function harus: is_prima",
          "Parameter harus: n",
          "Gunakan return True / return False",
          "Baca n dari input() lalu print(is_prima(n))"
        ],
        sampleInput: "17",
        sampleInputLines: ["17"],
        sampleOutput: "True",
        hint: "Loop dari 2 sampai n-1. Jika ada angka yang membagi n habis, return False. Jika loop selesai tanpa menemukan pembagi, return True. Perhatikan kasus n < 2.",
        testCases: [
          {
            label: "n=17 → True (prima)",
            inputs: ["17"],
            expected: "True"
          },
          {
            label: "n=4 → False (bukan prima)",
            inputs: ["4"],
            expected: "False"
          },
          {
            label: "n=2 → True (prima terkecil)",
            inputs: ["2"],
            expected: "True"
          },
          {
            label: "n=1 → False (bukan prima)",
            inputs: ["1"],
            expected: "False"
          },
          {
            label: "n=13 → True (prima)",
            inputs: ["13"],
            expected: "True"
          },
          {
            label: "n=9 → False (3x3)",
            inputs: ["9"],
            expected: "False"
          }
        ]
      },

      {
        type: "project",
        title: "Pembalik Kata",
        difficulty: "Medium",
        description: `Manipulasi string adalah skill penting dalam Python.

**Task**
Buat function bernama balik_kata(kalimat) yang:
  • Menerima satu parameter string kalimat
  • Membalik urutan kata-kata dalam kalimat (bukan karakter)
  • Mengembalikan kalimat yang sudah dibalik

Program membaca kalimat dari input(), lalu mencetak hasilnya.

Contoh:
  Input  : "Belajar Python itu mudah"
  Output : "mudah itu Python Belajar"`,
        inputFormat: "Satu baris string kalimat.",
        constraints: [
          "Nama function harus: balik_kata",
          "Gunakan split() untuk memisah kata",
          "Gunakan reverse atau slicing [::-1]",
          "Gunakan join() untuk menggabungkan kembali",
          "Baca kalimat dari input()"
        ],
        sampleInput: "Belajar Python itu mudah",
        sampleInputLines: ["Belajar Python itu mudah"],
        sampleOutput: "mudah itu Python Belajar",
        hint: "Pisahkan kalimat menjadi list kata dengan split(), balik listnya dengan [::-1], lalu gabungkan dengan ' '.join().",
        testCases: [
          {
            label: "'Belajar Python itu mudah'",
            inputs: ["Belajar Python itu mudah"],
            expected: "mudah itu Python Belajar"
          },
          {
            label: "'Halo Dunia'",
            inputs: ["Halo Dunia"],
            expected: "Dunia Halo"
          },
          {
            label: "'satu dua tiga empat lima'",
            inputs: ["satu dua tiga empat lima"],
            expected: "lima empat tiga dua satu"
          },
          {
            label: "'Python' (satu kata)",
            inputs: ["Python"],
            expected: "Python"
          },
          {
            label: "'aku suka belajar coding'",
            inputs: ["aku suka belajar coding"],
            expected: "coding belajar suka aku"
          }
        ]
      },

      {
        type: "project",
        title: "Statistik Nilai Kelas",
        difficulty: "Hard",
        description: `Kombinasikan function, kondisi, dan operasi matematika.

      Buat tiga function:
        1. nilai_akhir(ujian, tugas) → mengembalikan rata-rata keduanya (float)
        2. grade(nilai)             → mengembalikan grade berdasarkan nilai akhir:
            A jika >= 80, B jika >= 60, C jika di bawah 60
        3. status(nilai)            → mengembalikan "Lulus" jika nilai >= 60,
            selain itu "Tidak Lulus"

      Panggil ketiga function dan cetak hasilnya masing-masing di baris baru.`,
        inputFormat: "Dua baris input: nilai ujian dan nilai tugas (integer).",
        constraints: [
          "Gunakan input() untuk menerima dua nilai",
          "Konversi ke int dengan int()",
          "Nama function harus: nilai_akhir, grade, status",
          "nilai_akhir: kembalikan rata-rata dua nilai sebagai float",
          "grade: gunakan if-elif-else",
          "status: kembalikan string 'Lulus' atau 'Tidak Lulus'",
          "Tampilkan hasil ketiga function dengan print()"
        ],
        sampleInput: "80\n70",
        sampleInputLines: ["80", "70"],
        sampleOutput: "75.0\nB\nLulus",
        hint: "Hitung nilai_akhir dulu, lalu gunakan hasilnya sebagai argumen untuk grade() dan status().",
        testCases: [
          {
            label: "ujian=80, tugas=70 → 75.0 / B / Lulus",
            inputs: ["80", "70"],
            expected: "75.0\nB\nLulus"
          },
          {
            label: "ujian=90, tugas=90 → 90.0 / A / Lulus",
            inputs: ["90", "90"],
            expected: "90.0\nA\nLulus"
          },
          {
            label: "ujian=50, tugas=40 → 45.0 / C / Tidak Lulus",
            inputs: ["50", "40"],
            expected: "45.0\nC\nTidak Lulus"
          },
          {
            label: "ujian=60, tugas=60 → 60.0 / B / Lulus (batas bawah B)",
            inputs: ["60", "60"],
            expected: "60.0\nB\nLulus"
          },
          {
            label: "ujian=80, tugas=80 → 80.0 / A / Lulus (batas bawah A)",
            inputs: ["80", "80"],
            expected: "80.0\nA\nLulus"
          }
        ]
      },

    ]
  }

];