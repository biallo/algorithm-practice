function numDecodings(s) {
  if (s[0] === "0") return 0;

  let twoBack = 1;
  let oneBack = 1;

  for (let i = 1; i < s.length; i += 1) {
    let current = 0;
    const single = Number(s[i]);
    const pair = Number(s.slice(i - 1, i + 1));

    if (single >= 1) current += oneBack;
    if (pair >= 10 && pair <= 26) current += twoBack;

    twoBack = oneBack;
    oneBack = current;
  }

  return oneBack;
}
