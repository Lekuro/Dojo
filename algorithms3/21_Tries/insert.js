Trie.prototype.insert = function(word) {
  add(word, 0, this.root);
  function add(word, index, node) {
    if (word[index] && !node.children[word[index]]) {
      node.children[word[index]] = new TriesNode(word[index]);
    }
    if (word.length > index) {
      add(word, index + 1, node.children[word[index]]);
    } else {
      //node.isEndNode = true;
      node.isWord = true;
      return this;
    }
  }
};
var myTrie = new Trie();
console.log(myTrie);
myTrie.insert("cats");
myTrie.insert("cat");
myTrie.insert("cars");
myTrie.insert("bats");
myTrie.insert("bars");
myTrie.insert("bar");
//myTrie.insert("Peter");
myTrie.insert("piper");
myTrie.insert("v");
//console.log(myTrie.root.children["c"].children["a"]);
