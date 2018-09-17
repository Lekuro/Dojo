function selectionArray(arr) {
  console.log("selectionArray() data:", arr);
  var count = 0;
  var change = 0;
  for (var k = 0; k < arr.length - 1; k++) {
    var indexMin = k;
    for (var i = k + 1; i < arr.length; i++) {
      count++;
      if (arr[i] < arr[indexMin]) {
        indexMin = i;
      }
    }
    if (indexMin !== k) {
      change++;
      var temp = arr[k];
      arr[k] = arr[indexMin];
      arr[indexMin] = temp;
    }
  }
  console.log("result: ", arr, "count: ", count, "change:", change);
  return arr;
}
console.log(
  "selectionArray() create a function that uses SelectionSort to sort an unsorted array in-place."
);
selectionArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
selectionArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
selectionArray([1, 3, 5, 2, 6, 0, 4]);
console.log("------------------------------------------");
