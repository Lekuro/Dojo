function bracesValid(str) {
  console.log("bracesValid() data---", str);
  var arrBraces = [],
    objBraces = { "(": ")", "[": "]", "{": "}" };
  for (var i = 0; i < str.length; i++) {
    for (var key in objBraces) {
      if (str[i] === key) {
        arrBraces[arrBraces.length] = str[i];
      } else if (str[i] === objBraces[key]) {
        if (arrBraces.length === 0) return false;
        if (arrBraces[arrBraces.length - 1] !== key) return false;
        arrBraces.length--;
      }
    }
  }
  return arrBraces.length === 0;
}

var str = "w(a{t}s[o(n{c}o)m]e)h[e{r}e]!";
console.log(bracesValid(str));
var str = "d(i{a}l[t]o)n{e";
console.log(bracesValid(str));
var str = "a(1)s[O(n]0{t)0}k";
console.log(bracesValid(str));
