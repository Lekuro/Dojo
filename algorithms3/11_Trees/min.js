BST.prototype.min = function() {
  var temp = this.root;
  while (temp) {
    if (temp.left) temp = temp.left;
    else return temp.val;
  }
};
//var myBST = new BST();
console.log("min:", myBST.min(), myBST.displayBST());
