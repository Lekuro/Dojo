function rBinarySearch(arr, mark, left = 0, right = arr.length) {
  console.log("rBinarySearch() : ", arr, mark, left, right);
  var midpoint = Math.floor((right + left) / 2);
  console.log(midpoint);
  if (mark === arr[midpoint]) return true;
  if (right <= left) return false;
  if (mark < arr[midpoint]) right = midpoint - 1;
  if (mark > arr[midpoint]) left = midpoint + 1;
  return rBinarySearch(arr, mark, left, right);
}
console.log(
  "rBinarySearch() Given a sorted array and a value, recursively determine whether value is found within array. rBinarySearch([1,3,5,6],4) = false ;rBinarySearch([4,5,6,8,12],5) = true.: "
);
console.log(rBinarySearch([1, 2, 3, 4, 5, 6, 7, 8], 8));
console.log("-----------------------------------------");
/*function rBinarySearch(arr, num) {
  console.log("rBinarySearch() : ", num, arr);
  idx = arr.length - 1;
  console.log(idx);
  if (idx === -1) return;
  if (arr[idx] !== num) {
    arr.length--; // = arr.length - 1;
    rBinarySearch(arr, num);
  }
  return arr[idx] === num;
}
console.log(
  "rBinarySearch() Given a sorted array and a value, recursively determine whether value is found within array. rBinarySearch([1,3,5,6],4) = false ;rBinarySearch([4,5,6,8,12],5) = true.: "
);
console.log(rBinarySearch([1, 3, 5, 6], 1));
console.log("-----------------------------------------");*/
/*function rBinarySearch(arr, num) {
  console.log("rBinarySearch() : ", num, arr);
  for (var i = 0; i < arr.length; i++) {
    if (arr[idx] === num) return true;
  }
  return false;
}
console.log(
  "rBinarySearch() Given a sorted array and a value, recursively determine whether value is found within array. rBinarySearch([1,3,5,6],4) = false ;rBinarySearch([4,5,6,8,12],5) = true.: "
);
console.log(rBinarySearch([1, 3, 5, 6], 1));
console.log("-----------------------------------------");*/
/*function rBinarySearch(arr, num) {
  console.log(
    "rBinarySearch() Given a sorted array and a value, recursively determine whether value is found within array. rBinarySearch([1,3,5,6],4) = false ;rBinarySearch([4,5,6,8,12],5) = true.: ",
    num,
    arr
  );
  idx = arr.length - 1;
  console.log(idx);
  if (idx === -1) {
    console.log(false);
    return false;
  }
  if (arr[idx] === num) {
    console.log(true);
    return true;
  } else {
    arr.length--; // = arr.length - 1;
    rBinarySearch(arr, num);
  }
  return arr[idx] === num;
}
console.log(rBinarySearch([1, 3, 5, 6], 3));
console.log("-----------------------------------------");
*/
