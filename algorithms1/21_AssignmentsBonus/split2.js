function split2(str) {
  console.log("data:", str);
  var arr = [];
  for (var i = 0; i < str.length; i++) {
    arr[i] = str[i];
  }
  console.log(arr);
  return arr;
}
var str = "abc";
split2(str);
