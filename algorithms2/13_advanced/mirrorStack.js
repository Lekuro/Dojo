function mirrorStack(stack) {
  console.log(
    "mirrorStack() Mirror a Stack’s existing values onto itself, in reverse. Sending Stack (1,3,5,7) to your function should change it to (1,3,5,7,7,5,3,1). Use one other Stack or Queue (not both) for storage.:",
    stack
  );
  displayS(stack);
  if (stack.top) {
    var newStack = new SLStack();
    var node = new SLNode(stack.top.val);
    newStack.top = node;
    var temp = stack.top.next;
    while (temp) {
      node = new SLNode(temp.val);
      node.next = newStack.top;
      newStack.top = node;
      temp = temp.next;
    }
    displayS(newStack);
    var temp = newStack.top;
    while (temp) {
      node = new SLNode(temp.val);
      node.next = newStack.top;
      newStack.top = node;
      temp = temp.next;
    }
    displayS(newStack);
    stack.top = newStack.top;
    newStack.top = null;
    console.log("result", stack);
    displayS(stack);
    return stack;
  }
  return null;
}
console.log(mirrorStack(stack));
console.log("-----------------------------------------");
