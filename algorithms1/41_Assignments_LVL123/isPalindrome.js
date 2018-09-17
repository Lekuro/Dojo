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
var node11 = new dNode(1);
var node22 = new dNode(2);
var node33 = new dNode(3);
node1.next = node2;
node2.next = node3;
node3.next = node33;
node33.next = node22;
node22.next = node11;
node11.prev = node22;
node22.prev = node33;
node33.prev = node3;
node3.prev = node2;
node2.prev = node1;
dlist.head = node1;
dlist.tail = node11;
function isPalindrome(list) {
  console.log("isPalindrome data", list);
  display(list);
  if (list) {
    if (list.head && list.tail) {
      var tempT = list.tail;
      var tempH = list.head;
      while (tempH && tempT) {
        if (tempH === tempT) return true;
        if (tempH.next === tempT && tempT.prev === tempH) return true;
        if (tempH.val === tempT.val) {
          tempH = tempH.next;
          tempT = tempT.prev;
        } else return false;
      }
    }
  }
  return false;
}
console.log(isPalindrome(dlist));
//console.log("isPalindrome result", dlist);
//display(dlist);
//displayBack(dlist);
console.log("------------------------------------------");
