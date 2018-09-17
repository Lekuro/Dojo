function Node(val) {
  this.val = val;
  this.next = null;
}
function List() {
  this.head = null;
}
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);
var node6 = new Node(6);
var list = new List();
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
list.head = node1;
console.log(list);
console.log("------------------------------------------");
