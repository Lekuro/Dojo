BST.prototype.displayPostOrder = function() {
  let strBST = "post-order: ";
  if (this.root) buildBST(this.root);
  function buildBST(node) {
    if (node.left) buildBST(node.left);
    if (node.right) buildBST(node.right);
    //console.log(node.val);
    strBST = strBST + node.val + "; ";
  }
  //console.log(strBST)
  return strBST;
};
console.log(myBST.displayPostOrder());
