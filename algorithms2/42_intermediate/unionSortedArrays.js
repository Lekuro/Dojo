function unionSortedArrays(arr1, arr2) {
  console.log("unionSortedArrays() data:", arr1, arr2);
  var i1 = 0,
    i2 = 0,
    newArray = [];
  while (i1 < arr1.length || i2 < arr2.length) {
    if (arr1[i1] === arr2[i2]) {
      newArray.push(arr1[i1]);
      i1++;
      i2++;
    } else if (arr1[i1] === newArray[newArray.length - 1]) {
      newArray.push(arr1[i1]);
      i1++;
    } else if (arr2[i2] === newArray[newArray.length - 1]) {
      newArray.push(arr2[i2]);
      i2++;
    } else if (arr1[i1] < arr2[i2]) {
      newArray.push(arr1[i1]);
      i1++;
    } else {
      newArray.push(arr2[i2]);
      i2++;
    }
    //debugger;
  }
  console.log("result:", newArray);
  return newArray;
}
console.log(
  "unionSortedArrays() Efficiently combine two already-sorted arrays into a new sorted array containing the multiset union . Example: given [1,2,2,2,7] and [2,2,6,6,7] , return [1,2,2,2,6,6,7] ."
);
unionSortedArrays([1, 2, 2, 2, 7], [2, 2, 6, 6, 7]);
