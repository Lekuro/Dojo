function join2(arr) {
  console.log("data:", arr);
  var str = "";
  for (var i = 0; i < arr.length; i++) {
    str += arr[i];
  }
  console.log(str);
  return str;
}
var arr = ["a", "b", "c"];
join2(arr);
