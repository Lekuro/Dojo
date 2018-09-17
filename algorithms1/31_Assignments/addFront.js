//var node1 = { val: 1, next: { val: 2, next: { val: 3, next: null } } };
//var list = { head: node1 };
var value0 = 0,
  value = -1;
function addFront(pointer, value) {
  console.log(pointer);
  var node0 = { val: value, next: pointer.head };
  pointer.head = node0;
  console.log(pointer.head);
  return pointer.head;
}
addFront(list, value0);
console.log(front(list));
addFront(list, value);
console.log(front(list));
