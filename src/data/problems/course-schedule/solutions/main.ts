function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph = Array.from({ length: numCourses }, () => [] as number[]);
  const indegree = Array(numCourses).fill(0);

  for (const [course, prerequisite] of prerequisites) {
    graph[prerequisite].push(course);
    indegree[course] += 1;
  }

  const queue: number[] = [];
  for (let course = 0; course < numCourses; course += 1) {
    if (indegree[course] === 0) queue.push(course);
  }

  let taken = 0;
  for (let i = 0; i < queue.length; i += 1) {
    const course = queue[i];
    taken += 1;

    for (const next of graph[course]) {
      indegree[next] -= 1;
      if (indegree[next] === 0) queue.push(next);
    }
  }

  return taken === numCourses;
}
