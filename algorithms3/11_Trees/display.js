BST.prototype.displayBST = function() {
  //in order
  var strTree = "Tree: ";
  if (this.root) collectValue(this.root);
  function collectValue(temp) {
    if (temp.left) collectValue(temp.left);
    strTree += temp.val + "; ";
    if (temp.right) collectValue(temp.right);
  }
  //console.log(strTree);
  return strTree;
};
//myBST.display();
