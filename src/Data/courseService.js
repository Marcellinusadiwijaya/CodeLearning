/**
 * courseService.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Fungsi untuk mengambil data soal/materi kursus dari Supabase.
 * Menggantikan import langsung dari pythonCourse.js / javaCourse.js / cCourse.js
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { supabase } from "./supaBaseClient";

/**
 * Cache sederhana agar tidak fetch ulang setiap render.
 * Key: courseId, Value: array sections (format sama seperti hardcode lama)
 */
const _cache = {};

/**
 * Ambil semua items sebuah kursus dari Supabase,
 * lalu susun kembali menjadi format:
 *   [ { sectionTitle, items: [...] }, ... ]
 *
 * Format ini identik dengan format lama (pythonCourse, javaCourse, dll.),
 * sehingga komponen yang menggunakan data tidak perlu banyak berubah.
 *
 * @param {string} courseId  - 'python' | 'java' | 'c'
 * @returns {Promise<Array>} - array of sections
 */
export async function loadCourseData(courseId) {
  // Kembalikan dari cache jika sudah ada
  if (_cache[courseId]) return _cache[courseId];

  const { data, error } = await supabase
    .from("course_items")
    .select("*")
    .eq("course_id", courseId)
    .order("section_index", { ascending: true })
    .order("item_index",    { ascending: true });

  if (error) {
    console.error(`[courseService] loadCourseData(${courseId}) error:`, error.message);
    return [];
  }

  // Rekonstruksi ke format [ { sectionTitle, items[] } ]
  const sectionsMap = new Map(); // key: section_index

  for (const row of data) {
    if (!sectionsMap.has(row.section_index)) {
      sectionsMap.set(row.section_index, {
        sectionTitle: row.section_title,
        items: [],
      });
    }

    sectionsMap.get(row.section_index).items.push(rowToItem(row));
  }

  // Map → array, pastikan urutan section_index
  const sections = Array.from(sectionsMap.entries())
    .sort(([a], [b]) => a - b)
    .map(([, section]) => section);

  _cache[courseId] = sections;
  return sections;
}

/**
 * Ambil satu item spesifik dari Supabase.
 * Berguna jika ingin lazy-load per item.
 *
 * @param {string}  courseId
 * @param {number}  sectionIndex
 * @param {number}  itemIndex
 * @returns {Promise<Object|null>}
 */
export async function loadCourseItem(courseId, sectionIndex, itemIndex) {
  const { data, error } = await supabase
    .from("course_items")
    .select("*")
    .eq("course_id",     courseId)
    .eq("section_index", sectionIndex)
    .eq("item_index",    itemIndex)
    .maybeSingle();

  if (error) {
    console.error(`[courseService] loadCourseItem error:`, error.message);
    return null;
  }

  return data ? rowToItem(data) : null;
}

/**
 * Invalidasi cache untuk kursus tertentu
 * (berguna jika admin baru saja update soal di Supabase)
 *
 * @param {string} courseId
 */
export function invalidateCourseCache(courseId) {
  delete _cache[courseId];
}

/**
 * Metadata statis tiap kursus (id, title, description).
 * Menggantikan allCourse.js — tidak perlu disimpan di DB karena jarang berubah.
 */
export const COURSE_META = [
  { id: "python", title: "Python", description: "Belajar bahasa pemrograman Python" },
];

/**
 * Ambil data semua kursus sekaligus dari Supabase.
 * Mengembalikan format yang sama dengan allCourse lama:
 *   [ { id, title, description, data: [...sections] }, ... ]
 *
 * @returns {Promise<Array>}
 */
export async function loadAllCourseData() {
  const results = await Promise.all(
    COURSE_META.map(async (meta) => {
      const data = await loadCourseData(meta.id);
      return { ...meta, data };
    })
  );
  return results;
}

// ─── Helper: konversi row DB → format item yang digunakan komponen ────────────

function rowToItem(row) {
  const base = {
    type:       row.type,
    difficulty: row.difficulty,
    title:      row.title,
  };

  switch (row.type) {
    case "lesson":
      return { ...base, content: row.content };

    case "quiz":
      return {
        ...base,
        question: row.question,
        options:  row.options,   // sudah JSONB → JS array
        answer:   row.answer,
      };

    case "code":
      return {
        ...base,
        instruction:      row.instruction,
        task:             row.task,
        constraints:      row.constraints,       // JSONB → JS array
        sampleInput:      row.sample_input,
        sampleInputLines: row.sample_input_lines, // JSONB → JS array
        sampleOutput:     row.sample_output,
        testCases:        row.test_cases,         // JSONB → JS array
        answer:           row.answer_text,        // untuk Java (string match)
      };

    case "project":
      return {
        ...base,
        description:      row.description,
        inputFormat:      row.input_format,
        constraints:      row.constraints,
        sampleInput:      row.sample_input,
        sampleInputLines: row.sample_input_lines,
        sampleOutput:     row.sample_output,
        hint:             row.hint,
        testCases:        row.test_cases,
      };

    default:
      return { ...base };
  }
}