function SLNode(value) {
  this.val = value;
  this.next = null;
}

function SLStack() {
  this.top = null;
}
const stack = new SLStack();
const node1s = new SLNode(1);
const node2s = new SLNode(2);
const node3s = new SLNode(3);
const node4s = new SLNode(4);
node4s.next = node3s;
node3s.next = node2s;
node2s.next = node1s;
stack.top = node4s;
console.log(stack);
function displayS(stack) {
  if (stack && stack.top) {
    var temp = stack.top;
    var str = "";
    while (temp) {
      if (temp.next === null) {
        str += temp.val + ".";
      } else {
        str += temp.val + "; ";
      }
      temp = temp.next;
    }
    console.log(str);
  }
}
displayS(stack);
console.log("-----------------------------------------");
