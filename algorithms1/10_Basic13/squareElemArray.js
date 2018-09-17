function squareElemArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] ** 2; //*arr[i]
  }
  return arr;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log("square elements in [" + arr + "] :", squareElemArray(arr));
