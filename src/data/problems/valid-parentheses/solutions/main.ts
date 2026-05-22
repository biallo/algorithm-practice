function isValid(s: string): boolean {
  const matching: Record<string, string> = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const stack: string[] = [];

  for (const char of s) {
    if (char in matching) {
      stack.push(matching[char]);
    } else if (stack.pop() !== char) {
      return false;
    }
  }

  return stack.length === 0;
}
