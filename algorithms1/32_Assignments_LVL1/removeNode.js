function removeNode(current, value) {
  console.log("removeNode() data---", value, current.head);
  display(current);
  if (current && current.head) {
    var temp = current.head;
    if (temp.val === value) {
      current.head = temp.next;
      temp.next = null;
      console.log("result", current.head);
      display(current);
      return temp;
    }
    while (temp.next) {
      //console.log(temp.next);
      if (temp.next.val === value) {
        var temp2 = temp.next;
        temp.next = temp.next.next;
        temp2.next = null;
        console.log("result", current.head);
        display(current);
        return temp2;
      }
      temp = temp.next;
    }
  }
  console.log("result", current);
  return null;
}
console.log(removeNode(list, 2));

/*function removeLastSLNode(list) {
  display(list);
  if (list.head) {
    if (list.head.next) {
      var prev = list.head;
      var temp = list.head.next;
      while (temp) {
        if (temp.next === null) {
          prev.next = null;
        } else {
          prev = prev.next;
        }
        temp = temp.next;
      }
    } else {
      list.head = null;
    }
  }
  display(list);
  return list;
}
console.log(removeLastSLNode(list));
console.log(removeLastSLNode(list));
console.log(removeLastSLNode(list));
console.log(removeLastSLNode(list));
console.log(removeLastSLNode(list));
console.log(removeLastSLNode(list));
console.log(removeLastSLNode(list));*/
console.log("------------------------------------------");
