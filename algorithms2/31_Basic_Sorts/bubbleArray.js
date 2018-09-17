function bubbleArray(arr) {
  console.log("bubbleArray() data:", arr);
  var count = 0;
  //for (var k = 0; k < arr.length - 1; k++) {
  var notSorted = true;
  var iteration = 0;
  while (notSorted) {
    notSorted = false;
    for (var i = 0; i < arr.length - 1 - iteration; i++) {
      count++;
      if (arr[i] > arr[i + 1]) {
        notSorted = true;
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    iteration++;
  }
  //}
  console.log("result: ", arr, "count: ", count);
  return arr;
}
console.log(
  "bubbleArray() create a function that uses BubbleSort to sort an unsorted array in-place."
);
bubbleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
bubbleArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
bubbleArray([1, 3, 5, 2, 6, 0, 4]);
console.log("------------------------------------------");
