function copyStack(stack) {
  console.log(
    "copyStack() create a new second Stack and copy values from first Stack into second Stack, so they pop in same order. Use only one Queue for additional storage, and only public Stack/Queue interfaces:",
    stack
  );
  displayS(stack);
  if (stack) {
    var newStack = new SLStack();
    if (!stack.top) return newStack;
    if (stack.top) {
      var newQueue = new SLQueue();
      var node = new SLNode(stack.top.val);
      newQueue.head = node;
      newQueue.tail = node;
      var temp = stack.top.next;
      while (temp) {
        node = new SLNode(temp.val);
        node.next = newQueue.head;
        newQueue.head = node;
        temp = temp.next;
      }
      displayQ(newQueue);
      temp = newQueue.head;
      node = new SLNode(temp.val);
      newStack.top = node;
      temp = temp.next;
      while (temp) {
        node = new SLNode(temp.val);
        node.next = newStack.top;
        newStack.top = node;
        temp = temp.next;
      }
      console.log("result:", newStack);
      displayS(newStack);
      return newStack;
    }
  }
  return null;
}
console.log(copyStack(stack));
console.log("-----------------------------------------");
