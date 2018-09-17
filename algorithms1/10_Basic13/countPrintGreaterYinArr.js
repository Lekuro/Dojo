function countGreaterYinArr(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > Y) {
      count++;
      console.log("print greater " + Y, arr[i]);
    }
  }
  return count;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  Y = 7;
console.log(
  "count greater " + Y + " in [" + arr + "] :",
  countGreaterYinArr(arr)
);
