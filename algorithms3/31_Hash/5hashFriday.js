console.log('------------------------------------------------------')
var tree = ['green', true, 40, 'coniferous pine']
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
    start_size=size;

    this.addKey = function (key, value) {
        var hashCode = hash(key);
        //console.log(hashCode)
        var idx = mod(hashCode, size);
        //console.log(idx);
        if (data[idx]) {
            var curr = data[idx]
            while (curr) {
                if (curr.data[0] === key) {
                    curr.data[1] = value;
                    return
                }
                curr = curr.next
            }
            var newNode = new SLNode([key, value])
            newNode.next = data[idx]
            data[idx] = newNode;
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
        while (curr) {
            if (curr.data[0] === key) return curr.data[1]
            curr=curr.next
        }
        return undefined
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
            data[idx] = data[idx].next;
            return this;
        }
        var curr = data[idx]
        while (curr) {
            if (curr.next.data[0] === key) {
                curr.next = curr.next.next;
                break
            }
            curr = curr.next;
        }
        return this;
    }
    this.removeValue = function (value) {
        for (var i = 0; i < data.length; i++) {
            if (data[i]&&data[i].data[1] == value) {
                data[i] = data[i].next;
                return this;
            }
            var curr = data[i]
            while (curr&&curr.next) {
                if (curr.next.data[1] === value) {
                    curr.next = curr.next.next;
                    break
                }
                curr = curr.next
            }
        }
        return this;
    }
    this.grow=function(){
        size = size + start_size;
        var items=this.items();
        data=[];
        for(var i=0;i<items.length;i++){
            var curr=items[i];
            while(curr){
                this.addKey(curr.data[0],curr.data[1])
                curr=curr.next;
            }
        }
    }
    this.showData=function(){
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

