function climbStairs(n) {
  let oneStepBefore = 1;
  let twoStepsBefore = 1;

  for (let step = 2; step <= n; step += 1) {
    const current = oneStepBefore + twoStepsBefore;
    twoStepsBefore = oneStepBefore;
    oneStepBefore = current;
  }

  return oneStepBefore;
}
