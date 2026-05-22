export type Difficulty = "Easy" | "Medium" | "Hard";

export type ProblemCategory =
  | "Arrays"
  | "Binary"
  | "Dynamic Programming"
  | "Graphs"
  | "Hashing"
  | "Intervals"
  | "Linked List"
  | "Matrix"
  | "Stack"
  | "Strings"
  | "Trees";

export type SolutionCode = {
  javascript: string;
  typescript: string;
};

export type PracticeSolution = SolutionCode & {
  title: string;
};

export type PracticeProblem = {
  id: string;
  title: string;
  difficulty: Difficulty;
  category: ProblemCategory;
  description: string;
  points: string[];
  solutions: PracticeSolution[];
};
