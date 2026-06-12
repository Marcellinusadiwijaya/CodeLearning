import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "../CSS/PythonCourse.css";
// ─── MIGRASI: import fungsi Supabase ──────────────────────────────────────────
import { loadCourseProgress, saveCourseProgress } from "../Data/progressService";
// ─── BARU: load data soal dari Supabase (ganti import pythonCourse) ───────────
import { loadCourseData } from "../Data/courseService";

//Pyodide Singleton
let pyodideInstance = null;
let pyodideLoading = null;

const loadPyodide = async () => {
  if (pyodideInstance) return pyodideInstance;
  if (pyodideLoading) return pyodideLoading;

  pyodideLoading = (async () => {
    pyodideInstance = await window.loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/",
    });
    return pyodideInstance;
  })();

  return pyodideLoading;
};

//Hitung jumlah input() di kode user
const countInputCalls = (code) => {
  const matches = code.match(/\binput\s*\(/g);
  return matches ? matches.length : 0;
};


//Run via Pyodide dengan inputs array
const runWithPyodide = async (userCode, inputs = []) => {
  const pyodide = await loadPyodide();

  const inputList = JSON.stringify(inputs);
  const wrappedCode = `
import sys
from io import StringIO

_captured_output = StringIO()
_input_values = ${inputList}
_input_index = [0]

def _mock_input(prompt=""):
    if _input_index[0] < len(_input_values):
        val = _input_values[_input_index[0]]
        _input_index[0] += 1
        return val
    raise EOFError("__NO_MORE_INPUT__")

import builtins
builtins.input = _mock_input

sys.stdout = _captured_output

try:
${userCode
  .split("\n")
  .map((l) => "    " + l)
  .join("\n")}
except Exception as e:
    sys.stdout = sys.__stdout__
    raise e

sys.stdout = sys.__stdout__
_captured_output.getvalue()
`;

  try {
    const result = await pyodide.runPythonAsync(wrappedCode);
    return { stdout: result ?? "", stderr: "" };
  } catch (err) {
    return { stdout: "", stderr: String(err) };
  }
};

//Component CoursePage untuk semua materi Python, dengan routing dinamis berdasarkan sectionIndex & itemIndex
export default function PythonCourse() {
  const { sectionIndex, itemIndex } = useParams();
  const navigate = useNavigate();

  const secIndex = Number(sectionIndex);
  const itmIndex = Number(itemIndex);

  //State untuk data kursus dari Supabase
  const [courseData, setCourseData] = useState([]);
  const [courseLoaded, setCourseLoaded] = useState(false);

  const section = courseData[secIndex];
  const item = section?.items[itmIndex];

  //hapus localStorage, ganti dengan state kosong dulu
  const [progress, setProgress] = useState({});
  const progressRef = useRef({}); //menyimpan nilai progress terbaru (hindari stale closure)
  const [progressLoaded, setProgressLoaded] = useState(false); // flag agar lock-check tidak prematur

  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [userCode, setUserCode] = useState("");
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [testResults, setTestResults] = useState(null);
  const [pyodideReady, setPyodideReady] = useState(false);
  const textareaRef = useRef(null);

  // Interactive input state
  const [waitingForInputs, setWaitingForInputs] = useState(false);
  const [inputCount, setInputCount] = useState(0);
  const [inputValues, setInputValues] = useState([]);
  const inputRefs = useRef([]);
  const pendingCodeRef = useRef("");

  // Preload Pyodide
  useEffect(() => {
    loadPyodide()
      .then(() => setPyodideReady(true))
      .catch((e) => console.error("Pyodide load failed:", e));
  }, []);

  //Load data kursus dari Supabase saat komponen mount
  useEffect(() => {
    let cancelled = false;
    const fetchCourse = async () => {
      const data = await loadCourseData("python");
      if (!cancelled) {
        setCourseData(data);
        setCourseLoaded(true);
      }
    };
    fetchCourse();
    return () => { cancelled = true; };
  }, []);

  //Load progress dari Supabase saat komponen mount
  useEffect(() => {
    let cancelled = false;
    const fetchProgress = async () => {
      const data = await loadCourseProgress("python");
      if (!cancelled) {
        progressRef.current = data; //sync ref sebelum state agar saveProgress tidak stale
        setProgress(data);
        setProgressLoaded(true);
      }
    };
    fetchProgress();
    return () => { cancelled = true; };
  }, []);

  //Progress counters 
  const totalItems = courseData.reduce((s, sec) => s + sec.items.length, 0);
  const doneItems = Object.keys(progress).length;
  const progressPct = totalItems > 0 ? Math.round((doneItems / totalItems) * 100) : 0;

  let globalIndex = 0;
  for (let s = 0; s < secIndex; s++) globalIndex += (courseData[s]?.items.length ?? 0);
  globalIndex += itmIndex + 1;

  //Lock check berdasarkan progress dari Supabase
  const isUnlocked = () => {
    if (secIndex === 0 && itmIndex === 0) return true;
    if (itmIndex > 0) return !!progress[`${secIndex}-${itmIndex - 1}`];
    const prev = courseData[secIndex - 1];
    return prev?.items.every((_, i) => progress[`${secIndex - 1}-${i}`]);
  };

  useEffect(() => {
    // Tunggu sampai progress DAN data kursus selesai dimuat sebelum cek lock
    if (!progressLoaded || !courseLoaded) return;
    if (!isUnlocked()) navigate("/course/python");
  }, [sectionIndex, itemIndex, progressLoaded, courseLoaded, progress]);

  //Reset state on item change
  useEffect(() => {
    setSelected(null);
    setIsCorrect(null);
    setUserCode("");
    setOutput(null);
    setShowHint(false);
    setTestResults(null);
    setWaitingForInputs(false);
    setInputCount(0);
    setInputValues([]);
  }, [sectionIndex, itemIndex]);

  //Auto-focus input pertama saat panel muncul 
  useEffect(() => {
    if (waitingForInputs && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [waitingForInputs]);

  //Auto-save lesson
  useEffect(() => {
    if (!progressLoaded) return; // tunggu progress dari Supabase selesai dimuat
    if (item?.type === "lesson") saveProgress();
  }, [sectionIndex, itemIndex, progressLoaded]);

  //saveProgress menulis ke Supabase
  const saveProgress = async () => {
    const key = `${secIndex}-${itmIndex}`;
    if (!progressRef.current[key]) {
      const next = { ...progressRef.current, [key]: true };
      progressRef.current = next;
      setProgress(next);
      const allDone = Object.keys(next).length === totalItems;
      await saveCourseProgress("python", next, allDone);
    }
  };

  //Quiz answer check
  const checkAnswer = (i) => {
    if (isCorrect === true) return;
    setSelected(i);
    const correct = i === item.answer;
    setIsCorrect(correct);
    if (correct) saveProgress();
  };

  //Eksekusi kode setelah semua input terkumpul
  const executeWithInputs = async (inputs) => {
    setWaitingForInputs(false);
    setIsRunning(true);
    try {
      const { stdout, stderr } = await runWithPyodide(pendingCodeRef.current, inputs);
      if (stderr) {
        setOutput({ type: "error", message: `→ python3 main.py\n\n❌ Error:\n${stderr}` });
      } else {
        setOutput({
          type: "info",
          message: `→ python3 main.py\n\nOutput:\n${stdout || "(no output)"}`,
        });
      }
    } catch (err) {
      setOutput({ type: "error", message: `Runtime Error: ${err}` });
    } finally {
      setIsRunning(false);
    }
  };

  //Submit semua input sekaligus 
  const handleRunWithInputs = () => {
    executeWithInputs(inputValues);
  };

  //Enter pada input terakhir = submit, lainnya = pindah fokus
  const handleInputKeyDown = (e, index) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (index < inputValues.length - 1) {
        inputRefs.current[index + 1]?.focus();
      } else {
        handleRunWithInputs();
      }
    }
  };

  //Run Code 
  const runCode = async () => {
    if (!userCode.trim()) {
      setOutput({ type: "error", message: "Error: Kode kosong." });
      return;
    }
    if (!pyodideReady) {
      setOutput({ type: "error", message: "⏳ Pyodide masih loading, coba lagi sebentar..." });
      return;
    }

    setOutput(null);
    setTestResults(null);
    setWaitingForInputs(false);
    setInputValues([]);
    setInputCount(0);

    const detectedInputCount = countInputCalls(userCode);

    //LANGKAH 1: Kalau ada input() → dry-run dulu untuk deteksi error dan jumlah input()
    if (detectedInputCount > 0) {
      setIsRunning(true);
      const { stderr } = await runWithPyodide(userCode, []);
      setIsRunning(false);

      const isEOF = stderr && stderr.includes("__NO_MORE_INPUT__");
      if (stderr && !isEOF) {
        setOutput({ type: "error", message: `→ python3 main.py\n\n❌ Error:\n${stderr}` });
        return;
      }

      pendingCodeRef.current = userCode;
      setInputCount(detectedInputCount);
      setInputValues(Array(detectedInputCount).fill(""));
      setWaitingForInputs(true);
      setOutput({
        type: "info",
        message: `→ python3 main.py\n\nProgram membutuhkan ${detectedInputCount} input:`,
      });
      return;
    }

    //LANGKAH 2: Tidak ada input() → langsung jalankan 
    setIsRunning(true);
    try {
      const { stdout, stderr } = await runWithPyodide(userCode, []);
      if (stderr) {
        setOutput({ type: "error", message: `→ python3 main.py\n\n❌ Error:\n${stderr}` });
      } else {
        setOutput({
          type: "info",
          message: `→ python3 main.py\n\nOutput:\n${stdout || "(no output)"}`,
        });
      }
    } catch (err) {
      setOutput({ type: "error", message: `Runtime Error: ${err}` });
    } finally {
      setIsRunning(false);
    }
  };

  //Run Test Cases via Pyodide 
  const runTestCases = async (cases) => {
    const results = [];
    for (let idx = 0; idx < cases.length; idx++) {
      const tc = cases[idx];
      try {
        const inputs = tc.inputs || [];
        const { stdout, stderr } = await runWithPyodide(userCode, inputs);

        if (stderr) {
          results.push({
            index: idx + 1,
            pass: false,
            got: `Error: ${stderr}`,
            expected: tc.expected,
            input: inputs.length ? inputs.join(", ") : "(no input)",
            isError: true,
          });
          continue;
        }

        const got = stdout.trimEnd();
        const expected = (tc.expected || "").trimEnd();
        const pass = got === expected;

        results.push({
          index: idx + 1,
          pass,
          got,
          expected,
          input: inputs.length ? inputs.join(", ") : tc.label || "(no input)",
        });
      } catch (err) {
        results.push({
          index: idx + 1,
          pass: false,
          got: `Error: ${err.message}`,
          expected: tc.expected,
          input: tc.inputs?.join(", ") || "(error)",
          isError: true,
        });
      }
    }
    return results;
  };

  //Submit Code
  const submitCode = async () => {
    if (!userCode.trim()) {
      setOutput({ type: "error", message: "Error: Kode kosong." });
      return;
    }
    if (!pyodideReady) {
      setOutput({ type: "error", message: "⏳ Pyodide masih loading, coba lagi sebentar..." });
      return;
    }

    setIsSubmitting(true);
    setOutput(null);
    setTestResults(null);
    setWaitingForInputs(false);

    try {
      if (item.testCases && item.testCases.length > 0) {
        const results = await runTestCases(item.testCases);
        setTestResults(results);

        const allPass = results.every((r) => r.pass);
        setIsCorrect(allPass);
        if (allPass) {
          saveProgress();
          setOutput({
            type: "success",
            message: `✓ Semua ${results.length} test case lulus! 🎉`,
          });
        } else {
          const failed = results.filter((r) => !r.pass).length;
          setOutput({
            type: "error",
            message: `✗ ${failed} dari ${results.length} test case gagal.`,
          });
        }
      } else {
        const sampleInputs = item.sampleInputLines || [];
        const { stdout, stderr } = await runWithPyodide(userCode, sampleInputs);

        if (stderr) {
          setIsCorrect(false);
          setOutput({ type: "error", message: `❌ Error:\n${stderr}` });
          return;
        }

        const got = stdout.trimEnd();
        const expected = (item.sampleOutput || "").trim();
        const correct = got === expected;
        setIsCorrect(correct);

        if (correct) {
          saveProgress();
          setOutput({
            type: "success",
            message: `→ python3 main.py\n✓ Jawaban benar!\n\nOutput:\n${got}`,
          });
        } else {
          setOutput({
            type: "error",
            message: `→ python3 main.py\n\nOutput:\n${got || "(no output)"}\n\n✗ Output tidak sesuai.\n  Expected: "${expected}"\n  Got:      "${got}"`,
          });
        }
      }
    } catch (err) {
      setOutput({ type: "error", message: `Runtime Error: ${err}` });
    } finally {
      setIsSubmitting(false);
    }
  };

  //Navigation
  const goNext = () => {
    const next = itmIndex + 1;
    if (next < section.items.length) 
    {
      console.log(`Masuk Ke If`);
      navigate(`/python-course/${secIndex}/${next}`);
    } else {
      console.log(`Masuk Ke Else`);
      navigate("/course/python");
    }
  };

  //Tab key in textarea
  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const s = e.target.selectionStart,
        en = e.target.selectionEnd;
      const v = userCode.substring(0, s) + "    " + userCode.substring(en);
      setUserCode(v);
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = s + 4;
        }
      }, 0);
    }
  };

  const formatContent = (text) =>
    text.split("\n").map((line, i) => (
      <span key={i}>
        {line}
        <br />
      </span>
    ));

  const diffColor = {
    Easy: "pc-diff--easy",
    Medium: "pc-diff--medium",
    Hard: "pc-diff--hard",
  };

  //Loading state — tunggu data kursus selesai dimuat
  if (!courseLoaded) {
    return (
      <div className="pc-page">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: "2rem" }}>⏳</div>
          <p style={{ color: "#94a3b8", fontSize: "1rem" }}>Memuat materi kursus...</p>
        </div>
      </div>
    );
  }

  //Guard jika item tidak ditemukan
  if (!section || !item) {
    return (
      <div className="pc-page">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", flexDirection: "column", gap: "16px" }}>
          <p style={{ color: "#ef4444" }}>Materi tidak ditemukan.</p>
          <button
            onClick={() => navigate("/course/python")}
            style={{ padding: "8px 16px", borderRadius: "8px", background: "#3b82f6", color: "white", border: "none", cursor: "pointer" }}
          >
            ← Kembali ke Course
          </button>
        </div>
      </div>
    );
  }

  //Deklarasi ini aman karena section & item sudah dicek di atas
  const isLastItem = itmIndex === section.items.length - 1;
  const isDone = !!progress[`${secIndex}-${itmIndex}`];
  const canProceed =
    item.type === "lesson" ||
    isCorrect === true ||
    (isDone && isCorrect !== false);

  //Test Case Panel
  const TestCasePanel = () => {
    if (!testResults) return null;
    const passed = testResults.filter((r) => r.pass).length;
    const total = testResults.length;

    return (
      <div className="pc-testcase-panel">
        <div className="pc-testcase-header">
          <span className="pc-testcase-title">🧪 Test Cases</span>
          <span
            className={`pc-testcase-score ${
              passed === total
                ? "pc-testcase-score--all"
                : "pc-testcase-score--partial"
            }`}
          >
            {passed} / {total} passed
          </span>
        </div>
        <div className="pc-testcase-list">
          {testResults.map((r) => (
            <div
              key={r.index}
              className={`pc-testcase-item ${
                r.pass ? "pc-testcase-item--pass" : "pc-testcase-item--fail"
              }`}
            >
              <div className="pc-testcase-row">
                <span className="pc-testcase-icon">{r.pass ? "✅" : "❌"}</span>
                <span className="pc-testcase-label">Test case {r.index}</span>
                <span className="pc-testcase-input">{r.input}</span>
              </div>
              {!r.pass && (
                <div className="pc-testcase-diff">
                  <div className="pc-testcase-expected">
                    <span className="pc-diff-label">Expected</span>
                    <code>{r.expected || "(empty)"}</code>
                  </div>
                  <div className="pc-testcase-got">
                    <span className="pc-diff-label">Got</span>
                    <code>{r.got || "(no output)"}</code>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  //Pyodide Status Indicator
  const PyodideStatus = () =>
    !pyodideReady ? (
      <div className="pc-pyodide-status pc-pyodide-status--loading">
        <span className="pc-pyodide-spinner" />
        Loading Python engine...
      </div>
    ) : null;

  //Interactive Input Panel
  const InteractiveInputPanel = () => {
    if (!waitingForInputs) return null;

    const collectAndRun = () => {
      const values = inputRefs.current.map((ref) => ref?.value ?? "");
      executeWithInputs(values);
    };

    const onKeyDown = (e, index) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (index < inputValues.length - 1) {
          inputRefs.current[index + 1]?.focus();
        } else {
          collectAndRun();
        }
      }
    };

    return (
      <div className="pc-input-panel">
        <div className="pc-input-panel-header">
          <div className="pc-input-panel-title-wrap">
            <span className="pc-input-panel-dot" />
            <span className="pc-input-panel-title">PROGRAM INPUT</span>
          </div>
          <span className="pc-input-panel-hint">
            Enter ↵ untuk pindah • Enter ↵ di input terakhir untuk Run
          </span>
        </div>

        <div className="pc-input-fields">
          {inputValues.map((_, i) => (
            <div key={i} className="pc-input-row">
              <span className="pc-input-label">Input {i + 1}</span>
              <input
                ref={(el) => (inputRefs.current[i] = el)}
                type="text"
                className="pc-input-field"
                defaultValue=""
                onKeyDown={(e) => onKeyDown(e, i)}
                placeholder={`Masukkan input ${i + 1}...`}
                autoComplete="off"
              />
            </div>
          ))}
        </div>

        <div className="pc-input-actions">
          <button
            className="pc-input-cancel-btn"
            onClick={() => {
              setWaitingForInputs(false);
              setOutput(null);
              setInputValues([]);
            }}
          >
            Batal
          </button>
          <button
            className="pc-input-run-btn"
            onClick={collectAndRun}
            disabled={isRunning}
          >
            {isRunning ? "⏳ Running..." : "▶ Jalankan"}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="pc-page">
      {/* ── TOP BAR ── */}
      <header className="pc-topbar">
        <div className="pc-topbar-left">
          <button
            className="pc-back-link"
            onClick={() => navigate("/course/python")}
          >
            ← Courses
          </button>
          <span className="pc-topbar-sep">›</span>
          <span className="pc-topbar-title">Python</span>
          <span className="pc-topbar-sep">›</span>
          <span className="pc-topbar-section">{section.sectionTitle}</span>
        </div>
        <div className="pc-progress-wrap">
          <div className="pc-progress-bar">
            <div
              className="pc-progress-fill"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <span className="pc-progress-label">{progressPct}%</span>
        </div>
        <div className="pc-topbar-right">
          <span className="pc-lesson-counter">
            {globalIndex} / {totalItems}
          </span>
        </div>
      </header>

      {/* ── SPLIT BODY ── */}
      <div className="pc-split">
        {/* ════════════════ LEFT PANEL ════════════════ */}
        <div className="pc-left">
          <p className="pc-breadcrumb">
            {item.type === "lesson" && " Lesson"}
            {item.type === "quiz" && " Quiz"}
            {item.type === "code" && " Exercise"}
            {item.type === "project" && " Project"}{" "}
            {secIndex + 1}.{itmIndex + 1}
          </p>

          {/* ── LESSON ── */}
          {item.type === "lesson" && (
            <>
              <h1 className="pc-heading">{item.title}</h1>
              <div className="pc-lesson-body">
                {formatContent(item.content)}
              </div>
              <div className="pc-tip-box">
                <span className="pc-tip-icon">💡</span>
                <div>
                  <p className="pc-tip-label">PRO TIP</p>
                  <p className="pc-tip-text">
                    Baca materi ini dengan seksama sebelum melanjutkan ke
                    latihan.
                  </p>
                </div>
              </div>
            </>
          )}

          {/* ── QUIZ ── */}
          {item.type === "quiz" && (
            <>
              <h1 className="pc-heading">Quiz</h1>
              <p className="pc-question">{item.question}</p>
              <div className="pc-options">
                {item.options.map((opt, i) => {
                  let cls = "pc-option";
                  if (selected === i)
                    cls += isCorrect
                      ? " pc-option--correct"
                      : " pc-option--wrong";
                  else if (isCorrect === true && i === item.answer)
                    cls += " pc-option--correct";
                  return (
                    <button
                      key={i}
                      className={cls}
                      onClick={() => checkAnswer(i)}
                      disabled={isCorrect === true}
                    >
                      <span className="pc-option-letter">
                        {String.fromCharCode(65 + i)}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>
              {isCorrect === true && (
                <div className="pc-feedback pc-feedback--correct">
                  🔥 Benar! Lanjutkan.
                </div>
              )}
              {isCorrect === false && (
                <div className="pc-feedback pc-feedback--wrong">
                  ❌ Salah, coba lagi!
                </div>
              )}
            </>
          )}

          {/* ── CODE ── */}
          {item.type === "code" && (
            <>
              <h1 className="pc-heading">Exercise</h1>
              <div className="pc-goal-box">
                <h3 className="pc-goal-title">🎯 Goal</h3>
                <p className="pc-goal-text">{item.instruction}</p>
              </div>
              <div className="pc-steps">
                <p className="pc-steps-title">✅ Steps to complete:</p>
                <ol className="pc-steps-list">
                  {item.constraints?.map((c, i) => <li key={i}>{c}</li>)}
                </ol>
              </div>
              {item.sampleInput && (
                <div className="pc-sample-box">
                  <p className="pc-sample-label">Sample Input</p>
                  <pre className="pc-sample-code">{item.sampleInput}</pre>
                </div>
              )}
              <div className="pc-sample-box">
                <p className="pc-sample-label">Sample Output</p>
                <pre className="pc-sample-code">{item.sampleOutput}</pre>
              </div>
              {isCorrect === true && (
                <div className="pc-feedback pc-feedback--correct">
                  🔥 Benar! Kode sudah tepat.
                </div>
              )}
              {isCorrect === false && (
                <div className="pc-feedback pc-feedback--wrong">
                  ❌ Belum sesuai. Cek output di editor.
                </div>
              )}
            </>
          )}

          {/* ── PROJECT ── */}
          {item.type === "project" && (
            <>
              <div className="pc-project-header">
                <h1 className="pc-heading">{item.title}</h1>
                <span
                  className={`pc-diff-badge ${diffColor[item.difficulty]}`}
                >
                  {item.difficulty}
                </span>
              </div>

              <div className="pc-task-section">
                <p className="pc-task-label">Task</p>
                <div className="pc-task-body">
                  {formatContent(item.description)}
                </div>
              </div>

              <div className="pc-task-section">
                <p className="pc-task-label">Input Format</p>
                <p className="pc-task-text">{item.inputFormat}</p>
              </div>

              <div className="pc-task-section">
                <p className="pc-task-label">Constraints</p>
                <ul className="pc-constraints">
                  {item.constraints.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>

              <div className="pc-sample-row">
                <div className="pc-sample-box">
                  <p className="pc-sample-label">Sample Input</p>
                  <pre className="pc-sample-code">{item.sampleInput}</pre>
                </div>
                <div className="pc-sample-box">
                  <p className="pc-sample-label">Sample Output</p>
                  <pre className="pc-sample-code">{item.sampleOutput}</pre>
                </div>
              </div>

              <button
                className="pc-hint-btn"
                onClick={() => setShowHint((h) => !h)}
              >
                💡 {showHint ? "Sembunyikan Hint" : "Tampilkan Hint"}
              </button>
              {showHint && <div className="pc-hint-box">{item.hint}</div>}

              {isCorrect === true && (
                <div className="pc-feedback pc-feedback--correct">
                  🔥 Benar! Project selesai.
                </div>
              )}
              {isCorrect === false && (
                <div className="pc-feedback pc-feedback--wrong">
                  ❌ Output belum sesuai. Periksa logika kamu.
                </div>
              )}
            </>
          )}

          {/* ── NEXT BUTTON (lesson & quiz only) ── */}
          {(item.type === "lesson" || item.type === "quiz") && (
            <div className="pc-next-wrap">
              <button
                className="pc-next-btn"
                onClick={goNext}
                disabled={!canProceed}
              >
                {isLastItem ? "Finish Section →" : "Next →"}
              </button>
            </div>
          )}
        </div>

        {/* ════════════════ RIGHT PANEL ════════════════ */}

        {/* Code editor — for code & project */}
        {(item.type === "code" || item.type === "project") && (
          <div className="pc-right">
            <PyodideStatus />

            {/* Editor header */}
            <div className="pc-editor-header">
              <div className="pc-editor-tabs">
                <span className="pc-editor-tab pc-editor-tab--active">
                  📄 main.py
                  {userCode && (
                    <span className="pc-edited-badge">EDITED</span>
                  )}
                </span>
              </div>
              <div className="pc-editor-actions">
                <button
                  className="pc-reset-code-btn"
                  onClick={() => {
                    setUserCode("");
                    setOutput(null);
                    setIsCorrect(null);
                    setTestResults(null);
                    setWaitingForInputs(false);
                    setInputValues([]);
                    setInputCount(0);
                  }}
                >
                  ↺ Reset
                </button>
                <button
                  className="pc-run-btn"
                  onClick={runCode}
                  disabled={isRunning || !pyodideReady || waitingForInputs}
                >
                  {isRunning ? "⏳ Running..." : "▶ Run Code"}
                </button>
              </div>
            </div>

            {/* Editor */}
            <div className="pc-editor-wrap">
              <div className="pc-line-numbers">
                {(userCode || " ")
                  .split("\n")
                  .map((_, i) => (
                    <span key={i}>{i + 1}</span>
                  ))}
              </div>
              <textarea
                ref={textareaRef}
                className="pc-editor"
                value={userCode}
                onChange={(e) => {
                  setUserCode(e.target.value);
                  setOutput(null);
                  setIsCorrect(null);
                  setTestResults(null);
                  setWaitingForInputs(false);
                  setInputValues([]);
                  setInputCount(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="# Tulis kode Python kamu di sini..."
                spellCheck={false}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
              />
            </div>

            {/* Output */}
            <div className="pc-output">
              <div className="pc-output-header">
                <span className="pc-output-label">⬛ OUTPUT</span>
                {output && !waitingForInputs && (
                  <button
                    className="pc-clear-btn"
                    onClick={() => {
                      setOutput(null);
                      setTestResults(null);
                      setWaitingForInputs(false);
                      setInputValues([]);
                      setInputCount(0);
                    }}
                  >
                    clear
                  </button>
                )}
              </div>
              <div
                className={`pc-output-body ${
                  output?.type === "error"
                    ? "pc-output--error"
                    : output?.type === "success"
                    ? "pc-output--success"
                    : ""
                }`}
              >
                {output ? (
                  <pre>{output.message}</pre>
                ) : (
                  <span className="pc-output-placeholder">
                    Output akan muncul setelah Run Code
                  </span>
                )}
              </div>
            </div>

            {/* ── INTERACTIVE INPUT PANEL ── */}
            <InteractiveInputPanel />

            {/* ── TEST CASE PANEL ── */}
            <TestCasePanel />

            {/* Submit bar */}
            <div className="pc-submit-wrap">
              <div className="pc-submit-left">
                {item.testCases && (
                  <span className="pc-line-col">
                    🧪 {item.testCases.length} test cases
                  </span>
                )}
              </div>
              <div className="pc-submit-right">
                <button
                  className="pc-next-btn-code"
                  onClick={goNext}
                  disabled={!canProceed && !isDone}
                >
                  {isLastItem ? "Finish →" : "Next →"}
                </button>
                <button
                  className="pc-submit-btn"
                  onClick={submitCode}
                  disabled={!userCode.trim() || isSubmitting || !pyodideReady}
                >
                  {isSubmitting ? "⏳ Checking..." : "Submit Answer →"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Info panel — for lesson & quiz */}
        {(item.type === "lesson" || item.type === "quiz") && (
          <div className="pc-right pc-right--info">
            <div className="pc-info-card">
              <div className="pc-info-icon">
                {item.type === "lesson" ? "📖" : "🧠"}
              </div>
              <p className="pc-info-title">
                {item.type === "lesson" ? "Baca & Pahami" : "Uji Pengetahuan"}
              </p>
              <p className="pc-info-desc">
                {item.type === "lesson"
                  ? "Pelajari materi sebelum lanjut ke latihan kode."
                  : "Pilih jawaban yang benar untuk melanjutkan."}
              </p>
              <div className="pc-info-progress-wrap">
                <p className="pc-info-prog-label">PROGRESS SECTION</p>
                <div className="pc-info-dots">
                  {section.items.map((it, i) => (
                    <div
                      key={i}
                      className={`pc-info-dot ${
                        progress[`${secIndex}-${i}`]
                          ? "pc-info-dot--done"
                          : ""
                      } ${i === itmIndex ? "pc-info-dot--current" : ""}`}
                      title={it.title}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}