function getPrintAverageInArr(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  var average = sum / arr.length;
  console.log("average in [" + arr + "] is:", average);
  return average;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
getPrintAverageInArr(arr);
