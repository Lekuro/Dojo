BST.prototype.isValid = function() {
  if (this.root === null) return true;
  return this.root.isValid(-Number.MAX_VALUE, Number.MAX_VALUE);
};
BSTNode.prototype.isValid = function(minBound, maxBound) {
  if (this.val < minBound || this.val > maxBound) return false;
  let valid = true;
  if (this.left) valid = this.left.isValid(minBound, this.val);
  if (this.right) valid = valid && this.right.isValid(this.val, maxBound);
  return valid;
};
console.log("isValid: ", myBST.displayBST(), myBST.isValid());
console.log("isValid: ", badBST.displayBST(), badBST.isValid());
