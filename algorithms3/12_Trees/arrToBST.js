function arrToBST(arr) {
  console.log("arrToBST() data:", arr);
  let newBST = new BST();
  if (arr.length > 0) newBST.add(arr[Math.floor(arr.length / 2)]);
  if (arr.length % 2 === 1) {
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      newBST.add(arr[i]);
    }
  } else {
    for (let i = Math.floor(arr.length / 2) - 2; i >= 0; i--) {
      newBST.add(arr[i]);
    }
    newBST.add(arr[Math.floor(arr.length / 2) - 1]);
  }
  for (let i = Math.floor(arr.length / 2) + 1; i < arr.length; i++) {
    newBST.add(arr[i]);
  }
  console.log(newBST.displayBST());
  console.log(newBST.isBalanced());
  return newBST;
}

arrToBST([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
/*(function() {
  let arr = [];
  arrToBST(arr);
  for (let i = 1; i <= 16; i++) {
    arr.push(i);
    arrToBST(arr);
  }
})();*/
