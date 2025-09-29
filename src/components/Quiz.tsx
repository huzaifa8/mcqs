// Quiz.tsx
import React, { useState, useMemo, useEffect } from "react";
import { useQuiz, allQuizzes } from "../context/QuizContext";
import QuizReadMode from "./QuizReadMode";

const Quiz: React.FC = () => {
  const {
    mcqs,
    currentIndex,
    answers,
    setAnswer,
    next,
    prev,
    jumpTo,
    attemptedCount,
    fileKey,
    setFile,
    resetProgress,
    isLoading,
  } = useQuiz();

  const [refFilter, setRefFilter] = useState<string>("All Refs");
  const [isReadMode, setIsReadMode] = useState(false);

  // 🔹 Reset ref filter when quiz file changes
  useEffect(() => {
    setRefFilter("All Refs");
  }, [fileKey]);

  // Unique refs for dropdown
  const uniqueRefs = useMemo(() => {
    if (!mcqs || mcqs.length === 0) return [];
    const refs = mcqs.map((q) => q.ref).filter(Boolean);
    return Array.from(new Set(refs));
  }, [mcqs]);

  // Filtered questions by ref
  const filteredMcqs = useMemo(() => {
    if (!mcqs || mcqs.length === 0) return [];
    return refFilter === "All Refs"
      ? mcqs
      : mcqs.filter((q) => q.ref === refFilter);
  }, [mcqs, refFilter]);

  // 🔹 Count attempted within current filter
  const filteredAttemptedCount = useMemo(() => {
    if (refFilter === "All Refs") return attemptedCount;
    return filteredMcqs.filter((q) => {
      const realIndex = mcqs.indexOf(q);
      return answers[realIndex];
    }).length;
  }, [filteredMcqs, refFilter, attemptedCount, answers, mcqs]);

  // 🔹 Correct option distribution (whole quiz)
  const quizCorrectDistribution = useMemo(() => {
    const distribution = { A: 0, B: 0, C: 0, D: 0 };
    mcqs.forEach((q) => {
      if (["A", "B", "C", "D"].includes(q.correct)) {
        distribution[q.correct as keyof typeof distribution]++;
      }
    });
    const total = mcqs.length;
    return {
      counts: distribution,
      percentages: {
        A: total > 0 ? Math.round((distribution.A / total) * 100) : 0,
        B: total > 0 ? Math.round((distribution.B / total) * 100) : 0,
        C: total > 0 ? Math.round((distribution.C / total) * 100) : 0,
        D: total > 0 ? Math.round((distribution.D / total) * 100) : 0,
      },
      total,
    };
  }, [mcqs]);

  // 🔹 Correct option distribution (filtered)
  const filteredCorrectDistribution = useMemo(() => {
    const distribution = { A: 0, B: 0, C: 0, D: 0 };
    filteredMcqs.forEach((q) => {
      if (["A", "B", "C", "D"].includes(q.correct)) {
        distribution[q.correct as keyof typeof distribution]++;
      }
    });
    const total = filteredMcqs.length;
    return {
      counts: distribution,
      percentages: {
        A: total > 0 ? Math.round((distribution.A / total) * 100) : 0,
        B: total > 0 ? Math.round((distribution.B / total) * 100) : 0,
        C: total > 0 ? Math.round((distribution.C / total) * 100) : 0,
        D: total > 0 ? Math.round((distribution.D / total) * 100) : 0,
      },
      total,
    };
  }, [filteredMcqs]);

  const getQuestionColor = (index: number) => {
    const selectedChoice = answers[index];
    if (index === currentIndex) return "#007bff";
    if (!selectedChoice) return "#f1f3f5";
    return selectedChoice === mcqs[index]?.correct ? "#28a745" : "#dc3545";
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          width: "300px",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              display: "inline-block",
              width: "80px",
              height: "80px",
              border: "6px solid rgba(255,255,255,.3)",
              borderRadius: "50%",
              borderTopColor: "#fff",
              animation: "spin 1s ease-in-out infinite",
              marginBottom: "20px",
            }}
          ></div>
          <h2 style={{ margin: "0", fontSize: "28px", fontWeight: "600" }}>
            Loading Quiz
          </h2>
          <p style={{ margin: "10px 0 0", fontSize: "18px", opacity: "0.8" }}>
            Preparing your questions...
          </p>

          <style>
            {`
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `}
          </style>
        </div>
      </div>
    );
  }

  if (!mcqs || mcqs.length === 0) {
    return <div>No questions available for this quiz.</div>;
  }

  // If currentIndex doesn't belong to filter, snap to first filtered
  const safeIndex =
    filteredMcqs.indexOf(mcqs[currentIndex]) !== -1
      ? currentIndex
      : mcqs.indexOf(filteredMcqs[0]);

  const mcq = mcqs[safeIndex];
  const selected = answers[safeIndex];

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "300px",
          borderRight: "1px solid #ddd",
          padding: "15px",
          background: "#000",
        }}
      >
        <h3 style={{ marginBottom: "10px" }}>Quizzes</h3>
        <select
          value={fileKey}
          onChange={(e) => setFile(e.target.value)}
          style={{
            width: "100%",
            padding: "6px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginBottom: "10px",
          }}
        >
          {Object.keys(allQuizzes).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>

        <button
          onClick={resetProgress}
          style={{
            width: "100%",
            marginBottom: "20px",
            padding: "8px",
            borderRadius: "6px",
            border: "none",
            background: "#dc3545",
            color: "white",
            cursor: "pointer",
          }}
        >
          Reset Progress
        </button>

        {uniqueRefs.length > 0 && (
          <>
            <h3 style={{ marginBottom: "10px" }}>Filter by Ref</h3>
            <select
              value={refFilter}
              onChange={(e) => setRefFilter(e.target.value)}
              style={{
                width: "100%",
                padding: "6px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                marginBottom: "20px",
              }}
            >
              <option value="All Refs">All Refs</option>
              {uniqueRefs.map((ref) => (
                <option key={ref} value={ref}>
                  {ref}
                </option>
              ))}
            </select>
          </>
        )}

        <button
          onClick={() => setIsReadMode(!isReadMode)}
          style={{
            width: "100%",
            marginBottom: "20px",
            padding: "8px",
            borderRadius: "6px",
            border: "none",
            background: "#28a745",
            color: "white",
            cursor: "pointer",
          }}
        >
          {isReadMode ? "Switch to Quiz Mode" : "Switch to Read Mode"}
        </button>

        <h3 style={{ marginBottom: "10px" }}>Questions</h3>
        <div style={{ maxHeight: "70vh", overflowY: "auto" }}>
          {filteredMcqs.map((q) => {
            const realIndex = mcqs.indexOf(q);
            const bg = getQuestionColor(realIndex);
            return (
              <button
                key={realIndex}
                onClick={() => jumpTo(realIndex)}
                style={{
                  display: "block",
                  margin: "4px 0",
                  padding: "6px",
                  width: "100%",
                  textAlign: "left",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  background: bg,
                  color: bg === "#007bff" ? "white" : "black",
                  cursor: "pointer",
                }}
              >
                {realIndex + 1}. {q.question.slice(0, 40)}...
              </button>
            );
          })}
        </div>
      </aside>

      {/* Main quiz area */}
      {isReadMode ? (
        <QuizReadMode />
      ) : (
        <main style={{ flex: 1, padding: "20px" }}>
          <h2>
            {fileKey} - Question {safeIndex + 1} / {mcqs.length}
          </h2>
          {refFilter !== "All Refs" && (
            <h4 style={{ color: "#555" }}>
              Ref "{refFilter}" → {filteredAttemptedCount}/{filteredMcqs.length}{" "}
              attempted
            </h4>
          )}

          {/* 🔹 Show distribution stats */}
          <div style={{ margin: "20px 0" }}>
            <h3>Correct Option Distribution (Whole Quiz)</h3>
            {(["A", "B", "C", "D"] as const).map((letter) => (
              <div key={letter}>
                Choice {letter}: {quizCorrectDistribution.percentages[letter]}%
                ({quizCorrectDistribution.counts[letter]} of{" "}
                {quizCorrectDistribution.total})
              </div>
            ))}

            {refFilter !== "All Refs" && (
              <>
                <h3>Correct Option Distribution (Filtered by {refFilter})</h3>
                {(["A", "B", "C", "D"] as const).map((letter) => (
                  <div key={letter}>
                    Choice {letter}:{" "}
                    {filteredCorrectDistribution.percentages[letter]}% (
                    {filteredCorrectDistribution.counts[letter]} of{" "}
                    {filteredCorrectDistribution.total})
                  </div>
                ))}
              </>
            )}
          </div>

          <p>{mcq.question}</p>

          <ul>
            {Object.entries(mcq.choices).map(([key, value]) => (
              <li key={key} style={{ marginBottom: "6px" }}>
                <label>
                  <input
                    type="radio"
                    name={`q-${safeIndex}`}
                    value={key}
                    checked={selected === key}
                    onChange={() => setAnswer(safeIndex, key)}
                  />{" "}
                  {key}: {value}
                </label>
              </li>
            ))}
          </ul>

          {selected && (
            <p style={{ marginTop: "10px", fontWeight: "bold" }}>
              {selected === mcq.correct
                ? "✅ Correct!"
                : `❌ Wrong (Correct: ${mcq.correct})`}
            </p>
          )}

          <div style={{ marginTop: "1rem" }}>
            <button
              onClick={prev}
              disabled={safeIndex === 0}
              style={{
                marginRight: "10px",
                padding: "8px 12px",
                borderRadius: "6px",
                border: "none",
                background: safeIndex === 0 ? "#ccc" : "#007bff",
                color: "white",
                cursor: safeIndex === 0 ? "not-allowed" : "pointer",
              }}
            >
              Prev
            </button>
            <button
              onClick={next}
              disabled={safeIndex === mcqs.length - 1}
              style={{
                padding: "8px 12px",
                borderRadius: "6px",
                border: "none",
                background: safeIndex === mcqs.length - 1 ? "#ccc" : "#007bff",
                color: "white",
                cursor:
                  safeIndex === mcqs.length - 1 ? "not-allowed" : "pointer",
              }}
            >
              Next
            </button>
          </div>

          <p style={{ marginTop: "20px" }}>
            Overall Attempted: {attemptedCount} / {mcqs.length}
          </p>
        </main>
      )}
    </div>
  );
};

export default Quiz;
