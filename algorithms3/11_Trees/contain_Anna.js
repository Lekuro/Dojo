BST.prototype.contain = function(value) {
  if (this.root === null) return false;
  let curr = this.root;
  while (curr) {
    if (value === curr.val) return true;
    curr = value < curr.val ? curr.left : curr.right;
    //if (value < curr.val) curr = curr.left
    //else curr = curr.right
  }
  return false;
};
