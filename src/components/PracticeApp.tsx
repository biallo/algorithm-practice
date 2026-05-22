import { useMemo, useState } from "react";
import { EmptyState } from "./EmptyState";
import { ProblemDetail } from "./ProblemDetail";
import { ProblemSidebar } from "./ProblemSidebar";
import { problems } from "../data/problems";

export function PracticeApp() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(problems[0]?.id);

  const filteredProblems = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return problems.filter((problem) => {
      return (
        normalizedSearch.length === 0 ||
        [problem.title, problem.difficulty]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch)
      );
    });
  }, [search]);

  const selectedProblem =
    problems.find((problem) => problem.id === selectedId) ?? problems[0];

  return (
    <div className="app-shell">
      <div className="workspace">
        <ProblemSidebar
          problems={problems}
          filteredProblems={filteredProblems}
          selectedProblem={selectedProblem}
          search={search}
          onSearchChange={setSearch}
          onSelectProblem={(problem) => setSelectedId(problem.id)}
        />
        {selectedProblem ? (
          <ProblemDetail problem={selectedProblem} />
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}
