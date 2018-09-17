function printNumSum0to255() {
  var sum = 0;
  for (var i = 0; i <= 255; i++) {
    sum += i;
    console.log("number", i, "sum", sum);
  }
}
printNumSum0to255();
