function groupAnagrams(strs) {
  const groups = new Map();

  for (const str of strs) {
    const key = str.split("").sort().join("");
    const group = groups.get(key) ?? [];
    group.push(str);
    groups.set(key, group);
  }

  return [...groups.values()];
}
