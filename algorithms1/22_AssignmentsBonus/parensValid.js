function parensValid(str) {
  console.log("parensValid() data---", str);
  var iOpen = 0,
    iClose = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      iOpen++;
    }
    if (str[i] === ")") {
      iClose++;
      if (iClose > iOpen) return false;
    }
  }
  if (iClose !== iOpen) return false;
  return true;
}
var str = "y(3(p)p(3)r)s";
console.log(parensValid(str));
var str = "n(0(p)3";
console.log(parensValid(str));
var str = "n)0(t(0)k";
console.log(parensValid(str));
