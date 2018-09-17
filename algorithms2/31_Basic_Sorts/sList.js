function Node(val) {
  this.val = val;
  this.next = null;
}
function SList() {
  this.head = null;
}
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);
var node6 = new Node(6);
var list = new SList();
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
list.head = node1;
console.log(list);
var node11 = new Node(1);
var node22 = new Node(2);
var node33 = new Node(3);
var node44 = new Node(4);
var node55 = new Node(5);
var node66 = new Node(6);
var node77 = new Node(7);
var node88 = new Node(8);
var listRev = new SList();
node88.next = node77;
node77.next = node66;
node66.next = node55;
node55.next = node44;
node44.next = node33;
node33.next = node22;
node22.next = node11;
listRev.head = node88;
console.log(listRev);
function display(current) {
  //console.log("display() data---", current.head);
  if (current && current.head) {
    var temp = current.head,
      str = "";
    while (temp) {
      if (temp.next) {
        str += temp.val + "; ";
        temp = temp.next;
      } else {
        str += temp.val + ". ";
        temp = temp.next;
      }
    }
    console.log(str);
    return str;
  }
  return null;
}
//console.log("display() data---");
display(list);
display(listRev);
console.log("------------------------------------------");
