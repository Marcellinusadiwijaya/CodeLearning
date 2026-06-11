import { useParams, useNavigate } from "react-router-dom";
import { cCourse } from "./CCourse";
import { useState, useEffect, useRef } from "react";
import "../CSS/CCourse.css";

export default function CCourse() {
  const { sectionIndex, itemIndex } = useParams();
  const navigate = useNavigate();

  const secIndex = Number(sectionIndex);
  const itmIndex = Number(itemIndex);

  const section = cCourse[secIndex];
  const item = section?.items[itmIndex];

  const currentUser = localStorage.getItem("currentUser");
  const storageKey = `progress_c_${currentUser}`;

  const [progress, setProgress] = useState(() =>
    JSON.parse(localStorage.getItem(storageKey)) || {}
  );
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [userCode, setUserCode] = useState("");
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const textareaRef = useRef(null);

  // Progress
  const totalItems = cCourse.reduce((s, sec) => s + sec.items.length, 0);
  const doneItems = Object.keys(progress).length;
  const progressPct = Math.round((doneItems / totalItems) * 100);

  let globalIndex = 0;
  for (let s = 0; s < secIndex; s++) globalIndex += cCourse[s].items.length;
  globalIndex += itmIndex + 1;

  // Sync progress
  useEffect(() => {
    const sync = () =>
      setProgress(JSON.parse(localStorage.getItem(storageKey)) || {});
    window.addEventListener("focus", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("focus", sync);
      window.removeEventListener("storage", sync);
    };
  }, [storageKey]);

  // Unlock logic
  const isUnlocked = () => {
    if (secIndex === 0 && itmIndex === 0) return true;
    if (itmIndex > 0) return !!progress[`${secIndex}-${itmIndex - 1}`];
    const prev = cCourse[secIndex - 1];
    return prev?.items.every((_, i) => progress[`${secIndex - 1}-${i}`]);
  };

  useEffect(() => {
    if (!isUnlocked()) navigate("/course/c");
  }, [sectionIndex, itemIndex, progress]);

  // Reset state
  useEffect(() => {
    setSelected(null);
    setIsCorrect(null);
    setUserCode("");
    setOutput(null);
  }, [sectionIndex, itemIndex]);

  // Auto save lesson
  useEffect(() => {
    if (item?.type === "lesson") saveProgress();
  }, [sectionIndex, itemIndex]);

  const saveProgress = () => {
    const key = `${secIndex}-${itmIndex}`;
    if (!progress[key]) {
      const next = { ...progress, [key]: true };
      setProgress(next);
      localStorage.setItem(storageKey, JSON.stringify(next));
      window.dispatchEvent(new Event("storage"));
    }
  };

  // Quiz
  const checkAnswer = (i) => {
    if (isCorrect === true) return;
    setSelected(i);
    const correct = i === item.answer;
    setIsCorrect(correct);
    if (correct) saveProgress();
  };

  // Run (dummy)
  const runCode = () => {
    if (!userCode.trim()) {
      setOutput({ type: "error", message: "Kode kosong." });
      return;
    }

    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setOutput({
        type: "success",
        message:
          "✓ Program dijalankan (simulasi C)\n\n(Output tidak benar-benar dikompilasi)",
      });
    }, 700);
  };

  // Submit
  const submitCode = () => {
    if (!userCode.trim()) {
      setOutput({ type: "error", message: "Kode kosong." });
      return;
    }

    const correct = userCode.includes(item.expectedKeyword || "");
    setIsCorrect(correct);

    if (correct) {
      saveProgress();
      setOutput({ type: "success", message: "✓ Jawaban benar!" });
    } else {
      setOutput({ type: "error", message: "✗ Jawaban belum sesuai." });
    }
  };

  const goNext = () => {
    const next = itmIndex + 1;
    if (next < section.items.length)
      navigate(`/c-course/${secIndex}/${next}`);
    else navigate("/course/c");
  };

  const isLastItem = itmIndex === section.items.length - 1;
  const isDone = !!progress[`${secIndex}-${itmIndex}`];
  const canProceed =
    item?.type === "lesson" || isCorrect === true || isDone;

  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const s = e.target.selectionStart;
      const en = e.target.selectionEnd;
      const v =
        userCode.substring(0, s) + "    " + userCode.substring(en);
      setUserCode(v);
      setTimeout(() => {
        textareaRef.current.selectionStart =
          textareaRef.current.selectionEnd = s + 4;
      }, 0);
    }
  };

  if (!item) return null;

  return (
    <div className="cc-page">

      {/* TOP BAR */}
      <header className="cc-topbar">
        <div className="cc-topbar-left">
          <button
            className="cc-back-link"
            onClick={() => navigate("/course/c")}
          >
            ← Courses
          </button>
          <span className="cc-topbar-sep">›</span>
          <span className="cc-topbar-title">C</span>
          <span className="cc-topbar-sep">›</span>
          <span className="cc-topbar-section">
            {section.sectionTitle}
          </span>
        </div>

        <div className="cc-progress-wrap">
          <div className="cc-progress-bar">
            <div
              className="cc-progress-fill"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <span className="cc-progress-label">{progressPct}%</span>
        </div>

        <div className="cc-lesson-counter">
          {globalIndex} / {totalItems}
        </div>
      </header>

      <div className="cc-split">

        {/* LEFT */}
        <div className="cc-left">

          {/* LESSON */}
          {item.type === "lesson" && (
            <>
              <div className="cc-breadcrumb">Lesson</div>
              <h1 className="cc-heading">{item.title}</h1>
              <div className="cc-lesson-body">{item.content}</div>
            </>
          )}

          {/* QUIZ */}
          {item.type === "quiz" && (
            <>
              <h1 className="cc-heading">Quiz</h1>
              <p className="cc-question">{item.question}</p>

              <div className="cc-options">
                {item.options.map((opt, i) => {
                  let className = "cc-option";

                  if (selected !== null) {
                    if (i === item.answer)
                      className += " cc-option--correct";
                    else if (i === selected)
                      className += " cc-option--wrong";
                  }

                  return (
                    <button
                      key={i}
                      className={className}
                      onClick={() => checkAnswer(i)}
                      disabled={selected !== null}
                    >
                      <span className="cc-option-letter">
                        {String.fromCharCode(65 + i)}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {/* CODE */}
          {item.type === "code" && (
            <>
              <h1 className="cc-heading">Exercise</h1>
              <div className="cc-goal-box">
                <div className="cc-goal-title">Goal</div>
                <div className="cc-goal-text">{item.instruction}</div>
              </div>
            </>
          )}

          <div className="cc-next-wrap">
            <button
              className="cc-next-btn"
              onClick={goNext}
              disabled={!canProceed}
            >
              {isLastItem ? "Finish" : "Next"}
            </button>
          </div>
        </div>

        {/* RIGHT */}
        {item.type === "code" && (
          <div className="cc-right">

            <textarea
              ref={textareaRef}
              className="cc-editor"
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="// Tulis kode C di sini..."
            />

            <div className="cc-submit-wrap">
              <button
                className="cc-run-btn"
                onClick={runCode}
                disabled={isRunning}
              >
                {isRunning ? "Running..." : "Run"}
              </button>

              <button
                className="cc-submit-btn"
                onClick={submitCode}
              >
                Submit
              </button>
            </div>

            {output && (
              <div className={`cc-output cc-output--${output.type}`}>
                <div className="cc-output-body">
                  <pre>{output.message}</pre>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}