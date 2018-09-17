function rTribonacci(num) {
  console.log("rTribonacci(num) : ", num);
  if (num % 1 !== 0) num = Math.floor(num);
  if (num < 2) return 0;
  if (num === 2) return 1;
  return rTribonacci(num - 3) + rTribonacci(num - 2) + rTribonacci(num - 1);
}
console.log(
  "rTribonacci(num) Given num , return rTrib(num-1)+rTrib(num-2)+rTrib(n-3). First three Tribonacci numbers are 0, 0, 1, sorTrib(3) = 1 (0+0+1); rTrib(4) = 2 (0+1+1); rTrib(5) = 4 (1+1+2); rTrib(6) = 7 (1+2+4). Handle negatives and non-integers appropriately and inexpensively.: "
);
console.log(rTribonacci(3.5));
console.log("-----------------------------------------");
/*function rTribonacci(num) {
  console.log("rTribonacci(num) : ", num);
  if (num % 1 !== 0) num = Math.floor(num);
  var trib = 0;
  var prev = 0;
  var curr = 0;
  var next = 1;
  if (num === 2) return 1;
  for (var i = 2; i < num; i++) {
    trib = prev + curr + next;
    prev = curr;
    curr = next;
    next = trib;
  }
  return trib;
}
console.log(
  "rTribonacci(num) Given num , return rTrib(num-1)+rTrib(num-2)+rTrib(n-3). First three Tribonacci numbers are 0, 0, 1, sorTrib(3) = 1 (0+0+1); rTrib(4) = 2 (0+1+1); rTrib(5) = 4 (1+1+2); rTrib(6) = 7 (1+2+4). Handle negatives and non-integers appropriately and inexpensively.: "
);
console.log(rTribonacci(8));
console.log("-----------------------------------------");*/
