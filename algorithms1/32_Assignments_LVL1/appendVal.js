/*var node1 = {
  val: 1,
  next: { val: 2, next: { val: 3, next: { val: 4, next: null } } }
};
var list = { head: node1 };*/
function appendVal(list, value, after) {
  console.log("appendVal() data---", value, after, list.head);
  display(list);
  if (list) {
    var newNode = new Node(value);
    if (!list.head) {
      list.head = newNode;
      console.log("result", list.head);
      display(list);
      return true;
    }
    if (list.head) {
      var temp = list.head;
      while (temp) {
        if (temp.val === after) {
          newNode.next = temp.next;
          temp.next = newNode;
          console.log("result", list.head);
          display(list);
          return true;
        }
        temp = temp.next;
      }
      console.log("result", list.head);
      display(list);
      return false;
    }
  }
  console.log("result", current);
  return null;
}
console.log(appendVal(list, 99, 6));
console.log("------------------------------------------");
