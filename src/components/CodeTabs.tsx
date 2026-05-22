import { useMemo, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import type { PracticeSolution } from "../data/problemTypes";

type CodeTabsProps = {
  solutions: PracticeSolution[];
};

type Language = "javascript" | "typescript";

export function CodeTabs({ solutions }: CodeTabsProps) {
  const [selectedSolutionIndex, setSelectedSolutionIndex] = useState(0);
  const [language, setLanguage] = useState<Language>("javascript");
  const solution = solutions[selectedSolutionIndex] ?? solutions[0];
  const code = solution[language];
  const highlightedCode = useMemo(() => {
    const grammar = Prism.languages[language] ?? Prism.languages.javascript;

    return Prism.highlight(code, grammar, language);
  }, [code, language]);

  return (
    <section className="solution-section">
      {solutions.length > 1 ? (
        <div className="approach-selector">
          <div className="approach-header">
            <h2>Solution approaches</h2>
          </div>

          <div className="approach-tabs" aria-label="Solution approaches">
            {solutions.map((item, index) => (
              <button
                className={index === selectedSolutionIndex ? "active" : ""}
                key={item.title}
                onClick={() => setSelectedSolutionIndex(index)}
                type="button"
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <section className="code-panel" aria-labelledby="solution-title">
        <div className="code-panel__header">
          <div>
            <h3 id="solution-title">{solution.title}</h3>
          </div>
          <div className="segmented" aria-label="Code language">
            <button
              className={language === "javascript" ? "active" : ""}
              onClick={() => setLanguage("javascript")}
              type="button"
            >
              JS
            </button>
            <button
              className={language === "typescript" ? "active" : ""}
              onClick={() => setLanguage("typescript")}
              type="button"
            >
              TS
            </button>
          </div>
        </div>
        <pre className="code-block">
          <code
            className={`language-${language}`}
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </pre>
      </section>
    </section>
  );
}
