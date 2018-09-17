function reverseArray(arr) {
  console.log("original array:", arr);
  var temp;
  for (var i = 0; i < arr.length / 2; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
  console.log(arr);
  return arr;
}
var arr = [1, 2, 3, 4, 5];
reverseArray(arr);
