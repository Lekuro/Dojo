function commonSuffix(arr) {
  console.log("commonSuffix() data---", arr);
  var count = 0;
  var strSuf = "";
  min = arr[0].length;
  for (var i = 1; i < arr.length; i++) {
    if (min > arr[i].length) min = arr[i].length;
  }
  //console.log(min);
  for (var i = 0; i <= min; i++) {
    for (var j = 1; j < arr.length; j++) {
      if (arr[0][arr[0].length - 1 - i] !== arr[j][arr[j].length - 1 - i])
        break;
    }
    if (j === arr.length) {
      count++;
    } else {
      break;
    }
  }
  for (var i = 0; i < count; i++) {
    strSuf += arr[0][arr[0].length - count + i];
  }
  //console.log(count);
  console.log(strSuf);
  return strSuf;
}
var arr = ["ovation", "notation", "action"];
commonSuffix(arr);
var arr = ["nice", "ice", "sic"];
commonSuffix(arr);
