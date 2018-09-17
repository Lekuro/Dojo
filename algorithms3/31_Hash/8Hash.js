console.log('------------------------------------------------------')
function SLNode(data) {
    //if (!(this instanceof SLNode)) return new SLNode(data);
    this.data = data;
    this.next = null;
}
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
            while (curr) {
                if (curr.data[0] === key) {
                    if (curr.data[1] === value) return
                }
                if (!curr.next) var temp = curr;
                curr = curr.next
            }
            var newNode = new SLNode([key, value])
            temp.next = newNode;
        } else {
            data[idx] = new SLNode([key, value])
        }
    }
    this.isEmpty = function () {
        return data.length === 0
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
        var result = []
        while (curr) {
            if (curr.data[0] === key) result.push(curr.data[1])
            curr = curr.next
        }
        if (result.length === 0) return null
        else if (result.length === 1) return result[0]
        else return result
    }
    this.keys = function () {
        var items = this.items();
        var keys = []
        for (var i = 0; i < items.length; i++) {
            var curr = items[i];
            while (curr) {
                keys.push(curr.data[0]);
                curr = curr.next
            }
        }
        return keys
    }
    this.values = function () {
        var items = this.items();
        var values = []
        for (var i = 0; i < items.length; i++) {
            var curr = items[i];
            while (curr) {
                values.push(curr.data[1]);
                curr = curr.next
            }
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
            var curr = data[idx];
            data[idx] = null;
            var result = []
            while (curr) {
                if (curr.data[1]) result.push(curr.data[1])
                curr = curr.next;
            }
            if (result.length > 1) return result
            else return result[0]
        }
        return null;
    }
    this.removeValue = function (value) {
        for (var i = 0; i < data.length; i++) {
            if (data[i] && data[i].data[1] === value) {
                var removed = data[i]
                data[i] = data[i].next;
                return removed;
            }
            var curr = data[i]
            while (curr && curr.next) {
                if (curr.next.data[1] === value) {
                    removed = curr.next;
                    curr.next = curr.next.next;
                    return removed;
                }
                curr = curr.next
            }
        }
        return null;
    }
    this.grow = function () {
        var items = this.items();
        size = size * 1.5 ^ 0;
        data = [];
        for (var i = 0; i < items.length; i++) {
            var curr = items[i];
            while (curr) {
                this.addKey(curr.data[0], curr.data[1])
                curr = curr.next;
            }
        }
    }
    this.showData = function () {
        console.log(size, data)
    }
    this.selectKeys = function (keyArr) {
        console.log('selestKeys() data:',keyArr)
        var items = this.items();
        var keys=[]
        for(var i=0;i<items.length;i++){
            for(var j=0;j<keyArr.length;j++){
                if(items[i].data[0]===keyArr[j])break;
            }
            if(j===keyArr.length)keys.push(items[i].data[0])
        }
        //console.log(keys)
        keys.forEach(el=>this.removeKey(el))
        /*for(var i=0;i<keys.length;i++){
            this.removeKey(keys[i])
        }*/
        return this;
    }
}
var treeOne = new Hash(20);
treeOne.showData()
console.log(treeOne.isEmpty())
treeOne.addKey('color', 'green');
console.log(treeOne.isEmpty())
treeOne.addKey('hasTrunk', true);
treeOne.addKey('numBranches', 40);
treeOne.addKey('type', 'Coniferous Pine');
treeOne.addKey('type', 'Fir tree');
treeOne.addKey('type', 'Apple-tree');
treeOne.showData()
//console.log(treeOne.selectKeys(['color','type']))
console.log(treeOne.selectKeys(['color','hasTrunk']))
console.log(treeOne.keys())
console.log(treeOne.values())
console.log(treeOne.items())
console.log(treeOne.loadFactor())
//console.log(treeOne);
console.log(treeOne.getKey('color'));
console.log(treeOne.getKey('hasTrunk'));
console.log(treeOne.getKey('numBranches'));
console.log(treeOne.getKey('type'));
console.log(treeOne.getKey('colo'));
console.log(treeOne.keys())
console.log(treeOne.values())
console.log(treeOne.items())
console.log(treeOne.loadFactor())
console.log(treeOne.removeKey('color'))
console.log(treeOne.keys())
console.log(treeOne.values())
console.log(treeOne.items())
console.log(treeOne.loadFactor())
console.log(treeOne.removeValue('Apple-tree'))
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

