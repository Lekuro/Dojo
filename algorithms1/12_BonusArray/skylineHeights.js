/*with new arr*/
function skylineHeights(arr) {
  console.log("original array:", arr);
  var visBuild = [];
  var idx;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      visBuild[visBuild.length] = arr[i];
      idx = i;
      break;
    }
  }
  for (var i = idx + 1; i < arr.length; i++) {
    if (arr[i] > visBuild[visBuild.length - 1]) {
      visBuild[visBuild.length] = arr[i];
    }
  }
  return visBuild;
}
//var arr = [-1, 1, 1, 7, 3];
//var arr = [0, 4];
var arr = [-6, -4, 0, 7, 3, 9];
console.log(skylineHeights(arr));
