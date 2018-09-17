Trie.prototype.contains = function(word) {
  console.log("contain:", word);
  if (word.length === 0) return false;
  var node = this.root,
    index = 0;
  while (word[index]) {
    if (node.children[word[index]]) {
      node = node.children[word[index]];
      index++;
    } else return false;
  }
  return node.isWord;
};
console.log("contain:", myTrie.contains("cat"));
