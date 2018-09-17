function insertionArray(arr) {
  console.log("insertionArray() data:", arr);
  var count = 0;
  var change = 0;
  for (var k = 1; k < arr.length; k++) {
    var current = arr[k];
    var i = k;
    count++;
    while (0 < i && current < arr[i - 1]) {
      count++;
      arr[i] = arr[i - 1];
      i--;
      change++;
    }
    arr[i] = current;
  }
  console.log("result: ", arr, "count: ", count, "change:", change);
  return arr;
}
console.log(
  "insertionArray() create a function that InsertionSort to sort an unsorted array in-place. What is the run-time complexity? What is the space complexity?"
);
/*bug: swaps all times
function insertionArray(arr) {
  console.log("insertionArray() data:", arr);
  var count = 0;
  var change = 0;
  for (var k = 1; k < arr.length; k++) {
    var current = arr[k];
    var indexCurrent = k;
    for (var i = k - 1; i >= 0; i--) {
      count++;
      if (arr[i] > current) {
        change++;
        arr[indexCurrent] = arr[i];
        arr[i] = current;
        indexCurrent--;
      } else break;
    }
  }
  console.log("result: ", arr, "count: ", count, "change:", change);
  return arr;
}*/

insertionArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
insertionArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
insertionArray([1, 3, 5, 2, 6, 0, 4]);
//insertionArray([1, 2, 3, 10, 9, 8, 7, 6, 5, 4]);
console.log("------------------------------------------");
