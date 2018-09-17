Trie.prototype.remove = function(word) {
  console.log("remove:", word);
  //if (this.contains(word)) {
  var index = 0;
  var letter = word[index];
  if (!this.root.children[letter]) return false;
  var curr = this.root.children[letter];
  var removePoint = this.root;
  var removeChildren = letter;
  index++;
  while (curr && index < word.length) {
    letter = word[index];
    if (curr.children[letter]) {
      if (curr.childCount() > 1 || curr.isWord) {
        removePoint = curr;
        removeChildren = letter;
      }
      curr = curr.children[letter];
      index++;
    } else if (index != word.length) {
      return false;
    }
  }
  if (curr.hasChildren()) {
    if (curr.isWord) curr.isWord = false;
    else return false;
  } else {
    delete removePoint.children[removeChildren];
  }
  return true;
  // } else return false;
};
console.log(myTrie.remove("pi"));
//var myTrie = new Trie();
//console.log(myTrie);
//console.log(myTrie.remove("v"));
//console.log(myTrie.contains("v"));
//console.log(myTrie.remove("cat"));
//console.log(myTrie.remove("cats"));
//console.log(myTrie.contains("cats"));
//console.log(myTrie.contains("cat"));
//console.log(myTrie.remove("cars"));
//console.log(myTrie.contains("cars"));
//console.log(myTrie.root.children["c"].children["a"]);
