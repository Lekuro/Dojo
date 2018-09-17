function combineArray(arr1, arr2) {
  console.log("combineArray() data:", arr1, arr2);
  var i1 = 0,
    i2 = 0;
  while (i1 < arr1.length) {
    if (arr2[i2] < arr1[i1]) {
      for (var i = arr1.length; i >= i1; i--) {
        arr1[i] = arr1[i - 1];
      }
      arr1[i1] = arr2[i2];
      i1++;
      i2++;
    } else i1++;
  }
  while (i2 < arr2.length) {
    arr1[arr1.length] = arr2[i2];
    i2++;
  }
  console.log("result: ", arr1);
  return arr1;
}
console.log(
  "combineArray() create a function combineArrs(arr1,arr2) that sorts two already separately sorted arrays, placing the result back into the first provided array. Can you work completely in-place?"
);
combineArray([1, 3, 5, 6, 9], [2, 3, 4, 7, 8, 10]);
console.log("------------------------------------------");
