function isSortedStack(stack) {
  console.log(
    "isSortedStack() returns a boolean to represent whether the stack’s values are sorted from smallest (at Stack top) to largest (at bottom).:",
    stack
  );
  displayS(stack);
  if (stack.top) {
    var beforeVal = stack.top.val;
    var temp = stack.top.next;
    while (temp) {
      if (beforeVal <= temp.val) {
        beforeVal = temp.val;
        temp = temp.next;
      } else return false;
    }
    return true;
  }
  return null;
}
console.log(isSortedStack(stack));
console.log("-----------------------------------------");
