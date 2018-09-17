function push(arr, value) {
  for (var j = 1; j < arguments.length; j++) {
    arr[arr.length] = arguments[j];
  }
  return arr;
}
var arr = [1, 2];
console.log(push(arr, 3, 4, 5, 6));
/*function push(arr, value) {
  arr[arr.length] = value;
  if (arguments.length > 2) {
    for (var j = 2; j < arguments.length; j++) {
      push(arr, arguments[j]);
    }
  }
  return arr;
}*/
