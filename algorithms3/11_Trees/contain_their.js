BST.prototype.contains = function(value) {
  if (this.root === null) return false;
  return this.root.contains(value);
};
BSTNode.prototype.contains = function(value) {
  if (this.val === value) return true;
  if (value < this.val) {
    if (this.left) return this.left.contains(value);
  } else {
    if (this.right) return this.right.contains(value);
  }
  return false;
};
console.log("contain_their:", myBST.contains(8));
