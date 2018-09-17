function bookIndex(arr) {
  console.log("bookIndex() data---", arr);
  var str = "";
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === 1) {
      if (arr[i - 1] - arr[i - 2] !== 1) {
        str += arr[i - 1] + "-";
      }
    } else {
      str += arr[i - 1] + ", ";
    }
  }
  str += arr[arr.length - 1];
  console.log(str);
  return str;
}
var arr = [1, 3, 4, 5, 7, 8, 10];
bookIndex(arr);
var arr = [1, 2, 3, 5, 7, 8, 9, 10];
bookIndex(arr);
