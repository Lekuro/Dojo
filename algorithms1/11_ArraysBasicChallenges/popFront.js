function popFront(arr) {
  var result = arr[0];
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.pop();
  return result;
}
//var arr = [1, 2, 3];
console.log(popFront(arr));
console.log(arr);
