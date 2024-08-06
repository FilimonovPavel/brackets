module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const brackets = new Map(bracketsConfig);
  const openBrackets = new Set(bracketsConfig.map((el) => el[0]));
  const closeBrackets = new Set(bracketsConfig.map((el) => el[1]));

  for (const char of str) {
    if (openBrackets.has(char)) {
      if (brackets.get(char) === char && stack.includes(char)) {
        if (stack.pop() !== char) {
          return false;
        }
      } else {
        stack.push(char);
      }
    } else if (closeBrackets.has(char)) {
      if (brackets.get(stack.pop()) !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
