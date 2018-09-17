function rFactorial(num) {
  console.log("rFactorial(num) : ", num);
  if (num >= 0) {
    if (num % 1 !== 0) num = Math.floor(num);
    if (num === 0) return 1;
    return num * rFactorial(--num);
  }
  return "incorrect data";
}
console.log(
  "rFactorial(num) Given num , return the product of ints from 1 up to num . If less than zero, treat as zero. If not integer, truncate. Experts tell us 0! is 1 .rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).: "
);
console.log(rFactorial(3.5));
console.log("-----------------------------------------");
/*function rFactorial(num) {
  console.log("rFactorial(num) : ", num);
  if (num >= 0) {
    if (num % 1 !== 0) num = Math.floor(num);
    var factorial = 1;
    for (var i = 2; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  }
  return "incorrect data";
}
console.log(
  "rFactorial(num) Given num , return the product of ints from 1 up to num . If less than zero, treat as zero. If not integer, truncate. Experts tell us 0! is 1 .rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).: "
);
console.log(rFactorial(3.5));
console.log("-----------------------------------------");*/
