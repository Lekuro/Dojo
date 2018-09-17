function rotateArr(arr, shiftBy) {
  console.log("original array:", arr, "shift:", shiftBy);
  var newArr = [];
  if (shiftBy < 0) {
    shiftBy = arr.length + shiftBy;
  }
  for (var i = 0; i < arr.length; i++) {
    if (i + shiftBy < arr.length) {
      newArr[i + shiftBy] = arr[i];
    } else {
      newArr[i + shiftBy - arr.length] = arr[i];
    }
  }
  return newArr;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(rotateArr(arr, -3));
