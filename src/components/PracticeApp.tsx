import { useEffect, useMemo, useState } from "react";
import { EmptyState } from "./EmptyState";
import { ProblemDetail } from "./ProblemDetail";
import { ProblemSidebar } from "./ProblemSidebar";
import { problems } from "../data/problems";

const selectedProblemStorageKey = "algorithm-practice:selected-problem-id";
const completedProblemsStorageKey = "algorithm-practice:completed-problem-ids";

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

function getInitialCompletedIds() {
  if (typeof window !== "undefined") {
    try {
      const storedIds = window.localStorage.getItem(completedProblemsStorageKey);

      if (storedIds) {
        const parsedIds: unknown = JSON.parse(storedIds);

        if (Array.isArray(parsedIds)) {
          const problemIds = new Set(problems.map((problem) => problem.id));

          return parsedIds.filter(
            (id): id is string => typeof id === "string" && problemIds.has(id),
          );
        }
      }
    } catch {
      // Local storage can be unavailable or contain invalid data.
    }
  }

  return [];
}

export function PracticeApp() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(getInitialSelectedId);
  const [completedIds, setCompletedIds] = useState(getInitialCompletedIds);

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
  const completedProblemIds = useMemo(
    () => new Set(completedIds),
    [completedIds],
  );

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

  useEffect(() => {
    try {
      window.localStorage.setItem(
        completedProblemsStorageKey,
        JSON.stringify(completedIds),
      );
    } catch {
      // Ignore storage failures; completion should still update in memory.
    }
  }, [completedIds]);

  const markSelectedProblemComplete = () => {
    if (!selectedProblem) {
      return;
    }

    setCompletedIds((currentIds) => {
      if (currentIds.includes(selectedProblem.id)) {
        return currentIds;
      }

      return [...currentIds, selectedProblem.id];
    });
  };

  return (
    <div className="app-shell">
      <div className="workspace">
        <ProblemSidebar
          problems={problems}
          filteredProblems={filteredProblems}
          completedProblemIds={completedProblemIds}
          selectedProblem={selectedProblem}
          search={search}
          onSearchChange={setSearch}
          onSelectProblem={(problem) => setSelectedId(problem.id)}
        />
        {selectedProblem ? (
          <ProblemDetail
            isCompleted={completedProblemIds.has(selectedProblem.id)}
            onMarkComplete={markSelectedProblemComplete}
            problem={selectedProblem}
          />
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}
