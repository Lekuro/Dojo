console.log('------------------------------------------------------')
function SLNode(data) {
    //if (!(this instanceof SLNode)) return new SLNode(data);
    this.data = data;
    this.next = null;
}
/*function hashEntry(key,value){
    this.key=key;
    this.value=value;
}*/
function Hash(size) {
    //if (!(this instanceof Hash)) return new Hash();
    data = [];
    size = size;

    this.addKey = function (key, value) {
        var hashCode = hash(key);
        //console.log(hashCode)
        var idx = mod(hashCode, size);
        //console.log(idx);
        if (data[idx]) {
            var curr = data[idx]
            if (curr.data[0] === key) {
                curr.data[1] = value;
            }
        } else {
            data[idx] = new SLNode([key, value])
        }
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
        var curr = data[idx]
        if (curr&&curr.data[0] === key) return curr.data[1]
        return undefined
    }
    this.keys = function () {
        var items = this.items();
        var keys = []
        for (var i = 0; i < items.length; i++) {
            var curr = items[i];
            keys.push(curr.data[0]);
        }
        return keys
    }
    this.values = function () {
        var items = this.items();
        var values = []
        for (var i = 0; i < items.length; i++) {
            var curr = items[i];
            values.push(curr.data[1]);
        }
        return values
    }
    this.items = function () {
        return data.filter(el => el)
    }
    this.loadFactor = function () {
        return this.keys().length / size;
    }
    this.removeKey = function (key) {
        var hashCode = hash(key);
        var idx = mod(hashCode, size);
        if (data[idx].data[0] === key) {
            var removed = data[idx]
            data[idx] = data[idx].next;
            return removed.data[1];
        }
        return null;
    }
    this.removeValue = function (value) {
        for (var i = 0; i < data.length; i++) {
            if (data[i] && data[i].data[1] == value) {
                var removed = data[i]
                data[i] = data[i].next;
                return removed.data;
            }
        }
        return null;
    }
    this.grow = function () {
        size = size * 1.5;
        var items = this.items();
        data = [];
        for (var i = 0; i < items.length; i++) {
            var curr = items[i];
            this.addKey(curr.data[0], curr.data[1])
        }
    }
    this.showData = function () {
        console.log(data)
    }
}
var treeOne = new Hash(15);
treeOne.addKey('color', 'green');
treeOne.addKey('hasTrunk', true);
treeOne.addKey('numBranches', 40);
treeOne.addKey('type', 'Coniferous Pine');
treeOne.addKey('type', 'Fir tree');
console.log(treeOne);
console.log(treeOne.getKey('color'));
console.log(treeOne.getKey('hasTrunk'));
console.log(treeOne.getKey('numBranches'));
console.log(treeOne.getKey('type'));
console.log(treeOne.getKey('colo'));
console.log(treeOne.keys())
console.log(treeOne.values())
console.log(treeOne.items())
console.log(treeOne.removeKey('color'))
console.log(treeOne.keys())
console.log(treeOne.values())
console.log(treeOne.items())
console.log(treeOne.removeValue(true))
console.log(treeOne.keys())
console.log(treeOne.values())
console.log(treeOne.items())
console.log(treeOne.loadFactor())
treeOne.showData()
treeOne.grow()
treeOne.showData()
console.log(treeOne.keys())
console.log(treeOne.values())
console.log(treeOne.items())
console.log(treeOne.loadFactor())

