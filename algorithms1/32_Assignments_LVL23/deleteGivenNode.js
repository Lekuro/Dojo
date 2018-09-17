function ListNode(value) {
  this.val = value;
  this.next = null;
  this.removeSelf = function() {
    if (this.next) {
      this.val = this.next.val;
      this.next = this.next.next;
      return true;
    }
    return false;
  };
}
var node11 = new ListNode(1);
var node22 = new ListNode(2);
var node33 = new ListNode(3);
var node44 = new ListNode(4);
var node55 = new ListNode(5);
var node66 = new ListNode(6);
node11.next = node22;
node22.next = node33;
node33.next = node44;
node44.next = node55;
node55.next = node66;
list.head = node11;
console.log(list);
display(list);
list.head.next.removeSelf();
display(list);
console.log("------------------------------------------");
