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
function deleteNode(list, node) {
  if (list && node) {
    console.log("deleteNode() data---", node, list);
    display(list);
    if (list.head && list.tail) {
      var temp = list.head;
      if (temp === node) {
        list.head = temp.next;
        list.head.prev = null;
        temp.next = null;
        console.log("result", list.head);
        display(list);
        displayBack(list);
        return temp;
      }
      while (temp.next && temp.next.next) {
        //console.log(temp.next);
        if (temp.next === node) {
          var temp2 = temp.next;
          temp.next = temp.next.next;
          temp.next.prev = temp2.prev;
          temp2.next = null;
          temp2.prev = null;
          console.log("result", list.head);
          display(list);
          displayBack(list);
          return temp2;
        }
        temp = temp.next;
      }
      if (temp.next === node) {
        temp = temp.next;
        list.tail = temp.prev;
        list.tail.next = null;
        temp.prev = null;
        console.log("result", list.head);
        display(list);
        displayBack(list);
        return temp;
      }
    }
    console.log("result", list.head);
    display(list);
    displayBack(list);
    return null;
  }
}
console.log(deleteNode(dlist, node6));
console.log("------------------------------------------");
