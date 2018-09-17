Trie.prototype.last = function() {
  var last = "";
  var temp = this.root.children;
  //console.log(Object.keys(temp).sort((a, b) => a < b)[0]);
  while (temp) {
    var letter = Object.keys(temp).sort((a, b) => a < b)[0];
    last += letter;
    if (temp[letter].isWord && !temp[letter].hasChildren()) return last;
    if (temp[letter].hasChildren()) temp = temp[letter].children;
  }
};
/* not work
Trie.prototype.last = function() {
  var last = "";
  var temp = this.root.children;
  while (temp) {
    var letterArr = Object.keys(temp);
    var letter=letterArr[letterArr.length-1]
    last += letter;
    if (temp[letter].isWord && !temp[letter].hasChildren()) return last;
    if (temp[letter].hasChildren()) temp = temp[letter].children;
  }
};*/
console.log("last:", myTrie.last());
