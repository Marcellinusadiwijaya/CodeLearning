/**
 * progressService.js
 * ─────────────────────────────────────────────────────────────
 * Semua fungsi untuk membaca dan menyimpan progress kursus
 * ke Supabase. Import dari file ini di setiap course page.
 * ─────────────────────────────────────────────────────────────
 */

import { supabase } from "./supaBaseClient";

// ─── COURSE PROGRESS ──────────────────────────────────────────────────────────

/**
 * Ambil progress kursus dari Supabase.
 * @param {string} courseId  - misal: "python", "html", "css"
 * @returns {Object}  - misal: { "0-0": true, "1-2": true }
 */
export async function loadCourseProgress(courseId) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return {};

  const { data, error } = await supabase
    .from("course_progress")
    .select("progress_data")
    .eq("user_id", user.id)
    .eq("course_id", courseId)
    .maybeSingle(); // maybeSingle: tidak error jika row belum ada

  if (error) {
    console.error("[progressService] loadCourseProgress error:", error.message);
    return {};
  }

  return data?.progress_data ?? {};
}

/**
 * Simpan (upsert) progress kursus ke Supabase.
 * @param {string} courseId      - misal: "python"
 * @param {Object} progressData  - misal: { "0-0": true, "0-1": true }
 */
export async function saveCourseProgress(courseId, progressData) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const { error } = await supabase.from("course_progress").upsert(
    {
      user_id: user.id,
      course_id: courseId,
      progress_data: progressData,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id,course_id" }
  );

  if (error) {
    console.error("[progressService] saveCourseProgress error:", error.message);
  }
}

/**
 * Reset (hapus) progress kursus dari Supabase.
 * @param {string} courseId - misal: "python"
 */
export async function resetCourseProgress(courseId) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const { error } = await supabase
    .from("course_progress")
    .delete()
    .eq("user_id", user.id)
    .eq("course_id", courseId);

  if (error) {
    console.error("[progressService] resetCourseProgress error:", error.message);
  }
}

// ─── QUIZ PROGRAMMING LOGIC ───────────────────────────────────────────────────

/**
 * Ambil progress quiz Programming Logic dari Supabase.
 * @returns {{ plProgress: Object, plScore: number }}
 */
export async function loadQuizProgress() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { plProgress: {}, plScore: 0 };

  const { data, error } = await supabase
    .from("quiz_progress")
    .select("pl_progress, pl_score")
    .eq("user_id", user.id)
    .maybeSingle();

  if (error) {
    console.error("[progressService] loadQuizProgress error:", error.message);
    return { plProgress: {}, plScore: 0 };
  }

  return {
    plProgress: data?.pl_progress ?? {},
    plScore: data?.pl_score ?? 0,
  };
}

/**
 * Simpan progress quiz Programming Logic ke Supabase.
 * @param {Object} plProgress - progress soal
 * @param {number|null} plScore - skor akhir (null = belum selesai)
 */
export async function saveQuizProgress(plProgress, plScore = null) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const payload = {
    user_id: user.id,
    pl_progress: plProgress,
    updated_at: new Date().toISOString(),
  };

  // Hanya update skor jika ada nilainya
  if (plScore !== null) payload.pl_score = plScore;

  const { error } = await supabase
    .from("quiz_progress")
    .upsert(payload, { onConflict: "user_id" });

  if (error) {
    console.error("[progressService] saveQuizProgress error:", error.message);
  }
}

/**
 * Reset progress quiz Programming Logic.
 */
export async function resetQuizProgress() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const { error } = await supabase
    .from("quiz_progress")
    .delete()
    .eq("user_id", user.id);

  if (error) {
    console.error("[progressService] resetQuizProgress error:", error.message);
  }
}
