// LC 150 Evaluate Reverse Polish Notation

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const regex = /^[+\-*/]$/;
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (regex.test(tokens[i])) {
      const operand = tokens[i];
      const num1 = stack.pop();
      const num2 = stack.pop();
      if (operand === "+") stack.push(num2 + num1);
      if (operand === "-") stack.push(num2 - num1);
      if (operand === "*") stack.push(num2 * num1);
      if (operand === "/") stack.push(Math.trunc(num2 / num1));
    } else {
      stack.push(Number(tokens[i]));
    }
  }
  return stack[0];
};
