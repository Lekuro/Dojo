//1---Print1To255();
//Print all the integers from 1 to 255.

function print1to255() {
  for (var num = 1; num <= 255; num++) {
    console.log(num);
  }
}
print1to255();

//2---PrintIntsAndSum0To255();
//Print integers from 0 to 255, and the sum so far.

function printSum0to255() {
  var sum = 0;
  for (var num = 0; num <= 255; num++) {
    sum += num;
    console.log(num, "  Sum:", sum);
  }
}
printSum0to255();

//3---PrintMaxOfArray(arr);
//Print the largest element in a given array.

function printArrayMax(arr) {
  if (arr.length == 0) {
    console.log("[ ], no max val.");
    return;
  }
  var max = arr[0];
  for (var idx = 1; idx < arr.length; idx++) {
    if (arr[idx] > max) {
      max = arr[idx];
    }
  }
  console.log("Max val:", max);
}
var arr = [1, 2, 3, 4, 5, 6, 7, -8];
printArrayMax(arr);

//4---PrintOdds1To255()
//Print all odd integers from 1 to 255.

function printOdds1to255() {
  var num = 1;
  while (num <= 255) {
    console.log(num);
    num += 2;
  }
}
printOdds1to255();

//5---PrintArrayVals(arr)
//Print all values in a given array.

function printArrayValues(arr) {
  for (var idx = 0; idx < arr.length; idx++) {
    console.log("array[", idx, "] =", arr[idx]);
  }
}
printArrayValues(arr);

//6---PrintAverageOfArray(arr)
//Analyze an array’s values and print the average.

function printArrayAverage(arr) {
  if (arr.length == 0) {
    console.log("[ ], no avg val.");
    return;
  }
  var sum = arr[0];
  for (var idx = 1; idx < arr.length; idx++) {
    sum += arr[idx];
  }
  console.log(sum / arr.length);
}
printArrayAverage(arr);

//7---ReturnOddsArray1To255()
//Create & return an array with odd integers from 1-255.

function oddArray1to255() {
  // create empty array
  var arr = [];
  // setup for loop, with max iterations
  for (var i = 1; i <= 255; i += 2) {
    arr.push(i);
  }
  //   add # to array
  // return array
  //console.log(arr);
  return arr;
}
oddArray1to255();

//8---ReturnArrayCountGreaterThanY(arr, y)
//Given an array, return the count that is greater than Y.

function numGreaterThanY(arr, y) {
  var numGreater = 0;
  for (var idx = 0; idx < arr.length; idx++) {
    if (arr[idx] > y) {
      numGreater++;
    }
  }
  //console.log("%d values greater than %d", numGreater, y); //?
  return numGreater;
}
var y = 3;
numGreaterThanY(arr, y);

//9---PrintMaxMinAverageArrayVals(arr)
//Given an array, print max, min and average values.

function maxMinAverage(arr) {
  if (arr.length == 0) {
    console.log("[] arr, no min/max/avg");
    return;
  }
  var min = arr[0];
  var max = arr[0];
  var sum = arr[0];
  for (var idx = 1; idx < arr.length; idx++) {
    if (arr[idx] < min) {
      min = arr[idx];
    }
    if (arr[idx] > max) {
      max = arr[idx];
    }
    sum += arr[idx];
  }
  console.log("Max val:", max);
  console.log("Min val:", min);
  console.log("Avg val:", sum / arr.length);
  //return [max, min, sum / arr.length]; //?
}
maxMinAverage(arr);

//11---ZeroOutArrayNegativeVals(arr)
//Given an array, set negative values to zero.

function setNegsToZero(arr) {
  for (var idx = 0; idx < arr.length; idx++) {
    if (arr[idx] < 0) {
      arr[idx] = 0;
    }
  }
  //console.log(arr); //
  //return arr; //
}
setNegsToZero(arr);

//10---SquareArrayVals(arr)
//Given an array, square each value in the array.

function squareArrVals(arr) {
  for (idx = 0; idx < arr.length; idx++) {
    arr[idx] = arr[idx] * arr[idx];
  }
  //console.log(arr); //
  //return arr; //
}
squareArrVals(arr);

//12---ShiftArrayValsLeft(arr)
//Given an array, shift values leftward by one. Drop first values and leave extra '0' value(s) at end.

function arrShift(arr) {
  for (var idx = 1; idx < arr.length; idx++) {
    arr[idx - 1] = arr[idx];
  }
  arr[arr.length - 1] = 0;
  //console.log(arr); //
  return arr; //?
}
arrShift(arr);

//13---SwapStringForArrayNegativeVals(arr)
//Given an array, replace negative values with 'Dojo'.

function subStringForNegs(arr) {
  for (var idx = 0; idx < arr.length; idx++) {
    if (arr[idx] < 0) {
      arr[idx] = "Dojo";
    }
  }
  //console.log(arr); //
  return arr; //?
}
var arr = [1, 2, 3, 4, 5, 6, 7, -8];
subStringForNegs(arr);
