function reverse(list) {
  console.log("reverse() data", list);
  display(list);
  if (list && list.head && list.tail) {
    var temp = list.tail;
    list.tail = list.head;
    list.head = temp;
    var tempH = list.head;
    while (tempH) {
      temp = tempH.prev;
      tempH.prev = tempH.next;
      tempH.next = temp;
      tempH = tempH.next;
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
