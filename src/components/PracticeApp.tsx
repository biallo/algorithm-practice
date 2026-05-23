import { useEffect, useMemo, useState } from "react";
import { EmptyState } from "./EmptyState";
import { ProblemDetail } from "./ProblemDetail";
import { ProblemSidebar } from "./ProblemSidebar";
import { problems } from "../data/problems";

const selectedProblemStorageKey = "algorithm-practice:selected-problem-id";

function getInitialSelectedId() {
  if (typeof window !== "undefined") {
    try {
      const storedId = window.localStorage.getItem(selectedProblemStorageKey);

      if (storedId && problems.some((problem) => problem.id === storedId)) {
        return storedId;
      }
    } catch {
      // Local storage can be unavailable in private or restricted contexts.
    }
  }

  return problems[0]?.id;
}

export function PracticeApp() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(getInitialSelectedId);

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

  useEffect(() => {
    if (!selectedProblem) {
      return;
    }

    try {
      window.localStorage.setItem(
        selectedProblemStorageKey,
        selectedProblem.id,
      );
    } catch {
      // Ignore storage failures; selecting problems should still work.
    }
  }, [selectedProblem]);

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
