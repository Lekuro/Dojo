function skylineHeights(arr) {
  console.log("original array:", arr);
  var arrLength = arr.length;
  var idx;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[arr.length] = arr[i];
      idx = i;
      break;
    }
  }
  for (var i = idx + 1; i < arrLength; i++) {
    if (arr[i] > arr[arr.length - 1]) {
      arr[arr.length] = arr[i];
    }
  }
  for (var i = arrLength; i < arr.length; i++) {
    arr[i - arrLength] = arr[i];
  }
  arr.length -= arrLength;
  return arr;
}
var arr = [-1, 1, 1, 7, 3];
//var arr = [0, 4];
//var arr = [-6, -4, 0, 7, 3, 9];
console.log(skylineHeights(arr));
