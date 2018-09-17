function rotateArr(arr, shiftBy) {
  console.log("original array:", arr, "shift:", shiftBy);
  var arrLength = arr.length;
  if (Math.abs(shiftBy) > arrLength) {
    shiftBy = shiftBy % arrLength;
    console.log(shiftBy);
  }
  if (shiftBy < 0) {
    shiftBy = arrLength + shiftBy;
    console.log(shiftBy);
  }
  for (var i = arrLength - 1; i >= 0; i--) {
    arr[i + shiftBy] = arr[i];
  }
  console.log(arr);
  for (var i = 0; i < shiftBy; i++) {
    arr[i] = arr[arrLength + i];
  }
  arr.length = arrLength;
  console.log(arr);
  return arr;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
rotateArr(arr, -10);
