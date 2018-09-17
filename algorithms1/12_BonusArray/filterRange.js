function filterRange(arr, min, max) {
  console.log("original array:", arr, "min:", min, "max:", max);
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] <= min || arr[i] >= max) {
      for (var j = i; j < arr.length - 1; j++) {
        arr[j] = arr[j + 1];
      }
      arr.length = arr.length - 1;
    }
  }
  console.log(arr);
  return arr;
}
var arr = [4, 3, 1, 2, 6, 5, 9, 0, 8, 7],
  min = 3,
  max = 8;
filterRange(arr, min, max);
