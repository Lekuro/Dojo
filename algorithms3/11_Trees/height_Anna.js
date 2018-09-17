BST.prototype.heightAnna = function() {
  return getHeight(this.root);
  function getHeight(root) {
    let height;
    if (root === null) {
      return 0;
    }
    if (root.right === null && root.left === null) {
      return 1;
    } // leaf node
    height = 1 + Math.max(getHeight(root.right), getHeight(root.left));
    return height;
  }
};
console.log("heightAnna:", myBST.heightAnna(), myBST.displayBST());
console.log("heightAnna:", badBST.heightAnna(), badBST.displayBST());
