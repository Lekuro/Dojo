function rGreatestCommonFactor(num1, num2) {
  console.log("rGeatestCommonFactor() : ", num1, num2);
  if (num1 === 0) return num2;
  if (num2 === 0) return num1;
  if (num1 > num2) {
    return rGreatestCommonFactor(num1 % num2, num2);
  } else {
    return rGreatestCommonFactor(num1, num2 % num1);
  }
}
console.log(
  "rGeatestCommonFactor() Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor with the Euclidean Algorithm (the largest integer dividing evenly into both).: "
);
console.log(rGreatestCommonFactor(123456, 987654));
console.log("-----------------------------------------");
/*function rGreatestCommonFactor(num1, num2) {
  console.log("rGeatestCommonFactor() : ", num1, num2);
  while (num1 !== 0 || num2 === 0) {
    if (num1 > num2) {
      num1 = num1 % num2;
    } else {
      num2 = num2 % num1;
    }
  }
  return num1 || num2;
}
console.log(
  "rGeatestCommonFactor() Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor with the Euclidean Algorithm (the largest integer dividing evenly into both).: "
);
console.log(rGreatestCommonFactor(123456, 987654));
console.log("-----------------------------------------");*/
