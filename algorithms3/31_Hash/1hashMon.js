var tree = ['green', true, 40, 'coniferous pine']
function Hash(size) {
  //if (!(this instanceof Hash)) return new Hash();
  this.data = [];
  this.size = size;

  /*this.addKey = function (key, value) {
    var hashCode = hash(key);
    var idx = hashCode % this.size;
    console.log(idx);
    this.data[idx] = [key, value];
  }
  function hash(str) {
    var hashCode = 0;
    for (var i = 0; i < str.length; i++) { 
      hashCode += str.charCodeAt(i) 
      //console.log(str.charCodeAt(i))
    }
    console.log(hashCode)
    return hashCode;
  }*/
  this.addKey = function (key, value) {
    var hashCode = hash(key);
    console.log(hashCode)
    var idx = mod(hashCode, this.size);
    console.log(idx);
    this.data[idx] = [key, value];
  }
  function hash(key) {
    var hashCode = 0;
    if (key.length === 0) return hashCode;
    for (var i = 0; i < key.length; i++) {
      char = key.charCodeAt(i);
      hashCode = ((hashCode << 5) - hashCode) + char;
      hashCode &= hashCode;//Convert-->32b int
    }
    //console.log(hashCode)
    return hashCode;
  }
  function mod(input, div) { return (input % div + div) % div }
  this.getKey = function (key) {
    var hashCode = hash(key);
    var idx = mod(hashCode, this.size);//hashCode % this.size;
    return (this.data[idx] && this.data[idx][0] === key) ? this.data[idx][1] : this.data[idx]
  }
}
var treeOne = new Hash(15);
treeOne.addKey('color', 'green');
treeOne.addKey('hasTrunk', true);
treeOne.addKey('numBranches', '40');
treeOne.addKey('type', 'Coniferous Pine');
console.log(treeOne);
console.log(treeOne.getKey('color'));
console.log(treeOne.getKey('hasTrunk'));
console.log(treeOne.getKey('numBranches'));
console.log(treeOne.getKey('type'));

