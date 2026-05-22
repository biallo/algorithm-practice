function isValid(s) {
  const matching = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const stack = [];

  for (const char of s) {
    if (char in matching) {
      stack.push(matching[char]);
    } else if (stack.pop() !== char) {
      return false;
    }
  }

  return stack.length === 0;
}
