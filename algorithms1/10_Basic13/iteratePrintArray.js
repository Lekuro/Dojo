function iteratePrintArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    console.log("iterate " + (i + 1) + " elements:", sum);
  }
  return sum;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
iteratePrintArray(arr);
