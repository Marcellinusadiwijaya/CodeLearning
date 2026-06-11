import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { programmingLogic } from "./programmingLogic";
import "../CSS/CourseMenu.css";

export default function ProgrammingLogicMenu() {
  const [openSections, setOpenSections] = useState([]);
  const [progress, setProgress] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const loadProgress = () => {
      const saved = JSON.parse(localStorage.getItem("plProgress")) || {};
      setProgress(saved);
    };

    loadProgress();
    window.addEventListener("focus", loadProgress);

    return () => window.removeEventListener("focus", loadProgress);
  }, []);

  const toggleSection = (index) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter(i => i !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };

  // GLOBAL PROGRESS (SKIP FINAL TEST)
  const getTotalProgress = () => {
    let totalItems = 0;
    let doneItems = 0;

    programmingLogic.forEach((section, secIndex) => {
      if (section.sectionTitle === "Final Test") return;

      section.items.forEach((_, itemIndex) => {
        totalItems++;
        if (progress[`${secIndex}-${itemIndex}`]) {
          doneItems++;
        }
      });
    });

    return totalItems === 0 ? 0 : (doneItems / totalItems) * 100;
  };

  const isSectionUnlocked = (secIndex) => {
    if (secIndex === 0) return true;

    const prevSection = programmingLogic[secIndex - 1];

    return prevSection.items.every((_, i) =>
      progress[`${secIndex - 1}-${i}`]
    );
  };

  const isItemUnlocked = (secIndex, itemIndex) => {
    if (secIndex === 0 && itemIndex === 0) return true;

    if (itemIndex > 0) {
      return progress[`${secIndex}-${itemIndex - 1}`];
    }

    const prevSection = programmingLogic[secIndex - 1];

    return prevSection.items.every((_, i) =>
      progress[`${secIndex - 1}-${i}`]
    );
  };

  // SECTION PROGRESS
  const getSectionProgress = (secIndex) => {
    const section = programmingLogic[secIndex];

    if (section.sectionTitle === "Final Test") return 0;

    const total = section.items.length;
    let done = 0;

    section.items.forEach((_, itemIndex) => {
      if (progress[`${secIndex}-${itemIndex}`]) done++;
    });

    return total === 0 ? 0 : (done / total) * 100;
  };

  const totalProgress = getTotalProgress();

  return (
    <div className="menu-container">

      {/* HEADER */}
      <div className="course-header">
        <h2>Introduction to Programming Logic</h2>
        <p>Belajar dasar pemrograman logika dari nol sampai bisa.</p>

        <button
          className="reset-btn"
          onClick={() => {
            const confirmReset = window.confirm("Yakin mau reset progress?");
            if (confirmReset) {
              localStorage.removeItem("plProgress");
              setProgress({});
            }
          }}
        >
          🔄 Reset Progress
        </button>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${totalProgress}%` }}
          />
        </div>
      </div>

      {/* SECTION LIST */}
      {programmingLogic.map((section, secIndex) => {
        const unlocked = isSectionUnlocked(secIndex);

        return (
          <div key={secIndex} className="section-card">

            <div
              className={`section-title ${!unlocked ? "locked" : ""}`}
              onClick={() => {
                if (unlocked) toggleSection(secIndex);
              }}
            >
              <span>
                {section.sectionTitle} {!unlocked && "🔒"}
              </span>
              <span>
                {unlocked
                  ? openSections.includes(secIndex) ? "▲" : "▼"
                  : ""}
              </span>
            </div>

            <div className="progress-bar small">
              <div
                className="progress-fill"
                style={{ width: `${getSectionProgress(secIndex)}%` }}
              />
            </div>

            {openSections.includes(secIndex) && unlocked && (
              <div className="section-items">
                {section.items.map((item, itemIndex) => {
                  const unlockedItem = isItemUnlocked(secIndex, itemIndex);
                  const done = progress[`${secIndex}-${itemIndex}`];

                  return (
                    <div
                      key={itemIndex}
                      className={`menu-item ${!unlockedItem ? "locked" : ""}`}
                      onClick={() => {
                        if (unlockedItem) {
                          navigate(`/programming-logic/${secIndex}/${itemIndex}`);
                        }
                      }}
                    >
                      {section.sectionTitle === "Final Test"
                        ? "🧪"
                        : item.type === "lesson"
                        ? "📘"
                        : "❓"}{" "}

                      {item.title || item.question}

                      {done && <span className="check">✔</span>}
                      {!unlockedItem && <span> 🔒</span>}
                    </div>
                  );
                })}
              </div>
            )}

          </div>
        );
      })}

      {/* 🔥 BACK BUTTON (MUNCUL HANYA SAAT 100%) */}
      {totalProgress === 100 && (
        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <button
            className="next-btn"
            onClick={() => navigate("/app")}
          >
            🎉 Finish & Back to Home
          </button>
        </div>
      )}

    </div>
  );
}