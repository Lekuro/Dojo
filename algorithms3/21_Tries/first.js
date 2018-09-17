Trie.prototype.first = function() {
  var first = "";
  var temp = this.root.children;
  //console.log(Object.keys(temp).sort((a, b) => a > b)[0]);
  while (temp) {
    var letter = Object.keys(temp).sort((a, b) => a > b)[0];
    first += letter;
    if (temp[letter].isWord) return first;
    if (temp[letter].hasChildren()) temp = temp[letter].children;
  }
};
/* not work
Trie.prototype.first = function () {
  var first = "";
  var temp = this.root.children;
  while (temp) {
    var letter = Object.keys(temp)[0];
    first += letter;
    if (temp[letter].isWord) return first;
    if (temp[letter].hasChildren()) temp = temp[letter].children;
  }
};*/
console.log("first:", myTrie.first());
