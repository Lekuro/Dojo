Trie.prototype.contains = function(word) {
    var index = 0;
    letter=word[index];
    var curr = this.root.children[letter];
    while (curr&&index<word.length) {
        letter=word[index];
      if (curr.children[letter]) {
        curr = curr.children[letter];
        index++;
      } else return false;
    }
    return (!!curr&&curr.isWord);
  };
  console.log("contain:", myTrie.contains("cat"));
  