function intersectionUnsortedArraysInPlace(arr1, arr2) {
  console.log("intersectionUnsortedArraysInPlace() data:", arr1, arr2);
  var i1, i, i2, count;
  //while (i1 < arr1.length && i2 < arr2.length)
  for (i1 = arr1.length - 1; i1 >= 0; i1--) {
    count = 0;
    for (i = i1 + 1; i < arr1.length; i++) {
      if (arr1[i] === arr1[i1]) count++;
    }
    for (i2 = 0; i2 < arr2.length; i2++) {
      if (arr1[i1] === arr2[i2]) {
        if (count === 0) break;
        else count--;
      }
    }
    if (i2 === arr2.length) {
      for (i = i1; i < arr1.length - 1; i++) {
        arr1[i] = arr1[i + 1];
      }
      //arr1.pop();
      arr1.length--;
    }
    //debugger;
  }
  console.log("result:", arr1);
  return arr1;
}
console.log(
  "intersectionUnsortedArraysInPlace() Intersect two unsorted arrays, putting the unsorted multiset result ‘in-place’ into the first. Running ‘in-place’ also means you cannot create any data structure to hold values, such as an associative array. Given [2,7,2,1,2] and [6,7,2,7,6,2] , you could change the first to [7,2,2] in any order."
);
intersectionUnsortedArraysInPlace([2, 7, 2, 1, 2], [6, 7, 2, 7, 6, 2]);
