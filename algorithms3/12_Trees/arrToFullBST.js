function arrToFullBST(arr) {
  console.log("arrToBST() data:", arr);
  let newBST = new BST();
  if (arr.length > 0) newBST.add(arr[Math.floor(arr.length / 2)]);
  for (let i = 2; 0 < Math.floor(arr.length / (i * 2)); i *= 2) {
    for (let j = 0; j < i; j++) {
      newBST.add(arr[Math.floor(arr.length / (i * 2) + j * (arr.length / i))]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (!newBST.contain(arr[i])) newBST.add(arr[i]);
  }
  //console.log(newBST.displayBST());
  console.log(newBST.isBalanced());
  return newBST;
}
(function() {
  let arr = [];
  arrToFullBST(arr);
  for (let i = 1; i <= 64; i++) {
    arr.push(i);
    arrToFullBST(arr);
  }
})();
//arrToBST([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
