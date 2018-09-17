function intersectionUnsortedArraysInPlace(arr1, arr2) {
  console.log("intersectionUnsortedArraysInPlace() data:", arr1, arr2);
  var i1, i, i2, count;
  var result = [];
  //while (i1 < arr1.length && i2 < arr2.length)
  for (i1 = 0; i1 < arr1.length; i1++) {
    count = 0;
    for (i = 0; i < result.length; i++) {
      if (result[i] === arr1[i1]) count++;
    }
    for (i2 = 0; i2 < arr2.length; i2++) {
      if (arr1[i1] === arr2[i2]) {
        if (count === 0) break;
        else count--;
      }
    }
    if (i2 < arr2.length) {
      result.push(arr1[i1]);
    }
    //debugger;
  }
  console.log("result:", result);
  return result;
}
console.log(
  "intersectionUnsortedArraysInPlace() Intersect two arrays to create an unsorted multiset. You can use an additional data structure type if it is helpful. However, don’t alter the arrays; return a new one. Given the arrays [6,7,2,7,6,2] and [2,7,2,1,2], return a new array containing [7,2,2] in any order. Is ‘non-in-place’ easier? Faster?"
);
intersectionUnsortedArraysInPlace([2, 7, 2, 1, 2], [6, 7, 2, 7, 6, 2]);
