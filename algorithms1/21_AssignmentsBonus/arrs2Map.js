function Arrs2Map(arrKey, arrVal) {
  console.log("data:", arrKey, arrVal);
  var obj = {};
  for (var i = 0; i < arrKey.length; i++) {
    obj[arrKey[i]] = arrVal[i];
  }
  console.log(obj);
  return obj;
}
var arr = ["abc", 3, "yo"];
var arr2 = [42, "wassup", true];
Arrs2Map(arr, arr2);
