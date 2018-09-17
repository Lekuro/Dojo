function intersectSortedArrays(arr1, arr2) {
  console.log("intersectSortedArrays() data:", arr1, arr2);
  var i1 = 0,
    i2 = 0,
    newArray = [];
  while (i1 < arr1.length && i2 < arr2.length) {
    if (arr1[i1] === arr2[i2]) {
      newArray.push(arr1[i1]);
      i1++;
      i2++;
    } else if (arr1[i1] < arr2[i2]) {
      i1++;
    } else {
      i2++;
    }
  }
  //console.log("result:", newArray);
  return newArray;
}
console.log(
  "intersectSortedArrays() Efficiently combine two sorted arrays into an array containing the sorted multiset intersection of the two. Example: given [1,2,2,2,7] and [2,2,6,6,7] , return [2,2,7] ."
);
console.log(intersectSortedArrays([1, 2, 2, 2, 7], [2, 2, 6, 6, 7]));
console.log(intersectSortedArrays([1, 1, 1, 3], [1, 1, 2, 6]));
console.log(intersectSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]));
