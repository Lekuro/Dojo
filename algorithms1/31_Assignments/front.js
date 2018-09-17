var node1 = { val: 1, next: { val: 2, next: { val: 3, next: null } } };
var list = { head: node1 };
function front(pointer) {
  //console.log(pointer);
  if (pointer.head === null) {
    return null;
  }
  //console.log(pointer.head.val);
  return pointer.head.val;
}
console.log(front(list));
