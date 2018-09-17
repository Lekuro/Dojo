/*var node1 = {
  val: 1,
  next: {
    val: 3,
    next: { val: 5, next: { val: 2, next: { val: 4, next: null } } }
  }
};*/
node1.next = node3;
node3.next = node5;
node5.next = node2;
node2.next = node4;
node4.next = null;
list.head = node1;
function splitOnVal(current, value) {
  var temp = current.head;
  console.log("splitOnVal() data---", value, temp);
  display(current);
  if (current && current.head) {
    var list2 = new List();
    if (temp.val === value) {
      list2.head = temp;
      current.head = null;
      console.log("result", list, list2);
      display(list);
      display(list2);
      return list2;
    }
    while (temp.next) {
      if (temp.next.val === value) {
        list2.head = temp.next;
        temp.next = null;
        console.log("result", list, list2);
        display(list);
        display(list2);
        return list2;
      }
      temp = temp.next;
    }
  }
  console.log("result", current);
  return null;
}
splitOnVal(list, 5);
console.log("------------------------------------------");
