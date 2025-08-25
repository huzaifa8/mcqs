export interface MCQ {
  question: string;
  choices: { A?: string; B?: string; C?: string; D?: string };
  correct: string;
  ref: string;
}
