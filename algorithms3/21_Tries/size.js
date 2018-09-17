Trie.prototype.sizeTrie = function() {
  var size = 0;
  var curr = this.root;
  if (curr.hasChildren()) walk(curr.children);
  function walk(temp) {
    //console.log(temp);
    for (key in temp) {
      //console.log(temp[key]);
      if (temp[key].isWord) size++;
      if (temp[key].hasChildren()) walk(temp[key].children);
    }
  }
  return size;
};
console.log("size:", myTrie.sizeTrie());
