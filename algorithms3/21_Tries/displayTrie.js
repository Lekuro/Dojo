Trie.prototype.displayTrie = function() {
  var result = [];
  var curr = this.root;
  if (curr.hasChildren()) {
    curr = curr.children;
    for (key in curr) {
      word = curr[key].letter;
      var partWord = "";
      //console.log(temp[key]);
      if (curr[key].isWord) result.push(word);
      if (curr[key].hasChildren()) searchWord(curr[key].children);
    }
  }
  function searchWord(temp) {
    //console.log(temp);
    for (key in temp) {
      word += temp[key].letter;
      //console.log(temp[key]);
      if (temp[key].childCount() > 1) partWord = word;
      if (temp[key].isWord) result.push(word);
      if (temp[key].hasChildren()) searchWord(temp[key].children);
      else word = partWord;
    }
  }
  return result;
};
console.log("display:", myTrie.displayTrie());
