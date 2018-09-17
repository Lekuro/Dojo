BST.prototype.height = function(node) {
  if (!this.root) {
    return 0;
  }
  if (!node) {
    node = this.root;
  }
  if (!node.right && !node.left) {
    return 1;
  } else {
    let left = !node.left ? 0 : this.height(node.left);
    let right = !node.right ? 0 : this.height(node.right);
    //return left > right ? 1 + left : 1 + right
    return 1 + Math.max(left, right);
  }
};
