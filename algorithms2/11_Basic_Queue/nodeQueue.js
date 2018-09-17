function SLNode(value) {
  this.val = value;
  this.next = null;
}

function SLQueue() {
  this.head = null;
  this.tail = null;
}
const queue = new SLQueue();
const node1 = new SLNode(1);
const node2 = new SLNode(2);
const node3 = new SLNode(3);
const node4 = new SLNode(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
queue.head = node1;
queue.tail = node4;
console.log(queue);
function display(queue) {
  if (queue && queue.head && queue.tail) {
    var temp = queue.head;
    var str = "";
    while (temp) {
      if (temp === queue.tail) {
        str += temp.val + ".";
      } else {
        str += temp.val + "; ";
      }
      temp = temp.next;
    }
    console.log(str);
  }
}
display(queue);
const queue3 = new SLQueue();
const node11 = new SLNode(5);
const node22 = new SLNode(2);
const node33 = new SLNode(3);
const node44 = new SLNode(4);
node44.next = node11;
node22.next = node33;
node33.next = node44;
queue3.head = node22;
queue3.tail = node11;
console.log(queue3);
display(queue3);
console.log("-----------------------------------------");
