node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = null;
node6.prev = node5;
node5.prev = node4;
node4.prev = node3;
node3.prev = node2;
node2.prev = node1;
node1.prev = null;
dlist.head = node1;
dlist.tail = node6;
function appendValue(list, value, after) {
  console.log("appendValue() data", value, after, list);
  display(dlist);
  if (list) {
    var newNode = new dNode(value);
    if (!list.head && !list.tail) {
      list.head = newNode;
      list.tail = newNode;
      return true;
    } else if (list.tail.val === after) {
      list.tail.next = newNode;
      newNode.prev = list.tail;
      list.tail = newNode;
      return true;
    } else {
      var current = list.tail;
      while (current.prev) {
        if (current.prev.val === after) {
          newNode.next = current.prev.next;
          current.prev.next = newNode;
          newNode.prev = current.prev;
          current.prev = newNode;
          return true;
        }
        current = current.prev;
      }
    }
  }
  return false;
}
console.log(appendValue(dlist, 99, 6));
console.log("appendValue result", dlist);
display(dlist);
displayBack(dlist);
console.log("------------------------------------------");
