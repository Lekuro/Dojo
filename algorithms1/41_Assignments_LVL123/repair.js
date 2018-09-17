node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.prev = node5;
node5.prev = node3;
//node4.prev = node3;
node3.prev = node2;
node2.prev = node1;
dlist.head = node1;
dlist.tail = node6;
function repair(list) {
  console.log("repair() data", list);
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
      var temp = list.head;
      while (temp.next) {
        if (temp.next.prev === temp) {
          temp = temp.next;
        } else {
          var work = temp.prev;
          break;
        }
      }
      var temp = list.tail;
      while (temp.prev) {
        if (temp.prev.next === temp) {
          temp = temp.prev;
        } else break;
      }
      work.next = temp;
      temp.prev = work;
      console.log("result", list);
      display(list);
      displayBack(list);
      return list;
    }
  }
  return null;
}
console.log(repair(dlist));
console.log("------------------------------------------");
/* var nextLength = 0;
      while (temp.next) {
        if (temp === list.tail) {
          break;
        }
        temp = temp.next;
        nextLength++;
      }
      var nextRight = temp === list.tail;
      temp = list.tail;
      var prevLength = 0;
      while (temp.prev) {
        if (temp === list.head) {
          break;
        }
        temp = temp.prev;
        prevLength++;
      }
      var prevRight = temp === list.head;
      var longer;
      if (nextRight && prevRight) {
        nextLength > prevLength ? (longer = nextLength) : (longer = prevLength);
      } else {
        longer = nextLength || prevLength;
      }
      temp = list.head;*/
