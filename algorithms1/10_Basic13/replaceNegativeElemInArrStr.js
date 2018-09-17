function replaceNegativeElemInArrStr(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = "Dojo";
    }
  }
  return arr;
}
var arr = [-1, -2, -3, -4, -5, -6, 7, 8, 9, 0];
console.log(
  "replace negative elements in [" + arr + "] :",
  replaceNegativeElemInArrStr(arr)
);
