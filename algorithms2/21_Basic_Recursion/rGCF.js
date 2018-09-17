function rGCF(num1, num2) {
  console.log("rGCF() : ", num1, num2);
  if (num1 === num2) return num1;
  if (num1 > num2) {
    return rGCF(num1 - num2, num2);
  } else {
    return rGCF(num1, num2 - num1);
  }
}
console.log(
  "rGCF() Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor with the Euclidean Algorithm (the largest integer dividing evenly into both).: "
);
console.log(rGCF(270, 192)); //123456, 987654));
console.log("-----------------------------------------");
/*function rGCF(num1, num2) {
  console.log("rGCF() : ", num1, num2);
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 = num1 - num2;
    } else {
      num2 = num2 - num1;
    }
  }
  return num1;
}
console.log(
  "rGCF() Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor with the Euclidean Algorithm (the largest integer dividing evenly into both).: "
);
console.log(rGCF(270, 192)); //123456, 987654));
console.log("-----------------------------------------");*/
