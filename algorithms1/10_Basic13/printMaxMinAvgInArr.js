function printMaxMinAvgInArr(arr) {
  var max = arr[0],
    min = arr[0],
    sum = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
    sum += arr[i];
  }
  var avg = sum / arr.length;
  console.log("maximum", max);
  console.log("minimum", min);
  console.log("average", avg);
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
printMaxMinAvgInArr(arr);
