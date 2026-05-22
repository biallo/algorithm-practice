import type { PracticeProblem } from "../data/problemTypes";
import { CodeTabs } from "./CodeTabs";

type ProblemDetailProps = {
  problem: PracticeProblem;
};

export function ProblemDetail({ problem }: ProblemDetailProps) {
  return (
    <main className="detail" aria-labelledby="problem-title">
      <div className="detail__head">
        <div>
          <h1 id="problem-title">{problem.title}</h1>
        </div>
        <div className="detail__metrics" aria-label="Problem metadata">
          <span className={`badge badge--${problem.difficulty.toLowerCase()}`}>
            {problem.difficulty}
          </span>
          <span>{problem.category}</span>
        </div>
      </div>

      <section className="prompt-section" aria-labelledby="prompt-title">
        <h2 id="prompt-title">Prompt</h2>
        <div className="rich-text">
          <p>{problem.description}</p>
        </div>

        <div className="requirements-block">
          <h3>Requirements</h3>
          <ul>
            {problem.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      {problem.solutions.length > 0 ? (
        <CodeTabs solutions={problem.solutions} />
      ) : null}
    </main>
  );
}
