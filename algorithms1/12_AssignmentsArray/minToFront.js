function minToFront(arr) {
  console.log("original array:", arr);
  var min = arr[0],
    idx = 0;
  for (var i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
      idx = i;
    }
  }
  for (var i = idx; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = min;
  console.log(arr);
  return arr;
}
var arr = [4, 2, 1, 3, 5];
minToFront(arr);
