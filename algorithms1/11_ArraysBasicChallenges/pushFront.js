function pushFront(arr, value) {
  for (var i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = value;
  return arr;
}
var arr = [2];
console.log(pushFront(arr, 3));
