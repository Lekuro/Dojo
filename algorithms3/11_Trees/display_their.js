BST.prototype.display = function() {
  console.log("Displaying Tree Value");
  if (this.root) this.root.display();
  return this;
};
BSTNode.prototype.display = function() {
  if (this.left) this.left.display();
  console.log(this.val);
  if (this.right) this.right.display();
  return this;
};
myBST.display();
