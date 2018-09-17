BST.prototype.heightBST = function() {
  return this.root ? this.root.heightBST() : 0;
};
BSTNode.prototype.heightBST = function() {
  var left = this.left ? this.left.heightBST() : 0;
  var right = this.right ? this.right.heightBST() : 0;
  return 1 + Math.max(left, right);
};
