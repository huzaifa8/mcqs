import React, { createContext, useContext, useState, useEffect } from "react";
import type { MCQ } from "../types";

// Dictionary of all quiz files with lazy imports
export const allQuizzes: Record<string, () => Promise<{ default: MCQ[] }>> = {
  "Human Performance and Behavior": () =>
    import("../mcqs/Human Performance and Behavior.ts"),
  "IFR Communications": () => import("../mcqs/IFR Communications.ts"),
  "VFR-IFR Communications": () => import("../mcqs/VFR-IFR COMMUNICATIONS.ts"),
  "Systems and Powerplant": () => import("../mcqs/SYSTEMS, POWERPLANT.ts"),
  "Radio Navigation": () => import("../mcqs/RADIO NAVIGATION.ts"),
  "Principles of Flight": () => import("../mcqs/PRINCIPLES OF FLIGHT.ts"),
  Performance: () => import("../mcqs/Performance.ts"),
  "Operational Procedures": () => import("../mcqs/OPERATIONAL PROCEDURES.ts"),
  Navigation: () => import("../mcqs/Navigation.ts"),
  Meteorology: () => import("../mcqs/METEOROLOGY.ts"),
  "Mass and Balance": () => import("../mcqs/MASS AND BALANCE.ts"),
  Instrumentation: () => import("../mcqs/INSTRUMENTATION.ts"),
  "Flight Planning": () => import("../mcqs/FLIGHT PLANNING.ts"),
  "Air Law and ATC Procedures": () =>
    import("../mcqs/AIR LAW AND ATC PROCEDURES.ts"),
  "11- Air Law and ATC Procedures": () =>
    import("../mcqs/11- AIR LAW AND ATC PROCEDURES.ts"),
};

interface QuizContextProps {
  fileKey: string;
  setFile: (file: string) => void;
  currentIndex: number;
  answers: { [index: number]: string };
  attemptedCount: number;
  setAnswer: (index: number, choice: string) => void;
  next: () => void;
  prev: () => void;
  jumpTo: (index: number) => void;
  resetProgress: () => void;
  mcqs: MCQ[];
  isLoading: boolean;
}

const QuizContext = createContext<QuizContextProps | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const FILE_KEY_STORAGE = "quiz-current-file";
  const [fileKey, setFileKey] = useState<string>(() => {
    return (
      localStorage.getItem(FILE_KEY_STORAGE) || "Human Performance and Behavior"
    );
  });
  const [isLoading, setIsLoading] = useState(false);
  const [mcqs, setMcqs] = useState<MCQ[]>([]);

  const STORAGE_KEY = (file: string) => `quiz-progress-${file}`;

  const loadProgress = (file: string) => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY(file));
      if (!raw) return { currentIndex: 0, answers: {} };
      return JSON.parse(raw);
    } catch {
      return { currentIndex: 0, answers: {} };
    }
  };

  const initialProgress = loadProgress(fileKey);
  const [currentIndex, setCurrentIndex] = useState<number>(
    initialProgress.currentIndex
  );
  const [answers, setAnswers] = useState<{ [index: number]: string }>(
    initialProgress.answers
  );

  // Load quiz data when fileKey changes
  useEffect(() => {
    const loadQuiz = async () => {
      setIsLoading(true);
      try {
        const quizModule = await allQuizzes[fileKey]();
        setMcqs(quizModule.default);
      } catch (error) {
        console.error("Failed to load quiz:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadQuiz();
  }, [fileKey]);

  // Save fileKey and progress
  useEffect(() => {
    localStorage.setItem(FILE_KEY_STORAGE, fileKey);
  }, [fileKey]);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY(fileKey),
      JSON.stringify({ currentIndex, answers })
    );
  }, [fileKey, currentIndex, answers]);

  const attemptedCount = Object.keys(answers).length;

  const setAnswer = (index: number, choice: string) => {
    setAnswers((prev) => ({ ...prev, [index]: choice }));
  };

  const next = () => {
    if (currentIndex < mcqs.length - 1) {
      setCurrentIndex((i) => i + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  };

  const jumpTo = (index: number) => {
    if (index >= 0 && index < mcqs.length) {
      setCurrentIndex(index);
    }
  };

  const resetProgress = () => {
    localStorage.removeItem(STORAGE_KEY(fileKey));
    setCurrentIndex(0);
    setAnswers({});
  };

  return (
    <QuizContext.Provider
      value={{
        fileKey,
        setFile: setFileKey,
        currentIndex,
        answers,
        attemptedCount,
        setAnswer,
        next,
        prev,
        jumpTo,
        resetProgress,
        mcqs,
        isLoading,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const ctx = useContext(QuizContext);
  if (!ctx) throw new Error("useQuiz must be used within QuizProvider");
  return ctx;
};
