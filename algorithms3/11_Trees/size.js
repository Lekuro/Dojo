BST.prototype.sizeBST = function() {
  var size = 0;
  if (this.root) {
    size++;
    isChild(this.root);
  }
  return size;
  function isChild(temp) {
    if (temp.right) {
      size++;
      isChild(temp.right);
    }
    if (temp.left) {
      size++;
      isChild(temp.left);
    }
  }
};
//var myBST = new BST();
console.log("size:", myBST.sizeBST(), myBST.displayBST());
