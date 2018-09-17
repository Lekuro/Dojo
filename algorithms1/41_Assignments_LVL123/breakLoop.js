var node1 = new dNode(1);
var node2 = new dNode(2);
var node3 = new dNode(3);
var node4 = new dNode(4);
var node5 = new dNode(5);
var node6 = new dNode(6);
var dlist = new dList();
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.prev = node5;
node5.prev = node4;
node4.prev = node3;
node3.prev = node2;
node2.prev = node1;
dlist.head = node1;
dlist.tail = node6;
function breakeLoop(list) {
  console.log("breakeLoop() data", list);
  display(list);
  displayBack(list);
  if (list) {
    if (!list.head && !list.tail) {
      console.log("result", list);
      display(list);
      displayBack(list);
      return list;
    }
    if (list.head && list.tail) {
      if (list.head.prev) {
        list.head.prev = null;
      }
      if (list.tail.next) {
        list.tail.next = null;
      }
      var current = list.head;
      while (current.next) {
        if (current.next.prev === current) {
          current = current.next;
        } else {
          list.tail = current.prev;
          list.tail.next = null;
          break;
        }
      }
      console.log("result", list);
      display(list);
      displayBack(list);
      return list;
    }
  }
  return null;
}
console.log(breakeLoop(dlist));
