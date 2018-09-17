console.log('------------------------------------------------------')
var tree = ['green', true, 40, 'coniferous pine']
function Hash(size) {
    //if (!(this instanceof Hash)) return new Hash();
    data = [];
    size = size;

    this.addKey = function (key, value) {
        var hashCode = hash(key);
        //console.log(hashCode)
        var idx = mod(hashCode, size);
        //console.log(idx);
        data[idx] = [key, value];
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
        var idx = mod(hashCode, size);
        return (data[idx] && data[idx][0] === key) ? data[idx][1] : data[idx]
    }
    this.keys = function () {
        console.log(data)
        return data.filter(el=>el).map(el=>el[0]);
    }
    this.values=function(){
        return data.filter(el=>el).map(el=>el[1])
    }
    this.items=function(){
        return data.filter(el=>el)
    }
}
var treeOne = new Hash(15);
treeOne.addKey('color', 'green');
treeOne.addKey('hasTrunk', true);
treeOne.addKey('numBranches', 40);
treeOne.addKey('type', 'Coniferous Pine');
console.log(treeOne);
console.log(treeOne.getKey('color'));
console.log(treeOne.getKey('hasTrunk'));
console.log(treeOne.getKey('numBranches'));
console.log(treeOne.getKey('type'));
console.log(treeOne.getKey('colo'));
console.log(treeOne.keys())
console.log(treeOne.values())
console.log(treeOne.items())

