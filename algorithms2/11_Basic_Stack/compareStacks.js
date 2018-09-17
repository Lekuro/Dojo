function compareStacks(stack1, stack2) {
  console.log(
    "compareStacks() returns whether stack1 and stack2 are equal:",
    stack1,
    stack2
  );
  display(stack1);
  display(stack2);
  if (stack1 && stack2) {
    if (!stack1.top && !stack2.top) return true;
    if (stack1.top && stack2.top) {
      var temp1 = stack1.top,
        temp2 = stack2.top;
      while (temp1 && temp2) {
        if (temp1.val === temp2.val) {
          temp1 = temp1.next;
          temp2 = temp2.next;
        } else return false;
      }
      //if (temp1 === null && temp2 === null) return true;
      return temp1 === temp2;
    }
  }
  return false;
}
//stack3.push(5);
console.log(compareStacks(stack, stack3));
display(stack);
display(stack3);
console.log("-----------------------------------------");
