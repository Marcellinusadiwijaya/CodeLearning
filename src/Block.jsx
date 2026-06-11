import { Link } from "react-router-dom";
import "./CSS/Block.css";

const COURSE_CONFIG = {

  "python":          { icon: "🐍",  accent: "#3776AB", bg: "#e8f4fd", desc: "Bahasa serbaguna yang mudah dipelajari. Cocok untuk data science, web, dan otomasi." },
};
  // "c":               { icon: "©️",  accent: "#A8B9CC", bg: "#f0f4f8", desc: "Bahasa pemrograman sistem tingkat rendah. Pelajari pointer, memori, dan fondasi komputasi." },
  // "java":            { icon: "☕",  accent: "#ED8B00", bg: "#fff8e8", desc: "Bahasa OOP yang powerful. Tulis sekali, jalankan di mana saja dengan JVM." },
  // "programming-logic": { icon: "🧠", accent: "#8B5CF6", bg: "#f3f0ff", desc: "Dasar logika pemrograman sebelum masuk ke bahasa apapun." },
  // "html":            { icon: "🌐",  accent: "#E44D26", bg: "#fef2ee", desc: "Fondasi dari semua halaman web. Pelajari struktur dan semantik HTML." },
  // "css":             { icon: "🎨",  accent: "#1572B6", bg: "#e8f4fd", desc: "Styling dan layout untuk tampilan web yang indah dan responsif." },
  // "js-basic":        { icon: "⚡",  accent: "#F7DF1E", bg: "#fefce8", desc: "Dasar JavaScript untuk web interaktif dan dinamis." },
  // "js-advanced":     { icon: "⚡",  accent: "#F7DF1E", bg: "#fefce8", desc: "JavaScript tingkat lanjut: async, closure, dan lebih." },
  // "react":           { icon: "⚛️",  accent: "#61DAFB", bg: "#e8fafe", desc: "Library UI terpopuler untuk aplikasi web modern." },
  // "nodejs":          { icon: "🟩",  accent: "#339933", bg: "#eafaea", desc: "JavaScript di sisi server dengan Node.js." },
  // "mysql":           { icon: "🗄️",  accent: "#4479A1", bg: "#e8f0fb", desc: "Database relasional paling populer di dunia." },
  // "git":             { icon: "🔀",  accent: "#F05032", bg: "#fef0ee", desc: "Version control untuk kolaborasi dan manajemen kode." },
  // "php":             { icon: "🐘",  accent: "#777BB4", bg: "#f0f0fa", desc: "Bahasa server-side untuk pengembangan web dinamis." },
function getCourseId(path) {
  return path.split("/").pop();
}

/**
 * Props:
 *  - title, path, locked, upcoming
 *  - progressStatus : "Belum Mulai" | "Sedang" | "Selesai"  (dari App.jsx via Supabase)
 *  - progressPercent: number 0-100                           (dari App.jsx via Supabase)
 */
export default function Block({ title, path, locked, progressStatus, progressPercent = 0, upcoming }) {
  const courseId = getCourseId(path);
  const config = COURSE_CONFIG[courseId] || {
    icon: "📘",
    accent: "#6b7280",
    bg: "#f3f4f6",
    desc: "Pelajari kursus ini untuk meningkatkan skill pemrogramanmu.",
  };

  // Gunakan progressPercent dari prop (data Supabase), bukan localStorage
  const percent = progressStatus === "Selesai" ? 100 : progressPercent;

  // ── UPCOMING card ────────────────────────────────────────────────
  if (upcoming) {
    return (
      <div className="block-card block-card--upcoming">
        <div className="block-accent-bar" style={{ background: "#d1d5db" }} />
        <div className="block-top">
          <div className="block-icon-wrap" style={{ background: config.bg }}>
            {config.icon}
          </div>
          <span className="block-lock">🔒</span>
        </div>
        <p className="block-title">{title}</p>
        <p className="block-desc">{config.desc}</p>
        <div className="block-footer">
          <span className="block-badge block-badge--upcoming">🔜 Segera Hadir</span>
        </div>
      </div>
    );
  }

  // ── LOCKED card ──────────────────────────────────────────────────
  if (locked) {
    return (
      <div className="block-card block-card--locked">
        <div className="block-accent-bar" style={{ background: config.accent }} />
        <div className="block-top">
          <div className="block-icon-wrap" style={{ background: config.bg }}>
            {config.icon}
          </div>
          <span className="block-lock">🔒</span>
        </div>
        <p className="block-title">{title}</p>
        <p className="block-desc">{config.desc}</p>
        <div className="block-footer">
          <span className="block-badge block-badge--notstarted">Terkunci</span>
        </div>
      </div>
    );
  }

  // ── Badge & button config ────────────────────────────────────────
  const badgeClass =
    progressStatus === "Selesai" ? "block-badge--done" :
    progressStatus === "Sedang"  ? "block-badge--ongoing" :
                                   "block-badge--notstarted";

  const badgeLabel =
    progressStatus === "Selesai" ? "✓ Selesai" :
    progressStatus === "Sedang"  ? "⏳ Sedang" :
                                   "Belum Mulai";

  const btnLabel =
    progressStatus === "Selesai" ? "Review" :
    progressStatus === "Sedang"  ? "Continue" :
                                   "Start";

  const btnClass =
    progressStatus === "Selesai" ? "block-btn block-btn--done" : "block-btn";

  // ── Normal card ──────────────────────────────────────────────────
  return (
    <Link to={path} className="block-card">
      <div className="block-accent-bar" style={{ background: config.accent }} />

      <div className="block-top">
        <div className="block-icon-wrap" style={{ background: config.bg }}>
          {config.icon}
        </div>
        <span className={`block-badge ${badgeClass}`}>{badgeLabel}</span>
      </div>

      <p className="block-title">{title}</p>
      <p className="block-desc">{config.desc}</p>

      <div className="block-footer">
        <div className="block-progress-wrap">
          <span className="block-progress-label">
            Progress <b>{percent}%</b>
          </span>
          <div className="block-progress-bar">
            <div
              className={`block-progress-fill${progressStatus === "Selesai" ? " block-progress-fill--done" : ""}`}
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
        <span className={btnClass}>{btnLabel}</span>
      </div>
    </Link>
  );
}
