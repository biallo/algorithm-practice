import type { PracticeProblem } from "../../problemTypes";
import javascript from "./solutions/main.js?raw";
import typescript from "./solutions/main.ts?raw";

export const problem: PracticeProblem = {
  id: `meeting-rooms`,
  title: `Meeting Rooms`,
  difficulty: `Easy`,
  category: `Intervals`,
  description: `Return true if a person can attend every meeting interval.`,
  points: [
    `Sort meetings by start time.`,
    `Any start before the previous end means a conflict.`,
  ],
  solutions: [
    {
      title: "Sort and detect overlap",
      javascript: javascript.trim(),
      typescript: typescript.trim(),
    },
  ],
};
