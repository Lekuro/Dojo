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
const node5s = new SLNode(5);
const node6s = new SLNode(6);
const node7s = new SLNode(7);
const node8s = new SLNode(8);
node1s.next = node2s;
node2s.next = node3s;
node3s.next = node4s;
node4s.next = node5s;
node5s.next = node6s;
node6s.next = node7s;
node7s.next = node8s;
stack.top = node1s;
/*node4s.next = node3s;
node3s.next = node2s;
node2s.next = node1s;
stack.top = node4s;*/
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
const stack3 = new SLStack();
const node11 = new SLNode(-1);
const node22 = new SLNode(-2);
const node33 = new SLNode(3);
const node44 = new SLNode(4);
node44.next = node33;
node33.next = node22;
node22.next = node11;
stack3.top = node44;
console.log(stack3);
displayS(stack3);
console.log("-----------------------------------------");
