// QuizContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import type { MCQ } from "../types";

// Import all quizzes
import humanPerformance from "../json/Human Performance and Behavior.json";
import ifrCommunications from "../json/IFR Communications.json";
import vfrIrCommunications from "../json/VFR-IFR COMMUNICATIONS.json";
import systemsPowerplant from "../json/SYSTEMS, POWERPLANT.json";
import radioNavigation from "../json/RADIO NAVIGATION.json";
import principlesOfFlight from "../json/PRINCIPLES OF FLIGHT.json";
import performance from "../json/performance.json";
import operationalProcedures from "../json/OPERATIONAL PROCEDURES.json";
import navigation from "../json/Navigation.json";
import meteorology from "../json/METEOROLOGY.json";
import massAndBalance from "../json/MASS AND BALANCE.json";
import instrumentation from "../json/INSTRUMENTATION.json";
import flightPlanning from "../json/FLIGHT PLANNING.json";
import airLawAndATCProcedures from "../json/AIR LAW AND ATC PROCEDURES.json";
import airLawAndATCProcedures11 from "../json/11- AIR LAW AND ATC PROCEDURES.json";

// Dictionary of all quiz files
export const allQuizzes: Record<string, MCQ[]> = {
  "Human Performance and Behavior": humanPerformance,
  "IFR Communications": ifrCommunications,
  "VFR-IFR Communications": vfrIrCommunications,
  "Systems and Powerplant": systemsPowerplant,
  "Radio Navigation": radioNavigation,
  "Principles of Flight": principlesOfFlight,
  Performance: performance,
  "Operational Procedures": operationalProcedures,
  Navigation: navigation,
  Meteorology: meteorology,
  "Mass and Balance": massAndBalance,
  Instrumentation: instrumentation,
  "Flight Planning": flightPlanning,
  "Air Law and ATC Procedures": airLawAndATCProcedures,
  "11- Air Law and ATC Procedures": airLawAndATCProcedures11,
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
}

const QuizContext = createContext<QuizContextProps | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const FILE_KEY_STORAGE = "quiz-current-file";

  // Load persisted fileKey first
  const [fileKey, setFileKey] = useState<string>(() => {
    return (
      localStorage.getItem(FILE_KEY_STORAGE) || "Human Performance and Behavior"
    );
  });

  // Helper for per-file storage key
  const STORAGE_KEY = (file: string) => `quiz-progress-${file}`;

  // Load saved progress for the selected file
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

  // Save fileKey whenever it changes
  useEffect(() => {
    localStorage.setItem(FILE_KEY_STORAGE, fileKey);
  }, [fileKey]);

  // When fileKey changes, reload its progress
  useEffect(() => {
    const saved = loadProgress(fileKey);
    setCurrentIndex(saved.currentIndex);
    setAnswers(saved.answers);
  }, [fileKey]);

  // Persist progress whenever answers or index change
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
    if (currentIndex < allQuizzes[fileKey].length - 1) {
      setCurrentIndex((i) => i + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  };

  const jumpTo = (index: number) => {
    if (index >= 0 && index < allQuizzes[fileKey].length) {
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
        mcqs: allQuizzes[fileKey],
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
