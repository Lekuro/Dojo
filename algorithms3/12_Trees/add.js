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
/*myBST
  .add(8)
  .add(88)
  .add(0)
  .add(8)
  .add(3);*/

myBST
  .add(25)
  .add(15)
  .add(22)
  .add(18);
myBST.add(24);
myBST.add(10);
myBST.add(4);
myBST.add(12);
myBST.add(50);
myBST.add(35);
myBST.add(31);
myBST.add(44);
myBST.add(70);
myBST.add(66);
myBST.add(90);
console.log(myBST);
console.log(myBST.displayBST());
