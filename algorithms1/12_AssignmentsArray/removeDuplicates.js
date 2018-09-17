function removeDuplicates(arr) {
  console.log("original array:", arr);
  for (var i = arr.length - 1; i > 0; i--) {
    if (arr[i] /*.toLowerCase()*/ === arr[i - 1] /*.toLowerCase()*/) {
      for (var subi = i; subi < arr.length - 1; subi++) {
        arr[subi] = arr[subi + 1];
      }
      arr.length = arr.length - 1;
    }
  }
  console.log(arr);
  return arr;
}
var arr = ["C", "c", "c", "c", "O", "o", "o", "o", "a"];
removeDuplicates(arr);
