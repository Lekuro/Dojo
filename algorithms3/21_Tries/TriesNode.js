function TriesNode(letter) {
  if (!(this instanceof TriesNode)) return new TrieNode(letter);
  this.letter = letter;
  this.isWord = false;
  //this.isEndNode = false;
  this.children = {};
  this.hasChildren = function() {
    return Object.keys(this.children).length != 0;
  };
  this.childCount = function() {
    return Object.keys(this.children).length;
  };
}
function Trie() {
  if (!(this instanceof Trie)) return new Trie();
  this.root = new TriesNode("");
  /*this.add = function(word) {
    _add(word, 0, this.root);
  };
  function _add(word, index, node) {
    if (word[index] && !node.children[word[index]]) {
      node.children[word[index]] = new TriesNode(word[index]);
    }
    if (word.length > index) {
      _add(word, index + 1, node.children[word[index]]);
    } else {
      node.isEndNode = true;
      node.isWord = true;
      return this;
    }
  }*/
}

/*var myTrie = new Trie();
console.log(myTrie);
myTrie.add("cats");
console.log(myTrie.root);*/
