function getArrayOdd1to255() {
  var arr = [];
  for (var i = 1; i <= 255; i += 2) {
    arr.push(i);
  }
  return arr;
}
console.log("array odd 1-255:", getArrayOdd1to255());
