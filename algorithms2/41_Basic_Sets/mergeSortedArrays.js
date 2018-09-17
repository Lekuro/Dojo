function mergeSortedArrays(arr1, arr2) {
  console.log("mergeSortedArrays() data:", arr1, arr2);
  var i1 = 0,
    i2 = 0,
    newArray = [];
  while (i1 < arr1.length && i2 < arr2.length) {
    if (arr1[i1] < arr2[i2]) {
      newArray.push(arr1[i1]);
      i1++;
    } else {
      newArray.push(arr2[i2]);
      i2++;
    }
  }
  if (i1 < arr1.length) {
    for (var j = i1; j < arr1.length; j++) newArray.push(arr1[j]);
  }
  if (i2 < arr2.length) {
    for (var j = i2; j < arr2.length; j++) newArray.push(arr2[j]);
  }
  //console.log("result:", newArray);
  return newArray;
}
console.log(
  "mergeSortedArrays() Efficiently merge two already-sorted arrays into a new sorted array containing the multiset of all values. Example: given [1,2,2,2,7] and [2,2,6,6,7] , return new array [1,2,2,2,2,2,6,6,7,7] ."
);
console.log(mergeSortedArrays([1, 2, 2, 2, 7], [2, 2, 6, 6, 7]));
console.log(mergeSortedArrays([1, 1, 1, 3], [1, 1, 2, 6]));
console.log(mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]));
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6, 7, 8]));
console.log(mergeSortedArrays([1, 3, 5, 7, 8], [2, 4, 6]));
console.log(mergeSortedArrays([], [2, 4, 6, 7, 8]));
console.log(mergeSortedArrays([1, 3, 5, 7, 8], []));
