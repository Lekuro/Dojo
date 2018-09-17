function findPrintMaxInArray(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
  }
  console.log("largest element in [" + arr + "] is:", max);
  return max;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
findPrintMaxInArray(arr);
