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
function reverse(list) {
  console.log("reverse() data", list);
  display(list);
  if (list && list.head && list.tail) {
    var tempT = list.tail;
    var tempH = list.head;
    while (tempH) {
      if (tempH === tempT) {
        break;
      }
      if (tempH.next === tempT && tempT.prev === tempH) {
        var temp = tempT.val;
        tempT.val = tempH.val;
        tempH.val = temp;
        break;
      }
      var temp = tempT.val;
      tempT.val = tempH.val;
      tempH.val = temp;
      tempH = tempH.next;
      tempT = tempT.prev;
    }
    console.log("result", list);
    display(list);
    displayBack(list);
    return list;
  }
  return null;
}
console.log(reverse(dlist));
console.log("------------------------------------------");
