function split3(str, mark) {
  console.log("data:", str, "mark:", mark);
  var arr = [];
  while (~str.indexOf(mark)) {
    var idx = str.indexOf(mark);
    arr.push(str.substr(0, idx));
    str = str.substr(idx + mark.length);
  }
  arr.push(str);
  console.log(arr);
  return arr;
}
var str = "aa bb cc",
  mark = " ";
split3(str, mark);
var str = "acc cc",
  mark = "c";
split3(str, mark);
var str = "aa bab cc bbb dd",
  mark = "bbb";
split3(str, mark);
