function rZibonacci(num) {
  console.log("rZibonacci(num) : ", num);
  if (num % 1 !== 0) num = Math.floor(num);
  if (num < 0) return 0;
  if (num === 0 || num === 1) return 1;
  if (num === 2) return 2;
  if (num % 2 === 1) {
    var n = (num - 1) / 2;
    return rZibonacci(n) + rZibonacci(n - 1) + 1;
  }
  if (num % 2 === 0) {
    n = num / 2;
    return rZibonacci(n) + rZibonacci(n + 1) + 1;
  }
}
console.log(
  "rZibonacci(num) Given num , return rTrib(num-1)+rTrib(num-2)+rTrib(n-3). First three Tribonacci numbers are 0, 0, 1, sorTrib(3) = 1 (0+0+1); rTrib(4) = 2 (0+1+1); rTrib(5) = 4 (1+1+2); rTrib(6) = 7 (1+2+4). Handle negatives and non-integers appropriately and inexpensively.: "
);
console.log(rZibonacci(9));
console.log("-----------------------------------------");
