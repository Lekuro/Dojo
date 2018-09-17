function pagingDrAckermann(num1, num2) {
  if (num1 < 0 || num2 < 0 || num1 % 1 !== 0 || num2 % 1 !== 0)
    return "incorrect data";
  if (num1 === 0) return num2 + 1;
  if (num2 === 0) return pagingDrAckermann(num1 - 1, 1);
  return pagingDrAckermann(num1 - 1, pagingDrAckermann(num1, num2 - 1));
}
console.log(pagingDrAckermann(3, 4));
