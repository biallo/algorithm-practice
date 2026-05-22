function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph = Array.from({ length: numCourses }, () => [] as number[]);

  for (const [course, prerequisite] of prerequisites) {
    graph[prerequisite].push(course);
  }

  const visiting = new Set<number>();
  const visited = new Set<number>();

  function hasCycle(course: number): boolean {
    if (visited.has(course)) return false;
    if (visiting.has(course)) return true;

    visiting.add(course);
    for (const next of graph[course]) {
      if (hasCycle(next)) return true;
    }

    visiting.delete(course);
    visited.add(course);
    return false;
  }

  for (let course = 0; course < numCourses; course += 1) {
    if (hasCycle(course)) return false;
  }

  return true;
}
