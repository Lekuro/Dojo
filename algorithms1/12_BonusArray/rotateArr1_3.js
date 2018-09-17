function rotateArray(arr, shiftBy) {
  if (arr.length != shiftBy) {
    var temp = [shiftBy];
    var tempPointer = arr.length - shiftBy;

    for (var i = 0; i < temp.length; ++i) {
      temp[i] = arr[tempPointer++];
    }

    for (var i = arr.length - shiftBy - 1; i >= 0; --i) {
      arr[i + shiftBy] = arr[i];
    }

    for (var i = 0; i < temp.length; ++i) {
      arr[i] = temp[i];
    }
  }
  console.log(arr);
  return arr;
}
rotateArray([1, 2, 3, 4, 5, 6], 4);
