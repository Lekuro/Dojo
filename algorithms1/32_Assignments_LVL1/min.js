//var node1 = { val: 1, next: { val: 2, next: { val: 3, next: null } } };
//var list = { head: node1 };
function min(current) {
  console.log("min() data---", current.head);
  if (current && current.head) {
    var temp = current.head.next,
      min = current.head.val;
    while (temp) {
      if (temp.val < min) min = temp.val;
      temp = temp.next;
    }
    console.log("result", min);
    return min;
  }
  console.log("result", current);
  return null;
}
min(list);
console.log("------------------------------------------");
