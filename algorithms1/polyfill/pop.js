function pop(arr) {
  var result = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return result;
}
//var arr = [1, 2, 3];
console.log(pop(arr));
console.log(arr);
//console.log(arr[arr.length]);
