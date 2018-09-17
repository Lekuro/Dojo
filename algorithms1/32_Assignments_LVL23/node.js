function Node(val) {
  this.val = val;
  this.next = null;
}
function List() {
  this.head = null;
}
Node.prototype.removeSelf = function() {
  if (this.next) {
    this.val = this.next.val;
    this.next = this.next.next;
    return true;
  }
  return false;
};

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);
var node6 = new Node(6);
var list = new List();
console.log(list);
console.log("------------------------------------------");

function display(temp) {
  temp = temp.head;
  var str = "";
  while (temp) {
    str += temp.val + "; ";
    temp = temp.next;
  }
  console.log(str);
}
