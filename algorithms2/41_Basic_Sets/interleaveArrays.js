function interleaveArrays(arr1, arr2) {
  console.log("interleaveArrays() data:", arr1, arr2);
  var length,
    newArray = [];
  if (arr1.length > arr2.length) length = arr1.length;
  else length = arr2.length;
  for (var i = 0; i < length; i++) {
    if (i < arr1.length) newArray.push(arr1[i]);
    if (i < arr2.length) newArray.push(arr2[i]);
  }
  //console.log("result:", newArray);
  return newArray;
}
console.log(
  "interleaveArrays() Given two unsorted arrays, create a new array containing the elements of both, resulting in an unsorted merge of all values. When populating the new array alternate (interleave) values between the two arrays until one is exhausted, then include all of the other. Example: given [77,22,11,22] and [2,6,7,2,6,2] , return [77,2,22,6,11,7,22,2,6,2] ."
);
console.log(interleaveArrays([77, 22, 11, 22], [2, 6, 7, 2, 6, 2]));
console.log(interleaveArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 0]));
console.log(interleaveArrays([1, 3, 5], [2, 4, 6, 7, 8]));
console.log(interleaveArrays([1, 3, 5, 7, 8], [2, 4, 6]));
console.log(interleaveArrays([], [2, 4, 6, 7, 8]));
console.log(interleaveArrays([1, 3, 5, 7, 8], []));
/* my
function interleaveArrays(arr1, arr2) {
  console.log("interleaveArrays() data:", arr1, arr2);
  var length,
    newArray = [];
  arr1.length < arr2.length ? (length = arr1.length) : (length = arr2.length);
  for (var i = 0; i < length; i++) {
    newArray.push(arr1[i]);
    newArray.push(arr2[i]);
  }
  if (i < arr1.length) {
    for (var j = i; j < arr1.length; j++) newArray.push(arr1[j]);
  }
  if (i < arr2.length) {
    for (var j = i; j < arr2.length; j++) newArray.push(arr2[j]);
  }
  //console.log("result:", newArray);
  return newArray;
}*/
