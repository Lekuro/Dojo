//var node1 = { val: 1, next: { val: 2, next: { val: 3, next: null } } };
//var list = { head: node1 };
function display(current) {
  //console.log("display() data---", current.head);
  if (current && current.head) {
    var temp = current.head,
      str = "";
    while (temp) {
      str += temp.val + "; ";
      temp = temp.next;
    }
    console.log(str);
    return str;
  }
  return null;
}
console.log("display() data---");
display(list);
console.log("------------------------------------------");
