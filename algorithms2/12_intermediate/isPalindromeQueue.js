function isPalindromeQueue(queue) {
  console.log(
    "isPalindromeQueue() return true if its values are a palindrome (if they are same in reverse order), else return false. Restore Queue to original state before exiting. For storage, use one additional Stack. :",
    queue
  );
  displayQ(queue);
  if (queue) {
    if (!queue.head && !queue.tail) return true;
    if (queue.head && queue.tail) {
      var newStack = new SLStack();
      var node = new SLNode(queue.head.val);
      newStack.top = node;
      var temp = queue.head.next;
      while (temp) {
        node = new SLNode(temp.val);
        node.next = newStack.top;
        newStack.top = node;
        temp = temp.next;
      }
      displayS(newStack);
      temp = queue.head;
      tempS = newStack.top;
      while (temp) {
        if (temp.val === tempS.val) {
          temp = temp.next;
          tempS = tempS.next;
        } else return false;
      }
      return true;
    }
  }
  return null;
}
console.log(isPalindromeQueue(queue));
console.log("-----------------------------------------");
