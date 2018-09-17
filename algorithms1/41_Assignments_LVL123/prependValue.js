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
function prependValue(list, value, before) {
  console.log("prependValue data", value, before, list);
  display(dlist);
  if (!list) {
    throw "Error!";
  }
  var newNode = new dNode(value);
  if (!list.head && !list.tail) {
    list.head = newNode;
    list.tail = newNode;
    return true;
  } else if (list.head.val === before) {
    list.head.prev = newNode;
    newNode.next = list.head;
    list.head = newNode;
    return true;
  } else {
    var current = list.head;
    while (current.next) {
      if (current.next.val === before) {
        newNode.prev = current; //.next.prev
        current.next.prev = newNode;
        newNode.next = current.next;
        current.next = newNode;
        console.log(newNode);
        console.log("prependValue result", list);
        display(list);
        displayBack(list);
        return true;
      }
      current = current.next;
    }
  }
  return false;
}
console.log(prependValue(dlist, 99, 7));
console.log("prependValue result", dlist);
display(dlist);
displayBack(dlist);
console.log("------------------------------------------");
/*class
function prependValue(list, value, before) {
  if (!list) {
    throw "Error: List not exist!";
  }
  var newNode = new dNode(value);
  if (!list.head && !list.tail) {
    list.head = newNode;
    list.tail = newNode;
    return true;
  } else if (list.head.val === before) {
    var temp = list.head;
    list.head = newNode;
    newNode.next = temp;
    temp.prev = newNode;
    return true;
  } else {
    var current = list.head;
    while (current.next) {
      if (current.next.val === before) {
        var temp = current.next;
        current.next = newNode;
        temp.prev = newNode;
        newNode.prev = current;
        newNode.next = temp;
        return true;
      }
      current = current.next;
    }
  }
  return false;
}*/
