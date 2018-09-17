Trie.prototype.nextTrie = function(str) {
  console.log("next:", str, this);
  var index = 0;
  var letter = word[index];
  var curr = this.root.children[letter];
  index++;
  while (!curr) {
    data = [];
    for (var key in this.root.children) {
      data.push({ node: this.root.children[key], currString: "" });
    }
    return _next(data);
  }
  while (curr && index < word.length) {
    letter = word[index];
    if (curr.children[letter]) {
      curr = curr.children[letter];
      index++;
    } else break;
  }
  if (curr.isWord) return word;
  data = [];
  for (var key in curr.children) {
    data.push({
      node: curr.children[key],
      currString: word.substring(0, index)
    });
  }
  console.log(data);
  return _next(data);

  function _next(data) {
    console.log(data);
    var currData = data.shift();
    var node = currData.node;
    var currString = currData.currString;
    if (node.isWord) {
      return currString + node.letter;
    } else {
      for (var key in node.children) {
        data.push({
          node: node.children[key],
          currString: currString + node.letter
        });
      }
      return _next(data);
    }
  }
};
console.log("next:", myTrie.nextTrie("c"));
