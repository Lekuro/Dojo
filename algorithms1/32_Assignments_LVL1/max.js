//var node1 = { val: 1, next: { val: 2, next: { val: 3, next: null } } };
//var list = { head: node1 };
function max(current) {
  console.log("max() data---", current.head);
  if (current && current.head) {
    var temp = current.head.next,
      max = current.head.val;
    while (temp) {
      if (temp.val > max) max = temp.val;
      temp = temp.next;
    }
    console.log("result", max);
    return max;
  }
  console.log("result", current);
  return null;
}
max(list);
console.log("------------------------------------------");
