node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.prev = node5;
node5.prev = node3;
node4.prev = node3;
node3.prev = node2;
node2.prev = node1;
dlist.head = node1;
dlist.tail = node6;
function loopStart(list) {
  console.log("loopStart() data", list);
  display(list);
  displayBack(list);
  if (list && list.head && list.tail) {
    if (list.head.prev) {
      console.log("result", list.head);
      display(list);
      displayBack(list);
      return list.head;
    }
    var current = list.head;
    while (current.next) {
      if (current === list.tail) {
        break;
      }
      if (current.next.prev === current) {
        current = current.next;
      } else {
        console.log("result", current.prev);
        display(list);
        displayBack(list);
        return current.prev;
      }
    }
    if (list.tail.next) {
      console.log("result", list.tail);
      display(list);
      displayBack(list);
      return list.tail;
    }
  }
  return null;
}
console.log(loopStart(dlist));
console.log("------------------------------------------");
