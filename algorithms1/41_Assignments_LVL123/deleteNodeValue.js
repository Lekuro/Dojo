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
/*function deleteNode(list, value) {
  if (list) {
    console.log("deleteNode() data---", value, list);
    display(list);
    if (list.head && list.tail) {
      var temp = list.head;
      if (temp.val === value) {
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
        if (temp.next.val === value) {
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
      if (temp.next.val === value) {
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
console.log(deleteNode(dlist, 1));*/
/*function removeLastDLNode(list) {
  display(list);
  displayBack(list);
  if (list.head && list.tail) {
    if (list.head.next === null) {
      list.head = null;
      list.tail = null;
    } else {
      var temp = list.tail;
      list.tail.prev.next = null;
      list.tail = list.tail.prev;
      temp.prev = null;
    }
  }
  display(list);
  displayBack(list);
  return list;
}

console.log(removeLastDLNode(dlist));*/
function removeDLNodeByVal(list, val) {
  if (list.head && list.tail) {
    if (list.head.val === val) {
      if (list.head.next === null) {
        list.head = null;
        list.tail = null;
      } else {
        var temp = list.head;
        list.head = list.head.next;
        list.head.prev = null;
        temp.next = null;
      }
    } else {
      temp = list.head.next;
      while (temp) {
        if (temp.val === val) {
          if (temp.next) {
            temp.prev.next = temp.next;
            temp.next.prev = temp.prev;
            temp.prev = null;
            temp.next = null;
            break;
          } else {
            temp.prev.next = null;
            list.tail = temp.prev;
            temp.prev = null;
          }
        }
        temp = temp.next;
      }
    }
  }
  display(list);
  displayBack(list);
  return list;
}
console.log(removeDLNodeByVal(dlist, 5));
console.log("------------------------------------------");
