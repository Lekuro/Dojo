function quickSort(arr) {
  console.log("quickSort() data:", arr);
  var lowerArray = [];
  var middleArray = [arr[0]]; //pivot
  var higherArray = [];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < middleArray[0]) {
      lowerArray.push(arr[i]);
    } else if (arr[i] > middleArray[0]) {
      higherArray.push(arr[i]);
    } else {
      middleArray.push(arr[i]);
    }
  }
  if (lowerArray.length > 1) {
    var resultLower = quickSort(lowerArray);
  } else {
    resultLower = lowerArray;
  }
  if (higherArray.length > 1) {
    var resultHigher = quickSort(higherArray);
  } else {
    resultHigher = higherArray;
  }
  return resultLower.concat(middleArray).concat(resultHigher);
}
console.log(quickSort([7, 2, 4, 9, 5, 2, 3, 8]));
console.log(quickSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(quickSort([1, 3, 5, 2, 6, 0, 4]));
/*function quickSort(arr) {
  console.log("quickSort() data:", arr);
  if (arr.length < 2) return arr;
  var lowerArray = [];
  var middleArray = [arr[0]]; //pivot
  var higherArray = [];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < middleArray[0]) {
      lowerArray.push(arr[i]);
    } else if (arr[i] === middleArray[0]) {
      middleArray.push(arr[i]);
    } else {
      higherArray.push(arr[i]);
    }
  }
  return quickSort(lowerArray)
    .concat(middleArray)
    .concat(quickSort(higherArray));
}
console.log(quickSort([7, 2, 4, 9, 5, 3, 8]));*/
