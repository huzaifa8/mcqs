// Quiz.tsx
import React, { useState, useMemo } from "react";
import { useQuiz } from "../context/QuizContext";
import { allQuizzes } from "../context/QuizContext";

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
  } = useQuiz();

  const mcq = mcqs[currentIndex];
  const selected = answers[currentIndex];

  // ✅ Filter by ref
  const [refFilter, setRefFilter] = useState<string>("All Refs");

  // Collect all unique refs in current quiz
  const uniqueRefs = useMemo(() => {
    const refs = mcqs.map((q) => q.ref).filter(Boolean);
    return Array.from(new Set(refs));
  }, [mcqs]);

  // Apply filter
  const filteredMcqs = useMemo(() => {
    return refFilter === "All Refs"
      ? mcqs
      : mcqs.filter((q) => q.ref === refFilter);
  }, [mcqs, refFilter]);

  // Function to get sidebar button color
  const getQuestionColor = (index: number) => {
    const selectedChoice = answers[index];
    if (index === currentIndex) return "#007bff"; // blue
    if (!selectedChoice) return "#f1f3f5"; // gray
    return selectedChoice === mcqs[index].correct ? "#28a745" : "#dc3545"; // green / red
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "300px",
          borderRight: "1px solid #ddd",
          padding: "15px",
          background: "#f8f9fa",
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

        {/* ✅ Ref Filter */}
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

        <h3 style={{ marginBottom: "10px" }}>Questions</h3>
        <div style={{ maxHeight: "70vh", overflowY: "auto" }}>
          {filteredMcqs.map((q) => {
            // Need actual index in full mcqs array
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
      <main style={{ flex: 1, padding: "20px" }}>
        <h2>
          {fileKey} - Question {currentIndex + 1} / {mcqs.length}
        </h2>
        <p>{mcq.question}</p>

        <ul>
          {Object.entries(mcq.choices).map(([key, value]) => (
            <li key={key} style={{ marginBottom: "6px" }}>
              <label>
                <input
                  type="radio"
                  name={`q-${currentIndex}`}
                  value={key}
                  checked={selected === key}
                  onChange={() => setAnswer(currentIndex, key)}
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
            disabled={currentIndex === 0}
            style={{
              marginRight: "10px",
              padding: "8px 12px",
              borderRadius: "6px",
              border: "none",
              background: currentIndex === 0 ? "#ccc" : "#007bff",
              color: "white",
              cursor: currentIndex === 0 ? "not-allowed" : "pointer",
            }}
          >
            Prev
          </button>
          <button
            onClick={next}
            disabled={currentIndex === mcqs.length - 1}
            style={{
              padding: "8px 12px",
              borderRadius: "6px",
              border: "none",
              background: currentIndex === mcqs.length - 1 ? "#ccc" : "#007bff",
              color: "white",
              cursor:
                currentIndex === mcqs.length - 1 ? "not-allowed" : "pointer",
            }}
          >
            Next
          </button>
        </div>

        <p style={{ marginTop: "20px" }}>
          Attempted: {attemptedCount} / {mcqs.length}
        </p>
      </main>
    </div>
  );
};

export default Quiz;
