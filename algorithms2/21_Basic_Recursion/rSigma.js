function rSigma(num) {
  console.log("rSigma(num) :", num);
  if (num % 1 !== 0) num = Math.floor(num);
  if (num <= 0) return 0;
  return num + rSigma(--num); // - 1);
}
console.log(
  "rSigma(num) given a number returns sum of integers from 1 to that number. Example: rSigma(5) = 15 (1+2+3+4+5);rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.:"
);
console.log(rSigma(3.5));
console.log("-----------------------------------------");
/*function rSigma(num) {
  console.log("rSigma(num) :", num);
  if (num % 1 !== 0) num = Math.floor(num);
  var sigma = 0;
  for (var i = 1; i <= num; i++) {
    sigma += i;
  }
  return sigma;
}
console.log(
  "rSigma(num) given a number returns sum of integers from 1 to that number. Example: rSigma(5) = 15 (1+2+3+4+5);rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.:"
);
console.log(rSigma(2));
console.log("-----------------------------------------");*/
