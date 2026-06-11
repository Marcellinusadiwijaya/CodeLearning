import { useParams, useNavigate } from "react-router-dom";
import { programmingLogic } from "./ProgrammingLogic";
import { useState, useEffect } from "react";
import "../CSS/ProgrammingLogic.css";

export default function ProgrammingLogic() {
  const { sectionIndex, itemIndex } = useParams();
  const navigate = useNavigate();

  const secIndex = Number(sectionIndex);
  const itmIndex = Number(itemIndex);

  const section = programmingLogic[secIndex];
  const item = section.items[itmIndex];

  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);

  // TEST DETECTION
  const isTestSection = section.sectionTitle === "Final Test";

  // LOAD PROGRESS
  const [progress, setProgress] = useState(() => {
    return JSON.parse(localStorage.getItem("plProgress")) || {};
  });

  // LOCK SYSTEM
  const isUnlocked = () => {
    //TEST SECTION SELALU BOLEH DIAKSES
    if (isTestSection) return true;

    if (secIndex === 0 && itmIndex === 0) return true;

    if (itmIndex > 0) {
      return progress[`${secIndex}-${itmIndex - 1}`];
    }

    const prevSection = programmingLogic[secIndex - 1];

    return prevSection.items.every((_, i) =>
      progress[`${secIndex - 1}-${i}`]
    );
  };

  useEffect(() => {
    if (!isUnlocked()) {
      navigate("/programming-logic-menu");
    }
  }, [sectionIndex, itemIndex]);

  //RESET STATE
  useEffect(() => {
    setSelected(null);
    setIsCorrect(null);
  }, [sectionIndex, itemIndex]);

  //RESET SCORE PAS MASUK TEST
  useEffect(() => {
    if (isTestSection && itmIndex === 0) {
      setScore(0);
    }
  }, [secIndex]);

  //SAVE PROGRESS
  const saveProgress = () => {
    const key = `${secIndex}-${itmIndex}`;

    if (!progress[key]) {
      const newProgress = { ...progress, [key]: true };
      setProgress(newProgress);
      localStorage.setItem("plProgress", JSON.stringify(newProgress));
    }
  };

  const checkAnswer = (i) => {
    setSelected(i);
    const correct = i === item.answer;

    //TEST MODE
    if (isTestSection) {
      if (correct) setScore((prev) => prev + 1);

      setTimeout(() => {
        goNext();
      }, 300);

      return;
    }

    //NORMAL MODE
    setIsCorrect(correct);
    if (correct) saveProgress();
  };

  //AUTO SAVE LESSON
  useEffect(() => {
    if (item.type === "lesson" && !isTestSection) {
      saveProgress();
    }
  }, [sectionIndex, itemIndex]);

  //NEXT BUTTON
  const goNext = () => {
    const nextItem = itmIndex + 1;

    if (nextItem < section.items.length) {
      navigate(`/programming-logic/${secIndex}/${nextItem}`);
    } else {
      //HITUNG NILAI TEST
      if (isTestSection) {
        const total = section.items.filter(i => i.type === "quiz").length;
        const finalScore = Math.round((score / total) * 100);

        localStorage.setItem("plScore", finalScore);

        let level = "beginner";

        if (finalScore > 40 && finalScore <= 70) {
          level = "intermediate";
        } else if (finalScore > 70) {
          level = "expert";
        }

        localStorage.setItem("userLevel", level);

        alert(`🎯 Nilai kamu: ${finalScore}\nLevel: ${level.toUpperCase()}`);
      }

      navigate("/programming-logic-menu");
    }
  };

  const isLastItem = itmIndex === section.items.length - 1;

  return (
    <div className="pl-container">

      {item.type === "lesson" && (
        <>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </>
      )}

      {item.type === "quiz" && (
        <>
          <h3>{item.question}</h3>

          <div className="pl-options">
            {item.options.map((opt, i) => {
              let className = "pl-option";

              if (!isTestSection && selected === i) {
                if (isCorrect) className += " correct";
                else className += " wrong";
              }

              return (
                <button
                  key={i}
                  className={className}
                  onClick={() => checkAnswer(i)}
                  disabled={!isTestSection && isCorrect === true}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {!isTestSection && isCorrect === true && (
            <p className="pl-correct-text">🔥 Benar!</p>
          )}
          {!isTestSection && isCorrect === false && (
            <p className="pl-wrong-text">❌ Salah!</p>
          )}
        </>
      )}

      <button
        className="pl-next-btn"
        onClick={goNext}
        disabled={!isTestSection && item.type === "quiz" && isCorrect !== true}
      >
        {isLastItem ? "Finish" : "Next →"}
      </button>
    </div>
  );
}