BST.prototype.add = function(value) {
  var newNode = new BSTNode(value);
  if (!this.root) {
    this.root = newNode;
  } else {
    var temp = this.root;
    while (temp) {
      if (value >= temp.val) {
        if (temp.right) {
          temp = temp.right;
        } else {
          temp.right = newNode;
          break;
        }
      } else {
        if (temp.left) {
          temp = temp.left;
        } else {
          temp.left = newNode;
          break;
        }
      }
    }
  }
  return this;
};
var myBST = new BST();
myBST
  .add(8)
  .add(88)
  .add(0)
  .add(8)
  .add(3);
console.log(myBST);
console.log(myBST.displayBST());
