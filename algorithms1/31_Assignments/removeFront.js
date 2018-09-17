//var node1 = { val: 1, next: { val: 2, next: { val: 3, next: null } } };
//var list = { head: node1 };
function removeFront(pointer) {
  //console.log(pointer);
  if (pointer.head === null) {
    return null;
  }
  pointer.head = pointer.head.next;
  return pointer;
}
console.log(removeFront(list));
console.log(front(list));
console.log(removeFront(list));
console.log(front(list));
console.log(removeFront(list));
console.log(front(list));
console.log(removeFront(list));
console.log(front(list));
console.log(removeFront(list));
console.log(front(list));
console.log(removeFront(list));
console.log(front(list));
