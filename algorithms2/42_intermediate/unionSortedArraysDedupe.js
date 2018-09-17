function unionSortedArraysDedupe(arr1, arr2) {
  console.log("unionSortedArraysDedupe() data:", arr1, arr2);
  var i1 = 0,
    i2 = 0,
    newArray = [];
  while (i1 < arr1.length || i2 < arr2.length) {
    if (arr1[i1] === arr2[i2] && arr1[i1] !== newArray[newArray.length - 1]) {
      newArray.push(arr1[i1]);
      i1++;
      i2++;
    } else if (arr1[i1] === newArray[newArray.length - 1]) {
      i1++;
    } else if (arr2[i2] === newArray[newArray.length - 1]) {
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
  "unionSortedArraysDedupe() Combine two sorted arrays into a new sorted array containing the union set (i.e. remove duplicates). Example: given [1,2,2,2,7] and [2,6,6,7] , return [1,2,6,7] ."
);
unionSortedArraysDedupe([1, 2, 2, 2, 7], [2, 2, 6, 6, 7]);
