BST.prototype.max = function() {
  var temp = this.root;
  while (temp) {
    if (temp.right) temp = temp.right;
    else return temp.val;
  }
};
//var myBST = new BST();
console.log("max: ", myBST.max(), myBST.displayBST());
