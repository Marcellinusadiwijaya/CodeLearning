import { useParams, useNavigate } from "react-router-dom";
import { reactCourse } from "../../Data/reactCourse";
import { useState, useEffect } from "react";
import "../CSS/ReactCourse.css";

export default function ReactCourse() {
  const { sectionIndex, itemIndex } = useParams();
  const navigate = useNavigate();

  const secIndex = Number(sectionIndex);
  const itmIndex = Number(itemIndex);

  const section = reactCourse[secIndex];
  const item = section.items[itmIndex];

  const currentUser = localStorage.getItem("currentUser");
  const storageKey = `progress_react_${currentUser}`;

  const [progress, setProgress] = useState(() => {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  });

  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [userCode, setUserCode] = useState("");
  const [preview, setPreview] = useState("");

  // =========================
  // 🔥 SYNC
  // =========================
  useEffect(() => {
    const sync = () => {
      const saved = JSON.parse(localStorage.getItem(storageKey)) || {};
      setProgress(saved);
    };

    window.addEventListener("focus", sync);
    window.addEventListener("storage", sync);

    return () => {
      window.removeEventListener("focus", sync);
      window.removeEventListener("storage", sync);
    };
  }, [storageKey]);

  // =========================
  // 🔒 LOCK SYSTEM
  // =========================
  const isUnlocked = () => {
    if (secIndex === 0 && itmIndex === 0) return true;

    if (itmIndex > 0) {
      return progress[`${secIndex}-${itmIndex - 1}`];
    }

    const prevSection = reactCourse[secIndex - 1];

    return prevSection.items.every((_, i) =>
      progress[`${secIndex - 1}-${i}`]
    );
  };

  useEffect(() => {
    if (!isUnlocked()) {
      navigate("/course/react");
    }
  }, [sectionIndex, itemIndex, progress]);

  // =========================
  // 💾 SAVE
  // =========================
  const saveProgress = () => {
    const key = `${secIndex}-${itmIndex}`;

    if (!progress[key]) {
      const newProgress = { ...progress, [key]: true };
      setProgress(newProgress);
      localStorage.setItem(storageKey, JSON.stringify(newProgress));

      window.dispatchEvent(new Event("storage"));
    }
  };

  // RESET
  useEffect(() => {
    setSelected(null);
    setIsCorrect(null);
    setUserCode("");
    setPreview("");
  }, [sectionIndex, itemIndex]);

  // AUTO SAVE LESSON
  useEffect(() => {
    if (item.type === "lesson") {
      saveProgress();
    }
  }, [sectionIndex, itemIndex]);

  // =========================
  // QUIZ
  // =========================
  const checkAnswer = (index) => {
    setSelected(index);
    const correct = index === item.answer;
    setIsCorrect(correct);

    if (correct) saveProgress();
  };

  // =========================
  // CODE
  // =========================
  const checkCode = () => {
    const cleanUser = userCode.replace(/\s/g, "").toLowerCase();
    const cleanAnswer = item.answer.replace(/\s/g, "").toLowerCase();

    const correct = cleanUser === cleanAnswer;

    setIsCorrect(correct);
    setPreview(userCode);

    if (correct) saveProgress();
  };

  // =========================
  // NEXT
  // =========================
  const goNext = () => {
    const nextItem = itmIndex + 1;

    if (nextItem < section.items.length) {
      navigate(`/react-course/${secIndex}/${nextItem}`);
    } else {
      navigate("/course/react");
    }
  };

  const isLastItem = itmIndex === section.items.length - 1;

  return (
    <div className="react-container">

      {/* LESSON */}
      {item.type === "lesson" && (
        <>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </>
      )}

      {/* QUIZ */}
      {item.type === "quiz" && (
        <>
          <h3>{item.question}</h3>

          <div className="options">
            {item.options.map((opt, i) => {
              let className = "option";

              if (selected === i) {
                className += isCorrect ? " correct" : " wrong";
              }

              return (
                <button
                  key={i}
                  className={className}
                  onClick={() => checkAnswer(i)}
                  disabled={isCorrect === true}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {isCorrect === true && <p className="correct-text">🔥 Benar!</p>}
          {isCorrect === false && <p className="wrong-text">❌ Salah!</p>}
        </>
      )}

      {/* CODE */}
      {item.type === "code" && (
        <>
          <h3>{item.instruction}</h3>

          <textarea
            className="code-input"
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            placeholder={item.answer}
          />

          <button className="check-btn" onClick={checkCode}>
            Check
          </button>

          {isCorrect === true && <p className="correct-text">🔥 Benar!</p>}
          {isCorrect === false && <p className="wrong-text">❌ Salah!</p>}

          {preview && (
            <div className="preview-box">
              <p><strong>Output:</strong></p>
              <div
                className="preview-content"
                dangerouslySetInnerHTML={{ __html: preview }}
              />
            </div>
          )}
        </>
      )}

      {/* NEXT */}
      <div className="next-container">
        <button
          className="next-btn"
          onClick={goNext}
          disabled={
            (item.type === "quiz" || item.type === "code") &&
            isCorrect !== true
          }
        >
          {isLastItem ? "Finish" : "Next"}
        </button>
      </div>

    </div>
  );
} 