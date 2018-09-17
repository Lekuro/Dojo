BST.prototype.displayPreOrder = function() {
  let strBST = "pre-order: ";
  if (this.root) buildBST(this.root);
  function buildBST(node) {
    //console.log(node.val);
    strBST = strBST + node.val + "; ";
    if (node.left) buildBST(node.left);
    if (node.right) buildBST(node.right);
  }
  //console.log(strBST);
  return strBST;
};
console.log(myBST.displayPreOrder());
