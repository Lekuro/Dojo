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
function isValidDlist(list) {
  console.log("isValidDlist data", list);
  display(list);
  displayBack(list);
  if (list) {
    if (!list.head && !list.tail) {
      return true;
    } else if (!list.head || !list.tail) {
      return false;
    }
    if (list.head.prev || list.tail.next) {
      //!== null
      return false;
    }
    var current = list.head;
    while (current.next) {
      if (current.next.prev === current) {
        current = current.next;
      } else {
        return false;
      }
    }
    if (current !== list.tail) {
      return false;
    }
    return true;
  }
}
console.log(isValidDlist(dlist));
console.log("------------------------------------------");
