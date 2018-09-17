function rFibonacci(num) {
  console.log("rFibonacci(num) :", num);
  if (num % 1 !== 0) num = Math.floor(num);
  if (num <= 0) return 0;
  if (num === 1) return 1;
  return rFibonacci(num - 2) + rFibonacci(num - 1);
}
console.log(
  "rFibonacci(num) Given num , return rFib(num-1)+rFib(num-2). Examples: rFib(2) = 1 (0+1); rFib(3) = 2 (1+1); rFib(4) = 3 (1+2); rFib(5) = 5 (2+3). rFib(3.65) = rFib(3) = 2 , rFib(-2) = rFib(0) = 0: "
);
console.log(rFibonacci(3.5));
console.log("-----------------------------------------");
/*function rFibonacci(num) {
  console.log("rFibonacci(num) :", num);
  if (num % 1 !== 0) num = Math.floor(num);
  if (num === 1) return 1;
  var fib = 0;
  var prev = 0;
  var next = 1;
  for (var i = 1; i < num; i++) {
    fib = prev + next;
    prev = next;
    next = fib;
  }
  return fib;
}
console.log(
  "rFibonacci(num) Given num , return rFib(num-1)+rFib(num-2). Examples: rFib(2) = 1 (0+1); rFib(3) = 2 (1+1); rFib(4) = 3 (1+2); rFib(5) = 5 (2+3). rFib(3.65) = rFib(3) = 2 , rFib(-2) = rFib(0) = 0: "
);
console.log(rFibonacci(6));
console.log("-----------------------------------------");*/
