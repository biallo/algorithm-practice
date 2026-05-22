function canFinish(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);

  for (const [course, prerequisite] of prerequisites) {
    graph[prerequisite].push(course);
  }

  const visiting = new Set();
  const visited = new Set();

  function hasCycle(course) {
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
