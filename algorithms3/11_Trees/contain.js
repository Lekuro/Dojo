BST.prototype.contain = function(value) {
  console.log("contain:", value, this.displayBST());
  var result = false;
  if (this.root) check(this.root);
  return result;
  function check(temp) {
    if (temp.val === value) {
      result = true;
    } else if (value < temp.val) {
      if (temp.left) check(temp.left);
    } else {
      if (temp.right) check(temp.right);
    }
  }
};
//var myBST = new BST();
console.log("contain:", myBST.contain(3));
console.log("contain:", myBST.contain(33));
