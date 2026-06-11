import { useParams, useNavigate } from "react-router-dom";
import Certificate from "./Certificate";
import { useState, useEffect } from "react";
import "../CSS/CourseMenu.css";
import { loadCourseProgress, resetCourseProgress } from "../Data/progressService";
import { loadCourseData, COURSE_META } from "../Data/courseService";
import { supabase } from "../Data/supaBaseClient";

const DIFFICULTIES = ["Easy", "Medium", "Hard"];

function getSectionDifficulty(secIndex, total) {
  const ratio = secIndex / total;
  if (ratio < 1 / 3) return "Easy";
  if (ratio < 2 / 3) return "Medium";
  return "Hard";
}

function formatDuration(seconds) {
  if (!seconds) return null;
  if (seconds >= 3600) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    return `${h}h ${m > 0 ? m + "m" : ""}`.trim();
  }
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function CircularProgress({ pct }) {
  const r = 54;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  return (
    <div className="cm-circular-wrap">
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle cx="70" cy="70" r={r} fill="none" stroke="#e5e7eb" strokeWidth="10" />
        <circle
          cx="70" cy="70" r={r}
          fill="none"
          stroke="#1d4ed8"
          strokeWidth="10"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 70 70)"
          style={{ transition: "stroke-dashoffset 0.6s ease" }}
        />
      </svg>
      <div className="cm-circular-label">
        <span className="cm-circular-pct">{Math.round(pct)}%</span>
        <span className="cm-circular-sub">COMPLETED</span>
      </div>
    </div>
  );
}

export default function AllCourseMenu() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  //allCourse.find() load dari Supabase
  const courseMeta = COURSE_META.find(c => c.id === courseId);
  const [data, setData] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    loadCourseData(courseId).then((sections) => {
      if (!cancelled) {
        setData(sections);
        setDataLoading(false);
      }
    });
    return () => { cancelled = true; };
  }, [courseId]);

  const [openSections, setOpenSections] = useState([]);
  const [progress, setProgress] = useState({});
  const [selectedDifficulties, setSelectedDifficulties] = useState([]);
  const [showCert, setShowCert] = useState(false);

  //ambil username dari Supabase Auth
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) setCurrentUser(user.email ?? user.id);
    });
  }, []);

  //load progress dari Supabase
  useEffect(() => {
    let cancelled = false;
    const fetchProgress = async () => {
      const data = await loadCourseProgress(courseId);
      if (!cancelled) setProgress(data);
    };
    fetchProgress();
    return () => { cancelled = true; };
  }, [courseId]);

  const toggleSection = (index) => {
    setOpenSections(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const isSectionUnlocked = (secIndex) => {
    if (secIndex === 0) return true;
    const prevSection = data[secIndex - 1];
    return prevSection.items.every((_, i) => progress[`${secIndex - 1}-${i}`]);
  };

  const isItemUnlocked = (secIndex, itemIndex) => {
    if (secIndex === 0 && itemIndex === 0) return true;
    if (itemIndex > 0) return progress[`${secIndex}-${itemIndex - 1}`];
    const prevSection = data[secIndex - 1];
    return prevSection.items.every((_, i) => progress[`${secIndex - 1}-${i}`]);
  };

  const getSectionProgress = (secIndex) => {
    const total = data[secIndex].items.length;
    let done = 0;
    data[secIndex].items.forEach((_, i) => {
      if (progress[`${secIndex}-${i}`]) done++;
    });
    return { done, total, pct: (done / total) * 100 };
  };

  const getTotalProgress = () => {
    let total = 0, done = 0;
    data.forEach((section, secIndex) => {
      total += section.items.length;
      section.items.forEach((_, i) => {
        if (progress[`${secIndex}-${i}`]) done++;
      });
    });
    return { done, total, pct: total > 0 ? (done / total) * 100 : 0 };
  };

  const getSectionStatus = (secIndex) => {
    const { done, total } = getSectionProgress(secIndex);
    if (done === total) return "completed";
    if (done > 0) return "inprogress";
    if (!isSectionUnlocked(secIndex)) return "locked";
    return "notstarted";
  };

  const toggleDifficulty = (diff) => {
    setSelectedDifficulties(prev =>
      prev.includes(diff) ? prev.filter(d => d !== diff) : [...prev, diff]
    );
  };

  const filteredSections = data
    .map((section, secIndex) => {
      if (selectedDifficulties.length === 0) {
        return { section, secIndex, filteredItems: section.items };
      }
      const filteredItems = section.items.filter(item =>
        selectedDifficulties.includes(item.difficulty)
      );
      if (filteredItems.length === 0) return null;
      return { section, secIndex, filteredItems };
    })
    .filter(Boolean);

  const totalProgress = getTotalProgress();
  const completedSections = data.filter((_, i) => getSectionStatus(i) === "completed").length;
  const allDone = completedSections === data.length && data.length > 0;

  const getSectionMeta = (section) => {
    const lessons = section.items.filter(i => i.type === "lesson").length;
    const exercises = section.items.filter(i => i.type === "code" || i.type === "project").length;
    const quizzes = section.items.filter(i => i.type === "quiz").length;
    const parts = [];
    if (lessons > 0) parts.push(`${lessons} Lesson${lessons > 1 ? "s" : ""}`);
    if (exercises > 0) parts.push(`${exercises} Exercise${exercises > 1 ? "s" : ""}`);
    if (quizzes > 0) parts.push(`${quizzes} Quiz${quizzes > 1 ? "zes" : ""}`);
    return parts.join(" • ");
  };

  //reset progress via Supabase
  const handleResetProgress = async () => {
    if (window.confirm("Yakin mau reset progress?")) {
      await resetCourseProgress(courseId);
      setProgress({});
    }
  };

  return (
    <div className="cm-page">
      <main className="cm-main">
        {dataLoading ? (
          <div style={{ textAlign: "center", padding: "4rem", color: "#6b7280" }}>
            ⏳ Memuat data kursus...
          </div>
        ) : (
          <>

        {/* HERO CARD */}
        <div className="cm-hero-card">
          <div className="cm-hero-card-left">

            {/* Breadcrumb */}
            <div className="cm-breadcrumb">
              <button className="cm-breadcrumb-back" onClick={() => navigate("/app")}>←</button>
              <span className="cm-breadcrumb-muted">Courses</span>
              <span className="cm-breadcrumb-sep">/</span>
              <span className="cm-breadcrumb-active">{courseMeta?.title}</span>
            </div>

            <h1 className="cm-hero-title">{courseMeta?.title}</h1>
            <p className="cm-hero-desc">{courseMeta?.description}</p>

            {/* Stats row */}
            <div className="cm-hero-stats">
              <div className="cm-hero-stat">
                <span className="cm-hero-stat-num">{completedSections}</span>
                <span className="cm-hero-stat-label">Selesai</span>
              </div>
              <div className="cm-hero-stat-divider" />
              <div className="cm-hero-stat">
                <span className="cm-hero-stat-num">{data.length - completedSections}</span>
                <span className="cm-hero-stat-label">Tersisa</span>
              </div>
              <div className="cm-hero-stat-divider" />
              <div className="cm-hero-stat">
                <span className="cm-hero-stat-num">{totalProgress.total}</span>
                <span className="cm-hero-stat-label">Total Soal</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="cm-hero-actions">
              {allDone && (
                <button className="cm-btn-primary" onClick={() => setShowCert(true)}>
                  🏆 Claim Certificate
                </button>
              )}
              {/* ─── MIGRASI: pakai handleResetProgress ── */}
              <button className="cm-btn-danger" onClick={handleResetProgress}>
                Reset Progress
              </button>
            </div>
          </div>
          {/* Circular progress */}
          <div className="cm-hero-card-right">
            <CircularProgress pct={totalProgress.pct} />
          </div>
        </div>

        {/* CURRICULUM */}
        <div className="cm-curriculum" id="curriculum">
          <div className="cm-curriculum-header">
            <h2 className="cm-curriculum-title">Course Curriculum</h2>
            {allDone && (
              <span className="cm-all-done-badge">✅ All sections completed</span>
            )}
          </div>

          {/* DIFFICULTY FILTER */}
          <div className="cm-filter-row">
            {DIFFICULTIES.map(diff => (
              <button
                key={diff}
                className={`cm-filter-pill cm-filter-pill--${diff.toLowerCase()} ${selectedDifficulties.includes(diff) ? "active" : ""}`}
                onClick={() => toggleDifficulty(diff)}
              >
                {diff}
              </button>
            ))}
            {selectedDifficulties.length > 0 && (
              <button className="cm-filter-clear" onClick={() => setSelectedDifficulties([])}>
                Clear
              </button>
            )}
          </div>

          <div className="cm-sections">
            {filteredSections.map(({ section, secIndex, filteredItems }) => {
              const status = getSectionStatus(secIndex);
              const { done, total, pct } = getSectionProgress(secIndex);
              const isOpen = openSections.includes(secIndex);
              const unlocked = isSectionUnlocked(secIndex);
              const sectionMeta = getSectionMeta(section);

              return (
                <div key={secIndex} className={`cm-section cm-section--${status}`}>
                  <div
                    className="cm-section-header"
                    onClick={() => unlocked && toggleSection(secIndex)}
                    style={{ cursor: unlocked ? "pointer" : "default" }}
                  >
                    <div className="cm-section-left">
                      <div className={`cm-section-num cm-section-num--${status}`}>
                        {status === "completed" ? (
                          <span className="cm-check">✓</span>
                        ) : (
                          <span>{String(secIndex + 1).padStart(2, "0")}</span>
                        )}
                      </div>
                      <div>
                        <p className="cm-section-name">
                          {section.sectionTitle}
                          {!unlocked && <span className="cm-lock-icon">🔒</span>}
                        </p>
                        <p className="cm-section-meta">
                          {sectionMeta || `${total} Lessons`}
                          {status === "completed" && (
                            <span className="cm-section-meta-done"> • Completed</span>
                          )}
                          {status === "inprogress" && (
                            <span className="cm-section-meta-progress"> • {done}/{total} done</span>
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="cm-section-right">
                      {status === "completed" && (
                        <span className="cm-status-badge cm-status-badge--completed">COMPLETE</span>
                      )}
                      {status === "inprogress" && (
                        <span className="cm-status-badge cm-status-badge--inprogress">IN PROGRESS</span>
                      )}
                      {unlocked && (
                        <span className="cm-chevron">{isOpen ? "▲" : "▼"}</span>
                      )}
                    </div>
                  </div>

                  {/* SECTION PROGRESS BAR */}
                  <div className="cm-section-bar">
                    <div className="cm-section-bar-fill" style={{ width: `${pct}%` }} />
                  </div>

                  {/* ITEMS */}
                  {isOpen && unlocked && (
                    <div className="cm-items">
                      {filteredItems.map((item) => {
                        const itemIndex = section.items.indexOf(item);
                        const itemUnlocked = isItemUnlocked(secIndex, itemIndex);
                        const key = `${secIndex}-${itemIndex}`;
                        const isDone = progress[key];
                        const duration = formatDuration(item.duration);

                        return (
                          <div
                            key={itemIndex}
                            className={`cm-item ${!itemUnlocked ? "cm-item--locked" : ""} ${isDone ? "cm-item--done" : ""}`}
                            onClick={() => {
                              if (itemUnlocked) {
                                navigate(`/${courseId}-course/${secIndex}/${itemIndex}`);
                              }
                            }}
                          >
                            <div className="cm-item-left">
                              <span className={`cm-item-circle ${isDone ? "cm-item-circle--done" : ""}`}>
                                {isDone ? "✓" : ""}
                              </span>
                              <div>
                                <p className={`cm-item-title ${isDone ? "cm-item-title--done" : ""}`}>
                                  {item.title || item.question || item.instruction}
                                </p>
                                <p className="cm-item-type">
                                  {item.type === "lesson" ? "LESSON"
                                    : item.type === "code" ? "EXERCISE"
                                    : item.type === "project" ? "PROJECT"
                                    : "QUIZ"}
                                  <span className={`cm-diff-chip cm-diff-chip--${(item.difficulty || "easy").toLowerCase()}`}>
                                    {item.difficulty || "Easy"}
                                  </span>
                                </p>
                              </div>
                            </div>

                            <div className="cm-item-right">
                              {!itemUnlocked && <span className="cm-item-lock">🔒</span>}
                              {isDone && !duration && (
                                <span className="cm-item-done-text">COMPLETE</span>
                              )}
                              {duration && (
                                <span className={`cm-item-duration ${isDone ? "cm-item-duration--done" : ""}`}>
                                  {duration}
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        </>
        )}
      </main>
      {showCert && (
        <Certificate
          userName={currentUser}
          onClose={() => setShowCert(false)}
        />
      )}
    </div>
  );
}