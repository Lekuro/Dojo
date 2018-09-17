/*var node1 = {
  val: 5,
  next: {
    val: 6,
    next: { val: 4, next: { val: 2, next: { val: 1, next: null } } }
  }
};
list.head = node1;*/

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);
var node6 = new Node(6);
var list = new List();

node2.next = node5;
node5.next = node4;
node4.next = node1;
node1.next = node3;
node3.next = node6;
list.head = node2;
function partition(current, value) {
  console.log("partition() data---", value, current);
  display(current);
  if (current && current.head) {
    var temp = current.head,
      temp2;
    while (temp.next) {
      if (temp.next.val < value) {
        //  console.log(temp.val, temp.next.val);
        temp2 = temp.val;
        temp.val = temp.next.val;
        temp.next.val = temp2;
        // console.log(temp.val, temp.next.val);
      }
      temp = temp.next;
    }
    //display(current);
    var bad = true;
    while (bad) {
      bad = false;
      temp = current.head;
      while (temp && temp.next) {
        if (temp.val > value && temp.val > temp.next.val) {
          //console.log(temp.val, temp.next.val);
          temp2 = temp.val;
          temp.val = temp.next.val;
          temp.next.val = temp2;
          // console.log(temp.val, temp.next.val);
          bad = true;
        }
        temp = temp.next;
      }
    }
    display(current);
    console.log("partition() result---", current.head);
    return current;
  }
  console.log("result", current);
  return null;
}
partition(list, 4);
console.log("------------------------------------------");
