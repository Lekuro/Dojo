//var node1 = { val: 1, next: { val: 2, next: { val: 3, next: null } } };
//var list = { head: node1 };
var value0 = 0,
  value = 10;
function contains(pointer, value) {
  console.log(pointer);
  var newPointer = pointer.head;
  while (newPointer !== null) {
    if (newPointer.val === value) {
      return true;
    }
    newPointer = newPointer.next;
  }
  return false;
}
console.log(contains(list, value0));
console.log(contains(list, value));
