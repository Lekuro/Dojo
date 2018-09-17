function concat(arr, arr2) {
  console.log("original array:", arr, arr2);
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr[i] = arr[i];
  }
  for (var i = arr.length; i < arr.length + arr2.length; i++) {
    newArr[i] = arr2[i - arr.length];
  }
  return newArr;
}
var arr = [1, 2, 3, 4],
  arr2 = [5, 6, 7, 8, 9, 0];
var arrNew = concat(arr, arr2);
console.log(arrNew);
