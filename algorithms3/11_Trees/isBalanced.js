BST.prototype.isBalanced = function() {
  if (this.root === null) return true;
  if (!this.root.left && !this.root.right) return true;
  if (this.root.left && this.root.right) {
    if (this.root.left.heightBST() === this.root.right.heightBST()) return true;
  }
  return false;
};
//var myBST = new BST();
//myBST.add(0).add(3);
console.log("isBalanced:", myBST.isBalanced(), myBST.displayBST());
