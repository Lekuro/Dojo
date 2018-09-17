function BSTNode(value) {
  if (!(this instanceof BSTNode)) return new BSTNode(value);
  this.val = value;
  this.left = null;
  this.right = null;
  /*this.add = function(node) {
    if (node.val >= this.val) {
      if (this.right) {
        this.right.add(node);
      } else {
        this.right = node;
      }
    } else {
      if (this.left) {
        this.left.add(node);
      } else {
        this.left = node;
      }
    }
  };*/
}
function BST() {
  if (!(this instanceof BST)) return new BST();
  this.root = null;
  /*this.add = function(value) {
    var newNode = new BSTNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.root.add(newNode);
    }
    return this;
  };*/
}
/*var myBST = new BST();
myBST
  .add(8)
  .add(0)
  .add(8)
  .add(3);
console.log(myBST);*/
var badBST = new BST();
var node1 = new BSTNode(1);
var node3 = new BSTNode(3);
var node8 = new BSTNode(8);
badBST.root = node3;
node3.left = node8;
node3.right = node1;
