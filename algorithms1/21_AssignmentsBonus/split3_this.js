function split3(str, mark) {
  console.log("data:", str, "mark:", mark);
  var arr = [];
  var tempStr = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] === mark[0]) {
      for (subi = 1; subi < mark.length; subi++) {
        if (mark[subi] !== str[i + subi]) {
          break;
        }
        if (subi === mark.length - 1) {
          i += mark.length - 1;
        }
      }
      if (subi < mark.length) {
        tempStr += str[i];
        continue;
      }
      arr.push(tempStr);
      tempStr = "";
    } else {
      tempStr += str[i];
    }
  }
  arr.push(tempStr);
  console.log(arr);
  return arr;
}
var str = "aa bb cc",
  mark = " ";
split3(str, mark);
var str = "acc cc",
  mark = "c";
split3(str, mark); /**/
var str = "aa bab cc bbb dd",
  mark = "bbb";
split3(str, mark);
