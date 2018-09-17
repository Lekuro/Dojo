function invertHash(assocArr) {
  console.log("data:", assocArr);
  var invertObj = {};
  for (var key in assocArr) {
    invertObj[assocArr[key]] = key;
  }
  console.log(invertObj);
  return invertObj;
}
obj = { name: "Zaphod", numHeads: 2 };
invertHash(obj);
