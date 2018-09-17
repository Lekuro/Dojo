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
function displayQ(queue) {
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
displayQ(queue);
console.log("-----------------------------------------");
