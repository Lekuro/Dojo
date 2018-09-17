function BSTNode(value) {
  if (!(this instanceof BSTNode)) return new BSTNode(value);
  this.val = value;
  this.left = null;
  this.right = null;
}
function BST() {
  if (!(this instanceof BST)) return new BST();
  this.root = null;
}
var myBST = new BST();
/*myBST
  .add(8)
  .add(0)
  .add(8)
  .add(3);
console.log(myBST);
var badBST = new BST();
var node1 = new BSTNode(1);
var node3 = new BSTNode(3);
var node8 = new BSTNode(8);
badBST.root = node3;
node3.left = node8;
node3.right = node1;*/
