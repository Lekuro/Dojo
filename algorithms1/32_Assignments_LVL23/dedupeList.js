var node1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 1,
      next: { val: 1, next: { val: 5, next: { val: 1, next: null } } }
    }
  }
};
list.head = node1;
function dedupeList(current) {
  var temp = current.head;
  console.log("dedupeList() data---", temp);
  display(current);
  if (current && current.head) {
    while (temp) {
      var temp2 = temp;
      while (temp2.next) {
        if (temp2.next.val === temp.val) {
          temp2.next = temp2.next.next;
        } else temp2 = temp2.next;
      }
      temp = temp.next;
    }
    display(current);
    console.log("result", current.head);
    return current;
  }
  console.log("result", current);
  return null;
}
dedupeList(list, 4);
console.log("------------------------------------------");
