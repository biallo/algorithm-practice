function encode(strs: string[]): string {
  return strs.map((str) => String(str.length) + "#" + str).join("");
}

function decode(s: string): string[] {
  const result: string[] = [];
  let i = 0;

  while (i < s.length) {
    let delimiter = i;

    while (s[delimiter] !== "#") {
      delimiter += 1;
    }

    const length = Number(s.slice(i, delimiter));
    const start = delimiter + 1;
    result.push(s.slice(start, start + length));
    i = start + length;
  }

  return result;
}
