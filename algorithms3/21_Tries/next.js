Trie.prototype.nextTrie = function(str) {
  console.log("next:", str, this.displayTrie());
  function searchWord(temp) {
    for (key in temp) {
      word += temp[key].letter;
      if (temp[key].childCount() > 1) partWord = word;
      if (temp[key].isWord) result.push(word);
      if (temp[key].hasChildren()) searchWord(temp[key].children);
      else word = partWord;
    }
  }
  var result = [];
  if (this.root) {
    var word = "";
    var partWord = "";
    var node = this.root;
    var index = 0;
    while (str[index]) {
      if (node.children[str[index]]) {
        node = node.children[str[index]];
        word += str[index];
        index++;
      } else break;
    }
    if (!index) {
      if (node.hasChildren()) {
        var letters = [];
        for (key in node.children) letters.push(key);
        letters = letters.sort((a, b) => a > b);
        //console.log(letters);
        for (var i = 0; i < letters.length; i++) {
          if (str[index] <= letters[i]) {
            //console.log(letters[i]);
            word += letters[i];
            node = node.children[letters[i]];
            index++;
            break;
          }
        }
      }
    }
    if (index) {
      if (node.isWord) result.push(word);
      if (node.childCount() > 1) partWord = word;
      if (node.hasChildren()) searchWord(node.children);
      return result.sort((a, b) => a > b)[0];
    }
  }
  return null;
};
console.log("next:", myTrie.nextTrie("o"));
