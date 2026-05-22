import type { PracticeProblem } from "../data/problemTypes";

type ProblemSidebarProps = {
  filteredProblems: PracticeProblem[];
  selectedProblem: PracticeProblem | undefined;
  search: string;
  onSearchChange: (value: string) => void;
  onSelectProblem: (problem: PracticeProblem) => void;
};

export function ProblemSidebar({
  filteredProblems,
  selectedProblem,
  search,
  onSearchChange,
  onSelectProblem,
}: ProblemSidebarProps) {
  return (
    <aside className="sidebar" aria-label="Problem filters and list">
      <div className="sidebar-heading">
        <img src="favicon.png" alt="" />
        <div>
          <h1>Algorithm Practice</h1>
          <p>Javascript Algorithm</p>
        </div>
      </div>

      <div className="sidebar__filters">
        <label className="field">
          <input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search title or difficulty"
            type="search"
          />
        </label>

        <label className="field problem-select">
          <select
            value={selectedProblem?.id ?? ""}
            onChange={(event) => {
              const nextProblem = filteredProblems.find(
                (problem) => problem.id === event.target.value,
              );

              if (nextProblem) {
                onSelectProblem(nextProblem);
              }
            }}
          >
            {filteredProblems.map((problem) => (
              <option key={problem.id} value={problem.id}>
                {problem.title}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="problem-list" aria-label="Problems">
        {filteredProblems.map((problem) => (
          <button
            className={
              selectedProblem?.id === problem.id
                ? "problem-list__item active"
                : "problem-list__item"
            }
            key={problem.id}
            onClick={() => onSelectProblem(problem)}
            type="button"
          >
            <span className="problem-list__title">{problem.title}</span>
            <span className="problem-list__meta">
              <span
                className={`badge badge--${problem.difficulty.toLowerCase()}`}
              >
                {problem.difficulty}
              </span>
              <span>{problem.category}</span>
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
}
