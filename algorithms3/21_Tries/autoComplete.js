Trie.prototype.autoComplete = function(str) {
  console.log("autoComplete:", str, this);
  var result = [];
  if (this.root && str) {
    var word = str;
    var partWord = "";
    var node = this.root,
      index = 0;
    while (word[index]) {
      if (node.children[word[index]]) {
        node = node.children[word[index]];
        index++;
      } else return result;
    }
    if (node.isWord) result.push(word);
    if (node.childCount() > 1) partWord = word;
    if (node.hasChildren()) node = node.children;
    searchWord(node);
    function searchWord(temp) {
      for (key in temp) {
        word += temp[key].letter;
        if (temp[key].childCount() > 1) partWord = word;
        if (temp[key].isWord) result.push(word);
        if (temp[key].hasChildren()) searchWord(temp[key].children);
        else word = partWord;
      }
    }
  }
  return result;
};
console.log("autoComplete:", myTrie.autoComplete("c"));
