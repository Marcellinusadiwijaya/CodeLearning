export const cCourse = [

  // =============================================
  // SECTION 1 — C FUNDAMENTALS
  // =============================================
  {
    sectionTitle: "C Fundamentals",
    items: [

      // --- LESSON 1 ---
      {
        type: "lesson",
        title: "Apa itu Bahasa C?",
        content: `C adalah bahasa pemrograman tingkat rendah yang dikembangkan oleh Dennis Ritchie pada tahun 1972.

C digunakan untuk:
  • Pemrograman sistem (OS, driver)
  • Embedded systems & mikrokontroler
  • Game engine & software performa tinggi
  • Compiler dan interpreter bahasa lain

Program C pertama (Hello, World!):

  #include <stdio.h>

  int main() {
      printf("Hello, World!\\n");
      return 0;
  }

Struktur program C:
  • #include   → menyertakan library
  • main()     → fungsi utama program
  • printf()   → mencetak output ke layar
  • return 0   → mengakhiri program`
      },
      {
        type: "quiz",
        question: "Fungsi utama yang wajib ada di setiap program C adalah?",
        options: ["start()", "begin()", "main()", "run()"],
        answer: 2
      },
      {
        type: "code",
        instruction: "Lengkapi program C yang mencetak 'Halo, C!' ke layar",
        task: "Tulis program C lengkap dengan #include, main(), dan printf().",
        constraints: [
          "Gunakan #include <stdio.h>",
          "Tulis fungsi main() dengan return type int",
          "Gunakan printf() untuk mencetak",
          "Output harus tepat: Halo, C!"
        ],
        sampleInput: null,
        sampleOutput: "Halo, C!",
        testCases: [
          {
            call: null,
            vars: {},
            expected: "Halo, C!",
            codeCheck: false,
            run: `#include <stdio.h>\nint main() {\n    printf("Halo, C!");\n    return 0;\n}`
          }
        ]
      },

      // --- LESSON 2 ---
      {
        type: "lesson",
        title: "Variabel & Tipe Data",
        content: `C adalah bahasa strongly-typed — setiap variabel harus dideklarasikan dengan tipenya.

Tipe data utama C:
  • int    → bilangan bulat        → int x = 10;
  • float  → desimal presisi rendah → float y = 3.14;
  • double → desimal presisi tinggi → double z = 3.14159;
  • char   → satu karakter         → char c = 'A';

Deklarasi & inisialisasi:

  int usia = 17;
  float tinggi = 165.5;
  char inisial = 'S';

  printf("%d\\n", usia);    // 17
  printf("%f\\n", tinggi);  // 165.500000
  printf("%c\\n", inisial); // S

Format specifier printf():
  %d  → int
  %f  → float/double
  %c  → char
  %s  → string (char array)`
      },
      {
        type: "quiz",
        question: "Format specifier yang digunakan untuk mencetak int di C adalah?",
        options: ["%s", "%f", "%d", "%c"],
        answer: 2
      },
      {
        type: "code",
        instruction: "Deklarasikan variabel int 'nilai' = 95 dan cetak menggunakan printf dengan format %d",
        task: "Buat variabel int, inisialisasi dengan 95, lalu cetak nilainya.",
        constraints: [
          "Tipe variabel harus int",
          "Nama variabel harus: nilai",
          "Nilai harus 95",
          "Gunakan %d sebagai format specifier"
        ],
        sampleInput: null,
        sampleOutput: "95",
        testCases: [
          { vars: {}, call: null, expected: "95" }
        ]
      },

      // --- LESSON 3 ---
      {
        type: "lesson",
        title: "Input & Output",
        content: `C menggunakan printf() untuk output dan scanf() untuk input.

Output dengan printf():
  printf("Teks biasa\\n");
  printf("Nilai: %d\\n", x);
  printf("Nama: %s, Usia: %d\\n", nama, usia);

Input dengan scanf():
  int umur;
  scanf("%d", &umur);    ← perhatikan & (address-of)

  char nama[50];
  scanf("%s", nama);     ← array tidak perlu &

Contoh lengkap:

  #include <stdio.h>

  int main() {
      int nilai;
      printf("Masukkan nilai: ");
      scanf("%d", &nilai);
      printf("Nilai kamu: %d\\n", nilai);
      return 0;
  }

⚠️ scanf() membutuhkan alamat memori (&) untuk variabel primitif!`
      },
      {
        type: "quiz",
        question: "Operator apa yang digunakan sebelum nama variabel saat menggunakan scanf()?",
        options: ["*", "$", "&", "@"],
        answer: 2
      },
      {
        type: "code",
        instruction: "Cetak dua baris: 'Nama: Andi' dan 'Usia: 20' menggunakan dua printf()",
        task: "Gunakan dua printf() terpisah untuk mencetak nama dan usia.",
        constraints: [
          "Gunakan dua printf() terpisah",
          "Baris 1 harus: Nama: Andi",
          "Baris 2 harus: Usia: 20",
          "Gunakan \\n untuk newline"
        ],
        sampleInput: null,
        sampleOutput: "Nama: Andi\nUsia: 20",
        testCases: [
          { vars: {}, call: null, expected: "Nama: Andi\nUsia: 20" }
        ]
      },

      // --- LESSON 4 ---
      {
        type: "lesson",
        title: "Operator & Aritmatika",
        content: `C mendukung berbagai operator untuk manipulasi data.

Operator Aritmatika:
  +   → penjumlahan     → 5 + 3 = 8
  -   → pengurangan     → 5 - 3 = 2
  *   → perkalian       → 5 * 3 = 15
  /   → pembagian       → 10 / 3 = 3  (integer division!)
  %   → modulo (sisa)   → 10 % 3 = 1

⚠️ Integer division:
  int a = 10 / 3;   // hasilnya 3, bukan 3.33!
  float b = 10.0 / 3;  // hasilnya 3.333...

Operator Penugasan:
  x = 5;    // assign
  x += 2;   // x = x + 2 → 7
  x -= 1;   // x = x - 1 → 6
  x *= 2;   // x = x * 2 → 12
  x++;      // x = x + 1
  x--;      // x = x - 1

Contoh:
  int a = 10, b = 3;
  printf("%d\\n", a % b);  // 1`
      },
      {
        type: "quiz",
        question: "Hasil dari ekspresi 17 % 5 di C adalah?",
        options: ["3", "2", "1", "4"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Hitung luas persegi panjang: panjang=12, lebar=7, cetak hasilnya",
        task: "Deklarasikan dua int, kalikan, simpan ke variabel luas, lalu printf.",
        constraints: [
          "panjang = 12, lebar = 7",
          "Hitung menggunakan operator *",
          "Simpan ke variabel bernama luas",
          "Cetak nilai luas saja (angka saja)"
        ],
        sampleInput: null,
        sampleOutput: "84",
        testCases: [
          { vars: {}, call: null, expected: "84" }
        ]
      },

      // --- LESSON 5 ---
      {
        type: "lesson",
        title: "Kondisi (If - Else If - Else)",
        content: `Kondisi di C menggunakan if, else if, dan else.

Struktur:
  if (kondisi) {
      // jalankan jika benar
  } else if (kondisi_lain) {
      // jalankan jika kondisi pertama salah
  } else {
      // jalankan jika semua salah
  }

Operator perbandingan:
  ==  → sama dengan
  !=  → tidak sama
  >   → lebih besar
  <   → lebih kecil
  >=  → lebih besar atau sama
  <=  → lebih kecil atau sama

Operator logika:
  &&  → AND (dan)
  ||  → OR (atau)
  !   → NOT (bukan)

Contoh:
  int nilai = 85;

  if (nilai >= 80) {
      printf("A\\n");
  } else if (nilai >= 60) {
      printf("B\\n");
  } else {
      printf("C\\n");
  }`
      },
      {
        type: "quiz",
        question: "Operator 'sama dengan' untuk perbandingan di C adalah?",
        options: ["=", "===", "==", ":="],
        answer: 2
      },
      {
        type: "code",
        instruction: "Tulis if-else: jika x > 0 cetak 'positif', jika x < 0 cetak 'negatif', jika 0 cetak 'nol'. x = -5",
        task: "Gunakan if-else if-else untuk mengecek tanda bilangan.",
        constraints: [
          "Deklarasikan int x = -5",
          "Gunakan if, else if, else",
          "Output harus: negatif"
        ],
        sampleInput: null,
        sampleOutput: "negatif",
        testCases: [
          { vars: {}, call: null, expected: "negatif" }
        ]
      },

      // --- LESSON 6 ---
      {
        type: "lesson",
        title: "Loop (Perulangan)",
        content: `C memiliki tiga jenis loop utama.

FOR loop — untuk iterasi sejumlah tertentu:
  for (int i = 0; i < 5; i++) {
      printf("%d\\n", i);  // 0 1 2 3 4
  }

WHILE loop — selama kondisi benar:
  int x = 0;
  while (x < 5) {
      printf("%d\\n", x);
      x++;
  }

DO-WHILE loop — minimal sekali dijalankan:
  int n = 0;
  do {
      printf("%d\\n", n);
      n++;
  } while (n < 3);

Struktur for loop:
  for (inisialisasi; kondisi; update) { ... }

  for (int i = 1; i <= 5; i++)  → cetak 1 sampai 5
  for (int i = 10; i >= 0; i--) → hitung mundur`
      },
      {
        type: "quiz",
        question: "Urutan bagian dalam for loop di C adalah?",
        options: [
          "kondisi; inisialisasi; update",
          "inisialisasi; kondisi; update",
          "update; kondisi; inisialisasi",
          "inisialisasi; update; kondisi"
        ],
        answer: 1
      },
      {
        type: "code",
        instruction: "Tulis for loop yang mencetak angka 1 sampai 5",
        task: "Gunakan for loop dengan kondisi yang tepat sehingga output 1, 2, 3, 4, 5.",
        constraints: [
          "Gunakan for loop",
          "Mulai dari i = 1",
          "Gunakan kondisi i <= 5",
          "Setiap angka di baris baru"
        ],
        sampleInput: null,
        sampleOutput: "1\n2\n3\n4\n5",
        testCases: [
          { vars: {}, call: null, expected: "1\n2\n3\n4\n5" }
        ]
      },

      // --- LESSON 7 ---
      {
        type: "lesson",
        title: "Function",
        content: `Function di C memungkinkan kode digunakan kembali.

Deklarasi & definisi:
  // Deklarasi (prototype) — opsional jika function di atas main
  int tambah(int a, int b);

  // Definisi
  int tambah(int a, int b) {
      return a + b;
  }

  // Pemanggilan
  int hasil = tambah(3, 4);
  printf("%d\\n", hasil);  // 7

Tipe return:
  int    → mengembalikan bilangan bulat
  float  → mengembalikan desimal
  void   → tidak mengembalikan nilai

Function void:
  void cetak_garis() {
      printf("--------------------\\n");
  }

  cetak_garis();  // panggil function

⚠️ Di C, function harus dideklarasikan sebelum dipanggil!`
      },
      {
        type: "quiz",
        question: "Return type untuk function yang tidak mengembalikan nilai di C adalah?",
        options: ["null", "none", "void", "empty"],
        answer: 2
      },
      {
        type: "code",
        instruction: "Buat function 'kuadrat' yang menerima int n dan mengembalikan n * n, lalu panggil dengan n=6",
        task: "Definisikan function dengan return type int, parameter int n, return n*n.",
        constraints: [
          "Nama function harus: kuadrat",
          "Parameter: int n",
          "Return type: int",
          "Panggil kuadrat(6) dan cetak hasilnya"
        ],
        sampleInput: null,
        sampleOutput: "36",
        testCases: [
          { vars: {}, call: null, expected: "36" }
        ]
      },

      // --- LESSON 8 ---
      {
        type: "lesson",
        title: "Array",
        content: `Array adalah kumpulan elemen bertipe sama yang disimpan berurutan di memori.

Deklarasi array:
  int angka[5] = {10, 20, 30, 40, 50};
  float nilai[3] = {85.5, 90.0, 78.5};
  char huruf[4] = {'A', 'B', 'C', 'D'};

Akses elemen (index mulai dari 0):
  printf("%d\\n", angka[0]);  // 10
  printf("%d\\n", angka[4]);  // 50

Modifikasi elemen:
  angka[2] = 99;
  printf("%d\\n", angka[2]);  // 99

Iterasi array dengan loop:
  int data[5] = {1, 2, 3, 4, 5};
  for (int i = 0; i < 5; i++) {
      printf("%d\\n", data[i]);
  }

Ukuran array:
  int n = sizeof(data) / sizeof(data[0]);  // 5`
      },
      {
        type: "quiz",
        question: "Index pertama (elemen pertama) pada array di C dimulai dari?",
        options: ["1", "0", "-1", "Tergantung deklarasi"],
        answer: 1
      },
      {
        type: "code",
        instruction: "Deklarasikan array int 'data' berisi {3, 7, 2, 9, 5}, lalu cetak elemen index ke-3",
        task: "Buat array dengan 5 elemen, akses index ke-3 menggunakan printf.",
        constraints: [
          "Nama array harus: data",
          "Isi array: {3, 7, 2, 9, 5}",
          "Cetak elemen index ke-3 saja",
          "Output harus: 9"
        ],
        sampleInput: null,
        sampleOutput: "9",
        testCases: [
          { vars: {}, call: null, expected: "9" }
        ]
      },

    ]
  },

  // =============================================
  // SECTION 2 — C PROJECTS
  // =============================================
  {
    sectionTitle: "C Projects",
    items: [

      {
        type: "project",
        title: "Konversi Suhu",
        difficulty: "Easy",
        description: `Buat program konversi suhu dari Celsius ke Fahrenheit.

**Task**
Diberikan variabel:
  celsius = 100.0

Hitung Fahrenheit dengan rumus:
  fahrenheit = (celsius * 9.0 / 5.0) + 32.0

Tampilkan hasilnya menggunakan printf() dengan format %.1f (1 desimal).`,
        inputFormat: "Tidak ada input dari user. Gunakan nilai celsius = 100.0.",
        constraints: [
          "Gunakan tipe data double atau float",
          "Gunakan rumus: (celsius * 9.0 / 5.0) + 32.0",
          "Tampilkan dengan format %.1f",
          "Output harus: 212.0"
        ],
        sampleInput: "celsius = 100.0",
        sampleOutput: "212.0",
        hint: "Gunakan double untuk presisi lebih baik. Format %.1f akan mencetak satu angka di belakang koma.",
        testCases: [
          { vars: {}, call: null, expected: "212.0" }
        ]
      },

      {
        type: "project",
        title: "FizzBuzz",
        difficulty: "Easy",
        description: `Tantangan klasik FizzBuzz dalam bahasa C.

**Task**
Cetak angka 1 sampai 20 dengan aturan:
  • Jika angka habis dibagi 3, cetak "Fizz"
  • Jika angka habis dibagi 5, cetak "Buzz"
  • Jika habis dibagi keduanya (15), cetak "FizzBuzz"
  • Selain itu, cetak angkanya`,
        inputFormat: "Tidak ada input. Gunakan for loop dari 1 sampai 20.",
        constraints: [
          "Gunakan for loop dengan range 1 sampai 20 (inklusif)",
          "Cek FizzBuzz (% 15) sebelum Fizz dan Buzz",
          "Gunakan operator modulo %",
          "Setiap output di baris baru"
        ],
        sampleInput: "i dari 1 sampai 20",
        sampleOutput: "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz",
        hint: "Urutan if: cek i%15==0 dulu (FizzBuzz), lalu i%3==0 (Fizz), lalu i%5==0 (Buzz), terakhir else untuk angka biasa.",
        testCases: [
          { vars: {}, call: null, expected: "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz" }
        ]
      },

      {
        type: "project",
        title: "Faktorial Rekursif",
        difficulty: "Medium",
        description: `Implementasikan fungsi faktorial menggunakan rekursi.

**Task**
Buat function bernama faktorial(n) yang:
  • Menerima parameter int n
  • Mengembalikan n! (faktorial dari n) secara rekursif
  • Base case: jika n == 0 atau n == 1, return 1
  • Recursive case: return n * faktorial(n - 1)

Lalu di dalam main(), cetak hasil faktorial(6).

Ingat: 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720`,
        inputFormat: "n = 6 (sudah ditetapkan di main, tidak perlu input())",
        constraints: [
          "Nama function harus: faktorial",
          "Return type harus: int",
          "Gunakan rekursi (function memanggil dirinya sendiri)",
          "Base case: n <= 1 return 1",
          "Cetak hasil faktorial(6)"
        ],
        sampleInput: "faktorial(6)",
        sampleOutput: "720",
        hint: "Rekursi: faktorial(n) = n * faktorial(n-1). Pastikan ada base case (n==0 atau n==1 return 1) agar tidak infinite loop.",
        testCases: [
          { vars: {}, call: null, expected: "720" }
        ]
      },

      {
        type: "project",
        title: "Cari Nilai Terbesar",
        difficulty: "Medium",
        description: `Gunakan array dan loop untuk mencari nilai maksimum.

**Task**
Diberikan array:
  int data[] = {34, 67, 23, 89, 45, 12, 78, 56};

Buat function bernama cari_max(arr, n) yang:
  • Menerima array int dan ukurannya
  • Mencari dan mengembalikan nilai terbesar dalam array
  • Tidak boleh menggunakan library sorting

Lalu cetak nilai maksimum yang ditemukan.`,
        inputFormat: "Array sudah ditetapkan di dalam kode. n = 8 elemen.",
        constraints: [
          "Nama function harus: cari_max",
          "Parameter: int arr[], int n",
          "Gunakan loop untuk iterasi array",
          "Bandingkan setiap elemen dengan max sementara",
          "Return nilai terbesar"
        ],
        sampleInput: "{34, 67, 23, 89, 45, 12, 78, 56}",
        sampleOutput: "89",
        hint: "Inisialisasi max = arr[0]. Loop dari index 1, jika arr[i] > max, update max = arr[i]. Return max di akhir.",
        testCases: [
          { vars: {}, call: null, expected: "89" }
        ]
      },

      {
        type: "project",
        title: "Bubble Sort",
        difficulty: "Hard",
        description: `Implementasikan algoritma Bubble Sort untuk mengurutkan array.

**Task**
Diberikan array:
  int data[] = {64, 34, 25, 12, 22, 11, 90};

Buat function bernama bubble_sort(arr, n) yang:
  • Mengurutkan array dari kecil ke besar (ascending)
  • Menggunakan algoritma Bubble Sort
  • Memodifikasi array langsung (in-place)

Setelah sorting, cetak semua elemen array dengan spasi di antara angka.

Contoh output: 11 12 22 25 34 64 90`,
        inputFormat: "Array sudah ditetapkan. Tidak perlu input dari user.",
        constraints: [
          "Nama function harus: bubble_sort",
          "Gunakan nested loop (loop dalam loop)",
          "Tukar elemen jika arr[j] > arr[j+1]",
          "Cetak array setelah diurutkan, dipisah spasi",
          "Tidak ada newline/spasi di akhir"
        ],
        sampleInput: "{64, 34, 25, 12, 22, 11, 90}",
        sampleOutput: "11 12 22 25 34 64 90",
        hint: "Bubble Sort: outer loop 0 sampai n-1, inner loop 0 sampai n-i-2. Jika arr[j] > arr[j+1], tukar menggunakan variabel temp. Untuk cetak, loop dan printf '%d ' lalu trim spasi terakhir dengan printf tanpa spasi di akhir elemen terakhir.",
        testCases: [
          { vars: {}, call: null, expected: "11 12 22 25 34 64 90" }
        ]
      },

    ]
  }

];