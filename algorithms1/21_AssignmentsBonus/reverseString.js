function reverseString(str) {
  console.log("data:", str);
  var strReversed = "";
  var strLength = str.length;
  for (var i = 0; i < str.length; i++) {
    console.log();
    strReversed += str[strLength - i - 1];
  }
  console.log(strReversed);
  return strReversed;
}
var str = "creature";
reverseString(str);
