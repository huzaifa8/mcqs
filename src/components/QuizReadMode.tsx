// QuizReadMode.tsx
import React, { useState, useMemo } from "react";
import { useQuiz } from "../context/QuizContext";

const QuizReadMode: React.FC = () => {
  const { mcqs, fileKey } = useQuiz();

  const [searchTerm, setSearchTerm] = useState("");
  const [refFilter, setRefFilter] = useState("All Refs");

  // Unique refs for dropdown
  const uniqueRefs = useMemo(() => {
    if (!mcqs || mcqs.length === 0) return [];
    const refs = mcqs.map((q) => q.ref).filter(Boolean);
    return Array.from(new Set(refs));
  }, [mcqs]);

  // Filtered questions based on search and ref filter
  const filteredMcqs = useMemo(() => {
    if (!mcqs || mcqs.length === 0) return [];

    return mcqs.filter((q) => {
      // Search filter
      const matchesSearch =
        searchTerm === "" ||
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        Object.values(q.choices).some((choice) =>
          choice.toLowerCase().includes(searchTerm.toLowerCase())
        );

      // Ref filter
      const matchesRef = refFilter === "All Refs" || q.ref === refFilter;

      return matchesSearch && matchesRef;
    });
  }, [mcqs, searchTerm, refFilter]);

  const getOptionStyle = (choiceKey: string, correctKey: string) => {
    if (choiceKey === correctKey) {
      return { fontWeight: "bold", color: "yellow" }; // Yellow for correct
    } else {
      return { opacity: 0.6, color: "#6c757d" }; // Faded for incorrect
    }
  };

  if (!mcqs || mcqs.length === 0) {
    return <div>No questions available for this quiz.</div>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ marginBottom: "30px" }}>
        <h1>{fileKey} - Read Mode</h1>
        <p>
          Total Questions: {mcqs.length} | Showing: {filteredMcqs.length}
        </p>
      </div>

      {/* Filters Section */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "30px",
          alignItems: "end",
        }}
      >
        {/* Search */}
        <div style={{ flex: 1 }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Search Questions & Options:
          </label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search in questions and options..."
            style={{
              width: "100%",
              padding: "8px 12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* Ref Filter */}
        {uniqueRefs.length > 0 && (
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                fontWeight: "bold",
              }}
            >
              Filter by Reference:
            </label>
            <select
              value={refFilter}
              onChange={(e) => setRefFilter(e.target.value)}
              style={{
                width: "100%",
                padding: "8px 12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            >
              <option value="All Refs">All References</option>
              {uniqueRefs.map((ref) => (
                <option key={ref} value={ref}>
                  {ref}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Clear Filters */}
        <button
          onClick={() => {
            setSearchTerm("");
            setRefFilter("All Refs");
          }}
          style={{
            padding: "8px 16px",
            borderRadius: "6px",
            border: "1px solid #dc3545",
            background: "white",
            color: "#dc3545",
            cursor: "pointer",
            height: "fit-content",
          }}
        >
          Clear Filters
        </button>
      </div>

      {/* Questions List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
        {filteredMcqs.map((mcq, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              padding: "20px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            {/* Question Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "15px",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <h3 style={{ margin: 0, flex: 1 }}>
                Q{index + 1}: {mcq.question}{" "}
                <span
                  style={{
                    border: "2px solid yellow",
                    marginLeft: 10,
                    padding: 5,
                    color: "yellow",
                  }}
                >
                  {mcq.correct}
                </span>
              </h3>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {mcq.ref && (
                  <span
                    style={{
                      background: "#007bff",
                      color: "white",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    Ref: {mcq.ref}
                  </span>
                )}
              </div>
            </div>

            {/* Options */}
            <div style={{ display: "grid", gap: "8px" }}>
              {Object.entries(mcq.choices).map(([key, value]) => (
                <div
                  key={key}
                  style={{
                    padding: "10px 15px",
                    borderRadius: "6px",
                    border: "1px solid #e0e0e0",
                    ...getOptionStyle(key, mcq.correct),
                  }}
                >
                  <strong>{key}:</strong> {value}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredMcqs.length === 0 && (
        <div
          style={{
            textAlign: "center",
            padding: "40px",
            color: "#6c757d",
            background: "transparent",
            borderRadius: "8px",
          }}
        >
          <h3>No questions match your filters</h3>
          <p>
            Try adjusting your search terms or filters to see more questions.
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizReadMode;
