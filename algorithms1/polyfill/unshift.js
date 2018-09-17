function unshift(arr, value) {
  for (var j = arguments.length - 1; j > 0; j--) {
    for (var i = arr.length; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = arguments[j];
  }
  return arr;
}
//var arr = [2];
console.log(unshift(arr, 1, 2, 3, 4));
/*function unshift(arr, value) {
  if (arguments.length > 2) {
    for (var j = arguments.length - 1; j > 1; j--) {
      unshift(arr, arguments[j]);
    }
  }
  for (var i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = value;

  return arr;
}*/
