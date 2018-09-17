function swapPairs(arr) {
  console.log("original array:", arr);
  var temp;
  for (i = 1; i < arr.length; i += 2) {
    temp = arr[i];
    arr[i] = arr[i - 1];
    arr[i - 1] = temp;
  }
  console.log(arr);
  return arr;
}
//var arr = [1, 2, 3, 4, 5];
var arr = ["Brendan", true, 42];
swapPairs(arr);
