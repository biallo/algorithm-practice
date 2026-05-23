import { useEffect, useMemo, useRef } from "react";
import type { PracticeProblem } from "../data/problemTypes";

type ProblemSidebarProps = {
  problems: PracticeProblem[];
  filteredProblems: PracticeProblem[];
  selectedProblem: PracticeProblem | undefined;
  search: string;
  onSearchChange: (value: string) => void;
  onSelectProblem: (problem: PracticeProblem) => void;
};

export function ProblemSidebar({
  problems,
  filteredProblems,
  selectedProblem,
  search,
  onSearchChange,
  onSelectProblem,
}: ProblemSidebarProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef(new Map<string, HTMLButtonElement>());
  const problemNumberById = useMemo(
    () => new Map(problems.map((problem, index) => [problem.id, index + 1])),
    [problems],
  );

  const getProblemNumber = (problem: PracticeProblem) =>
    problemNumberById.get(problem.id) ?? 0;

  useEffect(() => {
    if (!selectedProblem) {
      return;
    }

    const list = listRef.current;
    const selectedItem = itemRefs.current.get(selectedProblem.id);

    if (!list || !selectedItem) {
      return;
    }

    const listRect = list.getBoundingClientRect();
    const itemRect = selectedItem.getBoundingClientRect();
    const isVisible =
      itemRect.bottom > listRect.top && itemRect.top < listRect.bottom;

    if (isVisible) {
      return;
    }

    selectedItem.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [filteredProblems, selectedProblem]);

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

        <p className="problem-count">
          {filteredProblems.length} of {problems.length} problems
        </p>

        <label className="field problem-select">
          {filteredProblems.length > 0 ? (
            <select
              value={
                filteredProblems.some(
                  (problem) => problem.id === selectedProblem?.id,
                )
                  ? selectedProblem?.id
                  : filteredProblems[0]?.id
              }
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
                  {getProblemNumber(problem)}. {problem.title}
                </option>
              ))}
            </select>
          ) : (
            <div className="problem-select-empty">No matches</div>
          )}
        </label>
      </div>

      <div className="problem-list" aria-label="Problems" ref={listRef}>
        {filteredProblems.length > 0 ? (
          filteredProblems.map((problem) => (
            <button
              className={
                selectedProblem?.id === problem.id
                  ? "problem-list__item active"
                  : "problem-list__item"
              }
              key={problem.id}
              onClick={() => onSelectProblem(problem)}
              ref={(node) => {
                if (node) {
                  itemRefs.current.set(problem.id, node);
                } else {
                  itemRefs.current.delete(problem.id);
                }
              }}
              type="button"
            >
              <span className="problem-list__number">
                {getProblemNumber(problem)}
              </span>
              <span className="problem-list__content">
                <span className="problem-list__title">{problem.title}</span>
                <span className="problem-list__meta">
                  <span
                    className={`difficulty-text difficulty--${problem.difficulty.toLowerCase()}`}
                  >
                    {problem.difficulty}
                  </span>
                  <span>{problem.category}</span>
                </span>
              </span>
            </button>
          ))
        ) : (
          <div className="problem-list-empty" role="status">
            <strong>No matches</strong>
            <span>Try a different search.</span>
          </div>
        )}
      </div>
    </aside>
  );
}
