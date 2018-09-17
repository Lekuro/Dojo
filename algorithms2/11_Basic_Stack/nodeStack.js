function SLNode(value) {
  this.val = value;
  this.next = null;
}

function SLStack() {
  this.top = null;
}
const stack = new SLStack();
const node1 = new SLNode(1);
const node2 = new SLNode(2);
const node3 = new SLNode(3);
const node4 = new SLNode(4);
node4.next = node3;
node3.next = node2;
node2.next = node1;
stack.top = node4;
console.log(stack);
function display(stack) {
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
display(stack);
const stack3 = new SLStack();
const node11 = new SLNode(1);
const node22 = new SLNode(2);
const node33 = new SLNode(3);
const node44 = new SLNode(4);
node44.next = node33;
node33.next = node22;
//node22.next = node11;
stack3.top = node44;
console.log(stack3);
display(stack3);
console.log("-----------------------------------------");
