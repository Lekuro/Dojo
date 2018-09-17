function insertAt(arr, index, value) {
  if (index >= 0) {
    for (var i = arr.length; i > index; i--) {
      arr[i] = arr[i - 1];
    }
    arr[index] = value;
  }
  return arr;
}
var arr = [1, 2, 4, 5, 6];
console.log(insertAt(arr, 2, 3));
