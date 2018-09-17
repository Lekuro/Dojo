function removeAt(arr, index) {
  if (index < arr.length && index >= 0) {
    var result = arr[index];
    for (var i = index; i < arr.length; i++) {
      arr[i] = arr[i + 1];
    }
    arr.pop();
    return result;
  }
  return arr;
}
var arr = [1, 2, 3];
console.log(removeAt(arr, 1));
console.log(arr);
