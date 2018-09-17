function dNode(value) {
  /*if (!(this instanceof dlNode)) {
    return new dlNode(value);
  }*/
  this.val = value;
  this.prev = null;
  this.next = null;
}
function dList() {
  /*if (!(this instanceof dList)) {
    return new dList();
  }*/
  this.head = null;
  this.tail = null;
}
var node1 = new dNode(1);
var node2 = new dNode(2);
var node3 = new dNode(3);
var node4 = new dNode(4);
var node5 = new dNode(5);
var node6 = new dNode(6);
var dlist = new dList();

function display(temp) {
  temp = temp.head;
  var str = "";
  while (temp) {
    str += temp.val + "; ";
    temp = temp.next;
  }
  console.log(str);
}
function displayBack(temp) {
  temp = temp.tail;
  //console.log(temp);
  var str = "";
  while (temp) {
    str += temp.val + "; ";
    //console.log(str, temp);
    temp = temp.prev;
  }
  console.log(str);
}
